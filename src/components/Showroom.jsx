import siteConfig from '../data/siteConfig.js';
import { Reveal } from './Reveal.jsx';

export default function Showroom() {
  const s = siteConfig.showroom;
  return (
    <section className="showroom" id="showroom">
      <img className="bg" src={s.image} alt={s.imageAlt} loading="lazy" />
      <div className="showroom-inner">
        <Reveal>
          <p className="eyebrow center">04 — The Showroom</p>
          <h2>{s.title.toUpperCase()}</h2>
          <div className="gold-line" style={{ width: 160, margin: '0 auto' }} />
          <div>
            <div className="showroom-card">
              <small>{s.overlay}</small>
              <strong>{siteConfig.address}</strong>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-gold" href={siteConfig.googleMapsUrl} target="_blank" rel="noreferrer">Get Directions</a>
            <a className="btn btn-outline" href="#contact">Plan Your Visit</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
