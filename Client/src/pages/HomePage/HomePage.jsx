import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { SectionWise, ImpactHero, ButtonLink } from '../../components/common/Layout';
import { projects, testimonials } from '../../data/site';
import HomeHero from '../../components/HomeComponent/HomeHero';
import CardSwap, { Card } from '../../components/common/CardSwap';
import './HomePage.css';

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
        lines={['Become impossible', 'to ignore.']}
        copy={
          <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-white/70 font-medium leading-[1.65] m-0 text-center">
              Great businesses deserve better first impressions.
            </p>
          </div>
        }
        actions={[
          <Link key="consultation" to="/contact" className="inline-flex items-center justify-center min-h-[60px] px-12 font-bold text-[1.15rem] transition-all hover:-translate-y-0.5 hover:bg-gray-200" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            Contact Us?
          </Link>,
          <Link key="pricing" to="/pricing" className="inline-flex items-center justify-center min-h-[60px] px-12 font-bold text-[1.15rem] transition-all hover:-translate-y-0.5 hover:bg-gray-200" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            View Pricing
          </Link>,
        ]}
      >
        <HomeHero />
      </ImpactHero>

      {/* 2. THE PROBLEM SECTION */}
      <SectionWise bg="bg-black" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#000000' }}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold text-red-500 uppercase tracking-[0.22em] flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
            the problem
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white leading-[1.1] uppercase tracking-tight font-['Space_Grotesk']">
            Is your website costing you customers?
          </h2>
          <p className="mt-6 text-[1.1rem] text-white/70 leading-[1.7] max-w-2xl mx-auto">
            Most business websites are treated like digital brochures instead of active sales channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Problem 1 */}
          <div className="border border-white/8 rounded-[32px] bg-red-500/[0.03] p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Slow & Clunky</h3>
            <p className="text-white/60 leading-relaxed text-[1.05rem]">Visitors leave before your site even finishes loading, resulting in lost leads and a high bounce rate.</p>
          </div>
          {/* Problem 2 */}
          <div className="border border-white/8 rounded-[32px] bg-red-500/[0.03] p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Poor Mobile Experience</h3>
            <p className="text-white/60 leading-relaxed text-[1.05rem]">Over 60% of traffic is mobile, yet your site is hard to read and navigate on phones.</p>
          </div>
          {/* Problem 3 */}
          <div className="border border-white/8 rounded-[32px] bg-red-500/[0.03] p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Zero Conversions</h3>
            <p className="text-white/60 leading-relaxed text-[1.05rem]">Traffic comes in, but there's no clear path for them to contact you, book a call, or buy.</p>
          </div>
        </div>
      </SectionWise>

      {/* 3. WHY FIDARIX EXISTS SECTION */}
      <SectionWise bg="bg-black" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#000000' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left max-w-6xl mx-auto">
          <div className="md:col-span-5">
            <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary-2 inline-block"></span>
              why fidarix exists
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white leading-[1.1] uppercase tracking-tight font-['Space_Grotesk']">
              A Studio Focused on Big Results
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 text-[1.15rem] text-white/70 leading-[1.7] font-normal">
            <p className="m-0 font-medium text-white text-[1.25rem]">
              Fidarix was built to bridge the gap between high-end agency quality and accessible pricing for growing businesses.
            </p>
            <p className="m-0">
              We combine strategy, design, development, and SEO to create websites that not only look stunning but actively solve the problems holding your business back.
            </p>
            <p className="m-0 text-primary-3 font-semibold text-[1.2rem]">
              Our goal is simple: turn your website from a digital brochure into a powerful growth engine.
            </p>
          </div>
        </div>
      </SectionWise>

      {/* 4. TRANSFORMATION SECTION */}
      <SectionWise bg="bg-black" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#000000' }}>
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold text-blue-400 uppercase tracking-[0.22em] flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>
            the transformation
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white leading-[1.1] uppercase tracking-tight font-['Space_Grotesk']">
            From Invisible to Irresistible
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          {/* Before */}
          <div className="flex-1 border border-white/5 rounded-[40px] bg-white/[0.02] p-12 flex flex-col relative overflow-hidden grayscale opacity-80">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
            <div className="text-red-400 font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span> Before
            </div>
            <ul className="flex flex-col gap-6 text-white/60 text-[1.1rem]">
               <li className="flex gap-4 items-start"><span className="text-red-400 font-bold">✗</span> Outdated design that hurts trust</li>
               <li className="flex gap-4 items-start"><span className="text-red-400 font-bold">✗</span> Confusing navigation for visitors</li>
               <li className="flex gap-4 items-start"><span className="text-red-400 font-bold">✗</span> Invisible on Google (Poor SEO)</li>
               <li className="flex gap-4 items-start"><span className="text-red-400 font-bold">✗</span> Doesn't convert visitors into leads</li>
            </ul>
          </div>
          
          {/* Arrow */}
          <div className="flex items-center justify-center -my-6 md:my-0 md:-mx-8 z-10">
             <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-xl text-white/50 rotate-90 md:rotate-0">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
             </div>
          </div>

          {/* After */}
          <div className="flex-1 border border-primary/30 rounded-[40px] bg-primary/[0.05] p-12 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(124,58,237,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-3"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="text-primary-3 font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-3 animate-pulse shadow-[0_0_10px_rgba(155,77,255,0.8)]"></span> After
            </div>
            <ul className="flex flex-col gap-6 text-white/95 font-medium text-[1.1rem]">
               <li className="flex gap-4 items-center">
                 <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm font-bold shrink-0">✓</span> 
                 Premium, trust-building aesthetic
               </li>
               <li className="flex gap-4 items-center">
                 <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm font-bold shrink-0">✓</span> 
                 Clear user journey & seamless UX
               </li>
               <li className="flex gap-4 items-center">
                 <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm font-bold shrink-0">✓</span> 
                 Optimized for local & global SEO
               </li>
               <li className="flex gap-4 items-center">
                 <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm font-bold shrink-0">✓</span> 
                 High-converting landing pages
               </li>
            </ul>
          </div>
        </div>
      </SectionWise>

      {/* 5. FEATURED PROJECTS SECTION */}
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

      {/* 6. CLIENT TESTIMONIALS SECTION */}
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

      {/* 7. FINAL CTA SECTION */}
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
