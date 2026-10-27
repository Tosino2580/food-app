import React from 'react';
import { CheckCircle2, MessageSquare, ArrowRight, Truck } from 'lucide-react';

export default function OrderSuccessModal({ order, isOpen, onClose, onOpenPortal }) {
  if (!isOpen || !order) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello HomeBatch! 👋 I just placed my weekly order.\n\n` +
    `*Order Ref:* ${order.orderId}\n` +
    `*Customer:* ${order.customer.fullName}\n` +
    `*Delivery:* ${order.deliverySlot}\n` +
    `*Address:* ${order.customer.address}\n` +
    `*Total:* ₦${order.grandTotal.toLocaleString()}`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/75 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="relative bg-white w-full sm:max-w-xl rounded-t-3xl sm:rounded-3xl shadow-modal border-t sm:border border-maize-300 flex flex-col max-h-[96vh] sm:max-h-[92vh]">

        {/* Celebration Header */}
        <div className="p-6 bg-gradient-to-r from-forest-900 to-forest-800 text-white text-center space-y-3 rounded-t-3xl shrink-0">
          <div className="w-14 h-14 rounded-full bg-forest-700/80 mx-auto flex items-center justify-center text-amberGold border-2 border-amberGold/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-amberGold block">Cooking Handled</span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1">
              Your Batch is Confirmed!
            </h3>
            <p className="text-xs text-forest-200 mt-1">
              Ref: <strong className="text-white font-mono">{order.orderId}</strong>
            </p>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">

          {/* Dispatch Window */}
          <div className="p-4 rounded-2xl bg-white border border-maize-300 shadow-soft space-y-1.5">
            <div className="flex items-center gap-2 text-paprika-700 font-bold text-xs uppercase tracking-wider">
              <Truck className="w-4 h-4 text-paprika-600" />
              <span>Dispatch Scheduled</span>
            </div>
            <div className="text-base font-extrabold text-charcoal-900 font-display">{order.deliverySlot}</div>
            <p className="text-xs text-charcoal-600">To: <strong>{order.customer.address}</strong></p>
          </div>

          {/* Items Breakdown */}
          <div className="space-y-2">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-charcoal-500">Batch Contents:</div>
            <div className="divide-y divide-maize-200 bg-white rounded-2xl border border-maize-300 p-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-2 flex items-center justify-between text-xs">
                  <div className="min-w-0 flex-1 mr-3">
                    <span className="font-bold text-charcoal-900 block truncate">{item.name}</span>
                    <span className="text-charcoal-500">{item.sizeLabel}</span>
                  </div>
                  <span className="font-black text-charcoal-900 font-display shrink-0">
                    ₦{(item.price * (item.quantity || 1)).toLocaleString()}
                  </span>
                </div>
              ))}
              <div className="pt-2 flex justify-between text-xs text-charcoal-600">
                <span>Delivery:</span><span>₦{order.deliveryFee.toLocaleString()}</span>
              </div>
              <div className="pt-2 flex justify-between text-sm font-extrabold font-display">
                <span>Total Paid:</span>
                <span className="text-paprika-600">₦{order.grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Sync */}
          <a
            href={`https://wa.me/2348100000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-2xl bg-forest-800 hover:bg-forest-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-amberGold" />
            <span>Sync with WhatsApp Concierge</span>
          </a>

          <div className="p-3 rounded-2xl bg-white border border-maize-300 text-xs text-center space-y-1.5">
            <p className="text-charcoal-600">Manage or repeat this order via your household portal.</p>
            <button onClick={() => { onClose(); onOpenPortal(); }}
              className="font-bold text-paprika-600 hover:text-paprika-700 underline text-xs">
              Open My Pantry Dashboard →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-maize-200 flex items-center justify-between px-4 sm:px-6 shrink-0">
          <span className="text-xs text-charcoal-500 hidden sm:block">Receipt sent to {order.customer.email}</span>
          <button onClick={onClose} className="ml-auto px-5 py-2 rounded-xl bg-charcoal-900 hover:bg-paprika-600 text-white font-bold text-xs transition-colors">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
