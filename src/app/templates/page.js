import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplatesPreview from '@/components/TemplatesPreview';

export default function TemplatesPage() {
  return (
    <main className="pt-20">
      <Navbar />
      <div className="bg-white py-20 border-b border-gray-100">
        <div className="container text-center">
          <h1 className="mb-6">Industry Templates</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">Explore our pre-optimized conversion systems for different business sectors.</p>
        </div>
      </div>
      <TemplatesPreview />
      <Footer />
    </main>
  );
}
