import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SiteChrome } from './components/common/Layout';
import PageTransition from './components/common/PageTransition';
import RouteLoader from './components/common/RouteLoader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

// Lazy load page components to split bundle size
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function LenisProvider() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)), // snappier easing
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.2, // slightly faster scroll speed
    });

    lenis.on('scroll', ScrollTrigger.update);

    const animate = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(animate);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(animate);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <SiteChrome>
      <LenisProvider />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <Suspense fallback={<RouteLoader />}>
              <PageTransition>
                <HomePage />
              </PageTransition>
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<RouteLoader />}>
              <PageTransition>
                <AboutPage />
              </PageTransition>
            </Suspense>
          } />
          <Route path="/services" element={
            <Suspense fallback={<RouteLoader />}>
              <PageTransition>
                <ServicesPage />
              </PageTransition>
            </Suspense>
          } />
          <Route path="/pricing" element={
            <Suspense fallback={<RouteLoader />}>
              <PageTransition>
                <PricingPage />
              </PageTransition>
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<RouteLoader />}>
              <PageTransition>
                <ContactPage />
              </PageTransition>
            </Suspense>
          } />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={
            <Suspense fallback={<RouteLoader />}>
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            </Suspense>
          } />
        </Routes>
      </AnimatePresence>
    </SiteChrome>
  );
}

export default App;