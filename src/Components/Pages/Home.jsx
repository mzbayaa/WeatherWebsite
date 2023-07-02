import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
        setError(null);
      } catch (error) {
        setError("Invalid location. Please try again.");
      }
      setLocation("");
    }
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7e728a94fe47e49624e4376f631364d5`;

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
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="home-content">{error ? <p>{error}</p> : <h2></h2>}</div>
      </div>
    </>
  );
}

export default Home;
