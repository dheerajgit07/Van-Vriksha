import React, { useState, useRef, useCallback } from 'react';

export default function Plane() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Aapki dono images
  const beforeImg = "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789794113/IMG_5931_imeldr.png";
  const afterImg = "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791785/IMG_9941_srz0jy.jpg";

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="bg-[#FAF7F2] min-h-screen py-12 md:py-20 text-[#1E2E28] font-sans">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col gap-8 md:gap-10">
        
        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1E2E28] font-medium">
          Explore Before &amp; Afters
        </h1>

        {/* Project Title & Description */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-12 sm:items-start pt-2">
          <div className="flex-1">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1E2E28] leading-tight">
              Van Vriksha Transformation
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-base sm:text-lg text-[#2C3E35]/80 leading-relaxed">
              Slide left or right to explore the full visual transformation of the space.
            </p>
          </div>
        </div>

        {/* Before / After Interactive Slider */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-md cursor-ew-resize select-none touch-none border border-[#E0DBCF]"
        >
          {/* AFTER Image */}
          <img
            src={afterImg}
            alt="After transform"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* BEFORE Image */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={beforeImg}
              alt="Before transform"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          </div>

          {/* Slider Handle Divider Line */}
          <div
           id="plane" className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border-2 border-white shadow-lg flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#1E2E28] shadow-sm">
            After
          </div>

          <div className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#1E2E28] shadow-sm">
            Before
          </div>
        </div>

        {/* Footer Action Button */}
        <div className="flex w-full justify-center pt-2">
          <button className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#1E2E28] text-[#1E2E28] font-medium text-base hover:bg-[#1E2E28] hover:text-white transition-all duration-300 shadow-xs group">
            <span>Explore more before and afters</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}