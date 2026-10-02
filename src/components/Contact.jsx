import siteConfig from '../data/siteConfig.js';
import { Reveal } from './Reveal.jsx';

function contactLinks() {
  const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/\s/g, '')}` : '#contact';
  const waHref = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello ' + siteConfig.businessName + ', I would like to enquire about furniture.')}`
    : '#contact';
  return { phoneHref, waHref };
}

export default function Contact() {
  const c = siteConfig.contact;
  const { phoneHref, waHref } = contactLinks();
  const phoneActive = Boolean(siteConfig.phone);
  const waActive = Boolean(siteConfig.whatsapp);

  return (
    <section className="section contact dark-section" id="contact">
      <div className="wrap contact-grid">
        <Reveal>
          <p className="eyebrow">08 — Visit Us</p>
          <h2 className="h-serif">{c.title.toUpperCase()}</h2>
          <p className="sub">{c.sub}</p>
          <div className="addr-box">
            <span className="pin">◈</span>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--champagne-gold-light)' }}>
                Showroom Address
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 20, marginTop: 6 }}>{siteConfig.address}</div>
              <div style={{ fontSize: 13, color: 'rgba(239,233,219,.6)', marginTop: 4 }}>
                Open for walk-ins — replace with exact hours in siteConfig
              </div>
            </div>
          </div>
          <div className="contact-actions">
            <a href={phoneHref} className="btn btn-gold" {...(!phoneActive ? { onClick: (e) => e.preventDefault(), title: 'Add phone number in siteConfig.js' } : {})}>
              Call Now
            </a>
            <a href={waHref} className="btn btn-outline" target={waActive ? '_blank' : undefined} rel="noreferrer" {...(!waActive ? { onClick: (e) => e.preventDefault(), title: 'Add WhatsApp number in siteConfig.js' } : {})}>
              WhatsApp
            </a>
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
              Get Directions
            </a>
          </div>
          {!phoneActive && (
            <p style={{ marginTop: 14, fontSize: 12, letterSpacing: '.08em', color: 'rgba(239,233,219,.55)' }}>
              * Phone / WhatsApp buttons are elegant placeholders until the owner shares official numbers.
            </p>
          )}
        </Reveal>
        <Reveal delay={140}>
          <div className="contact-card">
            <p className="sec-num">QS — Enquiry</p>
            <h3>Plan your visit</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Share what you are looking for — we will keep it ready.</p>
            <div style={{ marginTop: 10 }}>
              <div className="row"><b>Phone</b>{phoneActive ? <span>{siteConfig.phone}</span> : <span className="placeholder">{siteConfig.phoneDisplay}</span>}</div>
              <div className="row"><b>WhatsApp</b>{waActive ? <span>Chat now</span> : <span className="placeholder">Number to be added</span>}</div>
              <div className="row"><b>Email</b>{siteConfig.email ? <span>{siteConfig.email}</span> : <span className="placeholder">Email to be added</span>}</div>
              <div className="row" style={{ borderBottom: 0 }}><b>Address</b><span style={{ textAlign: 'right', maxWidth: '60%' }}>{siteConfig.address}</span></div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
              <img src={siteConfig.logo} alt={`${siteConfig.businessName} logo`} style={{ width: 84, height: 56, objectFit: 'contain', background: '#0b241b', padding: 6, border: '1px solid rgba(198,161,91,.3)' }} />
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Official logo, used exactly as supplied — never stretched, always with clear space.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
