import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../components/Chrome';
import { services } from '../data/site';

function ServicesPage() {
  return (
    <div className="page-wise">
      <ImpactHero
        lines={["Our", "Services"]}
        copy="Everything you need to launch, polish, and keep a strong website running. Choose one focused service or combine them into a larger build."
        actions={[
          <ButtonLink key="quote" to="/contact" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Request Quote
          </ButtonLink>
        ]}
      />

      <SectionWise bg="bg-burgundy">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>
          Core <br /> Offers
        </h2>
        <Marquee 
          items={services.map(s => s.title.toUpperCase() + " • ")} 
          speed="15s"
        />
      </SectionWise>

      <section className="bg-white">
        <div className="foundations-grid" style={{ background: '#eee' }}>
          {services.map((service, index) => (
            <div key={service.title} className="foundation-item" style={{ background: index % 2 === 0 ? '#fff' : '#f9f9f9', color: '#000' }}>
              <p className="eyebrow" style={{ color: 'rgba(0,0,0,0.4)' }}>{service.timeline}</p>
              <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>{service.title}</h3>
              <p className="body-copy" style={{ color: 'rgba(0,0,0,0.6)', marginTop: 20, marginBottom: 30 }}>
                {service.subtitle}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {service.features.map(f => (
                  <span key={f} className="pill" style={{ fontSize: '0.8rem' }}>{f}</span>
                ))}
              </div>
              <p style={{ marginTop: 40, fontWeight: 700 }}>Starting from {service.price}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionWise bg="bg-dark">
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <h2 className="display-huge" style={{ color: '#fff' }}>Flexible Scaling</h2>
          <p className="body-copy" style={{ margin: '30px auto', maxWidth: '600px', color: 'rgba(255,255,255,0.6)' }}>
            Each package starts with a clear scope, timeline, and call to action. We work in sprints to ensure rapid delivery without quality loss.
          </p>
          <ButtonLink to="/pricing" style={{ background: 'var(--primary)', color: '#fff', borderRadius: '999px', padding: '20px 50px' }}>View Detailed Pricing</ButtonLink>
        </div>
      </SectionWise>
    </div>
  );
}

export default ServicesPage;