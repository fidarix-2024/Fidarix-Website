import React from 'react';

const SplitTextRoll = ({ text }) => {
  return (
    <span className="relative inline-flex overflow-hidden group/roll cursor-pointer py-1 select-none text-4xl md:text-[4.5rem] font-black uppercase tracking-tighter">
      {text.split('').map((char, index) => {
        if (char === ' ') {
          return (
            <span key={index} className="w-[0.25em]">
              &nbsp;
            </span>
          );
        }
        return (
          <span
            key={index}
            className="relative inline-block overflow-hidden h-[1.15em] leading-[0.95]"
          >
            <span
              className="relative block h-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) group-hover/roll:-translate-y-full"
              style={{ transitionDelay: `${index * 22}ms` }}
            >
              <span className="block text-white h-full">
                {char}
              </span>
              <span className="block absolute top-full left-0 text-[#9b4dff] h-full">
                {char}
              </span>
            </span>
          </span>
        );
      })}
    </span>
  );
};

const MarqueeItem = ({ item }) => {
  return (
    <div className="flex items-center gap-6 md:gap-10 shrink-0">
      <SplitTextRoll text={item.text} />
      {item.image && (
        <div className="w-16 h-12 md:w-20 md:h-14 rounded-2xl overflow-hidden border border-white/12 bg-zinc-900 shrink-0 shadow-[0_8px_24px_rgba(0,0,0,0.4)] group/img hover:scale-105 transition-transform duration-300">
          <img
            src={item.image}
            alt={item.text}
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.1] brightness-[0.95] group-hover/img:grayscale-0 group-hover/img:brightness-100 transition-all duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default function MarqueeStrip() {
  const itemsRow1 = [
    { text: 'STRATEGY', image: '/images/templates/startup_template.png' },
    { text: 'DEVELOPMENT', image: '/images/AboutPage/domain_web_development.png' },
    { text: 'HIGH CONVERTING', image: '/images/templates/portfolio_template.png' },
    { text: 'SEO OPTIMIZED', image: '/images/AboutPage/domain_seo.png' },
    { text: 'PRODUCT DESIGN', image: '/images/templates/restaurant_template.png' },
    { text: 'CREATIVE STUDIO', image: '/images/AboutPage/domain_web_design.png' },
  ];

  const itemsRow2 = [
    { text: 'MOBILE FIRST', image: '/images/templates/coaching_template.png' },
    { text: 'BRANDING', image: '/images/AboutPage/domain_branding.png' },
    { text: 'FAST LOADING', image: '/images/templates/startup_template.png' },
    { text: 'USER EXPERIENCE', image: '/images/AboutPage/domain_product_building.png' },
    { text: 'CUSTOM CODE', image: '/images/templates/portfolio_template.png' },
    { text: 'INNOVATION', image: '/images/AboutPage/domain_web_development.png' },
  ];

  const styleSheet = `
    @keyframes marquee-left {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }
    @keyframes marquee-right {
      0% { transform: translate3d(-50%, 0, 0); }
      100% { transform: translate3d(0, 0, 0); }
    }
    .animate-marquee-left {
      display: flex;
      width: max-content;
      animation: marquee-left 40s linear infinite;
    }
    .animate-marquee-right {
      display: flex;
      width: max-content;
      animation: marquee-right 40s linear infinite;
    }
    .animate-marquee-left:hover,
    .animate-marquee-right:hover {
      animation-play-state: paused;
    }
  `;

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 md:py-24 border-t border-white/10 flex flex-col gap-6 md:gap-10">
      <style>{styleSheet}</style>

      {/* Row 1 - Moves Left */}
      <div className="relative w-full overflow-hidden flex select-none">
        <div className="animate-marquee-left flex gap-6 md:gap-10">
          {/* Render first copy */}
          {itemsRow1.map((item, i) => (
            <MarqueeItem key={`r1-1-${i}`} item={item} />
          ))}
          {/* Render second copy for seamless infinite loop */}
          {itemsRow1.map((item, i) => (
            <MarqueeItem key={`r1-2-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 - Moves Right */}
      <div className="relative w-full overflow-hidden flex select-none">
        <div className="animate-marquee-right flex gap-6 md:gap-10">
          {/* Render first copy */}
          {itemsRow2.map((item, i) => (
            <MarqueeItem key={`r2-1-${i}`} item={item} />
          ))}
          {/* Render second copy for seamless infinite loop */}
          {itemsRow2.map((item, i) => (
            <MarqueeItem key={`r2-2-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
