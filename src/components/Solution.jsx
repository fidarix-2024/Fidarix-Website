"use client"
import { motion } from 'framer-motion';
import { siteContent } from '../constants/site';
import Image from 'next/image';
import { CheckCircle, Zap, Shield, Target } from 'lucide-react';

export default function Solution() {
  const { solution } = siteContent;

  return (
    <section className="section bg-white rounded-[70px] -mt-16 relative z-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[45%]"
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-black tracking-[0.2em] uppercase mb-10">
              <Zap size={14} className="fill-primary" />
              {solution.badge}
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-dark mb-10 leading-[1.1] tracking-tight">
              A Complete Lead Generation <span className="text-secondary">Ecosystem</span>
            </h2>
            <p className="text-xl md:text-2xl mb-14 text-dark/70 font-bold leading-relaxed max-w-xl">
              From high-converting landing pages to fully automated WhatsApp follow-ups, we've got you covered.
            </p>
            
            <div className="space-y-8">
              {solution.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-14 h-14 bg-soft border border-border rounded-2xl flex items-center justify-center shrink-0 text-primary shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CheckCircle size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 text-dark tracking-tight">{feature.title}</h3>
                    <p className="text-lg text-dark/50 font-bold leading-[1.6] group-hover:text-dark/80 transition-colors uppercase tracking-tight">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-[55%] relative"
          >
             {/* Complex UI Mockup with assets */}
             <div className="relative z-10 p-4 bg-dark rounded-[60px] shadow-[0_50px_100px_-20px_rgba(12,6,44,0.3)] border border-white/10 group overflow-hidden">
                <div className="aspect-[4/3] relative rounded-[40px] overflow-hidden bg-dark-soft">
                  <Image src="/home-hero.png" fill alt="Automation Preview" className="object-cover opacity-80" />
                  
                  {/* Floating elements inside mockup */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-10 left-10 p-6 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl"
                  >
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-2 w-24 bg-white/30 rounded-full"></div>
                        <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                      </div>
                   </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-10 right-10 p-6 bg-primary/95 backdrop-blur-3xl border border-white/20 rounded-3xl w-48 shadow-2xl"
                  >
                    <div className="flex flex-col gap-3">
                       <Zap size={24} className="text-white fill-white" />
                       <p className="text-xs font-black text-white/60 tracking-widest uppercase">AUTO-WHATSAPP</p>
                       <p className="text-sm font-black text-white uppercase tracking-tight leading-none">Instant response triggers configured.</p>
                    </div>
                  </motion.div>
                </div>
             </div>
             
             {/* Decorative Background Assets */}
             <div className="absolute -top-10 -right-10 w-48 h-48 pointer-events-none opacity-40">
                <Image src="/rocket.png" alt="UI Icon" width={192} height={192} />
             </div>
             <div className="absolute -bottom-20 -left-20 w-56 h-56 pointer-events-none opacity-40">
                <Image src="/fidarix.png" alt="UI Icon" width={224} height={224} />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
