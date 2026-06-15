import { Link, useLocation } from 'react-router-dom';
import SiteHeader, { LogoMark } from './Navbar';
import TextPressure from './TextPressure';
import './Layout.css';

export function SiteFooter({ isDark }) {
  return (
    <footer className={`bg-black text-white w-full pt-20 pb-10 max-md:pt-8 max-md:pb-4 border-t ${
      isDark ? 'border-white/8' : 'border-white/8'
    }`}>
      <div className="w-[min(1180px,calc(100%-32px))] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.2fr_repeat(3,1fr)] gap-4 md:gap-[60px]">
          {/* Column 1: Logo and Pitch */}
          <div className="flex flex-col gap-5 max-md:gap-2 col-span-2 md:col-span-1">
            <Link className="inline-flex items-center gap-3" to="/" style={{ color: '#ffffff' }}>
              <LogoMark />
              <span className="flex flex-col line-height-1">
                <span className="font-['Space_Grotesk'] font-medium text-xl tracking-[0.26em] uppercase">Fidarix</span>
              </span>
            </Link>
            <p className="text-white/60 text-[1.1rem] leading-[1.6] m-0 max-w-[320px] hidden md:block">
              We craft premium digital experiences that refuse to blend in. Combining striking design, flawless engineering, and strategic growth for ambitious brands.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-2 md:gap-4">
            <h4 className="font-['Space_Grotesk'] text-[0.75rem] md:text-[1rem] font-extrabold text-white uppercase tracking-[0.12em] m-0 mb-1 md:mb-3 border-b border-white/8 pb-1 md:pb-3">Navigation</h4>
            <Link to="/" className="text-white/60 text-[0.85rem] md:text-[1.1rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Home</Link>
            <Link to="/about" className="text-white/60 text-[0.85rem] md:text-[1.1rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">About</Link>
            <Link to="/services" className="text-white/60 text-[0.85rem] md:text-[1.1rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Services</Link>
            <Link to="/contact" className="text-white/60 text-[0.85rem] md:text-[1.1rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Contact</Link>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-2 md:gap-4">
            <h4 className="font-['Space_Grotesk'] text-[0.75rem] md:text-[1rem] font-extrabold text-white uppercase tracking-[0.12em] m-0 mb-1 md:mb-3 border-b border-white/8 pb-1 md:pb-3">Services</h4>
            <Link to="/services" className="text-white/60 text-[0.85rem] md:text-[1.1rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Web Development</Link>
            <Link to="/services" className="text-white/60 text-[0.85rem] md:text-[1.1rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Web Design</Link>
            <Link to="/services" className="text-white/60 text-[0.85rem] md:text-[1.1rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">SEO Optimization</Link>
            <Link to="/services" className="text-white/60 text-[0.85rem] md:text-[1.1rem] font-semibold transition-all hover:text-primary hover:translate-x-[3px] no-underline inline-block">Branding</Link>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col gap-2 md:gap-4 col-span-2 md:col-span-1 footer-connect">
            <h4 className="font-['Space_Grotesk'] text-[0.75rem] md:text-[1rem] font-extrabold text-white uppercase tracking-[0.12em] m-0 mb-1 md:mb-3 border-b border-white/8 pb-1 md:pb-3">Connect</h4>
            <div className="flex flex-row gap-6 items-center mt-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-transform hover:-translate-y-1" aria-label="LinkedIn">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-transform hover:-translate-y-1" aria-label="Instagram">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <Link to="/contact" className="text-white/60 hover:text-primary transition-transform hover:-translate-y-1" aria-label="Email Us">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Giant Interactive Wordmark */}
        <div className="hidden md:block" style={{ position: 'relative', height: 'clamp(80px, 12vw, 180px)', width: '100%', margin: '40px 0' }}>
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 border-t border-white/8 pt-3 md:pt-6 text-[0.8rem] md:text-[1rem] text-white">
          <span>&copy; 2024 Fidarix. All rights reserved.</span>
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

export function ImpactHero({ 
  lines, 
  copy, 
  actions, 
  children,
  minHeight = 'min-h-[80vh]',
  titleSize = 'text-[clamp(2.8rem,7vw,5.5rem)]',
  py = 'pt-24 pb-10 md:pt-32 md:pb-12',
  leadingClass = 'leading-[0.95]'
}) {
  return (
    <section className={`${minHeight} flex flex-col items-center px-6 ${py} rounded-none bg-black text-white relative overflow-hidden z-10`}>
      {children && (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          {children}
        </div>
      )}
      
      {/* Corner Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(76,195,255,0.4)_0%,transparent_70%)] pointer-events-none filter blur-[80px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(155,77,255,0.4)_0%,transparent_70%)] pointer-events-none filter blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full">
        <h1 className={`text-white ${titleSize} ${leadingClass} font-extrabold font-['Space_Grotesk'] uppercase tracking-tight flex flex-col items-center mb-8`}>
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden py-1.5 -my-1.5">
              <span className="reveal-text" style={{ animationDelay: `${i * 0.15}s` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <div className="text-white/90 text-[1.15rem] leading-[1.7] max-w-[70ch] animate-[fadeIn_1s_ease_0.6s_forwards] opacity-0 text-center">
          {copy}
        </div>
      </div>
      
      {actions ? <div className="relative z-10 mt-auto flex flex-wrap gap-4 justify-center animate-[fadeIn_1s_ease_0.8s_forwards] opacity-0 w-full pt-12">{actions}</div> : null}
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
        {items.map((item, i) => (
          <span key={`dup-${i}`}>{item}</span>
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
