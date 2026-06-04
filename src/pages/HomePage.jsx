import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { SectionWise, Marquee } from '../components/Chrome';
import { services, projects } from '../data/site';
import HeroSection from '../components/HeroSection';
import InteractiveRoadmap from '../components/InteractiveRoadmap';

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
  return (
    <div className="page-wise">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. INTRO & MARQUEE */}
      <SectionWise bg="bg-white-tone" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <h2 className="display-huge" style={{ textAlign: 'center', color: '#ffffff', marginBottom: 60 }}>
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
              <span className="pill" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Logo Polish</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Color Systems</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Guidelines</span>
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
                <rect x="5" y="5" width="390" height="100" rx="12" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" />
                <line x1="120" y1="5" x2="120" y2="105" stroke="rgba(124,58,237,0.2)" />
                <circle cx="62" cy="55" r="28" fill="none" stroke="rgba(124,58,237,0.4)" strokeWidth="3" />
                <circle cx="62" cy="55" r="14" fill="none" stroke="rgba(124,58,237,0.2)" strokeWidth="2" strokeDasharray="3 3" />
                <rect x="140" y="24" width="220" height="12" rx="4" fill="rgba(124,58,237,0.25)" />
                <rect x="140" y="48" width="170" height="8" rx="3" fill="rgba(124,58,237,0.15)" />
                <rect x="140" y="68" width="120" height="8" rx="3" fill="rgba(124,58,237,0.15)" />
                <rect x="140" y="86" width="60" height="8" rx="3" fill="rgba(90,116,255,0.25)" />
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
              <span className="pill" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Keyword Maps</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Speed Tuning</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Indexing</span>
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
              <span className="pill" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Updates</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Fixes</span>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 'bold' }}>Backups</span>
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
                <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.15)" />

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





      {/* INTERACTIVE ROADMAP PROCESS CYCLE */}
      <InteractiveRoadmap />




      {/* 6. FINAL CTA & FOOTER MARQUEE */}
    </div>
  );
}

export default HomePage;