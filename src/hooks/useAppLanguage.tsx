import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import { useCallback } from 'react';

interface LangTypes {
  [key: string]: Record<string, any>;
}

const selectLang = useCallback((code: Number) => {
  if (code) return code === 0 ? "en" : "es";
  return getLocales()[0].languageCode as string;
}, []);

export default function useAppLanguage(languages: LangTypes, code: Number) {
  const i18n = new I18n(languages);
  i18n.locale = selectLang(code);
  return i18n;
}

