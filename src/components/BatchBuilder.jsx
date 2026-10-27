import React, { useState } from 'react';
import { BATCH_BUNDLES, SOUPS, STEWS, PROTEINS, BASES } from '../data/menuData';
import { Check, Plus, Sparkles, Flame, Snowflake, Clock, Layers } from 'lucide-react';

export default function BatchBuilder({ onAddToCart, activeTab, setActiveTab }) {
  const [customCategory, setCustomCategory] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState({});
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
      type,
      sizeLabel: selectedSizeObj.label,
      volume: selectedSizeObj.volume || null,
      quantityPortions: selectedSizeObj.quantity || null,
      price: selectedSizeObj.price,
      image: item.image,
      spiceLevel: item.spiceLevel || null,
      category: item.category
    };
    onAddToCart(cartItem);
    setAddedItemFeedback(item.id);
    setTimeout(() => setAddedItemFeedback(null), 1800);
  };

  const handleAddBundle = (bundle) => {
    onAddToCart({
      id: `${bundle.id}-${Date.now()}`,
      originalId: bundle.id,
      name: bundle.name,
      type: 'bundle',
      sizeLabel: bundle.householdSize,
      price: bundle.price,
      image: bundle.image,
      includes: bundle.includes,
      category: 'Curated Plan'
    });
    setAddedItemFeedback(bundle.id);
    setTimeout(() => setAddedItemFeedback(null), 1800);
  };

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
    <section id="batch-builder" className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <span className="text-xs font-black uppercase tracking-widest text-forest-800 bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
          The Weekly Menu
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight">
          How do you want your cooking handled?
        </h2>
        <p className="text-charcoal-600 text-sm sm:text-base">
          Choose a pre-balanced weekly plan, or build your own custom batch.
        </p>

        {/* Tab Toggle — stacks on tiny screens */}
        <div className="inline-flex flex-col sm:flex-row p-1.5 rounded-2xl bg-maize-200/80 border border-maize-300 shadow-inner mt-4 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('bundles')}
            id="tab-curated-plans"
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'bundles'
                ? 'bg-paprika-600 text-white shadow-md'
                : 'text-charcoal-700 hover:text-charcoal-900'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Curated Weekly Plans</span>
          </button>

          <button
            onClick={() => setActiveTab('custom')}
            id="tab-custom-builder"
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'custom'
                ? 'bg-paprika-600 text-white shadow-md'
                : 'text-charcoal-700 hover:text-charcoal-900'
            }`}
          >
            <Layers className="w-4 h-4 shrink-0" />
            <span>Build Your Own Batch</span>
          </button>
        </div>
      </div>

      {/* CURATED BUNDLES */}
      {activeTab === 'bundles' && (
        <div id="menu-plans" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {BATCH_BUNDLES.map((bundle) => {
            const isAdded = addedItemFeedback === bundle.id;
            return (
              <div
                key={bundle.id}
                className={`rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  bundle.popular
                    ? 'bg-white border-2 border-paprika-500 shadow-elevated lg:-translate-y-2'
                    : 'bg-white/90 border border-maize-300 shadow-card hover:border-paprika-300'
                }`}
              >
                {bundle.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-paprika-600 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                    {bundle.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden h-44 sm:h-48 group">
                    <img src={bundle.image} alt={bundle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-charcoal-900/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      {bundle.householdSize}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-charcoal-900 text-xs font-black px-2.5 py-1 rounded-lg">
                      {bundle.mealsCount}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-charcoal-900">{bundle.name}</h3>
                    <p className="text-xs text-charcoal-500 mt-1 font-medium">{bundle.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-2xl sm:text-3xl font-black text-paprika-600 font-display">
                      ₦{bundle.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-charcoal-400 line-through">₦{bundle.originalPrice.toLocaleString()}</span>
                    <span className="text-[11px] font-bold text-forest-700 bg-forest-50 px-2 py-0.5 rounded border border-forest-200">
                      Save ₦{(bundle.originalPrice - bundle.price).toLocaleString()}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed">{bundle.description}</p>

                  <div className="space-y-2 pt-2 border-t border-maize-200">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-charcoal-500">Included:</div>
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

                <button
                  onClick={() => handleAddBundle(bundle)}
                  className={`mt-5 w-full py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                    isAdded
                      ? 'bg-forest-700 text-white'
                      : bundle.popular
                      ? 'bg-paprika-600 hover:bg-paprika-700 text-white shadow-md'
                      : 'bg-charcoal-900 hover:bg-charcoal-800 text-white'
                  }`}
                >
                  {isAdded ? <><Check className="w-4 h-4" /><span>Added!</span></> : <><Plus className="w-4 h-4" /><span>Add Plan to Batch</span></>}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* CUSTOM A-LA-CARTE */}
      {activeTab === 'custom' && (
        <div className="space-y-6">
          {/* Category Filter — horizontally scrollable on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'soups', label: 'Soups' },
              { id: 'stews', label: 'Stews & Sauces' },
              { id: 'proteins', label: 'Protein Trays' },
              { id: 'bases', label: 'Jollof & Bases' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setCustomCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map(item => {
              const sizeOptions = item.itemType === 'proteins' ? item.options : item.sizes;
              const currentSizeIndex = selectedSizes[item.id] || 0;
              const activeSizeObj = sizeOptions[currentSizeIndex];
              const isAdded = addedItemFeedback === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-card border border-maize-300/80 hover:border-paprika-300 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden group">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {item.tags && (
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="bg-charcoal-900/85 text-white text-[9px] font-black px-1.5 py-0.5 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.spiceLevel && (
                      <div className="absolute bottom-2 right-2 bg-white/90 text-paprika-700 text-[9px] font-black px-2 py-1 rounded-md flex items-center gap-1">
                        <Flame className="w-2.5 h-2.5 text-paprika-600" />
                        <span>{item.spiceLevel}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 space-y-3">
                    <div>
                      <h4 className="font-display font-extrabold text-base sm:text-lg text-charcoal-900 leading-snug">{item.name}</h4>
                      <p className="text-xs text-charcoal-600 mt-1 leading-relaxed line-clamp-2">{item.description}</p>
                    </div>

                    {/* Size Selector — 3 cols, compact on mobile */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-charcoal-500 uppercase tracking-wider block">Choose Volume:</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {sizeOptions.map((sz, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSizeChange(item.id, idx)}
                            className={`py-2 rounded-xl text-center transition-all ${
                              currentSizeIndex === idx
                                ? 'bg-paprika-600 text-white font-bold shadow-sm'
                                : 'bg-maize-50 text-charcoal-700 hover:bg-maize-100 border border-maize-200'
                            }`}
                          >
                            <div className="text-[10px] sm:text-[11px] font-extrabold leading-tight">
                              {sz.volume ? `${sz.volume}L` : sz.quantity ? `${sz.quantity}pcs` : sz.label.split(' ')[0]}
                            </div>
                            <div className="text-[9px] opacity-90">₦{(sz.price / 1000).toFixed(0)}k</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-maize-50 border border-maize-200">
                      <span className="text-charcoal-600 text-[11px]">
                        {activeSizeObj.portions ? `~${activeSizeObj.portions}` : activeSizeObj.label}
                      </span>
                      <span className="font-black text-paprika-600 text-sm font-display">
                        ₦{activeSizeObj.price.toLocaleString()}
                      </span>
                    </div>

                    {item.shelfLife && (
                      <div className="flex items-center gap-1.5 text-[10px] text-charcoal-500">
                        <Snowflake className="w-3 h-3 text-forest-600 shrink-0" />
                        <span className="line-clamp-1">{item.shelfLife}</span>
                      </div>
                    )}

                    {/* Add Button */}
                    <button
                      onClick={() => handleAddCustomItem(item, item.itemType)}
                      className={`mt-auto w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 ${
                        isAdded ? 'bg-forest-700 text-white' : 'bg-charcoal-900 hover:bg-paprika-600 text-white'
                      }`}
                    >
                      {isAdded
                        ? <><Check className="w-3.5 h-3.5" /><span>Added!</span></>
                        : <><Plus className="w-3.5 h-3.5" /><span>Add {activeSizeObj.volume ? `${activeSizeObj.volume}L` : 'to Batch'}</span></>
                      }
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
