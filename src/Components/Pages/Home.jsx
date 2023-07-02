import React, { useEffect, useRef } from "react";
import "../../App.css";
import { FaSearch } from "react-icons/fa";
import "./Home.css";
import "../HomeNavbar.css";
import HomeNavbar from "../HomeNavbar";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <>
      <HomeNavbar />
      <div className="home-container">
        <video
          className="home-video"
          ref={videoRef}
          src="../Videos/HomeVideo.mp4"
          autoPlay
          loop
          muted
        />
        <h1> WeatherCare Foundation</h1>
        <p>Showering the world with positivity</p>
        <div className="home-search-bar">
          <input type="text" placeholder="Enter Location" />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="home-content">
          <h2></h2>
        </div>
      </div>
    </>
  );
}

export default Home;
