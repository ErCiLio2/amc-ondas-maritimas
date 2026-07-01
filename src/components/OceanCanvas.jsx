import { useEffect, useRef } from 'react';

class OceanParticle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.reset(true);
  }
  reset(init) {
    this.z = Math.random();
    this.x = Math.random() * this.w;
    this.y = init ? Math.random() * this.h : this.h + 12;
    this.r = this.z * 3.2 + 0.25;
    this.vy = (this.z * 0.6 + 0.08) * (Math.random() * 0.55 + 0.12);
    this.vx = (Math.random() - 0.5) * 0.4 * this.z;
    this.baseOp = this.z * 0.42 + 0.04;
    this.ph = Math.random() * Math.PI * 2;
    this.wobble = Math.random() * 0.6 + 0.2;
    this.type = Math.random() > 0.78 ? 'glow' : Math.random() > 0.5 ? 'ring' : 'mote';
  }
  tick() {
    this.y -= this.vy;
    this.x += this.vx;
    this.ph += 0.008 + this.z * 0.006;
    this.x += Math.sin(this.ph * this.wobble) * 0.55 * this.z;
    if (this.y < -15) this.reset(false);
  }
  draw(ctx) {
    const op = this.baseOp * (0.55 + 0.45 * Math.sin(this.ph));
    if (this.type === 'glow') {
      const rr = this.r * 5 * (1 + (1 - this.z) * 0.6);
      const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, rr);
      g.addColorStop(0, `rgba(0,240,255,${op * 0.7})`);
      g.addColorStop(0.45, `rgba(0,180,220,${op * 0.22})`);
      g.addColorStop(1, 'rgba(0,240,255,0)');
      ctx.beginPath();
      ctx.arc(this.x, this.y, rr, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    } else if (this.type === 'ring') {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,240,255,${op})`;
      ctx.lineWidth = this.z * 0.9 + 0.2;
      ctx.stroke();
      if (this.r > 1.4) {
        ctx.beginPath();
        ctx.arc(this.x - this.r * 0.3, this.y - this.r * 0.3, this.r * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,248,255,${op * 0.6})`;
        ctx.fill();
      }
    } else {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * 0.5 + 0.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,180,${op * 0.5})`;
      ctx.fill();
    }
  }
}

class Jelly {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.reset();
  }
  reset() {
    this.x = Math.random() * this.w;
    this.y = this.h + 80 + Math.random() * 200;
    this.vy = Math.random() * 0.18 + 0.06;
    this.vx = (Math.random() - 0.5) * 0.12;
    this.r = Math.random() * 28 + 12;
    this.ph = Math.random() * Math.PI * 2;
    this.pulseSpd = Math.random() * 0.02 + 0.008;
    this.hue = Math.random() > 0.6 ? 180 : 150;
    this.tentacles = [];
    const tc = Math.floor(Math.random() * 5) + 4;
    for (let i = 0; i < tc; i++) {
      this.tentacles.push({ offset: (Math.random() - 0.5) * this.r, len: Math.random() * 60 + 30, wag: Math.random() * 2 + 1, ph: Math.random() * Math.PI * 2 });
    }
  }
  tick() {
    this.y -= this.vy;
    this.x += this.vx + Math.sin(this.ph * 0.3) * 0.15;
    this.ph += this.pulseSpd;
    this.tentacles.forEach((t) => (t.ph += 0.018 * t.wag));
    if (this.y < -200) this.reset();
  }
  draw(ctx) {
    const pulse = 0.72 + 0.28 * Math.sin(this.ph);
    const r = this.r * pulse;
    const alpha = 0.12 + 0.08 * Math.sin(this.ph);
    const bg = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, r);
    bg.addColorStop(0, `hsla(${this.hue},100%,75%,${alpha * 1.8})`);
    bg.addColorStop(0.6, `hsla(${this.hue},100%,65%,${alpha * 0.8})`);
    bg.addColorStop(1, `hsla(${this.hue},100%,60%,0)`);
    ctx.beginPath();
    ctx.arc(this.x, this.y, r, Math.PI, Math.PI * 2);
    ctx.fillStyle = bg;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.x, this.y, r, 0.95 * Math.PI, Math.PI * 2.05);
    ctx.strokeStyle = `hsla(${this.hue},100%,80%,${alpha * 3})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    this.tentacles.forEach((t) => {
      ctx.beginPath();
      ctx.moveTo(this.x + t.offset, this.y);
      const cp1x = this.x + t.offset + Math.sin(t.ph) * 18;
      const cp1y = this.y + t.len * 0.35;
      const cp2x = this.x + t.offset + Math.sin(t.ph + 1.2) * 12;
      const cp2y = this.y + t.len * 0.7;
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, this.x + t.offset + Math.sin(t.ph + 2.4) * 8, this.y + t.len);
      ctx.strokeStyle = `hsla(${this.hue},100%,78%,${alpha * 1.6})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    });
  }
}

export default function OceanCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 90 }, () => new OceanParticle(width, height));
    const jellies = Array.from({ length: 4 }, () => new Jelly(width, height));

    let scanY = 0;
    let lastT = 0;
    let rafId;
    function render(t) {
      rafId = requestAnimationFrame(render);
      if (document.hidden) return;
      if (t - lastT < 33) return;
      lastT = t;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < canvas.height; y += 6) {
        const brightness = 0.004 + 0.002 * Math.sin((y + scanY) * 0.035);
        ctx.fillStyle = `rgba(0,240,255,${brightness})`;
        ctx.fillRect(0, y, canvas.width, 2);
      }
      scanY += 0.5;
      const dg = ctx.createLinearGradient(0, 0, 0, canvas.height);
      dg.addColorStop(0, 'rgba(0,240,255,.008)');
      dg.addColorStop(0.5, 'rgba(0,4,8,.02)');
      dg.addColorStop(1, 'rgba(0,4,8,.06)');
      ctx.fillStyle = dg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.w = canvas.width;
        p.h = canvas.height;
        p.tick();
        p.draw(ctx);
      });
      jellies.forEach((j) => {
        j.w = canvas.width;
        j.h = canvas.height;
        j.tick();
        j.draw(ctx);
      });
    }
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas id="ocean-bg" ref={canvasRef} />;
}
