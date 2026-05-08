import { useMemo, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/site';
import InfiniteMenu from './InfiniteMenu';

function LogoMark() {
  return (
    <svg className="logo-mark-svg" viewBox="0 0 96 96" aria-hidden="true">
      <defs>
        <linearGradient id="fidarix-brand" x1="16" y1="12" x2="86" y2="86" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9b4dff" />
          <stop offset="52%" stopColor="#5a74ff" />
          <stop offset="100%" stopColor="#4cc3ff" />
        </linearGradient>
      </defs>
      <path d="M18 24h46l14 14H32L18 24Z" fill="url(#fidarix-brand)" />
      <path d="M18 52h46l14 14H32L18 52Z" fill="url(#fidarix-brand)" />
    </svg>
  );
}

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = useMemo(
    () => navItems.filter((item) => item.path !== '/home'),
    [],
  );

  return (
    <header className="site-header" style={{ zIndex: 50, border: 'none', background: 'transparent' }}>
      <div className="site-frame header-shell" style={{ background: 'transparent', border: 'none', boxShadow: 'none', backdropFilter: 'none', padding: '12px 0' }}>
        <Link className="brand-link" to="/" onClick={() => setIsOpen(false)}>
          <LogoMark />
          <span className="brand-wordmark" style={{ color: '#fff' }}>
            <span className="brand-name">Fidarix</span>
          </span>
        </Link>

        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} style={{ flex: 1, justifyContent: 'center' }}>
          {routes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', letterSpacing: '0.02em' }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions" style={{ color: '#fff' }}>
          <button className="button button-ghost button-small" style={{ border: 'none', background: 'transparent', color: '#fff' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="footer-wise">
      <div className="footer-marquee">
        <Marquee 
          items={[
            "DESIGNED BY FIDARIX •", "DEVELOPED BY FIDARIX •", "MADE FOR THE WEB •",
            "DESIGNED BY FIDARIX •", "DEVELOPED BY FIDARIX •", "MADE FOR THE WEB •"
          ]} 
          speed="40s"
        />
      </div>
      <div className="site-frame" style={{ padding: '60px 0', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
        <p>&copy; 2026 Fidarix Studio. All rights reserved.</p>
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 30 }}>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }) {
  const menuItems = [
    {
      image: 'https://picsum.photos/600/600?grayscale&1',
      link: '/services',
      title: 'Branding',
      description: 'Core identities for modern companies.'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale&2',
      link: '/portfolio',
      title: 'Design',
      description: 'Editorial web and interface systems.'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale&3',
      link: '/services',
      title: 'Web',
      description: 'High-performance React development.'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale&4',
      link: '/contact',
      title: 'Studio',
      description: 'Behind the scenes at Fidarix.'
    }
  ];

  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="site-main">{children}</main>
      
      {/* Interactive Infinite Menu just above footer */}
      <div style={{ height: '700px', position: 'relative', overflow: 'hidden' }}>
        <InfiniteMenu items={menuItems} scale={0.9} />
      </div>

      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, copy, actions, panel, children }) {
  return (
    <section className="section hero-panel">
      <div className="hero-grid">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="hero-title">{title}</h1>
          <p className="hero-copy">{copy}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>
        <div className="brand-canvas surface-soft">
          {panel || children}
        </div>
      </div>
    </section>
  );
}

export function ImpactHero({ lines, copy, actions }) {
  return (
    <section className="hero-impact">
      <h1 className="hero-title">
        {lines.map((line, i) => (
          <span key={i} className="reveal-line">
            <span className="reveal-text">{line}</span>
          </span>
        ))}
      </h1>
      <p className="hero-copy">{copy}</p>
      {actions ? <div className="hero-actions">{actions}</div> : null}
    </section>
  );
}

export function SectionWise({ children, className = '', bg = '' }) {
  return (
    <section className={`section-wise ${bg} ${className}`}>
      <div className="site-frame">
        {children}
      </div>
    </section>
  );
}

export function Marquee({ items, speed = '30s' }) {
  return (
    <div className="marquee-container">
      <div className="marquee-content" style={{ animationDuration: speed }}>
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, i) => (
          <span key={`dup-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export function ButtonLink({ to, children, variant = 'primary' }) {
  return (
    <Link className={`button button-${variant}`} to={to}>
      {children}
    </Link>
  );
}

export function StatGrid({ stats }) {
  return (
    <div className="stat-strip">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.label}>
          <p className="stat-number">{stat.value}</p>
          <p className="stat-note">{stat.label}</p>
        </article>
      ))}
    </div>
  );
}

export function BrandCanvas() {
  return (
    <div>
      <div className="project-visual">
        <span className="project-visual-label">Fidarix theme system</span>
      </div>
      <div className="pill-row" style={{ justifyContent: 'center', marginTop: 14 }}>
        <span className="pill">Gradient blue</span>
        <span className="pill">Editorial spacing</span>
        <span className="pill">Soft glass cards</span>
      </div>
    </div>
  );
}