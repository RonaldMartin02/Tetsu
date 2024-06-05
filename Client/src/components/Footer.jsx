// Done
import { Link } from 'react-router-dom';
import './scss/Footer.scss';
export default function Footer() {
    return (
      <footer className="Footer">
        <div className="Footer_Div_Left">
          <Link to='/'>
        <h4 className="Footer_Name">Gizmo Gaming</h4>
          </Link>
        </div>

        <div className="Footer_Div_Right">
        <Link to='/AboutUs'><button className="Footer_Logo">GG</button></Link>
        </div>
      </footer>
    );
  }