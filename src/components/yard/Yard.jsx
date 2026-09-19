import React, { useState } from 'react';

// Data Configuration
const livingAreas = [
  { id: 'patio', label: 'Patio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'deck', label: 'Deck', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
  { id: 'edible-garden', label: 'Edible Garden', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { id: 'sauna', label: 'Sauna', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'lounge', label: 'Lounge', icon: 'M20 12V8H4v4m16 0a2 2 0 012 2v4h-2v2h-2v-2H6v2H4v-2H2v-4a2 2 0 012-2m16 0H4' },
  { id: 'cold-plunge', label: 'Cold Plunge', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 8H9L8 4z' },
  { id: 'firepit', label: 'Firepit', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
  { id: 'dining', label: 'Dining', icon: 'M3 3h18v2H3V3zm2 4h14v2H5V7zm3 4h8v10H8V11z' },
  { id: 'play-space', label: 'Play Space', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'kitchen', label: 'Kitchen', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { id: 'pool', label: 'Swimming Pool', icon: 'M2 15c6.667-6 13.333 6 20 0M2 20c6.667-6 13.333 6 20 0' },
  { id: 'anything-else-1', label: 'And everything else', icon: 'M12 4v16m8-8H4' }
];

const landscapeSolutions = [
  { id: 'privacy', label: 'Privacy', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { id: 'native-plants', label: 'Native plants', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { id: 'slope', label: 'Slope', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { id: 'water-reduction', label: 'Water reduction', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707' },
  { id: 'drainage', label: 'Drainage', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 8H9L8 4z' },
  { id: 'seasonal-use', label: 'Seasonal Use', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { id: 'shade', label: 'Shade', icon: 'M12 3v2m0 14v2m9-9h-2M5 12H3m14.485-6.485l-1.414 1.414M7.929 17.071l-1.414 1.414m11.314 0l-1.414-1.414M7.929 6.929L6.515 5.515' },
  { id: 'pets', label: 'Pets', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { id: 'noise', label: 'Noise', icon: 'M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' },
  { id: 'kids', label: 'Kids', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'retaining-wall', label: 'Retaining wall', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { id: 'anything-else-2', label: 'And everything else', icon: 'M12 4v16m8-8H4' }
];

export default function Yard() {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-[#FAF7F2] text-[#2C3E35] min-h-screen font-sans">
      <div className="mt-5 flex flex-col items-center justify-center px-4 pb-12 text-center md:px-8">
        
        {/* Header */}
        <h1 className="font-serif tracking-tight text-4xl lg:text-5xl text-[#1E2E28] px-4 pt-12 font-medium">
          Your yard, your way.
        </h1>
        
        <div className="text-[#2C3E35]/80 mt-4 w-[90%] pb-8 text-base md:min-w-[37%] md:max-w-[65%] md:text-lg">
          <p>You name it, we can design it, factoring every detail of your unique property.</p>
        </div>

        {/* Options Grid Container */}
        <div className="w-full max-w-7xl rounded-lg bg-transparent">
          <div className="flex flex-col justify-center gap-10 md:flex-row lg:gap-16">
            
            {/* Living Areas Section */}
            <div className="flex-1">
              <div className="flex flex-col items-center mb-8 md:mb-10">
                <span className="inline-flex items-center rounded-full border border-emerald-800/10 px-4 py-1 text-base font-medium text-[#2C3E35] bg-[#E8F0E3] my-4 w-fit text-center">
                  Living Areas
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center mt-2">
                  {livingAreas.map((item) => {
                    const isSelected = selectedItems.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleSelection(item.id)}
                        className={`w-full max-w-[162px] h-20 p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-200 border-2 text-sm font-medium ${
                          isSelected
                            ? 'bg-[#E3F2C1] border-[#1E2E28] text-[#1E2E28] shadow-sm'
                            : 'bg-white border-transparent hover:bg-[#F3F7EC] text-[#2C3E35] shadow-xs'
                        }`}
                      >
                        <svg
                          className={`w-6 h-6 ${isSelected ? 'text-[#1E2E28]' : 'text-[#3E5346]'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                        <span className="text-center text-xs sm:text-sm">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Landscape Solutions Section */}
            <div className="flex-1">
              <div className="flex flex-col items-center mb-8 md:mb-10">
                <span className="inline-flex items-center rounded-full border border-emerald-800/10 px-4 py-1 text-base font-medium text-[#2C3E35] bg-[#E8F0E3] my-4 w-fit text-center">
                  Landscape Solutions
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center mt-2">
                  {landscapeSolutions.map((item) => {
                    const isSelected = selectedItems.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleSelection(item.id)}
                        className={`w-full max-w-[162px] h-20 p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-200 border-2 text-sm font-medium ${
                          isSelected
                            ? 'bg-[#E3F2C1] border-[#1E2E28] text-[#1E2E28] shadow-sm'
                            : 'bg-white border-transparent hover:bg-[#F3F7EC] text-[#2C3E35] shadow-xs'
                        }`}
                      >
                        <svg
                          className={`w-6 h-6 ${isSelected ? 'text-[#1E2E28]' : 'text-[#3E5346]'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                        <span className="text-center text-xs sm:text-sm">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center p-6 pt-6 w-full max-w-xs">
          <a
            href="#"
            className="inline-flex items-center justify-center w-full min-h-[48px] px-8 py-3 text-base font-medium text-white transition-all duration-300 bg-[#1E2E28] rounded-full hover:bg-[#2C3E35] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1E2E28] focus:ring-offset-2"
          >
            Find My Plan
          </a>
        </div>

      </div>
    </section>
  );
}