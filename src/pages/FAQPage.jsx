import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../components/Chrome';
import { faqs } from '../data/site';

function FAQPage() {
  return (
    <div className="page-wise">
      <ImpactHero
        lines={["Help &", "FAQ"]}
        copy="Straight answers on price, timing, revisions, hosting, and SEO. The FAQ page removes common objections before someone gets to the contact form."
        actions={[
          <ButtonLink key="contact" to="/contact" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Still Have Questions?
          </ButtonLink>
        ]}
      />

      <SectionWise bg="bg-burgundy">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>
          Clear <br /> Answers
        </h2>
        <Marquee 
          items={["PRICING • ", "TIMING • ", "REVISIONS • ", "HOSTING • ", "SEO • ", "PRICING • ", "TIMING • ", "REVISIONS • ", "HOSTING • ", "SEO • "]} 
          speed="20s"
        />
      </SectionWise>

      <section className="bg-white">
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 24px' }}>
          {faqs.map((item, i) => (
            <details key={item.question} style={{ 
              padding: '40px 0', 
              borderBottom: '1px solid #eee',
              cursor: 'pointer'
            }}>
              <summary style={{ 
                listStyle: 'none', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center'
              }}>
                <h3 className="display-huge" style={{ fontSize: '2.5rem', flex: 1 }}>{item.question}</h3>
                <span style={{ fontSize: '2rem', fontWeight: 700 }}>+</span>
              </summary>
              <div style={{ marginTop: 30, maxWidth: '700px' }}>
                <p className="body-copy" style={{ fontSize: '1.2rem' }}>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <SectionWise bg="bg-dark">
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2 className="display-huge" style={{ color: '#fff' }}>No Hidden Details</h2>
          <p className="body-copy" style={{ color: 'rgba(255,255,255,0.6)', margin: '30px 0' }}>Transparency is our core foundation. We don't hide behind fine print.</p>
          <ButtonLink to="/contact" style={{ borderRadius: '999px', padding: '20px 60px', background: 'var(--wise-green)', color: '#000' }}>Talk to us directly</ButtonLink>
        </div>
      </SectionWise>
    </div>
  );
}

export default FAQPage;