import { useRef } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a className="nav-logo" href="/">
        WeatherCare Foundation
      </a>
      <div className="search-bar">
        <input type="text" placeholder="Enter Location" />
        <button>
          <FaSearch />
        </button>
      </div>
      <nav className="main-nav" ref={navRef}>
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/contact-us">Contact Us</a>
        <a href="/news">News</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
