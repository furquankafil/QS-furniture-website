import siteConfig from '../data/siteConfig.js';
import { Reveal } from './Reveal.jsx';

export default function Collections() {
  return (
    <section className="section" id="collections">
      <div className="wrap">
        <div className="coll-head">
          <Reveal>
            <p className="eyebrow">02 — Collections</p>
            <h2 className="h-serif">EXPLORE OUR<br />COLLECTIONS</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>Six considered worlds — each curated for Indian homes, each finished to be lived with for years.</p>
          </Reveal>
        </div>
        <div className="coll-grid">
          {siteConfig.collections.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 90}>
              <a href="#featured" className="coll-card" aria-label={c.title}>
                <img src={c.image} alt={c.alt} loading="lazy" />
                <span className="coll-arrow">→</span>
                <span className="coll-info">
                  <small>{String(i + 1).padStart(2, '0')} — Collection</small>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
