import React from "react";
import "./LanguageSwitch.css";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={handleLanguageSwitch}>en/fr</button>
    </div>
  );
}
