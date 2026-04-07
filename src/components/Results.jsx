"use client"
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Activity, Zap } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: "30%", label: "Avg. ROI Increase", icon: TrendingUp },
  { value: "15k+", label: "Leads Captured", icon: Users },
  { value: "7 Days", label: "Setup Time", icon: Target },
  { value: "24/7", label: "Automation", icon: Activity }
];

export default function Results() {
  return (
    <section className="section py-40 bg-dark relative overflow-hidden">
      {/* Background Asset as seen in Rocket SaaS */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Image src="https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/asset-svg-2.svg" alt="Background Texture" fill className="object-cover" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 text-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center gap-10 group"
              >
                <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 hover:rotate-12 hover:scale-110 shadow-2xl shadow-primary/5 group-hover:shadow-primary/30">
                  <Icon size={40} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-7xl font-black mb-3 tracking-tighter text-white tabular-nums group-hover:text-primary transition-colors">{stat.value}</h3>
                  <p className="text-white/30 font-black uppercase tracking-[0.2em] text-xs leading-none">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
