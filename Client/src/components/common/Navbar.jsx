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
    let scrollThreshold = 50; // fallback

    const updateThreshold = () => {
      // Find the first section on the page which is typically the hero
      const hero = document.querySelector('main section:first-of-type') || 
                   document.querySelector('.contact-hero') || 
                   document.querySelector('main > div:first-child');
                   
      if (hero) {
        // Trigger right when the hero section is crossed (minus navbar height)
        scrollThreshold = Math.max(hero.offsetHeight - 80, 50);
      } else {
        scrollThreshold = window.innerHeight * 0.7; // default to 70vh if no hero found
      }
    };

    // Use a slight delay to ensure DOM is fully rendered before calculating
    setTimeout(updateThreshold, 100);
    window.addEventListener('resize', updateThreshold, { passive: true });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initially
    handleScroll();
    
    return () => {
      window.removeEventListener('resize', updateThreshold);
      window.removeEventListener('scroll', handleScroll);
    };
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

        <nav className="nav-links" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px' }}>
          {routes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              style={{ fontSize: '1.15rem', letterSpacing: '0.02em', padding: '10px 16px' }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
