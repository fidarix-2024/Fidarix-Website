import React, { useEffect, useRef, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { SectionWise, ImpactHero, ButtonLink } from '../../components/common/Layout';
import { projects, testimonials } from '../../data/site';
import HomeHero from '../../components/HomeComponent/HomeHero';
import CardSwap, { Card } from '../../components/common/CardSwap';
import MarqueeStrip from '../../components/common/MarqueeStrip';
import { motion, useMotionTemplate, useScroll, useTransform, useMotionValue } from 'framer-motion';
import Silk from '../../components/Silk';
import Galaxy from '../../components/Galaxy';
import SplitText from '../../components/common/SplitText';
import ColorBends from '../../components/common/ColorBends';
import SEO from '../../components/common/SEO';

const STATIC_TILES = Array.from({ length: 200 }).map((_, i) => {
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

const AnimatedGridBackground = memo(function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
      <div 
        className="w-[120vw] h-[120vh] grid"
        style={{ 
          gridTemplateColumns: 'repeat(auto-fill, 128px)',
          gridAutoRows: '128px',
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
});

function InteractiveProjectCard({ project, index = 0 }) {
  const cardRef = useRef(null);
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
    const tiltX = y * -10;
    const tiltY = x * 10;
    cardRef.current.style.transform = `perspective(1200px) rotateX(${tiltX * 0.5}deg) rotateY(${tiltY * 0.5}deg) scale(1.02)`;
  };

  const handleMouseEnter = () => {
    if (cardRef.current) cardRef.current.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`;
    }
  };

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
        transformStyle: 'preserve-3d',
        opacity: revealed ? 1 : 0,
        translate: revealed ? '0 0' : '0 60px',
        filter: revealed ? 'blur(0px)' : 'blur(8px)',
        transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), translate 0.9s cubic-bezier(0.16,1,0.3,1), filter 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.4s ease-out',
      }}
    >
      <div className="relative rounded-[32px] overflow-hidden bg-[#0a0a0a] w-full aspect-[4/3] md:aspect-[16/10] border border-white/10 shadow-2xl group cursor-pointer">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={project.image} alt={project.name} loading="lazy" className="w-full h-full object-contain md:object-cover md:object-top transition-transform duration-1000 group-hover:scale-105" />
        </div>
        
        {/* Hover Overlay - completely clean by default, dark & blurred on hover */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>

        {/* Content Container */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
          
          {/* Top Pill (Industry) - Appears on Hover */}
          <div className="self-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
            <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-lg">
              {project.industry || "Digital Experience"}
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col mt-auto relative">
            {/* Default state heading (Glass Pill in the corner) */}
            <div className="absolute bottom-0 left-0 px-5 py-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 group-hover:scale-95 origin-bottom-left">
              <h3 className="font-['Space_Grotesk'] font-bold text-base md:text-lg text-white tracking-tight m-0">
                {project.name}
              </h3>
            </div>

            {/* Hover state content */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex flex-col gap-3 pointer-events-none group-hover:pointer-events-auto">
              <h3 className="font-['Space_Grotesk'] font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-[1.1]">
                {project.name}
              </h3>
              
              {project.description && (
                <p className="text-white/90 text-sm md:text-base leading-relaxed m-0 font-medium max-w-[90%]">
                  {project.description}
                </p>
              )}
              {project.outcome && (
                <div className="text-[#ffbd2e] text-[10px] md:text-xs font-semibold tracking-wider border-l-2 border-[#ffbd2e] pl-3 py-1 mt-2 uppercase">
                  {project.outcome}
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </a>
  );
}

function TiltTestimonialCard({ testimonial, index = 0 }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
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
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    const tiltX = y * -12;
    const tiltY = x * 12;
    const glowX = (x + 0.5) * 100;
    const glowY = (y + 0.5) * 100;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    glowRef.current.style.background = `radial-gradient(circle 200px at ${glowX}% ${glowY}%, var(--primary-2), transparent)`;
  };

  const handleMouseEnter = () => {
    if (cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.02)`;
    if (glowRef.current) glowRef.current.style.opacity = '0.18';
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    if (glowRef.current) glowRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-[40px] border border-white/8 bg-white/[0.02] p-8 flex flex-col justify-between overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.6)] duration-300 ease-out text-left"
      style={{
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
        ref={glowRef}
        className="absolute pointer-events-none inset-0 transition-opacity duration-500 z-0"
        style={{
          opacity: 0,
          background: `radial-gradient(circle 200px at 50% 50%, var(--primary-2), transparent)`,
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
            loading="lazy"
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover/img:scale-105 group-hover/img:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />
        </div>
      </div>
    </div>
  );
}

const SpaceXHero = ({ showHeavyComponents }) => {
  return (
    <div className="relative w-full h-[100vh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-black text-center px-6 border-b border-white/10">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/HomePage/hero-image.jpeg"
          alt="Hero Background"
          fetchpriority="high"
          rel="preload"
          className="w-full h-full object-cover"
        />
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
          playOnScroll={false}
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

function InteractiveCard({ children, isPremium }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`group relative flex flex-col justify-start rounded-[20px] md:rounded-[28px] p-[32px_24px] md:p-12 overflow-hidden backdrop-blur-md transition-all duration-500 ease-out ${
        isPremium 
          ? "bg-gradient-to-b from-[rgba(124,58,237,0.02)] to-[rgba(0,0,0,0.6)] border border-[rgba(155,77,255,0.25)] shadow-[0_20px_50px_rgba(124,58,237,0.06)] hover:-translate-y-2 hover:border-[rgba(155,77,255,0.5)] hover:shadow-[0_30px_60px_rgba(124,58,237,0.15)]"
          : "bg-white/5 border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-white/10 hover:-translate-y-1"
      }`}
      onMouseMove={handleMouseMove}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { 
          opacity: 1, y: 0, 
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08, delayChildren: isPremium ? 0.35 : 0.2 }
        }
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[20px] md:rounded-[28px] opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${isPremium ? '650px' : '400px'} circle at ${mouseX}px ${mouseY}px,
              ${isPremium ? 'rgba(155, 77, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)'},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}

function HomePage() {
  const [showHeavyComponents, setShowHeavyComponents] = useState(true);
  const [activeTemplateIdx, setActiveTemplateIdx] = useState(0);
  const [orbitScale, setOrbitScale] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebDesignCompany",
    "name": "Fidarix",
    "url": "https://fidarix.com",
    "logo": "https://fidarix.com/images/common/logo.png",
    "description": "Fidarix crafts premium digital experiences, high-performance websites, and growth engines that help businesses completely outshine their competition.",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <SEO 
        title="Premium Web Development & Digital Leverage" 
        description="Fidarix crafts premium digital experiences, high-performance websites, and growth engines that help businesses completely outshine their competition."
        canonical="/"
        schema={schemaData} 
      />
      
      {/* 1. HERO SECTION */}
      <SpaceXHero showHeavyComponents={showHeavyComponents} />



      {/* 3. WHY FIDARIX EXISTS SECTION (COMPACT GRID REDESIGN) */}
      <section className="relative w-full bg-black py-24 md:py-32 border-b border-white/10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(124,58,237,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,189,46,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="w-full mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-[#9b4dff] font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-2">
               
              </span>
              <SplitText
                text="Why we exist?"
                className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold text-white leading-[1] tracking-tight font-['Space_Grotesk']"
                delay={40}
                duration={0.7}
                ease="power4.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                tag="h2"
                textAlign="left"
              />
            </div>
            <p className="text-white/60 text-lg leading-[1.6] max-w-[400px] md:pb-2">
              We don't just build websites. We craft digital experiences designed to scale your business and completely outshine the competition.
            </p>
          </div>

          {/* 2x2 Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                num: "01",
                label: "The Gap",
                title: "Accessible Quality",
                desc: "Fidarix bridges the gap between high-end agency quality and accessible pricing for growing businesses.",
                color: "from-[#ffbd2e]/20 to-transparent",
                borderColor: "group-hover:border-[#ffbd2e]/50",
                numColor: "group-hover:text-[#ffbd2e]"
              },
              {
                num: "02",
                label: "The Approach",
                title: "Beyond Aesthetics",
                desc: "We combine strategy, design, and technical SEO to create platforms that actively solve your business problems.",
                color: "from-[#9b4dff]/20 to-transparent",
                borderColor: "group-hover:border-[#9b4dff]/50",
                numColor: "group-hover:text-[#9b4dff]"
              },
              {
                num: "03",
                label: "The Goal",
                title: "The Growth Engine",
                desc: "Our ultimate goal is simple: turn your website into a powerful, automated, revenue-generating growth engine.",
                color: "from-emerald-500/20 to-transparent",
                borderColor: "group-hover:border-emerald-500/50",
                numColor: "group-hover:text-emerald-500"
              },
              {
                num: "04",
                label: "The Result",
                title: "Unfair Advantage",
                desc: "We give your business the digital leverage it needs to dominate your local market and scale predictably.",
                color: "from-blue-500/20 to-transparent",
                borderColor: "group-hover:border-blue-500/50",
                numColor: "group-hover:text-blue-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative p-8 md:p-10 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${item.borderColor}`}
              >
                {/* Hover Gradient */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-white/40 uppercase tracking-widest text-xs font-bold px-3 py-1 rounded-full border border-white/10 bg-white/5">{item.label}</span>
                    <div className={`text-white/20 font-['Space_Grotesk'] text-4xl font-black tracking-tighter transition-colors duration-500 ${item.numColor}`}>
                      {item.num}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-['Space_Grotesk'] tracking-tight">{item.title}</h3>
                  <p className="text-white/60 text-base leading-relaxed max-w-[90%]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


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
      <SectionWise bg="bg-transparent" style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#000000', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', position: 'relative', overflow: 'hidden' }}>
        
        {/* Animated ColorBends Background */}
        <div className="absolute inset-0 z-0 opacity-[0.35]">
          <ColorBends
            colors={["#ffbd2e", "#7c3aed", "#9b4dff"]} // Fidarix brand colors
            rotation={90}
            speed={0.15}
            scale={1.2}
            frequency={1.5}
            warpStrength={1.2}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.2}
            bandWidth={6}
            transparent={true}
          />
        </div>

        <div className="text-white max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-xs font-extrabold text-[#9b4dff] uppercase tracking-[0.22em] flex items-center gap-2 mb-3">
             
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
              playOnScroll={false}
            />
            <p className="mt-4 text-[1.1rem] text-white/50 leading-[1.6] max-w-2xl mx-auto font-medium">
              The difference between having a website and having a professional online presence.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-16">
            
            {/* Left Card: Template Website */}
            <motion.div 
              className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-12 relative flex flex-col items-start shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <div className="h-[28px] mb-8" />
              <h3 className="font-['Space_Grotesk'] text-white/70 text-2xl md:text-[1.7rem] font-bold mb-8 flex items-center gap-4">
                <span className="text-[10px] border border-white/10 px-2.5 py-1 rounded bg-white/5 text-white/40 font-bold uppercase tracking-widest">Standard</span>
                Template Website
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-5 w-full">
                {[
                  "Quick to launch",
                  "Uses pre-made layouts",
                  "Limited brand differentiation",
                  "Built for convenience",
                  "Works for getting started"
                ].map((point, index) => (
                  <li key={index} className="font-['Manrope'] text-[1rem] leading-[1.6] text-white/40 flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-[9px] shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Card: Fidarix Website */}
            <motion.div 
              className="bg-[#05000a] border border-[#3e1b73] rounded-[32px] p-8 md:p-12 relative flex flex-col items-start shadow-[0_0_50px_rgba(124,58,237,0.15)] overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#1c0836]/40 to-transparent pointer-events-none" />
              <div className="relative z-10 w-full">
                <div className="border border-[#7c3aed]/40 bg-[#7c3aed]/10 text-[#d4b3ff] text-[10px] md:text-xs font-bold tracking-[0.15em] px-4 py-1.5 rounded-full flex items-center gap-2 w-fit uppercase mb-8 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                  <Sparkles className="w-3.5 h-3.5" /> Premium Standard
                </div>
                <h3 className="font-['Space_Grotesk'] text-white text-2xl md:text-[1.7rem] font-bold mb-8 flex items-center gap-4">
                  <span className="text-[10px] border border-[#7c3aed]/50 px-2.5 py-1 rounded bg-[#3e1b73] text-[#d4b3ff] font-bold uppercase tracking-widest">Custom</span>
                  Fidarix Website
                </h3>
                <ul className="list-none p-0 m-0 flex flex-col gap-5">
                  {[
                    "Designed specifically for your business",
                    "Reflects your brand identity",
                    "Tailored to your customers",
                    "Built to establish trust",
                    "Created to help your business stand out"
                  ].map((point, index) => (
                    <li key={index} className="font-['Manrope'] text-[1rem] leading-[1.6] text-white/90 flex items-start gap-4">
                      <span className="text-[1.1rem] font-bold leading-none shrink-0 mt-[3px] text-[#a855f7]">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

          <div className="text-center max-w-4xl mx-auto mt-16 mb-4 flex flex-col items-center gap-8">
            <div className="w-[48px] h-[2px] bg-[#3e1b73]"></div>
            <h3 className="font-['Space_Grotesk'] text-center relative text-[clamp(1.8rem,4vw,2.5rem)] font-medium leading-[1.4] text-white">
              "Most businesses don't need another website.<br className="hidden md:block" />
              They need a digital presence that reflects the quality of their work."
            </h3>
            <div className="w-[48px] h-[2px] bg-[#3e1b73]"></div>
            <p className="text-white/40 uppercase tracking-[0.3em] text-[11px] font-extrabold mt-6">
              Premium Online Presence for Growing Businesses
            </p>
          </div>

          {/* Subtle animated divider / visual transition leading into Testimonials */}
          <div className="w-full mt-8 relative flex justify-center items-center">
            <div className="w-full bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.25)] to-transparent h-[1px]"></div>
            <motion.div 
              className="absolute w-3 h-3 bg-[#9b4dff] shadow-[0_0_10px_#9b4dff,0_0_20px_#9b4dff] rounded-full blur-[2px]"
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
                image: '/images/HomePage/ravi.jpeg'
              }
            ].map((t, i) => (
              <div key={i} className={`w-full bg-gradient-to-br from-[#1c0836] to-[#0a001a] border rounded-[24px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.15)] animate-float ${i === 2 ? 'border-t-[4px] border-[#9b4dff] border-l-[#3e1b73] border-r-[#3e1b73] border-b-[#3e1b73] shadow-[0_-5px_30px_rgba(155,77,255,0.3)]' : 'border-[#3e1b73]'}`} style={{ animationDelay: `${i * 1.5}s` }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-bold text-lg">{t.name}</h4>
                    <p className="text-white/50 text-sm mt-0.5">{t.role}</p>
                  </div>
                  <img src={t.image} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
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
                <img src="/images/HomePage/ranjan.png" alt="Rajan Shrivastav" loading="lazy" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
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
                <img src="/images/HomePage/arvind.png" alt="Arvind Kumar" loading="lazy" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
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
                <img src="/images/HomePage/abhishek.png" alt="Abhishek Shrivastav" loading="lazy" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
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
                <img src="/images/HomePage/ravi.jpeg" alt="Ravi" loading="lazy" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
              </div>
              <p className="text-white/80 leading-relaxed text-[0.95rem]">
                "Their team has made managing our digital presence infinitely easier. It is a game changer for our business."
              </p>
            </div>

          </div>
        </div>
      </SectionWise>

      {/* 7. FINAL CTA SECTION */}
      <section className="relative min-h-[500px] flex items-center justify-center py-20 px-6 overflow-hidden">
        {showHeavyComponents && (
          <div className="absolute inset-0 z-0 opacity-40">
            <Galaxy 
              particleCount={300}
              color="#A6C8FF"
              speed={0.5}
            />
          </div>
        )}

        {/* Glowing accent bg (kept for subtle overlay blending) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] pointer-events-none filter blur-[60px] z-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2">
          
          
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
      </section>
    </div>
  );
}

export default HomePage;
