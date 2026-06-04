import { ImpactHero, SectionWise } from '../components/Chrome';
import { contactLinks, socialLinks, faqs } from '../data/site';
import Beams from '../components/Beams';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="page-wise contact-page">
      <ImpactHero
        lines={["Contact Us"]}
        copy="We'd love to hear about your project. Send a message or get in touch via the details to the right."
        actions={[
          <a key="meeting" className="button button-secondary" href="mailto:hello@fidarix.com" style={{ padding: '14px 26px' }}>
            Email Us
          </a>
        ]}
      >
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
      </ImpactHero>

      <SectionWise bg="bg-white">
        <div className="site-frame contact-grid">
          <div className="contact-heading-area">
            <h2 className="contact-head">Ready to build your<br/>engineered space?</h2>
          </div>

          <div className="contact-form-area">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row two-cols">
                <input placeholder="First Name *" className="field" />
                <input placeholder="Last Name *" className="field" />
              </div>

              <div className="row two-cols">
                <input placeholder="Email *" className="field" />
                <input placeholder="Phone Number *" className="field" />
              </div>

              <input placeholder="Subject *" className="field" />

              <textarea placeholder="Message *" className="textarea large" />

              <button className="send-btn">SEND MESSAGE</button>
            </form>
          </div>

          <div className="contact-card-area">
            <div className="info-card-wrapper">
              <div className="info-card-shadow"></div>
              <div className="info-card">
                {/* Rotating Badge */}
                <div className="rotating-badge">
                  <svg viewBox="0 0 100 100" width="120" height="120">
                    <defs>
                      <path id="badgeCircle" d="M 50, 50 m -35, 0 a 35,35 0 1, 1 70,0 a 35,35 0 1, 1 -70,0" />
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="#111111" />
                    <text fill="#ffffff" fontSize="8.5" fontWeight="800" letterSpacing="0.8">
                      <textPath href="#badgeCircle" startOffset="0%">
                        GET IN TOUCH • GET IN TOUCH •&nbsp;&nbsp;
                      </textPath>
                    </text>
                    {/* Centered paper plane icon */}
                    <g transform="translate(36, 36) scale(1.15)">
                      <path d="M22 2L11 13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                </div>

                <div className="card-section">
                  <h3>Address</h3>
                  <p className="card-text">AH-76, Saltlake, Sector II,<br/>Bidhannagar, Kolkata - 700091</p>
                </div>

                <div className="card-section">
                  <h3>Contact</h3>
                  <p className="card-text">
                    Mobile : +91 90882 67577<br/>
                    Phone : 033 4803 6545<br/>
                    Email : info@stehlenoindia.com
                  </p>
                </div>

                <div className="card-section">
                  <h3>Open Time</h3>
                  <p className="card-text">Monday - Friday : 10:00am - 8:00pm</p>
                </div>

                <div className="card-section">
                  <h3>Stay Connected</h3>
                  <div className="social-row">
                    <a href="https://facebook.com" className="social-pill" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                      </svg>
                    </a>
                    <a href="https://x.com" className="social-pill" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" className="social-pill" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://instagram.com" className="social-pill" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                    <a href="https://youtube.com" className="social-pill" target="_blank" rel="noreferrer" aria-label="YouTube">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.948.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.883.511 9.388.511 9.388.511s7.505 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107c.502-1.889.502-5.837.502-5.837s0-3.948-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWise>

      <SectionWise bg="bg-white">
        <div className="site-frame faq-grid">
          <div className="faq-left">
            <h2 className="display-huge">Frequently<br/>Asked<br/>Questions.</h2>
          </div>
          <div className="faq-right">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-row">
                <div className="faq-question">{faq.question}</div>
                <div className="faq-plus">+</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWise>
    </div>
  );
}

export default ContactPage;