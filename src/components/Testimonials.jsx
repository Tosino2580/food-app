import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-maize-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-forest-800 bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
            Lagos Households
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            How busy professionals eat at home
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Trusted by founders, finance executives, medical doctors, and working parents across Island and Mainland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl p-7 bg-maize-50/80 border border-maize-200 shadow-soft hover:shadow-card hover:border-paprika-300 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amberGold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amberGold" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-maize-200/90 flex items-center gap-3.5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="font-display font-extrabold text-sm text-charcoal-900">
                    {t.name}
                  </h4>
                  <div className="text-[11px] text-charcoal-500 font-medium">
                    {t.role} • {t.location}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-forest-700 font-bold mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-forest-600" />
                    <span>{t.verifiedHousehold}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
