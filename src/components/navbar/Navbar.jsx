import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth Scroll Helper Handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-3 font-sans">
      <div className="max-w-[1400px] mx-2 sm:mx-6 lg:mx-auto">
        <header className="w-full bg-[#FAF7F2]/95 backdrop-blur-md border border-[#DCD5C9] rounded-2xl shadow-sm py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 -ml-1 text-[#1C3F30] hover:bg-black/5 rounded-md focus:outline-none lg:hidden"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Brand / Logo */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="flex items-center gap-2 sm:gap-3 group py-1"
            >
              <img 
                src="/logo1.png" 
                alt="Van Vriksha Landscaping Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />

              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-[#2E5B37] group-hover:text-[#1C3F30] transition-colors leading-tight">
                  Van Vriksha Landscaping
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold text-[#59a785] tracking-wider">
                  Landscape Designer in Haryana • Karnal
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-[#2E5B37]">
              <a href="#packages" onClick={(e) => handleNavClick(e, 'packages')} className="hover:text-[#1C3F30] transition-colors">
                Packages
              </a>
              <a href="#plane" onClick={(e) => handleNavClick(e, 'plane')} className="hover:text-[#1C3F30] transition-colors whitespace-nowrap">
                How it Works
              </a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="flex items-center gap-1.5 hover:text-[#1C3F30] transition-colors whitespace-nowrap">
                <span>Reviews</span>
                <span className="bg-[#E2DACB] text-[#1C3F30] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">5.0 ★</span>
              </a>
              <a href="#contacts" onClick={(e) => handleNavClick(e, 'contacts')} className="hover:text-[#1C3F30] transition-colors whitespace-nowrap">
                Contact Us
              </a>
              <a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')} className="hover:text-[#1C3F30] transition-colors whitespace-nowrap">
                Privacy Policy
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a 
                href="#contacts" 
                onClick={(e) => handleNavClick(e, 'contacts')}
                className="bg-[#2E5B37] hover:bg-[#1C3F30] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <a 
                href="#contacts" 
                onClick={(e) => handleNavClick(e, 'contacts')}
                className="bg-[#2E5B37] hover:bg-[#1C3F30] text-white text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all whitespace-nowrap"
              >
                Contact
              </a>
            </div>

          </div>

          {/* Mobile Drawer */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-2 space-y-1 border-t border-[#DCD5C9] mt-3 text-[#1C3F30]">
              <a href="#packages" onClick={(e) => handleNavClick(e, 'packages')} className="block py-2 text-base font-medium hover:text-[#2E5B37]">
                Packages
              </a>
              <a href="#plane" onClick={(e) => handleNavClick(e, 'plane')} className="block py-2 text-base font-medium hover:text-[#2E5B37]">
                How it Works
              </a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="block py-2 text-base font-medium hover:text-[#2E5B37]">
                5.0 ★ Reviews
              </a>
              <a href="#contacts" onClick={(e) => handleNavClick(e, 'contacts')} className="block py-2 text-base font-medium hover:text-[#2E5B37]">
                Contact Us
              </a>
              <a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')} className="block py-2 text-base font-medium hover:text-[#2E5B37]">
                Privacy Policy
              </a>
              <div className="pt-3">
                <a href="#contacts" onClick={(e) => handleNavClick(e, 'contacts')} className="block text-center py-2.5 bg-[#2E5B37] text-white rounded-full font-semibold shadow-md">
                  Book Consultation
                </a>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
