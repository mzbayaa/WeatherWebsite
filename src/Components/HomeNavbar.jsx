import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HomeNavbar.css";
import { useTranslation } from "react-i18next";

function HomeNavbar() {
  const { t, i18n } = useTranslation();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="home-header">
      <a className="nav-logo" href="/">
        WeatherCare Foundation
      </a>
      <nav className="main-nav" ref={navRef}>
        <a href="/">{t("Home")}</a>
        <a href="/about-us">{t("AboutUs")}</a>
        <a href="/contact-us">{t("ContactUs")}</a>
        <a href="/news">{t("News")}</a>
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
