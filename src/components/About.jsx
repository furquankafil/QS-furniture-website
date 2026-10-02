import siteConfig from '../data/siteConfig.js';
import { Reveal } from './Reveal.jsx';

export default function About() {
  const a = siteConfig.about;
  return (
    <section className="section about dark-section" id="story">
      <div className="wrap about-grid">
        <div className="about-media">
          <Reveal className="reveal-img"><img src={a.image} alt={a.imageAlt} loading="lazy" /></Reveal>
          <Reveal className="reveal-img" delay={120}><img src={a.image2} alt={a.image2Alt} loading="lazy" /></Reveal>
        </div>
        <Reveal>
          <p className="eyebrow">{a.label}</p>
          <h2 className="h-serif">{a.title}</h2>
          {a.copy.map((p, i) => <p key={i}>{p}</p>)}
          <ul className="about-list">
            {a.points.map((pt) => <li key={pt}>{pt}</li>)}
          </ul>
          <a href="#showroom" className="btn btn-gold">Visit the Showroom</a>
        </Reveal>
      </div>
    </section>
  );
}
