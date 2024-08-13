import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Img/Tetsu_Pro_Clear.png';
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



  // if (!matches) {
    console.log("rendering logged out header")
    return (
      <header className='Header'>
        <div className='Header_Left'>
          
        <Link to='/Roster'><button>Roster</button></Link>
        <Link to='/Shop'><button>Shop</button></Link>
        </div>
        <div >

          <Link to='/'>
            <img src={Logo} alt='logo' className='Header_Logo' />
          </Link>
        </div>
        <div className='Header_Right'>
          <Link to='/Shows'><button>Shows</button></Link>
          <Link to='/Aboutus'><button>About Us</button></Link>
        </div>
      </header>
    )
  }
// }
