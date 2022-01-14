import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './english.json';
import español from './español.json';
import * as RNLocalize from 'react-native-localize';

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
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
