import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle2, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function Hero() {
  const slides = [
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkLSk3COaa4FnamGf16yPB_LWIIBjp_CMs4Apv-X7ezJTKgveFcbObsf03cbmYnZcbsyH37dxQYlcbUtszuDoVy4tK66U64QH-TzRKXjf9TK9-fIAQKD36J6EL-eQj-LBxplETFPl0HMfVW=s680-w680-h510-rw",
      tag: "Balcony & Cozy Green Retreats"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHNvGkzAsASKKosdigoMQSXCIOguGv_exOL3OPWPAWkNxxFKoMYv02SMwvLsvcZNfAuQEN-afdxAdviySGM2W0QMTEvD6Bermc6xnzYD27GdHzwWanViOeoss8254wfjNhSNwf4kAEfYdU=s680-w680-h510-rw",
      tag: "Architectural Landscape Designing"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlKzOlAywj_4wWpvsPmN_bZchLV6weq1-_vVhHbpFwpE5Ht4SvDP6JY4ViZLzBskLa4kHMc7aWmn6Ul-xiQ1FUsOMXbwKOF9w6j9t1x46qVfJ4puh8hMzlz_cvKQJ0AVwJ0VJx0zS7hU4k=s680-w680-h510-rw",
      tag: "Native Horticulture & Garden Walkways"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnBfI1dJagN3akqHuu2Ne42wrusVocZRmZ1m75i4be49phNifkDfEiVw8zQQd2GXzIr4pIv2ptER5yLUzeP6rKFh5es-T97BXfjd0D4-FMjdLvPRRwPf4HBRamgj0FF20MczOLSLYpY1KEx=s680-w680-h510-rw",
      tag: "Outdoor Courtyards & Custom Firepits"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1Y0hnUQoMpcAavxOJlBC2X5Aeajuob2Ofgz1-hO_g7oKkQilFuMnlhs0qUHVEL-7CkL5i75RpAn9rMADNy-k1ahRa1edow6ps050islGGkjub3l2zNWbuBP1kUgQGmJ-PzYMBRQp9_mM=s680-w680-h510-rw",
      tag: "Lush Greenery & Custom Landscape Solutions"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[750px] flex items-center font-sans overflow-hidden">
      
      {/* Background Auto-Changing Images with Increased Brightness */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={slide.url}
            alt={`Van Vriksha Landscaping ${index + 1}`}
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          {/* Light overlay for clean contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Hero Overlay Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-36 pb-12">
        
        {/* Compact Creamy Glass Card Container */}
        <div className="max-w-xs sm:max-w-sm bg-[#FAF7F2]/90 backdrop-blur-md border border-[#2D8425]/20 p-4 sm:p-5 rounded-2xl shadow-2xl space-y-3 text-[#1D461A]">
          
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#E3F4E1] border border-[#2D8425]/30 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-[#1D461A]">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span>5.0 / 5</span>
            <span className="text-[#1D461A]/40">•</span>
            <span>37 Reviews</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#2D8425]">
            <MapPin className="w-3.5 h-3.5 text-[#2D8425]" />
            <span>Karnal &amp; Nearby Areas, Haryana</span>
          </div>

          {/* Business Name */}
          <h1 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-[#1D461A]">
            Van Vriksha Landscaping
          </h1>

          {/* Subheading / Quote */}
          <p className="text-[11px] sm:text-xs text-[#2C482A] font-normal leading-relaxed italic">
            "We provide the best Landscape designing &amp; implementation services with Architects &amp; Horticulturists on panel. Do it right the first time!"
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-1">
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-1.5 bg-[#2D8425] hover:bg-[#1D461A] text-white font-semibold px-4 py-2 rounded-full transition-all text-xs text-center shadow-sm"
            >
              Explore Packages
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 bg-[#F4EFE6] hover:bg-[#E8E2D5] text-[#1D461A] font-semibold px-4 py-2 rounded-full transition-all text-xs text-center border border-[#E8E2D5]"
            >
              Book Site Visit
            </a>
          </div>

          {/* Feature Bullets */}
          <div className="pt-2 flex flex-col gap-1.5 text-[10px] sm:text-xs text-[#1D461A] font-medium border-t border-[#E8E2D5]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2D8425] shrink-0" />
              <span>Architects &amp; Horticulturists Panel</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2D8425] shrink-0" />
              <span>Balcony &amp; Backyard Makeovers</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-5 right-5 sm:right-10 z-20 flex items-center gap-2 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#2D8425]/20 shadow-md">
        <button
          onClick={prevSlide}
          className="p-1 text-[#1D461A] hover:text-[#2D8425] transition-colors focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-4 bg-[#2D8425]' : 'w-1 bg-[#1D461A]/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-1 text-[#1D461A] hover:text-[#2D8425] transition-colors focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}
