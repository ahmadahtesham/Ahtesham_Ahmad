import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'tools', label: 'Tools' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="topnav">
      <div className="wrap">
        <div className="logo"><span className="sq" />Ahtesham Ahmad</div>

        <nav className={`links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button className="theme-toggle" aria-label="Toggle dark mode" onClick={onToggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="burger" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
