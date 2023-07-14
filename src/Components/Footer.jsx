import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>WeatherCare Foundation</h4>
          <p>{t("slogan")}</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="/">{t("Home")}</a>
            </li>
            <li>
              <a href="/about-us">{t("AboutUs")}</a>
            </li>
            <li>
              <a href="/contact-us">{t("ContactUs")}</a>
            </li>
            <li>
              <a href="/news">{t("News")}</a>
            </li>
            <li>
              <LanguageSwitch />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {t("reservedrights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
