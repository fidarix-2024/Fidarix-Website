import { useEffect, useRef, useState, useCallback } from 'react';
import './InteractiveRoadmap.css';

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

export default function InteractiveRoadmap() {
  const trackRef = useRef(null);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressTargetRef = useRef(0);
  const rafRef = useRef(null);

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

  // Diagonal text movement:
  // Each item occupies ~130px vertically. We translate the whole block upward as scroll progresses.
  const ITEM_HEIGHT = 130; // approximate height per item
  const totalTextHeight = steps.length * ITEM_HEIGHT;
  const translateY = -phase * ITEM_HEIGHT;

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
      className="roadmap-scroll-track"
      style={{ height: `${(steps.length + 1) * 100}vh` }}
    >
      <div className="roadmap-sticky-viewport">

        {/* Spotlight glow overlay */}
        <div className="roadmap-spotlight" />

        {/* Fade masks (top + bottom) */}
        <div className="roadmap-fade-mask" />

        {/* ===== DIAGONAL TEXT ===== */}
        <div className="roadmap-diagonal-container">
          <div
            className="roadmap-diagonal-inner"
            style={{
              transform: `translateY(${translateY}px) rotate(-32deg)`,
            }}
          >
            {steps.map((step, idx) => {
              const dist = Math.abs(idx - phase);
              const isActive = dist < 0.5;
              const isNear = dist >= 0.5 && dist < 1.5;

              return (
                <div
                  key={step.id}
                  className={`roadmap-diagonal-item ${isActive ? 'is-active' : ''} ${isNear ? 'is-near' : ''}`}
                  style={{
                    opacity: isActive ? 0.92 : Math.max(0.05, 0.5 - dist * 0.15),
                  }}
                >
                  {step.title}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== SIDEBAR NAV (left edge) ===== */}
        <div className="roadmap-sidebar-nav">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              className={`roadmap-sidebar-label ${activeIndex === idx ? 'is-active' : ''}`}
              onClick={() => scrollToStep(idx)}
            >
              <span className="roadmap-sidebar-line" />
              {activeIndex === idx ? `They trust us` : step.num}
            </button>
          ))}
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div className="roadmap-right-content">
          <div className="roadmap-right-inner">
            <div key={activeIndex} className="roadmap-content-animate">
              <h3 className="roadmap-right-title">{currentStep.fullTitle}</h3>
              <p className="roadmap-right-desc">{currentStep.desc}</p>
              <ul className="roadmap-right-deliverables">
                {currentStep.deliverables.map((item, i) => (
                  <li key={i} className="roadmap-right-deliverable">
                    <span
                      className="roadmap-right-deliverable-dot"
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
        <div className="roadmap-progress-track">
          <div
            className="roadmap-progress-fill"
            style={{ height: `${smoothProgress * 100}%` }}
          />
        </div>

      </div>
    </div>
  );
}
