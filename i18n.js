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
      // 👇 keeps support for nested files like home/HeroSection.json
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [],               // no preloaded namespaces
    defaultNS: false,  
  });

export default i18n;
