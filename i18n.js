"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // 👇 will correctly resolve /locales/en/navbar/navbar.json, /locales/en/home/home.json, etc.
      loadPath: "/locales/{{lng}}/{{ns}}/{{ns}}.json",
    },
    ns: ["navbar", "home", "footer"], // add as many namespaces as needed
    defaultNS: "navbar", // you can change default if you want
  });

export default i18n;
