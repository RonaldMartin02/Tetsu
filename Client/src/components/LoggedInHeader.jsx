import { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/svg/Logo.svg';
import './scss/LoggedInHeader.scss';

export default function Header() {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 1000px)").matches);

  useEffect(() => {
    window.matchMedia("(max-width: 1000px)").addListener((e) => {
      setMatches(e.matches);
    });
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const handleLogOut = () => {
    Auth.logout()
  }

  const currentPage = useLocation().pathname;

  if (currentPage === "/Post/Create") {
    if (!matches) {
      console.log("rendering create build header")
      return (
        <header className='Header'>
          <Link to='/'>
            <img src={Logo} alt='logo' className='Header_Logo' />
          </Link>
          <div className='Header_Btns'>
            <Link to='/'>
              <button>Home</button>
            </Link>

            <button onClick={handleLogOut}>Sign Out</button>
            <Link to='/aboutus'>
              <button>About Us</button>
            </Link>
          </div>
        </header>
      );
    } else {
      console.log("rendering create build header in mobile view")
      return (
        <header className='Header'>
          <div className='Header_Nav' >
            <Link to='/'>
              <img src={Logo} alt='logo' className='Header_Logo' />
            </Link>
            <button onClick={toggleMenu} className="menu-button">
              &#9776; {/* Hamburger Icon */}
            </button>
          </div>
          <div className='Header_Btns'>
            {isOpen && (
              <div className="Header_Btns">
                <Link to='/'>
                  <button>Home</button>
                </Link>
                <button onClick={handleLogOut}>Sign Out</button>
                <Link to='/aboutus'>
                  <button>About Us</button>
                </Link>
                {currentPage !== '/Post/Create' && (
                  <Link to='/Post/Create'>
                    <button>New Post</button>
                  </Link>
                )}
              </div>
            )
            }
          </div>

        </header>
      );
    }
  } else {
    if (!matches) {
      console.log(matches)
      console.log("rendering logged in header");
      return (
        <header className='Header'>
          <Link to='/'>
            <img src={Logo} alt='logo' className='Header_Logo' />
            
          </Link>
          <div className='Header_Btns'>
            <Link to='/Post/Create'>
              <button>New Post</button>
            </Link>
            <button onClick={handleLogOut}>Sign Out</button>
            <Link to='/aboutus'>
              <button>About Us</button>
            </Link>
          </div>
        </header>
      );
    }
    else {
      console.log("rendering logged in header in mobile view");
      return (
        <header className='Header'>
          <div className='Header_Nav' >
          
            <button onClick={toggleMenu} className="menu-button">
              &#9776; {/* Hamburger Icon */}
            </button><Link to='/'>
            <img src={Logo} alt='logo' className='Header_Logo' />
          </Link>
          </div>
          <div className='Header_Btns'>
            {isOpen && (
              <div className="menu-items">
                <Link to='/Post/Create'>
                  <button>New Post</button>
                </Link>
                <button onClick={handleLogOut}>Sign Out</button>
                <Link to='/aboutus'>
                  <button>About Us</button>
                </Link>
              </div>
            )
            }
          </div>
        </header>
      );
    }
  }
}
