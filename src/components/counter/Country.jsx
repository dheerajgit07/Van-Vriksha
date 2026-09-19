import React, { useRef, useState } from 'react';

const locations = [
  {
    id: 'austin-tx',
    city: 'Austin, TX',
    clients: 'Stacey & Sean',
    link: 'https://yardzen.com/yzblog/low-maintenance-backyard-austin-tx',
    mainImg: 'https://images.ctfassets.net/6dgb2p7c933b/3Dg0eZCi55jZoRWDcvJIfK/4a364a7ec2941bac8a601be1ed2cf598/TL_yqdx4g.jpg?w=828&q=75&fm=webp&fit=fill',
    avatarImg: 'https://images.ctfassets.net/6dgb2p7c933b/JKD7YLlIrbmGrLzNFYioT/e9ed461196df86f9486aabc44cd282e0/Austin-Circle.jpg?w=150&q=75&fm=webp&fit=fill'
  },
  {
    id: 'livermore-ca',
    city: 'Livermore, CA',
    clients: 'Kristy & Peter',
    link: 'https://yardzen.com/yzblog/heated-plunge-pool-year-round-backyard',
    mainImg: 'https://images.ctfassets.net/6dgb2p7c933b/5fpiYfbPkuFJK64hogY1Cl/c88e24dd791a4bc36048efaccf4ac293/large-Poppy_Livermore_Yardzen2037.jpg?w=828&q=75&fm=webp&fit=fill',
    avatarImg: 'https://images.ctfassets.net/6dgb2p7c933b/3hipEc7O7KMqd43zLXiwI4/5e14044a3acc4f4a0558dc5f21c8a4e6/Livermore-Circle.jpg?w=150&q=75&fm=webp&fit=fill'
  },
  {
    id: 'miami-fl',
    city: 'Miami, FL',
    clients: 'Anna',
    link: 'https://yardzen.com/yzblog/this-miami-florida-backyard-design-is-a-tropical-oasis',
    mainImg: 'https://images.ctfassets.net/6dgb2p7c933b/13tml2MsScdtFJKZ4rabSq/ec36b0aeba5b1fc062b00ab471c0aabd/large-TL_cvcx5g_NEW.jpg?w=828&q=75&fm=webp&fit=fill',
    avatarImg: 'https://images.ctfassets.net/6dgb2p7c933b/114xMqTGTF6fv77CcSUZAf/0cc64c09774fd4349282bc76df6dd9c7/Miami-Circle.jpg?w=150&q=75&fm=webp&fit=fill'
  },
  {
    id: 'montclair-nj',
    city: 'Montclair, NJ',
    clients: 'Julieta & Brian',
    link: 'https://yardzen.com/yzblog/modern-paver-walkway-new-jersey-backyard',
    mainImg: 'https://images.ctfassets.net/6dgb2p7c933b/4Yb62lXVXUWzq2rElUCJHC/bb652eb57ebf6140492c068657f02914/large-3W3A1725-1.jpg?w=828&q=75&fm=webp&fit=fill',
    avatarImg: 'https://images.ctfassets.net/6dgb2p7c933b/2b2vFyBvywiN11NTI2sCyH/30fa576d9ee513203d6665090b03b92a/Monclair-Circle.jpg?w=150&q=75&fm=webp&fit=fill'
  },
  {
    id: 'berkeley-ca',
    city: 'Berkeley, CA',
    clients: 'Shira & Jordan',
    link: 'https://yardzen.com/yzblog/minimalist-yard',
    mainImg: 'https://images.ctfassets.net/6dgb2p7c933b/5WOPtCemgnTzzv8kZj82Ru/c28b12b4644b1789ccc623f96138a1ab/Yardzen-Shira-Gill0749-medium.jpg?w=828&q=75&fm=webp&fit=fill',
    avatarImg: 'https://images.ctfassets.net/6dgb2p7c933b/7hz51wAXfo1mKsXElnpV1C/b2711e83ce0f613957ce35403ae725f1/Berkley-Circle.jpg?w=150&q=75&fm=webp&fit=fill'
  },
  {
    id: 'marana-az',
    city: 'Marana, AZ',
    clients: 'Leo & Brando',
    link: 'https://yardzen.com/yzblog/low-maintenance-desert-landscape-backyard',
    mainImg: 'https://images.ctfassets.net/6dgb2p7c933b/3T320TanTSc3udUFHEV4tx/e76b1e73a77e38cde7fc2bfea2b8f58b/large-yardzen-103.jpg?w=828&q=75&fm=webp&fit=fill',
    avatarImg: 'https://images.ctfassets.net/6dgb2p7c933b/73Jb9OcwB6SYA53ohPA2tk/5d7862c7078affc6f8269af3d82e2ef6/Marana-Circle.jpg?w=150&q=75&fm=webp&fit=fill'
  },
  {
    id: 'seattle-wa',
    city: 'Seattle, WA',
    clients: 'Edith & Bobby',
    link: 'https://yardzen.com/yzblog/old-meets-new-in-a-seattle-bungalow',
    mainImg: 'https://images.ctfassets.net/6dgb2p7c933b/30g9JIcyPeeFDbd8yTdUVy/6905e71fd85c21d871052afa4fa417e8/7-7-22-Yardzen-Seattle-39-2048x1365.jpg?w=828&q=75&fm=webp&fit=fill',
    avatarImg: 'https://images.ctfassets.net/6dgb2p7c933b/6dZ0eQEGHPSPTnLEse4Uom/813a5ce6acdbe2f61eb48700e048c632/Seatle-Circle.jpg?w=150&q=75&fm=webp&fit=fill'
  },
  {
    id: 'burlingame-ca',
    city: 'Burlingame, CA',
    clients: 'Jenny & Brendan',
    link: 'https://yardzen.com/yzblog/before-after-ranch-house-landscaping',
    mainImg: 'https://images.ctfassets.net/6dgb2p7c933b/4cjXtVEdd17VzWsUC89kWk/80ec4fe4d0437f1e62cf1e7a3096d77b/IMG_27910-medium.jpg?w=828&q=75&fm=webp&fit=fill',
    avatarImg: 'https://images.ctfassets.net/6dgb2p7c933b/1Ey4eT5oeB9T5plMYWXhA7/a24ca2e4fb0a4b3532d9577991d0125e/Burlingame-Circle.jpg?w=150&q=75&fm=webp&fit=fill'
  },
  {
    id: 'suwanee-ga',
    city: 'Suwanee, GA',
    clients: 'Zoe & Matt',
    link: 'https://yardzen.com/yzblog/before-after-adu-landscaping',
    mainImg: 'https://images.ctfassets.net/6dgb2p7c933b/SfxrOv0CtsIqkLHFoDBWa/ee147e3768c77b3be5a8aad277401313/09-27_Yardzen_534-medium.jpg?w=828&q=75&fm=webp&fit=fill',
    avatarImg: 'https://images.ctfassets.net/6dgb2p7c933b/2XBTMOvjog4MW5QaQ7uV5u/aed02d46aae7865bb0e14d70ffd2d09f/Suwanee-Circle.jpg?w=150&q=75&fm=webp&fit=fill'
  }
];

export default function Country() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth / 2));
      setActiveIndex(Math.min(index, locations.length - 1));
    }
  };

  const scrollToDot = (index) => {
    if (scrollRef.current) {
      const cardWidth = 320; // approximate width of card + gap
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-[#FAF7F2] py-16 px-4 md:px-8 text-center overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E2E28] tracking-tight mb-3">
          Yardzen Yards Across the Country
        </h1>
        
        {/* Subtitle */}
        <p className="text-[#2C3E35]/80 text-base md:text-xl max-w-2xl mb-10">
          Stories of real Yardzen clients like you.
        </p>

        {/* Horizontal Scrollable Carousel Container */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory px-4"
          >
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="flex-none w-[280px] sm:w-[320px] md:w-[340px] snap-start bg-white rounded-2xl overflow-hidden border border-[#E0DBCF] shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={loc.mainImg}
                    alt={`Yardzen yard in ${loc.city}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Round Client Avatar */}
                  <div className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <img
                      src={loc.avatarImg}
                      alt={`Yardzen yard for ${loc.clients}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-[#FAF7F2] flex flex-col items-center justify-between flex-1 gap-2 text-center">
                  <div>
                    <h3 className="font-serif text-2xl text-[#1E2E28] mb-1 font-medium">
                      {loc.city}
                    </h3>
                    <div className="text-[#2C3E35]/70 text-base mb-4">
                      {loc.clients}
                    </div>
                  </div>

                  <a
                    href={loc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E2E28] font-medium text-sm tracking-wider underline hover:opacity-80 transition-opacity uppercase"
                  >
                    VIEW DETAILS
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {locations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 bg-[#1E2E28]'
                  : 'w-2.5 bg-[#1E2E28]/20 hover:bg-[#1E2E28]/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}