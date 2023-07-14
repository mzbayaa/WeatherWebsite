import React from "react";
import "./News.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

function News() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="news-container">
        <h1 nameClass="news-title">{t("News")}</h1>
        <div className="news-card">
          <img src="../Images/news1.jpeg" alt="News 1" className="news-image" />
          <h3>{t("title1")}</h3>
          <p className="news-date">{t("date1")}</p>
          <p>{t("news1")}</p>
        </div>
        <div className="news-card">
          <img src="../Images/news2.jpeg" alt="News 2" className="news-image" />
          <h3>{t("title2")}</h3>
          <p className="news-date">{t("date2")}</p>
          <p>{t("news2")}</p>
        </div>
        <div className="news-card">
          <img src="../Images/news3.jpeg" alt="News 3" className="news-image" />
          <h3>{t("title3")}</h3>
          <p className="news-date">{t("date3")}</p>
          <p>{t("news3")}</p>
        </div>
        <div className="news-card">
          <img src="../Images/news4.jpeg" alt="News 4" className="news-image" />
          <h3>{t("title4")}</h3>
          <p className="news-date">{t("date4")}</p>
          <p>{t("news4")}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
