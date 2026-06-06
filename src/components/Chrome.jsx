import { Link, useLocation } from 'react-router-dom';
import SiteHeader, { LogoMark } from './Navbar';


function SiteFooter({ isDark }) {
  return (
    <footer className={`footer-wise ${isDark ? 'is-dark' : ''}`}>
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
      {/* Background elements */}
      <div className="pf-orb pf-orb-1" />
      <div className="pf-orb pf-orb-2" />
      <div className="pf-orb pf-orb-3" />
      <div className="pf-grid-texture" />

      <div className="pf-inner">
        {/* Left Column */}
        <div className="pf-left">
          <div className="pf-availability">
            <span className="pf-pulse" />
            <span>Available for new projects</span>
          </div>

          <h2 className="pf-headline">
            LET'S BUILD
            <br />
            <span className="pf-headline-accent">SOMETHING</span>
            <br />
            GREAT.
          </h2>

          <p className="pf-subtext">
            We partner with ambitious brands to craft digital experiences that convert, inspire, and endure. Ready when you are.
          </p>

          <Link to="/contact" className="pf-cta">
            <span>Start a project</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Divider */}
        <div className="pf-vdivider" />

        {/* Right Column */}
        <div className="pf-right">
          <div className="pf-contact-block">
            <span className="pf-label">WRITE TO US</span>
            <a href="mailto:hello@fidarix.com" className="pf-email">
              hello@fidarix.com
            </a>
          </div>

          <div className="pf-contact-block">
            <span className="pf-label">CALL US</span>
            <a href="tel:+15550149900" className="pf-phone">+1 (555) 014-9900</a>
          </div>

          <div className="pf-hdivider" />

          <div className="pf-contact-block">
            <span className="pf-label">FOLLOW US</span>
            <div className="pf-socials">
              {[
                { label: 'Instagram', href: 'https://instagram.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'X / Twitter', href: 'https://x.com' },
                { label: 'YouTube', href: 'https://youtube.com' },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="pf-social-link">
                  {label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Decorative arc graphic */}
          <div className="pf-arc-wrapper">
            <svg viewBox="0 0 260 260" fill="none" className="pf-arc-svg">
              <defs>
                <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#9b4dff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#4cc3ff" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <circle cx="130" cy="130" r="120" stroke="url(#arcGrad)" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="130" cy="130" r="88" stroke="rgba(155,77,255,0.25)" strokeWidth="1" />
              <circle cx="130" cy="130" r="56" stroke="rgba(76,195,255,0.2)" strokeWidth="1" />
              <circle cx="130" cy="130" r="24" fill="rgba(155,77,255,0.15)" stroke="rgba(155,77,255,0.4)" strokeWidth="1" />
              <circle cx="130" cy="10" r="4" fill="#9b4dff" />
              <circle cx="250" cy="130" r="4" fill="#4cc3ff" />
              <circle cx="130" cy="250" r="4" fill="#5a74ff" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteChrome({ children }) {
  const location = useLocation();
  const isDarkPage = location.pathname === '/services';
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="site-main">{children}</main>

      {!isContactPage && <PreFooter />}
      <SiteFooter isDark={isDarkPage} />
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