import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { T, useLang } from '../i18n/LangContext.jsx';
import Reveal from './Reveal.jsx';

export default function ServiceCard({ service }) {
  const { t } = useLang();
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  function onMouseMove(e) {
    const card = cardRef.current;
    const r = card.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-cy * 12}deg) rotateY(${cx * 14}deg) translateY(-6px) scale(1.015)`;
    if (glowRef.current) {
      glowRef.current.style.left = e.clientX - r.left + 'px';
      glowRef.current.style.top = e.clientY - r.top + 'px';
    }
  }
  function onMouseLeave() {
    cardRef.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1)';
  }

  return (
    <Reveal
      as={Link}
      to={`/services/${service.slug}`}
      className="sc rv"
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="sc-bar" />
      <div className="sc-glow" ref={glowRef} />
      <div className="sc-corner">{service.code}</div>
      <span className="sc-ico">{service.icon}</span>
      <div className="sc-n">{service.numLabel}</div>
      <T k={service.titleKey} as="h3" />
      <T k={service.descKey} as="p" />
      <ul className="sc-ul">
        {service.bulletKeys.map((k) => (
          <li key={k} dangerouslySetInnerHTML={{ __html: t(k) }} />
        ))}
      </ul>
      <span className="sc-more">{t('svc_more')} →</span>
    </Reveal>
  );
}
