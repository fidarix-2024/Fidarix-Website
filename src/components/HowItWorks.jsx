"use client"
import { motion } from 'framer-motion';
import { siteContent } from '../constants/site';
import { Zap, Play } from 'lucide-react';
import Image from 'next/image';

export default function HowItWorks() {
  const { howItWorks } = siteContent;

  return (
    <section className="section bg-white rounded-[70px] -mt-20 relative z-30 pb-48">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-32 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-black tracking-[0.2em] uppercase mb-10"
          >
            <Zap size={14} className="fill-primary" />
            THE PROCESS
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-dark mb-8 leading-tight tracking-tight">The 4-Step Road to Customer Growth</h2>
          <p className="text-xl md:text-2xl text-dark/40 font-bold leading-relaxed">From initial audit to fully scaled automation, we're with you every step of the way.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative items-stretch">
          {howItWorks.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group h-full flex flex-col"
            >
              {/* Process Connector (Rocket SaaS style) */}
              {index < howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-1/2 w-full h-[1px] bg-dark/5 border-dashed border-t-[3px] border-dark/10 -z-10 translate-x-20"></div>
              )}
              
              <div className="mb-14 w-28 h-28 bg-soft border border-border rounded-[40px] flex items-center justify-center relative group-hover:bg-primary group-hover:text-white group-hover:-translate-y-4 transition-all duration-500 shadow-2xl shadow-dark/5 group-hover:shadow-primary/30">
                <span className="text-5xl font-black">{step.step}</span>
                
                {/* Floating internal stats like reference */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Zap size={18} className="text-primary fill-primary" />
                </div>
              </div>

              <div className="flex-1">
                 <h3 className="text-3xl font-black text-dark leading-tight mb-6 tracking-tight">{step.title}</h3>
                 <p className="text-lg font-bold text-dark/40 leading-relaxed group-hover:text-dark/80 transition-colors">{step.description}</p>
              </div>

              {/* Decorative Element on Step 2 (Asset from public) */}
              {index === 1 && (
                 <div className="absolute -bottom-24 left-0 w-48 h-48 opacity-10 group-hover:opacity-60 transition-opacity rotate-12 pointer-events-none">
                    <Image src="https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/planet.png.webp" alt="UI Decoration" width={192} height={192} />
                 </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
