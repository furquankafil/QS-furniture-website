import { useEffect, useRef } from 'react';
import siteConfig from '../data/siteConfig.js';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (bgRef.current) {
          const y = Math.min(window.scrollY, window.innerHeight);
          bgRef.current.style.transform = `translateY(${y * 0.22}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const h = siteConfig.hero;

  return (
    <section className="hero" id="top">
      <div className="hero-bg" ref={bgRef}>
        <img src={h.image} alt={h.imageAlt} fetchpriority="high" />
      </div>
      <div className="hero-veil" />
      <div className="hero-content">
        <p className="hero-eyebrow hero-anim" style={{ animationDelay: '.15s' }}>{h.eyebrow}</p>
        <h1>
          <span className="hero-anim" style={{ display: 'block', animationDelay: '.3s' }}>{h.titleTop}</span>
          <span className="hero-anim italic" style={{ display: 'block', animationDelay: '.45s' }}>{h.titleBottom}</span>
        </h1>
        <div className="hero-line hero-anim" style={{ animationDelay: '.6s' }} />
        <p className="hero-sub hero-anim" style={{ animationDelay: '.7s' }}>{h.sub}</p>
        <div className="hero-ctas hero-anim" style={{ animationDelay: '.85s' }}>
          <a href="#collections" className="btn btn-gold">{h.primaryCta}</a>
          <a href="#showroom" className="btn btn-outline">{h.secondaryCta}</a>
        </div>
        <div className="hero-meta hero-anim" style={{ animationDelay: '1s' }}>
          <span>Premium Furniture — {siteConfig.city}</span>
          <span className="scroll-hint">Scroll <i /></span>
        </div>
      </div>
    </section>
  );
}
