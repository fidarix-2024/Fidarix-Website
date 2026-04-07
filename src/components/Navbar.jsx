"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] max-w-[1200px] z-50 transition-all duration-300 rounded-full ${scrolled ? 'bg-dark/40 backdrop-blur-xl border border-white/10 py-3 px-6 shadow-2xl' : 'bg-transparent py-6 px-4'}`}>
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/logo-w.svg" alt="Fidarix" width={32} height={32} className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:rotate-12" />
          <span className="text-2xl font-black tracking-tighter text-white">
            Fidarix<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {["Solutions", "Templates", "Pricing", "About"].map((link) => (
            <Link 
              key={link} 
              href={`/${link.toLowerCase()}`} 
              className="text-sm font-bold text-white/70 hover:text-white transition-colors py-2 tracking-wide"
            >
              {link}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary !py-3.5 !px-8 text-sm group">
            Get Started <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 text-white bg-white/10 rounded-full" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full glass-dark z-40 p-10 flex flex-col gap-10 animate-in fade-in slide-in-from-top-4 duration-300 rounded-[40px]">
          <div className="flex flex-col gap-8">
            {["Solutions", "Templates", "Pricing", "About"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="text-3xl font-black text-white hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="btn btn-primary text-center text-xl py-6 rounded-3xl"
          >
            Start Your Rocket Site
          </Link>
        </div>
      )}
    </nav>
  );
}
