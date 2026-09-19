import React from 'react';

export default function LastBanner() {
  return (
    <section className="bg-[#FAF7F2] py-20 md:py-28 px-6 text-center flex items-center justify-center min-h-[480px]">
      <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
        {/* Main Banner Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-[55px] text-[#1E2E28] tracking-tight leading-tight font-medium">
          Live a better life outside
        </h1>

        {/* CTA Quiz Button */}
        <button className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-[#1E2E28] text-[#1E2E28] bg-transparent hover:bg-[#1E2E28] hover:text-white transition-all duration-300 font-medium text-base group cursor-pointer shadow-xs">
          <span>Take Our Quiz</span>
          <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center">
            <svg
              aria-hidden="true"
              className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 448 512"
            >
              <path d="M443.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l377.4 0L244.7 420.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l176-176z" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}