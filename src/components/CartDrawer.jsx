import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Sparkles, AlertCircle } from 'lucide-react';
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
  const totalLitres = items.reduce((acc, item) => {
    if (item.volume) return acc + (item.volume * (item.quantity || 1));
    return acc;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm" />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex w-full sm:max-w-md">
        <div className="relative w-full bg-white shadow-modal flex flex-col">

          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-maize-200 bg-maize-50/70 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-paprika-600 text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-sm sm:text-base text-charcoal-900">Your Weekly Batch</h3>
                <p className="text-[11px] text-charcoal-500">{items.length} item{items.length !== 1 ? 's' : ''} planned</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl text-charcoal-400 hover:text-charcoal-900 hover:bg-maize-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Litre Meter */}
          {totalLitres > 0 && (
            <div className="bg-forest-800 text-white px-4 py-2 text-xs flex items-center justify-between font-medium shrink-0">
              <span className="flex items-center gap-1.5 text-forest-200">
                <Sparkles className="w-3.5 h-3.5 text-amberGold" />
                Simmered Volume:
              </span>
              <strong className="text-amberGold font-extrabold">{totalLitres.toFixed(1)}L Ready</strong>
            </div>
          )}

          {/* Items Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-14 space-y-4">
                <div className="w-14 h-14 rounded-full bg-maize-100 mx-auto flex items-center justify-center text-charcoal-400">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-charcoal-900">Your batch is empty</h4>
                  <p className="text-xs text-charcoal-500 max-w-xs mx-auto mt-1">Choose a curated weekly bundle or custom tubs.</p>
                </div>
                <button onClick={onClose} className="px-5 py-2.5 rounded-xl bg-paprika-600 hover:bg-paprika-700 text-white font-bold text-xs">
                  Browse Menu
                </button>
              </div>
            ) : (
              items.map((item) => {
                const qty = item.quantity || 1;
                return (
                  <div key={item.id} className="p-3 rounded-2xl bg-maize-50 border border-maize-200/90 flex gap-3 items-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0 border border-maize-300" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display font-bold text-xs text-charcoal-900 truncate">{item.name}</h4>
                      <div className="text-[11px] text-paprika-700 font-semibold">{item.sizeLabel}</div>
                      <div className="text-xs font-black text-charcoal-900 font-display">₦{(item.price * qty).toLocaleString()}</div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="flex items-center bg-white rounded-lg border border-maize-300">
                        <button onClick={() => onUpdateQuantity(item.id, Math.max(1, qty - 1))} className="p-1.5 text-charcoal-500 hover:text-paprika-600">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold">{qty}</span>
                        <button onClick={() => onUpdateQuantity(item.id, qty + 1)} className="p-1.5 text-charcoal-500 hover:text-paprika-600">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id)} className="p-1.5 text-charcoal-400 hover:text-red-600 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-maize-200 bg-white space-y-3 shrink-0">

              {/* Zone Selector */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-charcoal-600 uppercase tracking-wider flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-paprika-600" />
                  Lagos Delivery Zone:
                </label>
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full text-xs font-medium p-2.5 rounded-xl border border-maize-300 bg-maize-50 focus:outline-none focus:ring-2 focus:ring-paprika-500"
                >
                  {LAGOS_ZONES.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name} — ₦{zone.deliveryFee.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Totals */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-charcoal-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-charcoal-600">
                  <span>Delivery:</span>
                  <span className="font-semibold">₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-charcoal-900 pt-2 border-t border-maize-200 font-display">
                  <span>Total:</span>
                  <span className="text-paprika-600">₦{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Cutoff Warning */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amberGold/15 border border-amberGold/30 text-charcoal-800 text-[11px]">
                <AlertCircle className="w-4 h-4 text-amberGold shrink-0" />
                <span>Orders lock Thursday 11:59 PM for Saturday delivery.</span>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => { onClose(); onProceedCheckout(); }}
                className="w-full py-4 rounded-2xl bg-paprika-600 hover:bg-paprika-700 active:scale-95 text-white font-extrabold text-sm shadow-elevated flex items-center justify-center gap-2 transition-all"
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
