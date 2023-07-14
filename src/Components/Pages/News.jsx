import React, { useState } from "react";
import "./News.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

function News() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredNews = (newsCard) => {
    if (filter === "All") {
      return true;
    } else if (filter === "id>2") {
      return parseInt(newsCard.id) > 2;
    } else if (filter === "id<=2") {
      return parseInt(newsCard.id) <= 2;
    }
  };

  const newsData = [
    {
      id: "1",
      image: "/Images/news1.jpeg",
      title: t("title1"),
      date: t("date1"),
      content: t("news1"),
    },
    {
      id: "2",
      image: "/Images/news2.jpeg",
      title: t("title2"),
      date: t("date2"),
      content: t("news2"),
    },
    {
      id: "3",
      image: "/Images/news3.jpeg",
      title: t("title3"),
      date: t("date3"),
      content: t("news3"),
    },
    {
      id: "4",
      image: "/Images/news4.jpeg",
      title: t("title4"),
      date: t("date4"),
      content: t("news4"),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="news-container">
        <h1 className="news-title">{t("News")}</h1>

        <div className="filter-container">
          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => handleFilterChange("All")}
          >
            {t("all")}
          </button>
          <button
            className={filter === "id>2" ? "active" : ""}
            onClick={() => handleFilterChange("id>2")}
          >
            {t("old")}
          </button>
          <button
            className={filter === "id<=2" ? "active" : ""}
            onClick={() => handleFilterChange("id<=2")}
          >
            {t("new")}
          </button>
        </div>

        <div className="news-card-container">
          {newsData.map(
            (newsCard) =>
              filteredNews(newsCard) && (
                <div key={newsCard.id} className="news-card" id={newsCard.id}>
                  <img
                    src={newsCard.image}
                    alt={newsCard.title}
                    className="news-image"
                  />
                  <h3>{newsCard.title}</h3>
                  <p className="news-date">{newsCard.date}</p>
                  <p>{newsCard.content}</p>
                </div>
              )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
