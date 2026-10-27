import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FOOD_CATEGORIES } from '../data/marketplaceData';

export default function FoodCategories({
  selectedCategory,
  onSelectCategory
}) {
  return (
    <section id="categories" className="py-12 sm:py-16 bg-white border-y border-maize-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold border border-forest-200">
              <Sparkles className="w-3.5 h-3.5 text-forest-600" />
              <span>Explore Authentic Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight font-display">
              Browse Homemade Nigerian Delicacies
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl">
              From slow-simmered 5L soup troughs to firewood party Jollof rice, discover meals prepared with care by independent cooks.
            </p>
          </div>

          {selectedCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-xs font-bold text-paprika-600 hover:text-paprika-700 underline self-start sm:self-auto"
            >
              Show all categories
            </button>
          )}
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {FOOD_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  onSelectCategory(isSelected ? 'all' : cat.id);
                  const el = document.getElementById('featured-foods');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-3.5 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between group relative overflow-hidden ${
                  isSelected
                    ? 'border-paprika-600 bg-paprika-50/80 shadow-md ring-2 ring-paprika-500/20 scale-102'
                    : 'border-maize-200 bg-maize-50/60 hover:bg-white hover:border-paprika-300 hover:shadow-card'
                }`}
              >
                {/* Icon or Thumbnail */}
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center text-2xl group-hover:scale-110 transition-transform mb-2">
                  {cat.icon}
                </div>

                <div className="space-y-0.5">
                  <h3 className={`font-extrabold text-xs leading-tight transition-colors ${
                    isSelected ? 'text-paprika-700' : 'text-charcoal-900 group-hover:text-paprika-600'
                  }`}>
                    {cat.name}
                  </h3>
                  <span className="text-[10px] text-charcoal-400 font-medium block">
                    {cat.count} listings
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
