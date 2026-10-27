import React, { useState } from 'react';
import { X, Star, MapPin, Phone, Mail, CheckCircle, ShieldCheck, ShoppingBag, Eye, Clock, Award, Sparkles, Filter } from 'lucide-react';

export default function VendorStoreModal({
  vendor,
  foods,
  isOpen,
  onClose,
  onSelectFood,
  onAddToCart
}) {
  if (!isOpen || !vendor) return null;

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter foods for this vendor
  const vendorFoods = foods.filter(f => f.vendorId === vendor.id);

  const filteredFoods = vendorFoods.filter(f => {
    const matchesCat = activeCategory === 'all' || f.category === activeCategory;
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (f.description && f.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-charcoal-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-maize-50 rounded-2xl sm:rounded-3xl shadow-modal overflow-hidden border border-maize-300 my-auto max-h-[92vh] flex flex-col text-charcoal-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-charcoal-700 shadow-md flex items-center justify-center transition-all duration-150 active:scale-95 border border-maize-200"
          aria-label="Close store modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Vendor Header Hero */}
        <div className="relative bg-charcoal-900 text-white min-h-[220px] sm:min-h-[260px] flex items-end overflow-hidden shrink-0">
          <div className="absolute inset-0">
            <img 
              src={vendor.coverImage || vendor.image} 
              alt={vendor.name} 
              className="w-full h-full object-cover opacity-35" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent" />
          </div>

          <div className="relative z-10 p-5 sm:p-8 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <img 
                src={vendor.image} 
                alt={vendor.name} 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amberGold shadow-lg shrink-0" 
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-3xl font-extrabold text-white font-display">
                    {vendor.name}
                  </h1>
                  {vendor.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-forest-800 text-maize-100 text-[10px] font-black border border-forest-500 uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3 text-forest-300" /> Verified Kitchen
                    </span>
                  )}
                  {vendor.badge && (
                    <span className="px-2 py-0.5 rounded-md bg-amberGold text-charcoal-950 text-[10px] font-black uppercase">
                      {vendor.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-maize-200 flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1 font-bold text-amberGold">
                    <Star className="w-3.5 h-3.5 fill-amberGold" /> {vendor.rating || 4.9} ({vendor.reviewsCount || 150} reviews)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-paprika-400" /> {vendor.location}
                  </span>
                </p>

                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  {vendor.specialties?.map((sp, idx) => (
                    <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-maize-200 border border-white/15">
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="sm:text-right shrink-0 text-xs text-maize-300 space-y-1">
              <div className="font-bold text-white flex items-center sm:justify-end gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amberGold" /> {vendor.prepTime || 'Fresh batch on order'}
              </div>
              <div>Coverage: {vendor.coverage}</div>
            </div>
          </div>
        </div>

        {/* Vendor Bio Callout */}
        <div className="px-5 sm:px-8 py-3 bg-white border-b border-maize-200 text-xs sm:text-sm text-charcoal-700 flex items-center justify-between flex-wrap gap-2">
          <p className="italic text-charcoal-600 line-clamp-2 max-w-3xl">
            "{vendor.bio}"
          </p>
          <div className="flex items-center gap-3 text-xs font-bold text-forest-800">
            <span className="inline-flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-forest-600" /> {vendor.phone}
            </span>
          </div>
        </div>

        {/* Store Menu Content */}
        <div className="p-5 sm:p-8 flex-1 overflow-y-auto space-y-6">
          {/* Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-maize-200 pb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-charcoal-900 font-display">
                Dishes Available from {vendor.name} ({filteredFoods.length})
              </h2>
              <p className="text-xs text-charcoal-500">
                Choose portions or litre sizing: 1.5L, 3L & 5L household troughs.
              </p>
            </div>

            <div className="w-full sm:w-auto flex items-center gap-2">
              <input
                type="text"
                placeholder="Search vendor menu..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 px-3 py-1.5 rounded-xl border border-maize-300 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-paprika-500"
              />
            </div>
          </div>

          {/* Dishes Grid */}
          {filteredFoods.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-maize-300">
              <p className="text-charcoal-600 font-medium">No dishes found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredFoods.map(food => {
                const defaultSize = food.sizes?.find(s => s.popular) || food.sizes?.[0];
                return (
                  <div
                    key={food.id}
                    className="bg-white rounded-2xl border border-maize-200 overflow-hidden shadow-xs hover:shadow-card hover:border-paprika-300 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden bg-charcoal-100">
                        <img
                          src={food.image}
                          alt={food.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-charcoal-950/70 backdrop-blur-sm text-white text-[10px] font-black uppercase">
                          {food.categoryName}
                        </div>
                        {defaultSize && (
                          <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-paprika-600 text-white text-xs font-black shadow-md">
                            From ₦{defaultSize.price.toLocaleString()}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-extrabold text-base text-charcoal-900 group-hover:text-paprika-600 transition-colors">
                            {food.name}
                          </h3>
                          <span className="text-xs font-bold text-amberGold flex items-center gap-0.5">
                            <Star className="w-3 h-3 fill-amberGold" /> {food.rating || 4.9}
                          </span>
                        </div>
                        <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                          {food.description}
                        </p>

                        {/* Sizing badges */}
                        <div className="flex items-center gap-1.5 flex-wrap pt-1 text-[11px] text-charcoal-500 font-semibold">
                          {food.sizes?.map(sz => (
                            <span key={sz.id} className="px-2 py-0.5 rounded bg-maize-100 border border-maize-300 text-charcoal-700">
                              {sz.label.split(' ')[0]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="p-4 pt-0 grid grid-cols-2 gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => onSelectFood(food)}
                        className="py-2 px-3 rounded-xl border border-maize-300 bg-maize-50 hover:bg-maize-100 text-charcoal-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-charcoal-600" />
                        <span>Details</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          onAddToCart({
                            id: `${food.id}-${defaultSize?.id || 'std'}`,
                            originalId: food.id,
                            name: food.name,
                            vendorName: food.vendorName,
                            vendorId: food.vendorId,
                            category: food.categoryName,
                            image: food.image,
                            sizeId: defaultSize?.id,
                            sizeLabel: defaultSize?.label,
                            price: defaultSize ? defaultSize.price : 0,
                            quantity: 1
                          });
                        }}
                        className="py-2 px-3 rounded-xl bg-paprika-600 hover:bg-paprika-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
