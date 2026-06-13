import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { SectionWise, Marquee, ImpactHero, ButtonLink } from '../../components/common/Layout';
import { services, projects, testimonials, pricingPlans } from '../../data/site';
import Hyperspeed from '../../components/Hyperspeed';
import InteractiveRoadmap from '../../components/InteractiveRoadmap';
import FlowingMenu from '../../components/FlowingMenu';
import TiltedCard from '../../components/TiltedCard';
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

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 1. HERO SECTION */}
      <ImpactHero
        lines={['Websites That Help', 'Businesses Grow']}
        copy={
          <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <span className="text-xl md:text-2xl text-purple-300 font-semibold tracking-wide block">
              Professional websites designed to attract customers, generate leads, and build trust online.
            </span>
            <p className="text-white/70 text-[1.05rem] leading-[1.65] m-0">
              Whether you're a coaching institute, consultant, startup, clinic, agency, or local business, we create fast, modern, and SEO-ready websites that deliver real results.
            </p>
          </div>
        }
        actions={[
          <ButtonLink key="consultation" to="/contact" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Get a Free Consultation
          </ButtonLink>,
          <ButtonLink key="pricing" to="/pricing" variant="ghost" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            View Pricing
          </ButtonLink>,
        ]}
      >
        <Hyperspeed />
      </ImpactHero>

      {/* 2. WHO WE ARE SECTION */}
      <SectionWise bg="bg-black" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#000000' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left max-w-5xl mx-auto">
          <div className="md:col-span-5">
            <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary-2 inline-block"></span>
              who we are
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white leading-[1.1] uppercase tracking-tight font-['Space_Grotesk']">
              A Small Studio Focused on Big Results
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 text-[1.1rem] text-white/70 leading-[1.7] font-normal">
            <p className="m-0 font-medium text-white text-[1.2rem]">
              Fidarix is a web design and development studio helping businesses establish a strong online presence without the complexity or agency-level costs.
            </p>
            <p className="m-0">
              We combine strategy, design, development, and SEO to create websites that not only look professional but also help businesses generate inquiries, bookings, and sales.
            </p>
            <p className="m-0 text-primary-3 font-semibold">
              Our goal is simple: build websites that work for your business.
            </p>
          </div>
        </div>
      </SectionWise>

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

      {/* 3. SERVICES SECTION */}
      <SectionWise bg="bg-black" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ textAlign: 'left', marginBottom: '60px' }}>
          <span className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            services
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white mt-3 uppercase tracking-tight font-['Space_Grotesk']">
            Everything You Need to Grow Online
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Website Design */}
          <ScrollSplashCard>
            <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] mb-4">
              01 / Design
            </div>
            <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-3">Website Design</h3>
            <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0 mb-6">
              Modern, professional designs built to create a strong first impression.
            </p>
            <div className="w-full border border-white/8 rounded-2xl bg-white/[0.02] p-4 flex items-center justify-center">
              <svg viewBox="0 0 400 110" width="100%">
                <rect x="5" y="5" width="390" height="100" rx="12" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" />
                <line x1="120" y1="5" x2="120" y2="105" stroke="rgba(124,58,237,0.2)" />
                <circle cx="62" cy="55" r="28" fill="none" stroke="rgba(124,58,237,0.4)" strokeWidth="3" />
                <rect x="140" y="34" width="220" height="12" rx="4" fill="rgba(124,58,237,0.25)" />
                <rect x="140" y="58" width="170" height="8" rx="3" fill="rgba(124,58,237,0.15)" />
              </svg>
            </div>
          </ScrollSplashCard>

          {/* Card 2: Web Development */}
          <ScrollSplashCard>
            <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] mb-4">
              02 / Engineering
            </div>
            <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-3">Web Development</h3>
            <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0 mb-6">
              Fast, responsive, and reliable websites built with modern technologies.
            </p>
            <div className="p-4 bg-[#0d1b3d]/30 border border-white/8 rounded-2xl w-full flex flex-col gap-1.5 font-mono text-[0.8rem] text-left">
              <span className="text-purple-400">const site = () =&gt; &#123;</span>
              <span className="text-blue-400 pl-3">return &lt;FastResponsiveReliable /&gt;;</span>
              <span className="text-purple-400">&#125;;</span>
              <span className="text-green-400 text-[0.74rem]">// Optimized production build successful</span>
            </div>
          </ScrollSplashCard>

          {/* Card 3: SEO Optimization */}
          <div className="border border-white/8 rounded-[48px] bg-white/[0.03] p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden text-left min-h-[340px]">
            <div>
              <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] mb-4">
                03 / Marketing
              </div>
              <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-3">SEO Optimization</h3>
              <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0">
                Improve visibility on Google and attract customers actively searching for your services.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-white/6 text-[#00ff66] text-[0.78rem] px-3 py-1 rounded-full font-bold">✓ Google Visibility</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-3 py-1 rounded-full font-bold">✓ Search Traffic</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-3 py-1 rounded-full font-bold">✓ Higher Rankings</span>
            </div>
          </div>

          {/* Card 4: Branding */}
          <div className="border border-white/8 rounded-[48px] bg-white/[0.03] p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden text-left min-h-[340px]">
            <div>
              <div className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] mb-4">
                04 / Identity
              </div>
              <h3 className="font-['Space_Grotesk'] text-white font-medium text-2xl tracking-tight mb-3">Branding</h3>
              <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0">
                Logos, color systems, and visual identity that make your business memorable.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-3 py-1 rounded-full font-bold">Logos</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-3 py-1 rounded-full font-bold">Color Systems</span>
              <span className="bg-white/6 text-white/80 text-[0.78rem] px-3 py-1 rounded-full font-bold">Visual Identity</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink to="/services" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
            Explore Services
          </ButtonLink>
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
                <div className={`w-full h-full p-6 flex flex-col justify-between text-left rounded-[24px] border relative overflow-hidden select-none transition-all duration-300 ${
                  plan.popular
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
      <InteractiveRoadmap />

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
