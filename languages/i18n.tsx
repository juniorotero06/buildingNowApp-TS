import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './english.json';
import español from './español.json';

i18next.use(initReactI18next).init({
  lng: 'es',
  compatibilityJSON: 'v3',
  resources: {
    es: español,
    en: english,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
