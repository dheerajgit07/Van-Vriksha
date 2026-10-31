import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  // Smooth Scroll Helper Handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveDropdown(false);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-3 font-sans">
      <div className="max-w-[1400px] mx-4 sm:mx-6 lg:mx-auto">
        <header className="w-full bg-[#FAF7F2]/95 backdrop-blur-md border border-[#DCD5C9] rounded-2xl shadow-sm py-3 px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">

            {/* Left Side: Logo Image & Brand Text */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 -ml-1.5 text-[#1C3F30] hover:bg-black/5 rounded-md focus:outline-none lg:hidden"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="flex items-center gap-3 group py-1"
              >
                {/* Logo Image without box */}
                <img 
                  src="/logo1.png" 
                  alt="Van Vriksha Landscaping Logo" 
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />

                {/* Brand Text in Green Color */}
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2E5B37] group-hover:text-[#1C3F30] transition-colors">
                    Van Vriksha Landscaping
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#59a785] tracking-wider -mt-0.5">
                    Landscape Designer in Haryana • Karnal
                  </span>
                </div>
              </a>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#2E5B37]">
                
                {/* Dropdown Menu Wrapper */}
                <div
                  className="relative py-2 group"
                  onMouseEnter={() => setActiveDropdown(true)}
                  onMouseLeave={() => setActiveDropdown(false)}
                >
                  <a 
                    href="#packages" 
                    onClick={(e) => handleNavClick(e, 'packages')}
                    className="flex items-center gap-1.5 py-1 text-[#2E5B37] hover:text-[#1C3F30] transition-colors"
                  >
                    Explore Packages
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown ? 'rotate-180 text-[#1C3F30]' : ''}`} />
                  </a>

                  {/* Dropdown Box */}
                  <div 
                    className={`absolute top-full -left-4 w-60 pt-2 transition-all duration-200 ${
                      activeDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white border border-[#DCD5C9] rounded-2xl shadow-xl p-2 space-y-1">
                      <a 
                        href="#backyard" 
                        onClick={(e) => handleNavClick(e, 'backyard')}
                        className="block px-4 py-2.5 text-sm font-medium text-[#1C3F30] rounded-xl hover:bg-[#FAF7F2] transition-colors"
                      >
                        Balcony &amp; Backyard Design
                      </a>
                      <a 
                        href="#frontyard" 
                        onClick={(e) => handleNavClick(e, 'frontyard')}
                        className="block px-4 py-2.5 text-sm font-medium text-[#1C3F30] rounded-xl hover:bg-[#FAF7F2] transition-colors"
                      >
                        Front Yard Design
                      </a>
                      <a 
                        href="#fullyard" 
                        onClick={(e) => handleNavClick(e, 'fullyard')}
                        className="block px-4 py-2.5 text-sm font-medium text-[#1C3F30] rounded-xl hover:bg-[#FAF7F2] transition-colors"
                      >
                        Full Estate Landscape
                      </a>
                    </div>
                  </div>
                </div>

                <a href="#plane" onClick={(e) => handleNavClick(e, 'plane')} className="hover:text-[#1C3F30] transition-colors">
                  How it Works
                </a>
                <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="flex items-center gap-1.5 hover:text-[#1C3F30] transition-colors">
                  <span>Reviews</span>
                  <span className="bg-[#E2DACB] text-[#1C3F30] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">5.0 ★</span>
                </a>
                <a href="#contacts" onClick={(e) => handleNavClick(e, 'contacts')} className="hover:text-[#1C3F30] transition-colors">
                  Contact Us
                </a>
                <a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')} className="hover:text-[#1C3F30] transition-colors">
                  Privacy Policy
                </a>
              </nav>
            </div>

            {/* Right Side CTA */}
            <div className="hidden lg:flex items-center gap-3.5">
              <a 
                href="#contacts" 
                onClick={(e) => handleNavClick(e, 'contacts')}
                className="bg-[#2E5B37] hover:bg-[#1C3F30] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <a 
                href="#contacts" 
                onClick={(e) => handleNavClick(e, 'contacts')}
                className="bg-[#2E5B37] hover:bg-[#1C3F30] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all"
              >
                Contact
              </a>
            </div>

          </div>

          {/* Mobile Drawer */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-2 space-y-2 border-t border-[#DCD5C9] mt-3 text-[#1C3F30] animate-fade-in">
              <div className="px-2 font-bold text-xs uppercase tracking-wider text-[#59a785]">Packages</div>
              <a href="#backyard" onClick={(e) => handleNavClick(e, 'backyard')} className="block pl-4 py-1.5 text-sm font-medium">
                • Balcony &amp; Backyard Design
              </a>
              <a href="#frontyard" onClick={(e) => handleNavClick(e, 'frontyard')} className="block pl-4 py-1.5 text-sm font-medium">
                • Front Yard Design
              </a>
              <a href="#fullyard" onClick={(e) => handleNavClick(e, 'fullyard')} className="block pl-4 py-1.5 text-sm font-medium">
                • Full Estate Landscape
              </a>
              <hr className="border-[#DCD5C9] my-2" />
              <a href="#plane" onClick={(e) => handleNavClick(e, 'plane')} className="block py-2 text-base font-medium">
                How it Works
              </a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="block py-2 text-base font-medium">
                5.0 ★ Reviews
              </a>
              <a href="#contacts" onClick={(e) => handleNavClick(e, 'contacts')} className="block py-2 text-base font-medium">
                Contact Us
              </a>
              <div className="pt-3 space-y-2">
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