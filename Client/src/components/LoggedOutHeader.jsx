import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Img/Tetsu_Pro_Clear.png';
import './scss/LoggedOutHeader.scss';
export default function Header() {

  const navigate = useNavigate();
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 1000px)").matches);

  useEffect(() => {
    window.matchMedia("(max-width:1000px)").addListener((e) => {
      setMatches(e.matches);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  // if (!matches) {
  if (matches) {
    console.log("rendering logged out header in mobile view");
    return (
      <header className='Header'>
        <div className='Header_Nav' >
          <div className='Header_Nav_Hamburger'>
            <button onClick={toggleMenu} className="menu-button">
              &#9776; {/* Hamburger Icon */}
            </button>
          </div>
          <div className='Header_Nav_Logo'>
            <Link to='/'>
              <img src={Logo} alt='logo' className='Header_Logo' />
            </Link>
          </div>
        </div>
        <div className='Header_Btns'>
          {isOpen && (
            <div className="menu-items">
              <Link to='/Roster'><button>Roster</button></Link>
              <Link to='/Shows'><button>Shows</button></Link>
              {/* <Link to='/Aboutus'><button className='AboutUs'>About Us</button></Link> */}
            </div>
          )
          }
        </div>
      </header>
    );

  } else {
    console.log("rendering logged out header")
    return (
      <header className='Header'>
        <div className='Header_Left'>

          <Link to='/Roster'><button className='Header_Left_Roster'>Roster</button></Link>
          <Link to='/Shop'><button className='Header_Left_Shop'>Shop</button></Link>
        </div>
        <div >

          <Link to='/'>
            <img src={Logo} alt='logo' className='Header_Logo' />
          </Link>
        </div>
        <div className='Header_Right'>
          <Link to='/Aboutus'><button className='Header_Right_AboutUs'>About Us</button></Link>
          <Link to='/Shows'><button className='Header_Right_Shows'>Shows</button></Link>
        </div>
      </header>
    )
  }
}
