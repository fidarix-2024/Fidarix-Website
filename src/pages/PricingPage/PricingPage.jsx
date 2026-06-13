import { useRef } from 'react';
import { Check, ArrowRight, Zap, HelpCircle } from 'lucide-react';
import { pricingPlans, optionalAddOns } from '../../data/site';
import { ButtonLink } from '../../components/common/Layout';
import PrismaticBurst from '../../components/PrismaticBurst';
import BlurText from '../../components/BlurText';
import './PricingPage.css';

export default function PricingPage() {
  const plansRef = useRef(null);

  const handleScrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pricing-page-container">
      {/* 1. HERO SECTION WITH PRISMATIC BURST */}
      <section className="pricing-hero">
        <div className="pricing-hero-burst-wrapper">
          <PrismaticBurst
            intensity={2.2}
            speed={0.4}
            animationType="rotate3d"
            colors={['#7c3aed', '#3b82f6', '#10b981', '#f59e0b', '#ef4444']}
            distort={15}
            paused={false}
            rayCount={4}
            mixBlendMode="lighten"
          />
          <div className="pricing-hero-blur-overlay" />
        </div>

        <div className="pricing-hero-content relative z-10">
          <span className="pricing-eyebrow">transparent pricing</span>
          
          <h1 className="pricing-headline">
            <BlurText 
              text="Professional Websites That Grow Your Business" 
              delay={60} 
              animateBy="words" 
              direction="top" 
              className="justify-center"
            />
          </h1>

          <p className="pricing-subheadline">
            Affordable, fast, and conversion-focused websites starting at just ₹3,999. 
            Designed to attract customers, build trust, and generate leads.
          </p>

          <div className="pricing-hero-actions">
            <button onClick={handleScrollToPlans} className="pricing-btn-primary">
              View Packages <ArrowRight className="w-5 h-5 inline ml-1" />
            </button>
            <ButtonLink to="/contact" variant="ghost" className="pricing-btn-secondary">
              Request Custom Quote
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 2. PLANS SECTION */}
      <section ref={plansRef} className="pricing-plans-section">
        <div className="pricing-section-header">
          <span className="section-tag">choose your plan</span>
          <h2 className="section-title">Flexible Packages for Every Stage</h2>
          <p className="section-desc">
            All websites include staging preview, standard mobile optimization, and basic speed optimizations.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name} 
              className={`pricing-plan-card ${plan.popular ? 'is-popular' : ''}`}
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
          ))}
        </div>
      </section>

      {/* 3. OPTIONAL ADD-ONS */}
      <section className="addons-section">
        <div className="pricing-section-header">
          <span className="section-tag">additional services</span>
          <h2 className="section-title">Optional Add-ons & Customizations</h2>
          <p className="section-desc">
            Tailor your website setup with individual features. Add any of these to your core package.
          </p>
        </div>

        <div className="addons-container">
          <div className="addons-grid">
            {optionalAddOns.map((addon, idx) => (
              <div key={idx} className="addon-card">
                <div className="addon-info">
                  <span className="addon-service">{addon.service}</span>
                </div>
                <div className="addon-price-tag">
                  <span className="addon-price">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM INQUIRY BANNER */}
      <section className="pricing-custom-banner">
        <div className="banner-glow" />
        <div className="banner-content relative z-10">
          <h3>Need a completely customized setup?</h3>
          <p>
            We build specialized databases, customer portals, inventory tracking panels, 
            e-commerce networks, and dedicated operational dashboards.
          </p>
          <ButtonLink to="/contact" variant="primary" className="banner-btn">
            Get a Bespoke Estimate →
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
