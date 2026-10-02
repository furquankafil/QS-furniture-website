import { useEffect, useRef } from 'react';

// Adds .is-visible when element enters viewport. Re-usable luxury reveal.
export function useRevealRoot(dep) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current || document;
    const els = root.querySelectorAll
      ? root.querySelectorAll('.reveal, .reveal-img')
      : [];
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
  return ref;
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', style = {}, ...rest }) {
  const r = useRef(null);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-visible');
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    // Safety: never leave content permanently invisible (e.g. observer never fires)
    const t = setTimeout(() => el.classList.add('is-visible'), 3500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return (
    <Tag ref={r} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
