// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function WeatherBackground() {
//   const [weather, setWeather] = useState({});
//   const [videoSource, setVideoSource] = useState("");

//   const location = "<YOUR_LOCATION>"; // Replace with the desired location

//   const apiKey = "7e728a94fe47e49624e4376f631364d5"; // Replace with your OpenWeatherMap API key

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
//         );
//         setWeather(response.data);
//         console.log(response.data);
//         setVideoSource(getVideoSource(response.data.weather[0].main));
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//       }
//     };

//     fetchWeather();
//   }, [location, apiKey]);

//   const getVideoSource = (weatherCondition) => {
//     switch (weatherCondition) {
//       case "Rain":
//         return "path/to/rainy-video.mp4";
//       case "Clouds":
//         return "path/to/cloudy-video.mp4";
//       case "Clear":
//         return "path/to/sunny-video.mp4";
//       default:
//         return "path/to/default-video.mp4";
//     }
//   };

//   return (
//     <div className="weather-background">
//       <video src={videoSource} autoPlay loop muted />
//     </div>
//   );
// }

// export default WeatherBackground;
