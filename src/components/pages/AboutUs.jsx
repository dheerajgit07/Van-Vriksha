import React from 'react';
import { useApp } from '../../context/AppContext';
import { TreePine, Award, Users, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  const { navigateTo } = useApp();

  const team = [
    {
      name: 'Dr. Madhavan Nair',
      role: 'Chief Botanist & Forestry Director',
      bio: '30+ years research in native Western Ghats flora and Miyawaki rapid forest growth techniques.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Sunita Deshmukh',
      role: 'Head of Agroforestry & Farmer Relations',
      bio: 'Leading rural community partnerships to empower 400+ farming families through native tree care.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Vikramaditya Roy',
      role: 'Geospatial Technology Lead',
      bio: 'Architect of Vanvriksha’s GPS satellite tree tracking system and GIS forest analytics.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-[#E3F4E1] text-[#1D461A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Our Green Story
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1D461A]">
          About Vanvriksha (वनवृक्ष)
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Vanvriksha was founded with a singular mission: to revive India's native forest sanctuaries, conserve endangered flora, and empower rural agroforestry communities through transparent technology.
        </p>
      </div>

      {/* Story Banner */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C5E9C1] shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D8425]">Founded in 2018</span>
          <h2 className="font-serif text-3xl font-bold text-[#1D461A]">
            Restoring Indigenous Bio-Systems Tree by Tree
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            In Sanskrit, <em>Vanvriksha</em> means "The Sacred Trees of the Forest". Over the last 8 years, our team of botanists, environmental engineers, and local farmers have planted over 250,000 indigenous trees across 1,850+ reforested acres.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Unlike monoculture plantations, Vanvriksha focuses exclusively on high-biodiversity multi-tier native ecosystems that restore groundwater, prevent soil desertification, and survive for centuries.
          </p>
        </div>

        <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop"
            alt="Vanvriksha Reserve Forest"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Team Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D461A]">
            Meet Our Foresters & Botanists
          </h2>
          <p className="text-xs text-gray-600">Driven by environmental science, community welfare, and technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-[#C5E9C1] shadow-xs text-center space-y-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-[#2D8425]"
              />
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1D461A]">{member.name}</h3>
                <p className="text-xs font-semibold text-[#2D8425]">{member.role}</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#E3F4E1] p-8 sm:p-12 rounded-3xl border border-[#C5E9C1] text-center space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D461A]">
          Ready to become a Vanvriksha Green Guardian?
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 max-w-xl mx-auto">
          Start your tree adoption journey today or partner with us for corporate ESG carbon neutrality.
        </p>
        <button
          onClick={() => navigateTo('packages')}
          className="inline-flex items-center gap-2 bg-[#2D8425] hover:bg-[#1D461A] text-white font-bold px-6 py-3.5 rounded-xl shadow-md text-xs sm:text-sm cursor-pointer"
        >
          <span>Explore Adoption Packages</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
