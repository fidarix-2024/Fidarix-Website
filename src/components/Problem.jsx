"use client"
import { siteContent } from '../constants/site';
import { UserMinus, Clock, BellOff, Activity, ArrowRight, Zap } from 'lucide-react';

const iconMap = {
  UserMinus: UserMinus,
  Clock: Clock,
  BellOff: BellOff,
  Activity: Activity
};

export default function Problem() {
  const { problems } = siteContent;

  return (
    <section className="section bg-[#0c062c] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full text-xs font-black tracking-[0.2em] uppercase mb-10"
          >
            <Zap size={14} className="text-primary fill-primary" />
            THE STRUGGLE
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">Stop Waiting and Start Scaling</h2>
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-bold">Most businesses struggle to turn interest into customers. Here's why you're losing money today:</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {problems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={index} className="card-bento group h-full">
                <div className="mb-12 w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-xl shadow-primary/5 group-hover:shadow-primary/30">
                  <Icon size={36} />
                </div>
                <div className="space-y-6">
                   <h3 className="text-3xl font-black text-white tracking-tight leading-tight">{item.title}</h3>
                   <p className="text-lg font-bold text-white/40 group-hover:text-white/70 tracking-wide transition-colors leading-[1.6]">{item.description}</p>
                </div>
                <div className="mt-12 group-hover:translate-x-2 transition-transform opacity-30 group-hover:opacity-100">
                   <ArrowRight size={24} className="text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Inline motion only if I'm sure it's needed, but I'll use framer-motion imports for better control
import { motion } from 'framer-motion';
