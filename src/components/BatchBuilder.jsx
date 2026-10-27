import React, { useState } from 'react';
import { BATCH_BUNDLES, SOUPS, STEWS, PROTEINS, BASES } from '../data/menuData';
import { Check, Plus, Sparkles, Flame, Snowflake, Clock, ShieldCheck, ShoppingBag, Layers, Filter } from 'lucide-react';

export default function BatchBuilder({ 
  onAddToCart, 
  activeTab, 
  setActiveTab 
}) {
  // Category filter for custom builder
  const [customCategory, setCustomCategory] = useState('all');

  // Track selected size for each custom item { [itemId]: sizeIndex }
  const [selectedSizes, setSelectedSizes] = useState({});

  // Feedback state for recently added items
  const [addedItemFeedback, setAddedItemFeedback] = useState(null);

  const handleSizeChange = (itemId, sizeIndex) => {
    setSelectedSizes(prev => ({ ...prev, [itemId]: sizeIndex }));
  };

  const handleAddCustomItem = (item, type) => {
    const sizeIndex = selectedSizes[item.id] || 0;
    const selectedSizeObj = type === 'proteins' ? item.options[sizeIndex] : item.sizes[sizeIndex];
    
    const cartItem = {
      id: `${item.id}-${sizeIndex}-${Date.now()}`,
      originalId: item.id,
      name: item.name,
      type: type,
      sizeLabel: selectedSizeObj.label,
      volume: selectedSizeObj.volume || null,
      quantityPortions: selectedSizeObj.quantity || null,
      price: selectedSizeObj.price,
      image: item.image,
      spiceLevel: item.spiceLevel || null,
      category: item.category
    };

    onAddToCart(cartItem);

    // Trigger visual toast/feedback
    setAddedItemFeedback(item.id);
    setTimeout(() => {
      setAddedItemFeedback(null);
    }, 1800);
  };

  const handleAddBundle = (bundle) => {
    const cartItem = {
      id: `${bundle.id}-${Date.now()}`,
      originalId: bundle.id,
      name: bundle.name,
      type: 'bundle',
      sizeLabel: bundle.householdSize,
      price: bundle.price,
      image: bundle.image,
      includes: bundle.includes,
      category: 'Curated Plan'
    };

    onAddToCart(cartItem);
    setAddedItemFeedback(bundle.id);
    setTimeout(() => {
      setAddedItemFeedback(null);
    }, 1800);
  };

  // Combine items for custom builder
  const allCustomItems = [
    ...SOUPS.map(i => ({ ...i, itemType: 'soups' })),
    ...STEWS.map(i => ({ ...i, itemType: 'stews' })),
    ...PROTEINS.map(i => ({ ...i, itemType: 'proteins' })),
    ...BASES.map(i => ({ ...i, itemType: 'bases' }))
  ];

  const filteredItems = customCategory === 'all' 
    ? allCustomItems 
    : allCustomItems.filter(item => item.itemType === customCategory);

  return (
    <section id="batch-builder" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-black uppercase tracking-widest text-forest-800 bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
          The Weekly Menu
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
          How do you want your cooking handled?
        </h2>
        <p className="text-charcoal-600 text-sm sm:text-base">
          Choose a pre-balanced weekly subscription plan, or build your own custom batch in litres.
        </p>

        {/* Mode Toggle Pills */}
        <div className="inline-flex p-1.5 rounded-2xl bg-maize-200/80 border border-maize-300 shadow-inner mt-4">
          <button
            onClick={() => setActiveTab('bundles')}
            id="tab-curated-plans"
            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'bundles'
                ? 'bg-paprika-600 text-white shadow-md'
                : 'text-charcoal-700 hover:text-charcoal-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Curated Weekly Plans (Best Value)</span>
          </button>
          
          <button
            onClick={() => setActiveTab('custom')}
            id="tab-custom-builder"
            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'custom'
                ? 'bg-paprika-600 text-white shadow-md'
                : 'text-charcoal-700 hover:text-charcoal-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Build Your Own Litre Batch</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: CURATED BUNDLES */}
      {activeTab === 'bundles' && (
        <div id="menu-plans" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {BATCH_BUNDLES.map((bundle) => {
            const isAdded = addedItemFeedback === bundle.id;

            return (
              <div
                key={bundle.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  bundle.popular
                    ? 'bg-white border-2 border-paprika-500 shadow-elevated scale-102 lg:-translate-y-2'
                    : 'bg-white/90 border border-maize-300 shadow-card hover:border-paprika-300'
                }`}
              >
                {/* Popular Pill */}
                {bundle.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-paprika-600 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    {bundle.badge}
                  </div>
                )}

                <div className="space-y-5">
                  {/* Image & Household Tag */}
                  <div className="relative rounded-2xl overflow-hidden h-48 group">
                    <img
                      src={bundle.image}
                      alt={bundle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-charcoal-900/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      {bundle.householdSize}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-charcoal-900 text-xs font-black px-2.5 py-1 rounded-lg">
                      {bundle.mealsCount}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl text-charcoal-900">
                      {bundle.name}
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-1 font-medium">
                      {bundle.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-1 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-paprika-600 font-display">
                      ₦{bundle.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-charcoal-400 line-through">
                      ₦{bundle.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-[11px] font-bold text-forest-700 bg-forest-50 px-2 py-0.5 rounded border border-forest-200">
                      Save ₦{(bundle.originalPrice - bundle.price).toLocaleString()}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {bundle.description}
                  </p>

                  {/* Included Items Checklist */}
                  <div className="space-y-2 pt-2 border-t border-maize-200">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-charcoal-500">
                      What’s in your weekend tote:
                    </div>
                    {bundle.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal-800">
                        <Check className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-forest-50 border border-forest-100 text-forest-800 text-[11px] font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-forest-600 shrink-0" />
                    <span>{bundle.savingsHours}</span>
                  </div>
                </div>

                {/* Add to Batch CTA */}
                <button
                  onClick={() => handleAddBundle(bundle)}
                  className={`mt-6 w-full py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                    isAdded
                      ? 'bg-forest-700 text-white'
                      : bundle.popular
                      ? 'bg-paprika-600 hover:bg-paprika-700 text-white shadow-md'
                      : 'bg-charcoal-900 hover:bg-charcoal-800 text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Weekly Batch!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add Weekly Plan to Batch</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: CUSTOM A-LA-CARTE LITRES */}
      {activeTab === 'custom' && (
        <div className="space-y-8">
          
          {/* Sub-Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'soups', label: 'Weekly Soups (1.5L – 4.0L)' },
              { id: 'stews', label: 'Simmered Stews & Sauces' },
              { id: 'proteins', label: 'Seasoned Protein Trays' },
              { id: 'bases', label: 'Party Jollof & Bases' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setCustomCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  customCategory === cat.id
                    ? 'bg-charcoal-900 text-white shadow-sm'
                    : 'bg-white text-charcoal-700 hover:bg-maize-200 border border-maize-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Custom Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map(item => {
              const sizeOptions = item.itemType === 'proteins' ? item.options : item.sizes;
              const currentSizeIndex = selectedSizes[item.id] || 0;
              const activeSizeObj = sizeOptions[currentSizeIndex];
              const isAdded = addedItemFeedback === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-card border border-maize-300/80 hover:border-paprika-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Item Image */}
                    <div className="relative h-48 overflow-hidden group">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.tags && item.tags.length > 0 && (
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                          {item.tags.map((t, idx) => (
                            <span key={idx} className="bg-charcoal-900/85 backdrop-blur-sm text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.spiceLevel && (
                        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-paprika-700 text-[10px] font-black px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                          <Flame className="w-3 h-3 text-paprika-600" />
                          <span>{item.spiceLevel}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 space-y-4">
                      <div>
                        <h4 className="font-display font-extrabold text-lg text-charcoal-900 leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-xs text-charcoal-600 mt-1.5 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Size / Volume Selector */}
                      <div className="space-y-2 pt-1">
                        <label className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider block">
                          Choose Volume / Quantity:
                        </label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {sizeOptions.map((sz, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSizeChange(item.id, idx)}
                              className={`py-2 px-1 rounded-xl text-center transition-all ${
                                currentSizeIndex === idx
                                  ? 'bg-paprika-600 text-white font-bold shadow-sm'
                                  : 'bg-maize-50 text-charcoal-700 hover:bg-maize-100 border border-maize-200 text-xs font-medium'
                              }`}
                            >
                              <div className="text-[11px] leading-tight font-extrabold">
                                {sz.volume ? `${sz.volume}L` : sz.quantity ? `${sz.quantity} pcs` : sz.label.split(' ')[0]}
                              </div>
                              <div className="text-[9px] opacity-90 mt-0.5">
                                ₦{(sz.price / 1000).toFixed(1)}k
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Selected Size Details */}
                      <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-maize-50 border border-maize-200">
                        <span className="text-charcoal-600 font-medium">
                          {activeSizeObj.portions ? `Yield: ~${activeSizeObj.portions}` : activeSizeObj.label}
                        </span>
                        <span className="font-black text-paprika-600 text-base font-display">
                          ₦{activeSizeObj.price.toLocaleString()}
                        </span>
                      </div>

                      {item.shelfLife && (
                        <div className="flex items-center gap-1.5 text-[10px] text-charcoal-500 font-medium">
                          <Snowflake className="w-3 h-3 text-forest-600" />
                          <span>{item.shelfLife}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Add to Batch CTA */}
                  <div className="p-5 sm:p-6 pt-0">
                    <button
                      onClick={() => handleAddCustomItem(item, item.itemType)}
                      className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 ${
                        isAdded
                          ? 'bg-forest-700 text-white'
                          : 'bg-charcoal-900 hover:bg-paprika-600 text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Batch!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add {activeSizeObj.volume ? `${activeSizeObj.volume}L Tub` : activeSizeObj.label}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

    </section>
  );
}
