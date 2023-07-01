import React from "react";
import "./News.css";

function News() {
  return (
    <div className="news-container">
      <h1 nameClass="news-title">News</h1>
      <div className="news-card">
        <img src="../Images/news1.jpeg" alt="News 1" className="news-image" />
        <h3>News Title 1</h3>
        <p className="news-date">June 28, 2023</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          scelerisque semper sem at sodales. Fusce eget efficitur metus, nec
          maximus mi.
        </p>
      </div>
      <div className="news-card">
        <img src="../Images/news2.jpeg" alt="News 2" className="news-image" />
        <h3>News Title 2</h3>
        <p className="news-date">June 27, 2023</p>
        <p>
          Duis ullamcorper, metus at tempus dapibus, velit turpis pharetra nisi,
          sit amet volutpat leo nisl id purus.
        </p>
      </div>
      <div className="news-card">
        <img src="../Images/news3.jpeg" alt="News 3" className="news-image" />
        <h3>News Title 3</h3>
        <p className="news-date">June 26, 2023</p>
        <p>
          Sed tincidunt, nulla non congue commodo, metus ligula pellentesque
          enim, ac pellentesque lectus arcu sed urna.
        </p>
      </div>
      <div className="news-card">
        <img src="../Images/news4.jpeg" alt="News 4" className="news-image" />
        <h3>News Title 4</h3>
        <p className="news-date">June 25, 2023</p>
        <p>
          Sed tincidunt, nulla non congue commodo, metus ligula pellentesque
          enim, ac pellentesque lectus arcu sed urna.
        </p>
      </div>
      {/* <div className="news-card">
        <img src="../Images/news5.jpeg" alt="News 5" className="news-image" />
        <h3>News Title 5</h3>
        <p className="news-date">June 24, 2023</p>
        <p>
          Sed tincidunt, nulla non congue commodo, metus ligula pellentesque
          enim, ac pellentesque lectus arcu sed urna.
        </p>
      </div> */}
    </div>
  );
}

export default News;
