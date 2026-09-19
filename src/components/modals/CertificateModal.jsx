import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Printer, Download, Sparkles, TreePine, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CertificateModal() {
  const { isCertModalOpen, setIsCertModalOpen, certData, setCertData, showToast } = useApp();

  if (!isCertModalOpen) return null;

  const handlePrint = () => {
    window.print();
    showToast('Printing your Vanvriksha Tree Adoption Certificate! 🌳');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#C5E9C1] my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F2F9F1] border-b border-[#C5E9C1]">
          <div className="flex items-center gap-2 text-[#1D461A]">
            <Award className="w-5 h-5 text-[#2D8425]" />
            <h3 className="font-serif text-lg font-bold">Vanvriksha Official Tree Adoption Certificate</h3>
          </div>
          <button
            onClick={() => setIsCertModalOpen(false)}
            className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-[#E3F4E1] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Customization Inputs */}
          <div className="bg-[#F4F8F3] p-5 rounded-2xl border border-[#C5E9C1]/80 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D8425] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Personalize Certificate
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1D461A] mb-1">Tree Guardian / Donor Name</label>
                <input
                  type="text"
                  value={certData.guardianName}
                  onChange={(e) => setCertData({ ...certData, guardianName: e.target.value })}
                  className="w-full bg-white border border-[#C5E9C1] rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#2D8425]"
                  placeholder="e.g. Dr. Ananya Sen"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D461A] mb-1">Tree Species</label>
                <select
                  value={certData.treeSpecies}
                  onChange={(e) => setCertData({ ...certData, treeSpecies: e.target.value })}
                  className="w-full bg-white border border-[#C5E9C1] rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#2D8425]"
                >
                  <option value="Sacred Banyan Tree (Ficus benghalensis)">Sacred Banyan Tree (Ficus benghalensis)</option>
                  <option value="Mysore Sandalwood (Santalum album)">Mysore Sandalwood (Santalum album)</option>
                  <option value="Organic Neem Tree (Azadirachta indica)">Organic Neem Tree (Azadirachta indica)</option>
                  <option value="Golden Gulmohar (Delonix regia)">Golden Gulmohar (Delonix regia)</option>
                  <option value="Indian Rosewood / Sheesham">Indian Rosewood / Sheesham</option>
                  <option value="Amla / Indian Gooseberry">Amla / Indian Gooseberry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1D461A] mb-1">Dedication Note / Message</label>
              <input
                type="text"
                value={certData.dedication}
                onChange={(e) => setCertData({ ...certData, dedication: e.target.value })}
                className="w-full bg-white border border-[#C5E9C1] rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#2D8425]"
                placeholder="e.g. Dedicated to clean air and a greener planet"
              />
            </div>
          </div>

          {/* Certificate Live Preview Box */}
          <div
            id="printable-certificate"
            className="relative bg-[#FAFDF9] border-8 border-[#2D8425] p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-inner overflow-hidden"
          >
            {/* Watermark leaf background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <TreePine className="w-96 h-96 text-[#2D8425]" />
            </div>

            {/* Corner Decorative Borders */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-4 border-l-4 border-[#2D8425]" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-4 border-r-4 border-[#2D8425]" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-4 border-l-4 border-[#2D8425]" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-4 border-r-4 border-[#2D8425]" />

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#E3F4E1] text-[#1D461A] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                <TreePine className="w-4 h-4 text-[#2D8425]" /> Vanvriksha Forest Conservation Sanctuary
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-[#1D461A] tracking-tight">
                CERTIFICATE OF TREE ADOPTION
              </h1>
              <p className="text-xs text-[#2D8425] font-semibold tracking-wider uppercase">
                Official Eco-Heritage Registration • GPS Tag #VV-2026-8892
              </p>
            </div>

            <div className="py-2">
              <p className="text-sm text-gray-600 font-sans">This certifies that</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D8425] border-b-2 border-[#C5E9C1] inline-block px-8 py-1 my-2">
                {certData.guardianName || 'Honored Tree Guardian'}
              </h2>
              <p className="text-sm text-gray-600 max-w-xl mx-auto mt-2 leading-relaxed">
                has officially adopted and planted 1 Native Sapling of
              </p>
              <p className="text-lg font-bold text-[#1D461A] mt-1 font-serif">
                {certData.treeSpecies}
              </p>
            </div>

            {certData.dedication && (
              <div className="bg-[#E3F4E1]/50 border border-[#C5E9C1] p-3 rounded-xl max-w-lg mx-auto">
                <p className="text-xs italic text-[#1D461A]">"{certData.dedication}"</p>
              </div>
            )}

            <div className="pt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-xs text-gray-600 border-t border-[#C5E9C1]">
              <div className="text-left">
                <span className="block text-[10px] text-gray-400 uppercase font-semibold">Location / Forest Sector</span>
                <span className="font-semibold text-[#1D461A]">{certData.location}</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase font-semibold">Date of Plantation</span>
                <span className="font-semibold text-[#1D461A]">{certData.date}</span>
              </div>
              <div className="text-right col-span-2 md:col-span-1">
                <span className="block text-[10px] text-gray-400 uppercase font-semibold">Verification Seal</span>
                <span className="inline-flex items-center gap-1 font-bold text-[#2D8425]">
                  <ShieldCheck className="w-4 h-4" /> Certified Eco Seal
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-[#F2F9F1] border-t border-[#C5E9C1]">
          <p className="text-xs text-[#3E5C43] font-medium">
            🍃 Each certificate directly funds lifetime GPS monitoring and care for your tree.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCertModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-[#2D8425] hover:bg-[#1D461A] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" /> Print / Save PDF Certificate
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
