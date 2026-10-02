import { useEffect, useState } from 'react';
import siteConfig from '../data/siteConfig.js';

const LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Story', href: '#story' },
  { label: 'Collections', href: '#collections' },
  { label: 'Showroom', href: '#showroom' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open ]);

  return (
    <>
      <header className={`navbar ${scrolled && !open ? 'scrolled' : 'transparent'}`}>
        <div className="navbar-inner">
          <a href="#top" className="brand" aria-label={siteConfig.businessName}>
            <span className="brand-logo-box">
              <img src={siteConfig.logo} alt={`${siteConfig.businessName} logo`} />
            </span>
            <span className="brand-text">
              <strong>QS FURNITURE HOUSE</strong>
              <small>Bareilly</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <a href="#contact" className="nav-cta">Enquire</a>
          <button
            className={`burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="brand" style={{ marginBottom: 18 }}>
          <span className="brand-logo-box">
            <img src={siteConfig.logo} alt={`${siteConfig.businessName} logo`} />
          </span>
          <span className="brand-text">
            <strong>QS FURNITURE HOUSE</strong>
            <small>Bareilly</small>
          </span>
        </div>
        {LINKS.map((l, i) => (
          <a key={l.href} href={l.href} className="big" onClick={() => setOpen(false)}>
            {l.label} <span>0{i + 1}</span>
          </a>
        ))}
        <div className="mobile-foot">
          {siteConfig.address}<br />{siteConfig.phoneDisplay}
        </div>
      </div>
    </>
  );
}
