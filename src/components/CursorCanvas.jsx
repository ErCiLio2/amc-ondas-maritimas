import { useEffect, useRef } from 'react';

export default function CursorCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const isCoarsePointer = matchMedia('(pointer:coarse)').matches;
    if (isCoarsePointer) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const glowSprite = document.createElement('canvas');
    glowSprite.width = glowSprite.height = 64;
    const gx = glowSprite.getContext('2d');
    const g = gx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(0,240,255,1)');
    g.addColorStop(0.4, 'rgba(0,240,255,.5)');
    g.addColorStop(1, 'rgba(0,240,255,0)');
    gx.fillStyle = g;
    gx.beginPath();
    gx.arc(32, 32, 32, 0, Math.PI * 2);
    gx.fill();

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let tx = mx, ty = my;
    let tx2 = mx, ty2 = my;
    const TRAIL = [];
    const TRAIL_MAX = 12;
    let isHover = false;
    let clickRipples = [];

    function onMouseMove(e) {
      mx = e.clientX;
      my = e.clientY;
    }
    function onClick(e) {
      clickRipples.push({
        x: e.clientX,
        y: e.clientY,
        rings: [{ r: 0, op: 0.8 }, { r: 0, op: 0.55 }, { r: 0, op: 0.35 }],
      });
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', onClick);

    const hoverEls = document.querySelectorAll('a,button,.sc,.par-card,.lc');
    const onEnter = () => (isHover = true);
    const onLeave = () => (isHover = false);
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    let rafId;
    function renderCursor() {
      rafId = requestAnimationFrame(renderCursor);
      if (document.hidden) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      tx += (mx - tx) * 0.12;
      ty += (my - ty) * 0.12;
      tx2 += (mx - tx2) * 0.06;
      ty2 += (my - ty2) * 0.06;

      TRAIL.push({ x: mx, y: my });
      if (TRAIL.length > TRAIL_MAX) TRAIL.shift();
      for (let i = 0; i < TRAIL.length; i++) {
        const p = TRAIL[i];
        const progress = i / TRAIL_MAX;
        const size = progress * 2.8 * 3 * 2;
        if (size <= 0) continue;
        ctx.globalAlpha = progress * 0.35;
        ctx.drawImage(glowSprite, p.x - size / 2, p.y - size / 2, size, size);
      }
      ctx.globalAlpha = 1;

      const dotR = isHover ? 6 : 4;
      ctx.drawImage(glowSprite, mx - dotR * 2.6, my - dotR * 2.6, dotR * 5.2, dotR * 5.2);
      ctx.beginPath();
      ctx.arc(mx, my, dotR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,240,255,1)';
      ctx.fill();

      const ir = isHover ? 18 : 10;
      ctx.beginPath();
      ctx.arc(tx, ty, ir, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,240,255,${isHover ? 0.9 : 0.6})`;
      ctx.lineWidth = isHover ? 1.5 : 1;
      ctx.stroke();

      const or = isHover ? 52 : 34;
      ctx.save();
      ctx.translate(tx2, ty2);
      ctx.rotate(Date.now() * 0.001);
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, or, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,240,255,${isHover ? 0.55 : 0.28})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);
      if (isHover) {
        [[or, 0], [0, or], [-or, 0], [0, -or]].forEach(([cx2, cy2]) => {
          ctx.beginPath();
          ctx.moveTo(cx2 * 0.75, cy2 * 0.75);
          ctx.lineTo(cx2 * 0.92, cy2 * 0.92);
          ctx.strokeStyle = 'rgba(0,240,255,.9)';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }
      ctx.restore();

      clickRipples = clickRipples.filter((rp) => {
        rp.rings.forEach((ring, i) => {
          ring.r += 3.5 + i * 1.2;
          ring.op *= 0.94;
          ctx.beginPath();
          ctx.arc(rp.x, rp.y, ring.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0,240,255,${ring.op})`;
          ctx.lineWidth = 1.5 - i * 0.3;
          ctx.stroke();
        });
        return rp.rings[rp.rings.length - 1].op > 0.01;
      });
    }
    rafId = requestAnimationFrame(renderCursor);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onClick);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas id="cursor-cv" ref={canvasRef} />;
}
