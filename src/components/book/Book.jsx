import React from "react";
import { CheckCircle2, XCircle, AlertCircle, Star, ShieldCheck } from "lucide-react";

export default function Book() {
  return (
    <section className="w-full bg-[#F9F6F0] px-4 py-12 md:py-16 text-[#1D461A] font-sans border-b border-[#E8E2D5]">
      {/* Section Header */}
      <div className="mx-auto max-w-5xl text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2D8425] bg-[#E3F4E1] px-3.5 py-1.5 rounded-full">
          Transparent Reforestation
        </span>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1D461A] sm:text-4xl md:text-5xl">
          A Fundamentally Better Way to Plant Trees
        </h2>
      </div>

      {/* Comparison Grid */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3 md:gap-6">
        
        {/* CARD 1: The Vanvriksha Experience (Featured Card) */}
        <article className="relative overflow-hidden rounded-3xl border-2 border-[#2D8425] bg-[#FAF7F2] shadow-xl">
          {/* Header */}
          <header className="flex flex-col items-center justify-center border-b border-[#E8E2D5] bg-[#E3F4E1] px-4 py-5 text-center">
            <h3 className="font-serif text-lg font-bold text-[#1D461A] md:text-xl">
              The Vanvriksha Experience
            </h3>
            <div className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-white px-3 py-1 text-[#1D461A] border border-[#C5E9C1]">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-[11px] font-bold">4.9 · 250,000+ Trees</span>
            </div>
          </header>

          {/* List Features */}
          <ul className="divide-y divide-[#E8E2D5]">
            {[
              "100% Native Indian sapling species",
              "Geospatial GPS satellite geo-tagging",
              "3-Year survival & replanting guarantee",
              "Annual high-res canopy growth reports",
              "Digital printable certificate of adoption",
              "Supports local agro-farmer livelihoods",
              "80G Tax exemption documentation",
            ].map((feature, idx) => (
              <li key={idx} className="px-4 py-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1D461A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8425] shrink-0" />
                  <span>{feature}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        {/* CARD 2: Traditional Unmonitored Drive */}
        <article className="overflow-hidden rounded-3xl border border-[#E8E2D5] bg-[#F4EFE6]/70 shadow-xs">
          <header className="flex flex-col items-center justify-center border-b border-[#E8E2D5] px-4 py-5 text-center bg-[#FAF7F2]">
            <h3 className="font-serif text-lg font-bold text-gray-700 md:text-xl">
              Unmonitored Mass Drive
            </h3>
          </header>

          <ul className="divide-y divide-[#E8E2D5]">
            {[
              "Monoculture non-native species",
              "No GPS tracking or location proof",
              "High sapling mortality rate (>60%)",
              "No growth reports or updates",
              "No personalized certificate",
              "Temporary one-day event focus",
              "No long-term care framework",
            ].map((item, idx) => (
              <li key={idx} className="px-4 py-3">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        {/* CARD 3: DIY Backyard Planting */}
        <article className="overflow-hidden rounded-3xl border border-[#E8E2D5] bg-[#F4EFE6]/70 shadow-xs">
          <header className="flex flex-col items-center justify-center border-b border-[#E8E2D5] px-4 py-5 text-center bg-[#FAF7F2]">
            <h3 className="font-serif text-lg font-bold text-gray-700 md:text-xl">
              DIY Backyard Sapling
            </h3>
          </header>

          <ul className="divide-y divide-[#E8E2D5]">
            {[
              "Limited home space & canopy area",
              "High maintenance & watering effort",
              "Risk of pest infestation or soil fit",
              "Self-directed care with limited advice",
              "No certified carbon offset proof",
              "Subject to property boundary limits",
              "Unverified long-term survival",
            ].map((item, idx) => (
              <li key={idx} className="px-4 py-3">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>

      </div>
    </section>
  );
}