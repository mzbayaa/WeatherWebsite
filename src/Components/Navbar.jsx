import { useRef, useState } from "react";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { useNavigate } from "react-router";
import AddressAutocomplete from "./AddressAutocomplete";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

function Navbar() {
  const { t, i18n } = useTranslation();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7e728a94fe47e49624e4376f631364d5`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(url);
        console.log(response);
        if (response) {
          navigate(`/weather?location=${location}`);
          setLocation("");
        }
      } catch {
        setLocation("");
        alert("Invalid Location");
        console.log("error");
      }
    }
  };

  return (
    <header>
      <a className="nav-logo" href="/">
        WeatherCare Foundation
      </a>
      <div className="search-bar">
        <AddressAutocomplete />
      </div>
      <nav className="main-nav" ref={navRef}>
        {/* <a href="/">{t("Home")}</a> */}
        <a href="/about-us">{t("AboutUs")}</a>
        <a href="/contact-us">{t("ContactUs")}</a>
        <a href="/news">{t("News")}</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <LanguageSwitch />
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
