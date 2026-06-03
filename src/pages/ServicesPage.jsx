import { useRef, useEffect, useCallback, useState } from 'react';
import { ButtonLink, SectionWise } from '../components/Chrome';
import { services, pricingPlans } from '../data/site';
import { Check } from 'lucide-react';
import { GridScan } from '../components/GridScan';
import DomeGallery from '../components/DomeGallery';
import Footer from '../components/Footer';
import '../components/ServicesPageAnimations.css';

const infiniteItems = [
  { image: 'https://picsum.photos/300/300?grayscale', link: 'https://google.com/', title: '', description: '' },
  { image: 'https://picsum.photos/400/400?grayscale', link: 'https://google.com/', title: '', description: '' },
  { image: 'https://picsum.photos/500/500?grayscale', link: 'https://google.com/', title: '', description: '' },
  { image: 'https://picsum.photos/600/600?grayscale', link: 'https://google.com/', title: '', description: '' }
];

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Also reveal staggered children
            const children = entry.target.querySelectorAll('.reveal-child');
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add('revealed'), i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const servicesDiagonalSlides = [
  {
    num: "01",
    label: "Our team",
    title: "Our team",
    text: "What started in China as a creative partnership which became the foundation of everything we've built. The curiosity never stops there.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "02",
    label: "Our footprint",
    title: "Our footprint",
    text: "Saigon is where we found our footing. Fast, ambitious, never satisfied — shaped how we work and what we expect from ourselves.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "03",
    label: "Our focus",
    title: "Our focus",
    text: "But good work doesn't stay in one place — and neither did we. We go wherever the next brief takes us.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "04",
    label: "Our offices",
    title: "Our offices",
    text: "The offices gave us roots in new places. The people gave us reasons to keep going.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "05",
    label: "Our approach",
    title: "Our approach",
    text: "A new perspective on modular layouts, fluid systems, and absolute clarity across editorial designs.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "06",
    label: "Our growth",
    title: "Our growth",
    text: "Expanding capabilities into high-conversion web apps, SEO structures, and dynamic coding platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "07",
    label: "Our vision",
    title: "Our vision",
    text: "Building lasting digital legacies for progressive brands that dare to look forward.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  }
];

function ServicesDiagonalScrollingShowcase() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollProgressTargetRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = servicesDiagonalSlides.length;
  const maxIndex = Math.max(1, slideCount - 1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const trackHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      const totalScrollable = trackHeight - viewportHeight;
      if (totalScrollable <= 0) return;
      
      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollable;
      const progress = Math.max(0, Math.min(1, rawProgress));
      scrollProgressTargetRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    let frameId;

    const animate = () => {
      setScrollProgress((current) => {
        const target = scrollProgressTargetRef.current;
        const delta = target - current;

        if (Math.abs(delta) < 0.001) {
          return target;
        }

        return current + delta * 0.08;
      });

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const idx = Math.max(0, Math.min(maxIndex, Math.round(scrollProgress * maxIndex)));
    setActiveIndex(idx);
  }, [scrollProgress, maxIndex]);

  // Helper interpolate function
  const interpolate = (val, inMin, inMax, outMin, outMax, ease = true) => {
    if (val <= inMin) return outMin;
    if (val >= inMax) return outMax;
    let t = (val - inMin) / (inMax - inMin);
    if (ease) {
      t = t * t * (3 - 2 * t);
    }
    return outMin + t * (outMax - outMin);
  };

  // Card parameters: spacing cards diagonally along a shared continuous line
  const getCardStyle = (index) => {
    const p = scrollProgress;
    const spacingX = 65;
    const spacingY = 65;
    
    // Each card is centered at its respective progress phase target
    const targetP = index / maxIndex;
    const deltaP = targetP - p;
    
    // Smooth continuous offset calculations
    const tx = deltaP * 7.69 * spacingX;
    const ty = deltaP * 7.69 * spacingY;
    
    const dist = Math.abs(deltaP * 7.69);
    const scale = interpolate(dist, 0, 1, 1, 0.85);
    const opacity = interpolate(dist, 0, 1.2, 1, 0);

    return {
      transform: `translate(${tx}vw, ${ty}vh) scale(${scale})`,
      opacity: opacity,
      zIndex: dist < 0.5 ? 15 : 10,
    };
  };

  const getTextStyle = (index) => {
    const p = scrollProgress;
    const targetP = index / maxIndex;
    const deltaP = targetP - p;
    const dist = Math.abs(deltaP * 7.69);
    
    const opacity = interpolate(dist, 0, 0.6, 1, 0);
    const ty = deltaP * 7.69 * 30;

    return {
      opacity,
      transform: `translateY(${ty}px)`,
      pointerEvents: opacity > 0.5 ? 'auto' : 'none',
    };
  };

  const getNumStyle = (index) => {
    const p = scrollProgress;
    const targetP = index / maxIndex;
    const deltaP = targetP - p;
    const dist = Math.abs(deltaP * 7.69);
    
    const opacity = interpolate(dist, 0, 0.6, 1, 0);
    const ty = deltaP * 7.69 * 50;

    return {
      opacity,
      transform: `translateY(${ty}px)`,
    };
  };

  return (
    <div ref={containerRef} className="diagonal-scroll-track">
      <div className="diagonal-scroll-sticky">
        {/* Massive Numbers */}
        <div className="diagonal-slide-num-container">
          {servicesDiagonalSlides.map((slide, idx) => (
            <div
              key={slide.num}
              className="diagonal-slide-num"
              style={{
                position: idx === 0 ? 'relative' : 'absolute',
                top: idx === 0 ? 'auto' : 0,
                left: idx === 0 ? 'auto' : 0,
                ...getNumStyle(idx),
              }}
            >
              {slide.num}
            </div>
          ))}
        </div>

        {/* Diagonal Showcase Layout */}
        <div className="diagonal-slide-layout">
          {/* Left Column: Sidebar Nav with dynamic dynamic numbering expanding */}
          <div className="diagonal-slide-nav">
            {servicesDiagonalSlides.map((slide, idx) => (
              <div
                key={slide.num}
                className={`diagonal-slide-nav-item ${activeIndex === idx ? 'is-active' : ''}`}
                onClick={() => {
                  const trackHeight = containerRef.current.getBoundingClientRect().height;
                  const viewportHeight = window.innerHeight;
                  const scrollable = trackHeight - viewportHeight;
                  const progressTargets = servicesDiagonalSlides.map((_, targetIndex) => targetIndex / maxIndex);
                  const elementTop = containerRef.current.offsetTop;
                  const targetScrollTop = elementTop + progressTargets[idx] * scrollable;
                  window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
                }}
              >
                <span className="diagonal-slide-nav-dot" />
                {activeIndex === idx ? `${slide.num} — ${slide.label}` : `${idx + 1}`}
              </div>
            ))}
          </div>

          {/* Center Column: Sliding Cards */}
          <div className="diagonal-slide-cards-wrapper">
            {servicesDiagonalSlides.map((slide, idx) => (
              <div
                key={slide.num}
                className="diagonal-slide-card"
                style={getCardStyle(idx)}
              >
                <img
                  src={slide.image}
                  className="diagonal-slide-card-image"
                  alt={slide.title}
                />
              </div>
            ))}
          </div>

          {/* Right Column: Sliding Texts */}
          <div className="diagonal-slide-texts-wrapper">
            {servicesDiagonalSlides.map((slide, idx) => (
              <div
                key={slide.num}
                className="diagonal-slide-text-item"
                style={getTextStyle(idx)}
              >
                <h4>{slide.label}</h4>
                <p>{slide.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const recentWorksData = [
  {
    num: "01",
    category: "▸ CAMPAIGN",
    title: "YONEX ASTROX 99",
    image: "https://images.prismic.io/monopolondon/aQTmqLpReVYa35cO_YONEX_ASTROX99_thumb_01.jpg?auto=format,compress&w=600&h=718",
    roles: ["Creative Direction", "Art Direction", "CGI Production", "Production"]
  },
  {
    num: "02",
    category: "▸ BRAND DESIGN",
    title: "NKORA COFFEE",
    image: "https://images.prismic.io/monopolondon/aNJuAJ5xUNkB1Amt_Nkora_Coffee_Branding_Thumb1.jpg?auto=format,compress&w=600&h=718",
    roles: ["Visual Direction", "Visual Production", "On-site supervise"]
  },
  {
    num: "03",
    category: "▸ SPATIAL • DIGITAL",
    title: "PARIS WORLD",
    image: "https://images.prismic.io/monopolondon/aMwJVGGNHVfTPXa2_Yonex_Paris-Lounge_pop-up_Thumb01.jpg?auto=format,compress&w=600&h=718",
    roles: ["Spatial Design", "Interactive Code", "Creative Production"]
  },
  {
    num: "04",
    category: "▸ PACKAGING • IDENTITY",
    title: "VORA WATER",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    roles: ["Packaging • Identity", "Creative Concept", "CGI Renders"]
  },
  {
    num: "05",
    category: "▸ CREATIVE CODE",
    title: "NEURAL METRIC",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    roles: ["Motion Systems", "Creative Code", "UI Engineering"]
  }
];

function WebGLRippleCanvas({ transitionIndex, transitionProgress, rippleIntensity, imagesLoaded }) {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const texturesRef = useRef([]);
  const timeRef = useRef(0);
  const smoothedIntensityRef = useRef(0);

  const transitionIndexRef = useRef(transitionIndex);
  const transitionProgressRef = useRef(transitionProgress);
  const rippleIntensityRef = useRef(rippleIntensity);

  useEffect(() => {
    transitionIndexRef.current = transitionIndex;
    transitionProgressRef.current = transitionProgress;
    rippleIntensityRef.current = rippleIntensity;
  }, [transitionIndex, transitionProgress, rippleIntensity]);

  useEffect(() => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      console.warn("WebGL not supported in this browser.");
      return;
    }
    glRef.current = gl;

    // Shader sources
    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        vUv.y = 1.0 - vUv.y; // Correctly flip vertical UV mapping
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform sampler2D uTexCurrent;
      uniform sampler2D uTexNext;
      uniform float uProgress;
      uniform float uTime;
      uniform float uAspect;
      uniform float uRippleIntensity;

      void main() {
        vec2 uv = vUv;
        vec2 center = vec2(0.5);
        vec2 toCenter = uv - center;
        toCenter.x *= uAspect;
        float dist = length(toCenter);
        
        // Concentric displacement wave
        float wave = sin(dist * 35.0 - uTime * 6.0) * 0.035 * sin(uProgress * 3.14159) * (uRippleIntensity + 0.15);
        vec2 distortedUv = uv + normalize(uv - center) * wave;
        distortedUv = clamp(distortedUv, 0.0, 1.0);
        
        vec4 colorCurrent = texture2D(uTexCurrent, distortedUv);
        vec4 colorNext = texture2D(uTexNext, distortedUv);
        
        gl_FragColor = mix(colorCurrent, colorNext, uProgress);
      }
    `;

    const compileShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }
    programRef.current = program;

    const vertices = new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const textures = recentWorksData.map(work => {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      
      // Temporary placeholder
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
      
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      };
      img.src = work.image;
      return texture;
    });
    texturesRef.current = textures;

    const resizeCanvas = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.useProgram(program);
        gl.uniform1f(gl.getUniformLocation(program, "uAspect"), w / h);
      }
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const draw = () => {
      timeRef.current += 0.025;
      smoothedIntensityRef.current = smoothedIntensityRef.current * 0.93 + rippleIntensityRef.current * 0.07;

      gl.useProgram(program);

      const activeIdx = transitionIndexRef.current;
      const transP = transitionProgressRef.current;

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texturesRef.current[activeIdx] || texturesRef.current[0]);
      gl.uniform1i(gl.getUniformLocation(program, "uTexCurrent"), 0);

      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, texturesRef.current[Math.min(4, activeIdx + 1)] || texturesRef.current[0]);
      gl.uniform1i(gl.getUniformLocation(program, "uTexNext"), 1);

      gl.uniform1f(gl.getUniformLocation(program, "uProgress"), transP);
      gl.uniform1f(gl.getUniformLocation(program, "uTime"), timeRef.current);
      gl.uniform1f(gl.getUniformLocation(program, "uRippleIntensity"), smoothedIntensityRef.current);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(requestRef.current);
      if (glRef.current) {
        texturesRef.current.forEach(tex => glRef.current.deleteTexture(tex));
        glRef.current.deleteProgram(programRef.current);
      }
    };
  }, [imagesLoaded]);

  return (
    <canvas ref={canvasRef} className="works-ripple-canvas" />
  );
}

function RecentWorksRippleShowcase() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollProgressTargetRef = useRef(0);
  const rippleIntensityTargetRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionIndex, setTransitionIndex] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [rippleIntensity, setRippleIntensity] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const images = recentWorksData.map(work => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        loadedCount++;
        if (loadedCount === recentWorksData.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === recentWorksData.length) {
          setImagesLoaded(true);
        }
      };
      img.src = work.image;
      return img;
    });
  }, []);

  useEffect(() => {
    let lastProgress = 0;
    let lastTime = performance.now();
    let speed = 0;
    let frameId;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Use the number of works to compute the scroll distance required
      // so the mapping from scroll -> active slide is stable regardless
      // of the CSS track height. This makes the section behave predictably.
      const numWorks = recentWorksData.length;

      // Keep the section shorter while still letting the track complete all slides.
      const intendedScrollable = Math.max(1, (numWorks - 1) * viewportHeight * 0.7);

      const scrolled = Math.max(0, -rect.top);
      const rawProgress = scrolled / intendedScrollable;
      const progress = Math.max(0, Math.min(1, rawProgress));

      // Map progress (0..1) to a phase covering indices 0..(numWorks-1)
      scrollProgressTargetRef.current = progress;

      const now = performance.now();
      const deltaT = Math.max(1, now - lastTime);
      const deltaP = Math.abs(progress - lastProgress);
      
      const curSpeed = deltaP / deltaT * 1000.0;
      speed = speed * 0.82 + curSpeed * 0.18;
      
      rippleIntensityTargetRef.current = Math.min(1.5, speed * 2.2);

      lastProgress = progress;
      lastTime = now;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    const animate = () => {
      setScrollProgress((current) => {
        const target = scrollProgressTargetRef.current;
        const delta = target - current;
        if (Math.abs(delta) < 0.001) {
          return target;
        }
        return current + delta * 0.08;
      });

      setRippleIntensity((current) => {
        const target = rippleIntensityTargetRef.current;
        const delta = target - current;
        if (Math.abs(delta) < 0.001) {
          return target;
        }
        return current + delta * 0.07;
      });

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const phase = scrollProgress * (recentWorksData.length - 1);
    const transIdx = Math.min(Math.max(0, Math.floor(phase)), Math.max(0, recentWorksData.length - 2));
    const transP = phase - transIdx;
    const actIdx = Math.max(0, Math.min(recentWorksData.length - 1, Math.round(phase)));

    setActiveIndex(actIdx);
    setTransitionIndex(transIdx);
    setTransitionProgress(transP);
  }, [scrollProgress]);

  const getSlideStyle = (index) => {
    const opacity = activeIndex === index ? 1 : 0;
    const ty = activeIndex === index ? 0 : (index < activeIndex ? -20 : 20);
    return {
      opacity,
      transform: `translateY(${ty}px)`,
      pointerEvents: activeIndex === index ? 'auto' : 'none'
    };
  };

  return (
    <div ref={containerRef} className="works-ripple-track">
      <div className="works-ripple-sticky">
        <div className="works-ripple-layout">
          <div className="works-ripple-title-container">
            <span className="works-ripple-eyebrow">Featured work</span>
            <div className="works-ripple-title-wrap">
              {recentWorksData.map((work, idx) => (
                <h3
                  key={work.title}
                  className="works-ripple-title"
                  style={getSlideStyle(idx)}
                >
                  {work.title}
                </h3>
              ))}
            </div>
          </div>

          <div className="works-ripple-canvas-wrapper">
            <WebGLRippleCanvas
              transitionIndex={transitionIndex}
              transitionProgress={transitionProgress}
              rippleIntensity={rippleIntensity}
              imagesLoaded={imagesLoaded}
            />
          </div>

          <div className="works-ripple-info-container">
            <span className="works-ripple-category">
              {recentWorksData[activeIndex]?.category}
            </span>
            <div className="works-ripple-roles-wrap">
              {recentWorksData.map((work, idx) => (
                <ul
                  key={work.title + "-roles"}
                  className="works-ripple-roles"
                  style={getSlideStyle(idx)}
                >
                  {work.roles.map(role => (
                     <li key={role} className="works-ripple-role">
                      {role}
                     </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="works-ripple-sidebar">
            {recentWorksData.map((work, idx) => (
              <div
                key={work.title + "-thumb"}
                className={`works-ripple-thumb-container ${activeIndex === idx ? 'is-active' : ''}`}
                onClick={() => {
                  const trackHeight = containerRef.current.getBoundingClientRect().height;
                  const viewportHeight = window.innerHeight;
                  const scrollable = trackHeight - viewportHeight;
                  const elementTop = containerRef.current.offsetTop;
                  const targetScrollTop = elementTop + (idx / 5.0) * scrollable;
                  window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
                }}
              >
                <span className="works-ripple-indicator">—</span>
                <div className="works-ripple-thumb-frame">
                  <img src={work.image} alt={work.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  const heroRef = useRef(null);
  const worksRef = useScrollReveal();
  const pricingRef = useScrollReveal();

  // Dynamically query service details from data/site.js to ensure data integrity
  const branding = services.find(s => s.title.toLowerCase().includes('branding')) || {
    subtitle: 'Identity systems that feel premium, memorable, and consistent.',
    price: 'From $800',
    timeline: '1-2 weeks',
    features: ['Logo polish', 'Color systems', 'Brand guidelines']
  };

  const uiux = services.find(s => s.title.toLowerCase().includes('ui/ux') || s.title.toLowerCase().includes('design')) || {
    subtitle: 'Clear information architecture and bold visual systems.',
    price: 'From $900',
    timeline: '1-2 weeks',
    features: ['Wireframes', 'Design systems', 'Prototype handoff']
  };

  const webDev = services.find(s => s.title.toLowerCase().includes('web development') || s.title.toLowerCase().includes('development')) || {
    title: 'Web Development',
    subtitle: 'High-conversion sites built on a modern stack.',
    price: 'From $1,500',
    timeline: '2-4 weeks',
    features: ['Marketing sites', 'Landing pages', 'Custom React builds']
  };

  const customApps = services.find(s => s.title.toLowerCase().includes('app') || s.title.toLowerCase().includes('custom web')) || {
    subtitle: 'Operational tools and dashboards tailored to your workflows.',
    price: 'Custom quote',
    timeline: '4-8 weeks',
    features: ['Dashboards', 'Automation', 'API integrations']
  };

  const seo = services.find(s => s.title.toLowerCase().includes('seo')) || {
    subtitle: 'Technical foundations that help pages rank and convert.',
    price: 'From $600',
    timeline: '1 week',
    features: ['Keyword mapping', 'On-page SEO', 'Performance fixes']
  };

  const maintenance = services.find(s => s.title.toLowerCase().includes('maintenance')) || {
    subtitle: 'Ongoing care for updates, improvements, and uptime.',
    price: 'From $250/mo',
    timeline: 'Monthly',
    features: ['Updates', 'Fixes', 'Backup support']
  };

  return (
    <div className="page-wise services-page-dark">
      {/* 1. HERO SECTION (INTERACTIVE DYNAMIC WEBGL GRIDSCAN DARK BACKGROUND & GLOWING TYPOGRAPHY) */}
      <section 
        ref={heroRef}
        className="services-hero-dark" 
        style={{ position: 'relative' }}
      >
        {/* Dynamic Three.js WebGL GridScan background using brand glow spectrum */}
        <div className="services-hero-dark-canvas-container">
          <GridScan 
            sensitivity={0.65}
            linesColor="#0d0e12"
            scanColor="#9b4dff"
            scanOpacity={0.6}
            gridScale={0.13}
            lineStyle="solid"
            lineThickness={1.8}
            lineJitter={0.06}
            scanDirection="pingpong"
            enablePost={true}
            bloomIntensity={1.8}
            bloomThreshold={0.2}
            bloomSmoothing={0.8}
            chromaticAberration={0.0035}
            noiseIntensity={0.012}
            scanGlow={0.6}
            scanSoftness={2.2}
            scanPhaseTaper={0.85}
            scanDuration={2.4}
            scanDelay={1.8}
            scanOnClick={true}
            enableGyro={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Dotted vertical timelines matching Monopo layout */}
        <div className="hero-vertical-guide left">
          <span className="hero-guide-arrow" />
        </div>
        <div className="hero-vertical-guide right">
          <span className="hero-guide-arrow" />
        </div>
        
        {/* Bouncing scroll indicator arrow at bottom right */}
        <div className="hero-scroll-arrow">↓</div>

        <div className="services-hero-content-monopo">
          <h1 className="services-hero-title-monopo">
            <span className="hero-line-left">We build</span>
            <span className="hero-line-right">expressive brands</span>
          </h1>
          <p className="services-hero-mono-sub">
            [ ACROSS BRANDING, COMMUNICATIONS AND DIGITAL. ]
          </p>
        </div>
      </section>

      {/* 2. SERVICES PROVIDED GRID (01, 02, 03 PILLARS) */}
      <SectionWise bg="bg-transparent" style={{ borderBottom: 'none', paddingTop: '40px', paddingBottom: 0, marginBottom: 0 }}>
        <div style={{ textAlign: 'left', marginBottom: 0 }}>
          <span className="eyebrow">capabilities</span>
          <h2 className="display-huge" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: 12, marginBottom: 0 }}>
            Services Provided
          </h2>
        </div>
      </SectionWise>

      <ServicesDiagonalScrollingShowcase />

      <RecentWorksRippleShowcase />

      {/* 5. PARTNERSHIPS — INTERACTIVE 3D DOME GALLERY (full viewport) */}
      <section className="partnerships-section" style={{ padding: '0 0 0' }}>
        <div className="site-frame" style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>Clients</span>
            <h3 className="partnerships-title">
              Partnerships <br />
              we value
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', maxWidth: 440, marginTop: 12, lineHeight: 1.6 }}>
              Drag to explore — click any tile to expand
            </p>
          </div>
        </div>
        {/* Full-viewport gallery — exactly matches the reference App usage */}
        <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#000', marginLeft: 'calc(50% - 50vw)' }}>
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={true}
            overlayBlurColor="#000"
            imageBorderRadius="40px"
            openedImageBorderRadius="28px"
            openedImageWidth="300px"
            openedImageHeight="380px"
          />
        </div>
      </section>

        {/* Infinite Menu Section */}
        {/* InfiniteMenu removed */}

      {/* 6. COMBINED PRICING PLANS SECTION (4-COLUMN GLASS GRID WITH LOW PACKAGES FOR TIGHT TEAMS) */}
      <section id="pricing" ref={pricingRef} className="pricing-section scroll-reveal">
        <div className="site-frame">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="eyebrow">pricing packages</span>
            <h2 className="display-huge" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginTop: 12 }}>
              Simple Packaging
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '20px auto 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Clear packages, clean deliverables, and room for custom scope. Select a plan below or request a bespoke quote.
            </p>
          </div>

          <div className="pricing-plans-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                <p className="pricing-card-delivery">{plan.delivery} • {plan.revisions}</p>
                <h3 className="pricing-card-title">{plan.name}</h3>
                {plan.tagline && (
                  <p className="pricing-card-tagline">{plan.tagline}</p>
                )}
                <p className="pricing-card-price">{plan.price}</p>
                
                <ul className="pricing-card-features">
                  {plan.features.map((feature) => (
                    <li key={feature} className="pricing-card-feature">
                      <Check /> <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink 
                  to="/contact" 
                  variant={plan.popular ? 'primary' : 'ghost'} 
                  className="pricing-card-button"
                >
                  Choose {plan.name}
                </ButtonLink>
              </div>
            ))}
          </div>

          {/* Custom Scope Sub-cta */}
          <div style={{ textAlign: 'center', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 10px' }}>Custom Scope Needed?</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.96rem', margin: '0 0 24px' }}>
              We build specialized dashboards, operational portals, advanced SEO retainers, and branding networks.
            </p>
            <ButtonLink to="/contact" variant="ghost" style={{ borderRadius: '999px', padding: '16px 36px', fontSize: '0.88rem' }}>
              REQUEST BESPOKE QUOTE →
            </ButtonLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ServicesPage;