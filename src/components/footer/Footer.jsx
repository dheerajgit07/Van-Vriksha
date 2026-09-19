import React from 'react';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-[#282f2c] border-t border-[#2E5B37] pt-16 pb-12 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info & Business Mission */}
          <div className="lg:col-span-2 flex flex-col gap-4 pr-0 lg:pr-8">
            <a href="/" className="font-serif text-3xl font-bold tracking-tight text-white">
              Van Vriksha Landscaping
            </a>
            <p className="text-xs text-emerald-100 italic leading-relaxed bg-[#244D3A] p-4 rounded-xl border border-[#376C53]">
              "We provide with passion and dedication to our customers the best Landscape designing and implementation services, with experts i.e., Architects and Horticulturists on our panel. Do it right the first time!"
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#81C784]">
              <span>5.0 ★ (37 Google Reviews)</span>
              <span>•</span>
              <span>Landscape Designer in Haryana</span>
            </div>
          </div>

          {/* Business Details & Location */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-semibold text-lg text-emerald-200">Address &amp; Location</h4>
            <address className="not-italic text-xs text-gray-300 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-white">Van Vriksha Landscaping HQ</p>
              <p>2250, Sector 7, Karnal,</p>
              <p>Phusgarh Part, Haryana 132001</p>
              <p className="pt-2 text-emerald-300 font-semibold">Areas served: Karnal and nearby areas</p>
            </address>
          </div>

          {/* Operating Hours */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-semibold text-lg text-emerald-200">Opening Hours</h4>
            <div className="text-xs text-gray-300 space-y-2">
              <p><strong className="text-white">Monday - Sunday:</strong></p>
              <p className="inline-block bg-[#81C784] text-[#1C3F30] font-bold px-3 py-1 rounded-full text-[11px]">
                Open · Closes 8:00 PM
              </p>
              <p className="pt-2 text-gray-300">Expert Panel: Architects &amp; Horticulturists</p>
            </div>
          </div>

          {/* Social & Connect */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-semibold text-lg text-emerald-200">Connect With Us</h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-300">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2 transition-colors">
                  <svg className="w-4 h-4 fill-current text-pink-400" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram @vanvriksha</span>
                </a>
              </li>
              <li><a href="tel:+919876543210" className="hover:text-white transition-colors">Call Office</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Write a Google Review</a></li>
            </ul>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#2E5B37]" />

        {/* Bottom Bar Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <div>
            &copy; {new Date().getFullYear()} Van Vriksha Landscaping. All rights reserved.
          </div>
          <div>
            Registered Landscape Designers in Haryana • Sector 7, Karnal
          </div>
        </div>

      </div>
    </footer>
  );
}
