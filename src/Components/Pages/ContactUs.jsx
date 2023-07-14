import React, { useState } from "react";
import "../../App.css";
import "./ContactUs.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields");
      setSuccessMessage("");
      return;
    }

    simulateFormSubmission({ name, email, message })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
        setSuccessMessage("Thank you! Your message has been sent.");
      })
      .catch((error) => {
        setErrorMessage("An error occurred. Please try again later.");
        setSuccessMessage("");
      });
  };

  const simulateFormSubmission = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  return (
    <>
      <Navbar />
      <div className="contact-us-container">
        <h1>{t("ContactUs")}</h1>
        <p>{t("contact1")}</p>
        <div className="contact-details">
          <div className="contact-item">
            <h3>{t("address")}</h3>
            <p>{t("address1")}</p>
          </div>
          <div className="contact-item">
            <h3>{t("email")}</h3>
            <p>info@weathercarefoundation.com</p>
          </div>
          <div className="contact-item">
            <h3>{t("Phone")}</h3>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder={t("nameplaceholder")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder={t("emailplaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder={t("messageplaceholder")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          <button type="submit">{t("sendbutton")}</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
