import React from 'react';
import { Code, PenTool, Sparkles, TrendingUp, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const domains = [
  { id: 1, title: 'Web Development', desc: 'Lightning-fast, highly scalable React architectures and robust code foundations.', icon: Code, img: '/images/real_domain_web_dev.png' },
  { id: 2, title: 'Web Design', desc: 'Award-winning, glassmorphic interfaces that convert visitors into clients.', icon: PenTool, img: '/images/real_domain_web_design.png' },
  { id: 3, title: 'Branding', desc: 'Premium, luxury positioning and identity for modern digital brands.', icon: Sparkles, img: '/images/real_domain_branding.png' },
  { id: 4, title: 'SEO Optimization', desc: 'Data-driven visibility strategies that dominate search engine rankings.', icon: TrendingUp, img: '/images/real_domain_seo.png' },
  { id: 5, title: 'Product Building', desc: 'End-to-end product strategy, prototyping, and execution for startups.', icon: Rocket, img: '/images/real_domain_product.png' }
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9FFC] via-[#A6C8FF] to-white">Expertise.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-[600px] mx-auto font-medium">
            We don't just build websites. We craft comprehensive digital ecosystems designed to elevate industry leaders.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="flex flex-col md:flex-row h-[900px] md:h-[600px] w-full gap-4">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                key={domain.id}
                className="relative group flex-1 md:hover:grow-[4] hover:grow-[2] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-[2rem] cursor-pointer border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(82,39,255,0.2)]"
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
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end overflow-hidden">
                  
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-4 mb-4 transform md:-translate-x-4 md:group-hover:translate-x-0 transition-transform duration-700 ease-out">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/50 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(82,39,255,0.6)] transition-all duration-500 z-20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {/* Horizontal Title - Visible on mobile always, on desktop only when hovered */}
                    <h3 className="text-2xl md:text-4xl font-extrabold text-white whitespace-nowrap opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 font-['Space_Grotesk'] tracking-tight z-20">
                      {domain.title}
                    </h3>
                  </div>

                  {/* Description text - Fades in and slides up on hover */}
                  <div className="h-auto md:h-0 md:group-hover:h-auto overflow-hidden transition-all duration-700">
                    <p className="text-white/80 text-base md:text-lg leading-[1.6] max-w-[450px] transform md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 delay-200 md:pl-16 relative z-20">
                      {domain.desc}
                    </p>
                  </div>

                </div>

                {/* Vertical Title (Visible on desktop when NOT hovered) */}
                <div className="absolute inset-0 hidden md:flex items-end justify-center pb-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10">
                  <h3 
                    className="text-2xl font-bold text-white/50 whitespace-nowrap tracking-[0.2em] uppercase font-['Space_Grotesk']"
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
