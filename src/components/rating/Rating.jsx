import React, { useState } from "react";

const StarIcon = ({ className = "h-4 w-4 fill-amber-400 text-amber-400" }) => (
  <svg aria-hidden="true" className={className} viewBox="0 0 576 512">
    <path
      fill="currentColor"
      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
    />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 320 512" className="h-4 w-4 fill-current">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 320 512" className="h-4 w-4 fill-current">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5 12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
);

const googleReviewsData = [
  {
    name: "Prerna Rathi",
    text: "Got my balcony transformed in to a cosy green place to sit and relax!",
    type: "Balcony Landscape Design",
    location: "Karnal, Haryana",
    badge: "Verified Google Review"
  },
  {
    name: "Arvind Sandhu",
    text: "Mind blowing designs and service.",
    type: "Full Landscape Execution",
    location: "Karnal, Haryana",
    badge: "Verified Google Review"
  },
  {
    name: "Pooja Nair",
    text: "Great attention to detail and lovely people to work with.",
    type: "Garden & Terrace Makeover",
    location: "Haryana",
    badge: "Verified Google Review"
  }
];

export default function Rating() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : googleReviewsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < googleReviewsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="reviews" className="w-full bg-[#FAF7F2] px-4 py-12 font-sans text-emerald-950 md:py-16">
      
      {/* Header */}
      <div className="mx-auto flex w-full max-w-[850px] flex-col items-center gap-3 text-center">
        
        {/* Google Reviews Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-2 shadow-xs"
          aria-label="rating"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <span className="font-display text-sm font-bold text-emerald-950">
            5.0 ★ (37 Google Reviews)
          </span>
        </div>

        <h2 className="font-display text-3xl font-bold tracking-tight text-emerald-950 md:text-5xl">
          Loved by Clients Across Karnal &amp; Haryana
        </h2>
        
        <p className="text-sm text-emerald-900/80 max-w-lg">
          Read genuine reviews from homeowners who turned their balconies and yards into lush green sanctuaries with Van Vriksha Landscaping.
        </p>
      </div>

      {/* Testimonials Cards Grid & Carousel */}
      <div className="mx-auto max-w-5xl px-4 mt-10">
        <div className="relative px-4 sm:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {googleReviewsData.map((review, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between gap-4 rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {review.badge}
                    </span>
                  </div>

                  <p className="font-display text-xl font-bold text-emerald-950 mb-2">
                    {review.name}
                  </p>

                  <p className="text-sm italic leading-relaxed text-gray-700">
                    "{review.text}"
                  </p>
                </div>

                <div className="border-t border-emerald-900/10 pt-3">
                  <p className="text-xs font-semibold text-emerald-800">
                    {review.type} • {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}