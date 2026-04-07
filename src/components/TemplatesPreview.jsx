"use client"
import Image from 'next/image';
import { templates } from '../constants/templates';
import { Layout, ArrowUpRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TemplatesPreview() {
  return (
    <section className="section bg-white rounded-[70px] -mt-16 relative z-10 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 px-4">
          <div className="max-w-xl">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-black tracking-[0.2em] uppercase mb-10"
             >
               <Zap size={14} className="fill-primary" />
               OUR TEMPLATES
             </motion.div>
             <h2 className="text-5xl md:text-7xl font-black text-dark mb-8 leading-tight tracking-tight">Standardized for Your Industry</h2>
             <p className="text-xl md:text-2xl text-dark/60 font-bold leading-relaxed">We don't just build sites; we craft converting experiences tailored specifically for what you do.</p>
          </div>
          <button className="btn btn-primary px-12 py-6 text-xl group h-fit">
            View All Designs <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {templates.map((tpl, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative bg-[#0c062c] rounded-[60px] overflow-hidden border border-white/5 shadow-2xl shadow-dark/10 hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-4"
            >
              <div className="relative aspect-[3/4.5] overflow-hidden">
                 <Image 
                   src={tpl.image} 
                   alt={tpl.title} 
                   fill 
                   className="object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-dark to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                 <div className="absolute inset-0 flex items-end p-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0">
                    <p className="text-white font-bold text-xl leading-[1.6] group-hover:translate-y-0 transition-transform">{tpl.description}</p>
                 </div>
              </div>
              <div className="p-12">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-4xl font-black text-white tracking-tight">{tpl.title}</h3>
                  <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-primary group-hover:text-white transition-all duration-500 hover:rotate-12">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {tpl.features.map((f, j) => (
                    <span key={j} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white/50 group-hover:text-white/80 uppercase tracking-widest transition-colors">
                      {f}
                    </span>
                  ))}
                </div>
                
                <button className="w-full btn btn-secondary py-6 text-xl rounded-3xl uppercase tracking-widest text-sm font-black group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                  Select Template
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Assets */}
      <div className="absolute -left-20 top-1/2 w-80 h-80 opacity-5 pointer-events-none">
        <Image src="https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-footer1-new.png.webp" alt="UI Decoration" width={320} height={320} />
      </div>
      <div className="absolute -right-20 bottom-0 w-64 h-64 opacity-5 pointer-events-none">
        <Image src="https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-footer2-new.png.webp" alt="UI Decoration" width={256} height={256} />
      </div>
    </section>
  );
}
