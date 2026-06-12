import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealText = ({ text, className = '' }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into words for animation
    const words = textRef.current.querySelectorAll('.word');
    
    gsap.fromTo(words, 
      {
        opacity: 0.1,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%', // when the top of the trigger hits 80% from the top of the viewport
          end: 'bottom 40%', // when the bottom of the trigger hits 40% from the top of the viewport
          scrub: true, // link animation to scrollbar
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Split text into words
  const words = text.split(' ').map((word, i) => (
    <span key={i} className="word inline-block mr-[0.25em] pb-[0.1em]">
      {word}
    </span>
  ));

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <p ref={textRef} className="m-0">
        {words}
      </p>
    </div>
  );
};

export default ScrollRevealText;
