import { useState, useRef } from 'react';
import { SectionWise, Marquee } from '../../components/common/Layout';
import { faqs } from '../../data/site';
import ContactBackground from '../../components/ContactComponent/ContactBackground';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactPage.css';

function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    
    try {
      const response = await fetch("https://formspree.io/f/xrevowek", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Thank you for trusting us!! pusWe'll get back to you :)");
        formRef.current.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error(data.errors.map(error => error.message).join(", "));
        } else {
          toast.error("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      toast.error("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wise contact-page">
      <ToastContainer position="bottom-right" theme="dark" />
      {/* ── Full-viewport Contact Hero ── */}
      <section className="contact-hero">
        {/* Beams WebGL fills the entire section */}
        <div className="contact-hero-canvas">
          <ContactBackground
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

          <div className="contact-hero-socials flex flex-row gap-6 mt-10 justify-center">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white no-underline group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]" aria-label="LinkedIn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-primary transition-colors">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white no-underline group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]" aria-label="Instagram">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary transition-colors">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="mailto:hello@fidarix.com" className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white no-underline group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]" aria-label="Email Us">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary transition-colors">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
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
            <form ref={formRef} id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <div className="row two-cols">
                <input name="firstName" required placeholder="First Name *" className="field" />
                <input name="lastName" required placeholder="Last Name *" className="field" />
              </div>

              <div className="row two-cols">
                <input name="email" type="email" required placeholder="Email *" className="field" />
                <input name="phone" placeholder="Phone Number" className="field" />
              </div>

              <input name="subject" required placeholder="Subject *" className="field" />

              <textarea name="message" required placeholder="Message *" className="textarea large" />

              <button type="submit" disabled={isSubmitting} className="send-btn" style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
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
                    <a href="https://wa.me/1234567890" className="social-pill" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
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
