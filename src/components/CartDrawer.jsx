import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Sparkles, AlertCircle, Store } from 'lucide-react';
import { LAGOS_ZONES } from '../data/deliveryZones';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
  selectedZone,
  setSelectedZone
}) {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const currentZoneObj = LAGOS_ZONES.find(z => z.id === selectedZone) || LAGOS_ZONES[0];
  const deliveryFee = items.length > 0 ? currentZoneObj.deliveryFee : 0;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-charcoal-950/65 backdrop-blur-sm" />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex w-full sm:max-w-md">
        <div className="relative w-full bg-white shadow-modal flex flex-col">

          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-maize-200 bg-maize-50 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-paprika-600 text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-sm sm:text-base text-charcoal-900">Your Food Cart</h3>
                <p className="text-[11px] text-charcoal-500">{items.length} item{items.length !== 1 ? 's' : ''} from independent vendors</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-xl text-charcoal-400 hover:text-charcoal-900 hover:bg-maize-200 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-maize-100 mx-auto flex items-center justify-center text-charcoal-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-base text-charcoal-900">Your cart is empty</h4>
                  <p className="text-xs text-charcoal-500 max-w-xs mx-auto mt-1">
                    Browse authentic Nigerian homemade dishes in 1.5L, 3L and 5L tubs.
                  </p>
                </div>
                <button 
                  onClick={onClose} 
                  className="px-5 py-2.5 rounded-xl bg-paprika-600 hover:bg-paprika-700 text-white font-extrabold text-xs shadow-xs"
                >
                  Explore Foods Now
                </button>
              </div>
            ) : (
              items.map((item) => {
                const qty = item.quantity || 1;
                return (
                  <div key={item.id} className="p-3.5 rounded-2xl bg-maize-50 border border-maize-200/90 flex gap-3 items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-maize-300" 
                    />
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <h4 className="font-display font-bold text-xs text-charcoal-900 truncate">
                        {item.name}
                      </h4>
                      {item.vendorName && (
                        <div className="text-[10px] text-forest-700 font-semibold flex items-center gap-1">
                          <Store className="w-3 h-3 text-amberGold shrink-0" />
                          <span className="truncate">{item.vendorName}</span>
                        </div>
                      )}
                      <div className="text-[11px] text-paprika-700 font-extrabold">
                        {item.sizeLabel || item.volume || 'Standard Batch'}
                      </div>
                      <div className="text-xs font-black text-charcoal-900 font-display">
                        ₦{(item.price * qty).toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="flex items-center bg-white rounded-lg border border-maize-300 shadow-2xs">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, qty - 1))} 
                          className="p-1.5 text-charcoal-500 hover:text-paprika-600"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-charcoal-900">{qty}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, qty + 1)} 
                          className="p-1.5 text-charcoal-500 hover:text-paprika-600"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id)} 
                        className="p-1.5 text-charcoal-400 hover:text-red-600 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer with Zones & Totals */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-maize-200 bg-white space-y-3 shrink-0">

              {/* Lagos Delivery Zone Selector */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-charcoal-700 uppercase tracking-wider flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-paprika-600" />
                  Lagos Delivery Zone:
                </label>
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full text-xs font-bold p-2.5 rounded-xl border border-maize-300 bg-maize-50 focus:outline-none focus:ring-2 focus:ring-paprika-500 text-charcoal-900"
                >
                  {LAGOS_ZONES.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name} — ₦{zone.deliveryFee.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Totals Summary */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-charcoal-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-charcoal-600">
                  <span>Chilled Delivery:</span>
                  <span className="font-semibold">₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-charcoal-900 pt-2 border-t border-maize-200 font-display">
                  <span>Total Amount:</span>
                  <span className="text-paprika-600">₦{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => { onClose(); onProceedCheckout(); }}
                className="w-full py-3.5 rounded-2xl bg-paprika-600 hover:bg-paprika-700 active:scale-95 text-white font-extrabold text-sm shadow-md shadow-paprika-600/25 flex items-center justify-center gap-2 transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
