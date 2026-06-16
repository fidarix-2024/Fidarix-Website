import { useRef, useState, useEffect } from 'react';
import { Check, ArrowRight, Zap, HelpCircle } from 'lucide-react';
import { pricingPlans, optionalAddOns, pricingFaqs } from '../../data/site';
import { ButtonLink } from '../../components/common/Layout';
import PrismaticBurst from '../../components/common/PrismaticBurst';
import BlurText from '../../components/common/BlurText';
import TiltedCard from '../../components/common/TiltedCard';
import SplitText from '../../components/common/SplitText';
import Silk from '../../components/Silk';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const plansRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden font-['Inter']">
        {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center pt-[140px] px-6 pb-[100px] overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pricing_hero.png"
            alt="Pricing Hero Background"
            fetchpriority="high"
            rel="preload"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000000_85%)] pointer-events-none z-[2]" />
        </div>

        <div className="max-w-[900px] w-full relative z-10">
         
          <SplitText
            text="Built to Convert. Designed to Scale."
            className="font-['Space_Grotesk'] text-[clamp(2.5rem,5.8vw,4.8rem)] font-black leading-[1.05] tracking-[-0.04em] text-white m-0 mb-[30px] uppercase"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h1"
            textAlign="center"
            playOnScroll={false}
          />

          <p className="text-[clamp(1rem,1.35vw,1.25rem)] leading-[1.6] text-white/65 max-w-[680px] mx-auto mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Affordable, fast, and conversion-focused websites starting at just ₹3,999. 
            Designed to attract customers, build trust, and generate leads.
          </p>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <button onClick={handleScrollToPlans} className="bg-white text-black py-[17px] px-[38px] rounded-full font-extrabold text-[0.96rem] cursor-pointer shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300 border border-white hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(255,255,255,0.25)] hover:bg-black hover:text-white">
              View Packages <ArrowRight className="w-5 h-5 inline ml-1" />
            </button>
            <ButtonLink to="/contact" variant="ghost" className="!rounded-full !py-[17px] !px-[38px] !text-[0.96rem] !font-extrabold">
              Request Custom Quote
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <motion.div 
        className="w-full relative z-[99] mb-[60px] md:mt-5 md:mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-[#0a0614]/65 border-y border-[#9b4dff]/25 py-4 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_30px_rgba(124,58,237,0.04),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-[20px] overflow-hidden whitespace-nowrap hover:[&>div]:[animation-play-state:paused]">
          <div className="inline-flex items-center gap-[80px] animate-marquee pr-[80px]" style={{ animationDuration: '25s' }}>
            {/* Original Items */}
            <div className="font-['Space_Grotesk'] text-[1.1rem] font-bold tracking-[0.1em] uppercase text-white/85 transition-all duration-300 hover:text-[#c084fc] hover:drop-shadow-[0_0_12px_rgba(167,90,255,0.8)]">
              <span>Mobile Optimized</span>
            </div>
            <div className="font-['Space_Grotesk'] text-[1.1rem] font-bold tracking-[0.1em] uppercase text-white/85 transition-all duration-300 hover:text-[#c084fc] hover:drop-shadow-[0_0_12px_rgba(167,90,255,0.8)]">
              <span>SEO Ready</span>
            </div>
            <div className="font-['Space_Grotesk'] text-[1.1rem] font-bold tracking-[0.1em] uppercase text-white/85 transition-all duration-300 hover:text-[#c084fc] hover:drop-shadow-[0_0_12px_rgba(167,90,255,0.8)]">
              <span>Fast Loading</span>
            </div>
            <div className="font-['Space_Grotesk'] text-[1.1rem] font-bold tracking-[0.1em] uppercase text-white/85 transition-all duration-300 hover:text-[#c084fc] hover:drop-shadow-[0_0_12px_rgba(167,90,255,0.8)]">
              <span>Free Consultation</span>
            </div>
            
            {/* Duplicated Items for seamless scrolling */}
            <div className="font-['Space_Grotesk'] text-[1.1rem] font-bold tracking-[0.1em] uppercase text-white/85 transition-all duration-300 hover:text-[#c084fc] hover:drop-shadow-[0_0_12px_rgba(167,90,255,0.8)]">
              <span>Mobile Optimized</span>
            </div>
            <div className="font-['Space_Grotesk'] text-[1.1rem] font-bold tracking-[0.1em] uppercase text-white/85 transition-all duration-300 hover:text-[#c084fc] hover:drop-shadow-[0_0_12px_rgba(167,90,255,0.8)]">
              <span>SEO Ready</span>
            </div>
            <div className="font-['Space_Grotesk'] text-[1.1rem] font-bold tracking-[0.1em] uppercase text-white/85 transition-all duration-300 hover:text-[#c084fc] hover:drop-shadow-[0_0_12px_rgba(167,90,255,0.8)]">
              <span>Fast Loading</span>
            </div>
            <div className="font-['Space_Grotesk'] text-[1.1rem] font-bold tracking-[0.1em] uppercase text-white/85 transition-all duration-300 hover:text-[#c084fc] hover:drop-shadow-[0_0_12px_rgba(167,90,255,0.8)]">
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. PLANS SECTION */}
      <section ref={plansRef} className="py-[80px] px-[3vw] max-w-[1600px] mx-auto relative">
        <div className="text-center mb-[50px]">
          <p className="font-mono text-[0.78rem] text-[#7c3aed] font-bold uppercase tracking-[0.15em] block text-center mx-auto mb-3">choose your plan</p>
          <SplitText
            text="Choose The Right Website For Your Business"
            className="font-['Space_Grotesk'] text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] m-0 mb-6"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h2"
            textAlign="center"
          />
          <p className="text-white/55 max-w-[600px] mx-auto text-[0.98rem] leading-[1.6]">
            All websites include staging preview, standard mobile optimization, and basic speed optimizations.
          </p>
        </div>
       


        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 items-stretch sm:gap-5">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={plan.name} 
              className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
                <div 
                  className={`bg-white/2 border border-white/5 rounded-[20px] p-[32px_24px] flex flex-col relative transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:border-[#7c3aed]/35 hover:shadow-[0_25px_60px_rgba(124,58,237,0.1),0_15px_35px_rgba(0,0,0,0.5)] hover:bg-white/3 w-full h-full select-none ${plan.popular ? 'border-2 !border-[#7c3aed] bg-[linear-gradient(180deg,rgba(124,58,237,0.06)_0%,rgba(59,130,246,0.03)_100%)] shadow-[0_15px_50px_rgba(124,58,237,0.18)]' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-[#0a0614]/95 border border-[#7c3aed]/70 text-[#b48aff] text-[0.68rem] font-extrabold tracking-[0.12em] py-[5px] px-[14px] rounded-full flex items-center gap-1.5 whitespace-nowrap shadow-[0_0_14px_rgba(124,58,237,0.35),inset_0_0_8px_rgba(124,58,237,0.08)] uppercase">
                      <Zap className="w-3.5 h-3.5" /> Popular Choice
                    </div>
                  )}
                  
                  <div className="mb-[18px]">
                    <h3 className="font-['Space_Grotesk'] text-[1.4rem] font-extrabold uppercase tracking-[-0.01em] m-0 mb-1.5">{plan.name}</h3>
                    <p className="text-[0.8rem] leading-[1.3] text-white/50 min-h-unset m-0 mb-3">{plan.tagline}</p>
                    <div className="mb-4">
                      <span className="font-['Space_Grotesk'] text-[clamp(1.6rem,2.2vw,2rem)] font-black text-[#10b981] tracking-[-0.02em]">{plan.price}</span>
                    </div>
                    <div className="text-[0.78rem] text-white/45 flex items-center gap-2">
                      <span>Delivery: <strong>{plan.delivery}</strong></span>
                      <span className="text-white/20">•</span>
                      <span>{plan.revisions}</span>
                    </div>
                  </div>

                  <div className="h-px bg-white/5 mb-[18px]" />

                  <div className="mb-5 flex-1">
                    <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.08em] text-white/35 block mb-4">What's included:</span>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-[9px] text-[0.84rem] text-white/85 leading-[1.4]">
                          <Check className="w-4.5 h-4.5 text-[#10b981] shrink-0 mt-[1px]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-[14px]">
                    <div className="text-[0.8rem] leading-[1.4] text-white/50 bg-white/2 border border-white/5 py-3 px-4 rounded-[12px] [&_strong]:text-white/80">
                      <strong>Best for:</strong> {plan.bestFor}
                    </div>
                    <ButtonLink 
                      to="/contact" 
                      variant={plan.popular ? 'primary' : 'ghost'} 
                      className={`w-full text-center !rounded-full !font-extrabold !text-[0.92rem] !p-4 ${plan.popular ? '!bg-[#7c3aed] !text-white !shadow-[0_10px_25px_rgba(124,58,237,0.25)] !border-[#7c3aed] hover:!bg-white hover:!text-black hover:!shadow-[0_12px_30px_rgba(255,255,255,0.25)] hover:!border-white' : ''}`}
                    >
                      Choose {plan.name}
                    </ButtonLink>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. OPTIONAL ADD-ONS */}
      <section className="py-[80px] px-[4vw] max-w-[1280px] mx-auto">
        <div className="text-center mb-[50px]">
          <span className="font-mono text-[0.78rem] text-[#7c3aed] font-bold uppercase tracking-[0.15em] block text-center mx-auto mb-3">additional services</span>
          <SplitText
            text="Optional Add-ons & Customizations"
            className="font-['Space_Grotesk'] text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] m-0 mb-6"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h2"
            textAlign="center"
          />
          <p className="text-white/55 max-w-[600px] mx-auto text-[0.98rem] leading-[1.6]">
            Tailor your website setup with individual features. Add any of these to your core package.
          </p>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-[28px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {optionalAddOns.map((addon, idx) => (
              <motion.div 
                key={idx} 
                className="flex justify-between items-center bg-white/2 border border-white/5 p-[20px_28px] rounded-[16px] transition-all duration-300 hover:bg-white/5 hover:border-[#7c3aed]/20 hover:translate-x-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: "easeOut" }}
              >
                <div className="addon-info">
                  <span className="font-['Space_Grotesk'] font-bold text-[1.05rem] text-white/90">{addon.service}</span>
                </div>
                <div className="addon-price-tag">
                  <span className="font-['Space_Grotesk'] font-extrabold text-[#10b981] text-[1.05rem]">{addon.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM INQUIRY BANNER */}
      <motion.section 
        className="my-[80px] mb-[140px] mx-auto max-w-[1100px] w-[calc(100%-8vw)] bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.12)_0%,transparent_60%),radial-gradient(circle_at_90%_80%,rgba(59,130,246,0.08)_0%,transparent_60%),rgba(255,255,255,0.02)] border border-white/5 rounded-[32px] p-[60px_40px] text-center relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)] md:p-[40px_24px] md:my-[40px] md:mb-[100px]" 
        style={{ position: 'relative', overflow: 'hidden' }}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_70%)] blur-[80px] pointer-events-none z-[1]" />
        <div className="relative z-10">
          <SplitText
            text="Need a completely customized setup?"
            className="font-['Space_Grotesk'] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold m-0 mb-4 tracking-[-0.02em] text-white"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h3"
            textAlign="center"
          />
          <p className="text-white/60 max-w-[680px] mx-auto m-0 mb-9 text-[0.98rem] leading-[1.6]">
            We build specialized databases, customer portals, inventory tracking panels, 
            e-commerce networks, and dedicated operational dashboards.
          </p>
          <ButtonLink to="/contact" variant="primary" className="!rounded-full !py-[18px] !px-[42px] !font-extrabold !text-[0.96rem]">
            Get a Bespoke Estimate →
          </ButtonLink>
        </div>
      </motion.section>

      {/* 5. FAQ SECTION */}
      <section className="py-[100px] px-[4vw] max-w-[1280px] mx-auto mb-[60px] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.5fr] gap-[80px] items-start">
          <motion.div 
            className="md:sticky md:top-[120px] flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-['Space_Grotesk'] text-[clamp(2.5rem,5vw,3.8rem)] font-extrabold leading-[1.05] uppercase m-0 mb-5 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Frequently<br />Asked<br />Questions</h2>
            <p className="text-white/55 text-[0.98rem] leading-[1.6] m-0 max-w-[400px]">
              Have questions about our plans? Here are answers to common queries. If you need a custom package, feel free to contact us.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {pricingFaqs.map((faq) => {
              const isOpen = openFaq === faq.question;
              return (
                <div 
                  key={faq.question} 
                  className={`group py-6 border-b border-white/10 flex flex-col justify-center cursor-pointer transition-colors duration-300 hover:border-[#7c3aed]/40 ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : faq.question)}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className={`font-['Space_Grotesk'] font-bold text-[clamp(1.1rem,1.3vw,1.35rem)] leading-[1.4] transition-colors duration-300 group-hover:text-[#b48aff] ${isOpen ? 'text-[#b48aff]' : 'text-white'}`}>{faq.question}</span>
                    <span className={`text-[1.8rem] font-light shrink-0 ml-4 transition-all duration-300 ${isOpen ? 'text-[#7c3aed]' : 'text-white/40'}`}>{isOpen ? '−' : '+'}</span>
                  </div>
                  <div 
                    style={{ 
                      maxHeight: isOpen ? '250px' : '0', 
                      opacity: isOpen ? 1 : 0, 
                      overflow: 'hidden', 
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
                    }}
                  >
                    <p className="m-0 pt-4 pb-1 text-[0.96rem] leading-[1.6] text-white/65">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
