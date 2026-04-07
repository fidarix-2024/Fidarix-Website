"use client"
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import USP from '@/components/USP';
import TemplatesPreview from '@/components/TemplatesPreview';
import Results from '@/components/Results';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <USP />
      <TemplatesPreview />
      <Results />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
