import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../components/Chrome';
import { contactLinks, socialLinks, faqs } from '../data/site';

function ContactPage() {
  return (
    <div className="page-wise">
      <ImpactHero
        lines={["Get in", "Touch"]}
        copy="Book a call, send a message, or ask for a custom scope. We respond to all serious inquiries within 24 hours."
        actions={[
          <a key="meeting" className="button button-primary" href="https://calendly.com" target="_blank" rel="noreferrer" style={{ padding: '20px 40px', fontSize: '1.2rem', background: '#fff', color: '#000' }}>
            Book a Meeting
          </a>
        ]}
      />

      <SectionWise bg="bg-burgundy">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>
          Let's <br /> Talk
        </h2>
        <Marquee 
          items={contactLinks.map(c => c.label.toUpperCase() + " • ")} 
          speed="20s"
        />
      </SectionWise>

      <section className="bg-white">
        <div className="foundations-grid" style={{ background: 'transparent' }}>
          <div className="foundation-item" style={{ background: '#0a0d18', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-xl)' }}>
            <p className="eyebrow" style={{ opacity: 0.6 }}>01 Start a Project</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20, color: '#fff' }}>Inquiry Form</h3>
            <div style={{ marginTop: 40, display: 'grid', gap: 20 }}>
              <input className="field" placeholder="Full name" style={{ border: 'none', borderBottom: '2px solid rgba(255, 255, 255, 0.15)', borderRadius: 0, padding: '20px 0', fontSize: '1.2rem', background: 'transparent', color: '#fff' }} />
              <input className="field" placeholder="Email address" style={{ border: 'none', borderBottom: '2px solid rgba(255, 255, 255, 0.15)', borderRadius: 0, padding: '20px 0', fontSize: '1.2rem', background: 'transparent', color: '#fff' }} />
              <textarea className="textarea" placeholder="What's on your mind?" style={{ border: 'none', borderBottom: '2px solid rgba(255, 255, 255, 0.15)', borderRadius: 0, padding: '20px 0', fontSize: '1.2rem', minHeight: '100px', background: 'transparent', color: '#fff' }} />
              <ButtonLink to="#" style={{ width: '100%', padding: '20px', background: '#fff', color: '#000', borderRadius: '999px', marginTop: 20, textAlign: 'center', fontWeight: 'bold' }}>Send Message</ButtonLink>
            </div>
          </div>
          <div className="foundation-item" style={{ background: 'var(--wise-yellow)', color: '#000', borderRadius: 'var(--radius-xl)' }}>
            <p className="eyebrow" style={{ opacity: 0.6 }}>02 Direct Access</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20, color: '#000' }}>Connect</h3>
            <div style={{ marginTop: 40, display: 'grid', gap: 30 }}>
              {contactLinks.map(link => (
                <a key={link.label} href={link.href} style={{ fontSize: '1.5rem', fontWeight: 700, textDecoration: 'underline', color: '#000' }}>{link.label}</a>
              ))}
              <div style={{ marginTop: 40, display: 'flex', gap: 15, flexWrap: 'wrap' }}>
                {socialLinks.map(social => (
                  <a key={social.label} href={social.href} className="pill" style={{ background: '#000', color: '#fff', border: 'none', padding: '10px 20px', textDecoration: 'none' }}>{social.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWise bg="bg-dark">
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2 className="display-huge" style={{ color: '#fff' }}>Global Reach</h2>
          <p className="body-copy" style={{ color: 'rgba(255,255,255,0.6)', margin: '30px 0' }}>Based in the cloud, working for the world.</p>
          <div className="display-huge" style={{ fontSize: '2rem', opacity: 0.3 }}>LONDON • NEW YORK • TOKYO • DUBAI</div>
        </div>
      </SectionWise>

      <SectionWise bg="bg-white">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: 30 }}>
          {faqs.map(faq => (
            <div key={faq.question} className="faq-card" style={{ padding: '30px', background: 'var(--surface-soft)' }}>
              <h3 className="section-title" style={{ fontSize: '1.4rem', marginBottom: 15 }}>{faq.question}</h3>
              <p className="body-copy">{faq.answer}</p>
            </div>
          ))}
        </div>
      </SectionWise>
    </div>
  );
}

export default ContactPage;