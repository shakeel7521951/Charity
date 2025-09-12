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
    ns: ["common", "common/navbar", "common/footer", "home", "about", "donor"], 
    defaultNS: "common", 
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", 
    },
    react: {
      useSuspense: false, 
    },
  });

export default i18n;
