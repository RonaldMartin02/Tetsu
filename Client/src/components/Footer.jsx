// Done
import { Link } from 'react-router-dom';
import './scss/Footer.scss';
import Logo from '../assets/Img/Tetsu_Pro_Clear.png';
export default function Footer() {
    return (
      <footer className="Footer">
        <div className="Footer_Div_Left">
          <Link to='/'>
        <img className='Footer_Img' src={Logo} alt="" />
          </Link>
        </div>

        {/* <div className="Footer_Div_Right">
        <Link to='/AboutUs'><button className="Footer_Logo">GG</button></Link>
        </div> */}
      </footer>
    );
  }