import React from 'react';
import { Award, Sparkles, ThermometerSnowflake, HeartPulse, FileCheck } from 'lucide-react';

export default function QualityStandards() {
  const standards = [
    {
      icon: Award,
      title: '18-Point Commercial Kitchen Vetting',
      description: 'Our kitchen partners are established culinary facilities audited for ventilation, stainless prep stations, and industrial sterilization.'
    },
    {
      icon: Sparkles,
      title: '100% Natural Clean Ingredients',
      description: 'Zero artificial preservatives, synthetic colorants, or heavy bouillon cubes. We use authentic crayfish, iru, sun-dried panla, and pure palm oil.'
    },
    {
      icon: ThermometerSnowflake,
      title: 'Sub-4°C Cold Chain Protocol',
      description: 'Batches are blast-chilled to lock in texture and nutrients, then transported in thermal totes with food-grade ice bricks.'
    },
    {
      icon: HeartPulse,
      title: 'Food Handler Medical Clearance',
      description: 'Every chef undergoes quarterly health screenings, typhoid clearance tests, and certified sanitation training.'
    }
  ];

  return (
    <section id="the-standard" className="py-12 md:py-20 bg-maize-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-forest-800 bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
              Kitchen Trust & Sourcing
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
              The HomeBatch Standard:{' '}
              <span className="text-paprika-600">Why Lagos households trust our pots.</span>
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
              When you feed your family, quality is non-negotiable.
              We bridge the gap between traditional Nigerian cooking authenticity and modern food-science safety standards.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-maize-300 shadow-soft space-y-2.5">
              <div className="flex items-center gap-2 text-forest-800 font-bold text-sm">
                <FileCheck className="w-5 h-5 text-forest-600 shrink-0" />
                <span>Standardized Batch Quality Testing</span>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Every Friday batch is temperature-verified and taste-calibrated for consistency before sealing. Every container is stamped with its chef batch code and date.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Pillars — 1 col on mobile, 2 on sm */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {standards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white border border-maize-200/90 shadow-soft hover:shadow-card hover:border-paprika-300 transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center border border-forest-100">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-charcoal-900">
                    {std.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{std.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
