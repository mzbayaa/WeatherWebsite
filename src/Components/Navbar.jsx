import { useRef, useState } from "react";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { useNavigate } from "react-router";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      navigate(`/weather?location=${location}`);
      setLocation("");
    }
  };

  return (
    <header>
      <a className="nav-logo" href="/">
        WeatherCare Foundation
      </a>
      <div className="search-bar">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
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
