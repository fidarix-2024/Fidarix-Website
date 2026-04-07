"use client"
import { motion } from 'framer-motion';
import { siteContent } from '../constants/site';
import Image from 'next/image';
import { ArrowRight, Play, Zap } from 'lucide-react';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative pt-60 pb-36 overflow-hidden bg-dark">
      {/* Decorative Assets from Rocket SaaS */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-32 h-32 md:w-56 md:h-56 pointer-events-none opacity-40 md:opacity-100"
      >
        <Image src="https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/planet.png.webp" alt="Planet" width={224} height={224} className="object-contain" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 50, 0], x: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[15%] w-48 h-48 md:w-80 md:h-80 pointer-events-none opacity-30 md:opacity-80"
      >
        <Image src="https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/astronaut.png.webp" alt="Astronaut" width={320} height={320} className="object-contain" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[5%] w-32 h-32 md:w-64 md:h-64 pointer-events-none opacity-20 md:opacity-60"
      >
        <Image src="https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/rocket.png.webp" alt="Rocket" width={256} height={256} className="object-contain" />
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 text-center">
        <center>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-12"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full text-xs font-black tracking-[0.2em] uppercase cursor-default group hover:bg-white/10 transition-colors"
            >
              <Zap size={14} className="text-primary fill-primary" />
              #1 LEAD GENERATION PARTNER
            </motion.div>

            <h1 className="text-6xl md:text-[110px] font-black tracking-tight text-white leading-[0.95] max-w-6xl">
              {hero.headline.split(' ').map((word, i) => (
                word === 'Automated' || word === 'Lead' || word === 'Systems' ? 
                <span key={i} className="gradient-text">{word} </span> : 
                word + ' '
              ))}
            </h1>

            <p className="text-xl md:text-2xl text-white/60 font-bold max-w-2xl leading-[1.6]">
              {hero.subtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button className="btn btn-primary text-xl px-12 py-7 group relative overflow-hidden">
                <span className="relative z-10">{hero.cta.primary}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              <button className="flex items-center gap-4 text-xl font-black text-white hover:text-primary transition-colors group">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all">
                   <Play size={24} fill="currentColor" className="ml-1" />
                </div>
                How it Works
              </button>
            </div>
            
            {/* Trust Section */}
            <div className="pt-20 flex flex-col items-center gap-8">
               <div className="flex -space-x-5">
                 {[
                   "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/alex-client.jpg.webp",
                   "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/blue-Ryan.png.webp",
                   "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/Daniel-Briggs.jpg.webp",
                   "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/Mike-Clark.jpg.webp"
                 ].map((img, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ y: -10, zIndex: 50 }}
                    className="w-16 h-16 rounded-full border-4 border-dark overflow-hidden bg-dark-soft shadow-2xl scale-110"
                   >
                      <Image src={img} alt="Client" width={64} height={64} className="object-cover" />
                   </motion.div>
                 ))}
               </div>
               <div className="flex flex-col items-center">
                  <span className="text-sm font-black text-white uppercase tracking-widest opacity-40 mb-2">Join 1,000+ Scaled Agencies</span>
                  <div className="flex gap-2 text-primary font-black">
                     {[1,2,3,4,5].map(i => <Zap key={i} size={16} fill="currentColor" />)}
                  </div>
               </div>
            </div>
          </motion.div>
        </center>
      </div>

      {/* Hero Dashboard Preview (Slanted Style like Rocket SaaS) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="container mt-32 relative perspective-[2500px]"
      >
         <div className="relative rounded-[60px] overflow-hidden border-[1px] border-white/10 shadow-[0_100px_200px_-50px_rgba(217,27,92,0.3)] bg-[#1a144d]/40 backdrop-blur-3xl transform rotate-x-[15deg] rotate-y-[-5deg] rotate-z-[2deg] hover:rotate-0 transition-transform duration-1000">
            <div className="aspect-[21/9] w-full relative">
               <Image src="https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/home-hero.png" fill alt="Fidarix Dashboard" className="object-cover opacity-90" />
            </div>
         </div>
      </motion.div>
    </section>
  );
}
