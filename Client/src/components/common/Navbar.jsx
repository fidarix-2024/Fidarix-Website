import { useMemo, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navItems } from '../../data/site';
import './Navbar.css';

export function LogoMark() {
  return (
    <img src="/images/common/logo.png" alt="Logo" className="logo-mark-img" />
  );
}

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = useMemo(
    () => navItems.filter((item) => item.path !== '/home'),
    [],
  );

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-shell" style={{ width: '100%', padding: '0 40px', position: 'relative' }}>
        <Link className="brand-link" to="/">
          <LogoMark />
          <span className="brand-wordmark">
            <span className="brand-name">Fidarix</span>
          </span>
        </Link>

        {/* Mobile hamburger button */}
        <button
          className={`mobile-menu-button ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line line-top" />
          <span className="hamburger-line line-mid" />
          <span className="hamburger-line line-bot" />
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {routes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
