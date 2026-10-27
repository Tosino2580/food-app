import React from 'react';
import { Star, MapPin, Store, CheckCircle, ShieldCheck, ArrowRight, ChefHat, Sparkles, PlusCircle } from 'lucide-react';

export default function VendorsSection({
  vendors,
  foods,
  onVisitVendor,
  onOpenVendorOnboarding
}) {
  return (
    <section id="vendors" className="py-14 sm:py-20 bg-maize-50 border-t border-maize-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold border border-forest-200">
              <ChefHat className="w-3.5 h-3.5 text-forest-600" />
              <span>Independent Home Kitchens</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight font-display">
              Meet Our Trusted Food Vendors
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl">
              Every vendor is vetted for commercial-grade kitchen hygiene and authentic regional preparation. Support local culinary artisans and order directly from their store.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenVendorOnboarding}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-maize-100 font-extrabold text-xs shadow-sm transition-all active:scale-95 self-start sm:self-auto shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-amberGold" />
            <span>Join as a Food Vendor</span>
          </button>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {vendors.map((vendor) => {
            const vendorDishes = foods.filter(f => f.vendorId === vendor.id);
            return (
              <div
                key={vendor.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-maize-200 overflow-hidden shadow-xs hover:shadow-card hover:border-paprika-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Vendor Cover Banner */}
                  <div className="relative h-32 sm:h-36 overflow-hidden bg-charcoal-900">
                    <img
                      src={vendor.coverImage || vendor.image}
                      alt={vendor.name}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      {vendor.verified && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-forest-900/90 text-maize-100 text-[10px] font-black border border-forest-600 uppercase tracking-wider backdrop-blur-sm">
                          <ShieldCheck className="w-3 h-3 text-forest-300" /> Verified
                        </span>
                      )}
                      {vendor.badge && (
                        <span className="px-2 py-0.5 rounded-md bg-amberGold text-charcoal-950 text-[10px] font-black uppercase shadow-xs">
                          {vendor.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Vendor Avatar & Header */}
                  <div className="px-5 pt-0 pb-4 relative space-y-3">
                    <div className="flex items-end justify-between -mt-10 mb-2">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-md bg-white shrink-0"
                      />
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-maize-100 text-charcoal-800 text-xs font-bold border border-maize-200">
                        <Star className="w-3.5 h-3.5 fill-amberGold text-amberGold" />
                        <span>{vendor.rating || 4.9}</span>
                        <span className="text-charcoal-400 font-normal">({vendor.reviewsCount || 100})</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-xl text-charcoal-900 font-display group-hover:text-paprika-600 transition-colors">
                        {vendor.name}
                      </h3>
                      <p className="text-xs text-charcoal-500 flex items-center gap-1 mt-0.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-paprika-500 shrink-0" />
                        <span>{vendor.location}</span>
                      </p>
                    </div>

                    <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                      {vendor.bio}
                    </p>

                    {/* Specialties */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-extrabold text-charcoal-400 uppercase tracking-wider block">
                        Cuisine Specialties:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {vendor.specialties?.slice(0, 3).map((sp, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-maize-100 text-charcoal-700 text-[10px] font-bold border border-maize-200"
                          >
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0 border-t border-maize-100 mt-2">
                  <div className="flex items-center justify-between pt-3">
                    <span className="text-xs font-bold text-charcoal-500">
                      {vendorDishes.length} signature dishes listed
                    </span>

                    <button
                      type="button"
                      onClick={() => onVisitVendor(vendor.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-paprika-50 hover:bg-paprika-600 hover:text-white text-paprika-700 font-extrabold text-xs border border-paprika-200 transition-all active:scale-95"
                    >
                      <span>Visit Store</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Become a Vendor Invite Card */}
          <div className="bg-gradient-to-br from-forest-900 to-forest-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between border border-forest-800 shadow-md">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amberGold/20 border border-amberGold/40 text-amberGold flex items-center justify-center">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-2xl font-display text-white">
                Are You a Skilled Nigerian Food Cook?
              </h3>
              <p className="text-xs sm:text-sm text-forest-200 leading-relaxed">
                Turn your home cooking into a thriving business. List your signature soups, stews, and party rice batches. We handle customer payments, order scheduling, and delivery coordination.
              </p>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={onOpenVendorOnboarding}
                className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs bg-amberGold hover:bg-amber-400 text-charcoal-950 flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
              >
                <span>Register Your Store Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
