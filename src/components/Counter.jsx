import { useEffect, useRef } from 'react';

export default function Counter({ target, separator = false }) {
  const ref = useRef(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || doneRef.current) return;
          doneRef.current = true;
          const dur = 2600;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            const val = Math.round(ease * target);
            el.textContent = separator ? val.toLocaleString('pt-PT') : String(val);
            el.style.textShadow = `0 0 ${40 * ease}px rgba(0,240,255,${0.8 * ease})`;
            if (p < 1) requestAnimationFrame(tick);
            else {
              el.textContent = separator ? target.toLocaleString('pt-PT') : String(target);
              el.style.textShadow = '';
            }
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, separator]);

  return (
    <span className="counter" ref={ref}>
      {target}
    </span>
  );
}
