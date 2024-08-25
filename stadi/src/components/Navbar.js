import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">STADI</a>
        </div>

        <div className="menu-icon" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item dropdown">
            <a
              href="/"
              className="nav-links dropdown-toggle"
              id="contentDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Content
            </a>
            <div className="dropdown-menu" aria-labelledby="contentDropdown">
              <a href="/articles" className="dropdown-item">
                Articles
              </a>
              <a href="/videos" className="dropdown-item">
                Videos
              </a>
              <a href="/audio" className="dropdown-item">
                Audio
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a href="/playground" className="nav-links">
              Scoreboard
            </a>
          </li>
          <li className="nav-item">
            <a href="/community" className="nav-links">
              Community
            </a>
          </li>
        </ul>

        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="navbar-user">
          <a href="/login" className="btn login-btn">
            Login
          </a>
          <a href="/register" className="btn register-btn">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
