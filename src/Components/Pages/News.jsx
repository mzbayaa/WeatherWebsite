import React from "react";
import "./News.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function News() {
  return (
    <>
      <Navbar />
      <div className="news-container">
        <h1 nameClass="news-title">News</h1>
        <div className="news-card">
          <img src="../Images/news1.jpeg" alt="News 1" className="news-image" />
          <h3>Chaos Unleashed: Lightning Strikes, Fires Ignite</h3>
          <p className="news-date">June 28, 2023</p>
          <p>
            Japan engulfed in chaos as unforgiving thunderstorm unleashes
            lightning strikes, plunging neighborhoods into darkness, igniting
            destructive fires, and emphasizing the urgent need for recovery.
          </p>
        </div>
        <div className="news-card">
          <img src="../Images/news2.jpeg" alt="News 2" className="news-image" />
          <h3>
            City in Deluge: Relentless Rain Triggers Chaos and Devastation
          </h3>
          <p className="news-date">June 27, 2023</p>
          <p>
            Ottawa thrown into disarray as relentless rainfall floods streets,
            submerges neighborhoods, and disrupts daily life, highlighting the
            pressing need for recovery efforts to address the widespread water
            damage and restore normalcy.
          </p>
        </div>
        <div className="news-card">
          <img src="../Images/news3.jpeg" alt="News 3" className="news-image" />
          <h3>Tornado Devastation: Unleashing Chaos and Destruction"</h3>
          <p className="news-date">June 26, 2023</p>
          <p>
            Italy paralyzed in mayhem as a relentless tornado unleashes its
            fury, unleashing powerful winds that ravage everything in its path,
            reducing buildings to rubble, uprooting trees, and leaving a trail
            of destruction in its wake, amplifying the desperate plea for
            recovery.
          </p>
        </div>
        <div className="news-card">
          <img src="../Images/news4.jpeg" alt="News 4" className="news-image" />
          <h3>Snowstorm Siege: Blanketing the City in Winter's Embrace</h3>
          <p className="news-date">June 25, 2023</p>
          <p>
            A captivating winter scene unfolds as a relentless snowstorm
            blankets Sweden, transforming the landscape into a picturesque
            wonderland. However, beneath the beauty lies the urgent need for
            recovery as roads become hazardous and essential services are
            disrupted.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
