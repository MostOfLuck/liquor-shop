import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      English: {
        translations: { /* ваш перевод на английский язык */ }
      },
      Русский: {
        translations: {
					"Learn More": "Узнать больше",
					"Discover the Finest Alcoholic Beverages at R.I.L.L Collection": "Откройте для себя лучшие алкогольные напитки в R.I.L.L Collection",
					"Best Alcohol from all over the world": "Лучший алкоголь со всего мира",
					"Open Catalog": "Открыть Каталог",
					"Catalog": "Каталог",
				}
      },
      עברית: {
        translations: { /* ваш перевод на иврит */ }
      }
    },
    lng: "English",
    fallbackLng: "English",
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    react: {
      wait: true
    }
  });

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App/>)
