import React, { useState } from "react";

const categories = ["Backyard", "Front Yard", "Full Yard", "Small Space"];

const packagesData = [
  {
    id: "essential",
    title: "Essential",
    price: "$995",
    image:
      "https://images.ctfassets.net/6dgb2p7c933b/hLI9KK7D3xYIoytMtu76D/a890760faa11bf051352b79545cf7a7f/backyard-essential-plp.png",
    description:
      "Everything you need to confidently plan your outdoor project—without the extras, and at our most accessible price. Includes backyard and side yards.",
    link: "#packages",
  },
  {
    id: "classic",
    title: "Classic",
    price: "$1395",
    image:
      "https://images.ctfassets.net/6dgb2p7c933b/4yynHrt4eHwdEDUFyI74gC/7ced542f45487195daf98d3b6c02fdfd/backyard-classic.png",
    description:
      "A guided design experience with photorealistic renders and a dedicated project manager to bring your vision to life. Includes backyard and side yards.",
    link: "#packages",
  },
  {
    id: "signature",
    title: "Signature",
    price: "$1995",
    image:
      "https://images.ctfassets.net/6dgb2p7c933b/4nvVMJqmciQxBzTqVjuiet/eced1bb661d353836a226769856935a5/backyard-signature.png",
    description:
      "Our most comprehensive design experience, with expert guidance, day-to-night renders, and a cost advisor to help you build with confidence. Includes your entire backyard and side yards.",
    link: "#packages",
  },
];

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("Backyard");

  return (
    <section id="packages" className="w-full bg-[#FAF7F2] px-4 py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        {/* Title */}
        <h1 className="font-display text-center text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Van Vriksha Design Packages
        </h1>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <span className="font-serif italic text-emerald-900/80">
            Select where you want to design:
          </span>
          <div className="flex w-full flex-row gap-2 overflow-x-auto px-1 py-1 no-scrollbar md:w-auto md:gap-3">
            {categories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`min-w-28 flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                    isSelected
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/60"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Package Cards Grid */}
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col gap-4 p-6">
                {/* Package Header */}
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-display text-2xl font-bold text-gray-900">
                    {pkg.title}
                  </h2>
                  <div className="rounded-full border border-emerald-900/20 bg-emerald-50/50 px-4 py-1.5">
                    <span className="font-body text-xl font-bold text-emerald-500">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Package Image */}
                <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={pkg.image}
                    alt={`${pkg.title} package preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed text-gray-600">
                  {pkg.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-auto p-6 pt-0">
                <a
                  href={pkg.link}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                >
                  Learn More
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}