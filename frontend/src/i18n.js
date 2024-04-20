import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationMK from "./locales/mk/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  mk: {
    translation: translationMK,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
