import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Star, CheckCircle, ShieldCheck, Clock, Flame, 
  ShoppingBag, ArrowRight, Store, ChefHat, Sparkles, Truck, 
  Heart, Share2, Info, Check, AlertCircle 
} from 'lucide-react';

export default function ProductPage({
  food,
  allFoods,
  onBack,
  onAddToCart,
  onOrderNow,
  onVisitVendor,
  onSelectRelatedFood
}) {
  if (!food) return null;

  // Selected size state - defaults to popular or first size
  const defaultSize = food.sizes?.find(s => s.popular) || food.sizes?.[0];
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [addedNotice, setAddedNotice] = useState(false);

  // When food prop changes, reset state and scroll to top
  useEffect(() => {
    setSelectedSize(food.sizes?.find(s => s.popular) || food.sizes?.[0]);
    setQuantity(1);
    setSpecialInstructions('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [food]);

  const unitPrice = selectedSize ? selectedSize.price : 0;
  const totalPrice = unitPrice * quantity;

  // Other dishes from this same vendor
  const vendorDishes = allFoods?.filter(f => f.vendorId === food.vendorId && f.id !== food.id) || [];

  const handleAdd = () => {
    const cartItem = {
      id: `${food.id}-${selectedSize?.id || 'std'}`,
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
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const handleOrder = () => {
    const cartItem = {
      id: `${food.id}-${selectedSize?.id || 'std'}`,
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
    if (onOrderNow) onOrderNow(cartItem);
  };

  return (
    <div className="min-h-screen bg-maize-50 pt-4 pb-20 animate-fade-in text-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Breadcrumb & Navigation Bar */}
        <div className="flex items-center justify-between border-b border-maize-200 pb-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-maize-100 text-charcoal-800 font-extrabold text-xs sm:text-sm border border-maize-300 transition-all shadow-xs active:scale-95 group"
          >
            <ArrowLeft className="w-4 h-4 text-paprika-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Marketplace</span>
          </button>

          <div className="text-xs text-charcoal-500 hidden sm:flex items-center gap-2">
            <span>Marketplace</span>
            <span>/</span>
            <span className="text-charcoal-700 font-bold">{food.categoryName}</span>
            <span>/</span>
            <span className="text-paprika-600 font-extrabold truncate max-w-[200px]">{food.name}</span>
          </div>
        </div>

        {/* Main Product Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column (5 Cols on LG): Large Authentic Food Photo & Vendor Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Food Photo Frame */}
            <div className="rounded-3xl overflow-hidden bg-charcoal-900 shadow-card border-4 border-white relative aspect-4/3 sm:aspect-square group">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-black/20" />

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/90 text-maize-100 text-xs font-black uppercase tracking-wider backdrop-blur-md border border-forest-600 shadow-sm">
                  <ChefHat className="w-3.5 h-3.5 text-amberGold" />
                  {food.categoryName}
                </span>

                {food.popular && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amberGold text-charcoal-950 text-xs font-black shadow-md">
                    <Sparkles className="w-3.5 h-3.5" /> Best Seller
                  </span>
                )}
              </div>

              {/* Bottom Image Rating */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-charcoal-950/80 backdrop-blur-md border border-white/20">
                  <Star className="w-4 h-4 fill-amberGold text-amberGold" />
                  <span className="font-extrabold text-sm">{food.rating || 4.9}</span>
                  <span className="text-maize-300">({food.reviewsCount || 120} verified reviews)</span>
                </div>
              </div>
            </div>

            {/* Vendor Profile Card */}
            <div className="p-5 rounded-3xl bg-white border border-maize-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-charcoal-400 tracking-wider">
                  Prepared Fresh by Independent Kitchen
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-forest-50 text-forest-800 text-[10px] font-bold border border-forest-200">
                  <ShieldCheck className="w-3 h-3 text-forest-600" /> Vetted Partner
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-paprika-100 border border-paprika-300 flex items-center justify-center font-black text-paprika-800 text-lg shrink-0">
                  <Store className="w-6 h-6 text-paprika-600" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-charcoal-900 font-display">
                    {food.vendorName}
                  </h3>
                  <p className="text-xs text-charcoal-500 font-medium">
                    {food.vendorLocation || 'Lagos Kitchen Hub'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onVisitVendor(food.vendorId)}
                className="w-full py-2.5 px-4 rounded-xl border border-maize-300 bg-maize-50 hover:bg-maize-100 text-charcoal-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Visit Chef's Store & Full Menu</span>
                <ArrowRight className="w-3.5 h-3.5 text-paprika-600" />
              </button>
            </div>

            {/* Packaging & Freezer Specs */}
            <div className="p-5 rounded-3xl bg-forest-900 text-white space-y-3">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-amberGold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Cold-Chain Hygiene Guarantee
              </h4>
              <ul className="text-xs text-forest-200 space-y-1.5">
                <li>• Airtight, food-grade microwave & freezer-safe tubs.</li>
                <li>• Pressure-simmered in licensed, inspected kitchens.</li>
                <li>• Date stamped with reheat & portioning guide.</li>
                <li>• Saturday & Sunday chilled delivery in thermal totes.</li>
              </ul>
            </div>
          </div>

          {/* Right Column (7 Cols on LG): Dish Details, Size Selector & Ordering */}
          <div className="lg:col-span-7 space-y-6">

            {/* Header: Title, Tags & Live Price */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-maize-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl font-black text-charcoal-900 font-display tracking-tight leading-tight">
                    {food.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-forest-800 font-bold flex items-center gap-2">
                    <span>{food.categoryName}</span>
                    <span>•</span>
                    <span>{food.vendorName}</span>
                  </p>
                </div>

                {/* Big Dynamic Price */}
                <div className="sm:text-right p-3 sm:p-0 rounded-2xl bg-paprika-50 sm:bg-transparent border border-paprika-100 sm:border-none">
                  <span className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider block">
                    Price for {selectedSize?.label}
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-paprika-600 font-display">
                    ₦{totalPrice.toLocaleString()}
                  </div>
                  {quantity > 1 && (
                    <span className="text-xs text-charcoal-500 font-medium">
                      (₦{unitPrice.toLocaleString()} each)
                    </span>
                  )}
                </div>
              </div>

              {/* Status Chips */}
              <div className="flex items-center gap-2 flex-wrap pt-1 text-xs">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest-100 text-forest-800 font-bold border border-forest-200">
                  <CheckCircle className="w-3.5 h-3.5 text-forest-600" />
                  In Stock & Cooked to Order
                </span>

                {food.spiceLevel && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-paprika-50 text-paprika-700 font-bold border border-paprika-200">
                    <Flame className="w-3.5 h-3.5 text-paprika-500" />
                    {food.spiceLevel}
                  </span>
                )}

                {food.shelfLife && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-charcoal-100 text-charcoal-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-charcoal-500" />
                    {food.shelfLife}
                  </span>
                )}
              </div>

              {/* Deep Culinary Description */}
              <div className="pt-2 border-t border-maize-100">
                <h4 className="text-xs font-black uppercase text-charcoal-400 tracking-wider mb-1.5">
                  About This Homemade Dish
                </h4>
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                  {food.description}
                </p>
              </div>

              {/* Ingredients & Seasonings */}
              {food.ingredients && (
                <div className="p-4 rounded-2xl bg-maize-50 border border-maize-200 space-y-1.5 text-xs text-charcoal-700">
                  <span className="font-extrabold text-charcoal-900 uppercase tracking-wider text-[11px] block">
                    Authentic Ingredients & Traditional Seasonings:
                  </span>
                  <p className="leading-relaxed text-charcoal-600 italic">
                    {food.ingredients}
                  </p>
                </div>
              )}
            </div>

            {/* MANDATORY: SIZE SELECTION (1.5L, 3L, 5L for Soups/Stews or Portion Options) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-maize-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-charcoal-900 font-display flex items-center gap-2">
                    <span>1. Choose Size or Batch Volume</span>
                    <span className="text-xs text-paprika-600 font-normal">
                      (Price updates automatically)
                    </span>
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    Select your preferred tub size for this order.
                  </p>
                </div>

                {selectedSize && (
                  <span className="text-xs font-black text-forest-800 bg-forest-50 px-3 py-1 rounded-lg border border-forest-200">
                    {selectedSize.portions}
                  </span>
                )}
              </div>

              {/* 3 Size Option Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {food.sizes?.map((sizeOption) => {
                  const isSelected = selectedSize?.id === sizeOption.id;
                  return (
                    <button
                      key={sizeOption.id}
                      type="button"
                      onClick={() => setSelectedSize(sizeOption)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 relative flex flex-col justify-between ${
                        isSelected
                          ? 'border-paprika-600 bg-paprika-50/70 shadow-sm ring-2 ring-paprika-500/25 scale-102'
                          : 'border-maize-300 bg-maize-50/50 hover:bg-white hover:border-paprika-300'
                      }`}
                    >
                      {sizeOption.popular && (
                        <span className="absolute -top-2.5 right-3 text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-amberGold text-charcoal-950 shadow-xs">
                          Most Popular
                        </span>
                      )}

                      <div className="space-y-1">
                        <div className="font-extrabold text-sm sm:text-base text-charcoal-900 font-display">
                          {sizeOption.label}
                        </div>
                        <div className="text-xs text-charcoal-500">
                          {sizeOption.portions}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-maize-200/80 font-black text-base text-paprika-600">
                        ₦{sizeOption.price.toLocaleString()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & Kitchen Notes */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-maize-200 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <label className="text-xs font-black uppercase text-charcoal-900 tracking-wider block mb-1">
                    2. Select Quantity
                  </label>
                  <span className="text-xs text-charcoal-500">
                    Number of {selectedSize?.label} tubs to prepare
                  </span>
                </div>

                {/* Counter */}
                <div className="flex items-center border-2 border-maize-300 rounded-2xl bg-white shadow-xs p-1 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg text-charcoal-700 hover:bg-maize-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-black text-base text-charcoal-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg text-charcoal-700 hover:bg-maize-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Kitchen Instructions */}
              <div>
                <label className="text-xs font-black uppercase text-charcoal-900 tracking-wider block mb-1">
                  Special Kitchen Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Mild scotch bonnet pepper, extra iru (locust beans), tender cow skin..."
                  value={specialInstructions}
                  onChange={e => setSpecialInstructions(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-maize-300 bg-maize-50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500"
                />
              </div>

              {/* Order Notice */}
              {addedNotice && (
                <div className="p-3 rounded-2xl bg-forest-100 border border-forest-300 text-forest-800 text-xs font-bold text-center animate-fade-in flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-forest-600" />
                  <span>
                    Successfully added {quantity}x {food.name} ({selectedSize?.label}) to your cart!
                  </span>
                </div>
              )}

              {/* Action Buttons: Add to Cart & Order Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="w-full py-4 px-6 rounded-2xl font-extrabold text-sm bg-white hover:bg-maize-100 text-charcoal-900 border-2 border-paprika-600 flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4 text-paprika-600" />
                  <span>Add to Cart (₦{totalPrice.toLocaleString()})</span>
                </button>

                <button
                  type="button"
                  onClick={handleOrder}
                  className="w-full py-4 px-6 rounded-2xl font-extrabold text-sm bg-paprika-600 hover:bg-paprika-700 text-white flex items-center justify-center gap-2 shadow-md shadow-paprika-600/25 transition-all active:scale-98"
                >
                  <span>Order Now & Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Section: More Dishes by This Vendor */}
        {vendorDishes.length > 0 && (
          <div className="pt-8 border-t border-maize-200 space-y-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal-900 font-display">
                More Homemade Specialties by {food.vendorName}
              </h2>
              <p className="text-xs text-charcoal-500">
                Bundle your order from the same kitchen partner to simplify your weekly chilled delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vendorDishes.slice(0, 3).map((item) => {
                const itemSize = item.sizes?.find(s => s.popular) || item.sizes?.[0];
                return (
                  <div
                    key={item.id}
                    onClick={() => onSelectRelatedFood(item)}
                    className="bg-white rounded-2xl border border-maize-200 overflow-hidden shadow-xs hover:shadow-card hover:border-paprika-300 transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div className="relative h-44 overflow-hidden bg-charcoal-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[10px] font-black uppercase">
                        {item.categoryName}
                      </div>
                      {itemSize && (
                        <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-paprika-600 text-white text-xs font-black shadow-md">
                          From ₦{itemSize.price.toLocaleString()}
                        </div>
                      )}
                    </div>

                    <div className="p-4 space-y-1.5">
                      <h4 className="font-extrabold text-base text-charcoal-900 group-hover:text-paprika-600 transition-colors font-display">
                        {item.name}
                      </h4>
                      <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="pt-2 text-xs font-extrabold text-paprika-600 flex items-center gap-1">
                        <span>View Details & Sizing</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
