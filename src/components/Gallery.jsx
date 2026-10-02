import { useCallback, useEffect, useState } from 'react';
import siteConfig from '../data/siteConfig.js';
import { Reveal } from './Reveal.jsx';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(-1);
  const items = siteConfig.gallery;

  const close = useCallback(() => setLightbox(-1), []);
  const step = useCallback((d) => {
    setLightbox((v) => (v + d + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (lightbox < 0) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, step]);

  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">07 — Gallery</p>
          <h2 className="h-serif" style={{ fontSize: 'clamp(32px,4.8vw,60px)', marginTop: 14 }}>
            Rooms that speak<br />quiet luxury.
          </h2>
        </Reveal>
        <div className="gal-grid">
          {items.map((g, i) => (
            <Reveal key={i}>
              <button
                className={`gal-item ${g.tall ? 'tall' : ''}`}
                onClick={() => setLightbox(i)}
                aria-label={`Open image: ${g.alt}`}
              >
                <img src={g.image} alt={g.alt} loading="lazy" />
                <span className="gal-veil">＋</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <div className={`lightbox ${lightbox >= 0 ? 'open' : ''}`} onClick={close} role="dialog" aria-label="Image viewer">
        {lightbox >= 0 && (
          <>
            <button className="lb-close" onClick={close} aria-label="Close">✕</button>
            <button className="lb-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">←</button>
            <img src={items[lightbox].image} alt={items[lightbox].alt} onClick={(e) => e.stopPropagation()} />
            <button className="lb-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">→</button>
          </>
        )}
      </div>
    </section>
  );
}
