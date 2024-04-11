import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisibility(!isNavbarVisible);
  };
  return (
    <>
      <nav>
        <div className="menu-icon" onClick={toggleNavbar}>
          <div className={isNavbarVisible ? "bar open" : "bar"}></div>
          <div className={isNavbarVisible ? "bar open" : "bar"}></div>
          <div className={isNavbarVisible ? "bar open" : "bar"}></div>
        </div>
        <ul className={isNavbarVisible ? "show" : ""}>
          <span>
            <li>
              <Link to="/Register">Register/Login</Link>
            </li>
          </span>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/Works">Work</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
