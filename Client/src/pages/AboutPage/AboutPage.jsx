import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { team, techStack, aboutTimeline, founders, reasons } from '../../data/site';
import AboutHeroBackground from '../../components/AboutComponent/AboutHeroBackground';
import AboutGridBackground from '../../components/AboutComponent/AboutGridBackground';
import DomainAccordion from '../../components/AboutComponent/DomainAccordion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Code, Smartphone, Tag, TrendingUp, LifeBuoy, PenTool, Sparkles, Rocket } from 'lucide-react';
import SplitText from '../../components/common/SplitText';

function AboutPage() {
  const [showHeavyComponents, setShowHeavyComponents] = useState(true);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-primary/30">
      {/* 1. HERO SECTION WITH LIGHTFALL */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {showHeavyComponents && (
            <AboutHeroBackground
              dpr={1}
              colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
              backgroundColor="#050505"
              speed={0.5}
              streakCount={3}
              streakWidth={1.5}
              streakLength={1.2}
              glow={1.2}
              density={0.7}
              twinkle={1.5}
              zoom={2.5}
              backgroundGlow={0.6}
              opacity={1}
              mouseInteraction={true}
              mouseStrength={0.6}
              mouseRadius={1.2}
            />
          )}
        </div>

        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] z-10 pointer-events-none"></div>

        <div className="relative z-20 text-center px-6 max-w-[900px] mx-auto mt-20">

          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold tracking-tighter leading-[0.9] text-white mb-6 font-['Space_Grotesk'] flex flex-col items-center">
            <SplitText
              text="We Build"
              delay={40}
              duration={0.7}
              ease="power4.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              tag="span"
              textAlign="center"
              playOnScroll={false}
            />
            <SplitText
              text="Digital Trust."
              delay={40}
              duration={0.7}
              ease="power4.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              tag="span"
              textAlign="center"
              playOnScroll={false}
            />
          </h1>
          <p className="text-white/70 text-[clamp(1.1rem,2vw,1.3rem)] leading-[1.6] max-w-[750px] mx-auto mb-10 animate-[fadeIn_1s_ease_0.3s_forwards] opacity-0 font-medium">
            Fidarix crafts high-performance websites, unforgettable brands, and scalable products. We fuse world-class design and robust engineering to make you the obvious choice.
          </p>
        </div>
      </section>

      {/* 2. OUR DOMAINS (EXPANDING ACCORDION) */}
      <DomainAccordion />


      {/* 3. WHY CHOOSE US */}
      <section className="py-24 relative z-20 bg-[#080808]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="w-full">
          <div className="text-center mb-16 px-6">
            <SplitText
              text="Why Choose Us"
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight leading-[1] mb-4 font-['Space_Grotesk']"
              delay={40}
              duration={0.7}
              ease="power4.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              tag="h2"
              textAlign="center"
            />
            <p className="text-white/60 text-lg max-w-[500px] mx-auto">The principles that guide every project we take on.</p>
          </div>

          <div className="w-full overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-marquee gap-8 py-20 px-4 items-center">
              {[...reasons, ...reasons].map((reason, i) => {
                let Icon = CheckCircle2;
                if (reason.title === 'Fast delivery') Icon = Zap;
                if (reason.title === 'Modern tech stack') Icon = Code;
                if (reason.title === 'Responsive design') Icon = Smartphone;
                if (reason.title === 'Affordable pricing') Icon = Tag;
                if (reason.title === 'SEO Optimized') Icon = TrendingUp;
                if (reason.title === 'Ongoing Support') Icon = LifeBuoy;

                // Create a seamless looping wave
                // reasons.length is typically 6. We use it to calculate the phase.
                const period = reasons.length;
                const phase = (i / period) * Math.PI * 2;

                // Y offset for the wave (up and down)
                const yOffset = Math.sin(phase) * 60; // 60px wave amplitude

                // Rotation for the cards to follow the path of the curve (derivative of sin is cos)
                const rotation = Math.cos(phase) * 8; // 8 degrees max rotation

                return (
                  <div
                    key={i}
                    className="bg-white hover:bg-gray-50 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 group w-[350px] flex-shrink-0 flex flex-col"
                    style={{ transform: `translateY(${yOffset}px) rotate(${rotation}deg)` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/10">
                      <Icon className="text-black group-hover:text-primary transition-colors duration-300 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 font-['Space_Grotesk'] tracking-tight">{reason.title}</h3>
                    <p className="text-black/70 text-sm leading-[1.6]">{reason.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDERS SECTION */}
      <section className="py-32 px-6 relative z-20 overflow-hidden">
        {/* Abstract background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#5227FF]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <SplitText
              text="The Founders"
              className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold tracking-tight leading-[1] mb-4 font-['Space_Grotesk']"
              delay={40}
              duration={0.7}
              ease="power4.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              tag="h2"
              textAlign="center"
            />
            <p className="text-white text-xl md:text-2xl font-medium max-w-[1000px] mx-auto">
              Meet the duo behind Fidarix. We combine design intuition with technical precision.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16 items-center">
            {/* Dishi: Image */}
            <div className="w-full max-w-[160px] md:max-w-[420px] h-[266px] md:h-[586px] flex justify-center">
              <AboutGridBackground
                items={[
                  {
                    image: founders[0].image,
                    title: founders[0].name,
                    subtitle: founders[0].role,
                    socials: {
                      linkedin: 'https://www.linkedin.com/in/dishi02/',
                      discord: 'dishi_0226'
                    },
                    borderColor: '#5227FF',
                    gradient: 'linear-gradient(145deg, rgba(82,39,255,0.4), rgba(5,5,5,0.9))',
                    url: '#',
                    message: "Design is not just what it looks like and feels like. Design is how it works. We craft digital experiences that evoke emotion and drive results."
                  }
                ]}
                radius={400}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>

            {/* Yash: Image */}
            <div className="w-full max-w-[160px] md:max-w-[420px] h-[266px] md:h-[586px] flex justify-center">
              <AboutGridBackground
                items={[
                  {
                    image: founders[1].image,
                    title: founders[1].name,
                    subtitle: founders[1].role,
                    socials: {
                      linkedin: 'https://www.linkedin.com/in/yashh26/',
                      discord: 'yash_2602.'
                    },
                    borderColor: '#FF9FFC',
                    gradient: 'linear-gradient(210deg, rgba(255,159,252,0.4), rgba(5,5,5,0.9))',
                    url: '#',
                    message: "Performance and scalability are non-negotiable. We engineer robust solutions designed to grow alongside your biggest ambitions."
                  }
                ]}
                radius={400}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. TIMELINE SECTION */}
      <section className="py-32 px-6 relative z-20 bg-white border-t border-black/5">
        <div className="max-w-[900px] mx-auto">
          <SplitText
            text="Our Journey"
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight leading-[1] mb-20 text-center font-['Space_Grotesk'] text-gray-900"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h2"
            textAlign="center"
          />

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black/10 md:-translate-x-1/2">
              <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-b from-primary via-[#FF9FFC] to-primary transform scale-y-50 origin-top opacity-50 blur-[2px]"></div>
            </div>

            <div className="space-y-16">
              {aboutTimeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                    hidden: {}
                  }}
                  className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <motion.div
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 10 } }
                    }}
                    className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-[7.5px] md:-translate-x-1/2 mt-2 ring-4 ring-white z-10 shadow-[0_0_15px_rgba(82,39,255,0.4)]"
                  ></motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className={`pl-10 md:pl-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}
                  >
                    <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-400 mb-4 block font-['Space_Grotesk']">
                      {item.year}
                    </span>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 text-base leading-[1.6]">{item.text}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      {/* 7. PREMIUM CTA SECTION */}
      <section className="relative z-20 overflow-hidden bg-[#020202]">
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative overflow-hidden group border-y border-white/10 transition-all duration-700 aspect-auto min-h-[500px] md:min-h-[700px] flex items-center"
          >
            {/* Background Image filling the entire box */}
            <img
              src="/images/AboutPage/contact_cta_background.png"
              alt="Ready to upgrade background"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />

            {/* Dark Overlays to ensure text readability */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 md:from-transparent to-transparent"></div>

            {/* Noise overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            {/* Text & Button Overlay Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto p-8 md:p-16 lg:p-24 flex flex-col items-start justify-center text-left transform group-hover:translate-x-2 transition-transform duration-500">

              <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold tracking-tighter leading-[0.95] text-white mb-6 font-['Space_Grotesk'] max-w-[800px] flex flex-wrap gap-x-4">
                <SplitText
                  text="Ready to"
                  delay={40}
                  duration={0.7}
                  ease="power4.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  tag="span"
                  textAlign="left"
                />
                <SplitText
                  text="upgrade?"
                  className="text-[#9b4dff]"
                  delay={40}
                  duration={0.7}
                  ease="power4.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  tag="span"
                  textAlign="left"
                />
              </h2>

              <p className="text-white/80 text-xl md:text-2xl max-w-[600px] font-medium leading-[1.6] mb-10">
                Stop blending in. Let's build a digital experience that reflects the true value and ambition of your brand.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-10 py-5 rounded-none font-['Space_Grotesk'] bg-white text-black font-bold text-lg hover:bg-black hover:text-white hover:border hover:border-white transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
              >
                Let's Talk
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;
