import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Award, ThermometerSnowflake, FileCheck, HeartPulse } from 'lucide-react';

export default function QualityStandards() {
  const standards = [
    {
      icon: Award,
      title: '18-Point Commercial Kitchen Vetting',
      description: 'We do not operate unregulated ghost kitchens. Our kitchen partners are established culinary facilities audited for ventilation, stainless prep stations, and industrial sterilization.'
    },
    {
      icon: Sparkles,
      title: '100% Natural Clean Ingredients',
      description: 'Zero artificial chemical preservatives, synthetic colorants, or heavy bouillon cubes. We use authentic crayfish, iru (locust beans), sun-dried panla, and pure palm oil.'
    },
    {
      icon: ThermometerSnowflake,
      title: 'Sub-4°C Cold Chain Protocol',
      description: 'Cooked batches are blast-chilled to lock in texture and nutrients, then transported in custom thermal insulated totes with food-grade ice bricks.'
    },
    {
      icon: HeartPulse,
      title: 'Food Handler Medical Clearance',
      description: 'Every chef and kitchen assistant undergoes quarterly health screenings, typhoid clearance tests, and certified sanitation training.'
    }
  ];

  return (
    <section id="the-standard" className="py-16 md:py-24 bg-maize-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-forest-800 bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
              Kitchen Trust & Sourcing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
              The HomeBatch Standard: <br />
              <span className="text-paprika-600">Why Lagos households trust our pots.</span>
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
              When you feed your family, quality is non-negotiable. 
              We bridge the gap between traditional Nigerian cooking authenticity and modern food-science safety standards.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-maize-300 shadow-soft space-y-3">
              <div className="flex items-center gap-2 text-forest-800 font-bold text-sm">
                <FileCheck className="w-5 h-5 text-forest-600" />
                <span>Standardized Batch Quality Testing</span>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Every Friday batch is temperature-verified and taste-calibrated for consistency before sealing. Every container is stamped with its chef batch code and date.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {standards.map((std, idx) => {
              const Icon = std.icon;

              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-maize-200/90 shadow-soft hover:shadow-card hover:border-paprika-300 transition-all duration-300 space-y-3"
                >
                  <div className="w-11 h-11 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center border border-forest-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-charcoal-900">
                    {std.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {std.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
