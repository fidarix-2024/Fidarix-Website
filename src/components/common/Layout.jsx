import { useMemo, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/site';
import TextPressure from './TextPressure';

function LogoMark() {
  return (
    <svg className="w-9 h-9 object-contain block" viewBox="0 0 96 96" aria-hidden="true">
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
  const isDarkPage = true; // Always dark theme navbar

  const routes = useMemo(
    () => navItems.filter((item) => item.path !== '/home'),
    [],
  );

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-6 translate-z-[9999px]">
      <div className={`w-[min(1180px,calc(100%-32px))] mx-auto flex items-center justify-between gap-[18px] px-[18px] py-4 border rounded-full backdrop-blur-[18px] shadow-[0_18px_50px_rgba(0,0,0,0.4)] transition-all ${
        isDarkPage 
          ? 'border-white/8 bg-black/76 text-white' 
          : 'border-black/8 bg-white/76 text-black'
      }`}>
        <Link className="inline-flex items-center gap-3 min-w-0" to="/" onClick={() => setIsOpen(false)}>
          <LogoMark />
          <span className="flex flex-col line-height-1">
            <span className="font-['Space_Grotesk'] font-medium text-base tracking-[0.26em] uppercase">Fidarix</span>
          </span>
        </Link>

        {/* Mobile menu trigger */}
        <button 
          className="md:hidden p-2 text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links flex-1 md:flex items-center justify-center gap-1 flex-wrap ${
          isOpen 
            ? 'absolute top-[85px] left-4 right-4 flex flex-col items-center bg-black/95 border border-white/10 rounded-3xl p-6 gap-4 z-50' 
            : 'hidden md:flex'
        }`}>
          {routes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `px-3.5 py-2.5 rounded-full font-semibold text-[0.9rem] tracking-[0.02em] transition-all hover:bg-primary/8 hover:text-white ${
                isActive ? 'bg-primary/12 text-white' : 'text-white/60'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <button className="inline-flex items-center justify-center gap-2.5 min-h-[42px] px-4 rounded-full border border-white/8 text-white font-bold text-[0.92rem] tracking-[-0.01em] transition-all bg-transparent hover:-translate-y-0.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ isDark }) {
  return (
    <footer className={`bg-black text-white w-full pt-20 pb-10 border-t ${
      isDark ? 'border-white/8' : 'border-white/8'
    }`}>
      <div className="w-[min(1180px,calc(100%-32px))] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_repeat(3,1fr)] gap-[60px]">
          {/* Column 1: Logo and Pitch */}
          <div className="flex flex-col gap-5">
            <Link className="inline-flex items-center gap-3" to="/" style={{ color: '#ffffff' }}>
              <LogoMark />
              <span className="flex flex-col line-height-1">
                <span className="font-['Space_Grotesk'] font-medium text-base tracking-[0.26em] uppercase">Fidarix</span>
              </span>
            </Link>
            <p className="text-white/60 text-[0.92rem] leading-[1.6] m-0 max-w-[240px]">
              High-performance editorial websites built with calm aesthetics, modular structures, and absolute precision.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-3.5">
            <h4 className="font-['Space_Grotesk'] text-[0.8rem] font-extrabold text-white uppercase tracking-[0.12em] m-0 mb-2.5 border-b border-white/8 pb-2.5">Services</h4>
            <Link to="/services" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Web Design</Link>
            <Link to="/services" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Development</Link>
            <Link to="/services" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Branding</Link>
            <Link to="/services" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Motion Systems</Link>
            <Link to="/services" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Custom Apps</Link>
          </div>

          {/* Column 3: Studio */}
          <div className="flex flex-col gap-3.5">
            <h4 className="font-['Space_Grotesk'] text-[0.8rem] font-extrabold text-white uppercase tracking-[0.12em] m-0 mb-2.5 border-b border-white/8 pb-2.5">Studio</h4>
            <Link to="/about" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">About Us</Link>
            <Link to="/services#pricing" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Pricing Packages</Link>
            <Link to="/contact" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Contact Studio</Link>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col gap-3.5">
            <h4 className="font-['Space_Grotesk'] text-[0.8rem] font-extrabold text-white uppercase tracking-[0.12em] m-0 mb-2.5 border-b border-white/8 pb-2.5">Resources</h4>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">LinkedIn</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white/60 text-[0.94rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Dribbble</a>
            <div style={{ marginTop: '6px' }}>
              <Link to="/contact" className="bg-white/5 border border-white/12 px-2.5 py-1 rounded-full text-[0.76rem] font-bold text-white inline-flex items-center gap-1 transition-all hover:scale-105" style={{ textDecoration: 'none' }}>
                👋 We're Hiring
              </Link>
            </div>
          </div>
        </div>

        {/* Giant Interactive Wordmark */}
        <div style={{ position: 'relative', height: 'clamp(80px, 12vw, 180px)', width: '100%', margin: '40px 0' }}>
          <TextPressure
            text="FIDARIX"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>

        {/* Legal Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/8 pt-6 text-[0.84rem] text-white/50">
          <span>&copy; 2026 Fidarix Studio. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span style={{ opacity: 0.3 }}>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <span style={{ opacity: 0.3 }}>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }) {
  const location = useLocation();
  const isDarkPage = location.pathname === '/services';

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <SiteHeader />
      <main className="w-full flex-1">{children}</main>

      <SiteFooter isDark={isDarkPage} />
    </div>
  );
}

export function PageHero({ eyebrow, title, copy, actions, panel, children }) {
  return (
    <section className="grid gap-[18px] border border-white/8 rounded-[48px] bg-white/[0.03] shadow-[0_28px_80px_rgba(0,0,0,0.6)] p-[clamp(26px,4.8vw,46px)] overflow-hidden relative">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.85fr)] gap-6 items-stretch">
        <div>
          {eyebrow ? <p className="inline-flex items-center gap-2 m-0 text-primary uppercase tracking-[0.22em] text-[0.72rem] font-extrabold">{eyebrow}</p> : null}
          <h1 className="m-0 text-white font-['Space_Grotesk'] font-medium text-[clamp(3.1rem,7vw,6.8rem)] leading-[0.94] max-w-[10ch] tracking-tight">{title}</h1>
          <p className="m-0 text-white/60 text-[1.03rem] leading-[1.7] mt-4">{copy}</p>
          {actions ? <div className="flex flex-wrap gap-3 mt-6">{actions}</div> : null}
        </div>
        <div className="rounded-[48px] bg-white/[0.02] border border-white/8 p-6 flex items-center justify-center">
          {panel || children}
        </div>
      </div>
    </section>
  );
}

export function ImpactHero({ lines, copy, actions, children }) {
  return (
    <section className={`min-h-screen flex flex-col justify-center items-center text-center px-6 py-[120px] rounded-none bg-black text-white relative overflow-hidden z-10`}>
      {children && (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          {children}
        </div>
      )}
      
      {/* Corner Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(76,195,255,0.4)_0%,transparent_70%)] pointer-events-none filter blur-[80px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(155,77,255,0.4)_0%,transparent_70%)] pointer-events-none filter blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-white text-[clamp(4.2rem,15vw,10rem)] leading-[0.85] font-extrabold uppercase tracking-tight flex flex-col items-center mb-8">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden h-[1.15em] -mt-[0.05em]">
              <span className="block animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards] translate-y-[110%]" style={{ animationDelay: `${i * 0.15}s` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <p className="text-white/90 text-[1.15rem] leading-[1.7] max-w-[45ch] mb-12 animate-[fadeIn_1s_ease_0.6s_forwards] opacity-0">
          {copy}
        </p>
        {actions ? <div className="flex flex-wrap gap-3 justify-center animate-[fadeIn_1s_ease_0.8s_forwards] opacity-0">{actions}</div> : null}
      </div>
    </section>
  );
}

export function SectionWise({ children, className = '', bg = '', style }) {
  const getBgClass = () => {
    switch (bg) {
      case 'bg-burgundy': return 'bg-wise-burgundy text-white';
      case 'bg-dark': return 'bg-wise-dark text-white';
      case 'bg-primary': return 'bg-primary text-white';
      case 'bg-white': return 'bg-black text-white'; // Consistent dark theme support
      default: return 'bg-transparent text-white';
    }
  };

  return (
    <section className={`py-[120px] overflow-hidden ${getBgClass()} ${className}`} style={style}>
      <div className="w-[min(1180px,calc(100%-32px))] mx-auto">
        {children}
      </div>
    </section>
  );
}

export function Marquee({ items, speed = '30s' }) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-10 w-full">
      <div className="inline-flex gap-[60px] animate-[marquee_linear_infinite]" style={{ animationDuration: speed }}>
        {items.map((item, i) => (
          <span key={i} className="text-white font-['Space_Grotesk'] text-[clamp(1.5rem,4vw,2.5rem)] font-bold">{item}</span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="text-white font-['Space_Grotesk'] text-[clamp(1.5rem,4vw,2.5rem)] font-bold">{item}</span>
        ))}
      </div>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="flex flex-col gap-2.5 max-w-[760px]">
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 m-0 text-primary uppercase tracking-[0.22em] text-[0.72rem] font-extrabold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="m-0 text-white font-['Space_Grotesk'] font-medium text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.05] tracking-tight">{title}</h2>
      {copy ? <p className="m-0 text-white/60 text-[1.03rem] leading-[1.7]">{copy}</p> : null}
    </div>
  );
}

export function ButtonLink({ to, children, variant = 'primary' }) {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-primary to-primary-2 text-white shadow-[0_18px_30px_rgba(90,116,255,0.24)]';
      case 'secondary':
        return 'bg-white/86 border-white/8 text-white';
      case 'ghost':
      default:
        return 'bg-transparent border-white/8 text-white';
    }
  };

  return (
    <Link className={`inline-flex items-center justify-center gap-2.5 min-h-[48px] px-[18px] rounded-full border border-transparent font-bold text-[0.95rem] tracking-[-0.01em] transition-all hover:-translate-y-0.5 ${getVariantClass()}`} to={to}>
      {children}
    </Link>
  );
}

export function StatGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-white/8">
      {stats.map((stat) => (
        <article className="flex flex-col gap-2" key={stat.label}>
          <p className="m-0 font-['Space_Grotesk'] text-[2.5rem] font-bold tracking-tight text-white leading-none">{stat.value}</p>
          <p className="m-0 text-white/60 text-sm tracking-wide uppercase">{stat.label}</p>
        </article>
      ))}
    </div>
  );
}

export function BrandCanvas() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full aspect-[4/3] rounded-[24px] bg-gradient-to-tr from-primary/10 via-primary-2/10 to-primary-3/10 border border-white/8 flex items-center justify-center shadow-inner relative overflow-hidden">
        <span className="text-white/60 text-[0.8rem] font-bold tracking-[0.1em] uppercase z-10">Fidarix theme system</span>
        <div className="absolute w-[200px] h-[200px] bg-primary/20 rounded-full blur-[40px] animate-pulse" />
      </div>
      <div className="flex flex-wrap gap-2 justify-center mt-3.5">
        <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Gradient blue</span>
        <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Editorial spacing</span>
        <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Soft glass cards</span>
      </div>
    </div>
  );
}
