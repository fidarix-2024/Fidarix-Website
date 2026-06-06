import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { SectionWise, Marquee, ImpactHero, ButtonLink } from '../../components/common/Layout';
import { services, projects, testimonials } from '../../data/site';
import Hyperspeed from '../../components/Hyperspeed';
import InteractiveRoadmap from '../../components/InteractiveRoadmap';
import './HomePage.css';

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
      className={`border border-white/8 rounded-[48px] bg-white/[0.03] p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden transition-all duration-1000 ${
        revealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-98'
      }`}
      style={{ marginTop: 0 }}
    >
      {/* Purple Splash Mask */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(155,77,255,0.18)_0%,transparent_60%)] pointer-events-none transition-opacity duration-1000 ${
        revealed ? 'opacity-100' : 'opacity-0'
      }`} />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 1. HERO SECTION */}
      <ImpactHero
        lines={['We Build', 'Digital', 'Legacies']}
        copy="A focused studio built around good taste, clear systems, and measurable outcomes. Design, development, and strategy — all under one roof."
        actions={[
          <ButtonLink key="work" to="/services" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Our Services
          </ButtonLink>,
          <ButtonLink key="contact" to="/contact" variant="ghost" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Get In Touch
          </ButtonLink>,
        ]}
      >
        <Hyperspeed />
      </ImpactHero>

      {/* 2. INTRO & MARQUEE */}
      <SectionWise bg="bg-dark" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: '#000000' }}>
        <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold tracking-tight leading-[0.9] uppercase text-center text-white mb-[60px]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[50px]">
          {/* Row 1: Left Card (Static) | Right Card (Dynamic - Splash) */}
          <div className="border border-white/8 rounded-[48px] bg-white/[0.03] p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden text-left min-h-[360px]">
            <div>
              <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-2 inline-block"></span>
                01 / Branding
              </div>
              <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-3">Identity Systems</h3>
              <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0">
                Logo polish, comprehensive color systems, and strict brand guidelines that feel premium, consistent, and memorable.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Logo Polish</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Color Systems</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Guidelines</span>
            </div>
          </div>

          <ScrollSplashCard>
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-['Space_Grotesk'] text-white font-medium text-lg tracking-tight flex items-center gap-2">
                <span>🎨</span> UI/UX Figma Design
              </h2>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center -space-x-2.5">
                  <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Designer 1" />
                  <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Designer 2" />
                  <div className="w-6 h-6 rounded-full border border-black bg-white/10 text-white flex items-center justify-center font-bold text-[0.64rem]">+1</div>
                </div>
                <button className="w-7 h-7 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors" aria-label="Like Board">
                  <Heart size={14} fill="currentColor" strokeWidth={0} />
                </button>
              </div>
            </div>
            <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] mb-1">02 / UX & Systems</div>
            <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-2">Interface Prototypes</h3>
            <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0 mb-4">
              Bespoke UI layouts, robust wireframes, and design components built for Figma handoff.
            </p>
            <div className="w-full border border-white/8 rounded-2xl bg-white/[0.02] p-3 flex items-center justify-center">
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-['Space_Grotesk'] text-white font-medium text-lg tracking-tight flex items-center gap-2">
                <span>⚡</span> Web Development
              </h2>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center -space-x-2.5">
                  <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Developer 1" />
                  <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="Developer 2" />
                  <div className="w-6 h-6 rounded-full border border-black bg-white/10 text-white flex items-center justify-center font-bold text-[0.64rem]">+1</div>
                </div>
                <button className="w-7 h-7 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors" aria-label="Like Board">
                  <Heart size={14} fill="currentColor" strokeWidth={0} />
                </button>
              </div>
            </div>
            <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] mb-1">03 / Engineering</div>
            <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-2">Bespoke Frontend Builds</h3>
            <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0 mb-4">
              Responsive web apps, optimized Vite structures, and robust component architecture.
            </p>
            <div className="p-[14px_16px] bg-[#0d1b3d] rounded-2xl w-full">
              <div className="flex flex-col gap-1.5 font-mono text-[0.8rem] text-left">
                <span className="text-purple-400">const buildApp = () =&gt; &#123;</span>
                <span className="text-blue-400 pl-3">return &lt;FidarixCore /&gt;;</span>
                <span className="text-purple-400">&#125;;</span>
                <span className="text-green-400 text-[0.74rem]">// Production compiled in 9.78s</span>
              </div>
            </div>
          </ScrollSplashCard>

          <div className="border border-white/8 rounded-[48px] bg-white/[0.03] p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden text-left min-h-[360px]">
            <div>
              <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>
                04 / Marketing SEO
              </div>
              <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-3">Technical Ranking</h3>
              <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0">
                Keyword intent mapping, comprehensive on-page layouts, speed optimization, and strict index structures that turn visibility into search conversions.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Keyword Maps</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Speed Tuning</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Indexing</span>
            </div>
          </div>

          {/* Row 3: Left Card (Static) | Right Card (Dynamic - Splash) */}
          <div className="border border-white/8 rounded-[48px] bg-white/[0.03] p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden text-left min-h-[360px]">
            <div>
              <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                05 / Studio Support
              </div>
              <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-3">Uptime Care</h3>
              <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0">
                Dedicated maintenance agreements, rapid priority troubleshooting support, package upgrades, database backups, and core security maintenance.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Updates</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Fixes</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-2.5 py-1 rounded-full font-bold">Backups</span>
            </div>
          </div>

          <ScrollSplashCard>
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-['Space_Grotesk'] text-white font-medium text-lg tracking-tight flex items-center gap-2">
                <span>🌴</span> Case Study Board
              </h2>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center -space-x-2.5">
                  <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Collaborator 1" />
                  <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Collaborator 2" />
                  <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Collaborator 3" />
                  <div className="w-6 h-6 rounded-full border border-black bg-white/10 text-white flex items-center justify-center font-bold text-[0.64rem]">+2</div>
                </div>
                <button className="w-7 h-7 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors" aria-label="Like Board">
                  <Heart size={14} fill="currentColor" strokeWidth={0} />
                </button>
              </div>
            </div>

            <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] mb-1">06 / Analytics & Apps</div>
            <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-2">Mapping travel behavior</h3>
            <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0 mb-4">
              Tailored analytics widgets mapping event behavior and travel search conversions.
            </p>

            <div className="relative w-full border border-white/8 rounded-2xl bg-white/[0.02] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute bg-black/80 border border-white/10 rounded-lg shadow-lg pointer-events-none transition-opacity duration-300 text-[0.66rem] p-[8px_10px] right-[8%] top-[12%] text-left z-20">
                <div className="text-white/60">Trips Booked</div>
                <div className="text-white font-bold my-0.5">Tue Nov 22</div>
                <div className="text-primary font-extrabold flex items-center gap-1 text-[0.68rem]">
                  744 events
                  <span className="bg-primary/20 text-primary-3 px-1 rounded-sm text-[0.58rem] font-bold">+340</span>
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

      {/* 4. FEATURED PROJECTS SECTION */}
      <SectionWise bg="bg-transparent" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
          <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-2 inline-block"></span>
            case studies
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white mt-3 mb-5 uppercase tracking-tight">
            Featured Projects
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            A curated list of client platforms where design, performance engineering, and conversion goals meet. Drag or use mouse wheel to scroll, hover to see details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[30px]">
          <Link to="/contact" className="group relative border border-white/8 rounded-[48px] overflow-hidden bg-white/[0.03] aspect-[4/3] flex flex-col justify-end p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" alt="Northstar Studio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="relative z-20 text-left">
              <span className="text-[0.72rem] font-extrabold text-primary uppercase tracking-[0.22em]">Creative Agency</span>
              <h3 className="font-['Space_Grotesk'] font-medium text-2xl tracking-tight text-white mt-2">NORTHSTAR STUDIO</h3>
              <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100 mt-2">
                <p className="text-xs text-white/50 m-0">Stack: React, Vite, Framer, Sanity</p>
                <p className="text-xs text-white/70 m-0 mt-1">Result: Raised qualified leads by 38% after launch.</p>
              </div>
            </div>
          </Link>

          <Link to="/contact" className="group relative border border-white/8 rounded-[48px] overflow-hidden bg-white/[0.03] aspect-[4/3] flex flex-col justify-end p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800" alt="Harbor Clinic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="relative z-20 text-left">
              <span className="text-[0.72rem] font-extrabold text-primary uppercase tracking-[0.22em]">Healthcare Platform</span>
              <h3 className="font-['Space_Grotesk'] font-medium text-2xl tracking-tight text-white mt-2">HARBOR CLINIC</h3>
              <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100 mt-2">
                <p className="text-xs text-white/50 m-0">Stack: Next.js, Tailwind, HubSpot</p>
                <p className="text-xs text-white/70 m-0 mt-1">Result: Reduced abandonment and doubled bookings.</p>
              </div>
            </div>
          </Link>
        </div>
      </SectionWise>

      {/* 5. CLIENT TESTIMONIALS SECTION */}
      <SectionWise bg="bg-transparent" style={{ paddingTop: '80px', paddingBottom: '100px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ textAlign: 'left', marginBottom: '60px' }}>
          <span className="text-xs font-extrabold text-green-400 uppercase tracking-[0.22em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
            kind words
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white mt-3 uppercase tracking-tight">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="border border-white/8 rounded-[48px] bg-white/[0.03] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden text-left min-h-[280px]">
              <span className="font-serif text-[5rem] text-primary/10 absolute top-2 left-6 leading-none pointer-events-none">“</span>
              <p className="relative z-10 text-white/90 text-[1.05rem] leading-[1.6] m-0 italic">{t.quote}</p>
              <cite className="flex flex-col gap-1 not-italic mt-6">
                <span className="font-bold text-white text-base">{t.name}</span>
                <span className="text-white/40 text-xs tracking-wider uppercase">{t.role}</span>
              </cite>
            </blockquote>
          ))}
        </div>
      </SectionWise>

      {/* INTERACTIVE ROADMAP PROCESS CYCLE */}
      <InteractiveRoadmap />
    </div>
  );
}

export default HomePage;
