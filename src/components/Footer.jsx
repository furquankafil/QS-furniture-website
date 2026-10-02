import siteConfig from '../data/siteConfig.js';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src={siteConfig.logo} alt={`${siteConfig.businessName} logo`} loading="lazy" />
          <h4>{siteConfig.businessName}</h4>
          <p style={{ fontSize: 14, maxWidth: '32ch' }}>
            Timeless furniture, refined craftsmanship — {siteConfig.addressShort}.
          </p>
        </div>
        <div>
          <h5>Explore</h5>
          <ul>
            <li><a href="#experience">The QS Experience</a></li>
            <li><a href="#story">Our Ethos</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
        <div>
          <h5>Collections</h5>
          <ul>
            {siteConfig.collections.map((c) => (
              <li key={c.id}><a href="#collections">{c.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.phone || siteConfig.phoneDisplay}</li>
            <li><a href={siteConfig.googleMapsUrl} target="_blank" rel="noreferrer">Get Directions →</a></li>
            <li style={{ opacity: .6 }}>Instagram / Facebook — to be linked</li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</span>
        <em>{siteConfig.footerNote}</em>
      </div>
    </footer>
  );
}
