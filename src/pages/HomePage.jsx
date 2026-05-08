import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../components/Chrome';
import { services, projects } from '../data/site';

function HomePage() {
  return (
    <div className="page-wise">
      {/* 1. HERO SECTION */}
      <ImpactHero
        lines={["Fidarix", "Design"]}
        copy="Modern websites built to look premium and convert cleanly. We create fast, responsive agency sites with a calm editorial feel."
        actions={[
          <ButtonLink key="get-started" to="/contact" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Get Started
          </ButtonLink>
        ]}
      />

      {/* 2. INTRO & MARQUEE */}
      <SectionWise bg="bg-burgundy">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>
          Crafting for <br /> the global web
        </h2>
        <Marquee 
          items={[
            "BRANDING", "UI/UX DESIGN", "WEB DEVELOPMENT", "MOTION GRAPHICS", "STRATEGY",
            "BRANDING", "UI/UX DESIGN", "WEB DEVELOPMENT", "MOTION GRAPHICS", "STRATEGY"
          ]} 
          speed="20s"
        />
      </SectionWise>

      {/* 3. FOUNDATIONS GRID */}
      <section className="bg-burgundy">
        <div className="foundations-grid">
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>01 Foundations</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>Typography</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              Space Grotesk & Manrope. A pairing built for clarity and character across all digital surfaces.
            </p>
          </div>
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>02 Foundations</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>Color</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              The Fidarix Blue. A spectrum from deep violet to electric cyan, balanced with editorial whites.
            </p>
          </div>
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>03 Foundations</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>Interactions</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              Motion that matters. Masked reveals and smooth transitions that guide the user journey.
            </p>
          </div>
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>04 Foundations</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>Layout</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              Grid-based precision. A flexible system that scales from mobile screens to 4K displays.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SHOWCASE SECTION (Horizontal Scroll feel) */}
      <SectionWise bg="bg-white">
        <div style={{ display: 'flex', overflowX: 'auto', gap: 40, paddingBottom: 40, scrollSnapType: 'x mandatory' }}>
          <div className="wise-card" style={{ background: 'var(--wise-yellow)', color: '#000', scrollSnapAlign: 'start' }}>
            <h3 className="display-huge" style={{ fontSize: '4rem' }}>Digital <br /> Branding</h3>
            <p className="body-copy">Visual identities that resonate in a digital-first world.</p>
          </div>
          <div className="wise-card" style={{ background: 'var(--wise-pink)', color: '#000', scrollSnapAlign: 'start' }}>
            <h3 className="display-huge" style={{ fontSize: '4rem' }}>Product <br /> Design</h3>
            <p className="body-copy">Interfaces built for utility and delight.</p>
          </div>
          <div className="wise-card" style={{ background: 'var(--wise-dark)', color: '#fff', scrollSnapAlign: 'start' }}>
            <h3 className="display-huge" style={{ fontSize: '4rem' }}>Motion <br /> Systems</h3>
            <p className="body-copy">Bringing brands to life through intentional movement.</p>
          </div>
        </div>
      </SectionWise>

      {/* 5. PHILOSOPHY */}
      <SectionWise bg="bg-dark">
        <div style={{ padding: '100px 0' }}>
          <h2 className="display-huge" style={{ color: '#fff', textAlign: 'center' }}>
            MAX IMPACT <br /> MIN FRICTION
          </h2>
          <p className="body-copy" style={{ textAlign: 'center', maxWidth: '600px', margin: '40px auto 0', color: 'rgba(255,255,255,0.6)' }}>
            A new design system, made to disrupt old patterns. We don't just build websites; we build digital legacies.
          </p>
        </div>
      </SectionWise>

      {/* 6. FINAL CTA & FOOTER MARQUEE */}
    </div>
  );
}

export default HomePage;