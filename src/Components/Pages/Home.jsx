import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../App.css";
import "./Home.css";
import "../HomeNavbar.css";
import HomeNavbar from "../HomeNavbar";
import { useNavigate } from "react-router";

function Home() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
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
        console.log(response);
        if (response) {
          navigate(`/weather?location=${location}`);
        }
      } catch {
        setLocation("");
        alert("Invalid Location");
        console.log("error");
      }
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
        </div>
        <div className="home-content">{error ? <p>{error}</p> : <h2></h2>}</div>
      </div>
    </>
  );
}

export default Home;
