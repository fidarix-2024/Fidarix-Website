import { useState } from 'react';
import { SectionWise, Marquee } from '../components/Chrome';
import { faqs } from '../data/site';
import Beams from '../components/Beams';
import './ContactPage.css';

function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-wise contact-page">
      {/* ── Full-viewport Contact Hero ── */}
      <section className="contact-hero">
        {/* Beams WebGL fills the entire section */}
        <div className="contact-hero-canvas">
          <Beams
            beamWidth={6}
            beamHeight={75}
            beamNumber={50}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        {/* Gradient vignette overlay so text pops */}
        <div className="contact-hero-overlay" />

        {/* Centered content */}
        <div className="contact-hero-content">

          <h1 className="contact-hero-title">Contact Us</h1>

          <p className="contact-hero-copy">
            We&rsquo;d love to hear about your project. Send a message or get in touch via details below.
          </p>

          <div className="contact-hero-actions">
            <a className="contact-hero-btn-primary" href="mailto:hello@fidarix.com">
              Email Us
            </a>
            <a className="contact-hero-btn-ghost" href="#contact-form">
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* ── Marquee ticker strip ── */}
      <div className="contact-ticker-wrap">
        <Marquee
          speed="25s"
          items={[
            'Web Development',
            '✳',
            'UI/UX Design',
            '✳',
            'Brand Identity',
            '✳',
            'SEO Optimization',
            '✳',
            'Custom Web Apps',
            '✳',
            'Website Maintenance',
            '✳',
            'Modern Tech Stack',
            '✳',
            'Conversion Strategy',
            '✳',
            'Landing Pages',
            '✳',
            'Design Systems',
            '✳',
            'Performance Builds',
            '✳',
          ]}
        />
      </div>

      <SectionWise bg="bg-white" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div className="site-frame contact-grid">
          <div className="contact-heading-area">
            <h2 className="contact-head">Ready to build your<br />digital presence?</h2>
          </div>

          <div className="contact-form-area">
            <form id="contact-form" className="contact-form" onSubmit={(e) => e.preventDefault()}>
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

                <div className="card-section">
                  <h3>Address</h3>
                  <p className="card-text">Sector-3 Dwarka <br />New Delhi - 110059</p>
                </div>

                <div className="card-section">
                  <h3>Contact</h3>
                  <p className="card-text">
                    Mobile : +91 9876543210<br />
                    Email : info@fidarix.com
                  </p>
                </div>

                <div className="card-section">
                  <h3>Open Time</h3>
                  <p className="card-text">Monday - Friday : 9:00am - 9:00pm</p>
                </div>

                <div className="card-section">
                  <h3>Stay Connected</h3>
                  <div className="social-row">
                    <a href="https://facebook.com" className="social-pill" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                      </svg>
                    </a>
                    <a href="https://x.com" className="social-pill" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com" className="social-pill" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://instagram.com" className="social-pill" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWise>

      <SectionWise bg="bg-white" className="contact-faq-section" style={{ paddingTop: '20px' }}>
        <div className="site-frame faq-grid">
          <div className="faq-left">
            <h2 className="display-huge">Frequently<br />Asked<br />Questions.</h2>
          </div>
          <div className="faq-right">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.question;
              return (
                <div key={faq.question} className={`faq-row ${isOpen ? 'open' : ''}`} onClick={() => setOpenFaq(isOpen ? null : faq.question)}>
                  <div className="faq-question-container">
                    <div className="faq-question">{faq.question}</div>
                    <div className="faq-plus">{isOpen ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer-container" style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0, overflow: 'hidden', transition: 'all 0.3s ease' }}>
                    <div className="faq-answer">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWise>
    </div>
  );
}

export default ContactPage;