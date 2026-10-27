import React from 'react';
import { X, Package, Clock, CheckCircle, Truck, MapPin, ChefHat, ExternalLink, Calendar } from 'lucide-react';

export default function MyOrdersModal({
  orders,
  isOpen,
  onClose,
  onOpenCart
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-charcoal-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-maize-50 rounded-2xl sm:rounded-3xl shadow-modal overflow-hidden border border-maize-300 my-auto max-h-[90vh] flex flex-col text-charcoal-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-charcoal-700 shadow-md flex items-center justify-center transition-all duration-150 active:scale-95 border border-maize-200"
          aria-label="Close orders modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-forest-900 text-white p-5 sm:p-7 shrink-0">
          <div className="flex items-center gap-2.5 mb-1">
            <Package className="w-5 h-5 text-amberGold" />
            <h2 className="text-xl sm:text-2xl font-black font-display text-white">
              My Orders & Live Tracking
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-forest-200">
            Track real-time cooking and chilled weekend delivery from your independent Lagos food vendors.
          </p>
        </div>

        {/* Orders List */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-4">
          {orders.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-maize-300 space-y-3">
              <Package className="w-12 h-12 text-charcoal-300 mx-auto" />
              <h3 className="text-base font-extrabold text-charcoal-800">No active orders yet</h3>
              <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
                Explore authentic Nigerian homemade soups, stews, and party jollof to place your first weekly order.
              </p>
            </div>
          ) : (
            orders.map(order => {
              const status = order.status || 'Cooking in Kitchen';
              return (
                <div 
                  key={order.orderId || order.id}
                  className="bg-white rounded-2xl border border-maize-200 p-4 sm:p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-3 border-b border-maize-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm text-paprika-600">
                          #{order.orderId || order.id}
                        </span>
                        <span className="text-[11px] text-charcoal-400">
                          {order.createdAt || 'Placed recently'}
                        </span>
                      </div>
                      <div className="text-xs text-charcoal-600 mt-0.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-paprika-500" />
                        <span>{order.zoneName || 'Lagos Delivery Zone'}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="text-right">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                        status === 'Delivered'
                          ? 'bg-forest-100 text-forest-800 border border-forest-200'
                          : status === 'Out for Delivery'
                          ? 'bg-amberGold text-charcoal-950'
                          : 'bg-paprika-50 text-paprika-700 border border-paprika-200'
                      }`}>
                        {status === 'Delivered' ? <CheckCircle className="w-3.5 h-3.5" /> :
                         status === 'Out for Delivery' ? <Truck className="w-3.5 h-3.5" /> :
                         <ChefHat className="w-3.5 h-3.5" />}
                        {status}
                      </span>
                    </div>
                  </div>

                  {/* Items Summary */}
                  <div className="space-y-1.5 text-xs text-charcoal-700">
                    {order.items?.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-charcoal-900">{item.quantity}x</span>
                          <span>{item.name}</span>
                          <span className="text-charcoal-500 text-[11px]">({item.sizeLabel || item.volume || 'Standard'})</span>
                        </div>
                        <span className="font-bold text-charcoal-900">
                          ₦{((item.price || 0) * (item.quantity || 1)).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Total & Delivery Time */}
                  <div className="pt-2 border-t border-maize-100 flex items-center justify-between text-xs">
                    <span className="text-charcoal-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-forest-600" />
                      Slot: {order.deliverySlot || 'Saturday Chilled Delivery'}
                    </span>
                    <span className="font-black text-sm text-charcoal-900">
                      Total: ₦{order.total?.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
