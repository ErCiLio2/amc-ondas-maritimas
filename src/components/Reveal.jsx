import { forwardRef, useEffect, useRef } from 'react';

const Reveal = forwardRef(function Reveal({ as: Tag = 'div', className = '', children, ...rest }, forwardedRef) {
  const innerRef = useRef(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function setRefs(node) {
    innerRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  return (
    <Tag ref={setRefs} className={className} {...rest}>
      {children}
    </Tag>
  );
});

export default Reveal;
