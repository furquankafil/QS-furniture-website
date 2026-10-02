import { useEffect, useState } from 'react';
import siteConfig from './data/siteConfig.js';
import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Collections from './components/Collections.jsx';
import Products from './components/Products.jsx';
import Showroom from './components/Showroom.jsx';
import Trust from './components/Trust.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useRevealRoot } from './components/Reveal.jsx';

function Strip() {
  const items = ['Premium Furniture', 'Timeless Design', 'Craftsmanship', 'Bareilly Showroom', 'QS Furniture House'];
  const row = [...items, ...items, ...items];
  return (
    <div className="strip" aria-hidden>
      <div className="strip-track">
        {row.map((t, i) => <span key={i}>◆ {t}</span>)}
      </div>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const revealRef = useRevealRoot(loaded);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1700);
    return () => clearTimeout(t);
  }, []);

  // subtle cursor interaction (desktop only)
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring || !window.matchMedia('(hover:hover)').matches) return;
    let x = 0, y = 0, rx = 0, ry = 0, raf = 0;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    const hoverables = () => document.querySelectorAll('a, button, .coll-card');
    const onOver = () => document.body.classList.add('cursor-hover');
    const onOut = () => document.body.classList.remove('cursor-hover');
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(loop);
    const els = hoverables();
    els.forEach((el) => {
      el.addEventListener('mouseenter', onOver);
      el.addEventListener('mouseleave', onOut);
    });
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
      els.forEach((el) => {
        el.removeEventListener('mouseenter', onOver);
        el.removeEventListener('mouseleave', onOut);
      });
    };
  }, [loaded]);

  useEffect(() => {
    document.title = `${siteConfig.businessName} | Premium Furniture in ${siteConfig.city}`;
  }, []);

  return (
    <>
      <Preloader done={loaded} />
      <div className="cursor-dot" aria-hidden />
      <div className="cursor-ring" aria-hidden />
      <Navbar />
      <main ref={revealRef}>
        <p style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          {siteConfig.businessName} — Premium Furniture in {siteConfig.city}
        </p>
        <Hero />
        <Strip />
        <Intro />
        <About />
        <Collections />
        <Products />
        <Showroom />
        <Trust />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
