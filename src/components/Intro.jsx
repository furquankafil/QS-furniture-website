import siteConfig from '../data/siteConfig.js';
import { Reveal } from './Reveal.jsx';

export default function Intro() {
  const d = siteConfig.intro;
  return (
    <section className="section" id="experience">
      <div className="wrap intro-grid">
        <Reveal>
          <p className="eyebrow">{d.label}</p>
          <div className="h-serif intro-copy">
            <h2 className="h-serif">{d.title}</h2>
          </div>
          {d.copy.map((p, i) => (
            <p key={i} style={{ color: 'var(--text-muted)', marginBottom: 14 }}>{p}</p>
          ))}
          <div style={{ display: 'flex', gap: 14, marginTop: 26, flexWrap: 'wrap' }}>
            <a href="#story" className="btn btn-dark">Our Ethos</a>
            <a href="#collections" className="btn btn-ghost">View Collections</a>
          </div>
          <div className="intro-sign">
            <span className="sec-num">01 — Editorial</span>
            <span className="rule" />
            <span style={{ fontSize: 11, letterSpacing: '.3em', color: 'var(--champagne-gold)', fontWeight: 700 }}>QS</span>
          </div>
        </Reveal>
        <div className="intro-media">
          <Reveal className="reveal-img">
            <img className="main" src={d.image} alt={d.imageAlt} loading="lazy" />
          </Reveal>
          <span className="frame" aria-hidden />
          <img className="intro-small" src={d.imageSmall} alt={d.imageSmallAlt} loading="lazy" />
          <div className="intro-badge">
            <b>QS</b>
            <small>Furniture<br />House</small>
          </div>
        </div>
      </div>
    </section>
  );
}
