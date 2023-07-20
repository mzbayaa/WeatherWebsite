import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Weather() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({});
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);

  let [searchParams, setSearchParams] = useSearchParams();
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${searchParams.get(
    "lat"
  )}&lon=${searchParams.get(
    "lon"
  )}&units=metric&appid=7e728a94fe47e49624e4376f631364d5`;

  useEffect(() => {
    const searchLocation = async () => {
      if (searchParams.get("lat") && searchParams.get("lon")) {
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
  }, [searchParams, url]);

  const weatherIcons = {
    Clouds: "../Images/clouds.png",
    Clear: "../Images/clear.png",
    Mist: "../Images/hazy.png",
    Drizzle: "../Images/hazy.png",
    Rain: "../Images/rain.png",
    Thunderstorm: "../Images/lightning.png",
    Snow: "../Images/snow.png",
    Tornado: "../Images/tornado.png",
  };

  const getWeatherIcon = (weather) => {
    const icon = weatherIcons[weather];
    if (icon) {
      return (
        <img className="icon-image" src={`/icons/${icon}`} alt={weather} />
      );
    }
    return null;
  };
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
              {data.main && data.weather ? (
                <h1>
                  {data.main.temp.toFixed()}°C{" "}
                  {getWeatherIcon(data.weather[0].main)}
                </h1>
              ) : null}
            </div>
            <div className="description">
              {data.weather ? (
                <>
                  <p>{data.weather[0].main}</p>
                </>
              ) : null}
            </div>
          </div>
          {data.name !== undefined && data.main ? (
            <div className="details">
              <div>
                <p className="bold">{data.main.feels_like?.toFixed()}°C</p>
                <p>{t("feelslike")}</p>
              </div>
              <div>
                <p className="bold">{data.main.humidity?.toFixed()}%</p>
                <p>{t("humidity")}</p>
              </div>
              <div>
                <p className="bold">{data.wind?.speed?.toFixed()} Km/H</p>
                <p>{t("windspeed")}</p>
              </div>
              <div>
                <p className="bold">{data.main.temp_min?.toFixed()}°C</p>
                <p>{t("temp_min")}</p>
              </div>
              <div>
                <p className="bold">{data.main.temp_max?.toFixed()}°C</p>
                <p>{t("temp_max")}</p>
              </div>
              <div>
                <p className="bold">{data.main.pressure?.toFixed()} hPa</p>
                <p>{t("pressure")}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Weather;
