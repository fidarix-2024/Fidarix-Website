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
import SplitText from '../../components/common/SplitText';
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
          
          {/* Bottom Section (Title, Description, and Outcome) */}
          <div className="flex flex-col gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-['Space_Grotesk'] font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              {project.name}
            </h3>
            {project.description && (
              <p className="text-white/80 text-sm md:text-base leading-relaxed m-0 font-medium max-w-[90%]">
                {project.description}
              </p>
            )}
            {project.outcome && (
              <div className="text-[#ffbd2e] text-[10px] md:text-xs font-semibold tracking-wider border-l-2 border-[#ffbd2e] pl-3 py-0.5 mt-1 uppercase">
                {project.outcome}
              </div>
            )}
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
        <SplitText
          text="  Turn Your Website Into Your Best Salesperson"
          className="font-['Space_Grotesk'] font-extrabold text-white text-[clamp(2.5rem,6.2vw,5.5rem)] leading-[0.98] uppercase tracking-tight mb-6"
          delay={40}
          duration={1}
          ease="power4.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          tag="h1"
          textAlign="center"
        />
        <p className="text-white/70 text-lg md:text-xl font-medium leading-[1.6] max-w-[52ch] mb-10 mx-auto">
         We design and build premium websites that attract customers,
generate leads, and help local businesses grow faster.</p>
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
      // Calculate scale to fit 2500px content inside screen height (minus padding) and width
      const sH = (window.innerHeight - 120) / 2500;
      const sW = window.innerWidth / 2500;
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
              <div className="w-72 h-72 bg-[#ffbd2e]/10 rounded-full blur-[90px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <span className="text-lg font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2 mb-4 relative z-10">
              
              </span>
              <SplitText
                text="Why we exist?"
                className="text-[clamp(7.5rem,13vw,11.5rem)] font-extrabold text-white leading-[1.05] tracking-tight font-['Space_Grotesk'] relative z-10"
                delay={40}
                duration={0.7}
                ease="power4.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                tag="h2"
                textAlign="center"
              />
              <p className="mt-8 text-white/70 text-3xl md:text-[2.2rem] leading-[1.6] max-w-[800px] relative z-10 mx-auto font-medium tracking-wide">
                We craft digital experiences designed to scale your business and outshine the competition.
              </p>
            </div>

            {/* Orbit Rings (Visible Path) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-[2000px] h-[2000px] shrink-0 rounded-full border-[2px] border-white/20 border-solid shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
            </div>

            {/* The Orbiting Track */}
            <div className="absolute top-1/2 left-1/2 w-0 h-0 z-30">
              
              {/* Card 1 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] bg-transparent border border-white/10 rounded-[32px] p-12 overflow-hidden transition-colors duration-300 hover:border-[#ffbd2e]/50 pointer-events-auto cursor-pointer animate-orbit-1 group-hover:[animation-play-state:paused]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffbd2e]/10 rounded-full blur-[70px] pointer-events-none" />
                <span className="text-[#ffbd2e] font-bold tracking-widest uppercase text-xl mb-5 block">01 / The Gap</span>
                <h3 className="text-6xl font-bold text-white mb-5 font-['Space_Grotesk']">Accessible Quality</h3>
                <p className="text-white/80 text-[1.5rem] leading-relaxed m-0 relative z-10 font-medium">
                  Fidarix bridges the gap between high-end agency quality and accessible pricing for growing businesses.
                </p>
              </div>

              {/* Card 2 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] bg-transparent border border-white/10 rounded-[32px] p-12 overflow-hidden transition-colors duration-300 hover:border-[#7c3aed]/50 pointer-events-auto cursor-pointer animate-orbit-2 group-hover:[animation-play-state:paused]">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7c3aed]/10 rounded-full blur-[70px] pointer-events-none" />
                <span className="text-[#9b4dff] font-bold tracking-widest uppercase text-xl mb-5 block">02 / The Approach</span>
                <h3 className="text-6xl font-bold text-white mb-5 font-['Space_Grotesk']">Beyond Aesthetics</h3>
                <p className="text-white/80 text-[1.5rem] leading-relaxed m-0 relative z-10 font-medium">
                  We combine strategy, design, and technical SEO to create platforms that actively solve your business problems.
                </p>
              </div>

              {/* Card 3 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] bg-transparent border border-white/10 rounded-[32px] p-12 overflow-hidden transition-colors duration-300 hover:border-emerald-500/50 pointer-events-auto cursor-pointer animate-orbit-3 group-hover:[animation-play-state:paused]">
                <div className="absolute top-1/2 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[70px] pointer-events-none" />
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-xl mb-5 block">03 / The Goal</span>
                <h3 className="text-6xl font-bold text-white mb-5 font-['Space_Grotesk']">The Growth Engine</h3>
                <p className="text-white/80 text-[1.5rem] leading-relaxed m-0 relative z-10 font-medium">
                  Our ultimate goal is simple: turn your website into a powerful, automated, revenue-generating growth engine.
                </p>
              </div>

              {/* Card 4 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] bg-transparent border border-white/10 rounded-[32px] p-12 overflow-hidden transition-colors duration-300 hover:border-blue-500/50 pointer-events-auto cursor-pointer animate-orbit-4 group-hover:[animation-play-state:paused]">
                <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[70px] pointer-events-none" />
                <span className="text-blue-400 font-bold tracking-widest uppercase text-xl mb-5 block">04 / The Result</span>
                <h3 className="text-6xl font-bold text-white mb-5 font-['Space_Grotesk']">Unfair Advantage</h3>
                <p className="text-white/80 text-[1.5rem] leading-relaxed m-0 relative z-10 font-medium">
                  We give your business the digital leverage it needs to dominate your local market and scale predictably.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="md:hidden flex flex-col gap-6 max-w-lg mx-auto px-4">
          <div className="text-center flex flex-col items-center mb-4">
            <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary-2 inline-block shadow-[0_0_10px_#ffbd2e]"></span>
              our story
            </span>
            <SplitText
              text="Why we exist?"
              className="text-[2.2rem] font-extrabold text-white leading-[1.05] tracking-tight font-['Space_Grotesk']"
              delay={40}
              duration={0.7}
              ease="power4.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              tag="h2"
              textAlign="center"
            />
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              We don't just build websites. We craft digital experiences designed to scale your business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.02] border border-white/10 rounded-[18px] p-4 relative overflow-hidden backdrop-blur-xl">
               <div className="absolute top-0 right-0 w-16 h-16 bg-[#ffbd2e]/10 rounded-full blur-[20px]" />
               <span className="text-[#ffbd2e] font-bold tracking-widest uppercase text-[10px] mb-2 block">01 / The Gap</span>
               <h3 className="text-sm font-bold text-white mb-2 font-['Space_Grotesk']">Accessible Quality</h3>
               <p className="text-white/70 text-xs leading-relaxed m-0 relative z-10">
                 Bridging high-end agency quality and accessible pricing for growing businesses.
               </p>
            </div>
            
            <div className="bg-white/[0.02] border border-white/10 rounded-[18px] p-4 relative overflow-hidden backdrop-blur-xl">
               <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#7c3aed]/10 rounded-full blur-[20px]" />
               <span className="text-[#9b4dff] font-bold tracking-widest uppercase text-[10px] mb-2 block">02 / The Approach</span>
               <h3 className="text-sm font-bold text-white mb-2 font-['Space_Grotesk']">Beyond Aesthetics</h3>
               <p className="text-white/70 text-xs leading-relaxed m-0 relative z-10">
                 Strategy, design, and technical SEO to solve your business problems.
               </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-[18px] p-4 relative overflow-hidden backdrop-blur-xl">
               <div className="absolute top-1/2 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-[20px]" />
               <span className="text-emerald-400 font-bold tracking-widest uppercase text-[10px] mb-2 block">03 / The Goal</span>
               <h3 className="text-sm font-bold text-white mb-2 font-['Space_Grotesk']">The Growth Engine</h3>
               <p className="text-white/70 text-xs leading-relaxed m-0 relative z-10">
                 Turn your website into a powerful, automated revenue-generating engine.
               </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-[18px] p-4 relative overflow-hidden backdrop-blur-xl">
               <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500/10 rounded-full blur-[20px]" />
               <span className="text-blue-400 font-bold tracking-widest uppercase text-[10px] mb-2 block">04 / The Result</span>
               <h3 className="text-sm font-bold text-white mb-2 font-['Space_Grotesk']">Unfair Advantage</h3>
               <p className="text-white/70 text-xs leading-relaxed m-0 relative z-10">
                 Digital leverage to dominate your market and scale predictably.
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
            
          </span>
          <SplitText
            text="Results We’re Proud Of"
            className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-white leading-[1.05] uppercase tracking-tight font-['Space_Grotesk']"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h2"
            textAlign="center"
          />
          <p className="mt-6 text-[1.15rem] text-white/60 leading-[1.7] max-w-2xl mx-auto font-medium">
            Every project below solved a real business problem.
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

      {/* 5B. WHY BUSINESSES MOVE BEYOND TEMPLATES SECTION */}
      <SectionWise bg="bg-transparent" style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', position: 'relative' }}>
        <div className="beyond-templates-container max-w-7xl mx-auto px-4">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-xs font-extrabold text-[#9b4dff] uppercase tracking-[0.22em] flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#9b4dff] inline-block shadow-[0_0_10px_rgba(155,77,255,0.6)]"></span>
              custom design vs templates
            </span>
            <SplitText
              text="Why Businesses Move Beyond Templates"
              className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold text-white leading-[1.1] uppercase tracking-tight font-['Space_Grotesk']"
              delay={35}
              duration={0.6}
              ease="power4.out"
              splitType="words,chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              tag="h2"
              textAlign="center"
            />
            <p className="mt-4 text-[1.1rem] text-white/50 leading-[1.6] max-w-2xl mx-auto font-medium">
              The difference between having a website and having a professional online presence.
            </p>
          </div>

          <div className="split-comparison-layout grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-16">
            
            {/* Left Card: Template Website */}
            <motion.div 
              className="comparison-card template-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                    staggerChildren: 0.08,
                    delayChildren: 0.2
                  } 
                }
              }}
            >
              <div className="card-badge-placeholder" />
              <h3 className="comparison-title text-white/60 font-['Space_Grotesk'] text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-xs border border-white/20 px-2 py-0.5 rounded text-white/40 font-bold uppercase tracking-wider">Standard</span>
                Template Website
              </h3>
              <ul className="comparison-points flex flex-col gap-5">
                {[
                  "Quick to launch",
                  "Uses pre-made layouts",
                  "Limited brand differentiation",
                  "Built for convenience",
                  "Works for getting started"
                ].map((point, index) => (
                  <motion.li 
                    key={index}
                    className="point-item text-white/50 flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                    }}
                  >
                    <span className="point-bullet text-white/30">•</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Card: Fidarix Website */}
            <motion.div 
              className="comparison-card fidarix-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8, 
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                    staggerChildren: 0.08,
                    delayChildren: 0.35
                  } 
                }
              }}
            >
              <div className="premium-badge">
                <Sparkles className="w-3.5 h-3.5" /> Premium Standard
              </div>
              <h3 className="comparison-title text-white font-['Space_Grotesk'] text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-xs border border-[#9b4dff] px-2 py-0.5 rounded bg-[#9b4dff]/10 text-[#9b4dff] font-bold uppercase tracking-wider">Custom</span>
                Fidarix Website
              </h3>
              <ul className="comparison-points flex flex-col gap-5">
                {[
                  "Designed specifically for your business",
                  "Reflects your brand identity",
                  "Tailored to your customers",
                  "Built to establish trust",
                  "Created to help your business stand out"
                ].map((point, index) => (
                  <motion.li 
                    key={index}
                    className="point-item text-white/90 flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                    }}
                  >
                    <span className="point-bullet text-[#9b4dff]">✓</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>

          <div className="text-center max-w-3xl mx-auto mt-20 flex flex-col items-center gap-6">
            <p className="statement-quote font-['Space_Grotesk'] text-2xl md:text-3xl font-medium leading-relaxed text-white max-w-[28ch] italic">
              "Most businesses don't need another website.<br />
              They need a digital presence that reflects the quality of their work."
            </p>
            <p className="statement-tagline text-white/40 uppercase tracking-[0.25em] text-[10px] font-extrabold mt-4">
              Premium Online Presence for Growing Businesses
            </p>
          </div>

          {/* Subtle animated divider / visual transition leading into Testimonials */}
          <div className="section-transition-divider mt-24 relative flex justify-center items-center">
            <div className="divider-line w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <motion.div 
              className="divider-glow-dot absolute w-3 h-3 bg-[#9b4dff] rounded-full blur-[2px]"
              animate={{ 
                x: [-150, 150],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>

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
            
            <SplitText
              text="What Our Clients are Saying"
              className="text-[2rem] font-bold text-white mb-6 leading-[1.1] font-['Space_Grotesk'] tracking-tight"
              delay={40}
              duration={0.7}
              ease="power4.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              tag="h3"
              textAlign="center"
            />
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
                image: '/images/HomePage/ranjan.png'
              },
              {
                name: "Arvind Kumar",
                role: "Founder, Aarav Academy",
                quote: "Partnering with Fidarix was a game-changer for Aarav Academy. We've doubled our digital course registrations.",
                image: '/images/HomePage/arvind.png'
              },
              {
                name: "Abhishek Shrivastav",
                role: "Director, MissionIq",
                quote: "Fidarix revolutionized our workflow. It's like having a dedicated tech team who works around the clock!",
                image:'/images/HomePage/abhishek.png'
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
                <img src="/images/HomePage/ranjan.png" alt="Rajan Shrivastav" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
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
                <img src="/images/HomePage/arvind.png" alt="Arvind Kumar" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
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
                <img src="/images/HomePage/abhishek.png" alt="Abhishek Shrivastav" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
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
          <SplitText
            text="Ready to Build Your Website?"
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white uppercase tracking-tight font-['Space_Grotesk'] leading-[1.05]"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h2"
            textAlign="center"
          />
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
