import { useState, useRef } from 'react';
import { SectionWise, Marquee } from '../../components/common/Layout';
import { faqs } from '../../data/site';
import ContactBackground from '../../components/ContactComponent/ContactBackground';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SEO from '../../components/common/SEO';

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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Fidarix",
      "url": "https://fidarix.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@fidarix.com",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Fidarix to start scaling your business with premium digital solutions, performance websites, and technical SEO."
        canonical="/contact"
        schema={schemaData}
      />
      <ToastContainer position="bottom-right" theme="dark" />
      {/* ── Full-viewport Contact Hero ── */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Beams WebGL fills the entire section */}
        <div className="absolute inset-0 w-full h-full z-0">
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
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_0%,rgba(0,0,0,0.55)_100%),linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_30%,transparent_70%,rgba(0,0,0,0.6)_100%)]" />

        {/* Centered content */}
        <div className="relative z-[2] flex flex-col items-center text-center px-6 max-w-[800px] mt-[86px]">
          <h1 className="font-['Space_Grotesk'] text-[clamp(2.8rem,8vw,6rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white m-0 mb-5 animate-[ch-slidein_0.9s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">Contact Us</h1>

          <p className="text-[clamp(1rem,2vw,1.15rem)] leading-[1.65] text-white/70 max-w-[52ch] m-0 mb-10 animate-[ch-fadein_0.9s_ease_0.45s_both]">
            We&rsquo;d love to hear about your project. Send a message or get in touch via details below.
          </p>
        </div>
      </section>

      {/* ── Marquee ticker strip ── */}
      <div className="bg-white border-y border-black/10 overflow-hidden py-6">
        <div className="inline-flex items-center gap-12 animate-marquee whitespace-nowrap pr-12" style={{ animationDuration: '25s' }}>
          {[
            'Web Development', '✳', 'UI/UX Design', '✳', 'Brand Identity', '✳', 'SEO Optimization', '✳', 'Custom Web Apps', '✳', 'Website Maintenance', '✳', 'Modern Tech Stack', '✳', 'Conversion Strategy', '✳', 'Landing Pages', '✳', 'Design Systems', '✳', 'Performance Builds', '✳',
            'Web Development', '✳', 'UI/UX Design', '✳', 'Brand Identity', '✳', 'SEO Optimization', '✳', 'Custom Web Apps', '✳', 'Website Maintenance', '✳', 'Modern Tech Stack', '✳', 'Conversion Strategy', '✳', 'Landing Pages', '✳', 'Design Systems', '✳', 'Performance Builds', '✳'
          ].map((item, i) => (
            <span key={i} className={`font-['Space_Grotesk'] text-[clamp(1.5rem,3vw,2.5rem)] font-black tracking-[0.05em] uppercase text-black ${item === '✳' ? 'text-[#9b4dff]' : ''}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <SectionWise bg="bg-white" style={{ paddingTop: '20px', paddingBottom: '40px' }} className="[&_.display-huge]:text-[#111]">
        <div className="w-[min(1600px,calc(100%-80px))] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] md:grid-rows-[auto_1fr] gap-10 md:gap-x-15 md:gap-y-7 items-stretch py-15">
          <div className="md:col-start-1 md:row-start-1">
            <h2 className="font-['Space_Grotesk'] text-[clamp(2.4rem,4vw,3.4rem)] font-bold leading-[1.1] text-[#111] m-0 normal-case whitespace-nowrap">Ready to build your<br />digital presence?</h2>
          </div>

          <div className="md:col-start-1 md:row-start-2 flex flex-col">
            <form ref={formRef} id="contact-form" className="flex flex-col gap-5 h-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-0">
                <input name="firstName" required placeholder="First Name *" className="p-[18px_20px] border-[1.5px] border-[#111] rounded-md bg-[#f9f9f9] font-['Manrope'] text-[15px] text-[#111] w-full outline-none transition-colors duration-200 appearance-none placeholder:text-[#7c7c7c] focus:border-[#111] focus:bg-white" />
                <input name="lastName" required placeholder="Last Name *" className="p-[18px_20px] border-[1.5px] border-[#111] rounded-md bg-[#f9f9f9] font-['Manrope'] text-[15px] text-[#111] w-full outline-none transition-colors duration-200 appearance-none placeholder:text-[#7c7c7c] focus:border-[#111] focus:bg-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-0">
                <input name="email" type="email" required placeholder="Email *" className="p-[18px_20px] border-[1.5px] border-[#111] rounded-md bg-[#f9f9f9] font-['Manrope'] text-[15px] text-[#111] w-full outline-none transition-colors duration-200 appearance-none placeholder:text-[#7c7c7c] focus:border-[#111] focus:bg-white" />
                <input name="phone" placeholder="Phone Number" className="p-[18px_20px] border-[1.5px] border-[#111] rounded-md bg-[#f9f9f9] font-['Manrope'] text-[15px] text-[#111] w-full outline-none transition-colors duration-200 appearance-none placeholder:text-[#7c7c7c] focus:border-[#111] focus:bg-white" />
              </div>

              <input name="subject" required placeholder="Subject *" className="p-[18px_20px] border-[1.5px] border-[#111] rounded-md bg-[#f9f9f9] font-['Manrope'] text-[15px] text-[#111] w-full outline-none transition-colors duration-200 appearance-none placeholder:text-[#7c7c7c] focus:border-[#111] focus:bg-white" />

              <textarea name="message" required placeholder="Message *" className="min-h-[180px] p-[18px_20px] border-[1.5px] border-[#111] rounded-md bg-[#f9f9f9] font-['Manrope'] text-[15px] text-[#111] w-full resize-y outline-none transition-colors duration-200 appearance-none placeholder:text-[#7c7c7c] focus:border-[#000] focus:bg-white" />

              <button type="submit" disabled={isSubmitting} className="bg-black text-white border border-black rounded-none p-[18px_36px] font-['Space_Grotesk'] font-bold text-[14px] tracking-[0.1em] cursor-pointer self-start transition-all duration-200 hover:bg-white hover:text-black hover:-translate-y-[2px]" style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>

          <div className="md:col-start-2 md:row-start-2 flex flex-col mt-12 md:mt-0">
            <div className="relative w-full sm:w-[calc(100%-14px)] h-full sm:h-[calc(100%-14px)]">
              <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 w-full h-full bg-black z-[1] rounded"></div>
              <div className="relative w-full h-full bg-white border border-[#111] rounded p-[36px_28px] sm:p-[44px_40px] z-[2] flex flex-col justify-between shadow-none gap-6 sm:gap-0">
                <div className="flex flex-col mb-4 sm:mb-0">
                  <h3 className="font-['Space_Grotesk'] text-[28px] font-bold text-[#111] m-0 mb-2.5">Address</h3>
                  <p className="font-['Manrope'] text-[15px] leading-[1.6] text-[#555] m-0">Sector-3 Dwarka <br />New Delhi - 110059</p>
                </div>

                <div className="flex flex-col mb-4 sm:mb-0">
                  <h3 className="font-['Space_Grotesk'] text-[28px] font-bold text-[#111] m-0 mb-2.5">Contact</h3>
                  <p className="font-['Manrope'] text-[15px] leading-[1.6] text-[#555] m-0">
                    Mobile : +91 87961 98381<br />
                    Email : info@fidarix.com
                  </p>
                </div>

                <div className="flex flex-col mb-4 sm:mb-0">
                  <h3 className="font-['Space_Grotesk'] text-[28px] font-bold text-[#111] m-0 mb-2.5">Open Time</h3>
                  <p className="font-['Manrope'] text-[15px] leading-[1.6] text-[#555] m-0">Monday - Sunday : 10:00am - 7:00pm</p>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-['Space_Grotesk'] text-[28px] font-bold text-[#111] m-0 mb-2.5">Stay Connected</h3>
                  <div className="flex gap-3 mt-3">
                    <a href="https://wa.me/918796198381" className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:scale-110 hover:bg-[#222] [&>svg]:block" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/fidarix/?viewAsMember=true" className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:scale-110 hover:bg-[#222] [&>svg]:block" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWise>

      {/* 5. FAQ SECTION */}
      <div className="bg-white text-black w-full border-t border-black/10 mt-[60px]">
        <section className="py-[100px] px-[4vw] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.5fr] gap-10 md:gap-[80px] items-start">
            <div className="md:sticky md:top-[120px] flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="font-['Space_Grotesk'] text-[clamp(2.5rem,5vw,3.8rem)] font-extrabold leading-[1.05] uppercase m-0 mb-5 text-[#111]">Frequently<br />Asked<br />Questions</h2>
              <p className="text-black/60 text-[0.98rem] leading-[1.6] m-0 max-w-[400px]">
                Have questions about our services? Here are answers to common queries. If you need a custom package, feel free to contact us.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.question;
                return (
                  <div 
                    key={faq.question} 
                    className={`group py-6 border-b border-black/10 flex flex-col justify-center cursor-pointer transition-colors duration-300 hover:border-[#7c3aed]/40 ${isOpen ? 'open' : ''}`}
                    onClick={() => setOpenFaq(isOpen ? null : faq.question)}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className={`font-['Space_Grotesk'] font-bold text-[clamp(1.1rem,1.3vw,1.35rem)] leading-[1.4] transition-colors duration-300 group-hover:text-[#7c3aed] ${isOpen ? 'text-[#7c3aed]' : 'text-black'}`}>{faq.question}</span>
                      <span className={`text-[1.8rem] font-light shrink-0 ml-4 transition-all duration-300 ${isOpen ? 'text-[#7c3aed]' : 'text-black/40'}`}>{isOpen ? '−' : '+'}</span>
                    </div>
                    <div 
                      style={{ 
                        maxHeight: isOpen ? '250px' : '0', 
                        opacity: isOpen ? 1 : 0, 
                        overflow: 'hidden', 
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
                      }}
                    >
                      <p className="m-0 pt-4 pb-1 text-[0.96rem] leading-[1.6] text-black/70">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
