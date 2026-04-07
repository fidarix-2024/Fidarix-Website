"use client"
import { useState } from 'react';
import { Send, CheckCircle, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formState, setFormState] = useState('idle'); // idle | submitting | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="relative group">
      <AnimatePresence mode="wait">
        {formState === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-16 rounded-[48px] text-center border border-white/10 shadow-2xl"
          >
            <div className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-10 shadow-xl shadow-emerald-500/20 rotate-12 transition-transform">
              <CheckCircle size={44} />
            </div>
            <h3 className="text-4xl font-black mb-6 text-dark tracking-tight">Request Launched!</h3>
            <p className="text-dark/50 text-xl font-bold leading-relaxed mb-12">Thank you! Our flight controllers will reach out to you within 24 hours.</p>
            <button 
              onClick={() => setFormState('idle')} 
              className="btn btn-primary px-12 py-6 text-xl tracking-widest uppercase font-black"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-10"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-4">
                <div className="relative">
                  <label className="absolute -top-3 left-8 bg-[#0c062c] px-3 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] z-20">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[28px] focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white text-xl font-bold placeholder:text-white/20"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="relative">
                   <label className="absolute -top-3 left-8 bg-[#0c062c] px-3 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] z-20">WhatsApp Number</label>
                   <input 
                    type="tel" 
                    required
                    className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[28px] focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white text-xl font-bold placeholder:text-white/20"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div className="relative">
                   <label className="absolute -top-3 left-8 bg-[#0c062c] px-3 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] z-20">Business Name</label>
                   <input 
                    type="text" 
                    required
                    className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[28px] focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white text-xl font-bold placeholder:text-white/20"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className={`w-full py-8 rounded-[30px] bg-primary text-white font-black text-2xl hover:shadow-[0_20px_50px_-10px_rgba(217,27,92,0.5)] transition-all flex items-center justify-center gap-4 active:scale-95 group ${formState === 'submitting' ? 'opacity-70' : ''}`}
              >
                {formState === 'submitting' ? 'Ignition...' : 'Reserve Spot'} <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
