import React, { useState } from 'react';
import { X, ShieldCheck, CreditCard, MessageSquare, Truck, Lock, ArrowRight } from 'lucide-react';
import { LAGOS_ZONES } from '../data/deliveryZones';

export default function CheckoutModal({ isOpen, onClose, items, selectedZone, onOrderComplete }) {
  const [formData, setFormData] = useState({
    fullName: 'Adewale Adeleke',
    email: 'adewale.adeleke@gmail.com',
    phone: '+234 803 456 7890',
    address: 'Flat 4B, Ocean View Estate, Admiralty Way',
    zoneId: selectedZone || 'island-lekki1',
    deliverySlot: 'Saturday 9:00 AM – 12:00 PM',
    kitchenNotes: '',
    paymentMethod: 'card'
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
    setTimeout(() => {
      setIsProcessing(false);
      onOrderComplete({
        orderId: `HB-${Math.floor(100000 + Math.random() * 900000)}`,
        id: `HB-${Math.floor(100000 + Math.random() * 900000)}`,
        items: [...items],
        customer: { ...formData },
        customerName: formData.fullName,
        phone: formData.phone,
        address: formData.address,
        zoneName: currentZone.name,
        subtotal,
        deliveryFee,
        grandTotal,
        total: grandTotal,
        status: 'Cooking in Kitchen',
        createdAt: 'Just now',
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        deliverySlot: formData.deliverySlot,
        paymentMethod: formData.paymentMethod
      });
    }, 1200);
  };

  const Field = ({ label, children }) => (
    <div>
      <label className="text-xs font-semibold text-charcoal-700 block mb-1">{label}</label>
      {children}
    </div>
  );

  const inputCls = "w-full text-xs p-3 rounded-xl border border-maize-300 bg-maize-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-paprika-500";

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="relative bg-white w-full sm:max-w-2xl rounded-t-3xl sm:rounded-3xl shadow-modal border-t sm:border border-maize-300 flex flex-col max-h-[96vh] sm:max-h-[92vh]">

        {/* Header */}
        <div className="p-4 sm:p-5 bg-charcoal-900 text-white flex items-center justify-between border-b border-charcoal-800 rounded-t-3xl shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-paprika-600 flex items-center justify-center text-white shrink-0">
              <Lock className="w-4 h-4 text-amberGold" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-extrabold text-sm sm:text-base text-white truncate">
                Checkout — Weekend Replenishment
              </h3>
              <p className="text-xs text-charcoal-300 hidden sm:block">Fresh Friday, chilled Saturday delivery</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-charcoal-400 hover:text-white shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-4 sm:p-6 space-y-5 flex-1">

          {/* Order Summary Strip */}
          <div className="p-3 rounded-2xl bg-maize-50 border border-maize-300 flex items-center justify-between text-xs">
            <div className="min-w-0 flex-1 mr-4">
              <span className="text-charcoal-500 block">Batch ({items.length} items):</span>
              <strong className="text-charcoal-900 text-xs truncate block">
                {items.map(i => i.name).slice(0, 2).join(', ')}{items.length > 2 ? ` +${items.length - 2}` : ''}
              </strong>
            </div>
            <div className="text-right shrink-0">
              <span className="text-charcoal-500 block">Total:</span>
              <strong className="text-paprika-600 font-extrabold text-base font-display">₦{grandTotal.toLocaleString()}</strong>
            </div>
          </div>

          {/* Section 1: Contact */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs text-charcoal-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-paprika-100 text-paprika-700 text-xs flex items-center justify-center font-bold">1</span>
              Contact Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Full Name">
                <input type="text" required value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className={inputCls} />
              </Field>
              <Field label="WhatsApp Phone">
                <input type="tel" required value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className={inputCls} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Email Address">
                  <input type="email" required value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className={inputCls} />
                </Field>
              </div>
            </div>
          </div>

          {/* Section 2: Delivery */}
          <div className="space-y-3 pt-1 border-t border-maize-200">
            <h4 className="font-display font-bold text-xs text-charcoal-900 uppercase tracking-wider flex items-center gap-2 pt-1">
              <span className="w-5 h-5 rounded-full bg-paprika-100 text-paprika-700 text-xs flex items-center justify-center font-bold">2</span>
              Delivery Address & Window
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Delivery Zone">
                <select value={formData.zoneId}
                  onChange={e => {
                    const newZone = LAGOS_ZONES.find(z => z.id === e.target.value) || LAGOS_ZONES[0];
                    setFormData({ ...formData, zoneId: e.target.value, deliverySlot: newZone.slots[0] });
                  }}
                  className={inputCls}>
                  {LAGOS_ZONES.map(zone => (
                    <option key={zone.id} value={zone.id}>{zone.name} — ₦{zone.deliveryFee.toLocaleString()}</option>
                  ))}
                </select>
              </Field>
              <Field label="Weekend Window">
                <select value={formData.deliverySlot}
                  onChange={e => setFormData({ ...formData, deliverySlot: e.target.value })}
                  className={inputCls}>
                  {currentZone.slots.map((slot, idx) => (
                    <option key={idx} value={slot}>{slot}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Street Address / Estate / Gate Instructions">
                  <input type="text" required value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className={inputCls} />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Special Cooking Notes (Optional)">
                  <textarea rows={2} value={formData.kitchenNotes}
                    onChange={e => setFormData({ ...formData, kitchenNotes: e.target.value })}
                    className={inputCls} placeholder="e.g. Mild pepper, gate code..." />
                </Field>
              </div>
            </div>
          </div>

          {/* Section 3: Payment */}
          <div className="space-y-3 pt-1 border-t border-maize-200">
            <h4 className="font-display font-bold text-xs text-charcoal-900 uppercase tracking-wider flex items-center gap-2 pt-1">
              <span className="w-5 h-5 rounded-full bg-paprika-100 text-paprika-700 text-xs flex items-center justify-center font-bold">3</span>
              Payment Method
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: 'card',
                  Icon: CreditCard,
                  title: 'Card / Bank Transfer',
                  desc: 'Secured by Paystack. Instant confirmation receipt.',
                  accent: 'paprika'
                },
                {
                  id: 'whatsapp',
                  Icon: MessageSquare,
                  title: 'WhatsApp Concierge',
                  desc: 'Send order to HomeBatch team via WhatsApp.',
                  accent: 'forest'
                }
              ].map(({ id, Icon, title, desc, accent }) => (
                <label key={id} className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col gap-2 ${
                  formData.paymentMethod === id
                    ? `border-${accent}-600 bg-${accent}-50/50`
                    : 'border-maize-300 hover:border-maize-400 bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 text-${accent}-700`} />
                      <span className="font-display font-bold text-xs text-charcoal-900">{title}</span>
                    </div>
                    <input type="radio" name="paymentMethod" checked={formData.paymentMethod === id}
                      onChange={() => setFormData({ ...formData, paymentMethod: id })}
                      className={`accent-${accent}-600`} />
                  </div>
                  <p className="text-[11px] text-charcoal-600">{desc}</p>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2 border-t border-maize-200 space-y-3">
            <button type="submit" disabled={isProcessing}
              className="w-full py-4 rounded-2xl bg-paprika-600 hover:bg-paprika-700 active:scale-95 text-white font-extrabold text-sm shadow-elevated flex items-center justify-center gap-2 transition-all disabled:opacity-70">
              {isProcessing ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Processing...</span></>
              ) : formData.paymentMethod === 'card' ? (
                <><span>Confirm & Pay ₦{grandTotal.toLocaleString()}</span><ArrowRight className="w-5 h-5" /></>
              ) : (
                <><span>Send via WhatsApp Concierge</span><MessageSquare className="w-5 h-5" /></>
              )}
            </button>
            <div className="flex items-center justify-center gap-2 text-[11px] text-charcoal-500">
              <ShieldCheck className="w-4 h-4 text-forest-600" />
              <span>100% Satisfaction Guarantee • Cold-chain delivery</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
