import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { SectionWise, ImpactHero, ButtonLink } from '../../components/common/Layout';
import { projects, testimonials } from '../../data/site';
import HomeHero from '../../components/HomeComponent/HomeHero';
import CardSwap, { Card } from '../../components/common/CardSwap';
import MarqueeStrip from '../../components/common/MarqueeStrip';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import Silk from '../../components/Silk';
import Galaxy from '../../components/Galaxy';
import './HomePage.css';

const STATIC_TILES = Array.from({ length: 800 }).map((_, i) => {
  const isColored = Math.random() > 0.6; 
  const baseOpacity = isColored ? (Math.random() * 0.15 + 0.02) : 0; 
  const isAnimated = isColored && Math.random() > 0.4;
  return {
    id: i,
    baseOpacity,
    isColored,
    isAnimated,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4
  };
});

function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
      <div 
        className="w-[120vw] h-[120vh] grid"
        style={{ 
          gridTemplateColumns: 'repeat(auto-fill, 64px)',
          gridAutoRows: '64px',
          gap: '1px',
          backgroundColor: 'rgba(119, 59, 224, 0.3)', // Grid line color
          transform: 'scale(1.1)', // Ensure no edges are visible
        }}
      >
        {STATIC_TILES.map((tile) => (
          <div key={tile.id} className="relative w-full h-full bg-[#05000a]">
            {tile.isColored && (
              <div 
                className={`absolute inset-0 bg-[#7c3aed] ${tile.isAnimated ? 'animate-fade-square' : ''}`}
                style={{
                  opacity: tile.isAnimated ? 0 : tile.baseOpacity,
                  animationDuration: tile.isAnimated ? `${tile.duration}s` : undefined,
                  animationDelay: tile.isAnimated ? `${tile.delay}s` : undefined,
                }}
              />
            )}
          </div>
        ))}
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
      className="group relative block duration-500 ease-out w-full"
      style={{
        transform: `perspective(1200px) rotateX(${tiltX * 0.5}deg) rotateY(${tiltY * 0.5}deg) scale(${isHovered ? 1.02 : 1})`,
        transformStyle: 'preserve-3d',
        opacity: revealed ? 1 : 0,
        translate: revealed ? '0 0' : '0 60px',
        filter: revealed ? 'blur(0px)' : 'blur(8px)',
        transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), translate 0.9s cubic-bezier(0.16,1,0.3,1), filter 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.4s ease-out',
      }}
    >
      <div className="relative rounded-[32px] overflow-hidden bg-[#0c0c0c] w-full aspect-[4/5] border border-white/10 shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        </div>
        
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10 opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>

        {/* Content Container */}
        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
          
          {/* Top Pill (Industry) */}
          <div className="self-start">
            <div className="px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-lg group-hover:bg-white/20 transition-colors">
              {project.industry || "Digital Experience"}
            </div>
          </div>
          
          {/* Bottom Section (Title and Stack Pills) */}
          <div className="flex flex-col gap-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-['Space_Grotesk'] font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              {project.name}
            </h3>
            
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.stack ? project.stack.split(',').map((item, i) => (
                <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-white/90 text-[9px] md:text-[10px] lg:text-xs font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors">
                  {item.trim()}
                </span>
              )) : null}
            </div>
          </div>
          
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

const SpaceXHero = () => {
  return (
    <div className="relative w-full h-[100vh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-black text-center px-6 border-b border-white/10">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(/images/HomePage/hero-image.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
      </div>

      {/* Text Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mt-16">
        <h1 className="font-['Space_Grotesk'] font-extrabold text-white text-[clamp(2.5rem,6.2vw,5.5rem)] leading-[0.98] uppercase tracking-tight mb-6">
          Become Impossible<br />to Ignore.
        </h1>
        <p className="text-white/60 text-lg md:text-xl font-medium leading-[1.6] max-w-[48ch] mb-8">
          We combine strategy, high-end design, and custom development to turn websites into active sales channels.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center min-h-[56px] px-8 rounded-full font-bold text-sm transition-all bg-gradient-to-r from-primary to-primary-2 text-white shadow-[0_0_30px_rgba(90,116,255,0.3)] hover:shadow-[0_0_45px_rgba(90,116,255,0.5)] hover:-translate-y-0.5">
            Book a Free Consultation
          </Link>
          <Link to="/pricing" className="inline-flex items-center justify-center min-h-[56px] px-8 rounded-full font-bold text-sm transition-all border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

function HomePage() {
  const [activeTemplateIdx, setActiveTemplateIdx] = useState(0);
  const [orbitScale, setOrbitScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Calculate scale to fit 1600px content inside screen height (minus padding) and width
      const sH = (window.innerHeight - 120) / 1600;
      const sW = window.innerWidth / 1600;
      // Allow it to scale up slightly (up to 1.25x) on very large monitors so it doesn't look tiny
      setOrbitScale(Math.min(1.25, sH, sW));
    };
    
    // Initial calculation
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 1. HERO SECTION */}
      <SpaceXHero />


      {/* 3. WHY FIDARIX EXISTS SECTION */}
      <SectionWise bg="bg-black" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#000000', position: 'relative' }}>
        
        {/* Animated Galaxy Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.6]">
          <Galaxy 
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
            transparent={true}
          />
        </div>

        {/* Desktop Orbital Layout */}
        <div className="hidden md:flex relative w-full max-w-7xl mx-auto h-[100vh] min-h-[700px] max-h-[1200px] items-center justify-center overflow-visible group">
          
          {/* Smart Scaling Wrapper: uses React state to guarantee cross-browser compatibility */}
          <div className="relative flex items-center justify-center w-full h-full" style={{ transform: `scale(${orbitScale})` }}>
            
            {/* Central "Sun" text */}
            <div className="absolute z-20 text-center pointer-events-none flex flex-col items-center">
              <div className="w-56 h-56 bg-[#ffbd2e]/10 rounded-full blur-[70px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <span className="text-sm font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2 mb-4 relative z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-2 inline-block shadow-[0_0_10px_#ffbd2e]"></span>
                our story
              </span>
              <h2 className="text-[clamp(5rem,9vw,7.5rem)] font-extrabold text-white leading-[1.05] tracking-tight font-['Space_Grotesk'] relative z-10">
                Why we<br />exist?
              </h2>
              <p className="mt-8 text-white/70 text-xl md:text-[1.4rem] leading-[1.6] max-w-[500px] relative z-10 mx-auto font-medium tracking-wide">
                We craft digital experiences designed to scale your business and outshine the competition.
              </p>
            </div>

            {/* Orbit Rings (Visible Path) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-[1200px] h-[1200px] rounded-full border-[2px] border-white/20 border-solid shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
            </div>

            {/* The Orbiting Track */}
            <div className="absolute top-1/2 left-1/2 w-0 h-0 z-30">
              
              {/* Card 1 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] bg-transparent border border-white/10 rounded-[32px] p-10 overflow-hidden transition-colors duration-300 hover:border-[#ffbd2e]/50 pointer-events-auto cursor-pointer animate-orbit-1 group-hover:[animation-play-state:paused]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffbd2e]/10 rounded-full blur-[40px] pointer-events-none" />
                <span className="text-[#ffbd2e] font-bold tracking-widest uppercase text-base mb-5 block">01 / The Gap</span>
                <h3 className="text-4xl font-bold text-white mb-5 font-['Space_Grotesk']">Accessible Quality</h3>
                <p className="text-white/80 text-[1.2rem] leading-relaxed m-0 relative z-10 font-medium">
                  Fidarix bridges the gap between high-end agency quality and accessible pricing for growing businesses.
                </p>
              </div>

              {/* Card 2 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] bg-transparent border border-white/10 rounded-[32px] p-10 overflow-hidden transition-colors duration-300 hover:border-[#7c3aed]/50 pointer-events-auto cursor-pointer animate-orbit-2 group-hover:[animation-play-state:paused]">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#7c3aed]/10 rounded-full blur-[40px] pointer-events-none" />
                <span className="text-[#9b4dff] font-bold tracking-widest uppercase text-base mb-5 block">02 / The Approach</span>
                <h3 className="text-4xl font-bold text-white mb-5 font-['Space_Grotesk']">Beyond Aesthetics</h3>
                <p className="text-white/80 text-[1.2rem] leading-relaxed m-0 relative z-10 font-medium">
                  We combine strategy, design, and technical SEO to create platforms that actively solve your business problems.
                </p>
              </div>

              {/* Card 3 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] bg-transparent border border-white/10 rounded-[32px] p-10 overflow-hidden transition-colors duration-300 hover:border-emerald-500/50 pointer-events-auto cursor-pointer animate-orbit-3 group-hover:[animation-play-state:paused]">
                <div className="absolute top-1/2 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none" />
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-base mb-5 block">03 / The Goal</span>
                <h3 className="text-4xl font-bold text-white mb-5 font-['Space_Grotesk']">The Growth Engine</h3>
                <p className="text-white/80 text-[1.2rem] leading-relaxed m-0 relative z-10 font-medium">
                  Our ultimate goal is simple: turn your website into a powerful, automated, revenue-generating growth engine.
                </p>
              </div>

              {/* Card 4 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] bg-transparent border border-white/10 rounded-[32px] p-10 overflow-hidden transition-colors duration-300 hover:border-blue-500/50 pointer-events-auto cursor-pointer animate-orbit-4 group-hover:[animation-play-state:paused]">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none" />
                <span className="text-blue-400 font-bold tracking-widest uppercase text-base mb-5 block">04 / The Result</span>
                <h3 className="text-4xl font-bold text-white mb-5 font-['Space_Grotesk']">Unfair Advantage</h3>
                <p className="text-white/80 text-[1.2rem] leading-relaxed m-0 relative z-10 font-medium">
                  We give your business the digital leverage it needs to dominate your local market and scale predictably.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="md:hidden flex flex-col gap-12 max-w-lg mx-auto px-4">
          <div className="text-center flex flex-col items-center mb-8">
            <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary-2 inline-block shadow-[0_0_10px_#ffbd2e]"></span>
              our story
            </span>
            <h2 className="text-[3rem] font-extrabold text-white leading-[1.05] tracking-tight font-['Space_Grotesk']">
              Why we<br />exist?
            </h2>
            <p className="mt-4 text-white/60 text-lg leading-relaxed">
              We don't just build websites. We craft digital experiences designed to scale your business.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-[24px] p-6 relative overflow-hidden backdrop-blur-xl">
               <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffbd2e]/10 rounded-full blur-[30px]" />
               <span className="text-[#ffbd2e] font-bold tracking-widest uppercase text-xs mb-3 block">01 / The Gap</span>
               <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">Accessible Quality</h3>
               <p className="text-white/70 text-sm leading-relaxed m-0 relative z-10">
                 Fidarix bridges the huge gap between high-end agency quality and accessible pricing for growing businesses.
               </p>
            </div>
            
            <div className="bg-white/[0.02] border border-white/10 rounded-[24px] p-6 relative overflow-hidden backdrop-blur-xl">
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#7c3aed]/10 rounded-full blur-[30px]" />
               <span className="text-[#9b4dff] font-bold tracking-widest uppercase text-xs mb-3 block">02 / The Approach</span>
               <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">Beyond Aesthetics</h3>
               <p className="text-white/70 text-sm leading-relaxed m-0 relative z-10">
                 We combine strategy, design, and technical SEO to create platforms that actively solve your business problems.
               </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-[24px] p-6 relative overflow-hidden backdrop-blur-xl">
               <div className="absolute top-1/2 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-[30px]" />
               <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-3 block">03 / The Goal</span>
               <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">The Growth Engine</h3>
               <p className="text-white/70 text-sm leading-relaxed m-0 relative z-10">
                 Our ultimate goal is simple: turn your website into a powerful, automated, revenue-generating growth engine.
               </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-[24px] p-6 relative overflow-hidden backdrop-blur-xl">
               <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-[30px]" />
               <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 block">04 / The Result</span>
               <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">Unfair Advantage</h3>
               <p className="text-white/70 text-sm leading-relaxed m-0 relative z-10">
                 We give your business the digital leverage it needs to dominate your local market and scale predictably.
               </p>
            </div>
          </div>
        </div>
      </SectionWise>


      {/* MARQUEE STRIP (BIPSYNC STYLE HOVER EFFECT) */}
      <MarqueeStrip />

      {/* 5. FEATURED PROJECTS SECTION */}
      <SectionWise bg="bg-transparent" style={{ paddingTop: '100px', paddingBottom: '120px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-2 inline-block shadow-[0_0_10px_#ffbd2e]"></span>
            featured work
          </span>
          <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-white leading-[1.05] uppercase tracking-tight font-['Space_Grotesk']">
             Client Work
          </h2>
          <p className="mt-6 text-[1.15rem] text-white/60 leading-[1.7] max-w-2xl mx-auto font-medium">
            A showcase of our client projects and their unique web experiences, engineered for maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
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

      {/* 6. CLIENT TESTIMONIALS SECTION */}
      <SectionWise bg="bg-transparent" style={{ paddingTop: '80px', paddingBottom: '100px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', position: 'relative', overflow: 'hidden' }}>
        {/* Background Grid & Glow */}
        <AnimatedGridBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,transparent_60%)] pointer-events-none filter blur-[80px]" />

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center min-h-[850px] py-10 md:justify-center">
          
          {/* Phone Mockup (Center) */}
          <div className="relative w-[320px] md:w-[340px] h-[600px] md:h-[680px] bg-gradient-to-b from-[#1c0836] to-[#0a001a] rounded-[50px] border-[8px] border-[#2a1744] shadow-[0_0_60px_rgba(124,58,237,0.2)] flex flex-col items-center justify-center px-6 text-center z-10 flex-shrink-0">
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-full shadow-[inset_0_0_4px_rgba(255,255,255,0.05)]"></div>
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8 text-xs text-white uppercase tracking-widest">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Testimonials
            </div>
            
            <h3 className="text-[2rem] font-bold text-white mb-6 leading-[1.1] font-['Space_Grotesk'] tracking-tight">
              What Our<br/>Clients are Saying
            </h3>
            <p className="text-white/60 text-[0.95rem] leading-relaxed">
              Hear from satisfied founders who transformed their web presence with Fidarix.
            </p>
          </div>

          {/* Mobile Cards */}
          {/* Mobile Cards */}
          <div className="flex flex-col gap-6 md:hidden w-full px-4 relative z-20 mt-10">
            {[
              {
                name: "Rajan Shrivastav",
                role: "Director, Mission Engineering",
                quote: "Fidarix completely transformed how we handle admissions. Our portal is now incredibly fast and responsive.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
              },
              {
                name: "Arvind Kumar",
                role: "Founder, Aarav Academy",
                quote: "Partnering with Fidarix was a game-changer for Aarav Academy. We've doubled our digital course registrations.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80"
              },
              {
                name: "Abhishek Shrivastav",
                role: "Director, MissionIq",
                quote: "Fidarix revolutionized our workflow. It's like having a dedicated tech team who works around the clock!",
                image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&auto=format&fit=crop&q=80"
              },
              {
                name: "Ravi",
                role: "General Manager, Lords Path lab",
                quote: "Their team has made managing our digital presence infinitely easier. It is a game changer for our business.",
                image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&auto=format&fit=crop&q=80"
              }
            ].map((t, i) => (
              <div key={i} className={`w-full bg-gradient-to-br from-[#1c0836] to-[#0a001a] border rounded-[24px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.15)] animate-float ${i === 2 ? 'border-t-[4px] border-[#9b4dff] border-l-[#3e1b73] border-r-[#3e1b73] border-b-[#3e1b73] shadow-[0_-5px_30px_rgba(155,77,255,0.3)]' : 'border-[#3e1b73]'}`} style={{ animationDelay: `${i * 1.5}s` }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-bold text-lg">{t.name}</h4>
                    <p className="text-white/50 text-sm mt-0.5">{t.role}</p>
                  </div>
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-white/20 object-cover" />
                </div>
                <p className="text-white/80 leading-relaxed text-[0.95rem]">"{t.quote}"</p>
              </div>
            ))}
          </div>

          {/* Desktop Testimonial Cards Layer */}
          <div className="hidden md:block absolute w-full h-full inset-0 pointer-events-none z-20">
            
            {/* Top Left */}
            <div className="absolute left-[8%] xl:left-0 top-[18%] w-[420px] pointer-events-auto bg-gradient-to-br from-[#1c0836] to-[#0a001a] border border-[#3e1b73] rounded-[24px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.15)] hover:-translate-y-2 transition-transform duration-300 backdrop-blur-md animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-white font-bold text-lg">Rajan Shrivastav</h4>
                  <p className="text-white/50 text-sm mt-0.5">Director, Mission Engineering</p>
                </div>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80" alt="Rajan Shrivastav" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
              </div>
              <p className="text-white/80 leading-relaxed text-[0.95rem]">
                "Fidarix completely transformed how we handle admissions. Our portal is now incredibly fast and responsive."
              </p>
            </div>

            {/* Top Right */}
            <div className="absolute right-[8%] xl:right-0 top-[18%] w-[420px] pointer-events-auto bg-gradient-to-br from-[#1c0836] to-[#0a001a] border border-[#3e1b73] rounded-[24px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.15)] hover:-translate-y-2 transition-transform duration-300 backdrop-blur-md animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-white font-bold text-lg">Arvind Kumar</h4>
                  <p className="text-white/50 text-sm mt-0.5">Founder, Aarav Academy</p>
                </div>
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80" alt="Arvind Kumar" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
              </div>
              <p className="text-white/80 leading-relaxed text-[0.95rem]">
                "Partnering with Fidarix was a game-changer for Aarav Academy. We've doubled our digital course registrations."
              </p>
            </div>

            {/* Bottom Left (Active/Highlighted Card) */}
            <div className="absolute left-[8%] xl:left-0 bottom-[12%] w-[420px] pointer-events-auto bg-gradient-to-b from-[#31115e] to-[#0a001a] border-t-[4px] border-t-[#9b4dff] border-l border-r border-b border-[#3e1b73] rounded-[24px] p-6 shadow-[0_-10px_40px_rgba(155,77,255,0.4),0_20px_40px_rgba(0,0,0,0.6)] hover:-translate-y-2 transition-transform duration-300 backdrop-blur-md animate-float" style={{ animationDelay: '3s' }}>
              <div className="absolute inset-0 rounded-[24px] animate-pulse bg-[#9b4dff]/5 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h4 className="text-white font-bold text-lg">Abhishek Shrivastav</h4>
                  <p className="text-white/80 text-sm mt-0.5">Director, MissionIq</p>
                </div>
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&auto=format&fit=crop&q=80" alt="Abhishek Shrivastav" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
              </div>
              <p className="text-white/90 leading-relaxed text-[0.95rem] relative z-10">
                "Fidarix revolutionized our workflow. It's like having a dedicated tech team who works around the clock!"
              </p>
            </div>

            {/* Bottom Right */}
            <div className="absolute right-[8%] xl:right-0 bottom-[12%] w-[420px] pointer-events-auto bg-gradient-to-br from-[#1c0836] to-[#0a001a] border border-[#3e1b73] rounded-[24px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.15)] hover:-translate-y-2 transition-transform duration-300 backdrop-blur-md animate-float" style={{ animationDelay: '4.5s' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-white font-bold text-lg">Ravi</h4>
                  <p className="text-white/50 text-sm mt-0.5">General Manager, Lords Path lab</p>
                </div>
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&auto=format&fit=crop&q=80" alt="Ravi" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
              </div>
              <p className="text-white/80 leading-relaxed text-[0.95rem]">
                "Their team has made managing our digital presence infinitely easier. It is a game changer for our business."
              </p>
            </div>

          </div>
        </div>
      </SectionWise>

      {/* 7. FINAL CTA SECTION */}
      <SectionWise bg="bg-black" style={{ paddingTop: '100px', paddingBottom: '120px', backgroundColor: '#000000', position: 'relative', overflow: 'hidden' }}>
        
        {/* Silk Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <Silk
            speed={5}
            scale={1}
            color="#7c3aed"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        {/* Glowing accent bg (kept for subtle overlay blending) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] pointer-events-none filter blur-[60px] z-0" />

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
