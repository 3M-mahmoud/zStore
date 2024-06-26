import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import arabic from "./languages/ar.json";
import english from "./languages/en.json";
import deutshe from "./languages/de.json";

const resources = {
  en: {
    translation: english,
  },
  ar: {
    translation: arabic,
  },
  de: {
    translation: deutshe,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    detection: {
      order: ["localStorage", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
