import React, { useState } from 'react';
import { X, Check, ShieldCheck, CreditCard, MessageSquare, Truck, Clock, Lock, ArrowRight } from 'lucide-react';
import { LAGOS_ZONES } from '../data/deliveryZones';

export default function CheckoutModal({
  isOpen,
  onClose,
  items,
  selectedZone,
  onOrderComplete
}) {
  const [formData, setFormData] = useState({
    fullName: 'Adewale Adeleke',
    email: 'adewale.adeleke@gmail.com',
    phone: '+234 803 456 7890',
    address: 'Flat 4B, Ocean View Estate, Admiralty Way',
    zoneId: selectedZone || 'island-lekki1',
    deliverySlot: 'Saturday 9:00 AM – 12:00 PM',
    kitchenNotes: 'Please ensure moderate pepper on the Seafood Okro. Gated estate security: dial Flat 4B upon arrival.',
    paymentMethod: 'card' // 'card' (Paystack) | 'whatsapp'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const currentZone = LAGOS_ZONES.find(z => z.id === formData.zoneId) || LAGOS_ZONES[0];
  const subtotal = items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const deliveryFee = currentZone.deliveryFee;
  const grandTotal = subtotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing / WhatsApp generation
    setTimeout(() => {
      setIsProcessing(false);
      const orderData = {
        orderId: `HB-${Math.floor(100000 + Math.random() * 900000)}`,
        items: [...items],
        customer: { ...formData },
        subtotal,
        deliveryFee,
        grandTotal,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        deliverySlot: formData.deliverySlot,
        paymentMethod: formData.paymentMethod
      };

      onOrderComplete(orderData);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-modal border border-maize-300 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 bg-charcoal-900 text-white flex items-center justify-between border-b border-charcoal-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-paprika-600 flex items-center justify-center text-white">
              <Lock className="w-5 h-5 text-amberGold" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-white">
                Scheduled Weekend Replenishment Checkout
              </h3>
              <p className="text-xs text-charcoal-300">
                Fresh cooking Friday • Direct to your Lagos doorstep
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-charcoal-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Order Summary Strip */}
          <div className="p-4 rounded-2xl bg-maize-50 border border-maize-300 flex items-center justify-between text-xs">
            <div>
              <span className="text-charcoal-500 block">Weekly Batch Items ({items.length}):</span>
              <strong className="text-charcoal-900 font-bold">
                {items.map(i => i.name).slice(0, 2).join(', ')}{items.length > 2 ? ` + ${items.length - 2} more` : ''}
              </strong>
            </div>
            <div className="text-right">
              <span className="text-charcoal-500 block">Total Due:</span>
              <strong className="text-paprika-600 font-extrabold text-base font-display">
                ₦{grandTotal.toLocaleString()}
              </strong>
            </div>
          </div>

          {/* Section 1: Customer Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-charcoal-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-paprika-100 text-paprika-700 text-xs flex items-center justify-center font-bold">1</span>
              Household Contact Details
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-charcoal-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-maize-300 bg-maize-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500"
                  placeholder="e.g. Tunde & Folake Adeleke"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-charcoal-700 block mb-1">WhatsApp Phone (For Dispatch)</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-maize-300 bg-maize-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500"
                  placeholder="+234 800 000 0000"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-charcoal-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-maize-300 bg-maize-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500"
                  placeholder="you@company.com"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Lagos Delivery Location & Weekend Slot */}
          <div className="space-y-4 pt-2 border-t border-maize-200">
            <h4 className="font-display font-bold text-sm text-charcoal-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-paprika-100 text-paprika-700 text-xs flex items-center justify-center font-bold">2</span>
              Lagos Delivery Address & Weekend Window
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-charcoal-700 block mb-1">Delivery Area / Zone</label>
                <select
                  value={formData.zoneId}
                  onChange={(e) => {
                    const newZone = LAGOS_ZONES.find(z => z.id === e.target.value) || LAGOS_ZONES[0];
                    setFormData({
                      ...formData,
                      zoneId: e.target.value,
                      deliverySlot: newZone.slots[0]
                    });
                  }}
                  className="w-full text-xs p-3 rounded-xl border border-maize-300 bg-maize-50/50 focus:outline-none focus:ring-2 focus:ring-paprika-500 font-medium"
                >
                  {LAGOS_ZONES.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name} ({zone.area}) — ₦{zone.deliveryFee.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-charcoal-700 block mb-1">Scheduled Weekend Window</label>
                <select
                  value={formData.deliverySlot}
                  onChange={(e) => setFormData({ ...formData, deliverySlot: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-maize-300 bg-maize-50/50 focus:outline-none focus:ring-2 focus:ring-paprika-500 font-medium"
                >
                  {currentZone.slots.map((slot, idx) => (
                    <option key={idx} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-charcoal-700 block mb-1">Street Address / Estate / Gate Instructions</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-maize-300 bg-maize-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500"
                  placeholder="Street address, building name, flat number"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-charcoal-700 block mb-1">Special Cooking or Kitchen Notes (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.kitchenNotes}
                  onChange={(e) => setFormData({ ...formData, kitchenNotes: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-maize-300 bg-maize-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500"
                  placeholder="e.g. Mild pepper, extra scent leaves, or gate code"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Payment & Order Dispatch Mode */}
          <div className="space-y-4 pt-2 border-t border-maize-200">
            <h4 className="font-display font-bold text-sm text-charcoal-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-paprika-100 text-paprika-700 text-xs flex items-center justify-center font-bold">3</span>
              Payment & Order Confirmation Method
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                formData.paymentMethod === 'card'
                  ? 'border-paprika-600 bg-paprika-50/50'
                  : 'border-maize-300 hover:border-maize-400 bg-white'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-paprika-600" />
                    <span className="font-display font-bold text-xs text-charcoal-900">
                      Card / Instant Bank Transfer
                    </span>
                  </div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className="accent-paprika-600"
                  />
                </div>
                <p className="text-[11px] text-charcoal-600 mt-2">
                  Secured by Paystack / Nigerian Bank Cards & Transfer. Instant confirmation receipt.
                </p>
              </label>

              <label className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                formData.paymentMethod === 'whatsapp'
                  ? 'border-forest-600 bg-forest-50/60'
                  : 'border-maize-300 hover:border-maize-400 bg-white'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-forest-700" />
                    <span className="font-display font-bold text-xs text-charcoal-900">
                      WhatsApp Concierge Sync
                    </span>
                  </div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={formData.paymentMethod === 'whatsapp'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'whatsapp' })}
                    className="accent-forest-700"
                  />
                </div>
                <p className="text-[11px] text-charcoal-600 mt-2">
                  Sends formatted order summary directly to the HomeBatch WhatsApp team for customized VIP handling.
                </p>
              </label>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-maize-200 space-y-3">
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 rounded-2xl bg-paprika-600 hover:bg-paprika-700 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-elevated flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Securing Your Batch with Kitchen...</span>
                </>
              ) : formData.paymentMethod === 'card' ? (
                <>
                  <span>Confirm & Pay ₦{grandTotal.toLocaleString()}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Dispatch via WhatsApp Concierge</span>
                  <MessageSquare className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-charcoal-500">
              <ShieldCheck className="w-4 h-4 text-forest-600" />
              <span>100% Satisfaction Guarantee • Cold-chain thermal dispatch</span>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
