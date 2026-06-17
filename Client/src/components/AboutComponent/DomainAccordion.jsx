import React from 'react';
import { BookOpen, Target, Sparkles, Compass, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const domains = [
  { id: 1, title: 'Our Story', desc: 'Founded with a passion for technology and digital innovation, Fidarix helps businesses establish a strong online presence through modern, reliable, and growth-focused solutions.', icon: BookOpen, img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=3840&q=80' },
  { id: 2, title: 'Our Mission', desc: 'To empower businesses with high-quality digital experiences that drive growth, improve user engagement, and create long-term value.', icon: Target, img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=3840&q=80' },
  { id: 3, title: 'About Fidarix', desc: 'Fidarix is a technology-focused digital agency dedicated to building modern websites, custom web applications, and scalable digital products. We combine thoughtful design, clean development, and strategic thinking to create solutions that not only look exceptional but also deliver measurable results. Our goal is simple: help businesses grow through reliable technology and impactful digital experiences.', icon: Sparkles, img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=3840&q=80' },
  { id: 4, title: 'Our Approach', desc: 'Every project begins with understanding our clients\' goals. Through careful planning, modern design, and quality development, we create solutions tailored to each business\'s unique needs.', icon: Compass, img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=3840&q=80' },
  { id: 5, title: 'Our Vision', desc: 'To become a trusted digital partner for businesses seeking innovative, scalable, and future-ready digital solutions.', icon: Eye, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=3840&q=80' }
];

export default function DomainAccordion() {
  return (
    <section className="py-32 px-6 relative z-20 overflow-hidden border-t border-white/5 bg-[#050505]">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF9FFC]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tighter leading-[1] mb-6 font-['Space_Grotesk'] text-white">
            Why We <span className="text-white">Build.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-[700px] mx-auto font-medium">
            More than a digital agency, we're a technology partner focused on creating meaningful solutions that help businesses succeed online.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="flex flex-col md:flex-row h-auto md:h-[600px] w-full gap-3 md:gap-4">
          {/* Mobile: 2x2 grid + last item full width. Desktop: flex-row accordion */}
          <div className="grid grid-cols-2 md:hidden gap-3 w-full">
            {domains.slice(0, 4).map((domain, index) => {
              const Icon = domain.icon;
              return (
                <div
                  key={domain.id}
                  className="relative overflow-hidden rounded-2xl border border-white/10 h-[180px]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(${domain.img})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-sm font-extrabold text-white font-['Space_Grotesk'] tracking-tight">{domain.title}</h3>
                    </div>
                    {/* Hide desc on small cards or line-clamp it */}
                    <p className="text-white/70 text-xs leading-[1.4] line-clamp-3">{domain.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Last item full width on mobile */}
          {(() => {
            const domain = domains[4];
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className="md:hidden relative overflow-hidden rounded-2xl border border-white/10 h-[140px] w-full"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{ backgroundImage: `url(${domain.img})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-sm font-extrabold text-white font-['Space_Grotesk'] tracking-tight">{domain.title}</h3>
                  </div>
                  <p className="text-white/70 text-xs leading-[1.4] line-clamp-3">{domain.desc}</p>
                </div>
              </div>
            );
          })()}
          {/* Desktop accordion */}
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                key={domain.id}
                className={`relative group flex-1 ${index === 2 ? 'md:flex-[1.5]' : ''} md:hover:grow-[4] hover:grow-[2] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-[2rem] cursor-pointer border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(82,39,255,0.2)] hidden md:flex`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-110 opacity-50 md:opacity-40 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${domain.img})` }}
                ></div>
                
                {/* Overlay Gradients for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-100 md:opacity-0 transition-opacity duration-500"></div>

                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end overflow-hidden">
                  
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-4 mb-4 transform md:-translate-x-4 md:group-hover:translate-x-0 transition-transform duration-700 ease-out">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/50 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(82,39,255,0.6)] transition-all duration-500 z-20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {/* Horizontal Title - Visible on mobile always, on desktop only when hovered */}
                    <h3 className="text-xl md:text-3xl font-extrabold text-white whitespace-nowrap opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 font-['Space_Grotesk'] tracking-tight z-20">
                      {domain.title}
                    </h3>
                  </div>

                  {/* Description text - Fades in and slides up on hover */}
                  <div className="h-auto md:h-0 md:group-hover:h-auto overflow-hidden transition-all duration-700">
                    <p className={`text-white/80 ${index === 2 ? 'text-xs md:text-sm' : 'text-sm'} leading-[1.6] max-w-[500px] transform md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 delay-200 relative z-20`}>
                      {domain.desc}
                    </p>
                  </div>

                </div>

                {/* Vertical Title (Visible on desktop when NOT hovered) */}
                <div className="absolute inset-0 hidden md:flex items-end justify-center pb-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10">
                  <h3 
                    className="text-xl md:text-2xl font-bold text-white/50 whitespace-nowrap tracking-[0.2em] uppercase font-['Space_Grotesk']"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {domain.title}
                  </h3>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
