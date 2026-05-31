import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { SectionWise, Marquee } from '../components/Chrome';
import { services, projects } from '../data/site';

const layerColors = [
  '#6366f1', // Outermost Indigo
  '#7c3aed', // Purple
  '#8b5cf6', // Medium Purple
  '#a78bfa', // Light Purple
  '#c084fc', // Violet Pink
  '#f472b6', // Dark Pink
  '#fb7185', // Coral Pink
  '#fda4af', // Light Coral
  '#fed7aa', // Peach
  '#ffedd5', // Orange Cream
  '#fff7ed', // Cream
  '#ffffff', // Innermost Center
];

function PortalLayer({ index, imageRef }) {
  if (index >= layerColors.length) return null;
  const color = layerColors[index];
  const radius = Math.max(16, 120 - index * 9);
  const isInnermost = index === layerColors.length - 1;

  return (
    <div
      className="portal-layer-animate"
      style={{
        '--base-color': color,
        '--layer-index': index,
        borderRadius: `${radius}px ${radius}px 0 0`,
        padding: '16px 16px 0 16px',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: index === 0 ? '0 30px 70px rgba(99,102,241,0.25)' : 'none',
        animationDelay: `${index * 0.12}s`,
        position: 'relative',
      }}
    >
      {isInnermost ? (
        <div className="portal-center-viewport">
          <img
            ref={imageRef}
            src="/images/portal_landscape.png"
            className="portal-landscape-image"
            alt="Dreamy landscape with mountains, retro camper van, and antenna tower"
          />
        </div>
      ) : (
        <PortalLayer index={index + 1} imageRef={imageRef} />
      )}
    </div>
  );
}

function PortalTunnel({ containerRef, layersRef, imageRef }) {
  return (
    <div ref={containerRef} className="portal-graphic-container">
      <div ref={layersRef} style={{ width: '100%', height: '100%', transformOrigin: 'bottom center', willChange: 'transform' }}>
        <PortalLayer index={0} imageRef={imageRef} />
      </div>
    </div>
  );
}

function ScrollSplashCard({ children }) {
  const [revealed, setRevealed] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`dashboard-container ${revealed ? 'is-revealed' : ''}`}
      style={{ marginTop: 0 }}
    >
      <div className="purple-splash-mask" />
      <div className="dashboard-content" style={{ height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

function HomePage() {
  const heroScrollTrackRef = useRef(null);
  const heroTextRef = useRef(null);
  const portalContainerRef = useRef(null);
  const portalLayersRef = useRef(null);
  const portalImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroScrollTrackRef.current) return;

      const track = heroScrollTrackRef.current;
      const rect = track.getBoundingClientRect();
      const trackHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Pin range is trackHeight minus 100vh
      const totalScrollable = trackHeight - viewportHeight;
      if (totalScrollable <= 0) return;

      // Calculate progress (0 to 1) relative to scroll track
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // NEW: animProgress maps scroll progress to a 75% timeline.
      // At scroll progress = 75%, animProgress is 1 (fully zoomed).
      // Between 75% and 100%, the image remains locked in full screen!
      const animProgress = Math.min(progress / 0.75, 1);

      // 1. Hero Text content: Fades out and translates up quickly (completed by 35% of animProgress)
      if (heroTextRef.current) {
        const textProgress = Math.min(animProgress / 0.35, 1);
        heroTextRef.current.style.opacity = 1 - textProgress;
        heroTextRef.current.style.transform = `translateY(${-textProgress * 120}px)`;
        heroTextRef.current.style.pointerEvents = textProgress === 1 ? 'none' : 'auto';
      }

      // 2. Graphic Container Animation:
      // Subtle power easing for immersive warp speed effect
      const easeProgress = Math.pow(animProgress, 2.2);

      if (portalContainerRef.current) {
        // Increase scale factor to 2.1 to cover 100% viewport completely
        const outerScale = 1 + easeProgress * 1.1; 
        portalContainerRef.current.style.transform = `scale(${outerScale})`;
        
        // Performance fix: Stop updating borderRadius dynamically on scroll in JS
        // to prevent compositor-paint storms and layout reflows!
        
        // Pass animProgress to CSS variable --scroll-glow
        portalContainerRef.current.style.setProperty('--scroll-glow', animProgress);
      }

      // 3. Concentric colored arches zoom scaling:
      // Scale extremely high (21x) so outer arch borders are blown off-screen
      // and center landscape illustration occupies the entire screen boundaries.
      if (portalLayersRef.current) {
        const layersScale = 1 + easeProgress * 20;
        portalLayersRef.current.style.transform = `scale(${layersScale})`;
      }

      // 4. Parallax Zoom & Fade-in of landscape image inside center viewport:
      // Fades in from 5% to 55% of animProgress
      if (portalImageRef.current) {
        const imgOpacityProgress = Math.max(0, Math.min(1, (animProgress - 0.05) / 0.5));
        portalImageRef.current.style.opacity = imgOpacityProgress;

        const imgScale = 1 + animProgress * 0.6;
        portalImageRef.current.style.transform = `scale(${imgScale})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="page-wise">
      {/* 1. HERO SECTION WITH STICKY SCROLL */}
      <div ref={heroScrollTrackRef} className="portal-hero-track">
        <section className="portal-hero-sticky">
          <div className="portal-hero-content-wrapper">
            <div ref={heroTextRef} className="portal-hero-text">
              <h1 className="portal-hero-title">Progress is possible</h1>
              <p className="portal-hero-copy">
                Simple and powerful design systems that help modern brands grow faster.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <Link to="/contact" className="portal-hero-button">
                  Let's Build
                </Link>
              </div>
            </div>
            <PortalTunnel
              containerRef={portalContainerRef}
              layersRef={portalLayersRef}
              imageRef={portalImageRef}
            />
          </div>
        </section>
      </div>

      {/* 2. INTRO & MARQUEE */}
      <SectionWise bg="bg-white-tone" style={{ borderBottom: '1px solid rgba(13, 27, 61, 0.05)' }}>
        <h2 className="display-huge" style={{ textAlign: 'center', color: '#0d1b3d', marginBottom: 60 }}>
          Crafting for <br /> the global web
        </h2>
        <Marquee
          items={[
            "BRANDING", "UI/UX DESIGN", "WEB DEVELOPMENT", "MOTION GRAPHICS", "STRATEGY",
            "BRANDING", "UI/UX DESIGN", "WEB DEVELOPMENT", "MOTION GRAPHICS", "STRATEGY"
          ]}
          speed="20s"
        />

        {/* 6 alternated cards services grid */}
        <div className="dashboard-grid" style={{ marginTop: '50px' }}>
          {/* Row 1: Left Card (Static) | Right Card (Dynamic - Splash) */}
          <div className="dash-card">
            <div className="subtitle">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }}></span>
              01 / Branding
            </div>
            <h3>Identity Systems</h3>
            <p>
              Logo polish, comprehensive color systems, and strict brand guidelines that feel premium, consistent, and memorable.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              <span className="pill" style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Logo Polish</span>
              <span className="pill" style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Color Systems</span>
              <span className="pill" style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Guidelines</span>
            </div>
          </div>

          <ScrollSplashCard>
            {/* Dashboard Header */}
            <div className="dashboard-header">
              <h2 className="dashboard-title" style={{ fontSize: '1.25rem' }}>
                <span>🎨</span> UI/UX Figma Design
              </h2>
              <div className="dashboard-actions">
                <div className="avatar-stack">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Designer 1" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Designer 2" />
                  <div className="avatar-more" style={{ fontSize: '0.64rem', width: 24, height: 24 }}>+1</div>
                </div>
                <button className="action-btn" aria-label="Like Board" style={{ width: 28, height: 28 }}>
                  <Heart size={14} fill="currentColor" strokeWidth={0} />
                </button>
              </div>
            </div>
            <div className="subtitle">02 / UX & Systems</div>
            <h3 style={{ fontSize: '1.25rem', margin: '4px 0 10px' }}>Interface Prototypes</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: 16 }}>
              Bespoke UI layouts, robust wireframes, and design components built for Figma handoff.
            </p>
            <div className="chart-container" style={{ padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 400 110" width="100%">
                <rect x="5" y="5" width="390" height="100" rx="12" fill="none" stroke="rgba(124,58,237,0.12)" strokeWidth="1.5" />
                <line x1="120" y1="5" x2="120" y2="105" stroke="rgba(124,58,237,0.08)" />
                <circle cx="62" cy="55" r="28" fill="none" stroke="rgba(124,58,237,0.16)" strokeWidth="3" />
                <circle cx="62" cy="55" r="14" fill="none" stroke="rgba(124,58,237,0.08)" strokeWidth="2" strokeDasharray="3 3" />
                <rect x="140" y="24" width="220" height="12" rx="4" fill="rgba(124,58,237,0.1)" />
                <rect x="140" y="48" width="170" height="8" rx="3" fill="rgba(124,58,237,0.06)" />
                <rect x="140" y="68" width="120" height="8" rx="3" fill="rgba(124,58,237,0.06)" />
                <rect x="140" y="86" width="60" height="8" rx="3" fill="rgba(90,116,255,0.1)" />
              </svg>
            </div>
          </ScrollSplashCard>

          {/* Row 2: Left Card (Dynamic - Splash) | Right Card (Static) */}
          <ScrollSplashCard>
            <div className="dashboard-header">
              <h2 className="dashboard-title" style={{ fontSize: '1.25rem' }}>
                <span>⚡</span> Web Development
              </h2>
              <div className="dashboard-actions">
                <div className="avatar-stack">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Developer 1" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="Developer 2" />
                  <div className="avatar-more" style={{ fontSize: '0.64rem', width: 24, height: 24 }}>+1</div>
                </div>
                <button className="action-btn" aria-label="Like Board" style={{ width: 28, height: 28 }}>
                  <Heart size={14} fill="currentColor" strokeWidth={0} />
                </button>
              </div>
            </div>
            <div className="subtitle">03 / Engineering</div>
            <h3 style={{ fontSize: '1.25rem', margin: '4px 0 10px' }}>Bespoke Frontend Builds</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: 16 }}>
              Responsive web apps, optimized Vite structures, and robust component architecture.
            </p>
            <div className="chart-container" style={{ padding: '14px 16px', background: '#0d1b3d', borderRadius: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'monospace', fontSize: '0.8rem', textAlign: 'left' }}>
                <span style={{ color: '#c084fc' }}>const buildApp = () =&gt; &#123;</span>
                <span style={{ color: '#60a5fa', paddingLeft: 12 }}>return &lt;FidarixCore /&gt;;</span>
                <span style={{ color: '#c084fc' }}>&#125;;</span>
                <span style={{ color: '#4ade80', fontSize: '0.74rem' }}>// Production compiled in 9.78s</span>
              </div>
            </div>
          </ScrollSplashCard>

          <div className="dash-card">
            <div className="subtitle">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#60a5fa', display: 'inline-block' }}></span>
              04 / Marketing SEO
            </div>
            <h3>Technical Ranking</h3>
            <p>
              Keyword intent mapping, comprehensive on-page layouts, speed optimization, and strict index structures that turn visibility into search conversions.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              <span className="pill" style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Keyword Maps</span>
              <span className="pill" style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Speed Tuning</span>
              <span className="pill" style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Indexing</span>
            </div>
          </div>

          {/* Row 3: Left Card (Static) | Right Card (Dynamic - Splash) */}
          <div className="dash-card">
            <div className="subtitle">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', display: 'inline-block' }}></span>
              05 / Studio Support
            </div>
            <h3>Uptime Care</h3>
            <p>
              Dedicated maintenance agreements, rapid priority troubleshooting support, package upgrades, database backups, and core security maintenance.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              <span className="pill" style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Updates</span>
              <span className="pill" style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Fixes</span>
              <span className="pill" style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Backups</span>
            </div>
          </div>

          <ScrollSplashCard>
            {/* Dashboard Header */}
            <div className="dashboard-header">
              <h2 className="dashboard-title" style={{ fontSize: '1.25rem' }}>
                <span>🌴</span> Case Study Board
              </h2>
              <div className="dashboard-actions">
                <div className="avatar-stack">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Collaborator 1" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Collaborator 2" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Collaborator 3" />
                  <div className="avatar-more" style={{ fontSize: '0.64rem', width: 24, height: 24 }}>+2</div>
                </div>
                <button className="action-btn" aria-label="Like Board" style={{ width: 28, height: 28 }}>
                  <Heart size={14} fill="currentColor" strokeWidth={0} />
                </button>
              </div>
            </div>
            
            <div className="subtitle">06 / Analytics & Apps</div>
            <h3 style={{ fontSize: '1.25rem', margin: '4px 0 10px' }}>Mapping travel behavior</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: 12 }}>
              Tailored analytics widgets mapping event behavior and travel search conversions.
            </p>
            
            <div className="chart-container">
              <div className="chart-tooltip" style={{ fontSize: '0.66rem', padding: '8px 10px', right: '8%', top: '20%' }}>
                <div className="chart-tooltip-title">Trips Booked</div>
                <div className="chart-tooltip-date">Tue Nov 22</div>
                <div className="chart-tooltip-val" style={{ fontSize: '0.68rem' }}>
                  744 events
                  <span className="chart-tooltip-badge" style={{ fontSize: '0.58rem', padding: '1px 3px' }}>+340</span>
                </div>
              </div>

              <svg viewBox="0 0 500 170" width="100%" height="100%">
                <defs>
                  <linearGradient id="grid-chart-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.00" />
                  </linearGradient>
                </defs>
                
                {/* Grid Lines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(13,27,61,0.03)" strokeDasharray="3 3" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(13,27,61,0.03)" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(13,27,61,0.03)" strokeDasharray="3 3" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(13,27,61,0.05)" />

                {/* Axis Labels */}
                <text x="10" y="164" fill="#a78bfa" fontSize="9" fontWeight="bold">Nov 8</text>
                <text x="235" y="164" fill="#a78bfa" fontSize="9" fontWeight="bold">Nov 16</text>
                <text x="440" y="164" fill="#a78bfa" fontSize="9" fontWeight="bold">Dec 8</text>

                {/* Filled Path */}
                <path 
                  d="M 10 130 L 40 70 L 80 110 L 120 60 L 160 90 L 200 30 L 240 120 L 280 120 L 320 70 L 360 100 L 400 35 L 440 110 L 480 90 L 480 150 L 10 150 Z" 
                  fill="url(#grid-chart-grad)" 
                />

                {/* Chart Line Path */}
                <path 
                  d="M 10 130 L 40 70 L 80 110 L 120 60 L 160 90 L 200 30 L 240 120 L 280 120 L 320 70 L 360 100 L 400 35 L 440 110 L 480 90" 
                  fill="none" 
                  stroke="#7c3aed" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />

                {/* Data points */}
                <circle cx="200" cy="30" r="5" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
                <circle cx="400" cy="35" r="5" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>
          </ScrollSplashCard>
        </div>
      </SectionWise>

      {/* 3. FOUNDATIONS GRID */}
      <section className="bg-burgundy">
        <div className="foundations-grid">
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>01 Foundations</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>Typography</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              Space Grotesk & Manrope. A pairing built for clarity and character across all digital surfaces.
            </p>
          </div>
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>02 Foundations</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>Color</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              The Fidarix Blue. A spectrum from deep violet to electric cyan, balanced with editorial whites.
            </p>
          </div>
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>03 Foundations</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>Interactions</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              Motion that matters. Masked reveals and smooth transitions that guide the user journey.
            </p>
          </div>
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>04 Foundations</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>Layout</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              Grid-based precision. A flexible system that scales from mobile screens to 4K displays.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SHOWCASE SECTION (Horizontal Scroll feel) */}
      <SectionWise bg="bg-white">
        <div style={{ display: 'flex', overflowX: 'auto', gap: 40, paddingBottom: 40, scrollSnapType: 'x mandatory' }}>
          <div className="wise-card" style={{ background: 'var(--wise-yellow)', color: '#000', scrollSnapAlign: 'start' }}>
            <h3 className="display-huge" style={{ fontSize: '4rem' }}>Digital <br /> Branding</h3>
            <p className="body-copy">Visual identities that resonate in a digital-first world.</p>
          </div>
          <div className="wise-card" style={{ background: 'var(--wise-pink)', color: '#000', scrollSnapAlign: 'start' }}>
            <h3 className="display-huge" style={{ fontSize: '4rem' }}>Product <br /> Design</h3>
            <p className="body-copy">Interfaces built for utility and delight.</p>
          </div>
          <div className="wise-card" style={{ background: 'var(--wise-dark)', color: '#fff', scrollSnapAlign: 'start' }}>
            <h3 className="display-huge" style={{ fontSize: '4rem' }}>Motion <br /> Systems</h3>
            <p className="body-copy">Bringing brands to life through intentional movement.</p>
          </div>
        </div>
      </SectionWise>

      {/* 5. PHILOSOPHY */}
      <SectionWise bg="bg-dark">
        <div style={{ padding: '100px 0' }}>
          <h2 className="display-huge" style={{ color: '#fff', textAlign: 'center' }}>
            MAX IMPACT <br /> MIN FRICTION
          </h2>
          <p className="body-copy" style={{ textAlign: 'center', maxWidth: '600px', margin: '40px auto 0', color: 'rgba(255,255,255,0.6)' }}>
            A new design system, made to disrupt old patterns. We don't just build websites; we build digital legacies.
          </p>
        </div>
      </SectionWise>

      {/* 6. FINAL CTA & FOOTER MARQUEE */}
    </div>
  );
}

export default HomePage;