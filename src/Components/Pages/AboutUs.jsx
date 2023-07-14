import React from "react";
import "../../App.css";
import "./AboutUs.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <h1>{t("AboutUs")}</h1>
        <p>{t("about1")}</p>
        <p>{t("about2")}</p>
        <p>{t("about3")}</p>
        <p>{t("about4")}</p>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
