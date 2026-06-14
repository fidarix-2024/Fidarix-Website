import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { SectionWise, Marquee, ImpactHero, ButtonLink } from '../../components/common/Layout';
import { services, projects, testimonials, pricingPlans } from '../../data/site';
import HomeHero from '../../components/HomeComponent/HomeHero';
import Roadmap from '../../components/HomeComponent/Roadmap';
import FlowingMenu from '../../components/common/FlowingMenu';
import TiltedCard from '../../components/common/TiltedCard';
import PixelCard from '../../components/common/PixelCard';
import CardSwap, { Card } from '../../components/common/CardSwap';
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
      className={`border border-white/8 rounded-[48px] bg-white/[0.03] p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-98'
        }`}
      style={{ marginTop: 0 }}
    >
      {/* Purple Splash Mask */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(155,77,255,0.18)_0%,transparent_60%)] pointer-events-none transition-opacity duration-1000 ${revealed ? 'opacity-100' : 'opacity-0'
        }`} />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

function InteractiveProjectCard({ project, index = 0 }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), index * 180);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [index]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const tiltX = isHovered ? coords.y * -10 : 0;
  const tiltY = isHovered ? coords.x * 10 : 0;
  const glowX = isHovered ? (coords.x + 0.5) * 100 : 50;
  const glowY = isHovered ? (coords.y + 0.5) * 100 : 50;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative border border-white/8 rounded-[48px] overflow-hidden bg-white/[0.03] flex flex-col justify-between p-[clamp(24px,4vw,40px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] min-h-[500px] duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${isHovered ? 1.02 : 1})`,
        transformStyle: 'preserve-3d',
        opacity: revealed ? 1 : 0,
        translate: revealed ? '0 0' : '0 60px',
        filter: revealed ? 'blur(0px)' : 'blur(8px)',
        transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), translate 0.9s cubic-bezier(0.16,1,0.3,1), filter 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.3s ease-out, box-shadow 0.3s ease-out',
      }}
    >
      {/* Dynamic Glow Spotlight */}
      <div
        className="absolute pointer-events-none inset-0 opacity-0 transition-opacity duration-500 z-10"
        style={{
          opacity: isHovered ? 0.25 : 0,
          background: `radial-gradient(circle 250px at ${glowX}% ${glowY}%, var(--primary-3), transparent)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/75 to-black z-10" />

      {/* Project Image */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 group-hover:opacity-45 transition-opacity duration-700">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-110"
        />
      </div>

      {/* Mac Browser Mockup header */}
      <div className="relative z-20 flex items-center justify-between w-full border-b border-white/10 pb-4 mb-4" style={{ transform: 'translateZ(30px)' }}>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="bg-white/5 border border-white/8 rounded-full px-4 py-0.5 text-[0.68rem] text-white/60 font-mono tracking-tight max-w-[180px] truncate">
          {project.url.replace('https://', '')}
        </div>
        <div className="w-8" />
      </div>

      {/* Main Content Info */}
      <div className="relative z-20 flex flex-col justify-end h-full text-left mt-auto" style={{ transform: 'translateZ(40px)' }}>
        <div>
          <span className="text-[0.7rem] font-extrabold text-primary-3 uppercase tracking-[0.22em] bg-white/5 px-3 py-1 rounded-full border border-white/8">
            {project.industry}
          </span>
          <h3 className="font-['Space_Grotesk'] font-bold text-2xl md:text-3xl tracking-tight text-white mt-4 mb-2">
            {project.name}
          </h3>
          <p className="text-white/60 text-[0.98rem] leading-[1.6] m-0">
            {project.problem}
          </p>
        </div>

        {/* Specs revealed on hover */}
        <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 flex flex-col gap-3 border-t border-white/10 pt-4 mt-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-[0.62rem] font-extrabold text-white/40 uppercase tracking-[0.1em]">Stack</span>
            <span className="text-[0.82rem] text-white/80 font-mono">{project.stack}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[0.62rem] font-extrabold text-[#00ff66] uppercase tracking-[0.1em]">Result</span>
            <span className="text-[0.88rem] text-[#00ff66] font-bold">{project.result}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
          <span className="text-xs font-bold text-white/40 group-hover:text-white transition-colors flex items-center gap-1.5">
            Visit Live Site
            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="text-xs text-white/30 font-mono">LIVE ↗</span>
        </div>
      </div>
    </a>
  );
}

function TiltTestimonialCard({ testimonial, index = 0 }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), index * 200);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [index]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const tiltX = isHovered ? coords.y * -12 : 0;
  const tiltY = isHovered ? coords.x * 12 : 0;
  const glowX = isHovered ? (coords.x + 0.5) * 100 : 50;
  const glowY = isHovered ? (coords.y + 0.5) * 100 : 50;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-[40px] border border-white/8 bg-white/[0.02] p-8 flex flex-col justify-between overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.6)] duration-300 ease-out text-left"
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${isHovered ? 1.02 : 1})`,
        transformStyle: 'preserve-3d',
        minHeight: '480px',
        opacity: revealed ? 1 : 0,
        translate: revealed ? '0 0' : '0 60px',
        filter: revealed ? 'blur(0px)' : 'blur(8px)',
        transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), translate 0.9s cubic-bezier(0.16,1,0.3,1), filter 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.3s ease-out, box-shadow 0.3s ease-out',
      }}
    >
      {/* Spotlight glow */}
      <div
        className="absolute pointer-events-none inset-0 opacity-0 transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 0.18 : 0,
          background: `radial-gradient(circle 200px at ${glowX}% ${glowY}%, var(--primary-2), transparent)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Quote text */}
      <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
        <span className="font-serif text-[5.5rem] leading-none text-purple-500/20 block -mt-4 -ml-2 select-none">“</span>
        <p className="text-white/90 text-[1.05rem] leading-[1.65] m-0 italic -mt-8 font-medium">
          {testimonial.quote}
        </p>
      </div>

      {/* Author and image */}
      <div className="relative z-10 mt-8" style={{ transform: 'translateZ(40px)' }}>
        <div className="mb-4">
          <h4 className="font-bold text-white text-lg m-0">{testimonial.name}</h4>
          <p className="text-white/40 text-xs tracking-widest uppercase m-0 mt-0.5">{testimonial.role}</p>
        </div>

        {/* Portrait image */}
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/40 relative group/img">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover/img:scale-105 group-hover/img:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />
        </div>
      </div>
    </div>
  );
}

const whyChooseItems = [
  { link: '#', text: 'Fast Turnaround', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80' },
  { link: '#', text: 'Transparent Pricing', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80' },
  { link: '#', text: 'Mobile-First Approach', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80' },
  { link: '#', text: 'SEO Ready', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=600&auto=format&fit=crop&q=80' },
  { link: '#', text: 'Conversion Focused', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80' },
  { link: '#', text: 'Ongoing Support', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=80' }
];

const templatesData = [
  {
    title: 'Portfolio',
    badge: 'Creative Portfolio',
    desc: 'Clean visual framework built to showcase creative work, photography, or case studies with immersive detail.',
    color: '#ff91e0',
    glow: 'rgba(255, 145, 224, 0.08)',
    image: '/images/templates/portfolio_template.png'
  },
  {
    title: 'Coaching',
    badge: 'Professional Coaching',
    desc: 'Designed to establish authority, build deep trust, and drive consistent appointment scheduling.',
    color: '#5a74ff',
    glow: 'rgba(90, 116, 255, 0.08)',
    image: '/images/templates/coaching_template.png'
  },
  {
    title: 'Restaurants',
    badge: 'Luxury Dining',
    desc: 'High-end digital menus, smooth reservations integrations, and immersive food presentations.',
    color: '#f8ff1f',
    glow: 'rgba(248, 255, 31, 0.08)',
    image: '/images/templates/restaurant_template.png'
  },
  {
    title: 'Startups',
    badge: 'SaaS & Startups',
    desc: 'Conversion-first landing structures with responsive product details and interactive elements.',
    color: '#9fe870',
    glow: 'rgba(159, 232, 112, 0.08)',
    image: '/images/templates/startup_template.png'
  }
];

function HomePage() {
  const [activeTemplateIdx, setActiveTemplateIdx] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 1. HERO SECTION */}
      <ImpactHero
        lines={['Premium Websites', 'Built for Growth']}
        copy={
          <p className="text-white/75 text-[1.15rem] leading-[1.7] m-0 max-w-[60ch] mx-auto">
            We design custom visual systems and build high-performance web applications that convert visitors into customers.
          </p>
        }
        actions={[
          <Link key="consultation" to="/contact" className="cta-button">
            <div className="cta-button__background" />
            <div className="cta-button__blur" />
            <div className="cta-button__inner">
              <span className="cta-button__text">Build Custom Site</span>
              <div className="cta-button__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </Link>,
          <Link key="pricing" to="/pricing" className="cta-button is--ghost">
            <div className="cta-button__background" />
            <div className="cta-button__inner">
              <span className="cta-button__text">View Pricing</span>
              <div className="cta-button__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </Link>
        ]}
      >
        <HomeHero />
      </ImpactHero>

      {/* MARQUEE SEPARATOR */}
      <div className="bg-black py-4 border-b border-white/8">
        <Marquee
          items={[
            "WEBSITE DESIGN", "WEB DEVELOPMENT", "SEO OPTIMIZATION", "BRANDING",
            "WEBSITE DESIGN", "WEB DEVELOPMENT", "SEO OPTIMIZATION", "BRANDING"
          ]}
          speed="20s"
        />
      </div>

      {/* 3.5 TEMPLATES SECTION */}
      <SectionWise bg="bg-black" style={{ paddingTop: '80px', paddingBottom: '100px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', overflow: 'visible' }}>
        <div className="templates-split-container">
          {/* Left Text and list items */}
          <div className="templates-left-info">
            <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-2 inline-block"></span>
              ready-made designs
            </span>
            <h2 className="templates-heading">
              Built for performance.<br />Tailored to grow.
            </h2>
            <p className="templates-description">
              Select one of our high-converting base aesthetics. We customize every detail—colors, fonts, integrations—to match your business identity perfectly.
            </p>
            <div className="templates-list">
              {templatesData.map((item, idx) => (
                <div
                  key={idx}
                  className={`templates-list-item ${activeTemplateIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveTemplateIdx(idx)}
                  style={{ '--template-glow': item.glow, '--template-active-color': item.color }}
                >
                  <span className="templates-list-num">0{idx + 1}</span>
                  <div className="templates-list-text">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right CardSwap visual stack */}
          <div className="templates-right-visual">
            <div className="card-swap-wrapper">
              <CardSwap
                width={460}
                height={350}
                cardDistance={40}
                verticalDistance={45}
                delay={4500}
                pauseOnHover={true}
                onCardSwap={(newFrontIdx) => {
                  setActiveTemplateIdx(newFrontIdx);
                }}
                onCardClick={(idx) => {
                  setActiveTemplateIdx(idx);
                }}
              >
                {templatesData.map((item, idx) => (
                  <Card key={idx} className="template-preview-card">
                    <div className="template-card-inner">
                      <img src={item.image} alt={item.title} className="template-card-img" />
                      <div className="template-card-badge">{item.badge}</div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </SectionWise>

      {/* 4. FEATURED PROJECTS SECTION */}
      <SectionWise bg="bg-transparent" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
          <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-2 inline-block"></span>
            featured work
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white mt-3 mb-5 uppercase tracking-tight font-['Space_Grotesk']">
            Built for Performance. Designed for Growth.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            A selection of projects where modern design, fast performance, and business goals come together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[30px]">
          {projects.map((project, i) => (
            <InteractiveProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink to="/services" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
            View More Projects
          </ButtonLink>
        </div>
      </SectionWise>

      {/* 5. WHY CHOOSE FIDARIX */}
      <SectionWise bg="bg-black" style={{ paddingTop: '80px', paddingBottom: '80px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ textAlign: 'left', marginBottom: '50px' }}>
          <span className="text-xs font-extrabold text-purple-400 uppercase tracking-[0.22em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 inline-block"></span>
            why choose fidarix
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white mt-3 uppercase tracking-tight font-['Space_Grotesk']">
            Why Businesses Work With Us
          </h2>
        </div>

        <div style={{ height: '580px', position: 'relative', width: '100%' }}>
          <FlowingMenu
            items={whyChooseItems}
            textColor="#ffffff"
            bgColor="#000000"
            marqueeBgColor="#7c3aed"
            marqueeTextColor="#ffffff"
            borderColor="rgba(255, 255, 255, 0.08)"
          />
        </div>
      </SectionWise>

      {/* 6. PRICING PREVIEW */}
      <SectionWise bg="bg-black" style={{ paddingTop: '80px', paddingBottom: '80px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ textAlign: 'left', marginBottom: '50px' }}>
          <span className="text-xs font-extrabold text-blue-400 uppercase tracking-[0.22em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>
            pricing preview
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white mt-3 uppercase tracking-tight font-['Space_Grotesk']">
            Simple Packages. Clear Value.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, idx) => (
            <TiltedCard
              key={idx}
              altText={`${plan.name} pricing plan`}
              captionText={`Fidarix - ${plan.name} Plan`}
              containerHeight="480px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className={`w-full h-full p-6 flex flex-col justify-between text-left rounded-[24px] border relative overflow-hidden select-none transition-all duration-300 ${plan.popular
                    ? 'bg-gradient-to-b from-purple-950/20 to-black border-purple-500 shadow-[0_15px_40px_rgba(147,51,234,0.15)] scale-102 z-10'
                    : 'bg-white/[0.02] border-white/8 hover:bg-white/[0.04] hover:border-white/12'
                  }`}>
                  {plan.popular && (
                    <span className="absolute top-4 right-4 bg-purple-600 text-white font-extrabold text-[0.68rem] tracking-widest uppercase px-3 py-1 rounded-full z-20">
                      Popular
                    </span>
                  )}
                  <div className="relative z-10">
                    <h3 className="font-['Space_Grotesk'] text-white/90 text-xl font-bold uppercase tracking-wider mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mb-6">
                      {plan.price}
                    </div>
                    <ul className="flex flex-col gap-3 list-none p-0 m-0 border-t border-white/10 pt-5">
                      {plan.features.slice(0, 4).map((feature, fIdx) => (
                        <li key={fIdx} className="text-white/80 text-[0.9rem] flex items-start gap-2.5">
                          <span className="text-purple-400 font-bold mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-2 relative z-10">
                    <ButtonLink
                      to="/pricing"
                      variant={plan.popular ? 'primary' : 'ghost'}
                      style={{ width: '100%', textAlign: 'center', padding: '12px 0' }}
                    >
                      Choose {plan.name}
                    </ButtonLink>
                  </div>
                </div>
              }
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink to="/pricing" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
            View Full Pricing
          </ButtonLink>
        </div>
      </SectionWise>

      {/* 7. CLIENT TESTIMONIALS SECTION */}

      <SectionWise bg="bg-transparent" style={{ paddingTop: '80px', paddingBottom: '100px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ textAlign: 'left', marginBottom: '60px' }}>
          <span className="text-xs font-extrabold text-green-400 uppercase tracking-[0.22em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
            testimonials
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white mt-3 uppercase tracking-tight font-['Space_Grotesk']">
            Trusted by Growing Businesses
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: '1.6', marginTop: '10px' }}>
            We take pride in helping businesses create a professional online presence and generate meaningful results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <TiltTestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </SectionWise>

      {/* INTERACTIVE ROADMAP PROCESS CYCLE */}
      <Roadmap />

      {/* 8. FINAL CTA SECTION */}
      <SectionWise bg="bg-black" style={{ paddingTop: '100px', paddingBottom: '120px', backgroundColor: '#000000', position: 'relative', overflow: 'hidden' }}>
        {/* Glowing accent bg */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] pointer-events-none filter blur-[60px]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-2 inline-block"></span>
            get started today
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white uppercase tracking-tight font-['Space_Grotesk'] leading-[1.05]">
            Ready to Build Your Website?
          </h2>
          <p className="text-white/70 text-[1.15rem] leading-[1.7] max-w-[50ch] mb-4">
            Let's create a website that helps your business stand out, attract customers, and grow online.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <ButtonLink to="/contact" style={{ padding: '18px 38px', fontSize: '1.1rem' }}>
              Book a Free Consultation
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost" style={{ padding: '18px 38px', fontSize: '1.1rem' }}>
              Contact Us
            </ButtonLink>
          </div>
          <div className="text-white/40 text-sm font-semibold tracking-wider mt-4">
            Starting from ₹3,999
          </div>
        </div>
      </SectionWise>
    </div>
  );
}

export default HomePage;
