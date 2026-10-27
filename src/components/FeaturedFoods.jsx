import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Store, CheckCircle, Flame, Sparkles, Filter, Search, ArrowRight } from 'lucide-react';

export default function FeaturedFoods({
  foods,
  vendors,
  selectedCategory,
  onSelectCategory,
  onSelectFood,
  onVisitVendor
}) {
  const [selectedVendorFilter, setSelectedVendorFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'price-low', 'price-high'

  // Per-food selected size for instant card pricing preview
  const [cardSizes, setCardSizes] = useState({});

  const handleCardSizeSelect = (e, foodId, sizeOption) => {
    e.stopPropagation();
    setCardSizes(prev => ({
      ...prev,
      [foodId]: sizeOption
    }));
  };

  // Filter logic
  const filteredFoods = foods.filter(food => {
    const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
    const matchesVendor = selectedVendorFilter === 'all' || food.vendorId === selectedVendorFilter;
    const matchesSearch = searchQuery === '' || 
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.vendorName?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesVendor && matchesSearch;
  });

  // Sorting
  const sortedFoods = [...filteredFoods].sort((a, b) => {
    if (sortBy === 'price-low') {
      const priceA = a.sizes?.[0]?.price || 0;
      const priceB = b.sizes?.[0]?.price || 0;
      return priceA - priceB;
    }
    if (sortBy === 'price-high') {
      const priceA = a.sizes?.[a.sizes.length - 1]?.price || 0;
      const priceB = b.sizes?.[b.sizes.length - 1]?.price || 0;
      return priceB - priceA;
    }
    return (b.rating || 5) - (a.rating || 5);
  });

  return (
    <section id="featured-foods" className="py-12 sm:py-20 bg-maize-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paprika-100 text-paprika-800 text-xs font-bold border border-paprika-200">
              <Sparkles className="w-3.5 h-3.5 text-paprika-600" />
              <span>18 Authentic Nigerian Dishes with Real Photos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight font-display">
              Explore Our Homemade Food Menu
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl">
              Click any dish to open its dedicated page, view full ingredient details, and customize your size: 1.5L, 3L & 5L household tubs.
            </p>
          </div>

          <div className="text-xs text-charcoal-500 font-semibold self-start md:self-auto">
            Showing <span className="font-extrabold text-charcoal-900">{sortedFoods.length}</span> authentic dishes
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="p-4 rounded-2xl bg-white border border-maize-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search Egusi, White soup, Ayamase, Jollof..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-maize-300 text-xs bg-maize-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500 text-charcoal-900"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Vendor Filter */}
            <select
              value={selectedVendorFilter}
              onChange={e => setSelectedVendorFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-maize-300 text-xs font-bold text-charcoal-700 bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500"
            >
              <option value="all">All Food Vendors</option>
              {vendors?.map(v => (
                <option key={v.id} value={v.id}>{v.name}</option>
              ))}
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl border border-maize-300 text-xs font-bold text-charcoal-700 bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500"
            >
              <option value="popular">Top Rated & Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* 18 Foods Grid - Every card is clickable */}
        {sortedFoods.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-maize-300 p-8 space-y-3">
            <p className="text-base font-extrabold text-charcoal-800">No dishes match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedVendorFilter('all');
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-paprika-600 text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {sortedFoods.map((food) => {
              const activeSize = cardSizes[food.id] || food.sizes?.find(s => s.popular) || food.sizes?.[0];
              const isAvailable = food.availability !== 'sold_out';

              return (
                <div
                  key={food.id}
                  onClick={() => onSelectFood(food)}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-maize-200 overflow-hidden shadow-xs hover:shadow-card hover:border-paprika-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Real Food Image with Vendor Pill and Badges */}
                    <div className="relative h-56 sm:h-60 overflow-hidden bg-charcoal-900">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-black/25" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider">
                          {food.categoryName}
                        </span>

                        {food.popular && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amberGold text-charcoal-950 text-[10px] font-black shadow-xs">
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Clickable Vendor Badge */}
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onVisitVendor) onVisitVendor(food.vendorId);
                        }}
                        className="absolute bottom-3 left-3 px-2.5 py-1 rounded-xl bg-charcoal-950/80 backdrop-blur-md text-white text-xs flex items-center gap-1.5 cursor-pointer hover:bg-paprika-600 transition-colors shadow-sm"
                        title="View vendor store"
                      >
                        <Store className="w-3.5 h-3.5 text-amberGold" />
                        <span className="font-extrabold text-[11px] truncate max-w-[160px]">
                          {food.vendorName}
                        </span>
                        <CheckCircle className="w-3 h-3 text-forest-300 shrink-0" />
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amberGold text-amberGold" />
                        <span>{food.rating || 4.9}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 space-y-3">
                      <div>
                        <h3 className="font-extrabold text-xl text-charcoal-900 group-hover:text-paprika-600 transition-colors font-display leading-snug">
                          {food.name}
                        </h3>

                        <p className="text-xs text-charcoal-600 line-clamp-2 mt-1 leading-relaxed">
                          {food.description}
                        </p>
                      </div>

                      {/* SIZE SELECTION PILLS - Clickable */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-[11px] font-bold text-charcoal-500">
                          <span>Sizes Available:</span>
                          <span className="text-forest-700 font-semibold">{activeSize?.portions}</span>
                        </div>

                        <div className="grid grid-cols-3 gap-1.5">
                          {food.sizes?.map(sizeOption => {
                            const isChosen = activeSize?.id === sizeOption.id;
                            return (
                              <button
                                key={sizeOption.id}
                                type="button"
                                onClick={(e) => handleCardSizeSelect(e, food.id, sizeOption)}
                                className={`py-1.5 px-1.5 rounded-xl text-center text-xs transition-all border ${
                                  isChosen
                                    ? 'bg-paprika-50 border-paprika-600 text-paprika-800 font-black shadow-xs ring-1 ring-paprika-500/20'
                                    : 'bg-maize-50 border-maize-200 text-charcoal-700 font-bold hover:bg-white hover:border-maize-300'
                                }`}
                              >
                                <span className="block text-[11px] leading-tight">
                                  {sizeOption.label.split(' ')[0]} {sizeOption.volume?.includes('L') ? sizeOption.volume : ''}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Displayed Dynamic Price */}
                      <div className="pt-2 flex items-baseline justify-between border-t border-maize-100">
                        <div>
                          <span className="text-[10px] text-charcoal-400 font-bold uppercase tracking-wider block">
                            Price for {activeSize?.label}
                          </span>
                          <span className="text-xl font-black text-paprika-600 font-display">
                            ₦{activeSize ? activeSize.price.toLocaleString() : '—'}
                          </span>
                        </div>

                        <span className="text-[11px] font-semibold text-forest-700 bg-forest-50 px-2 py-0.5 rounded border border-forest-200">
                          {isAvailable ? 'In Stock' : 'Sold Out'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: Both lead to the dedicated food page */}
                  <div className="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2 mt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectFood(food);
                      }}
                      className="py-2.5 px-3 rounded-xl border border-maize-300 bg-white hover:bg-maize-100 text-charcoal-900 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5 text-charcoal-600" />
                      <span>View Food</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectFood(food);
                      }}
                      className="py-2.5 px-3 rounded-xl bg-paprika-600 hover:bg-paprika-700 active:scale-95 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-paprika-600/25 transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order Dish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
