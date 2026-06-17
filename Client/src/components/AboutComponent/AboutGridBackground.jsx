import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const AboutGridBackground = ({ items, className = '', radius = 300, damping = 0.45, fadeOut = 0.6, ease = 'power3.out' }) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://linkedin.com/in/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Morgan Blake',
      subtitle: 'UI/UX Designer',
      handle: '@morganblake',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: 'https://dribbble.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=16',
      title: 'Casey Park',
      subtitle: 'Data Scientist',
      handle: '@caseypark',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg,#EF4444,#000)',
      url: 'https://kaggle.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=25',
      title: 'Sam Kim',
      subtitle: 'Mobile Developer',
      handle: '@thesamkim',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=60',
      title: 'Tyler Rodriguez',
      subtitle: 'Cloud Architect',
      handle: '@tylerrod',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'https://aws.amazon.com/'
    }
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (url, index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
    if (url && url !== '#') window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove = e => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`relative w-full h-full flex flex-wrap justify-center items-center gap-6 ${className}`}
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url, i)}
          className="group relative flex flex-col w-full h-full rounded-[24px] bg-transparent cursor-pointer [perspective:1500px]"
          style={{
            '--spotlight-color': 'rgba(255,255,255,0.3)'
          }}
        >
          {/* Inner Flip Container */}
          <div className={`relative w-full h-full transition-all duration-[800ms] [transform-style:preserve-3d] ${flippedIndex === i ? '[transform:rotateY(180deg)]' : ''}`}>
            
            {/* Front Face */}
            <div 
              className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex flex-col rounded-[24px] overflow-hidden border-2 border-transparent shadow-xl"
              style={{
                '--card-border': c.borderColor || 'transparent',
                background: c.gradient,
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
                }}
              />
              <div className="relative z-10 flex-1 p-3 box-border h-[400px]">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover rounded-[16px] filter grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <footer className="relative z-10 p-5 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 items-center">
                <h3 className="m-0 text-xl font-bold font-['Space_Grotesk']">{c.title}</h3>
                {(c.handle || c.socials) && (
                  <div className="flex gap-3 justify-end items-center text-white/70">
                    {c.handle && <span className="text-[0.95rem] opacity-80 text-right">{c.handle}</span>}
                    {c.socials?.linkedin && (
                      <a href={c.socials.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                    )}
                    {c.socials?.discord && (
                      <a href={c.socials.discord.startsWith('http') ? c.socials.discord : `https://discordapp.com/users/${c.socials.discord}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-[#5865F2] transition-colors" title={c.socials.discord}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.33-.35-.76-.53-1.09a.09.09 0 0 0-.07-.03c-1.5.26-2.93.71-4.27 1.33a.08.08 0 0 0-.05.05C2.79 11.5 1.41 17.28 2.03 23c.01.03.03.05.06.07 1.77 1.3 3.48 2.08 5.16 2.59a.1.1 0 0 0 .11-.04c.41-.56.78-1.15 1.11-1.77a.09.09 0 0 0-.04-.12c-.57-.22-1.12-.48-1.63-.78a.09.09 0 0 1-.01-.15c.12-.09.23-.19.34-.29a.09.09 0 0 1 .09-.02c3.4 1.55 7.07 1.55 10.46 0a.09.09 0 0 1 .09.02c.11.1.22.2.34.29a.09.09 0 0 1-.01.15c-.52.3-1.07.56-1.64.78a.09.09 0 0 0-.04.12c.33.62.7 1.21 1.11 1.77a.1.1 0 0 0 .11.04c1.68-.51 3.39-1.29 5.16-2.59a.09.09 0 0 0 .06-.07c.72-6.52-.96-12.2-2.88-17.62a.08.08 0 0 0-.05-.05zm-9.02 11.2c-.93 0-1.68-.83-1.68-1.85s.74-1.85 1.68-1.85c.95 0 1.7.83 1.68 1.85 0 1.02-.73 1.85-1.68 1.85zm5.5 0c-.93 0-1.68-.83-1.68-1.85s.74-1.85 1.68-1.85c.95 0 1.7.83 1.68 1.85 0 1.02-.74 1.85-1.68 1.85z"/></svg>
                      </a>
                    )}
                  </div>
                )}
                <p className="m-0 text-[0.95rem] opacity-85 text-primary uppercase font-extrabold tracking-widest col-span-2">{c.subtitle}</p>
                {c.location && <span className="text-[0.85rem] opacity-85 text-right col-span-2">{c.location}</span>}
              </footer>
            </div>

            {/* Back Face */}
            <div 
              className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col rounded-[24px] overflow-hidden border-2 border-transparent p-10 text-white shadow-2xl"
              style={{
                '--card-border': c.borderColor || 'transparent',
                background: c.gradient,
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 70%)'
                }}
              />
              <div className="relative z-30 flex-1 flex flex-col justify-center items-center text-center h-full">
                <svg className="w-12 h-12 mb-8 opacity-40" style={{ color: c.borderColor || '#fff' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl font-['Space_Grotesk'] leading-[1.6] mb-10 text-white/90">
                  "{c.message || 'We believe in building digital experiences that define the future.'}"
                </p>
                <div className="mt-auto pb-4">
                  <h4 className="font-bold text-2xl tracking-tight mb-2">{c.title}</h4>
                  <p className="text-sm uppercase tracking-widest font-bold" style={{ color: c.borderColor || '#fff' }}>{c.subtitle}</p>
                </div>
              </div>
            </div>

          </div>
        </article>
      ))}
    </div>
  );
};

export default AboutGridBackground;
