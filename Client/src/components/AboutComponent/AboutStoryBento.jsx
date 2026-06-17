import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../common/SplitText';

export default function AboutStoryBento() {
  return (
    <section className="py-32 px-6 relative z-20 overflow-hidden border-t border-white/5 bg-[#050505]">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SplitText
            text="Why We Build."
            className="text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tighter leading-[1] mb-6 font-['Space_Grotesk'] text-white"
            delay={40}
            duration={0.7}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            tag="h2"
            textAlign="center"
          />
          <p className="text-white/60 text-lg md:text-xl max-w-[700px] mx-auto font-medium">
            More than a digital agency, we're a technology partner focused on creating meaningful solutions that help businesses succeed online.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          
          {/* CARD 01: OUR STORY (Left Top) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 group"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-white/40 tracking-widest uppercase font-['Space_Grotesk']">01</span>
              <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-primary transition-colors duration-500"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">Our Story</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Founded with a passion for technology and digital innovation, Fidarix helps businesses establish a strong online presence through modern, reliable, and growth-focused solutions.
              </p>
            </div>
          </motion.div>

          {/* CARD 03: ABOUT FIDARIX (Center, Featured) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-black border border-primary/30 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group shadow-[0_0_30px_rgba(82,39,255,0.1)] hover:border-primary/50 transition-all duration-500"
          >
            {/* Subtle background pattern/glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/30 transition-all duration-700"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold text-primary tracking-widest uppercase font-['Space_Grotesk'] bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Featured</span>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-['Space_Grotesk'] tracking-tight">About Fidarix</h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                  Fidarix is a technology-focused digital agency dedicated to building modern websites, custom web applications, and scalable digital products. We combine thoughtful design, clean development, and strategic thinking to create solutions that not only look exceptional but also deliver measurable results.
                </p>
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                  Our goal is simple: help businesses grow through reliable technology and impactful digital experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 02: OUR MISSION (Right Top) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 group"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-white/40 tracking-widest uppercase font-['Space_Grotesk']">02</span>
              <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#FF9FFC] transition-colors duration-500"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">Our Mission</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                To empower businesses with high-quality digital experiences that drive growth, improve user engagement, and create long-term value.
              </p>
            </div>
          </motion.div>

          {/* CARD 04: OUR APPROACH (Left Bottom) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 group"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-white/40 tracking-widest uppercase font-['Space_Grotesk']">04</span>
              <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#A6C8FF] transition-colors duration-500"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">Our Approach</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Every project begins with understanding our clients' goals. Through careful planning, modern design, and quality development, we create solutions tailored to each business's unique needs.
              </p>
            </div>
          </motion.div>

          {/* CARD 05: OUR VISION (Right Bottom) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 group"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-white/40 tracking-widest uppercase font-['Space_Grotesk']">05</span>
              <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-500"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk']">Our Vision</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                To become a trusted digital partner for businesses seeking innovative, scalable, and future-ready digital solutions.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
