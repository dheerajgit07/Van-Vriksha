import React from 'react';

export default function LastBanner() {
  return (
    <section className="bg-[#FAF7F2] py-14 sm:py-20 md:py-28 px-4 sm:px-6 text-center flex items-center justify-center min-h-[480px]">
      <div className="flex flex-col items-center gap-8 sm:gap-12 max-w-7xl mx-auto w-full">
        
        {/* Main Banner Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-[55px] text-[#1E2E28] tracking-tight leading-snug sm:leading-tight font-medium">
          Live a better life outside
        </h2>

        {/* Side-by-Side Videos Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          
          {/* First Video */}
          <div className="w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl border-2 border-[#DCD5C9] bg-black relative">
            <video
              src="https://drive.google.com/uc?export=download&id=1uOViepnRI7Zzj5uyQDAeIw8cPW4kD2Bs"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

          {/* Second Video */}
          <div className="w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl border-2 border-[#DCD5C9] bg-black relative">
            <video
              src="https://drive.google.com/uc?export=download&id=1XmWkf6VBrKC96e9lOQMT81RdQ94KJDw6"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

        </div>

        {/* CTA Consultation Button */}
        <div className="pt-2 sm:pt-4">
          <a
            href="#contacts"
            className="inline-flex items-center justify-center bg-[#2E5B37] hover:bg-[#1C3F30] text-white text-base sm:text-lg font-semibold px-8 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all shadow-md hover:shadow-xl active:scale-95"
          >
            Book Your Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
