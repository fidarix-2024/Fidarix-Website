import { useRef, useState, useEffect } from 'react';
import { Check, ArrowRight, Zap, HelpCircle } from 'lucide-react';
import { pricingPlans, optionalAddOns, pricingFaqs } from '../../data/site';
import { ButtonLink } from '../../components/common/Layout';
import PrismaticBurst from '../../components/common/PrismaticBurst';
import BlurText from '../../components/common/BlurText';
import TiltedCard from '../../components/common/TiltedCard';
import SplitText from '../../components/common/SplitText';
import './PricingPage.css';
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
    <div className="pricing-page-container">
        {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="pricing_hero">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/images/pricing_hero.png)",
          }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="pricing_hero-blur-overlay" />
        </div>

        <div className="pricing_hero-content relative z-10">
         
          <SplitText
            text="Built to Convert. Designed to Scale."
            className="pricing-headline"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h1"
            textAlign="center"
          />

          <p className="pricing-subheadline">
            Affordable, fast, and conversion-focused websites starting at just ₹3,999. 
            Designed to attract customers, build trust, and generate leads.
          </p>

          <div className="pricing_hero-actions">
            <button onClick={handleScrollToPlans} className="pricing-btn-primary">
              View Packages <ArrowRight className="w-5 h-5 inline ml-1" />
            </button>
            <ButtonLink to="/contact" variant="ghost" className="pricing-btn-secondary">
              Request Custom Quote
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <motion.div 
        className="pricing-trust-strip-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pricing-trust-strip">
          <div className="trust-item">
            <Check className="trust-icon" />
            <span>Mobile Optimized</span>
          </div>
          <div className="trust-item">
            <Check className="trust-icon" />
            <span>SEO Ready</span>
          </div>
          <div className="trust-item">
            <Check className="trust-icon" />
            <span>Fast Loading</span>
          </div>
          <div className="trust-item">
            <Check className="trust-icon" />
            <span>Free Consultation</span>
          </div>
        </div>
      </motion.div>

      {/* 2. PLANS SECTION */}
      <section ref={plansRef} className="pricing-plans-section">
        <div className="pricing-section-header">
          <p className="section-tag text-center ">choose your plan</p>
          <SplitText
            text="Choose The Right Website For Your Business"
            className="section-title"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h2"
            textAlign="center"
          />
          <p className="section-desc">
            All websites include staging preview, standard mobile optimization, and basic speed optimizations.
          </p>
        </div>
       


        <div className="pricing-grid">
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
                className={`pricing-plan-card w-full h-full select-none ${plan.popular ? 'is-popular' : ''}`}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Zap className="w-3.5 h-3.5" /> Popular Choice
                  </div>
                )}
                
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                  <div className="plan-price-wrap">
                    <span className="plan-price">{plan.price}</span>
                  </div>
                  <div className="plan-meta">
                    <span>Delivery: <strong>{plan.delivery}</strong></span>
                    <span className="dot-divider">•</span>
                    <span>{plan.revisions}</span>
                  </div>
                </div>

                <div className="plan-divider" />

                <div className="plan-body">
                  <span className="features-title">What's included:</span>
                  <ul className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <Check className="w-4.5 h-4.5 feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plan-footer">
                  <div className="best-for-box">
                    <strong>Best for:</strong> {plan.bestFor}
                  </div>
                  <ButtonLink 
                    to="/contact" 
                    variant={plan.popular ? 'primary' : 'ghost'} 
                    className="plan-cta-button"
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
      <section className="addons-section">
        <div className="pricing-section-header">
          <span className="section-tag">additional services</span>
          <SplitText
            text="Optional Add-ons & Customizations"
            className="section-title"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h2"
            textAlign="center"
          />
          <p className="section-desc">
            Tailor your website setup with individual features. Add any of these to your core package.
          </p>
        </div>

        <div className="addons-container">
          <div className="addons-grid">
            {optionalAddOns.map((addon, idx) => (
              <motion.div 
                key={idx} 
                className="addon-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: "easeOut" }}
              >
                <div className="addon-info">
                  <span className="addon-service">{addon.service}</span>
                </div>
                <div className="addon-price-tag">
                  <span className="addon-price">{addon.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM INQUIRY BANNER */}
      <motion.section 
        className="pricing-custom-banner" 
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
        <div className="banner-glow" />
        <div className="banner-content relative z-10">
          <SplitText
            text="Need a completely customized setup?"
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h3"
            textAlign="center"
          />
          <p>
            We build specialized databases, customer portals, inventory tracking panels, 
            e-commerce networks, and dedicated operational dashboards.
          </p>
          <ButtonLink to="/contact" variant="primary" className="banner-btn">
            Get a Bespoke Estimate →
          </ButtonLink>
        </div>
      </motion.section>

      {/* 5. FAQ SECTION */}
      <section className="pricing-faq-section">
        <div className="pricing-faq-grid">
          <motion.div 
            className="pricing-faq-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="faq-main-title">Frequently<br />Asked<br />Questions</h2>
            <p className="faq-subtitle">
              Have questions about our plans? Here are answers to common queries. If you need a custom package, feel free to contact us.
            </p>
          </motion.div>
          <motion.div 
            className="pricing-faq-right"
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
                  className={`pricing-faq-row ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : faq.question)}
                >
                  <div className="pricing-faq-question-container">
                    <span className="pricing-faq-question">{faq.question}</span>
                    <span className="pricing-faq-plus">{isOpen ? '−' : '+'}</span>
                  </div>
                  <div 
                    className="pricing-faq-answer-container" 
                    style={{ 
                      maxHeight: isOpen ? '250px' : '0', 
                      opacity: isOpen ? 1 : 0, 
                      overflow: 'hidden', 
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
                    }}
                  >
                    <p className="pricing-faq-answer">{faq.answer}</p>
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
