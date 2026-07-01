import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';

const NAV_LINKS = [
  { anchor: 'services', key: 'nav_srv' },
  { anchor: 'partners', key: 'nav_par' },
  { anchor: 'about', key: 'nav_abt' },
  { anchor: 'locations', key: 'nav_loc' },
  { anchor: 'contact', key: 'nav_con' },
];

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [deep, setDeep] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onScroll() {
      setDeep(window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  function goToAnchor(e, anchor) {
    setOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      navigate(`/#${anchor}`);
    }
  }

  return (
    <nav id="nav" className={deep ? 'deep' : ''}>
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo-text">AMC</span>
        </Link>
        <div className="logo-sonar" />
      </div>
      <button
        id="navToggle"
        className={`nav-toggle${open ? ' open' : ''}`}
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="navMenu"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
      <div className={`nav-menu${open ? ' open' : ''}`} id="navMenu">
        <ul className="nav-center">
          {NAV_LINKS.map(({ anchor, key }) => (
            <li key={anchor}>
              <a href={`/#${anchor}`} onClick={(e) => goToAnchor(e, anchor)}>{t(key)}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="lang-sw">
            {['pt', 'en', 'fr'].map((l) => (
              <button key={l} className={`lb${lang === l ? ' on' : ''}`} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="/#contact" className="nav-btn" onClick={(e) => goToAnchor(e, 'contact')}>{t('nav_cta')}</a>
        </div>
      </div>
    </nav>
  );
}
