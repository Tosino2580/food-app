import React, { useState } from 'react';
import { X, Star, CheckCircle, ShieldCheck, Clock, Flame, ShoppingBag, ArrowRight, Store, ChefHat, Sparkles } from 'lucide-react';

export default function ProductDetailModal({
  food,
  isOpen,
  onClose,
  onAddToCart,
  onOrderNow,
  onVisitVendor
}) {
  if (!isOpen || !food) return null;

  // Selected size state - defaults to second size or first
  const defaultSize = food.sizes?.find(s => s.popular) || food.sizes?.[0];
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [addedNotice, setAddedNotice] = useState(false);

  // When food changes, ensure size is initialized
  React.useEffect(() => {
    if (food?.sizes?.length) {
      setSelectedSize(food.sizes.find(s => s.popular) || food.sizes[0]);
      setQuantity(1);
    }
  }, [food]);

  const unitPrice = selectedSize ? selectedSize.price : 0;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    const cartItem = {
      id: `${food.id}-${selectedSize?.id || 'standard'}`,
      originalId: food.id,
      name: food.name,
      vendorName: food.vendorName,
      vendorId: food.vendorId,
      category: food.categoryName,
      image: food.image,
      sizeId: selectedSize?.id,
      sizeLabel: selectedSize?.label,
      volume: selectedSize?.volume,
      price: unitPrice,
      quantity: quantity,
      specialInstructions
    };
    onAddToCart(cartItem);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleOrder = () => {
    const cartItem = {
      id: `${food.id}-${selectedSize?.id || 'standard'}`,
      originalId: food.id,
      name: food.name,
      vendorName: food.vendorName,
      vendorId: food.vendorId,
      category: food.categoryName,
      image: food.image,
      sizeId: selectedSize?.id,
      sizeLabel: selectedSize?.label,
      volume: selectedSize?.volume,
      price: unitPrice,
      quantity: quantity,
      specialInstructions
    };
    onAddToCart(cartItem);
    onClose();
    if (onOrderNow) onOrderNow(cartItem);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-charcoal-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-maize-50 rounded-2xl sm:rounded-3xl shadow-modal overflow-hidden border border-maize-300 my-auto max-h-[92vh] flex flex-col md:flex-row text-charcoal-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-charcoal-700 shadow-md flex items-center justify-center transition-all duration-150 active:scale-95 border border-maize-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Food Photography & Vendor Quickcard */}
        <div className="md:w-5/12 bg-charcoal-900 text-white relative min-h-[240px] md:min-h-full flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={food.image} 
              alt={food.name} 
              className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
          </div>

          {/* Top Badges */}
          <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-forest-800 text-maize-100 border border-forest-600 shadow-sm">
              <ChefHat className="w-3.5 h-3.5" />
              {food.categoryName}
            </span>
            {food.popular && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-amberGold text-charcoal-950 shadow-sm">
                <Sparkles className="w-3 h-3" /> Popular
              </span>
            )}
          </div>

          {/* Bottom Card Content over Image */}
          <div className="relative z-10 p-4 sm:p-5 space-y-3">
            {/* Vendor Tag */}
            <div 
              onClick={() => {
                onClose();
                if (onVisitVendor) onVisitVendor(food.vendorId);
              }}
              className="inline-flex items-center gap-2 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all cursor-pointer group"
            >
              <Store className="w-4 h-4 text-amberGold shrink-0" />
              <div className="text-left text-xs">
                <span className="text-maize-200 block text-[10px] leading-tight">Prepared by Vendor</span>
                <span className="font-extrabold text-white group-hover:underline flex items-center gap-1">
                  {food.vendorName}
                  <CheckCircle className="w-3 h-3 text-forest-400 inline" />
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-maize-200">
              <span className="flex items-center gap-1 font-bold text-amberGold">
                <Star className="w-3.5 h-3.5 fill-amberGold" /> {food.rating || 4.9}
              </span>
              <span>•</span>
              <span>{food.reviewsCount || 120} authentic reviews</span>
            </div>
          </div>
        </div>

        {/* Right Side: Product Details & Size Selection */}
        <div className="md:w-7/12 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4 sm:space-y-5">
            {/* Title & Price Header */}
            <div>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight font-display">
                  {food.name}
                </h2>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-black text-paprika-600">
                    ₦{totalPrice.toLocaleString()}
                  </div>
                  {quantity > 1 && (
                    <span className="text-xs text-charcoal-500 font-medium">
                      (₦{unitPrice.toLocaleString()} each)
                    </span>
                  )}
                </div>
              </div>

              {/* Availability & Spice Level */}
              <div className="flex items-center gap-2 mt-2 flex-wrap text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-800 font-bold border border-forest-200">
                  <CheckCircle className="w-3 h-3 text-forest-700" /> In Stock & Freshly Prepared
                </span>
                {food.spiceLevel && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-paprika-50 text-paprika-700 font-semibold border border-paprika-200">
                    <Flame className="w-3 h-3 text-paprika-500" /> {food.spiceLevel}
                  </span>
                )}
                {food.shelfLife && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-charcoal-100 text-charcoal-700 font-medium">
                    <Clock className="w-3 h-3 text-charcoal-500" /> {food.shelfLife}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              {food.description}
            </p>

            {/* Ingredients */}
            {food.ingredients && (
              <div className="p-3.5 rounded-xl bg-maize-100/70 border border-maize-300 text-xs text-charcoal-700 space-y-1">
                <span className="font-extrabold text-charcoal-900 uppercase tracking-wider text-[10px] block">
                  Authentic Ingredients & Seasonings
                </span>
                <p className="leading-relaxed text-charcoal-600 italic">
                  {food.ingredients}
                </p>
              </div>
            )}

            {/* REQUIRED: Size Selection (1.5L, 3L, 5L for Soups/Stews or Portions for Rice) */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-extrabold text-charcoal-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Select Size / Quantity</span>
                  <span className="text-[11px] font-semibold text-paprika-600 normal-case">
                    (Price updates automatically)
                  </span>
                </label>
                {selectedSize && (
                  <span className="text-xs font-bold text-forest-800 bg-forest-50 px-2 py-0.5 rounded-md border border-forest-200">
                    {selectedSize.portions}
                  </span>
                )}
              </div>

              {/* Size Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {food.sizes?.map((sizeOption) => {
                  const isSelected = selectedSize?.id === sizeOption.id;
                  return (
                    <button
                      key={sizeOption.id}
                      type="button"
                      onClick={() => setSelectedSize(sizeOption)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 relative flex flex-col justify-between ${
                        isSelected
                          ? 'border-paprika-600 bg-paprika-50/70 shadow-sm ring-2 ring-paprika-500/20'
                          : 'border-maize-300 bg-white hover:border-paprika-300 hover:bg-maize-50/50'
                      }`}
                    >
                      {sizeOption.popular && (
                        <span className="absolute -top-2 right-2 text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-amberGold text-charcoal-950 shadow-xs">
                          Best Value
                        </span>
                      )}
                      <div>
                        <div className="font-black text-xs sm:text-sm text-charcoal-900">
                          {sizeOption.label}
                        </div>
                        <div className="text-[11px] text-charcoal-500 mt-0.5">
                          {sizeOption.portions}
                        </div>
                      </div>
                      <div className="mt-2 font-extrabold text-sm text-paprika-600">
                        ₦{sizeOption.price.toLocaleString()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector & Kitchen Note */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center border border-maize-300 rounded-xl bg-white shadow-xs p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-charcoal-700 hover:bg-maize-100 transition-colors"
                >
                  -
                </button>
                <span className="w-10 text-center font-black text-sm text-charcoal-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-charcoal-700 hover:bg-maize-100 transition-colors"
                >
                  +
                </button>
              </div>

              <div className="text-xs text-charcoal-600">
                <span className="font-bold text-charcoal-800 block">Fresh Freezer-Ready Packaging</span>
                Delivered in airtight microwave & freezer-safe tubs.
              </div>
            </div>
          </div>

          {/* Action Buttons Footer */}
          <div className="pt-6 mt-6 border-t border-maize-200 space-y-2.5">
            {addedNotice && (
              <div className="p-2 rounded-xl bg-forest-100 border border-forest-300 text-forest-800 text-xs font-bold text-center animate-fade-in flex items-center justify-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-forest-600" />
                Added {quantity}x {food.name} ({selectedSize?.label}) to your cart!
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleAdd}
                className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm bg-white hover:bg-maize-100 text-charcoal-900 border-2 border-paprika-600 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-98"
              >
                <ShoppingBag className="w-4 h-4 text-paprika-600" />
                <span>Add to Cart (₦{totalPrice.toLocaleString()})</span>
              </button>

              <button
                type="button"
                onClick={handleOrder}
                className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm bg-paprika-600 hover:bg-paprika-700 text-white flex items-center justify-center gap-2 shadow-md shadow-paprika-600/25 transition-all duration-200 active:scale-98"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] text-charcoal-500 pt-1">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-600" /> Verified Hygiene Standard
              </span>
              <span>•</span>
              <span>Chilled Lagos Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
