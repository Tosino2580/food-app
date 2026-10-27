import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Sparkles, ChefHat, Heart, Flame, CheckCircle2 } from 'lucide-react';

export default function Hero({ onExplorePlans, onBuildCustomBatch }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-28">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-paprika-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-forest-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-paprika-200/80 shadow-soft">
              <span className="w-2 h-2 rounded-full bg-paprika-600 animate-ping" />
              <span className="text-xs font-bold text-paprika-700 tracking-wide">
                Lagos Weekly Household Replenishment
              </span>
              <span className="text-charcoal-300">|</span>
              <span className="text-xs font-semibold text-charcoal-600">
                Weekend Delivery Windows
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-charcoal-900 leading-[1.1] tracking-tight">
              Your weekly cooking, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-paprika-600 via-paprika-500 to-amberGold">
                handled.
              </span>
            </h1>

            {/* Sub-Headline based on brief creative thought */}
            <p className="text-lg sm:text-xl text-charcoal-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              You don’t hate good food — you hate the traffic to Mile 12, the endless peeling, 
              smoking pots, and Sunday fatigue. HomeBatch delivers chef-simmered 
              <strong> 2L–4L tubs of authentic soups, stews, and seasoned proteins </strong> 
              to your Lagos home every weekend.
            </p>

            {/* Shift Motto Callout */}
            <div className="p-4 rounded-2xl bg-white/80 border border-maize-300/80 shadow-soft max-w-xl mx-auto lg:mx-0 flex items-start gap-3 text-left">
              <div className="p-2 rounded-xl bg-forest-50 text-forest-700 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-charcoal-900 block">The HomeBatch Shift:</span>
                <span className="text-charcoal-600">
                  Instead of paying ₦15k daily on food delivery apps, get an entire week’s household pantry pre-stocked fresh every Saturday.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExplorePlans}
                id="hero-explore-plans-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-paprika-600 hover:bg-paprika-700 text-white font-extrabold text-base shadow-elevated transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Choose Your Weekly Plan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBuildCustomBatch}
                id="hero-build-batch-btn"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-maize-50 text-charcoal-900 font-bold text-base border-2 border-charcoal-900/10 shadow-soft transition-all duration-200 flex items-center justify-center gap-2 hover:border-paprika-300"
              >
                <span>Build Custom Litre Batch</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-3 gap-3 text-left max-w-lg mx-auto lg:mx-0 border-t border-maize-300/60">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-forest-800 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-forest-600 shrink-0" />
                  <span>Sub-4°C Cold Chain</span>
                </div>
                <p className="text-[11px] text-charcoal-500">Delivered chilled in thermal totes</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-forest-800 font-bold text-sm">
                  <ChefHat className="w-4 h-4 text-forest-600 shrink-0" />
                  <span>100% Natural</span>
                </div>
                <p className="text-[11px] text-charcoal-500">Zero artificial preservatives</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-forest-800 font-bold text-sm">
                  <Clock className="w-4 h-4 text-forest-600 shrink-0" />
                  <span>14+ Hours Saved</span>
                </div>
                <p className="text-[11px] text-charcoal-500">Per household every week</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Batch Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white group">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80" 
                  alt="HomeBatch Freshly Simmered Nigerian Seafood Okro Soup"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />

                {/* Tub Badge Indicator */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-soft flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-forest-600" />
                  <span className="text-xs font-black text-charcoal-900 tracking-wider">
                    2.5L AIRTIGHT BATCH TUB
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-amberGold text-charcoal-950 px-2.5 py-1 rounded-lg text-xs font-black shadow-sm uppercase tracking-wide">
                  Saturday Delivery
                </div>

                {/* Bottom Image Overlay Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-maize-300">
                    Lagos Fresh Catch
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white">
                    Island Fisherman Seafood Okro
                  </h3>
                  <p className="text-xs text-maize-200 mt-0.5 line-clamp-1">
                    Tiger prawns, fresh blue crab, calamari & smoked catfish
                  </p>
                  <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-white/20">
                    <span className="font-semibold text-maize-200">Reheat time: 3 mins</span>
                    <span className="font-black text-amberGold text-sm">₦34,500 / 2.5L</span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Card 1: Protein Tray */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white p-3.5 rounded-2xl shadow-elevated border border-maize-200 flex items-center gap-3 max-w-[240px] animate-bounce-subtle">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=200&q=80" 
                    alt="Peppered Turkey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-paprika-600 uppercase tracking-wider">
                    Protein Tray (12 pcs)
                  </div>
                  <div className="text-xs font-extrabold text-charcoal-900">
                    Peppered Turkey Quarters
                  </div>
                  <div className="text-[11px] font-semibold text-charcoal-600">
                    Ready to crisp or microwave
                  </div>
                </div>
              </div>

              {/* Floating Mini Card 2: Household Saved Hours */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-forest-800 text-white p-4 rounded-2xl shadow-card border border-forest-700 max-w-[190px]">
                <div className="text-[10px] uppercase font-bold text-forest-300 tracking-wider">
                  Household Metric
                </div>
                <div className="text-2xl font-black font-display text-white mt-0.5">
                  14.5 Hrs
                </div>
                <p className="text-[11px] text-forest-200 leading-tight mt-0.5">
                  Saved from Lagos market runs & cooking every week
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
