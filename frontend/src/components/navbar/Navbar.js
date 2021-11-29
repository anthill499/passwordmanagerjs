import "../../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-logo">PasswordManager</div>
      <ul className="nav-options">
        <li>About Us</li>
        <li>Solutions</li>
        <li>Support</li>
        <li>Free Trial</li>
      </ul>
    </div>
  );
};

export default Navbar;
