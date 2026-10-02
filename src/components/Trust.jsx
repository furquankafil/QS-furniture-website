import siteConfig from '../data/siteConfig.js';
import { Reveal } from './Reveal.jsx';

const ICONS = ['◆', '◇', '⬔', '⬥'];

export default function Trust() {
  return (
    <>
      <section className="section trust">
        <div className="wrap">
          <Reveal style={{ textAlign: 'center' }}>
            <p className="eyebrow center">05 — Why QS</p>
            <h2 className="h-serif" style={{ fontSize: 'clamp(30px,4.4vw,54px)', marginTop: 14 }}>
              A showroom built on trust.
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '60ch', margin: '12px auto 0' }}>
              No inflated claims — just a considered range, honest guidance and furniture
              chosen to serve your home for years.
            </p>
          </Reveal>
          <div className="trust-grid">
            {siteConfig.trust.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="trust-cell">
                  <div className="trust-ico">{ICONS[i % ICONS.length]}</div>
                  <b>{t.title.toUpperCase()}</b>
                  <p>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section why dark-section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">06 — The Difference</p>
            <h2 className="h-serif" style={{ fontSize: 'clamp(30px,4.4vw,54px)', marginTop: 14, color: '#fff' }}>
              Considered, down to the detail.
            </h2>
          </Reveal>
          <div className="why-grid">
            {siteConfig.why.map((w, i) => (
              <Reveal key={w.no} delay={i * 80}>
                <div className="why-card">
                  <span className="no">{w.no}</span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
