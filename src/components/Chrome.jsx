import { useMemo, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/site';

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
  const location = useLocation();
  const isDarkPage = location.pathname === '/services';

  const routes = useMemo(
    () => navItems.filter((item) => item.path !== '/home'),
    [],
  );

  return (
    <header className="site-header" style={{ zIndex: 50, paddingTop: '24px' }}>
      <div className={`site-frame header-shell ${isDarkPage ? 'is-dark' : 'is-light'}`}>
        <Link className="brand-link" to="/" onClick={() => setIsOpen(false)}>
          <LogoMark />
          <span className="brand-wordmark">
            <span className="brand-name">Fidarix</span>
          </span>
        </Link>

        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} style={{ flex: 1, justifyContent: 'center' }}>
          {routes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              style={{ fontSize: '0.9rem', letterSpacing: '0.02em' }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button className="button button-ghost button-small" style={{ border: 'none', background: 'transparent' }}>
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
      <div className="site-frame">
        <div className="footer-grid">
          {/* Column 1: Logo and Pitch */}
          <div className="footer-col" style={{ gap: '20px' }}>
            <Link className="brand-link" to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              <LogoMark />
              <span className="brand-wordmark" style={{ color: '#ffffff' }}>
                <span className="brand-name">Fidarix</span>
              </span>
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0, maxWidth: '240px' }}>
              High-performance editorial websites built with calm aesthetics, modular structures, and absolute precision.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <Link to="/services" className="footer-link">Web Design</Link>
            <Link to="/services" className="footer-link">Development</Link>
            <Link to="/services" className="footer-link">Branding</Link>
            <Link to="/services" className="footer-link">Motion Systems</Link>
            <Link to="/services" className="footer-link">Custom Apps</Link>
          </div>

          {/* Column 3: Studio */}
          <div className="footer-col">
            <h4 className="footer-heading">Studio</h4>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/portfolio" className="footer-link">Selected Works</Link>
            <Link to="/services#pricing" className="footer-link">Pricing Packages</Link>
            <Link to="/contact" className="footer-link">Contact Studio</Link>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="footer-link">Dribbble</a>
            <div style={{ marginTop: '6px' }}>
              <Link to="/contact" className="hiring-badge" style={{ textDecoration: 'none' }}>
                👋 We're Hiring
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="footer-bottom">
          <span>&copy; 2026 Fidarix Studio. All rights reserved.</span>
          <div className="footer-legal-links">
            <Link to="/contact" className="footer-legal-link">Privacy Policy</Link>
            <span style={{ opacity: 0.3 }}>•</span>
            <Link to="/contact" className="footer-legal-link">Terms of Service</Link>
            <span style={{ opacity: 0.3 }}>•</span>
            <Link to="/contact" className="footer-legal-link">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PreFooter() {
  return (
    <section className="pre-footer-section">
      <div className="site-frame">
        <div className="pre-footer-grid">
          {/* Left Column: Headline */}
          <div className="pre-footer-left">
            <span className="pre-footer-eyebrow">
              <span className="eyebrow-dot" /> Contact
            </span>
            <h2 className="pre-footer-title">
              LET’S WORK <br />
              → TOGETHER
            </h2>
          </div>

          {/* Right Column: concentric circles and contact info */}
          <div className="pre-footer-right">
            <div className="circles-visual-wrapper">
              <svg className="circles-svg" viewBox="0 0 400 150">
                <circle cx="75" cy="75" r="70" fill="none" stroke="rgba(13, 27, 61, 0.1)" strokeWidth="1.5" />
                <circle cx="125" cy="75" r="70" fill="none" stroke="rgba(13, 27, 61, 0.12)" strokeWidth="1.5" />
                <circle cx="175" cy="75" r="70" fill="none" stroke="rgba(13, 27, 61, 0.16)" strokeWidth="1.5" />
                <circle cx="225" cy="75" r="70" fill="none" stroke="rgba(13, 27, 61, 0.2)" strokeWidth="1.5" />
                <circle cx="275" cy="75" r="70" fill="none" stroke="rgba(13, 27, 61, 0.24)" strokeWidth="1.5" />
                <circle cx="325" cy="75" r="70" fill="none" stroke="rgba(13, 27, 61, 0.28)" strokeWidth="1.5" />
                
                {/* Globe grid visual lines */}
                <path d="M 200 5 A 70 70 0 0 1 200 145" fill="none" stroke="rgba(13, 27, 61, 0.12)" strokeWidth="1.5" />
                <path d="M 200 5 A 35 70 0 0 1 200 145" fill="none" stroke="rgba(13, 27, 61, 0.15)" strokeWidth="1.5" />
                <path d="M 200 5 A 15 70 0 0 1 200 145" fill="none" stroke="rgba(13, 27, 61, 0.18)" strokeWidth="1.5" />
                <line x1="130" y1="75" x2="270" y2="75" stroke="rgba(13, 27, 61, 0.2)" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="pre-footer-divider" />

            <div className="pre-footer-sub-grid">
              <p className="pre-footer-text">
                Feel free to reach out if you want to collaborate with us, or simply have a chat. We are always open to new digital sprint perspectives.
              </p>
              <div className="pre-footer-email-col">
                <a href="mailto:hello@fidarix.com" className="pre-footer-email">
                  hello@fidarix.com ↗
                </a>
              </div>
            </div>

            <div style={{ marginTop: '40px', textAlign: 'left' }}>
              <Link to="/contact" className="pre-footer-btn">
                GO TO THE CONTACT PAGE →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteChrome({ children }) {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="site-main">{children}</main>

      <PreFooter />
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

export function ImpactHero({ lines, copy, actions, children }) {
  return (
    <section className={`hero-impact ${!children ? 'hero-impact-default' : ''}`}>
      {children && (
        <div className="hero-impact-background">
          {children}
        </div>
      )}
      <div className="hero-impact-content" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="hero-title">
          {lines.map((line, i) => (
            <span key={i} className="reveal-line">
              <span className="reveal-text">{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-copy">{copy}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}

export function SectionWise({ children, className = '', bg = '', style }) {
  return (
    <section className={`section-wise ${bg} ${className}`} style={style}>
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