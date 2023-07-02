import React, { useState } from "react";
import "../../App.css";
import "./ContactUs.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ContactUs() {
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
        <h1>Contact Us</h1>
        <p>
          Thank you for your interest in WeatherCare Foundation. If you have any
          questions, feedback, or inquiries, please feel free to reach out to us
          using the contact information below or by filling out the form. We
          value your input and will get back to you as soon as possible.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <h3>Address:</h3>
            <p>123 Weather Street, City, Country</p>
          </div>
          <div className="contact-item">
            <h3>Email:</h3>
            <p>info@weathercarefoundation.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone:</h3>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
