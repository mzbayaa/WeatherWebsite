import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import News from "./Components/Pages/News";
import Weather from "./Components/Pages/Weather";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback="Loading...">
          <Router>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/news" element={<News />} />
              <Route path="/weather" element={<Weather />} />
            </Routes>
          </Router>
        </Suspense>
      </I18nextProvider>
    </>
  );
}

export default App;
