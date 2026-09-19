import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const pressLogos = [
  {
    id: 1,
    name: "WSJ",
    src: "https://images.ctfassets.net/6dgb2p7c933b/2fjtYILQNwT09YfG5taWY1/9006dd2a8819a8aea56e0dd7c77d53e4/wsj-logo.png?w=256&q=75&fm=webp&fit=fill",
  },
  {
    id: 2,
    name: "Southern Living",
    src: "https://images.ctfassets.net/6dgb2p7c933b/7rQFVNaSabtHWeRAUR1xWI/ba3fa3450cffcc99222aedc944a099bc/southern-living-logo.png?w=256&q=75&fm=webp&fit=fill",
  },
  {
    id: 3,
    name: "Better Homes",
    src: "https://images.ctfassets.net/6dgb2p7c933b/1D5Qtf1XVXHR3fWsW6N44P/3e81cbe40ce0fe1644426c1ccde9e49b/better-homes-logo.png?w=256&q=75&fm=webp&fit=fill",
  },
  {
    id: 4,
    name: "Sunset",
    src: "https://images.ctfassets.net/6dgb2p7c933b/5dmAF7ZE8TIbcGklDuvuDl/46da24f25a506007db05e23f4c062dbd/sunset-logo.png?w=256&q=75&fm=webp&fit=fill",
  },
  {
    id: 5,
    name: "Domino",
    src: "https://images.ctfassets.net/6dgb2p7c933b/1JJEFRvvYNB6rG9lCzMhDj/65bc1b412f14da4f3595f9d7f8cc6949/domino-logo.png?w=256&q=75&fm=webp&fit=fill",
  },
  {
    id: 6,
    name: "Architectural Digest",
    src: "https://images.ctfassets.net/6dgb2p7c933b/SeM5L6GwsaGvGUBDgNq2t/357ae41a1621558f754f0e5aae70e849/ad-logo.png?w=256&q=75&fm=webp&fit=fill",
  },
];

const carouselItems = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791776/IMG_9932_wpxze2.jpg",
    alt: "Van Vriksha Landscaping Transformation 1",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791771/fcf0e8a7-295b-4607-b7f0-6cb7d1e172e5_nt9tkv.jpg",
    alt: "Van Vriksha Landscaping Transformation 2",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791770/caa1bef8-26fe-4284-9a54-89d4fc7e7c4a_hmucio.jpg",
    alt: "Van Vriksha Landscaping Transformation 3",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791769/dee5bcea-a490-4f9c-ab71-d9f417259966_ut8s2i.jpg",
    alt: "Van Vriksha Landscaping Transformation 4",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791768/88856569-789c-4f2c-b6be-115892db58e7_jg8blc.jpg",
    alt: "Van Vriksha Landscaping Transformation 5",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791765/10bae2e6-6c6c-467e-a18a-aec949b1e5ee_q10pte.jpg",
    alt: "Van Vriksha Landscaping Transformation 6",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791766/7a1881b3-7da7-45f1-be79-2f555050448c_nqsxiq.jpg",
    alt: "Van Vriksha Landscaping Transformation 7",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791370/IMG_5887_vppeah.jpg",
    alt: "Van Vriksha Landscaping Transformation 8",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791365/IMG_5883_vbvofq.jpg",
    alt: "Van Vriksha Landscaping Transformation 9",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791350/IMG_5885_youmf9.jpg",
    alt: "Van Vriksha Landscaping Transformation 10",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dkvzrmzkl/image/upload/v1789791326/EU4A8352.JPG_won0a0.jpg",
    alt: "Van Vriksha Landscaping Transformation 11",
  },
];

export default function Slider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth;

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        x: () => -(totalWidth / 2),
        duration: 35,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-12">
      {/* Top Press / Media Logos Grid */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-12 text-center">
        <a
          href="/press"
          className="mx-auto block max-w-4xl rounded-lg p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <div className="grid grid-cols-3 items-center justify-items-center gap-6 md:grid-cols-6">
            {pressLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex h-12 w-full items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  className="max-h-10 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </a>
      </div>

      {/* Main Content & Infinite GSAP Carousel */}
      <div className="flex flex-col items-center text-center">
        <h1 className="font-display px-4 text-3xl font-light tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          The Smartest Path to a Yard You Love
        </h1>
        <p className="font-body mt-4 w-[90%] pb-8 text-base text-gray-700 md:max-w-[65%] md:text-lg">
          Van Vriksha Landscaping is the premier Haryana landscape design studio that pairs you with expert architects and horticulturists to create custom plans for your balcony, terrace, or yard—doing it right the first time.
        </p>

        {/* GSAP Continuous Slider Container */}
        <div
          className="relative w-full overflow-hidden"
          role="region"
          aria-label="Project showcase carousel"
        >
          <div ref={sliderRef} className="flex w-max space-x-4 pl-4">
            {[...carouselItems, ...carouselItems].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                role="group"
                aria-roledescription="slide"
                className="w-[280px] shrink-0 sm:w-[320px] md:w-[350px]"
              >
                <a
                  href="#"
                  className="group block rounded-xl transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-[400px] w-full rounded-2xl object-cover shadow-md md:h-[500px]"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}