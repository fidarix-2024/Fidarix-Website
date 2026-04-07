import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Navbar />
      <div className="section bg-white pb-0">
        <div className="container text-center max-w-4xl pt-20">
           <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-6 block">Contact Us</span>
           <h1 className="mb-6">Let's Design Your Growth System</h1>
           <p className="text-xl text-gray-600 mb-16">Choose your preferred way to reach us. Whether it's a quick text or a scheduled demo, we're ready.</p>
        </div>
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
