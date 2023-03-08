import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguageCodeSupport } from "./options";

const fileNames = ["general", "createSocial", "socialDetails"];
let languageObject = {};

LanguageCodeSupport.forEach((language) => {
  languageObject[language] = { translation: {} };
});

LanguageCodeSupport.forEach((language) => {
  fileNames.forEach((fileName) => {
    languageObject[language]["translation"] = {
      ...languageObject[language]["translation"],
      [fileName]: require(`./${language}/${fileName}.json`),
    };
  });
});

i18n.use(initReactI18next).init({
  resources: languageObject,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
