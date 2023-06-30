import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SecondNavbar from "./Components/SecondNavbar";
import HomeNavbar from "./Components/HomeNavbar";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import News from "./Components/Pages/News";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <HomeNavbar />
        {/* <Navbar />
        <SecondNavbar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
