"use client"
import { motion } from 'framer-motion';
import { siteContent } from '../constants/site';
import Image from 'next/image';
import { Rocket, Zap, Database, Smartphone, Share2 } from 'lucide-react';

const icons = [Rocket, Zap, Database, Share2, Smartphone];

export default function USP() {
  const { usp } = siteContent;

  return (
    <section className="section py-32 bg-dark overflow-hidden relative">
      {/* Background Asset as seen in Rocket SaaS */}
      {/* Background Radial Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-full opacity-30 pointer-events-none bg-radial-to-bl from-primary/20 via-transparent to-transparent"></div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-28">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full text-xs font-black tracking-[0.2em] uppercase mb-10"
          >
            <Zap size={14} className="text-primary fill-primary" />
            OUR EDGE
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">What We Bring to the Table</h2>
          <p className="text-xl md:text-2xl text-white/40 font-bold leading-relaxed">Built to handle thousands of leads with perfect reliability.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* USP Cards (Bento Boxes) with Assets */}
          {usp.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`card-bento group h-full hover:bg-dark-soft/50 ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 rotate-6 group-hover:rotate-0">
                  <Icon size={36} />
                </div>
                
                <div className="space-y-6">
                   <h3 className="text-3xl font-black text-white tracking-tight leading-tight">{item.title}</h3>
                   <p className="text-lg font-bold text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-tight">{item.description}</p>
                </div>

                {/* Floating Decoration for the first (wide) card */}
                {index === 0 && (
                   <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 group-hover:opacity-40 transition-opacity">
                      <Image src="/rocket.png" alt="UI Decoration" width={192} height={192} className="animate-float" />
                   </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
