import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Navbar />
      <section className="section py-32 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
               <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-6 block">Our Mission</span>
               <h1 className="mb-8">Democratizing Enterprise-Grade Automation</h1>
               <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                 Fidarix was founded with a single goal: to give small to medium businesses the same lead generation and tracking superpowers that Fortune 500 companies use.
               </p>
               <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-4xl font-black text-blue-600 mb-2">5+</h3>
                    <p className="font-bold text-gray-400">Years Experience</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-blue-600 mb-2">200+</h3>
                    <p className="font-bold text-gray-400">Clients Served</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-square bg-blue-50 rounded-[64px] border-8 border-white shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
                  <div className="flex items-center justify-center h-full text-blue-900 font-black text-9xl">F</div>
               </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
