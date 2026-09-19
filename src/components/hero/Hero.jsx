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
    <section className="relative w-full min-h-[750px] lg:min-h-[750px] flex items-center font-sans overflow-hidden">
      
      {/* Background Auto-Changing Images */}
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
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Hero Overlay Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-32 sm:pt-36 lg:pt-44 pb-16">
        
        {/* Glass Card Container */}
        <div className="max-w-lg sm:max-w-xl bg-black/55 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-4 text-white">
          
          {/* Rating Badge from Google Reviews */}
          <div className="inline-flex items-center gap-2 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#DCD5C9] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1C3F30]">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>5.0 / 5 Rating</span>
            <span className="text-[#1C3F30]/40">•</span>
            <span>37 Google Reviews</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#81C784]">
            <MapPin className="w-4 h-4 text-[#81C784]" />
            <span>Serving Karnal &amp; Nearby Areas, Haryana</span>
          </div>

          {/* Business Name & Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#FAF7F2]">
            Van Vriksha Landscaping
          </h1>

          {/* Subheading / Quote */}
          <p className="text-xs sm:text-sm text-[#E8E3D9] font-normal leading-relaxed italic">
            "We provide with passion and dedication to our customers the best Landscape designing and implementation services, with experts i.e., Architects and Horticulturists on our panel. Do it right the first time!"
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 bg-[#2E5B37] hover:bg-[#1C3F30] text-white font-semibold px-6 py-3 rounded-full transition-all text-xs sm:text-sm text-center border border-[#81C784]/40 shadow-md"
            >
              Explore Design Packages
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-[#EFE8DC] text-[#1C3F30] font-semibold px-6 py-3 rounded-full transition-all text-xs sm:text-sm text-center"
            >
              Book Site Visit in Karnal
            </a>
          </div>

          {/* Feature Bullets */}
          <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#F0ECE1] font-medium border-t border-white/20">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#81C784]" />
              <span>Architects &amp; Horticulturists Panel</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#81C784]" />
              <span>Balcony &amp; Backyard Makeovers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#81C784]" />
              <span>Do It Right The First Time</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
        <button
          onClick={prevSlide}
          className="p-1 text-white hover:text-[#81C784] transition-colors focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-1 text-white hover:text-[#81C784] transition-colors focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}