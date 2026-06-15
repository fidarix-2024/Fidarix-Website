import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SiteChrome } from './components/common/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function LenisProvider() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (time) => 1 - Math.pow(1 - time, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    let frame = 0;
    const animate = (time) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <HomePage />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <AboutPage />
            </motion.div>
          } />
          <Route path="/services" element={
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServicesPage />
            </motion.div>
          } />
          <Route path="/pricing" element={
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <PricingPage />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactPage />
            </motion.div>
          } />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <NotFoundPage />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </SiteChrome>
  );
}

export default App;