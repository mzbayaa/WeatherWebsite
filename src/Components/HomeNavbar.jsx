import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HomeNavbar.css";

function HomeNavbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="home-header">
      <a className="nav-logo" href="/">
        Logo
      </a>
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

export default HomeNavbar;
