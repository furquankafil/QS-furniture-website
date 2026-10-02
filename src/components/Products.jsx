import siteConfig, { DEMO_MODE } from '../data/siteConfig.js';
import { Reveal } from './Reveal.jsx';

function enquireHref(product) {
  if (siteConfig.whatsapp) {
    const text = encodeURIComponent(`Hello ${siteConfig.businessName}, I would like details about "${product.name}".`);
    return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
  }
  return '#contact';
}

export default function Products() {
  return (
    <section className="section products" id="featured">
      <div className="wrap">
        <div className="prod-head">
          <Reveal>
            <p className="eyebrow center">03 — Featured Furniture</p>
            <h2 className="h-serif">Showroom favourites</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              A glimpse of the floor — timeless silhouettes in premium finishes.
              Enquire for details, fabric options and availability.
            </p>
          </Reveal>
        </div>
        <div className="prod-grid">
          {siteConfig.products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}>
              <article className="prod-card">
                <div className="prod-img">
                  <img src={p.image} alt={p.alt} loading="lazy" />
                  <span className="prod-cat">{p.category}</span>
                </div>
                <div className="prod-body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <a href={enquireHref(p)} className="enquire">Enquire for details →</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {DEMO_MODE && (
          <p className="demo-note">
            Demonstration pieces — <span>easily replaced</span> with the live catalogue in siteConfig.js
          </p>
        )}
      </div>
    </section>
  );
}
