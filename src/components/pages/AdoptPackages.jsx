import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Sprout, Award, Sparkles, ShieldCheck, TreePine, Building2 } from 'lucide-react';

export default function AdoptPackages() {
  const { openCertificateGenerator } = useApp();

  const packages = [
    {
      id: 'pkg-single',
      name: 'Single Tree Guardian',
      price: 999,
      period: 'One-time plantation & 3-yr care',
      icon: Sprout,
      highlight: false,
      badge: 'Individual Favorite',
      description: 'Plant 1 Native Sapling in your name or dedicated to a loved one with official certificate and GPS tracking.',
      features: [
        '1 Native Tree Sapling (Neem/Banyan/Peepal)',
        'GPS Geo-tagging & Satellite Tracking',
        'Digital Certificate of Adoption',
        '3-Year Survival & Replanting Guarantee',
        'Annual Growth & Impact Photo Report'
      ]
    },
    {
      id: 'pkg-family',
      name: 'Family Memory Grove',
      price: 3499,
      period: '5 Native Trees Grove',
      icon: TreePine,
      highlight: true,
      badge: 'Most Popular',
      description: 'Plant a dedicated grove of 5 native trees for birthdays, anniversaries, or family legacy.',
      features: [
        '5 Mixed Native Tree Saplings',
        'Custom Wooden Plaque Inscription at Sanctuary',
        'Custom Certificate for Family',
        'Lifetime GPS Coordinates Access',
        'Bi-Annual Satellite Health Scans',
        '80G Tax Deduction Receipt'
      ]
    },
    {
      id: 'pkg-miyawaki',
      name: 'Miyawaki Biodiversity Forest',
      price: 9999,
      period: '15 Trees High-Density Mini Forest',
      icon: Sparkles,
      highlight: false,
      badge: 'High Impact',
      description: 'Establish a 15-tree rapid growth Miyawaki technique mini-forest producing 30x dense canopy.',
      features: [
        '15 Native Multi-Tier Species (Canopy & Shrubs)',
        'Accelerated Miyawaki Planting Method',
        'Dedicated Bio-Forest Nameplate',
        'Quarterly Video Updates from Agro-forester',
        'Dedicated VIP Sanctuary Visit Invitation',
        'Official Carbon Neutral Badge Certificate'
      ]
    },
    {
      id: 'pkg-corporate',
      name: 'Corporate ESG Green Belt',
      price: 32000,
      period: '50 Trees Corporate Forest',
      icon: Building2,
      highlight: false,
      badge: 'ESG & Corporate',
      description: 'Fulfill corporate sustainability & carbon neutrality targets with 50 certified trees for your company.',
      features: [
        '50 Native Hardwood & Shade Saplings',
        'Co-Branded Corporate Plantation Signage',
        'Comprehensive ESG Carbon Audit PDF Report',
        'Dedicated Account Manager & Employee Drive',
        'PR & Social Media Certification Assets',
        '80G Tax Savings Documentation'
      ]
    }
  ];

  return (
    <div className="bg-[#F9F6F0] min-h-screen pt-24 pb-16 space-y-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-[#E3F4E1] text-[#1D461A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Vanvriksha Adoption Packages
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1D461A]">
          Adopt a Tree. Leave a Lasting Legacy.
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Every package includes 100% native sapling planting, lifetime GPS geo-tagging, satellite growth monitoring, and an official printable certificate.
        </p>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => {
          const IconComponent = pkg.icon;
          return (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-[#1D461A] to-[#2D8425] text-white shadow-xl scale-[1.02] border-2 border-[#62C058]'
                  : 'bg-[#FAF7F2] text-[#1D461A] border border-[#E8E2D5] shadow-xs hover:shadow-md'
              }`}
            >
              {pkg.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs ${
                    pkg.highlight
                      ? 'bg-[#62C058] text-white'
                      : 'bg-[#E3F4E1] text-[#1D461A] border border-[#C5E9C1]'
                  }`}
                >
                  {pkg.badge}
                </span>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      pkg.highlight ? 'bg-white/20 text-white' : 'bg-[#E3F4E1] text-[#2D8425]'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold">{pkg.name}</h3>
                  <p className={`text-xs mt-1 ${pkg.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8E2D5]/60">
                  <span className="font-serif text-3xl font-extrabold">₹{pkg.price.toLocaleString('en-IN')}</span>
                  <span className={`block text-[10px] mt-0.5 ${pkg.highlight ? 'text-[#C5E9C1]' : 'text-gray-500'}`}>
                    {pkg.period}
                  </span>
                </div>

                <ul className="space-y-2.5 pt-4 text-xs">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.highlight ? 'text-[#62C058]' : 'text-[#2D8425]'
                        }`}
                      />
                      <span className={pkg.highlight ? 'text-white/90' : 'text-gray-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() =>
                    openCertificateGenerator({
                      treeSpecies: `${pkg.name} Package`,
                      dedication: `Dedicated to eco conservation through Vanvriksha ${pkg.name}`
                    })
                  }
                  className={`w-full font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    pkg.highlight
                      ? 'bg-white text-[#1D461A] hover:bg-[#E3F4E1] shadow-md'
                      : 'bg-[#2D8425] hover:bg-[#1D461A] text-white shadow-xs'
                  }`}
                >
                  Adopt & Generate Certificate
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
