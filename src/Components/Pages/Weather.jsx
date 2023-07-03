import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useSearchParams } from "react-router-dom";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchParams.get(
    "location"
  )}&units=metric&appid=7e728a94fe47e49624e4376f631364d5
  `;
  useEffect(() => {
    const searchLocation = async (event) => {
      if (searchParams.get("location")) {
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
    searchLocation();
    console.log(searchParams.get("location"));
  }, [searchParams.get("location")]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="second-container">
          <div className="main-info">
            <div>
              <p>{data.name}</p>
            </div>
            <div>
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          {data.name !== undefined && (
            <div className="details">
              <div>
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°F</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div>
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div>
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} Km/H</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Weather;
