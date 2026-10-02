import siteConfig from '../data/siteConfig.js';

export default function Preloader({ done }) {
  return (
    <div className={`preloader ${done ? 'done' : ''}`} aria-hidden={done}>
      <img
        src={siteConfig.logo}
        alt={`${siteConfig.businessName} logo`}
        className="preloader-logo"
      />
      <div className="preloader-name">{siteConfig.businessName}</div>
      <div className="preloader-bar"><span /></div>
    </div>
  );
}
