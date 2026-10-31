import React, { Suspense, lazy, useState, useCallback } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

// Below-the-fold components ko lazy-load kar rahe hain
const Slider = lazy(() => import('./components/slider/Slider'));
const Packages = lazy(() => import('./components/pacakges/Pacages'));
const Banner = lazy(() => import('./components/hero-img/Banner'));
const Book = lazy(() => import('./components/book/Book'));
const Rating = lazy(() => import('./components/rating/Rating'));
const Yard = lazy(() => import('./components/yard/Yard'));
const Plane = lazy(() => import('./components/my plane/Plane'));
const Country = lazy(() => import('./components/counter/Country'));
const LastBanner = lazy(() => import('./components/last-hero-img/LastBanner'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Policy = lazy(() => import('./components/privacy/Policy'));
// Smooth Loading Spinner Component (used inside Suspense)
const LoadingFallback = () => (
  <div className="w-full py-16 flex items-center justify-center bg-[#F9F6F0]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-[3px] border-emerald-100 border-t-emerald-500 rounded-full animate-spin" />
      <span className="text-xs text-emerald-600/50 font-medium">Loading…</span>
    </div>
  </div>
);

const App = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  return (
    <>
      {/* Preloader shown until assets are ready */}
      {!preloaderDone && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* Main site – rendered underneath (hidden until preloader fades) */}
      <div
        className={`relative min-h-screen bg-[#F9F6F0] antialiased transition-opacity duration-500 ${
          preloaderDone ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Navbar overlay mode me topmost rahega */}
        <Navbar />
        
        <main>
          {/* Above-the-fold: Hero ko directly import rakha hai taaki layout shift na ho */}
          <Hero />

          {/* Baki heavy components Suspense me load honge */}
          <Suspense fallback={<LoadingFallback />}>
            <Slider />

            {/* Section IDs for Navbar Smooth Scrolling */}
            <div id="packages" className="scroll-mt-24">
              <Packages />
            </div>

            <Banner />

            <div id="contact" className="scroll-mt-24">
              <Book />
            </div>

            <div id="reviews" className="scroll-mt-24">
              <Rating />
            </div>

            <Yard />

            <div id="plane" className="scroll-mt-24">
              <Plane />
            </div>
            <div id="contact" className="scroll-mt-24">
              <Contact />
            </div>

            <div id="privacy" className="scroll-mt-24">
              <Policy />
            </div>

            <Country />
            <LastBanner />
            <Footer />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default App;