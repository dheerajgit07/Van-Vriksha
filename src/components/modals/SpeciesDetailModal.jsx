import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Sprout, ShieldCheck, Sun, Droplets, Wind, Heart, Sparkles, Award } from 'lucide-react';

export default function SpeciesDetailModal() {
  const { selectedSpecies, setSelectedSpecies, addToCart, openCertificateGenerator, navigateTo } = useApp();

  if (!selectedSpecies) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#C5E9C1] my-8">
        
        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={selectedSpecies.image}
            alt={selectedSpecies.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <button
            onClick={() => setSelectedSpecies(null)}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="inline-block bg-[#2D8425] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {selectedSpecies.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">{selectedSpecies.name}</h2>
            <p className="text-xs italic text-[#C5E9C1] font-sans">{selectedSpecies.botanicalName}</p>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <p className="text-sm text-gray-700 leading-relaxed">
            {selectedSpecies.description || `${selectedSpecies.name} is a vital native Indian tree species recognized for its high ecological resilience, carbon sequestration capabilities, and rich cultural & medicinal heritage.`}
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#F4F8F3] p-3 rounded-xl border border-[#C5E9C1] text-center">
              <Wind className="w-5 h-5 text-[#2D8425] mx-auto mb-1" />
              <span className="block text-[10px] text-gray-500 uppercase font-semibold">CO₂ Capture</span>
              <span className="text-xs font-bold text-[#1D461A]">{selectedSpecies.co2Offset || '28 kg/yr'}</span>
            </div>
            <div className="bg-[#F4F8F3] p-3 rounded-xl border border-[#C5E9C1] text-center">
              <Sun className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <span className="block text-[10px] text-gray-500 uppercase font-semibold">Sunlight</span>
              <span className="text-xs font-bold text-[#1D461A]">{selectedSpecies.sunlight || 'Full Sun'}</span>
            </div>
            <div className="bg-[#F4F8F3] p-3 rounded-xl border border-[#C5E9C1] text-center">
              <Droplets className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="block text-[10px] text-gray-500 uppercase font-semibold">Water Need</span>
              <span className="text-xs font-bold text-[#1D461A]">{selectedSpecies.water || 'Moderate'}</span>
            </div>
            <div className="bg-[#F4F8F3] p-3 rounded-xl border border-[#C5E9C1] text-center">
              <Award className="w-5 h-5 text-[#2D8425] mx-auto mb-1" />
              <span className="block text-[10px] text-gray-500 uppercase font-semibold">Lifespan</span>
              <span className="text-xs font-bold text-[#1D461A]">{selectedSpecies.lifespan || '100+ Years'}</span>
            </div>
          </div>

          {/* Ecological Benefits */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D8425]">Key Ecological Benefits</h4>
            <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
              <li>High canopy area providing urban cooling & habitat for 40+ species of birds and pollinators.</li>
              <li>Deep root architecture preventing soil erosion and boosting underground aquifer recharge.</li>
              <li>Emits essential phytoncides that purify ambient air quality and lower particulate matter.</li>
            </ul>
          </div>

        </div>

        {/* Modal Action Buttons */}
        <div className="px-6 py-4 bg-[#F2F9F1] border-t border-[#C5E9C1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] text-gray-500 font-semibold uppercase">Plantation Contribution</span>
            <span className="text-lg font-bold text-[#2D8425]">₹{(selectedSpecies.price || 499).toLocaleString('en-IN')}</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                addToCart({
                  id: `sp-${selectedSpecies.id || Date.now()}`,
                  name: selectedSpecies.name,
                  price: selectedSpecies.price || 499,
                  category: selectedSpecies.category || 'Native Saplings',
                  image: selectedSpecies.image
                });
                setSelectedSpecies(null);
              }}
              className="flex-1 sm:flex-initial bg-white border border-[#C5E9C1] hover:bg-[#E3F4E1] text-[#1D461A] text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              Add Sapling to Basket
            </button>

            <button
              onClick={() => {
                const specName = selectedSpecies.name;
                setSelectedSpecies(null);
                openCertificateGenerator({ treeSpecies: specName });
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#2D8425] hover:bg-[#1D461A] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Sprout className="w-4 h-4" />
              <span>Adopt & Get Certificate</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
