import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './scss/LoggedOutHeader.scss';
export default function Header() {
  
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState('');
   const [matches, setMatches] = useState(window.matchMedia("(max-width: 1000px)").matches);

  useEffect(() => {
    window.matchMedia("(max-width: 768px)").addListener((e) => {
      setMatches(e.matches);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const handleChange = (event) => {
    setsearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a search term.');
      return;
    }
    navigate(`/Search/${searchTerm}`);
  };



  if (!matches) {
    console.log("rendering logged out header")
    return (
         <header className='Header'>
         <div className='Header_Search'>
             <input
             className='Header_Search_Input'
               type="text"
               value={searchTerm}
               onChange={handleChange}
               placeholder="Search..."
             />
             <button className='Header_Search_Btn' onClick={handleSearch}>Search</button>
           </div>
           <div >

           <Link to='/'>
           <h1 className='Header_GizmoGaming'>Gizmo Gaming</h1>
                </Link>
           </div>
         <div className='menu-items'>
          <Link to ='/Login'><button>Log In</button></Link>
          <Link to ='/Signup'><button>Sign Up</button></Link>
           <Link to ='/Aboutus'><button>About Us</button></Link>
           </div>
           </header>
           ) 
  } else {
    console.log("rendering logged out header Modile")
    return (
      <header className='Header'>
        
        
              <div className='Header_Nav' >
                <Link to='/'>
           <h1 className='Header_GizmoGaming'>Gizmo Gaming</h1>
                </Link>
         <button onClick={toggleMenu} className="menu-button">
         &#9776; {/* Hamburger Icon */}
       </button>
         </div>

       <div className='Header_Btns'>
       {isOpen && (
         <div className="menu-items">
          <Link to ='/Login'><button>Log In</button></Link>
          <Link to ='/Signup'><button>Sign Up</button></Link>
          <Link to ='/Aboutus'><button>About Us</button></Link>
         </div>
       )
       }
       </div>
       <div className='Header_Search'>
         <input
           className='Header_Search_Input'
           type="text"
           value={searchTerm}
           onChange={handleChange}
           placeholder="Search..."
         />
         <button className='Header_Search_Btn' onClick={handleSearch}>Search</button>
       </div>
     </header>
)
}

}
