import { useEffect, useRef, useState, useCallback } from 'react';
const steps = [
  {
    id: 1,
    num: '01',
    title: 'Discovery',
    fullTitle: 'Discovery & Strategy',
    badge: 'ALIGNMENT',
    color: '#5a74ff',
    desc: 'We collaborate to establish clear goals, audit your brand assets, identify target user flows, and compile a full technical blueprint before writing a single line of code.',
    deliverables: ['Brand Audit & Positioning', 'Architecture Roadmap', 'Technical Scope']
  },
  {
    id: 2,
    num: '02',
    title: 'Design',
    fullTitle: 'Bespoke UI/UX',
    badge: 'CREATIVE',
    color: '#9b4dff',
    desc: 'We construct bespoke layouts that embody your brand. Using Figma, we design modular component libraries, custom typography, and high-fidelity interactive prototypes.',
    deliverables: ['Custom Figma Layouts', 'Design Token System', 'Interactive Prototypes']
  },
  {
    id: 3,
    num: '03',
    title: 'Develop',
    fullTitle: 'High-Performance Dev',
    badge: 'ENGINEERING',
    color: '#00ff66',
    desc: 'Clean, responsive, blazing fast code. We transform static screens into dynamic React apps using Vite, with micro-animations and physics-based transitions.',
    deliverables: ['React/Vite Build', 'Motion Systems', 'Audited Codebase']
  },
  {
    id: 4,
    num: '04',
    title: 'Optimize',
    fullTitle: 'Speed & SEO',
    badge: 'OPTIMIZATION',
    color: '#ffaa00',
    desc: 'We optimize asset delivery for near-perfect Lighthouse scores, map metadata schemas, and construct search indexing pipelines that drive organic visibility.',
    deliverables: ['Core Web Vitals', 'JSON-LD Schema', 'On-Page SEO']
  },
  {
    id: 5,
    num: '05',
    title: 'Launch',
    fullTitle: 'Testing & Launch',
    badge: 'DEPLOYMENT',
    color: '#4cc3ff',
    desc: 'Thorough multi-device testing, browser compatibility checks, secure SSL certificates, DNS routing optimization, and a zero-downtime production deployment.',
    deliverables: ['Cross-Device Audit', 'DNS & SSL Config', 'Zero-Downtime Deploy']
  },
  {
    id: 6,
    num: '06',
    title: 'Support',
    fullTitle: 'Post-Launch Care',
    badge: 'MAINTENANCE',
    color: '#ff007f',
    desc: 'We integrate analytics trackers, run regular library upgrades, coordinate database backups, and provide priority uptime troubleshooting to keep your site fresh.',
    deliverables: ['Uptime Monitoring', 'Security Patching', 'Interaction Reports']
  }
];

export default function Roadmap() {
  const trackRef = useRef(null);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressTargetRef = useRef(0);
  const rafRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const trackHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const totalScrollable = trackHeight - viewportHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      progressTargetRef.current = Math.max(0, Math.min(1, scrolled / totalScrollable));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth lerp animation
  useEffect(() => {
    const animate = () => {
      setSmoothProgress(prev => {
        const target = progressTargetRef.current;
        const delta = target - prev;
        if (Math.abs(delta) < 0.0003) return target;
        return prev + delta * 0.08;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Active index from progress
  useEffect(() => {
    const maxIdx = steps.length - 1;
    const idx = Math.round(smoothProgress * maxIdx);
    setActiveIndex(Math.max(0, Math.min(maxIdx, idx)));
  }, [smoothProgress]);

  const currentStep = steps[activeIndex];
  const maxIdx = steps.length - 1;
  const phase = smoothProgress * maxIdx; // continuous 0 → 5

  // Click to scroll to a specific step
  const scrollToStep = useCallback((idx) => {
    if (!trackRef.current) return;
    const trackHeight = trackRef.current.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;
    const scrollable = trackHeight - viewportHeight;
    const elementTop = trackRef.current.offsetTop;
    window.scrollTo({
      top: elementTop + (idx / maxIdx) * scrollable,
      behavior: 'smooth'
    });
  }, [maxIdx]);

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: `${(steps.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        {/* Spotlight glow overlay */}
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] pointer-events-none z-[3] bg-[radial-gradient(ellipse_70%_60%_at_30%_35%,rgba(255,255,230,0.07)_0%,rgba(255,255,230,0.03)_30%,transparent_65%)] -rotate-15" />

        {/* Fade masks (top + bottom) */}
        <div className="absolute inset-0 pointer-events-none z-[4] bg-[linear-gradient(to_bottom,#000000_0%,transparent_15%,transparent_85%,#000000_100%)]" />

        {/* ===== ROTATING CIRCLE WHEEL ===== */}
        {(() => {
          const isMobile = windowWidth < 768;
          const isTablet = windowWidth >= 768 && windowWidth < 1024;
          const R = isMobile ? 300 : (isTablet ? 480 : 620);
          const angleStep = isMobile ? 26 : 22;
          return (
            <div className="absolute top-0 left-0 w-full lg:w-[65%] h-full z-[2] overflow-visible flex items-center justify-center lg:justify-start">
              <div
                className="absolute rounded-full origin-center will-change-transform pointer-events-none transition-transform duration-[150ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  transform: `rotate(${-phase * angleStep}deg)`,
                  width: `${2 * R}px`,
                  height: `${2 * R}px`,
                  left: isMobile ? `-${R * 0.9}px` : `-${R * 1.3}px`,
                  top: `calc(50% - ${R}px)`
                }}
              >
                {steps.map((step, idx) => {
                  const itemAngle = idx * angleStep;
                  const rad = (itemAngle * Math.PI) / 180;
                  const left = R + R * Math.cos(rad);
                  const top = R + R * Math.sin(rad);

                  const dist = Math.abs(idx - phase);
                  const isActive = dist < 0.5;
                  const isNear = dist >= 0.5 && dist < 1.5;

                  const scale = Math.max(0.65, 1.25 - dist * 0.12);
                  const opacity = isActive ? 0.98 : Math.max(0.08, 0.55 - dist * 0.15);
                  const textColor = isActive ? step.color : (isNear ? 'rgba(255, 255, 255, 0.45)' : 'rgba(255, 255, 255, 0.08)');
                  const textShadow = isActive ? `0 0 50px ${step.color}, 0 2px 4px rgba(0, 0, 0, 0.5)` : 'none';

                  return (
                    <div
                      key={step.id}
                      className={`absolute block font-bold font-['Space_Grotesk'] whitespace-nowrap tracking-[-0.04em] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer pointer-events-auto origin-center text-[clamp(1.8rem,8vw,3rem)] lg:text-[clamp(3.8rem,8.5vw,8.5rem)]`}
                      style={{
                        left: `${left}px`,
                        top: `${top}px`,
                        transform: `translate(-50%, -50%) rotate(${itemAngle}deg) scale(${scale})`,
                        opacity: opacity,
                        color: textColor,
                        textShadow: textShadow,
                      }}
                      onClick={() => scrollToStep(idx)}
                    >
                      {step.title}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}

        {/* ===== SIDEBAR NAV (left edge) ===== */}
        <div className="absolute left-[24px] top-1/2 -translate-y-1/2 flex flex-col gap-[3px] z-10 max-md:hidden">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              className={`flex items-center gap-[12px] text-[0.65rem] font-medium tracking-[0.08em] transition-all duration-500 cursor-pointer py-[4px] px-0 bg-transparent border-none outline-none font-inherit whitespace-nowrap ${activeIndex === idx ? 'text-white/70 italic' : 'text-white/20'}`}
              onClick={() => scrollToStep(idx)}
            >
              <span className={`h-[1px] transition-all duration-500 shrink-0 ${activeIndex === idx ? 'w-[32px] bg-white/50' : 'w-[18px] bg-white/12'}`} />
              {step.num}
            </button>
          ))}
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div className="absolute right-0 top-auto bottom-0 lg:top-0 w-full lg:w-[35%] h-auto lg:h-full flex items-center z-[6] pointer-events-none p-[40px_24px] lg:p-0 bg-[linear-gradient(to_top,#000_70%,transparent_100%)] lg:bg-transparent">
          <div className="p-0 lg:p-[0_50px_0_30px] max-w-full lg:max-w-[400px] pointer-events-auto">
            <div key={activeIndex} className="animate-roadmap-slide-up">
              <h3 className="text-[clamp(2rem,3.5vw,3.5rem)] font-semibold text-white font-['Space_Grotesk'] m-[0_0_4px_0] tracking-[-0.02em] italic after:content-['.']">{currentStep.fullTitle}</h3>
              <p className="text-white/45 text-[1.05rem] leading-[1.7] m-[18px_0_0_0] font-normal">{currentStep.desc}</p>
              <ul className="list-none p-0 m-[22px_0_0_0] flex flex-col gap-[8px]">
                {currentStep.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-[10px] text-[0.95rem] font-medium text-white/55">
                    <span
                      className="w-[4px] h-[4px] rounded-full shrink-0"
                      style={{ background: currentStep.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ===== PROGRESS BAR (right edge) ===== */}
        <div className="absolute right-[28px] top-1/2 -translate-y-1/2 w-[2px] h-[140px] bg-white/5 rounded-full z-10 overflow-hidden max-md:hidden">
          <div
            className="w-full rounded-full transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white/35"
            style={{ height: `${smoothProgress * 100}%` }}
          />
        </div>

      </div>
    </div>
  );
}
