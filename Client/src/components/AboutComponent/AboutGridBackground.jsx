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
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    )}
                    {c.socials?.discord && (
                      <a href={c.socials.discord.startsWith('http') ? c.socials.discord : `https://discord.com/users/${c.socials.discord}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-[#5865F2] transition-colors" title={c.socials.discord}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
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
