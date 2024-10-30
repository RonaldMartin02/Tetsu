
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import './scss/Signup.scss';
import Auth from '../utils/auth';
import ErrorModal from '../components/ErrorModal';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

const Signup = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  })
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }
  const [addUser, { error, data }] = useMutation(ADD_USER)
  const [err, setErr] = useState(null); // State for error message
  const [errType, setErrType] = useState(null); // State for error message
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const closeModal = () => {
    setShowModal(false);
    setErr(null);
  };
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (!validatePassword(formState.password)) {
      setErr("Password must contain at least 8 characters, 1 uppercase letter, 1 number, and 1 symbol.");
      setErrType("Password");
      setShowModal(true);
      return; // Prevent form submission if password is invalid
    }
    if (!validateEmail(formState.email)) {
      setErr("Please enter a valid email address.");
      setErrType("Email");
      setShowModal(true);
      return; // Prevent form submission if email is invalid
    }

    try {
      const { data } = await addUser({ variables: { ...formState } })
      console.log(data.ADD_USER)
      Auth.login(data.addUser.token)
    } catch (e) {
      console.error(e)
      setErr(e.message); // Set error message from API response
      setShowModal(true);
    }
  }
  return (
    <div className="signup">
      {showModal && err && (
        <ErrorModal errorMessage={err} onClose={closeModal} errorType={errType} />
      )}
      <div className="signup_card">
        <h4 className="signup_card_header">Sign Up</h4>
        <div className="signup_card_body">
          {data ? (
            console.log(4),
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="signup_card_formInput"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="signup_card_formInput"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="signup_card_formInput"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="signup_btn"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && (
            console.log("uh oh, bro..."),
            <div className="signup_errorMsg">
              {error.message}
            </div>
          )}
        </div>
      </div>Already have an account?
      <Link to='/login'>Login here.</Link>
    </div>
  );
};

export default Signup;