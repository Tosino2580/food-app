import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-white border-t border-maize-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-forest-800 bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
            Lagos Households
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            How busy professionals eat at home
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Trusted by founders, finance executives, doctors, and working parents across Island and Mainland.
          </p>
        </div>

        {/* 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl p-5 sm:p-7 bg-maize-50/80 border border-maize-200 shadow-soft hover:shadow-card hover:border-paprika-300 transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amberGold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amberGold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-maize-200/90 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-display font-extrabold text-sm text-charcoal-900 truncate">{t.name}</h4>
                  <div className="text-[11px] text-charcoal-500 font-medium truncate">
                    {t.role} • {t.location}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-forest-700 font-bold mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-forest-600 shrink-0" />
                    <span className="truncate">{t.verifiedHousehold}</span>
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
