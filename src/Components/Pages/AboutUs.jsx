import React from "react";
import "../../App.css";
import "./AboutUs.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          The WeatherCare Foundation is a non-profit organization dedicated to
          providing accurate and reliable weather information to communities
          around the world. We believe that access to up-to-date weather data is
          crucial for individuals, businesses, and organizations to make
          informed decisions and take necessary precautions to ensure their
          safety and well-being.
        </p>
        <p>
          Our mission is to make weather information accessible and easy to
          understand for everyone. Through our website and mobile applications,
          we provide real-time weather updates, forecasts, and other related
          services. Our team of meteorologists and weather enthusiasts work
          tirelessly to deliver the most reliable and precise weather
          information to our users.
        </p>
        <p>
          At WeatherCare Foundation, we are driven by a passion for weather and
          a commitment to public service. We strive to empower individuals and
          communities with the knowledge they need to prepare for various
          weather conditions, including severe weather events. We also
          collaborate with government agencies, educational institutions, and
          other organizations to promote weather literacy and enhance
          preparedness measures.
        </p>
        <p>
          We invite you to explore our website, use our weather services, and
          join us in our mission to create a weather-resilient world. Together,
          we can make a difference and ensure the safety and well-being of
          people everywhere.
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;
