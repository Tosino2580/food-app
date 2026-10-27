import React from 'react';
import { XCircle, CheckCircle2, Clock, AlertTriangle, Sparkles, ShoppingCart, UtensilsCrossed } from 'lucide-react';

export default function TheProblem() {
  return (
    <section className="py-16 md:py-24 bg-white/70 border-y border-maize-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-paprika-600 bg-paprika-50 px-3 py-1 rounded-full border border-paprika-200">
            The Fundamental Shift
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Stop living order-by-order. <br className="hidden sm:inline" />
            <span className="text-paprika-600">Replenish your household for the week.</span>
          </h2>
          <p className="text-charcoal-600 text-base sm:text-lg">
            Traditional food delivery treats every meal as an emergency. 
            HomeBatch turns home nutrition into a seamless, predictable weekly rhythm.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: The Old Way (Delivery Apps & Weekend Market Fatigue) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-charcoal-50 border border-charcoal-200/80 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                <XCircle className="w-4 h-4" />
                <span>The Daily Scramble & Weekend Market Grind</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900">
                “What are we eating tonight?”
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                You work 10 hours, sit in 2 hours of Lagos traffic, and arrive home with an empty fridge.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-charcoal-700">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</div>
                  <span><strong>Crazy Cumulative Cost:</strong> ₦12,000 to ₦18,000 per order on food delivery apps. That adds up to over ₦250,000/month for a couple with zero leftovers.</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-charcoal-700">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</div>
                  <span><strong>Wasted Saturdays:</strong> Battling market mud, haggling meat at Mile 12 or Jakande, slicing okro until your back aches.</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-charcoal-700">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</div>
                  <span><strong>Lukewarm, Small Portions:</strong> Restaurant takeout arrives soggy, lukewarm, and loaded with MSG and excess cooking oil.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-charcoal-100 border border-charcoal-200 text-xs text-charcoal-600 font-medium">
              Average time spent per week: <strong>14.5 hours on market runs, cooking, scrubbing greasy pots, and waiting on delivery bikes.</strong>
            </div>
          </div>

          {/* Right: The HomeBatch Model */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-paprika-50/80 via-white to-maize-100 border-2 border-paprika-400/60 shadow-elevated space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-paprika-500/10 rounded-full blur-2xl" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold border border-forest-200">
                <CheckCircle2 className="w-4 h-4 text-forest-600" />
                <span>The HomeBatch Weekly Standard</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900">
                “What does your household need for the week?”
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Order by Thursday night. Come Saturday morning, an insulated thermal tote arrives at your doorstep packed with stackable 2.5L tubs of slow-simmered perfection.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                  <span><strong>Pantry Always Stocked:</strong> Open the fridge anytime. Scoop out 2 spoons of hot Buka Stew or Egusi over rice or swallow. Ready in 3 minutes.</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                  <span><strong>Wholesome, Clean Ingredients:</strong> 100% natural seasonings, no artificial cube preservatives, premium unadulterated palm oil and fresh local greens.</span>
                </div>

                <div className="flex items-start gap-3 text-sm text-charcoal-800">
                  <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                  <span><strong>60% Lower Cost Per Meal:</strong> From ₦2,200 per generous portion vs. ₦8,500+ on commercial single-meal apps.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-forest-800 text-maize-100 text-xs font-medium flex items-center justify-between">
              <span>Time saved for yourself & family:</span>
              <strong className="text-amberGold text-sm">Over 14 hours every single week!</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
