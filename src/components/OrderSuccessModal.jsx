import React from 'react';
import { CheckCircle2, Calendar, MessageSquare, ArrowRight, Share2, Printer, Sparkles, Truck } from 'lucide-react';

export default function OrderSuccessModal({
  order,
  isOpen,
  onClose,
  onOpenPortal
}) {
  if (!isOpen || !order) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello HomeBatch! 👋 I just placed my weekly replenishment order.\n\n` +
    `*Order Ref:* ${order.orderId}\n` +
    `*Customer:* ${order.customer.fullName}\n` +
    `*Delivery Window:* ${order.deliverySlot}\n` +
    `*Address:* ${order.customer.address} (${order.customer.zoneId})\n` +
    `*Total:* ₦${order.grandTotal.toLocaleString()}\n\n` +
    `Please confirm kitchen partner assignment for this Friday.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-modal border border-maize-300 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Celebration Header */}
        <div className="p-6 bg-gradient-to-r from-forest-900 to-forest-800 text-white text-center space-y-3 relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-forest-700/80 mx-auto flex items-center justify-center text-amberGold border-2 border-amberGold/40 shadow-elevated">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-amberGold">
              Cooking Handled For The Week
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white mt-1">
              Your Weekly Batch is Confirmed!
            </h3>
            <p className="text-xs text-forest-200 mt-1">
              Order Ref: <strong className="text-white font-mono">{order.orderId}</strong>
            </p>
          </div>
        </div>

        {/* Receipt Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-maize-50/50">
          
          {/* Dispatch Window Banner */}
          <div className="p-4 rounded-2xl bg-white border border-maize-300 shadow-soft space-y-2">
            <div className="flex items-center gap-2 text-paprika-700 font-bold text-xs uppercase tracking-wider">
              <Truck className="w-4 h-4 text-paprika-600" />
              <span>Chilled Thermal Dispatch Scheduled</span>
            </div>
            <div className="text-sm font-extrabold text-charcoal-900 font-display">
              {order.deliverySlot}
            </div>
            <p className="text-xs text-charcoal-600">
              Delivering to: <strong>{order.customer.address}</strong>
            </p>
          </div>

          {/* Items Breakdown */}
          <div className="space-y-2">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-charcoal-500">
              Batch Contents:
            </div>
            <div className="divide-y divide-maize-200 bg-white rounded-2xl border border-maize-300 p-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-2 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-charcoal-900">{item.name}</span>
                    <span className="text-charcoal-500 ml-1.5 font-medium">({item.sizeLabel})</span>
                  </div>
                  <span className="font-black text-charcoal-900 font-display">
                    ₦{(item.price * (item.quantity || 1)).toLocaleString()}
                  </span>
                </div>
              ))}
              <div className="pt-2 flex items-center justify-between text-xs font-semibold text-charcoal-600">
                <span>Chilled Thermal Courier:</span>
                <span>₦{order.deliveryFee.toLocaleString()}</span>
              </div>
              <div className="pt-2 flex items-center justify-between text-sm font-extrabold text-charcoal-900 font-display">
                <span>Total Paid:</span>
                <span className="text-paprika-600 text-base">₦{order.grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Sync Button (Crucial for Lagos services) */}
          <a
            href={`https://wa.me/2348100000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-2xl bg-forest-800 hover:bg-forest-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-amberGold" />
            <span>Sync with HomeBatch WhatsApp Concierge</span>
          </a>

          {/* Reorder / Manage in Portal Link */}
          <div className="p-3.5 rounded-2xl bg-white border border-maize-300 text-xs text-center space-y-2">
            <p className="text-charcoal-600">
              You can pause, edit flavors, or repeat this order at any time via your household portal.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenPortal();
              }}
              className="font-bold text-paprika-600 hover:text-paprika-700 underline text-xs"
            >
              Open My Weekly Pantry Dashboard →
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-maize-200 flex items-center justify-between px-6">
          <span className="text-xs text-charcoal-500">
            Receipt sent to {order.customer.email}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-charcoal-900 hover:bg-paprika-600 text-white font-bold text-xs transition-colors"
          >
            Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}
