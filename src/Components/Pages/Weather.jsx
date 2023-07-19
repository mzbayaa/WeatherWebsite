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

  // const getDayOfWeek = (offset) => {
  //   const today = new Date();
  //   const dayOfWeek = today.getDay();
  //   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   const nextDayIndex = (dayOfWeek + offset) % 7;
  //   return days[nextDayIndex];
  // };

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
              {data.main ? (
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
          {data.name !== undefined && (
            <div className="details">
              <div>
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}
                <p>{t("feelslike")}</p>
              </div>
              <div>
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>{t("humidity")}</p>
              </div>
              <div>
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} Km/H</p>
                ) : null}
                <p>{t("windspeed")}</p>
              </div>
            </div>
          )}
          <div className="week-forecast">
            {t("weeksforecast")}
            <hr
              style={{
                background: "white",
                color: "white",
                borderColor: "white",
                height: "5px",
              }}
            />
            {/* <div className="forecast-cards">
              {data.name !== undefined &&
                data.weather &&
                Array.from({ length: 7 }).map((_, index) => {
                  const dayOffset = index === 0 ? 0 : index - 1;
                  const dayData = data.weather[dayOffset];
                  const dayOfWeek = getDayOfWeek(dayOffset);
                  return (
                    <WeekForecastCard
                      key={index}
                      day={dayOfWeek}
                      temperature={dayData.temperature}
                      weather={dayData.weather}
                    />
                  );
                })}
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Weather;
