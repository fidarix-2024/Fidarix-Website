import { useRef, useEffect, useState } from 'react';
import { ButtonLink, SectionWise } from '../../components/common/Layout';
import { detailedServices } from '../../data/site';
import { ArrowRight } from 'lucide-react';
import { ServicesScanner } from '../../components/ServicesComponent/ServicesScanner';
import RippleGrid from '../../components/common/RippleGrid';
import BlurText from '../../components/common/BlurText';
import FlowingMenu from '../../components/common/FlowingMenu';
import SplitText from '../../components/common/SplitText';
import GradientBlinds from '../../components/common/GradientBlinds';
import SEO from '../../components/common/SEO';

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
          speed={2}
          items={[
            { link: '#', text: 'Design Systems', content: 'Scalable Component Libraries' },
            { link: '#', text: 'Architecture', content: 'Modern Tech Stack' },
            { link: '#', text: 'Visibility', content: 'Technical SEO Optimization' },
            { link: '#', text: 'Autonomy', content: 'Full Digital Independence' }
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
    <section className="bg-[#020106] w-full border-y border-white/8 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto flex flex-col lg:flex-row min-h-[80vh]">

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
    </section>
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
// CORE CAPABILITIES SECTION (BENTO GRID)
// ----------------------------------------------------
const DetailedServicesSection = () => {
  // Refined Bento grid layout classes to better fit standard image aspect ratios
  const getBentoClasses = (index) => {
    switch(index) {
      case 0: return 'md:col-span-2 md:row-span-1 min-h-[320px] md:min-h-[380px]'; // Wide Landscape
      case 1: return 'md:col-span-1 md:row-span-1 min-h-[320px] md:min-h-[380px]'; // Square
      case 2: return 'md:col-span-1 md:row-span-1 min-h-[320px] md:min-h-[380px]'; // Square
      case 3: return 'md:col-span-2 md:row-span-1 min-h-[320px] md:min-h-[380px]'; // Wide Landscape
      case 4: return 'md:col-span-2 md:row-span-1 min-h-[320px] md:min-h-[380px]'; // Wide Landscape
      case 5: return 'md:col-span-2 md:row-span-1 min-h-[320px] md:min-h-[380px]'; // Wide Landscape
      case 6: return 'md:col-span-2 md:row-span-1 min-h-[320px] md:min-h-[380px]'; // Wide Landscape
      default: return 'md:col-span-1 md:row-span-1 min-h-[320px]';
    }
  };

  return (
    <SectionWise bg="bg-[#020106]" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '100px', paddingBottom: '120px' }}>
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <SplitText
          text="Core Capabilities."
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white leading-[1.1] uppercase tracking-tight font-['Space_Grotesk']"
          delay={40}
          duration={0.7}
          ease="power4.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          tag="h2"
          textAlign="center"
        />
        <p className="mt-6 text-[1.15rem] text-white/70 leading-[1.7] max-w-2xl mx-auto font-medium">
          Aesthetic precision backed by robust engineering. We build digital assets that demand attention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4 max-w-[1400px] mx-auto px-6">
        {detailedServices.map((srv, i) => (
          <div key={i} className={`group rounded-[28px] bg-black border border-white/10 hover:border-[#5227FF]/60 transition-all duration-700 relative overflow-hidden flex flex-col shadow-[0_15px_40px_rgba(0,0,0,0.6)] ${getBentoClasses(i)}`}>
            
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 bg-black">
              <img src={srv.image} alt={srv.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/80 transition-all duration-700" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between pointer-events-none">
              <div className="flex justify-between items-start w-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-bold text-sm px-4 py-1.5 rounded-full font-['Space_Grotesk'] tracking-wider group-hover:bg-[#5227FF]/90 group-hover:text-white group-hover:border-[#5227FF] transition-all duration-500">
                  {srv.number}
                </div>
                {/* Subtle top-right icon or arrow can go here */}
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out bg-white/5 backdrop-blur-sm">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className={`font-extrabold text-white mb-2 font-['Space_Grotesk'] group-hover:text-white transition-colors drop-shadow-xl tracking-tight leading-[1.1] ${i === 0 ? 'text-[2.5rem] md:text-[3.5rem]' : 'text-[1.8rem] md:text-[2.2rem]'}`}>
                  {srv.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-[1rem] drop-shadow-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-[90%]">
                  {srv.description}
                </p>
              </div>
            </div>
          </div>
        ))}
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
              linesColor="#a855f7"
              scanColor="#c084fc"
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

      {/* 2. CORE CAPABILITIES (BENTO GRID) */}
      <DetailedServicesSection />

      {/* 3. WHAT YOU RECEIVE */}
      <WhatYouReceiveSection />

      {/* 6. OUR METHODOLOGY */}
      <HowWeWorkSection />

      {/* 7. CTA FOR SERVICES PAGE */}
      <CTASection />
    </div>
  );
}

export default ServicesPage;
