import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, AnimatePresence, animate } from 'framer-motion'
import './HeroSection.css'

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
]

/* ── Landscape card dimensions on spindle ring ── */
const CARD_W = 400          // ← wider width
const CARD_H = 260          // ← shorter height (landscape aspect ratio)
const RADIUS = 440          // translateZ distance from center
const ROTATION_SPEED = 0.08 // default auto-spin degrees per frame at 60fps
const EXPO_OUT = [0.16, 1, 0.3, 1]

/* ═══════════════════════════════════════
   TOPOGRAPHIC BACKGROUND
   ═══════════════════════════════════════ */
function TopoBackground() {
  return (
    <div className="hero-topo-bg" aria-hidden="true">
      <svg className="hero-topo-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="topo-warp">
            <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <g filter="url(#topo-warp)" fill="none" stroke="var(--active-neon)" strokeWidth="1.5" className="topo-group">
          <circle cx="720" cy="450" r="160" />
          <circle cx="720" cy="450" r="280" />
          <circle cx="720" cy="450" r="400" />
          <circle cx="720" cy="450" r="520" />
          <circle cx="720" cy="450" r="640" />
          <circle cx="720" cy="450" r="760" />
          <circle cx="720" cy="450" r="880" />
          <circle cx="720" cy="450" r="1000" />
        </g>
      </svg>
      <div className="hero-neon-glow" />
    </div>
  )
}

/* ═══════════════════════════════════════
   SPINDLE CARD — single card on the cylinder
   ═══════════════════════════════════════ */
function SpindleCard({ profile, index, total, isActive, onClick, onImageClick }) {
  const angle = (360 / total) * index

  return (
    <div
      className={`hero-spindle-card ${isActive ? 'active' : ''}`}
      style={{
        width: CARD_W,
        height: CARD_H,
        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
      }}
      onClick={onClick}
    >
      <div className="hero-card-inner">
        {/* Artwork Image */}
        <div className="hero-card-image-wrap">
          <img
            src={profile.image}
            alt={profile.name}
            draggable={false}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
          <div className="hero-card-image-overlay" />
        </div>

        {/* Top reflections / card structure */}
        <div className="hero-card-reflection" />
        <div className="hero-card-border-glow" />

        {/* Text Overlay - Only visible when this card is at the front */}
        <div className="hero-card-content">
          <div className="hero-card-tags">
            <span className="hero-tag-hot">
              <span className="flame-icon">🔥</span> HOT
            </span>
            <span className="hero-tag-pill">{profile.category}</span>
          </div>

          <h2 className="hero-card-title">{profile.name}</h2>
          <p className="hero-card-desc">{profile.description}</p>

          <button
            className="hero-card-launch-btn"
            onClick={(e) => {
              e.stopPropagation()
              onImageClick(profile.image, profile.name)
            }}
          >
            LAUNCH
          </button>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════
   HERO SECTION — Main export
   ═══════════════════════════════════════ */
export default function HeroSection() {
  const containerRef = useRef(null)
  const rotationY = useMotionValue(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [tiltX, setTiltX] = useState(0)
  const [tiltY, setTiltY] = useState(0)
  const [preview, setPreview] = useState(null) // { src, name }
  const [isMobile, setIsMobile] = useState(false)

  const isSpinning = useRef(false)
  const activeIndexRef = useRef(0)
  const rafRef = useRef(null)
  const lastTime = useRef(performance.now())
  const resumeTimeoutRef = useRef(null)
  const activeProfile = profiles[activeIndex]

  /* ── Responsive detection ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* ── Auto-rotation Loop via RAF ── */
  useEffect(() => {
    if (isMobile) return

    const loop = (now) => {
      const dt = now - lastTime.current
      lastTime.current = now

      // Rotate slowly (0.02) on hover, normally at ROTATION_SPEED (0.08)
      // Only pause rotation during an active click-spin animation
      if (!isSpinning.current) {
        const speed = paused ? 0.02 : ROTATION_SPEED
        const step = speed * (dt / 16)
        const nextRot = rotationY.get() + step
        rotationY.set(nextRot)

        // Calculate which card is currently facing the front
        const anglePerCard = 360 / profiles.length
        // Subtract target rotation since ring rotates opposite to index sequence
        const rawIndex = -nextRot / anglePerCard
        const activeIdx = ((Math.round(rawIndex) % profiles.length) + profiles.length) % profiles.length

        if (activeIdx !== activeIndexRef.current) {
          activeIndexRef.current = activeIdx
          setActiveIndex(activeIdx)
        }
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused, rotationY, isMobile])

  /* Close preview on escape */
  useEffect(() => {
    if (!preview) return
    const onKey = (e) => e.key === 'Escape' && setPreview(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [preview])

  /* ── Mouse tilt interaction ── */
  const handleMouseMove = useCallback((e) => {
    if (isMobile) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setTiltX(my * -3) // Reduced from -8 to -3 for subtle vertical tilt
    setTiltY(mx * 4)  // Reduced from 10 to 4 for subtle horizontal tilt
  }, [isMobile])

  const handleMouseLeave = useCallback(() => {
    setTiltX(0)
    setTiltY(0)
    setPaused(false)
  }, [])

  /* ── Shortest-path spin animation to target card ── */
  const spinToCard = useCallback((index) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    isSpinning.current = true
    setPaused(true)

    const anglePerCard = 360 / profiles.length
    const targetAngle = -anglePerCard * index

    const currentAngle = rotationY.get()
    const diff = ((targetAngle - currentAngle + 180) % 360 + 360) % 360 - 180
    const finalTarget = currentAngle + diff

    animate(rotationY, finalTarget, {
      type: 'spring',
      stiffness: 90,
      damping: 18,
      onComplete: () => {
        setActiveIndex(index)
        activeIndexRef.current = index
        isSpinning.current = false
        // Resume auto-rotation after 1.5s idle
        resumeTimeoutRef.current = setTimeout(() => {
          lastTime.current = performance.now()
          setPaused(false)
        }, 1500)
      }
    })
  }, [rotationY])

  /* ── Mobile scroll listener to update neon bg ── */
  const handleMobileScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft
    const cardWidth = e.currentTarget.clientWidth * 0.7
    const newIndex = Math.round(scrollLeft / cardWidth)
    if (newIndex >= 0 && newIndex < profiles.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex)
    }
  }

  return (
    <section
      className="hero-section"
      style={{
        '--active-neon': activeProfile.neon,
        '--active-neon-rgb': activeProfile.neonRgb,
      }}
    >
      <div className="hero-grain" />

      {/* SVG noise filter */}
      <svg className="hero-svg-filters" aria-hidden="true">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Dynamic Topographic Grid Background */}
      <TopoBackground />

      {/* ═══ MOBILE VIEW ═══ */}
      {isMobile ? (
        <div className="hero-mobile-container">
          <div className="hero-headline-wrap">
            <p className="hero-eyebrow">DESIGN · DEVELOPMENT · STRATEGY</p>
            <h1 className="hero-headline">We Build Digital Legacies</h1>
          </div>

          <div
            className="hero-mobile-scroll"
            onScroll={handleMobileScroll}
          >
            {profiles.map((p, i) => (
              <div key={i} className="hero-mobile-card-wrap">
                <div
                  className="hero-mobile-card"
                  onClick={() => setPreview({ src: p.image, name: p.name })}
                >
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <div className="hero-card-image-overlay" />
                  <div className="hero-mobile-card-content">
                    <div className="hero-card-tags">
                      <span className="hero-tag-hot">🔥 HOT</span>
                      <span className="hero-tag-pill">{p.category}</span>
                    </div>
                    <h2 className="hero-card-title">{p.name}</h2>
                    <p className="hero-card-desc">{p.description}</p>
                    <button className="hero-card-launch-btn">LAUNCH</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-mobile-indicators">
            {profiles.map((_, i) => (
              <span
                key={i}
                className={`hero-dot-indicator ${i === activeIndex ? 'active' : ''}`}
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
          className="hero-desktop-container"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {/* 3D Spindle Cylinder Viewport */}
          <div className="hero-spindle-viewport" ref={containerRef}>
            <motion.div
              className="hero-spindle-ring"
              style={{
                rotateY: rotationY,
                rotateX: tiltX,
                rotateZ: -12, // ← diagonal tilt axis rotation for tilted movement!
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
          <div className="hero-controls-bar">
            <div className="hero-thumbs-row">
              {profiles.map((p, i) => (
                <button
                  key={i}
                  className={`hero-thumb-btn ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => spinToCard(i)}
                  style={{
                    '--thumb-neon': p.neon,
                  }}
                >
                  <img src={p.image} alt={p.name} />
                  <div className="hero-thumb-glow" />
                </button>
              ))}
            </div>
            <Link to="/services" className="hero-see-all">
              SEE ALL SERVICES <span className="arrow-right">▶</span>
            </Link>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {preview && (
          <div className="hero-lightbox-portal">
            <motion.div
              className="hero-lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreview(null)}
            />
            <motion.div
              className="hero-lightbox-container"
              initial={{ opacity: 0, scale: 0.3, y: 70 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.35, y: 50 }}
              transition={{ type: 'spring', stiffness: 350, damping: 24, mass: 0.85 }}
            >
              <button className="hero-lightbox-close" onClick={() => setPreview(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <img src={preview.src} alt={preview.name} className="hero-lightbox-img" />
              <div className="hero-lightbox-title">{preview.name}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
