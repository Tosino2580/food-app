import React, { useState } from 'react';
import { X, Plus, Trash2, Edit3, CheckCircle, Clock, Truck, DollarSign, Package, AlertCircle, ChefHat, Eye, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';

export default function VendorDashboardModal({
  vendor,
  foods,
  orders,
  isOpen,
  onClose,
  onAddNewDish,
  onToggleDishAvailability,
  onDeleteDish,
  onUpdateOrderStatus,
  onUpdateVendorProfile
}) {
  if (!isOpen || !vendor) return null;

  const [activeTab, setActiveTab] = useState('dishes'); // 'dishes', 'orders', 'profile'
  const [showAddDishModal, setShowAddDishModal] = useState(false);

  // New Dish Form State
  const [newDish, setNewDish] = useState({
    name: '',
    category: 'soups',
    categoryName: 'Nigerian Soups',
    description: '',
    ingredients: '',
    price15L: 18000,
    price3L: 32000,
    price5L: 50000,
    spiceLevel: 'Medium Balanced',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
  });

  // Filter foods and orders for this vendor
  const vendorFoods = foods.filter(f => f.vendorId === vendor.id);
  const vendorOrders = orders.filter(o => 
    o.items?.some(i => i.vendorId === vendor.id || !i.vendorId)
  );

  const totalRevenue = vendorOrders.reduce((sum, o) => sum + (o.total || 0), 0);

  const handleAddDishSubmit = (e) => {
    e.preventDefault();
    if (!newDish.name) return;

    const dishToAdd = {
      id: `food-${Date.now()}`,
      name: newDish.name,
      category: newDish.category,
      categoryName: newDish.category === 'soups' ? 'Nigerian Soups' :
                    newDish.category === 'stews' ? 'Stews and Sauces' :
                    newDish.category === 'rice' ? 'Rice Dishes' : 'Local Delicacies',
      vendorId: vendor.id,
      vendorName: vendor.name,
      vendorLocation: vendor.location,
      rating: 5.0,
      reviewsCount: 1,
      isSoupOrStew: newDish.category === 'soups' || newDish.category === 'stews',
      image: newDish.image,
      description: newDish.description || 'Freshly simmered homemade dish made to order.',
      ingredients: newDish.ingredients || 'Native spices, fresh peppers, and assorted meats.',
      spiceLevel: newDish.spiceLevel,
      shelfLife: '5 days chilled, 4 weeks frozen',
      availability: 'in_stock',
      sizes: [
        { id: '1.5L', label: '1.5 Litres', volume: '1.5 Litres', price: Number(newDish.price15L), portions: '4–6 full servings' },
        { id: '3L', label: '3 Litres', volume: '3 Litres', price: Number(newDish.price3L), portions: '8–10 full servings', popular: true },
        { id: '5L', label: '5 Litres', volume: '5 Litres', price: Number(newDish.price5L), portions: '14–16 full servings' }
      ]
    };

    onAddNewDish(dishToAdd);
    setShowAddDishModal(false);
    setNewDish({
      name: '',
      category: 'soups',
      categoryName: 'Nigerian Soups',
      description: '',
      ingredients: '',
      price15L: 18000,
      price3L: 32000,
      price5L: 50000,
      spiceLevel: 'Medium Balanced',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-maize-50 rounded-2xl sm:rounded-3xl shadow-modal overflow-hidden border border-maize-300 my-auto max-h-[92vh] flex flex-col text-charcoal-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-charcoal-700 shadow-md flex items-center justify-center transition-all duration-150 active:scale-95 border border-maize-200"
          aria-label="Close dashboard"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dashboard Top Banner */}
        <div className="bg-forest-900 text-white p-5 sm:p-7 relative shrink-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img 
                src={vendor.image} 
                alt={vendor.name} 
                className="w-14 h-14 rounded-2xl object-cover border-2 border-amberGold shadow-md shrink-0" 
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black font-display text-white">
                    {vendor.name}
                  </h1>
                  <span className="px-2 py-0.5 rounded-full bg-forest-800 text-forest-200 text-[10px] font-bold border border-forest-600">
                    Vendor Partner
                  </span>
                </div>
                <p className="text-xs text-forest-300">
                  Kitchen Portal • {vendor.location}
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              <div className="px-3.5 py-2 rounded-xl bg-forest-800/80 border border-forest-700 text-center">
                <span className="block text-[10px] uppercase font-bold text-forest-300">Active Dishes</span>
                <span className="text-lg font-black text-amberGold">{vendorFoods.length}</span>
              </div>

              <div className="px-3.5 py-2 rounded-xl bg-forest-800/80 border border-forest-700 text-center">
                <span className="block text-[10px] uppercase font-bold text-forest-300">Orders Received</span>
                <span className="text-lg font-black text-white">{vendorOrders.length}</span>
              </div>

              <div className="px-3.5 py-2 rounded-xl bg-forest-800/80 border border-forest-700 text-center">
                <span className="block text-[10px] uppercase font-bold text-forest-300">Est. Payout</span>
                <span className="text-lg font-black text-forest-200">₦{totalRevenue.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-5 border-t border-forest-800 pt-3 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('dishes')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'dishes'
                  ? 'bg-amberGold text-charcoal-950 shadow-sm'
                  : 'text-forest-200 hover:bg-forest-800'
              }`}
            >
              My Food Listings ({vendorFoods.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'orders'
                  ? 'bg-amberGold text-charcoal-950 shadow-sm'
                  : 'text-forest-200 hover:bg-forest-800'
              }`}
            >
              Customer Orders ({vendorOrders.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'profile'
                  ? 'bg-amberGold text-charcoal-950 shadow-sm'
                  : 'text-forest-200 hover:bg-forest-800'
              }`}
            >
              Kitchen Profile Settings
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {/* TAB 1: FOOD LISTINGS */}
          {activeTab === 'dishes' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-extrabold text-charcoal-900 font-display">
                    Manage Food Listings & Pricing
                  </h2>
                  <p className="text-xs text-charcoal-500">
                    Set separate 1.5L, 3L & 5L pricing for each dish. Toggle availability when sold out.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAddDishModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-paprika-600 hover:bg-paprika-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-sm transition-all active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add New Dish</span>
                </button>
              </div>

              {/* Add Dish Modal / Drawer */}
              {showAddDishModal && (
                <div className="p-5 rounded-2xl bg-white border-2 border-paprika-200 shadow-card space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between border-b border-maize-200 pb-3">
                    <h3 className="font-extrabold text-charcoal-900 text-sm flex items-center gap-2">
                      <ChefHat className="w-4 h-4 text-paprika-600" />
                      Add a New Dish to Your Kitchen Store
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowAddDishModal(false)}
                      className="text-xs text-charcoal-500 hover:text-charcoal-800 font-bold"
                    >
                      Cancel
                    </button>
                  </div>

                  <form onSubmit={handleAddDishSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-charcoal-700 mb-1">Dish Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Seafood Bitterleaf Soup"
                          value={newDish.name}
                          onChange={e => setNewDish({ ...newDish, name: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-maize-300 text-xs focus:ring-2 focus:ring-paprika-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-charcoal-700 mb-1">Category *</label>
                        <select
                          value={newDish.category}
                          onChange={e => setNewDish({ ...newDish, category: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-maize-300 text-xs focus:ring-2 focus:ring-paprika-500"
                        >
                          <option value="soups">Nigerian Soups</option>
                          <option value="stews">Stews and Sauces</option>
                          <option value="rice">Rice Dishes</option>
                          <option value="local-delicacies">Local Delicacies</option>
                        </select>
                      </div>
                    </div>

                    {/* Sizing & Pricing Configuration */}
                    <div className="p-3.5 rounded-xl bg-maize-100/70 border border-maize-300 space-y-2">
                      <span className="block text-xs font-black text-charcoal-900 uppercase tracking-wider">
                        Set Prices Per Size (₦)
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-charcoal-700 mb-1">1.5 Litres Price</label>
                          <input
                            type="number"
                            required
                            value={newDish.price15L}
                            onChange={e => setNewDish({ ...newDish, price15L: e.target.value })}
                            className="w-full px-3 py-1.5 rounded-lg border border-maize-300 text-xs font-bold"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-charcoal-700 mb-1">3.0 Litres Price</label>
                          <input
                            type="number"
                            required
                            value={newDish.price3L}
                            onChange={e => setNewDish({ ...newDish, price3L: e.target.value })}
                            className="w-full px-3 py-1.5 rounded-lg border border-maize-300 text-xs font-bold"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-charcoal-700 mb-1">5.0 Litres Price</label>
                          <input
                            type="number"
                            required
                            value={newDish.price5L}
                            onChange={e => setNewDish({ ...newDish, price5L: e.target.value })}
                            className="w-full px-3 py-1.5 rounded-lg border border-maize-300 text-xs font-bold"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal-700 mb-1">Description</label>
                      <textarea
                        rows={2}
                        placeholder="Tell customers how you prepare this dish, protein cuts used, etc."
                        value={newDish.description}
                        onChange={e => setNewDish({ ...newDish, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-maize-300 text-xs"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowAddDishModal(false)}
                        className="px-4 py-2 rounded-xl border border-maize-300 text-xs font-bold text-charcoal-700"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-xl bg-paprika-600 hover:bg-paprika-700 text-white text-xs font-black shadow-sm"
                      >
                        Save & List Dish
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Dishes List */}
              <div className="space-y-3">
                {vendorFoods.map(food => {
                  const isAvailable = food.availability !== 'sold_out';
                  return (
                    <div
                      key={food.id}
                      className="p-4 rounded-2xl bg-white border border-maize-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs hover:border-maize-300 transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <img 
                          src={food.image} 
                          alt={food.name} 
                          className="w-16 h-16 rounded-xl object-cover shrink-0" 
                        />
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <h4 className="font-extrabold text-sm text-charcoal-900">{food.name}</h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-maize-100 text-charcoal-700">
                              {food.categoryName}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-charcoal-600">
                            {food.sizes?.map(sz => (
                              <span key={sz.id} className="text-[11px] font-semibold text-paprika-700">
                                {sz.label.split(' ')[0]}: ₦{sz.price.toLocaleString()}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-2 text-[11px]">
                            <span className={`font-bold ${isAvailable ? 'text-forest-700' : 'text-charcoal-400'}`}>
                              {isAvailable ? '● In Stock' : '○ Sold Out'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => onToggleDishAvailability(food.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                            isAvailable
                              ? 'bg-forest-50 border-forest-200 text-forest-800'
                              : 'bg-charcoal-100 border-charcoal-300 text-charcoal-700'
                          }`}
                        >
                          {isAvailable ? 'Active' : 'Mark In Stock'}
                        </button>

                        <button
                          type="button"
                          onClick={() => onDeleteDish(food.id)}
                          className="p-2 rounded-xl text-charcoal-400 hover:text-paprika-600 hover:bg-paprika-50 transition-colors"
                          title="Delete dish"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: INCOMING CUSTOMER ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-extrabold text-charcoal-900 font-display">
                  Customer Orders ({vendorOrders.length})
                </h2>
                <p className="text-xs text-charcoal-500">
                  Update live order cooking and dispatch status so customers are notified.
                </p>
              </div>

              {vendorOrders.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-maize-300">
                  <Package className="w-10 h-10 text-charcoal-300 mx-auto mb-2" />
                  <p className="text-charcoal-600 font-medium">No incoming orders yet.</p>
                  <p className="text-xs text-charcoal-400">New customer orders will appear here in real time.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {vendorOrders.map(order => (
                    <div
                      key={order.orderId || order.id}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-maize-200 shadow-xs space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-maize-100 pb-3">
                        <div>
                          <span className="text-xs font-black text-paprika-600">
                            #{order.orderId || order.id}
                          </span>
                          <h4 className="font-extrabold text-sm text-charcoal-900">
                            Customer: {order.customerName || order.recipientName || 'Lagos Resident'}
                          </h4>
                          <span className="text-xs text-charcoal-500">
                            Delivery to: {order.zoneName || 'Lagos Island'} • {order.phone}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className="text-xs font-bold text-charcoal-500 block">Total</span>
                            <span className="font-black text-sm text-charcoal-900">₦{order.total?.toLocaleString()}</span>
                          </div>

                          {/* Status Selector */}
                          <select
                            value={order.status || 'Cooking'}
                            onChange={e => onUpdateOrderStatus(order.orderId || order.id, e.target.value)}
                            className="px-3 py-1.5 rounded-xl border border-maize-300 bg-maize-50 text-xs font-bold text-charcoal-800"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Cooking">Cooking in Kitchen</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="text-xs text-charcoal-700 space-y-1">
                        <span className="font-bold text-[11px] text-charcoal-500 uppercase">Items:</span>
                        {order.items?.map((item, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span>{item.quantity}x {item.name} ({item.sizeLabel || 'Standard'})</span>
                            <span className="font-bold">₦{(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: STORE PROFILE */}
          {activeTab === 'profile' && (
            <div className="max-w-xl space-y-4">
              <h2 className="text-lg font-extrabold text-charcoal-900 font-display">
                Kitchen Profile & Contacts
              </h2>
              <div className="p-5 rounded-2xl bg-white border border-maize-200 space-y-3 text-xs">
                <div>
                  <span className="font-bold text-charcoal-500 block">Store Name:</span>
                  <span className="font-extrabold text-sm text-charcoal-900">{vendor.name}</span>
                </div>
                <div>
                  <span className="font-bold text-charcoal-500 block">Location:</span>
                  <span className="font-medium text-charcoal-800">{vendor.location}</span>
                </div>
                <div>
                  <span className="font-bold text-charcoal-500 block">Coverage Area:</span>
                  <span className="font-medium text-charcoal-800">{vendor.coverage}</span>
                </div>
                <div>
                  <span className="font-bold text-charcoal-500 block">Chef Bio:</span>
                  <p className="text-charcoal-700 italic">"{vendor.bio}"</p>
                </div>
                <div>
                  <span className="font-bold text-charcoal-500 block">WhatsApp Phone:</span>
                  <span className="font-bold text-forest-700">{vendor.phone}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
