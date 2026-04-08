"use client"
import Link from 'next/link';
import Image from 'next/image';
import { siteContent } from '../constants/site';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';
import { Instagram, Youtube, Linkedin, Twitter } from './SocialIcons';
import { motion } from 'framer-motion';

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-dark pt-36 pb-12 rounded-t-[70px] -mt-16 relative z-30 border-t border-white/5 overflow-hidden">
      {/* Decorative Assets from Rocket SaaS */}
      <div className="absolute -left-20 top-20 w-80 h-80 opacity-5 pointer-events-none">
        <Image src="/rocket.png" alt="UI Decoration" width={320} height={320} className="opacity-10" />
      </div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] opacity-10 pointer-events-none">
        <Image src="/home-hero.png" alt="UI Decoration" width={500} height={500} className="object-contain opacity-20" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-28">
          <div className="flex flex-col gap-10 max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/fidarix.png" alt="Fidarix" width={40} height={40} className="w-10 h-10 rounded-xl" />
              <span className="text-3xl font-extrabold tracking-tighter text-white">
                Fidarix<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-white/40 font-bold text-xl leading-relaxed italic">
              "We help businesses capture leads and automatically follow up so you never lose a potential customer again."
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Linkedin, Twitter].map((SocialIco, idx) => (
                 <Link key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-2">
                    <SocialIco size={24} />
                 </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <h4 className="text-2xl font-black text-white uppercase tracking-widest text-sm opacity-30">Quick Links</h4>
            <div className="flex flex-col gap-6">
              {footer.links.map((link, i) => (
                <Link key={i} href={link.path} className="text-white font-bold text-lg hover:text-primary hover:translate-x-3 transition-all flex items-center gap-3 group">
                   <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-primary transition-colors"></div>
                   {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <h4 className="text-2xl font-black text-white uppercase tracking-widest text-sm opacity-30">Services</h4>
            <div className="flex flex-col gap-6">
              {['Lead Generation', 'Website Design', 'CRM Setup', 'WhatsApp Automation'].map((service, i) => (
                <Link key={i} href="#" className="text-white font-bold text-lg hover:text-primary hover:translate-x-3 transition-all flex items-center gap-3 group">
                   <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-primary transition-colors"></div>
                   {service}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 bg-white/5 p-10 rounded-[40px] border border-white/5">
            <h4 className="text-2xl font-black text-white tracking-tight leading-none uppercase tracking-[0.1em] opacity-30">Get in Touch</h4>
            <div className="flex flex-col gap-8">
              <Link href={`mailto:${footer.contact}`} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white group-hover:scale-110 shadow-2xl shadow-primary/30 transition-all">
                  <Mail size={22} />
                </div>
                <span className="text-white/60 font-black tracking-tight text-lg leading-none">{footer.contact}</span>
              </Link>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-all">
                  <Phone size={22} />
                </div>
                <span className="text-white/40 font-bold tracking-tight text-lg leading-none">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-white/5 text-white/20 font-black text-xs tracking-[0.3em] uppercase text-center md:text-left">
          <p>© 2026 Fidarix Lead Systems. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-primary tracking-widest">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
