import React, { Suspense, lazy } from 'react';
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

// Smooth Loading Spinner Component
const LoadingFallback = () => (
  <div className="w-full py-12 flex items-center justify-center bg-[#F9F6F0]">
    <div className="w-8 h-8 border-3 border-[#2E5B37]/20 border-t-[#2E5B37] rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#F9F6F0] antialiased">
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

          <Country />
          <LastBanner />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default App;