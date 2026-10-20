import { useState, useCallback, useEffect, type ReactNode } from 'react';
import { I18nContext, type Lang, type I18nContextValue } from './types';
import { en } from './en';
import { rw } from './rw';
import { fr } from './fr';
import type { Translations } from './types';

const TRANSLATIONS: Record<Lang, Translations> = { en, rw, fr };

const STORAGE_KEY = 'beautyline_lang';

function loadLang(): Lang {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === 'en' || raw === 'rw' || raw === 'fr') return raw;
  } catch {
    // ignore
  }
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    setLangState(loadLang());
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
    document.documentElement.lang = newLang;
  }, []);

  const value: I18nContextValue = {
    lang,
    setLang,
    t: TRANSLATIONS[lang],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
