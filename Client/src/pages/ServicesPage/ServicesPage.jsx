import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, animate } from 'framer-motion';
import { ButtonLink, SectionWise } from '../../components/common/Layout';
import { ServicesScanner } from '../../components/ServicesComponent/ServicesScanner';
import CircularGallery from '../../components/CircularGallery/CircularGallery';
import RippleGrid from '../../components/common/RippleGrid';
import BlurText from '../../components/common/BlurText';
import FlowingMenu from '../../components/common/FlowingMenu';
import SplitText from '../../components/common/SplitText';
import GradientBlinds from '../../components/common/GradientBlinds';
import SEO from '../../components/common/SEO';
import { Zap, Target, Code, Layout as LayoutIcon, CheckCircle, Rocket, Lightbulb, Hand, Grab } from 'lucide-react';


// ----------------------------------------------------
// THE CHALLENGE SECTION
// ----------------------------------------------------
const TheChallengeSection = () => {
  return (
    <SectionWise bg="bg-black" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#000000' }}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-xs font-extrabold text-red-500 uppercase tracking-[0.22em] flex items-center justify-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse"></span>
          the challenge
        </span>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white leading-[1.1] uppercase tracking-tight font-['Space_Grotesk']">
          The Challenge.
        </h2>
        <p className="mt-6 text-[1.1rem] text-white/70 leading-[1.7] max-w-2xl mx-auto">
          website shouldn't just exist. It should drive revenue. We fix platforms that underperform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border border-white/8 rounded-[32px] bg-red-500/[0.03] p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-400">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Uninspired Design</h3>
          <p className="text-white/60 leading-relaxed text-[1.05rem]">Visitors bounce when they don't feel trust. Your design dictates your credibility.</p>
        </div>
        <div className="border border-white/8 rounded-[32px] bg-red-500/[0.03] p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-400">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Sluggish Performance</h3>
          <p className="text-white/60 leading-relaxed text-[1.05rem]">Slow sites kill conversions. If it doesn't load instantly, your customers leave.</p>
        </div>
        <div className="border border-white/8 rounded-[32px] bg-red-500/[0.03] p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-400">
            <Code className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">Invisible Presence</h3>
          <p className="text-white/60 leading-relaxed text-[1.05rem]">Great design means nothing if no one sees it. We build for search visibility from day one.</p>
        </div>
      </div>
    </SectionWise>
  );
};

// ----------------------------------------------------
// OUR SOLUTIONS COMPONENTS & SLIDES
// ----------------------------------------------------
const galleryItems = [
  { image: '/images/services/uiux-architecture.png', text: 'UI/UX Architecture' },
  { image: '/images/services/frontend-engineering.png', text: 'Front-End Engineering' },
  { image: '/images/services/digital-products.png', text: 'Digital Products' },
  { image: '/images/services/ecommerce-experiences.png', text: 'E-Commerce Experiences' },
  { image: '/images/services/search-visibility.png', text: 'Search Visibility' },
  { image: '/images/services/brand-identity.png', text: 'Brand Identity' },
];

function CircularGalleryShowcase({ showHeavy }) {
  return (
    <div className="w-full bg-black relative flex flex-col py-10 md:py-16">
      <div className="relative z-10 flex-shrink-0">
        <OurSolutionsHeader />
      </div>
      
      {/* Desktop 3D Gallery */}
      <div className="hidden md:block relative w-full h-[600px] md:h-[700px] z-0">
        {showHeavy && (
          <CircularGallery
            items={galleryItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.03}
            scrollSpeed={0.3}
            font="bold 30px Space Grotesk"
            fontUrl="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap"
          />
        )}
      </div>

      {/* Mobile Grid View */}
      <div className="w-[min(1180px,calc(100%-32px))] mx-auto md:hidden mt-8">
        <div className="grid grid-cols-2 gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className="flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl p-4 shadow-lg transition-transform hover:-translate-y-1">
              <div className="w-full aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden mb-4 bg-white/5">
                <img src={item.image} alt={item.text} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
              </div>
              <h3 className="text-white text-center font-['Space_Grotesk'] text-sm sm:text-base font-bold leading-tight">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const OurSolutionsHeader = () => {
  return (
    <SectionWise bg="bg-transparent" style={{ borderBottom: 'none', paddingTop: '80px', paddingBottom: 0, marginBottom: 0 }}>
      <div style={{ textAlign: 'left', marginBottom: 0 }}>

        <SplitText
          text="Core Capabilities."
          className="font-extrabold text-white text-[clamp(2.5rem,5vw,4rem)] font-['Space_Grotesk']"
          delay={40}
          duration={0.7}
          ease="power4.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          tag="h2"
          textAlign="left"
        />
        <p className="text-white/50 text-[1.1rem] mt-4 max-w-2xl">
          We engineer digital assets that demand attention. Fast, scalable, and built to convert.
        </p>
      </div>
    </SectionWise>
  );
};

// ----------------------------------------------------
// TRANSFORMATION COMPONENTS & SECTIONS
// ----------------------------------------------------
const ProjectCard = ({ item, isWireframe }) => {
  if (isWireframe) {
    return (
      <div className="w-[190px] h-[190px] shrink-0 rounded-3xl bg-white/[0.02] border border-white/5 p-4 flex flex-col items-center justify-center gap-4 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
        {/* Simple wireframe style card */}
        <div className="w-full h-full rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col justify-between p-4">
          <div className="flex justify-between items-center">
            <div className="w-12 h-3 bg-white/10 rounded-full" />
            <div className="w-4 h-4 rounded-full bg-white/10" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 bg-white/10 rounded" />
            <div className="h-2 w-1/2 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group/card w-[190px] h-[190px] shrink-0 rounded-3xl border border-white/10 hover:border-purple-500/50 overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
      {/* Background Image - Full bleed */}
      <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />

      {/* Subtle Purple Glow Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const CardRow = ({ items, direction, isWireframe }) => {
  const rowItems = [...items, ...items, ...items, ...items, ...items, ...items];
  return (
    <div className="flex gap-6 w-max" style={{ animation: `scroll-${direction} 40s linear infinite` }}>
      {rowItems.map((item, i) => (
        <ProjectCard key={i} item={item} isWireframe={isWireframe} />
      ))}
    </div>
  );
};

const ServicesMovingCards = () => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeDrag, setActiveDrag] = useState(false);

  const xPercent = useMotionValue(50);
  const smoothXPercent = useSpring(xPercent, { stiffness: 120, damping: 22 });

  const clipPathLeft = useTransform(smoothXPercent, (val) => `inset(0 ${100 - val}% 0 0)`);
  const clipPathRight = useTransform(smoothXPercent, (val) => `inset(0 0 0 ${val}%)`);
  const handleLeft = useTransform(smoothXPercent, (val) => `${val}%`);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { stiffness: 220, damping: 28 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 220, damping: 28 });

  const isDragging = useRef(false);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    setActiveDrag(true);
    e.currentTarget.setPointerCapture(e.pointerId);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      xPercent.set(percentage);
    }
  };

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorX.set(x);
    cursorY.set(y);

    if (isDragging.current) {
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      xPercent.set(percentage);
    }
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    setActiveDrag(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) { }
  };

  const items = [
    { title: 'Fidarix Digital', subtitle: 'Web3 & Creative Agency', image: '/images/services/uiux-architecture.png' },
    { title: 'Solana Tracker', subtitle: 'Fintech Dashboard App', image: '/images/services/search-visibility.png' },
    { title: 'Zenith Portfolio', subtitle: 'Minimal Agency Showcase', image: '/images/services/brand-identity.png' },
    { title: 'Nova SaaS', subtitle: 'Modern Software Interface', image: '/images/services/frontend-engineering.png' },
    { title: 'Vortex Art', subtitle: 'Interactive 3D Experience', image: '/images/services/digital-products.png' },
    { title: 'Apex Analytics', subtitle: 'Enterprise Data Platform', image: '/images/services/ecommerce-experiences.png' },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-[100%] max-w-[100%] h-[500px] left-1/2 -translate-x-1/2 overflow-hidden mt-16 mb-4 touch-none select-none cursor-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setActiveDrag(false);
      }}
    >
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      {/* Wireframe Layer (Left) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ clipPath: clipPathLeft, perspective: '1200px' }}
      >
        <div className="flex flex-col gap-6 min-w-[300vw] items-center" style={{ transform: 'rotateY(12deg) rotateZ(-4deg) scale(1.35)' }}>
          <CardRow items={items} direction="left" isWireframe={true} />
          <CardRow items={items} direction="right" isWireframe={true} />
        </div>
      </motion.div>

      {/* Real Layer (Right) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ clipPath: clipPathRight, perspective: '1200px' }}
      >
        <div className="flex flex-col gap-6 min-w-[300vw] items-center" style={{ transform: 'rotateY(-12deg) rotateZ(-4deg) scale(1.35)' }}>
          <CardRow items={items} direction="left" isWireframe={false} />
          <CardRow items={items} direction="right" isWireframe={false} />
        </div>
      </motion.div>

      {/* Center Beam and Drag Handle */}
      <motion.div
        className="absolute inset-y-0 z-30 pointer-events-none flex items-center justify-center"
        style={{ left: handleLeft, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-[-20%] bottom-[-20%] w-[3px] bg-gradient-to-b from-transparent via-purple-500 to-transparent shadow-[0_0_30px_rgba(168,85,247,1)]" />
        <div className="w-16 h-16 rounded-2xl bg-purple-600 border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.8)] z-10 text-white select-none relative">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
      </motion.div>

      {/* Custom Cursor Overlay */}
      {isHovering && (
        <motion.div
          className="absolute z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
          style={{
            left: smoothCursorX,
            top: smoothCursorY,
          }}
        >
          <div className={`w-12 h-12 rounded-full border border-purple-500/60 bg-purple-950/40 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] ${activeDrag ? 'scale-90 bg-purple-600/40 border-purple-400' : 'scale-100'}`}>
            {activeDrag ? (
              <Grab className="w-6 h-6 text-white animate-pulse" />
            ) : (
              <Hand className="w-6 h-6 text-white" />
            )}
          </div>
          <span className="text-[9px] uppercase font-black tracking-[0.2em] text-white mt-2 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
            {activeDrag ? 'Grabbing' : 'Drag anywhere'}
          </span>
        </motion.div>
      )}
    </div>
  );
};

// ----------------------------------------------------
// WHAT YOU RECEIVE SECTION
// ----------------------------------------------------
const WhatYouReceiveSection = () => {
  return (
    <section className="bg-black border-b border-white/10 pt-24 pb-24 w-full">
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center justify-center gap-2 mb-3">

        </span>
        <SplitText
          text="Deliverables."
          className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold text-white leading-[1.1] uppercase tracking-tight font-['Space_Grotesk']"
          delay={40}
          duration={0.7}
          ease="power4.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          tag="h2"
          textAlign="center"
        />
        <p className="mt-6 text-[1.1rem] text-white/70 leading-[1.7] max-w-2xl mx-auto">
          Aesthetics backed by robust engineering. We ship clean architecture designed for effortless scaling.
        </p>
      </div>

      <div className="w-full mt-12" style={{ height: '500px', position: 'relative' }}>
        <FlowingMenu
          items={[
            { link: '#', text: 'Design Systems', image: '/images/services/uiux-architecture.png' },
            { link: '#', text: 'Architecture', image: '/images/services/frontend-engineering.png' },
            { link: '#', text: 'Visibility', image: '/images/services/search-visibility.png' },
            { link: '#', text: 'Autonomy', image: '/images/services/digital-products.png' }
          ]}
        />
      </div>
    </section>
  );
};

// ----------------------------------------------------
// OUR METHODOLOGY SECTION
// ----------------------------------------------------
const HowWeWorkSection = () => {
  return (
    <SectionWise bg="bg-[#020106]" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: 0 }}>
      <div className="flex flex-col lg:flex-row w-full min-h-[80vh]">

        {/* Left Column (Sticky) */}
        <div className="lg:w-[40%] p-10 lg:px-12 lg:py-20 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center items-center text-center lg:sticky lg:top-0 lg:h-screen">
          <SplitText
            text="Methodology."
            className="text-[clamp(2rem,3.2vw,3.2rem)] break-words font-extrabold text-white leading-[1.05] tracking-tighter font-['Space_Grotesk'] mb-8"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h2"
            textAlign="center"
          />

          <p className="text-white/50 text-[1.1rem] leading-relaxed max-w-sm mt-6">
            Precision at every step. We operate with total transparency and zero friction.
          </p>
        </div>

        {/* Right Column (Scrollable Grid) */}
        <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-2">

          {/* Card 1 */}
          <div className="group relative p-5 md:p-12 border-b border-white/10 md:border-r transition-all duration-500 overflow-hidden hover:bg-white/[0.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="text-[2.5rem] md:text-[5rem] font-bold text-white/20 leading-none mb-3 md:mb-6 font-['Space_Grotesk'] transition-colors duration-500 group-hover:text-purple-400">01</div>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-6 font-['Space_Grotesk'] relative z-10">Strategy & Scope</h3>
            <p className="text-white/60 leading-relaxed mb-4 md:mb-8 relative z-10 text-sm md:text-base">
              We define the architecture and user journey to align directly with your growth metrics.
            </p>
            <ul className="space-y-2 md:space-y-3 text-white/50 text-xs md:text-sm relative z-10">
              <li className="flex gap-3"><span className="text-white/20">—</span> Market research</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Architecture planning</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Technical scoping</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group relative p-5 md:p-12 border-b border-white/10 transition-all duration-500 overflow-hidden hover:bg-white/[0.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="text-[2.5rem] md:text-[5rem] font-bold text-white/20 leading-none mb-3 md:mb-6 font-['Space_Grotesk'] transition-colors duration-500 group-hover:text-purple-400">02</div>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-6 font-['Space_Grotesk'] relative z-10">Premium Design</h3>
            <p className="text-white/60 leading-relaxed mb-4 md:mb-8 relative z-10 text-sm md:text-base">
              Iterative design sprints to craft a visual language that commands attention and feels uniquely yours.
            </p>
            <ul className="space-y-2 md:space-y-3 text-white/50 text-xs md:text-sm relative z-10">
              <li className="flex gap-3"><span className="text-white/20">—</span> UI/UX Design</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Visual identity</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Interactive prototypes</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="group relative p-5 md:p-12 border-b border-white/10 md:border-r transition-all duration-500 overflow-hidden hover:bg-white/[0.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="text-[2.5rem] md:text-[5rem] font-bold text-white/20 leading-none mb-3 md:mb-6 font-['Space_Grotesk'] transition-colors duration-500 group-hover:text-purple-400">03</div>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-6 font-['Space_Grotesk'] relative z-10">Performance Build</h3>
            <p className="text-white/60 leading-relaxed mb-4 md:mb-8 relative z-10 text-sm md:text-base">
              Flawless React code. Sub-second loads, hardware-accelerated animations, and zero layout shift.
            </p>
            <ul className="space-y-2 md:space-y-3 text-white/50 text-xs md:text-sm relative z-10">
              <li className="flex gap-3"><span className="text-white/20">—</span> Front-end engineering</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Custom animations</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> API integrations</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="group relative p-5 md:p-12 border-b md:border-b-0 border-white/10 transition-all duration-500 overflow-hidden hover:bg-white/[0.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="text-[2.5rem] md:text-[5rem] font-bold text-white/20 leading-none mb-3 md:mb-6 font-['Space_Grotesk'] transition-colors duration-500 group-hover:text-purple-400">04</div>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-6 font-['Space_Grotesk'] relative z-10">SEO & Launch</h3>
            <p className="text-white/60 leading-relaxed mb-4 md:mb-8 relative z-10 text-sm md:text-base">
              Rigorous QA and technical SEO configuration to ensure your launch is secure and visible.
            </p>
            <ul className="space-y-2 md:space-y-3 text-white/50 text-xs md:text-sm relative z-10">
              <li className="flex gap-3"><span className="text-white/20">—</span> Technical SEO setup</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Quality assurance</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Secure deployment</li>
            </ul>
          </div>

        </div>
      </div>
    </SectionWise>
  );
};


// ----------------------------------------------------
// CALL TO ACTION SECTION (FOR SERVICES PAGE)
// ----------------------------------------------------
const CTASection = () => {
  return (
    <SectionWise bg="bg-black" style={{ paddingTop: '100px', paddingBottom: '120px', backgroundColor: '#000000', position: 'relative', overflow: 'hidden' }}>
      {/* Dynamic Animated Gradient Blinds Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={20}
          noise={0.5}
          blindCount={16}
          blindMinWidth={60}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
          color1="#FF9FFC"
          color2="#5227FF"
          dpr={1}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="text-xs font-extrabold text-primary-2 uppercase tracking-[0.22em] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-2 inline-block animate-pulse"></span>

        </span>
        <SplitText
          text="Next Steps."
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
          Let’s map your next phase of growth. Book a 30-minute discovery call to align on strategy and scope.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <ButtonLink to="/contact" style={{ padding: '18px 38px', fontSize: '1.1rem' }}>
            Schedule Discovery
          </ButtonLink>
          <ButtonLink to="/contact" variant="ghost" style={{ padding: '18px 38px', fontSize: '1.1rem' }}>
            Start the Conversation
          </ButtonLink>
        </div>
      </div>
    </SectionWise>
  );
};

// ----------------------------------------------------
// SERVICES PAGE RENDER
// ----------------------------------------------------
function ServicesPage() {
  const heroRef = useRef(null);
  const [showHeavyComponents, setShowHeavyComponents] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development & Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Fidarix"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO" } }
      ]
    }
  };

  return (
    <div className="min-h-full bg-black text-white">
      <SEO
        title="Services & Digital Leverage"
        description="Explore Fidarix's comprehensive digital services including custom web development, UI/UX design, and technical SEO designed to scale your business."
        canonical="/services"
        schema={schemaData}
      />
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[75vh] md:min-h-screen flex flex-col justify-center items-center py-[100px] md:py-[120px] overflow-hidden bg-black" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.85, pointerEvents: 'none' }}>
          {showHeavyComponents && (
            <ServicesScanner
              sensitivity={0.65}
              linesColor="#5227FF"
              scanColor="#9b4dff"
              scanOpacity={0.9}
              gridScale={0.13}
              lineStyle="solid"
              lineThickness={2.2}
              lineJitter={0.06}
              scanDirection="pingpong"
              enablePost={false}
              bloomIntensity={2.8}
              bloomThreshold={0.1}
              bloomSmoothing={0.6}
              chromaticAberration={0.003}
              noiseIntensity={0.008}
              scanGlow={0.9}
              scanSoftness={2.5}
              scanPhaseTaper={0.85}
              scanDuration={2.4}
              scanDelay={1.8}
              scanOnClick={true}
              enableGyro={true}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
        <div className="hidden md:flex absolute top-[8%] bottom-[8%] w-[1px] border-l-2 border-dotted border-white/12 items-center justify-center pointer-events-none z-[2] left-[4vw]"><span className="w-2 h-2 border-t-2 border-r-2 border-white/50 -rotate-[135deg]" /></div>
        <div className="hidden md:flex absolute top-[8%] bottom-[8%] w-[1px] border-l-2 border-dotted border-white/12 items-center justify-center pointer-events-none z-[2] right-[4vw]"><span className="w-2 h-2 border-t-2 border-r-2 border-white/50 rotate-45" /></div>
        <div className="absolute bottom-10 right-[4vw] text-2xl text-white/40 pointer-events-none z-[2] animate-[bounceSlow_2s_infinite]">↓</div>
        <div className="relative z-[5] text-center w-[min(100%,1280px)] px-6 md:px-[8vw] flex flex-col items-center pointer-events-none [&>*]:pointer-events-auto">

          <h1 className="font-['Space_Grotesk'] text-[clamp(2.5rem,8vw,5rem)] sm:text-[clamp(3.5rem,9.5vw,7.5rem)] font-extrabold leading-[1] tracking-[-0.04em] uppercase flex flex-col md:flex-row md:gap-6 justify-center w-full mb-8 text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            <span className="block text-center">
              <SplitText
                text="Our"
                className="text-white inline-block"
                delay={60}
                duration={0.8}
                ease="power4.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                tag="span"
                textAlign="center"
                playOnScroll={false}
              />
            </span>
            <span className="block text-center">
              <SplitText
                text="Services."
                className="text-white inline-block"
                delay={60}
                duration={0.8}
                ease="power4.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                tag="span"
                textAlign="center"
                playOnScroll={false}
              />
            </span>
          </h1>
          <p className="font-mono text-[clamp(0.8rem,1.2vw,1rem)] font-bold tracking-[0.06em] mb-12 bg-transparent py-1.5 px-3 text-white/80 border-l-2 border-r-2 border-primary-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">[ Digital experiences engineered for performance and conversion. ]</p>
          <div className="flex items-center gap-0 mt-0">
            <div className="flex flex-col gap-1 pr-8">
              <span className="font-['Space_Grotesk'] text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold text-white leading-none tracking-[-0.04em]">7+</span>
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-white/45">Services Offered</span>
            </div>
            <div className="w-[1px] h-10 bg-white/12 mr-8" />

            <div className="flex flex-col gap-1 pr-8">
              <span className="font-['Space_Grotesk'] text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold text-white leading-none tracking-[-0.04em]">100%</span>
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-white/45">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE (removed per design request) */}

      {/* 3. OUR SOLUTIONS */}
      <CircularGalleryShowcase showHeavy={showHeavyComponents} />


      {/* 5. WHAT YOU RECEIVE */}
      <WhatYouReceiveSection />

      {/* 6. OUR METHODOLOGY */}
      <HowWeWorkSection />

      {/* 7. CTA FOR SERVICES PAGE */}
      <CTASection />
    </div>
  );
}

export default ServicesPage;
