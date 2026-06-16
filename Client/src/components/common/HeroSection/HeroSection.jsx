import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, AnimatePresence, animate } from 'framer-motion';
import Hyperspeed from '../Hyperspeed';
const profiles = [
  {
    name: 'CLUTCH MARKET',
    category: 'GAMES, FINANCE',
    description: 'DECENTRALIZED PARLAY PLATFORM ON APECHAIN.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=85&fit=crop',
    neon: '#00ff66',
    neonRgb: '0, 255, 102',
  },
  {
    name: 'SLAB CASH',
    category: 'COLLECTIBLES',
    description: 'SLAB CASH IS A RWA PLATFORM BUILT FOR THE EVM, WITH SUPPORT FOR APECHAIN.',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&q=85&fit=crop',
    neon: '#ff3300',
    neonRgb: '255, 51, 0',
  },
  {
    name: 'OTHERSIDE',
    category: 'GAMES',
    description: 'WEB3-ENABLED VIRTUAL WORLDS ON APECHAIN.',
    image: 'https://images.unsplash.com/photo-1659004212469-56a5a06b5f9b?w=1200&q=85&fit=crop',
    neon: '#00e5ff',
    neonRgb: '0, 229, 255',
  },
  {
    name: 'KINETIC LIQUID',
    category: 'FINANCE',
    description: 'HIGH-SPEED LIQUIDITY ARCHITECTURE FOR THE WEB3 NATIVE.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=85&fit=crop',
    neon: '#b55fe6',
    neonRgb: '181, 95, 230',
  },
  {
    name: 'CHRONOS DATA',
    category: 'INFRASTRUCTURE',
    description: 'SECURE TIME-ANCHORED DECENTRALIZED DATA ORACLES.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=85&fit=crop',
    neon: '#ffaa00',
    neonRgb: '255, 170, 0',
  },
  {
    name: 'AETHER SHIELD',
    category: 'COLLECTIBLES',
    description: 'MULTIVERSE DIGITAL IDENTITY SYSTEM ON APECHAIN.',
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1200&q=85&fit=crop',
    neon: '#ff007f',
    neonRgb: '255, 0, 127',
  },
];

/* ── Landscape card dimensions on spindle ring ── */
const CARD_W = 400;          // ← wider width
const CARD_H = 260;          // ← shorter height (landscape aspect ratio)
const RADIUS = 440;          // translateZ distance from center
const ROTATION_SPEED = 0.08; // default auto-spin degrees per frame at 60fps

/* ═══════════════════════════════════════
   HYPERSPEED BACKGROUND WRAPPER
   ═══════════════════════════════════════ */
function HyperspeedBackground() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden bg-black [&>div]:!w-full [&>div]:!h-full [&_canvas]:!w-full [&_canvas]:!h-full [&_canvas]:!block" aria-hidden="true">
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: 'turbulentDistortion',
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.72)_100%),linear-gradient(to_top,rgba(6,6,12,0.9)_0%,rgba(6,6,12,0.3)_50%,rgba(6,6,12,0.6)_100%)] pointer-events-none z-[2]" />
      <div className="absolute w-[90vw] h-[90vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(var(--active-neon-rgb),0.12)_0%,rgba(var(--active-neon-rgb),0.04)_45%,transparent_75%)] blur-[60px] pointer-events-none z-[3] transition-colors duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[background]" />
    </div>
  );
}

/* ═══════════════════════════════════════
   SPINDLE CARD — single card on the cylinder
   ═══════════════════════════════════════ */
function SpindleCard({ profile, index, total, isActive, onClick, onImageClick }) {
  const angle = (360 / total) * index;

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full rounded-[20px] transition-all duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,filter] shadow-[0_20px_50px_rgba(0,0,0,0.85)] ${isActive ? 'opacity-100 filter-none z-10 scale-100 group' : 'opacity-[0.65] brightness-[0.7] contrast-[1.05] grayscale-0 z-0'}`}
      style={{
        transformStyle: 'preserve-3d',
        width: CARD_W,
        height: CARD_H,
        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
      }}
      onClick={onClick}
    >
      <div className="relative w-full h-full rounded-[20px] border border-white/5 overflow-hidden bg-black flex flex-col justify-end">
        {/* Artwork Image */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <img
            src={profile.image}
            alt={profile.name}
            className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'group-hover:scale-[1.06]' : ''}`}
            draggable={false}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.3)_70%,transparent_90%)] z-[2] pointer-events-none" />
        </div>

        {/* Top reflections / card structure */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_40%)] z-[3] pointer-events-none" />
        <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_0_25px_rgba(255,255,255,0.02)] z-[4] pointer-events-none" />

        {/* Text Overlay - Only visible when this card is at the front */}
        <div className={`relative z-10 p-[24px_28px] w-full text-left transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'}`}>
          <div className="flex gap-[10px] items-center mb-2">
            <span className="bg-[rgba(255,60,60,0.14)] border border-[rgba(255,60,60,0.35)] text-[#ff3b30] text-[9px] font-extrabold tracking-[1px] px-[7px] py-[2.5px] rounded-[5px] flex items-center gap-1">
              <span className="flame-icon">🔥</span> HOT
            </span>
            <span className="bg-white/10 border border-white/15 text-white/85 text-[8.5px] font-bold tracking-[1.5px] px-[7px] py-[2.5px] rounded-[5px] uppercase">{profile.category}</span>
          </div>

          <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,4.5vw,3.4rem)] font-normal leading-[0.85] text-white m-0 mb-2 tracking-[-0.01em] drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]">{profile.name}</h2>
          <p className="font-['Fira_Code'] text-[10px] text-white/55 leading-[1.4] m-0 mb-4 tracking-[0.5px] uppercase max-w-full">{profile.description}</p>

          <button
            className="bg-white text-black font-['Space_Grotesk'] text-[10px] font-bold tracking-[2px] px-[28px] py-[10px] rounded-full border-none cursor-pointer shadow-[0_4px_12px_rgba(255,255,255,0.12)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:bg-white hover:shadow-[0_0_20px_var(--active-neon)] hover:scale-[1.04]"
            onClick={(e) => {
              e.stopPropagation();
              onImageClick(profile.image, profile.name);
            }}
          >
            LAUNCH
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   HERO SECTION — Main export
   ═══════════════════════════════════════ */
export default function HeroSection() {
  const containerRef = useRef(null);
  const rotationY = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [preview, setPreview] = useState(null); // { src, name }
  const [isMobile, setIsMobile] = useState(false);

  const isSpinning = useRef(false);
  const activeIndexRef = useRef(0);
  const rafRef = useRef(null);
  const lastTime = useRef(performance.now());
  const resumeTimeoutRef = useRef(null);
  const activeProfile = profiles[activeIndex];

  /* ── Responsive detection ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Auto-rotation Loop via RAF ── */
  useEffect(() => {
    if (isMobile) return;

    const loop = (now) => {
      const dt = now - lastTime.current;
      lastTime.current = now;

      // Rotate slowly (0.02) on hover, normally at ROTATION_SPEED (0.08)
      // Only pause rotation during an active click-spin animation
      if (!isSpinning.current) {
        const speed = paused ? 0.02 : ROTATION_SPEED;
        const step = speed * (dt / 16);
        const nextRot = rotationY.get() + step;
        rotationY.set(nextRot);

        // Calculate which card is currently facing the front
        const anglePerCard = 360 / profiles.length;
        // Subtract target rotation since ring rotates opposite to index sequence
        const rawIndex = -nextRot / anglePerCard;
        const activeIdx = ((Math.round(rawIndex) % profiles.length) + profiles.length) % profiles.length;

        if (activeIdx !== activeIndexRef.current) {
          activeIndexRef.current = activeIdx;
          setActiveIndex(activeIdx);
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, rotationY, isMobile]);

  /* Close preview on escape */
  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => e.key === 'Escape' && setPreview(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  /* ── Mouse tilt interaction ── */
  const handleMouseMove = useCallback((e) => {
    if (isMobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTiltX(my * -3); // Subtle vertical tilt
    setTiltY(mx * 4);  // Subtle horizontal tilt
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    setTiltX(0);
    setTiltY(0);
    setPaused(false);
  }, []);

  /* ── Shortest-path spin animation to target card ── */
  const spinToCard = useCallback((index) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    isSpinning.current = true;
    setPaused(true);

    const anglePerCard = 360 / profiles.length;
    const targetAngle = -anglePerCard * index;

    const currentAngle = rotationY.get();
    const diff = ((targetAngle - currentAngle + 180) % 360 + 360) % 360 - 180;
    const finalTarget = currentAngle + diff;

    animate(rotationY, finalTarget, {
      type: 'spring',
      stiffness: 90,
      damping: 18,
      onComplete: () => {
        setActiveIndex(index);
        activeIndexRef.current = index;
        isSpinning.current = false;
        // Resume auto-rotation after 1.5s idle
        resumeTimeoutRef.current = setTimeout(() => {
          lastTime.current = performance.now();
          setPaused(false);
        }, 1500);
      }
    });
  }, [rotationY]);

  /* ── Mobile scroll listener to update neon bg ── */
  const handleMobileScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.clientWidth * 0.7;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < profiles.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section
      className="relative w-full h-screen bg-[#06060c] overflow-hidden flex flex-col justify-center items-center font-['Manrope'] text-white z-[1]"
      style={{
        '--active-neon': activeProfile.neon,
        '--active-neon-rgb': activeProfile.neonRgb,
      }}
    >
      <div className="absolute inset-[-50%] w-[200%] h-[200%] z-[99] pointer-events-none opacity-[0.035] mix-blend-overlay animate-grain-shift" style={{ filter: 'url(#grain-filter)' }} />

      {/* SVG noise filter */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Hyperspeed Highway Background */}
      <HyperspeedBackground />

      {/* ═══ MOBILE VIEW ═══ */}
      {isMobile ? (
        <div className="w-full h-full flex flex-col justify-start pt-[100px] box-border">
          <div className="text-center mb-6 px-5">
            <p className="text-[10px] tracking-[3px] text-white/40 uppercase mb-2">DESIGN · DEVELOPMENT · STRATEGY</p>
            <h1 className="text-[28px] font-extrabold m-0 leading-[1.1] tracking-[-0.5px]">We Build Digital Legacies</h1>
          </div>

          <div
            className="flex gap-5 px-10 pb-[30px] overflow-x-auto snap-x snap-mandatory webkit-overflow-scrolling-touch scrollbar-none w-full box-border [&::-webkit-scrollbar]:hidden"
            onScroll={handleMobileScroll}
          >
            {profiles.map((p, i) => (
              <div key={i} className="shrink-0 w-[80vw] snap-center">
                <div
                  className="relative w-full h-[220px] rounded-[16px] overflow-hidden border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col justify-end"
                  onClick={() => setPreview({ src: p.image, name: p.name })}
                >
                  <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover z-[1]" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.3)_70%,transparent_90%)] z-[2] pointer-events-none" />
                  <div className="relative z-10 p-[16px_20px] text-left">
                    <div className="flex gap-[10px] items-center mb-[6px]">
                      <span className="bg-[rgba(255,60,60,0.14)] border border-[rgba(255,60,60,0.35)] text-[#ff3b30] text-[9px] font-extrabold tracking-[1px] px-[7px] py-[2.5px] rounded-[5px] flex items-center gap-1">🔥 HOT</span>
                      <span className="bg-white/10 border border-white/15 text-white/85 text-[8.5px] font-bold tracking-[1.5px] px-[7px] py-[2.5px] rounded-[5px] uppercase">{p.category}</span>
                    </div>
                    <h2 className="font-['Bebas_Neue'] text-[1.8rem] m-0 mb-[6px]">{p.name}</h2>
                    <p className="font-['Fira_Code'] text-[9px] text-white/55 leading-[1.3] m-0 mb-[12px] tracking-[0.5px] uppercase max-w-full">{p.description}</p>
                    <button className="bg-white text-black font-['Space_Grotesk'] text-[9.5px] font-bold tracking-[2px] px-[24px] py-[8px] rounded-full border-none cursor-pointer shadow-[0_4px_12px_rgba(255,255,255,0.12)]">LAUNCH</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-[10px]">
            {profiles.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ease-out`}
                style={{
                  backgroundColor: i === activeIndex ? activeProfile.neon : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        /* ═══ DESKTOP VIEW — 3D SPINDLE ═══ */
        <div
          className="w-full h-full flex flex-col justify-center items-center z-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {/* 3D Spindle Cylinder Viewport */}
          <div className="relative w-full h-[80vh] flex items-center justify-center mt-[90px] max-lg:mt-[70px]" style={{ perspective: '1400px', perspectiveOrigin: '50% 50%' }} ref={containerRef}>
            <motion.div
              className="relative w-[400px] h-[260px] max-lg:w-[320px] max-lg:h-[208px]"
              style={{
                rotateY: rotationY,
                rotateX: tiltX,
                rotateZ: -12,
              }}
            >
              {profiles.map((profile, i) => (
                <SpindleCard
                  key={i}
                  profile={profile}
                  index={i}
                  total={profiles.length}
                  isActive={i === activeIndex}
                  onClick={() => spinToCard(i)}
                  onImageClick={() => setPreview({ src: profile.image, name: profile.name })}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom Right Controls */}
          <div className="absolute bottom-[40px] left-[60px] right-[60px] flex justify-end items-center gap-[32px] z-30">
            <div className="flex gap-[12px]">
              {profiles.map((p, i) => (
                <button
                  key={i}
                  className={`relative w-[60px] h-[40px] rounded-lg overflow-hidden border border-white/15 bg-transparent cursor-pointer p-0 transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,border-color,box-shadow] group ${i === activeIndex ? 'border-white shadow-[0_0_16px_var(--thumb-neon)] -translate-y-[2px]' : ''}`}
                  onClick={() => spinToCard(i)}
                  style={{
                    '--thumb-neon': p.neon,
                  }}
                >
                  <img src={p.image} alt={p.name} className={`w-full h-full object-cover transition-opacity duration-300 ${i === activeIndex ? 'opacity-100' : 'opacity-60 group-hover:opacity-85'}`} />
                </button>
              ))}
            </div>
            <Link to="/services" className="font-['Space_Grotesk'] text-[11px] font-bold tracking-[2px] text-white/50 no-underline flex items-center gap-[6px] transition-colors duration-300 hover:text-white group">
              SEE ALL SERVICES <span className="text-[8px] text-[var(--active-neon)] transition-colors duration-[800ms] ease-out">▶</span>
            </Link>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {preview && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-[40px]">
            <motion.div
              className="absolute inset-0 bg-[rgba(4,4,8,0.92)] backdrop-blur-[20px] cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreview(null)}
            />
            <motion.div
              className="relative z-10 w-full max-w-[960px] max-h-[80vh] aspect-[16/10] bg-black rounded-[20px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.95),0_0_80px_rgba(255,255,255,0.05)] border border-white/10 flex flex-col"
              initial={{ opacity: 0, scale: 0.3, y: 70 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.35, y: 50 }}
              transition={{ type: 'spring', stiffness: 350, damping: 24, mass: 0.85 }}
            >
              <button className="absolute top-[20px] right-[20px] z-20 w-[44px] h-[44px] rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-[8px] hover:bg-white hover:text-black hover:rotate-90 hover:scale-[1.05] hover:border-white" onClick={() => setPreview(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <img src={preview.src} alt={preview.name} className="w-full h-full object-cover block" />
              <div className="absolute bottom-0 left-0 right-0 p-[24px_30px] bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.3)_70%,transparent_100%)] text-white font-['Space_Grotesk'] text-[20px] font-extrabold tracking-[1px] uppercase pointer-events-none">{preview.name}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
