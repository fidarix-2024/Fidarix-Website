"use client"
import { motion } from 'framer-motion';
import { siteContent } from '../constants/site';
import { Check, Zap, Sparkles } from 'lucide-react';

export default function Pricing() {
  const { pricing } = siteContent;

  return (
    <section className="section py-40 bg-dark relative overflow-hidden">
      {/* Background Glows for Pricing Section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none -z-10"></div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-28 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full text-xs font-black tracking-[0.2em] uppercase mb-10"
          >
            <Zap size={14} className="text-primary fill-primary" />
            PRICING
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">Investment for Your Future</h2>
          <p className="text-xl md:text-2xl text-white/40 font-bold leading-relaxed">Choose the plan that fits your scale.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-14 max-w-7xl mx-auto">
          {pricing.map((plan, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex-1 w-full max-w-[500px] p-20 rounded-[60px] border-[1px] transition-all duration-700 relative group overflow-hidden ${
                plan.isPopular 
                ? 'bg-primary text-white border-primary shadow-[0_50px_100px_-20px_rgba(217,27,92,0.4)] scale-105 z-10' 
                : 'bg-dark-soft text-white border-white/10 hover:border-primary/40 hover:-translate-y-5 shadow-2xl'
              }`}
            >
              {/* Internal Accent Glow */}
              <div className="absolute top-0 right-0 p-16 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-20 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-16 relative z-10">
                {plan.isPopular && (
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 border border-white/30 text-white font-black text-xs rounded-full uppercase tracking-widest mb-10">
                    <Sparkles size={16} /> MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-black mb-12 uppercase tracking-[0.3em] ${plan.isPopular ? 'text-white' : 'text-primary'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-start gap-1">
                  <span className="text-8xl font-black tracking-tighter leading-none">{plan.price}</span>
                  <span className={`text-xl font-black mt-4 uppercase tracking-[0.1em] opacity-40 ml-2`}>/setup</span>
                </div>
              </div>

              <div className="space-y-10 mb-20 relative z-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-white/10 text-white' : 'bg-primary text-white shadow-xl shadow-primary/20'}`}>
                      <Check size={22} strokeWidth={4} />
                    </div>
                    <p className={`text-2xl font-bold opacity-90 tracking-tight leading-tight`}>{feature}</p>
                  </div>
                ))}
              </div>

              <button className={`w-full py-7 rounded-[30px] font-black transition-all text-2xl relative z-10 active:scale-95 shadow-2xl group ${
                plan.isPopular 
                ? 'bg-white text-primary hover:bg-white/95' 
                : 'bg-primary text-white hover:shadow-primary/40'
              }`}>
                Start Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
