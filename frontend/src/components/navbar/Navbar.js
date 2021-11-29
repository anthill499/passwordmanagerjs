import "../../styles/navbar.css";
import Image from "../../assets/images/padlock.png";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-logo">
        <img src={Image} alt="logo"></img>
        <p>PasswordManager</p>
      </div>
      <ul className="nav-options">
        <li>About Us</li>
        <li>Solutions</li>
        <li>Support</li>
        <li>Free Trial</li>
        <li>Investors {"&"} Media</li>
        <li>Sign Up</li>
      </ul>
    </div>
  );
};

export default Navbar;
