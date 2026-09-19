import React from "react";

const features = [
  {
    id: 1,
    title: "Balcony & Cozy Green Makeovers",
    description:
      "Transforming urban balconies and compact patios into cozy, relaxing green retreats customized with architectural precision.",
    image:
      "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789793072/AHRPTWkelWV2ACr4t-vLE3Y4OM_Nzghgpl7rwc-4NF6c2oDoNCOIxeGUiHe1jZEF0IQSmRoI2djgc9cdBFXrb10frmSMF08b03m8kTIODCfFgHSxK7rDIhrEIoNa3TSgog4d4w0vOswu_nCZmuZe_s680-w680-h510-rw_hcidrj.webp",
    link: "#contact",
  },
  {
    id: 2,
    title: "Architects & Horticulturists Panel",
    description:
      "In-house experts i.e. Architects and Horticulturists on our panel to ensure your landscape design is executed right the first time.",
    image:
      "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789793049/AHRPTWkB4qAkjPvmSVAPBTQdEATpZGcG3WOww2jZSFCTogRGFwnkJtW3EFPP3k2jXgJ7PCi5ytiU0azePiGSlTdsxa22cLL5Usm4jhjKJb48AqdovYAH5tQuW8gqufNeLacacdjh4_p-jf4_PjkL_s680-w680-h510-rw_rvc5pf.webp",
    link: "#contact",
  },
  {
    id: 3,
    title: "Full Landscape Implementation",
    description:
      "Complete end-to-end design and installation for residences and estates across Karnal and nearby areas in Haryana.",
    image:
      "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789793008/AHRPTWkO-HQEuSaegsEhfhJ5y8N22sDjurrAYLDHliwmeoUqdOK9pe8QNKMGDxATOkaS2m0MhShaErshPnOJPpZFzpDjgO0AAzlhYBf4rBf1-D86J7wFP4vQHdvn0Dk1JxG9Q12or9hq9M3HmLPk_s680-w680-h510-rw_bb30ik.webp",
    link: "#contact",
  },
];

export default function YardzenLandingPage() {
  return (
    <div className="w-full bg-[#FAF7F2] text-gray-900 font-sans">
      
      {/* SECTION 1: Awards & Company Mission Banner */}
      <section className="w-full px-4 py-8 md:py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-white via-[#F4EFE6] to-emerald-100/60 p-6 shadow-sm backdrop-blur-sm md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            
            {/* Content Left */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-4">
                <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                  5.0 ★ Top Rated Landscape Designer in Haryana
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl lg:text-5xl">
                Van Vriksha Landscaping
              </h3>

              <p className="mt-4 text-base leading-relaxed text-emerald-900/80 italic font-serif">
                "We provide with passion and dedication to our customers the best Landscape designing and implementation services, with experts i.e., Architects and Horticulturists on our panel. Do it right the first time!"
              </p>

              <div className="mt-4 text-xs font-semibold text-emerald-800 space-y-1">
                <p>📍 Address: 2250, Sector 7, Karnal, Phusgarh Part, Haryana 132001</p>
                <p>🕒 Hours: Open · Closes 8:00 PM</p>
                <p>🌿 Serving: Karnal and nearby areas</p>
              </div>

              <div className="mt-6 md:mt-8">
                <a
                  href="#contacts"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
                >
                  Book Landscape Consultation
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Banner Hero Image Right */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-emerald-300 to-emerald-100 p-1 shadow-lg">
              <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-emerald-100">
                <img
                  src="https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789793072/AHRPTWkelWV2ACr4t-vLE3Y4OM_Nzghgpl7rwc-4NF6c2oDoNCOIxeGUiHe1jZEF0IQSmRoI2djgc9cdBFXrb10frmSMF08b03m8kTIODCfFgHSxK7rDIhrEIoNa3TSgog4d4w0vOswu_nCZmuZe_s680-w680-h510-rw_hcidrj.webp"
                  alt="Van Vriksha Landscaping Showcase"
                  loading="lazy"
                  className="h-full max-h-[460px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Van Vriksha Landscaping */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-14">
            <h3 className="font-display text-3xl font-bold tracking-tight text-emerald-900 md:text-5xl">
              Why Van Vriksha Landscaping?
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-500/10 bg-[#F4EFE6]/70 p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-xl"
              >
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-emerald-550/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h5 className="font-display text-xl font-semibold tracking-tight text-emerald-950">
                      {item.title}
                    </h5>
                    <p className="mt-3 text-base leading-relaxed text-emerald-900/80">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={item.link}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-emerald-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    Learn More
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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

      {/* SECTION 3: Have Questions? */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-emerald-900 md:text-5xl">
            Have Questions About Your Space?
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-emerald-900/80 md:text-lg">
            Our expert Architects and Horticulturists are ready to help! Contact Van Vriksha Landscaping today to discuss your vision for balcony, terrace, or yard design in Karnal.
          </p>

          <div className="mt-6 md:mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}