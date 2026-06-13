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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initially
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = useMemo(
    () => navItems.filter((item) => item.path !== '/home'),
    [],
  );

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-frame">
        <div className="header-shell">
          <Link className="brand-link" to="/">
            <LogoMark />
            <span className="brand-wordmark">
              <span className="brand-name">Fidarix</span>
            </span>
          </Link>

          <nav className="nav-links" style={{ flex: 1, justifyContent: 'center' }}>
            {routes.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
                style={{ fontSize: '0.9rem', letterSpacing: '0.02em' }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
