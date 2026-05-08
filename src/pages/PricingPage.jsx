import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../components/Chrome';
import { pricingPlans } from '../data/site';

function PricingPage() {
  return (
    <div className="page-wise">
      <ImpactHero
        lines={["Pricing", "Plans"]}
        copy="Clear packages, clean deliverables, and room for custom scope. Most clients pick one of the three plans below."
        actions={[
          <ButtonLink key="contact" to="/contact" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Get a Custom Quote
          </ButtonLink>
        ]}
      />

      <SectionWise bg="bg-burgundy">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>
          Simple <br /> Packaging
        </h2>
        <Marquee 
          items={["STARTER • ", "BUSINESS • ", "PREMIUM • ", "CUSTOM • ", "STARTER • ", "BUSINESS • ", "PREMIUM • ", "CUSTOM • "]} 
          speed="20s"
        />
      </SectionWise>

      <section className="bg-white">
        <div className="foundations-grid" style={{ background: '#eee' }}>
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="foundation-item" style={{ 
              background: plan.popular ? 'var(--wise-dark)' : '#fff', 
              color: plan.popular ? '#fff' : '#000',
              border: plan.popular ? 'none' : '1px solid rgba(0,0,0,0.1)'
            }}>
              <p className="eyebrow" style={{ opacity: 0.6 }}>{plan.delivery}</p>
              <h3 className="display-huge" style={{ fontSize: '3.5rem', marginTop: 20 }}>{plan.name}</h3>
              <p className="display-huge" style={{ fontSize: '4rem', marginTop: 30, color: 'var(--primary)' }}>{plan.price}</p>
              <ul className="check-list" style={{ marginTop: 40, marginBottom: 40, listStyle: 'none', padding: 0 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ marginBottom: 15, fontSize: '1.1rem' }}>✓ {f}</li>
                ))}
              </ul>
              <ButtonLink to="/contact" style={{ 
                width: '100%', 
                background: plan.popular ? 'var(--wise-green)' : '#000', 
                color: plan.popular ? '#000' : '#fff',
                borderRadius: '999px',
                padding: '20px'
              }}>Choose Plan</ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <SectionWise bg="bg-dark">
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <h2 className="display-huge" style={{ color: '#fff' }}>Custom Scope?</h2>
          <p className="body-copy" style={{ color: 'rgba(255,255,255,0.6)', margin: '30px 0', maxWidth: '600px', margin: '30px auto' }}>
            We can quote custom builds for web apps, SEO retainers, or multi-brand systems.
          </p>
          <ButtonLink to="/contact" style={{ borderRadius: '999px', padding: '20px 60px', background: 'var(--primary)', color: '#fff' }}>Request Custom Quote</ButtonLink>
        </div>
      </SectionWise>
    </div>
  );
}

export default PricingPage;