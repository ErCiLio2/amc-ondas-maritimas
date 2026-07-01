import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations } from './translations';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('pt');

  const setLang = useCallback((l) => {
    if (!translations[l]) return;
    setLangState(l);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((key) => translations[lang]?.[key] ?? key, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LangProvider');
  return ctx;
}

/** Renders a translated string. Uses dangerouslySetInnerHTML because some
 * translation values contain markup (<br>, &amp;) mirroring the original
 * static site's innerHTML-based i18n. */
export function T({ k: key, as: Tag = 'span', ...rest }) {
  const { t } = useLang();
  return <Tag dangerouslySetInnerHTML={{ __html: t(key) }} {...rest} />;
}
