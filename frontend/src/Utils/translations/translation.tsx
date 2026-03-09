/* eslint-disable react-refresh/only-export-components */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enTranslations } from "./en";
import { frTranslations } from "./fr";
import { deTranslations } from "./de";
import type { LanguageItem } from "../interfaces";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations
    },
    fr: {
      translation: frTranslations
    },
    de:{
      translation: deTranslations
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

/* Available languages */
export const languages: LanguageItem[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" }
];

/* Export i18n instance */
export const ChangeTranslation = i18n;