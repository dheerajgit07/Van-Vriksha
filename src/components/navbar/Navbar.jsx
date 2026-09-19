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
        <header className="w-full bg-white/90 backdrop-blur-md border border-[#DCD5C9] rounded-xl shadow-xs py-3 px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">

            {/* Left Side */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 -ml-1.5 text-[#1C3F30] hover:bg-black/5 rounded-md focus:outline-none lg:hidden"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex flex-col">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#2E5B37]">
                  Van Vriksha Landscaping
                </span>
                <span className="text-[11px] font-semibold text-[#59a785] tracking-wider -mt-1">
                  Landscape Designer in Haryana • Karnal
                </span>
              </a>

              <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#2E5B37]">
                <div
                  className="relative py-1 cursor-pointer"
                  onMouseEnter={() => setActiveDropdown(true)}
                  onMouseLeave={() => setActiveDropdown(false)}
                >
                  <a 
                    href="#packages" 
                    onClick={(e) => handleNavClick(e, 'packages')}
                    className="flex items-center gap-1 hover:opacity-75 transition-opacity"
                  >
                    Explore Packages
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown ? 'rotate-180' : ''}`} />
                  </a>

                  {activeDropdown && (
                    <div className="absolute top-full -left-4 w-56 bg-[#F9F6F0] border border-[#DCD5C9] rounded-xl shadow-lg py-2 mt-2 z-50">
                      <a 
                        href="#backyard" 
                        onClick={(e) => handleNavClick(e, 'backyard')}
                        className="block px-4 py-2 text-sm text-[#1C3F30] hover:bg-[#EFE8DC]"
                      >
                        Balcony &amp; Backyard Design
                      </a>
                      <a 
                        href="#frontyard" 
                        onClick={(e) => handleNavClick(e, 'frontyard')}
                        className="block px-4 py-2 text-sm text-[#1C3F30] hover:bg-[#EFE8DC]"
                      >
                        Front Yard Design
                      </a>
                      <a 
                        href="#fullyard" 
                        onClick={(e) => handleNavClick(e, 'fullyard')}
                        className="block px-4 py-2 text-sm text-[#1C3F30] hover:bg-[#EFE8DC]"
                      >
                        Full Estate Landscape
                      </a>
                    </div>
                  )}
                </div>

                <a 
                  href="#plane" 
                  onClick={(e) => handleNavClick(e, 'plane')}
                  className="hover:opacity-75 transition-opacity"
                >
                  How it Works
                </a>
                <a 
                  href="#reviews" 
                  onClick={(e) => handleNavClick(e, 'reviews')}
                  className="flex items-center gap-1.5 hover:opacity-75 transition-opacity"
                >
                  <span>Reviews</span>
                  <span className="bg-[#E2DACB] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">5.0 ★</span>
                </a>
                <a 
                  href="#contacts" 
                  onClick={(e) => handleNavClick(e, 'contacts')}
                  className="hover:opacity-75 transition-opacity"
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3.5">
              <a 
                href="#contacts" 
                onClick={(e) => handleNavClick(e, 'contacts')}
                className="bg-[#2E5B37] hover:bg-[#1C3F30] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-xs"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <a 
                href="#contacts" 
                onClick={(e) => handleNavClick(e, 'contacts')}
                className="bg-[#2E5B37] text-white text-xs font-semibold px-4 py-2 rounded-full"
              >
                Contact
              </a>
            </div>

          </div>

          {/* Mobile Drawer */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-2 space-y-2 border-t border-[#DCD5C9] mt-3 text-[#1C3F30]">
              <a 
                href="#packages" 
                onClick={(e) => handleNavClick(e, 'packages')}
                className="block py-2 text-base font-medium"
              >
                Explore Packages
              </a>
              <a 
                href="#plane" 
                onClick={(e) => handleNavClick(e, 'plane')}
                className="block py-2 text-base font-medium"
              >
                How it Works
              </a>
              <a 
                href="#reviews" 
                onClick={(e) => handleNavClick(e, 'reviews')}
                className="block py-2 text-base font-medium"
              >
                5.0 ★ Reviews
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block py-2 text-base font-medium"
              >
                Contact Us
              </a>
              <div className="pt-3 space-y-2">
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="block text-center py-2 bg-[#2E5B37] text-white rounded-full font-semibold"
                >
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