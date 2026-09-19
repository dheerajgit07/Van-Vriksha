import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Filter, Sprout, Wind, Sun, Droplets, ArrowRight, ShieldCheck, TreePine } from 'lucide-react';

export default function SpeciesCatalog() {
  const { setSelectedSpecies, openCertificateGenerator, addToCart } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const speciesList = [
    {
      id: 'sp-1',
      name: 'Sacred Banyan Tree',
      botanicalName: 'Ficus benghalensis',
      category: 'Sacred & Canopy',
      co2Offset: '45 kg/yr',
      lifespan: '200+ Years',
      sunlight: 'Full Sun',
      water: 'Moderate',
      price: 999,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop',
      description: 'National tree of India creating massive ecological canopy, providing habitat for hundreds of bird and pollinator species.'
    },
    {
      id: 'sp-2',
      name: 'Mysore Sandalwood',
      botanicalName: 'Santalum album',
      category: 'Medicinal & Timber',
      co2Offset: '32 kg/yr',
      lifespan: '80+ Years',
      sunlight: 'Partial Shade / Sun',
      water: 'Low to Moderate',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600&auto=format&fit=crop',
      description: 'Prized fragrant heartwood native to Karnataka and Western Ghats. Highly sustainable agroforestry species.'
    },
    {
      id: 'sp-3',
      name: 'Organic Neem Tree',
      botanicalName: 'Azadirachta indica',
      category: 'Medicinal & Air Purifier',
      co2Offset: '28 kg/yr',
      lifespan: '100+ Years',
      sunlight: 'Full Sun',
      water: 'Low',
      price: 499,
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&auto=format&fit=crop',
      description: 'Air purifying marvel known for releasing high oxygen concentrations during daylight and natural pest repellent leaves.'
    },
    {
      id: 'sp-4',
      name: 'Golden Gulmohar',
      botanicalName: 'Delonix regia',
      category: 'Flowering & Urban',
      co2Offset: '25 kg/yr',
      lifespan: '60+ Years',
      sunlight: 'Full Sun',
      water: 'Moderate',
      price: 599,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop',
      description: 'Vibrant scarlet-red blooming tree that enriches urban avenues and provides fast canopy shade.'
    },
    {
      id: 'sp-5',
      name: 'Sacred Peepal Tree',
      botanicalName: 'Ficus religiosa',
      category: 'Sacred & Canopy',
      co2Offset: '50 kg/yr',
      lifespan: '300+ Years',
      sunlight: 'Full Sun',
      water: 'Moderate',
      price: 899,
      image: 'https://images.unsplash.com/photo-1511497584788-876761c119ef?q=80&w=600&auto=format&fit=crop',
      description: 'Renowned for 24-hour oxygen release and dense root systems that recharge groundwater aquifers.'
    },
    {
      id: 'sp-6',
      name: 'Indian Mahogany',
      botanicalName: 'Swietenia mahagoni',
      category: 'Timber & Agroforestry',
      co2Offset: '38 kg/yr',
      lifespan: '120+ Years',
      sunlight: 'Full Sun',
      water: 'Moderate',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop',
      description: 'High-density evergreen hardwood tree excellent for long-term carbon sequestration and agroforestry estates.'
    },
    {
      id: 'sp-7',
      name: 'Amla / Indian Gooseberry',
      botanicalName: 'Phyllanthus emblica',
      category: 'Medicinal & Fruit',
      co2Offset: '22 kg/yr',
      lifespan: '70+ Years',
      sunlight: 'Full Sun',
      water: 'Moderate',
      price: 450,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop',
      description: 'Vitamin C rich native fruit tree vital for Ayurvedic wellness and community orchard sustainability.'
    },
    {
      id: 'sp-8',
      name: 'Silver Oak / Silk Oak',
      botanicalName: 'Grevillea robusta',
      category: 'Agroforestry & Windbreak',
      co2Offset: '30 kg/yr',
      lifespan: '90+ Years',
      sunlight: 'Full Sun',
      water: 'Low',
      price: 650,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop',
      description: 'Tall fast-growing evergreen tree widely cultivated as coffee & tea estate shade canopy and windbreak.'
    }
  ];

  const categories = ['All', 'Sacred & Canopy', 'Medicinal & Air Purifier', 'Medicinal & Timber', 'Flowering & Urban', 'Timber & Agroforestry', 'Medicinal & Fruit'];

  const filteredSpecies = speciesList.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.botanicalName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F9F6F0] min-h-screen pt-24 pb-16 space-y-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-[#E3F4E1] text-[#1D461A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Vanvriksha Botanical Directory
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1D461A]">
          Native Tree Species Catalog
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Select from indigenous Indian species cultivated in our certified organic nurseries, engineered for maximum ecological survival and carbon sequestration.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="bg-[#FAF7F2] p-4 rounded-3xl border border-[#E8E2D5] shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or botanical name..."
              className="w-full bg-[#F4EFE6] border border-[#E8E2D5] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#1D461A] focus:outline-none focus:border-[#2D8425]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2D8425] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-[#1D461A] hover:bg-[#E3F4E1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Species Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSpecies.map((tree) => (
          <div
            key={tree.id}
            className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tree.image}
                  alt={tree.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md text-[#1D461A] text-[10px] font-bold px-3 py-1 rounded-full border border-[#E8E2D5]">
                  {tree.category}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1D461A] group-hover:text-[#2D8425] transition-colors">
                    {tree.name}
                  </h3>
                  <p className="text-[11px] italic text-[#2D8425] font-sans">{tree.botanicalName}</p>
                </div>

                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {tree.description}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-medium text-gray-600 border-t border-[#E8E2D5]">
                  <div className="flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-[#2D8425]" />
                    <span>CO₂: <strong className="text-[#1D461A]">{tree.co2Offset}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-amber-600" />
                    <span>{tree.sunlight}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#2D8425]">₹{tree.price.toLocaleString('en-IN')}</span>
                <span className="text-[10px] text-gray-500 font-semibold">GPS Tag Included</span>
              </div>
              <button
                onClick={() => setSelectedSpecies(tree)}
                className="w-full bg-[#E3F4E1] hover:bg-[#2D8425] hover:text-white text-[#1D461A] text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                View Details & Benefits
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
