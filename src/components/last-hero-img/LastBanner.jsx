import React from 'react';

export default function LastBanner() {
  return (
    <section className="bg-[#FAF7F2] py-20 md:py-28 px-4 sm:px-6 text-center flex items-center justify-center min-h-[480px]">
      <div className="flex flex-col items-center gap-12 max-w-7xl mx-auto w-full">
        
        {/* Main Banner Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-[55px] text-[#1E2E28] tracking-tight leading-tight font-medium">
          Live a better life outside
        </h2>

        {/* Larger Side-by-Side Videos Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          
          {/* First Video (Side-by-Side & Large) */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DCD5C9] bg-white/50 relative">
            <iframe
              src="https://drive.google.com/file/d/1uOViepnRI7Zzj5uyQDAeIw8cPW4kD2Bs/preview"
              title="Van Vriksha Landscaping Video 1"
              className="w-full h-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Second Video (Side-by-Side & Large) */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DCD5C9] bg-white/50 relative">
            <iframe
              src="https://drive.google.com/file/d/1XmWkf6VBrKC96e9lOQMT81RdQ94KJDw6/preview"
              title="Van Vriksha Landscaping Video 2"
              className="w-full h-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>

        {/* CTA Consultation Button */}
        <div className="pt-4">
          <a
            href="#contacts"
            className="inline-flex items-center justify-center bg-[#2E5B37] hover:bg-[#1C3F30] text-white text-base sm:text-lg font-semibold px-9 py-4 rounded-full transition-all shadow-md hover:shadow-xl active:scale-95"
          >
            Book Your Consultation
          </a>
        </div>

      </div>
    </section>
  );
}