import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { T, useLang } from '../i18n/LangContext.jsx';
import SEO, { SITE_URL } from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';

const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1605664041952-4a2855d5ca5c?w=1600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?w=1600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504387103978-e4ee71416c38?w=1600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1600&q=75&auto=format&fit=crop',
];

const LOCATIONS = [
  { icon: '⚓', name: 'LUANDA', roleKey: 'lc1r', itemKeys: ['lc1a', 'lc1b', 'lc1c', 'lc1d'] },
  { icon: '🛢️', name: 'SOYO', roleKey: 'lc2r', itemKeys: ['lc2a', 'lc2b', 'lc2c'] },
  { icon: '🌊', name: 'CABINDA', roleKey: 'lc3r', itemKeys: ['lc3a', 'lc3b', 'lc3c'] },
  { icon: '🔩', name: 'LOBITO', roleKey: 'lc4r', itemKeys: ['lc4a', 'lc4b', 'lc4c'] },
  { icon: '📍', name: 'AMBRIZ', roleKey: 'lc5r', itemKeys: ['lc5a', 'lc5b', 'lc5c'] },
];

const PILLARS = [
  { n: '01', titleKey: 'p1t', descKey: 'p1d' },
  { n: '02', titleKey: 'p2t', descKey: 'p2d' },
  { n: '03', titleKey: 'p3t', descKey: 'p3d' },
  { n: '04', titleKey: 'p4t', descKey: 'p4d' },
];

const PROCESS_STEPS = [
  { n: '01', titleKey: 'ps1t', descKey: 'ps1d' },
  { n: '02', titleKey: 'ps2t', descKey: 'ps2d' },
  { n: '03', titleKey: 'ps3t', descKey: 'ps3d' },
  { n: '04', titleKey: 'ps4t', descKey: 'ps4d' },
];

export default function Home() {
  const { t } = useLang();
  const location = useLocation();

  // ── Hero slideshow ──────────────────────────────────────────
  const [curSlide, setCurSlide] = useState(0);
  const [loaded, setLoaded] = useState(() => new Set([0, 1]));

  useEffect(() => {
    const id = setInterval(() => {
      setCurSlide((c) => {
        const next = (c + 1) % HERO_SLIDES.length;
        setLoaded((prev) => new Set(prev).add((next + 1) % HERO_SLIDES.length));
        return next;
      });
    }, 6500);
    return () => clearInterval(id);
  }, []);

  function goSlide(i) {
    setCurSlide(i);
    setLoaded((prev) => new Set(prev).add(i).add((i + 1) % HERO_SLIDES.length));
  }

  // ── Hero parallax ───────────────────────────────────────────
  const heroRef = useRef(null);
  const hPlxRef = useRef(null);
  const hStackRef = useRef(null);
  const shaftsRef = useRef(null);
  const causticsRef = useRef(null);
  const grid3Ref = useRef(null);

  useEffect(() => {
    function onMouseMove(e) {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0) return;
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      if (hPlxRef.current) hPlxRef.current.style.transform = `perspective(1400px) rotateX(${-dy * 6}deg) rotateY(${dx * 8}deg) translateZ(0)`;
      if (shaftsRef.current) shaftsRef.current.style.transform = `translateX(${dx * 28}px) translateY(${dy * 10}px)`;
      if (causticsRef.current) causticsRef.current.style.transform = `translateX(${dx * 16}px) translateY(${dy * 8}px)`;
      if (grid3Ref.current) grid3Ref.current.style.transform = `translateX(${dx * 6}px)`;
      if (hStackRef.current) hStackRef.current.style.transform = `translateX(${dx * -6}px) translateY(${dy * -3}px)`;
    }
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  // ── Scroll to hash on cross-page navigation ─────────────────
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.hash]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AMC — Ondas Marítimas, Serviços Marítimos, Lda.',
    description: 'Parceiro estratégico de suporte marítimo, ship chandling, procurement e logística offshore em Angola.',
    url: SITE_URL,
    email: 'info@amc-angola.com',
    areaServed: ['Luanda', 'Soyo', 'Cabinda', 'Lobito', 'Ambriz', 'Angola'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua dos Heróis, Ed. 18, 2.º Andar, Bairro Azul',
      addressLocality: 'Luanda',
      addressCountry: 'AO',
    },
    makesOffer: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.slug } })),
  };

  return (
    <>
      <SEO
        title="AMC — Ondas Marítimas | Ship Chandler, Procurement e Logística Offshore em Angola"
        description="Parceiro estratégico de suporte marítimo, ship chandling, procurement e logística offshore em Angola. Cobertura em Luanda, Soyo, Cabinda, Lobito e Ambriz — 100% capital angolano."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-stack" ref={hStackRef}>
          {HERO_SLIDES.map((url, i) => (
            <div
              key={url}
              className={`hs${i === curSlide ? ' on' : ''}`}
              style={loaded.has(i) ? { backgroundImage: `url('${url}')` } : undefined}
            />
          ))}
        </div>
        <div className="h-ov1" /><div className="h-ov2" /><div className="h-ov3" /><div className="h-vign" />
        <div className="caustics" ref={causticsRef}>
          <div className="ca" /><div className="ca" /><div className="ca" /><div className="ca" /><div className="ca" />
        </div>
        <div className="shafts" ref={shaftsRef}>
          {[150, 130, 160, 145, 138, 125, 155].map((h, i) => (
            <div className="sh" key={i} style={{ height: `${h}vh` }} />
          ))}
        </div>
        <div className="grid3" ref={grid3Ref} />
        <div className="scanner"><div className="scanner-line" /></div>

        <div className="hero-plx" ref={hPlxRef}>
          <T k="h_eye" as="p" className="hero-eye" />
          <h1>
            <T k="h_h1a" as="span" />
            <T k="h_h1b" as="span" className="gline" />
          </h1>
          <T k="h_desc" as="p" className="hero-desc" />
          <div className="hero-acts">
            <a href="#services" className="btn-p" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>{t('h_cta1')}</a>
            <a href="#contact" className="btn-g" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>{t('h_cta2')}</a>
          </div>
        </div>

        <div className="hero-sonar">
          <div className="sonar-wrap"><div className="sonar-r3" /><div className="sonar-core" /></div>
          <span className="sonar-lbl">{t('h_op')}</span>
        </div>
        <div className="sdots">
          {HERO_SLIDES.map((url, i) => (
            <button key={url} className={`sd${i === curSlide ? ' on' : ''}`} onClick={() => goSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="si"><div className="sn"><Counter target={5} /><span className="ss">+</span></div><div className="sl">{t('st1')}</div></div>
        <div className="si"><div className="sn"><Counter target={24} /><span className="ss">h</span></div><div className="sl">{t('st2')}</div></div>
        <div className="si"><div className="sn"><Counter target={100} /><span className="ss">%</span></div><div className="sl">{t('st3')}</div></div>
        <div className="si"><div className="sn"><Counter target={4} /></div><div className="sl">{t('st4')}</div></div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <Reveal as="div" className="srv-hd rv">
          <p className="tag c">{t('srv_tag')}</p>
          <T k="srv_h2" as="h2" />
          <p className="intro">{t('srv_intro')}</p>
        </Reveal>
        <div className="srv-grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* STORAGE */}
      <section className="storage" id="storage">
        <div className="sto-box">
          <Reveal as="div" className="sto-txt rvL">
            <p className="tag">{t('sto_tag')}</p>
            <T k="sto_h2" as="h2" />
            <p className="intro">{t('sto_intro')}</p>
            <div className="sto-nums">
              <div className="sto-n">
                <div className="sto-val"><Counter target={12000} separator /><span className="sto-m2">m²</span></div>
                <div><div className="sto-lb">{t('sm1l')}</div><div className="sto-ds">{t('sm1d')}</div></div>
              </div>
              <div className="sto-n">
                <div className="sto-val"><Counter target={400} /><span className="sto-m2">m²</span></div>
                <div><div className="sto-lb">{t('sm2l')}</div><div className="sto-ds">{t('sm2d')}</div></div>
              </div>
            </div>
          </Reveal>
          <Reveal as="div" className="sto-vis rvR">
            <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=760&q=70&auto=format" alt="AMC Armazém" loading="lazy" decoding="async" />
            <div className="sto-tag">{t('sto_badge')}</div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners" id="partners">
        <Reveal as="div" className="par-hd rv">
          <p className="tag c">{t('par_tag')}</p>
          <T k="par_h2" as="h2" />
          <p className="intro">{t('par_intro')}</p>
        </Reveal>
        <div className="par-grid">
          <Reveal as="div" className="par-card rv">
            <span className="par-badge">{t('par_badge')}</span>
            <div className="par-nm">DOLPHIN MARINE</div>
            <p className="par-desc">{t('dol_desc')}</p>
          </Reveal>
          <Reveal as="div" className="par-card rv">
            <span className="par-badge">{t('par_badge')}</span>
            <div className="par-nm">OPEN SAFETY</div>
            <p className="par-desc">{t('safe_desc')}</p>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="why" id="about">
        <div className="why-g">
          <Reveal as="div" className="why-vis rvL">
            <img className="wi-main" src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=760&q=70&auto=format" alt="Offshore Angola" loading="lazy" decoding="async" />
            <img className="wi-sec" src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=560&q=70&auto=format" alt="AMC Equipa" loading="lazy" decoding="async" />
            <div className="why-badge"><div className="wb-n">100%</div><div className="wb-t">{t('badge')}</div></div>
          </Reveal>
          <Reveal as="div" className="rvR">
            <p className="tag">{t('why_tag')}</p>
            <T k="why_h2" as="h2" />
            <p className="intro" style={{ marginBottom: 0 }}>{t('why_intro')}</p>
            <div className="pillars">
              {PILLARS.map((p) => (
                <div className="pillar" key={p.n}>
                  <span className="pn">{p.n}</span>
                  <div>
                    <h4>{t(p.titleKey)}</h4>
                    <p>{t(p.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="locs" id="locations">
        <Reveal as="div" className="loc-hd rv">
          <p className="tag c">{t('loc_tag')}</p>
          <h2>{t('loc_h2')}</h2>
        </Reveal>
        <div className="loc-grid">
          {LOCATIONS.map((loc) => (
            <Reveal as="div" className="lc rv" key={loc.name}>
              <span className="lci">{loc.icon}</span>
              <div className="lcc">{loc.name}</div>
              <div className="lcr">{t(loc.roleKey)}</div>
              <ul className="lcs">
                {loc.itemKeys.map((k) => <li key={k}>{t(k)}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="proc" id="procurement">
        <Reveal as="div" className="rvL">
          <p className="tag">{t('prc_tag')}</p>
          <T k="prc_h2" as="h2" />
          <p className="intro">{t('prc_intro')}</p>
          <div className="psteps">
            {PROCESS_STEPS.map((s) => (
              <div className="pstep" key={s.n}>
                <div className="psn">{s.n}</div>
                <div className="psc">
                  <h4>{t(s.titleKey)}</h4>
                  <p>{t(s.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal as="div" className="certs rvR">
          <div className="ct">{t('cert_t')}</div>
          <div className="cr"><span className="cn">IMPA Licensed</span><span className="ca">{t('cav')}</span></div>
          <div className="cr"><span className="cn">ANPG Registered</span><span className="ca">{t('cav')}</span></div>
          <div className="cr"><span className="cn">{t('cn3')}</span><span className="ca">{t('cel')}</span></div>
          <div className="cr"><span className="cn">MARPOL Compliance</span><span className="ca">{t('cce')}</span></div>
          <div className="cr"><span className="cn">MINCO Registered</span><span className="ca">{t('cav')}</span></div>
          <div className="cr"><span className="cn">ISO 9001</span><span className="cp">{t('cpp')}</span></div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="cta-sec" id="contact">
        <Reveal as="div" className="rv">
          <p className="tag c">{t('cta_tag')}</p>
          <T k="cta_h2" as="h2" />
          <div className="cta-acts">
            <a href="mailto:info@amc-angola.com" className="btn-w">{t('cta_btn')}</a>
            <span className="cta-info">info@amc-angola.com · +244 9XX XXX XXX</span>
          </div>
        </Reveal>
      </section>
    </>
  );
}
