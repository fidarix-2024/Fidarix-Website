"use client"
import ContactForm from './ContactForm';
import { MessageCircle, Zap, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="section py-48 bg-white rounded-b-[70px] -mt-16 relative z-10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
      {/* Decorative Assets */}
      <div className="absolute -right-20 top-20 w-80 h-80 opacity-5 pointer-events-none group hover:opacity-20 transition-opacity">
        <Image src="/planet.png" alt="UI Decoration" width={320} height={320} className="animate-float" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-black tracking-[0.2em] uppercase mb-12"
            >
              <Zap size={14} className="fill-primary" />
              READY TO GROW?
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black text-dark mb-10 leading-[0.95] tracking-tight">Scale Your Leads <span className="text-secondary">Automatically</span></h2>
            <p className="text-xl md:text-2xl text-dark/70 mb-16 leading-relaxed max-w-lg font-bold">
              Book a free 15-minute demo call. We'll show you exactly how many leads you're currently losing and how we can fix it.
            </p>
            
            <div className="flex flex-col gap-10">
               <div className="flex items-center gap-8">
                 <div className="w-16 h-16 bg-soft rounded-3xl shadow-[0_15px_30px_-5px_rgba(217,27,92,0.1)] flex items-center justify-center text-primary border border-border group hover:bg-primary group-hover:text-white transition-all">
                    <MessageCircle size={32} />
                 </div>
                 <div>
                    <h4 className="text-2xl font-black text-dark tracking-tight mb-2">Have Questions?</h4>
                    <p className="text-dark/40 font-black uppercase text-xs tracking-widest leading-none">Text us on WhatsApp: +91 98765 43210</p>
                 </div>
               </div>
               
               <button className="btn btn-primary lg:max-w-sm py-6 text-xl rounded-3xl group shadow-[0_20px_50px_-5px_rgba(217,27,92,0.3)]">
                 <MessageCircle size={26} fill="currentColor" className="mr-3" /> Chat on WhatsApp <ArrowRight size={22} className="ml-2 group-hover:translate-x-1" />
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full bg-[#0c062c] p-12 md:p-20 rounded-[60px] shadow-[0_60px_100px_-20px_rgba(12,6,44,0.3)] border border-white/5 relative group perspective-[1000px]"
          >
             <div className="relative z-10">
                <div className="mb-14">
                   <h3 className="text-white text-5xl font-black tracking-tight mb-4">Start Your Rocket Site</h3>
                   <p className="text-white/40 font-black uppercase tracking-widest text-xs">Fill the form to get a custom roadmap in 24 hours.</p>
                </div>
                <ContactForm />
             </div>
             
             {/* Decorative Background Assets */}
             <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-5 pointer-events-none group-hover:rotate-45 transition-transform duration-1000">
                <Image src="/rocket.png" alt="UI Decoration" width={256} height={256} />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
