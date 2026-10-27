import React from 'react';
import { XCircle, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function TheProblem() {
  return (
    <section className="py-12 md:py-20 bg-white/70 border-y border-maize-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-paprika-600 bg-paprika-50 px-3 py-1 rounded-full border border-paprika-200">
            The Fundamental Shift
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Stop living order-by-order.{' '}
            <span className="text-paprika-600">Replenish your household for the week.</span>
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base sm:text-lg">
            Traditional food delivery treats every meal as an emergency.
            HomeBatch turns home nutrition into a seamless, predictable weekly rhythm.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">

          {/* Left: The Old Way */}
          <div className="rounded-3xl p-5 sm:p-8 bg-charcoal-50 border border-charcoal-200/80 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold flex-wrap">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>The Daily Scramble & Weekend Market Grind</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                "What are we eating tonight?"
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                You work 10 hours, sit in 2 hours of Lagos traffic, and arrive home with an empty fridge.
              </p>

              <div className="space-y-3 pt-1">
                {[
                  {
                    title: 'Crazy Cumulative Cost:',
                    body: '₦12,000–₦18,000 per delivery app order. Over ₦250,000/month for a couple with zero leftovers.'
                  },
                  {
                    title: 'Wasted Saturdays:',
                    body: 'Battling market mud, haggling meat at Mile 12 or Jakande, slicing okro until your back aches.'
                  },
                  {
                    title: 'Lukewarm, Small Portions:',
                    body: 'Restaurant takeout arrives soggy, lukewarm, and loaded with MSG and excess oil.'
                  }
                ].map(({ title, body }, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-charcoal-700">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</div>
                    <span><strong>{title}</strong> {body}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-charcoal-100 border border-charcoal-200 text-xs text-charcoal-600 font-medium">
              Average time spent per week: <strong>14.5 hours on market runs, cooking, scrubbing pots, and waiting on delivery bikes.</strong>
            </div>
          </div>

          {/* Right: The HomeBatch Model */}
          <div className="rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-paprika-50/80 via-white to-maize-100 border-2 border-paprika-400/60 shadow-elevated space-y-5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-paprika-500/10 rounded-full blur-2xl" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold border border-forest-200 flex-wrap">
                <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                <span>The HomeBatch Weekly Standard</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                "What does your household need for the week?"
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Order by Thursday night. Come Saturday morning, a thermal tote arrives packed with stackable 2.5L tubs of slow-simmered perfection.
              </p>

              <div className="space-y-3 pt-1">
                {[
                  {
                    title: 'Pantry Always Stocked:',
                    body: 'Open the fridge anytime. Scoop Buka Stew or Egusi over rice. Ready in 3 minutes.'
                  },
                  {
                    title: 'Clean Ingredients:',
                    body: '100% natural seasonings, no preservatives, premium palm oil and fresh local greens.'
                  },
                  {
                    title: '60% Lower Cost Per Meal:',
                    body: 'From ₦2,200 per generous portion vs. ₦8,500+ on single-meal delivery apps.'
                  }
                ].map(({ title, body }, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-charcoal-800">
                    <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                    <span><strong>{title}</strong> {body}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-forest-800 text-maize-100 text-xs font-medium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 relative z-10">
              <span>Time saved for yourself & family:</span>
              <strong className="text-amberGold text-sm">Over 14 hours every week!</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
