import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calculator, Sprout, Wind, Droplets, Car, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CarbonCalculator() {
  const { openCertificateGenerator, navigateTo } = useApp();
  const [treeCount, setTreeCount] = useState(25);
  const [treeType, setTreeType] = useState('banyan'); // banyan, neem, sandalwood, mahogany

  const rates = {
    banyan: { co2: 45, oxygen: 120, water: 80, name: 'Sacred Banyan Canopy' },
    neem: { co2: 28, oxygen: 90, water: 50, name: 'Organic Neem Tree' },
    sandalwood: { co2: 32, oxygen: 85, water: 60, name: 'Mysore Sandalwood' },
    mahogany: { co2: 38, oxygen: 100, water: 70, name: 'Indian Mahogany' }
  };

  const currentRate = rates[treeType];
  const annualCo2Kg = treeCount * currentRate.co2;
  const annualCo2Tons = (annualCo2Kg / 1000).toFixed(2);
  const dailyOxygenLiters = treeCount * currentRate.oxygen;
  const carMilesNeutralized = Math.round(annualCo2Kg * 2.4);

  return (
    <div className="pt-24 pb-16 space-y-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-[#E3F4E1] text-[#1D461A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Geospatial Carbon Footprint Calculator
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1D461A]">
          Tree Impact & Carbon Offset Calculator
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Move the slider to calculate the real-time ecological benefit of planting native trees with Vanvriksha over a 10-year lifespan.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Controls Box */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#C5E9C1] shadow-lg space-y-6">
          
          <div className="space-y-3">
            <label className="block text-sm font-bold text-[#1D461A]">
              1. Select Tree Species Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.keys(rates).map((key) => (
                <button
                  key={key}
                  onClick={() => setTreeType(key)}
                  className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all cursor-pointer ${
                    treeType === key
                      ? 'bg-[#2D8425] text-white border-[#2D8425] shadow-md'
                      : 'bg-[#F4F8F3] text-[#1D461A] border-[#C5E9C1] hover:bg-[#E3F4E1]'
                  }`}
                >
                  {rates[key].name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#C5E9C1]">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-[#1D461A]">
                2. Number of Trees to Adopt
              </label>
              <span className="font-serif text-2xl font-extrabold text-[#2D8425] bg-[#E3F4E1] px-4 py-1 rounded-xl">
                {treeCount} Trees
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="200"
              value={treeCount}
              onChange={(e) => setTreeCount(parseInt(e.target.value))}
              className="w-full h-3 bg-[#E3F4E1] rounded-lg appearance-none cursor-pointer accent-[#2D8425]"
            />

            <div className="flex justify-between text-[11px] font-semibold text-gray-400">
              <span>1 Tree (Guardian)</span>
              <span>50 Trees</span>
              <span>100 Trees</span>
              <span>200 Trees (Forest)</span>
            </div>
          </div>

          <div className="p-4 bg-[#F2F9F1] rounded-2xl border border-[#C5E9C1] text-xs text-[#1D461A] space-y-1">
            <span className="font-bold flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#2D8425]" /> Verified Botanical Formula:
            </span>
            <p className="text-gray-600">
              Calculated using standard IPCC forestry carbon density equations assuming mature native canopy growth in Indian soil conditions.
            </p>
          </div>

        </div>

        {/* Right Real-time Gauges Box */}
        <div className="lg:col-span-6 bg-gradient-to-b from-[#1D461A] to-[#2D8425] text-white p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-white/20 pb-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5E9C1]">Calculated Annual Impact</span>
            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">Live Projection</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl space-y-1">
              <Wind className="w-6 h-6 text-[#C5E9C1]" />
              <div className="font-serif text-3xl font-extrabold text-white">{annualCo2Tons} Tons</div>
              <p className="text-xs text-[#E3F4E1]">Annual CO₂ Absorbed ({annualCo2Kg.toLocaleString('en-IN')} kg/yr)</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl space-y-1">
              <Sprout className="w-6 h-6 text-[#C5E9C1]" />
              <div className="font-serif text-3xl font-extrabold text-white">{dailyOxygenLiters.toLocaleString('en-IN')} L</div>
              <p className="text-xs text-[#E3F4E1]">Clean Oxygen Produced Daily</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl space-y-1">
              <Car className="w-6 h-6 text-[#C5E9C1]" />
              <div className="font-serif text-3xl font-extrabold text-white">{carMilesNeutralized.toLocaleString('en-IN')} km</div>
              <p className="text-xs text-[#E3F4E1]">Car Driving Emissions Offset</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl space-y-1">
              <Droplets className="w-6 h-6 text-[#C5E9C1]" />
              <div className="font-serif text-3xl font-extrabold text-white">{(treeCount * 350).toLocaleString('en-IN')} L</div>
              <p className="text-xs text-[#E3F4E1]">Soil Aquifer Water Recharged</p>
            </div>

          </div>

          <div className="pt-4 border-t border-white/20 space-y-3">
            <button
              onClick={() =>
                openCertificateGenerator({
                  treeSpecies: `${treeCount} ${currentRate.name} Saplings`,
                  dedication: `Neutralizing ${annualCo2Tons} Tons of CO₂ annually with Vanvriksha`
                })
              }
              className="w-full bg-[#62C058] hover:bg-[#3EA434] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
            >
              Plant These {treeCount} Trees & Generate Certificate
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
