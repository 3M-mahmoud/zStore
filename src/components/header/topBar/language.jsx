import image_english from "../../../assets/images/english_photo.png";
import image_arabic from "../../../assets/images/arabic_photo.png";

import "./language.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "English"
  );
  const { t, i18n } = useTranslation();
  localStorage.setItem("lang", lang);

  // function
  const changeLangToAr = () => {
    setLang("عربي");
    i18n.changeLanguage("ar");
  };
  // function
  const changeLangToEn = () => {
    setLang("English");
    i18n.changeLanguage("en");
  };
  return (
    <div className="lang">
      <button>
        <img
          src={lang === "English" ? image_english : image_arabic}
          alt={lang === "English" ? "English" : "Arabic"}
        />
        {lang}
      </button>
      <ul style={{ right: `${i18n.language === "en" ? "-15px" : "-35px"}` }}>
        <li onClick={changeLangToAr}>
          <button>
            <img src={image_arabic} alt="Arabic" />
            عربي
          </button>
        </li>
        <li onClick={changeLangToEn}>
          <button>
            <img src={image_english} alt="Arabic" />
            English
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Language;
