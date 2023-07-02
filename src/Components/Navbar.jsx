import { useRef, useState } from "react";
import axios from "axios";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7e728a94fe47e49624e4376f631364d5
  `;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
        setError(null);
      } catch (error) {
        setError("Invalid location. Please try again.");
      }
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
        <div className="home-content">{error ? <p>{error}</p> : <h2></h2>}</div>
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
