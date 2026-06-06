import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../../components/common/Layout';
import { contactLinks, socialLinks, faqs } from '../../data/site';

function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ImpactHero
        lines={["Get in", "Touch"]}
        copy="Book a call, send a message, or ask for a custom scope. We respond to all serious inquiries within 24 hours."
        actions={[
          <a key="meeting" className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-10 rounded-full bg-white text-black font-extrabold text-[1.2rem] tracking-[-0.01em] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)]" href="https://calendly.com" target="_blank" rel="noreferrer">
            Book a Meeting
          </a>
        ]}
      />

      <SectionWise bg="bg-burgundy">
        <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold tracking-tight leading-[0.9] uppercase text-center text-white mb-[60px]">
          Let's <br /> Talk
        </h2>
        <Marquee 
          items={contactLinks.map(c => c.label.toUpperCase() + " • ")} 
          speed="20s"
        />
      </SectionWise>

      <SectionWise bg="bg-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inquiry Form Card */}
          <div className="border border-white/8 rounded-[48px] bg-white/[0.03] p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col">
            <p className="text-xs font-extrabold text-white/60 uppercase tracking-[0.22em]">01 Start a Project</p>
            <h3 className="text-[3rem] font-extrabold text-white mt-5 tracking-tight">Inquiry Form</h3>
            <div className="mt-10 flex flex-col gap-5">
              <input 
                className="border-b-2 border-white/15 bg-transparent text-white py-5 text-[1.2rem] outline-none placeholder:text-white/30 focus:border-primary transition-colors" 
                placeholder="Full name" 
              />
              <input 
                className="border-b-2 border-white/15 bg-transparent text-white py-5 text-[1.2rem] outline-none placeholder:text-white/30 focus:border-primary transition-colors" 
                placeholder="Email address" 
              />
              <textarea 
                className="border-b-2 border-white/15 bg-transparent text-white py-5 text-[1.2rem] min-h-[100px] outline-none placeholder:text-white/30 focus:border-primary transition-colors resize-none" 
                placeholder="What's on your mind?" 
              />
              <ButtonLink to="#" variant="primary" className="w-full text-center mt-5">
                Send Message
              </ButtonLink>
            </div>
          </div>

          {/* Direct Access Card */}
          <div className="border border-white/8 rounded-[48px] bg-gradient-to-br from-amber-400/90 to-yellow-500/90 p-[clamp(26px,4.8vw,46px)] shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col text-black">
            <p className="text-xs font-extrabold text-black/60 uppercase tracking-[0.22em]">02 Direct Access</p>
            <h3 className="text-[3rem] font-extrabold text-black mt-5 tracking-tight">Connect</h3>
            <div className="mt-10 flex flex-col gap-[30px]">
              {contactLinks.map(link => (
                <a key={link.label} href={link.href} className="text-[1.5rem] font-bold underline text-black hover:text-black/70 transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="mt-10 flex flex-wrap gap-[15px]">
                {socialLinks.map(social => (
                  <a key={social.label} href={social.href} className="bg-black text-white border-none px-5 py-2.5 rounded-full font-bold text-sm no-underline hover:-translate-y-0.5 transition-transform">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWise>

      <SectionWise bg="bg-dark">
        <div className="text-center py-[100px]">
          <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold text-white tracking-tight uppercase">Global Reach</h2>
          <p className="text-white/60 text-[1.03rem] leading-[1.7] my-[30px]">Based in the cloud, working for the world.</p>
          <div className="text-[2rem] font-extrabold text-white/30 tracking-tight">LONDON • NEW YORK • TOKYO • DUBAI</div>
        </div>
      </SectionWise>

      <SectionWise bg="bg-white">
        <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold text-white tracking-tight uppercase text-center mb-[60px]">Frequently Asked Questions</h2>
        <div className="max-w-[800px] mx-auto flex flex-col gap-[30px]">
          {faqs.map(faq => (
            <div key={faq.question} className="p-[30px] border border-white/8 rounded-[24px] bg-white/[0.03] shadow-[0_28px_80px_rgba(0,0,0,0.6)]">
              <h3 className="text-[1.4rem] font-bold text-white mb-[15px]">{faq.question}</h3>
              <p className="text-white/60 text-[1.03rem] leading-[1.7] m-0">{faq.answer}</p>
            </div>
          ))}
        </div>
      </SectionWise>
    </div>
  );
}

export default ContactPage;
