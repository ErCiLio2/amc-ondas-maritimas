import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LangContext.jsx';

export default function DepthMeter() {
  const { t } = useLang();
  const fillRef = useRef(null);
  const bubsRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    function onScroll() {
      const sy = window.scrollY;
      if (sy > 200) setVisible(true);
      const pct = Math.min(sy / (document.body.scrollHeight - window.innerHeight), 1);
      if (fillRef.current) fillRef.current.style.height = pct * 100 + '%';
      setDepth(Math.round(pct * 200));
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      const b = document.createElement('div');
      b.className = 'dm-bub';
      b.style.left = Math.random() * 8 + 'px';
      b.style.animationDuration = 2 + Math.random() * 2 + 's';
      b.style.animationDelay = Math.random() * 0.5 + 's';
      bubsRef.current?.appendChild(b);
      setTimeout(() => b.remove(), 4000);
    }, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="depth-meter" className={visible ? 'visible' : ''}>
      <span className="dm-label">{t('dep')}</span>
      <div className="dm-track">
        <div className="dm-fill" ref={fillRef} />
        <div className="dm-bubbles" ref={bubsRef} />
      </div>
      <div className="dm-sub">🤿</div>
      <span className="dm-val">{String(depth).padStart(3, '0')}m</span>
    </div>
  );
}
