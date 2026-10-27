import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, ChefHat, Sparkles, ShieldCheck, Star, Clock } from 'lucide-react';
import { LAGOS_ZONES } from '../data/deliveryZones';

export default function Hero({
  onExploreFoods,
  onOpenVendorOnboarding,
  onSearchFood,
  selectedZone,
  setSelectedZone
}) {
  const [localSearch, setLocalSearch] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchFood) onSearchFood(localSearch);
    if (onExploreFoods) onExploreFoods();
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-maize-100 via-maize-50 to-white pt-6 pb-12 sm:pt-10 sm:pb-20 border-b border-maize-200">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-paprika-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-forest-800/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Search & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Pill Banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100/80 border border-forest-300 text-forest-900 text-xs font-extrabold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse" />
              <span>Nigerian Homemade Food Marketplace</span>
              <span className="hidden sm:inline text-forest-300">•</span>
              <span className="hidden sm:inline text-forest-700 font-medium">Independent Vetted Cooks</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal-900 tracking-tight leading-[1.12] font-display">
              Your Favourite <span className="text-paprika-600">Homemade</span> Nigerian Meals, Delivered.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover freshly prepared Nigerian soups, stews, rice dishes, and local delicacies from trusted independent food vendors. Slow-simmered in 1.5L, 3L & 5L household tubs.
            </p>

            {/* Food Search Bar & Delivery Location Selector */}
            <form 
              onSubmit={handleSearchSubmit}
              className="p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl bg-white border border-maize-300 shadow-card flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-2xl mx-auto lg:mx-0 text-left"
            >
              {/* Search Food Input */}
              <div className="flex-1 flex items-center gap-2.5 px-3 py-2">
                <Search className="w-4 h-4 text-paprika-600 shrink-0" />
                <input
                  type="text"
                  placeholder="Craving Egusi, White Soup, Ayamase, Jollof?..."
                  value={localSearch}
                  onChange={e => {
                    setLocalSearch(e.target.value);
                    if (onSearchFood) onSearchFood(e.target.value);
                  }}
                  className="w-full text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none bg-transparent"
                />
              </div>

              {/* Lagos Location Dropdown */}
              <div className="sm:border-l border-maize-200 flex items-center gap-2 px-3 py-2 bg-maize-50 sm:bg-transparent rounded-xl sm:rounded-none">
                <MapPin className="w-4 h-4 text-forest-600 shrink-0" />
                <select
                  value={selectedZone}
                  onChange={e => setSelectedZone && setSelectedZone(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-extrabold text-charcoal-800 focus:outline-none cursor-pointer pr-2 max-w-[170px] truncate"
                >
                  {LAGOS_ZONES.map(z => (
                    <option key={z.id} value={z.id}>{z.name}</option>
                  ))}
                </select>
              </div>

              {/* Search CTA */}
              <button
                type="submit"
                className="py-3 px-5 rounded-xl bg-paprika-600 hover:bg-paprika-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-paprika-600/25 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Find Food</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={onExploreFoods}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-forest-900 hover:bg-forest-950 text-white font-extrabold text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Explore All 18 Foods</span>
                <ArrowRight className="w-4 h-4 text-amberGold" />
              </button>

              <button
                type="button"
                onClick={onOpenVendorOnboarding}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-maize-50 text-charcoal-800 border-2 border-forest-700 font-extrabold text-sm shadow-xs transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <ChefHat className="w-4 h-4 text-forest-700" />
                <span>Become a Food Vendor</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-charcoal-600 font-semibold flex-wrap">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-forest-600" />
                <span>100% Vetted Home Kitchens</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amberGold" />
                <span>1.5L, 3L & 5L Sizing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-paprika-600" />
                <span>Chilled Weekend Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Food Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Food Card */}
              <div className="rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-charcoal-900 relative aspect-4/3 sm:aspect-square">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Egusi_soup_in_a_plate.jpg"
                  alt="Authentic Homemade Egusi Soup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-card border border-maize-200 text-charcoal-900">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-black uppercase text-paprika-600 tracking-wider">
                        Featured Dish
                      </span>
                      <h3 className="font-extrabold text-base text-charcoal-900 font-display">
                        Royal Egusi Elegusi
                      </h3>
                      <p className="text-xs text-charcoal-500">
                        Mama Nkechi's Kitchen • Lekki Phase 1
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-charcoal-400 font-bold block">1.5L, 3L & 5L</span>
                      <span className="text-base font-black text-paprika-600">From ₦16,500</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Food Card (Smoked Party Jollof) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-2xl bg-white shadow-card border border-maize-200 items-center gap-3 animate-bounce-slow">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/Nigerian_jollof_rice.jpg"
                  alt="Party Jollof"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div className="text-xs">
                  <span className="font-black text-charcoal-900 block">Firewood Party Jollof</span>
                  <span className="text-forest-700 font-bold">Chef Bimpe • 4.9★</span>
                </div>
              </div>

              {/* Floating Mini Food Card (Designer Ayamase) */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 p-3 rounded-2xl bg-white shadow-card border border-maize-200 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold text-xs">
                  5L
                </div>
                <div className="text-xs">
                  <span className="font-black text-charcoal-900 block">Designer Ayamase Stew</span>
                  <span className="text-paprika-600 font-bold">Iya Basira • Lagos Mainland</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
