import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./language/en.json"
import pl from "./language/pl.json"


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: en},
            pl: {translation: pl},
        },
        lng: "en",
        fallbackLng: "en",
        debug: true,
        interPolation: {
            escapeValue: false,
        }
    })

export default i18n        