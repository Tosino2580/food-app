import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoodCategories from './components/FoodCategories';
import FeaturedFoods from './components/FeaturedFoods';
import VendorsSection from './components/VendorsSection';
import TheProblem from './components/TheProblem';
import MealCalculator from './components/MealCalculator';
import HowItWorks from './components/HowItWorks';
import QualityStandards from './components/QualityStandards';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Dedicated Full Product Page View
import ProductPage from './components/ProductPage';

// Modals & Drawers
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderSuccessModal from './components/OrderSuccessModal';
import VendorStoreModal from './components/VendorStoreModal';
import VendorOnboardingModal from './components/VendorOnboardingModal';
import VendorDashboardModal from './components/VendorDashboardModal';
import MyOrdersModal from './components/MyOrdersModal';
import AuthModal from './components/AuthModal';
import PackagingShowcaseModal from './components/PackagingShowcaseModal';
import CustomerPortalModal from './components/CustomerPortalModal';

// Initial Marketplace Data with Real Photos
import { INITIAL_VENDORS, INITIAL_FOODS } from './data/marketplaceData';

export default function App() {
  // Navigation View State: 'home' or 'product-detail'
  const [currentView, setCurrentView] = useState('home');
  const [selectedFood, setSelectedFood] = useState(INITIAL_FOODS[0]);

  // 1. Food Vendors State (Versioned in localStorage)
  const [vendors, setVendors] = useState(() => {
    try {
      const saved = localStorage.getItem('homebatch_vendors_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_VENDORS;
  });

  // 2. Foods State with all 18 authentic Nigerian dishes & real photos (Versioned)
  const [foods, setFoods] = useState(() => {
    try {
      const saved = localStorage.getItem('homebatch_foods_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_FOODS;
  });

  // 3. Cart State (Persisted in localStorage)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('homebatch_cart_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: 'food-egusi-3L',
        originalId: 'food-egusi',
        name: 'Egusi Soup',
        vendorName: "Mama Nkechi's Kitchen",
        vendorId: 'vendor-nkechi',
        category: 'Nigerian Soups',
        sizeLabel: '3 Litres',
        volume: '3 Litres',
        price: 30000,
        quantity: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Egusi_soup_in_a_plate.jpg'
      }
    ];
  });

  // 4. Orders History State (Persisted in localStorage)
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('homebatch_orders_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      {
        orderId: 'HB-882319',
        customerName: 'Adewale Adeleke',
        phone: '+234 803 456 7890',
        zoneName: 'Lekki Phase 1 & Oniru',
        deliverySlot: 'Saturday 9:00 AM – 12:00 PM',
        status: 'Cooking in Kitchen',
        createdAt: 'Today, 11:30 AM',
        total: 51500,
        items: [
          { name: 'Egusi Soup', sizeLabel: '3 Litres', price: 30000, quantity: 1 },
          { name: 'Ayamase (Designer Stew)', sizeLabel: '1.5 Litres', price: 19000, quantity: 1 }
        ]
      }
    ];
  });

  // Delivery Zone
  const [selectedZone, setSelectedZone] = useState('island-lekki1');

  // Filter & Search States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [heroSearchQuery, setHeroSearchQuery] = useState('');

  // Active User / Vendor
  const [currentUser, setCurrentUser] = useState({ name: 'Adewale', email: 'adewale@lagos.ng' });
  const [currentVendor, setCurrentVendor] = useState(null);

  // Modals
  const [selectedVendorForStore, setSelectedVendorForStore] = useState(null);
  const [isVendorStoreOpen, setIsVendorStoreOpen] = useState(false);

  const [isVendorOnboardingOpen, setIsVendorOnboardingOpen] = useState(false);
  const [isVendorDashboardOpen, setIsVendorDashboardOpen] = useState(false);
  const [isMyOrdersOpen, setIsMyOrdersOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const [isBrandDeckOpen, setIsBrandDeckOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('homebatch_cart_v2', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('homebatch_vendors_v2', JSON.stringify(vendors));
    } catch (e) {
      console.error(e);
    }
  }, [vendors]);

  useEffect(() => {
    try {
      localStorage.setItem('homebatch_foods_v2', JSON.stringify(foods));
    } catch (e) {
      console.error(e);
    }
  }, [foods]);

  useEffect(() => {
    try {
      localStorage.setItem('homebatch_orders_v2', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  // Cart Operations
  const handleAddToCart = (newItem) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => 
        item.originalId === newItem.originalId && item.sizeLabel === newItem.sizeLabel
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + (newItem.quantity || 1);
        return updated;
      }
      return [...prev, newItem];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId, newQty) => {
    setCartItems(prev => 
      prev.map(item => item.id === itemId ? { ...item, quantity: newQty } : item)
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleOrderComplete = (orderData) => {
    const finalOrder = {
      ...orderData,
      status: 'Cooking in Kitchen',
      createdAt: 'Just now'
    };

    setOrders(prev => [finalOrder, ...prev]);
    setCompletedOrder(finalOrder);
    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
    setCartItems([]);
  };

  // Vendor Operations
  const handleRegisterVendor = (newVendor) => {
    setVendors(prev => [newVendor, ...prev]);
    setCurrentVendor(newVendor);
    setIsVendorDashboardOpen(true);
  };

  const handleAddNewDish = (dish) => {
    setFoods(prev => [dish, ...prev]);
  };

  const handleToggleDishAvailability = (dishId) => {
    setFoods(prev => prev.map(f => {
      if (f.id === dishId) {
        const nextAvail = f.availability === 'sold_out' ? 'in_stock' : 'sold_out';
        return { ...f, availability: nextAvail };
      }
      return f;
    }));
  };

  const handleDeleteDish = (dishId) => {
    setFoods(prev => prev.filter(f => f.id !== dishId));
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => {
      if (o.orderId === orderId || o.id === orderId) {
        return { ...o, status: newStatus };
      }
      return o;
    }));
  };

  // Open dedicated Product Page
  const handleOpenProductDetail = (food) => {
    setSelectedFood(food);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation helpers
  const handleGoHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreFoods = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('featured-foods');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById('featured-foods');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreVendors = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('vendors');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById('vendors');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVisitVendor = (vendorId) => {
    const target = vendors.find(v => v.id === vendorId);
    if (target) {
      setSelectedVendorForStore(target);
      setIsVendorStoreOpen(true);
    }
  };

  const totalItemCount = cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-maize-100 text-charcoal-900 selection:bg-paprika-500 selection:text-white">
      
      {/* 1. Universal Top Navigation Bar */}
      <Navbar
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMyOrders={() => setIsMyOrdersOpen(true)}
        onOpenVendorOnboarding={() => setIsVendorOnboardingOpen(true)}
        onOpenVendorDashboard={() => setIsVendorDashboardOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        currentVendor={currentVendor}
        currentUser={currentUser}
        onExploreFoods={handleExploreFoods}
        onExploreVendors={handleExploreVendors}
        onGoHome={handleGoHome}
      />

      {/* Main Routing: Either Dedicated Product Page OR Homepage */}
      {currentView === 'product-detail' ? (
        /* DEDICATED FOOD DETAILS PAGE */
        <main className="flex-1">
          <ProductPage
            food={selectedFood}
            allFoods={foods}
            onBack={handleGoHome}
            onAddToCart={handleAddToCart}
            onVisitVendor={handleVisitVendor}
            onSelectRelatedFood={(foodItem) => {
              setSelectedFood(foodItem);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOrderNow={() => {
              setIsCheckoutOpen(true);
            }}
          />
        </main>
      ) : (
        /* FULL HOMEPAGE MARKETPLACE */
        <main className="flex-1">
          {/* 2. Hero Section with Real Food Highlights */}
          <Hero
            onExploreFoods={handleExploreFoods}
            onOpenVendorOnboarding={() => setIsVendorOnboardingOpen(true)}
            onSearchFood={(query) => setHeroSearchQuery(query)}
            selectedZone={selectedZone}
            setSelectedZone={setSelectedZone}
          />

          {/* 3. 8 Food Categories with Real Photos */}
          <FoodCategories
            selectedCategory={selectedCategory}
            onSelectCategory={(catId) => setSelectedCategory(catId)}
          />

          {/* 4. 18 Featured Homemade Foods - Every Card is Clickable and Navigates to Product Page */}
          <FeaturedFoods
            foods={foods}
            vendors={vendors}
            selectedCategory={selectedCategory}
            onSelectCategory={(catId) => setSelectedCategory(catId)}
            onSelectFood={handleOpenProductDetail}
            onVisitVendor={handleVisitVendor}
          />

          {/* 5. Food Vendors Section */}
          <VendorsSection
            vendors={vendors}
            foods={foods}
            onVisitVendor={handleVisitVendor}
            onOpenVendorOnboarding={() => setIsVendorOnboardingOpen(true)}
          />

          {/* 6. Why Homemade Batch Cooking Matters */}
          <TheProblem />

          {/* 7. Interactive Household Replenishment Calculator */}
          <MealCalculator onSelectBundle={() => handleExploreFoods()} />

          {/* 8. The Weekly Cadence */}
          <HowItWorks />

          {/* 9. 18-Point Commercial Kitchen Standards */}
          <QualityStandards />

          {/* 10. Lagos Customer Testimonials */}
          <Testimonials />

          {/* 11. Frequently Asked Questions */}
          <FAQ />
        </main>
      )}

      {/* 12. Universal Footer */}
      <Footer
        onOpenBrandDeck={() => setIsBrandDeckOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenVendorOnboarding={() => setIsVendorOnboardingOpen(true)}
        onExploreFoods={handleExploreFoods}
        onExploreVendors={handleExploreVendors}
      />

      {/* DRAWERS & MODALS */}

      {/* Vendor Store Page Modal */}
      <VendorStoreModal
        vendor={selectedVendorForStore}
        foods={foods}
        isOpen={isVendorStoreOpen}
        onClose={() => setIsVendorStoreOpen(false)}
        onSelectFood={(dish) => {
          setIsVendorStoreOpen(false);
          handleOpenProductDetail(dish);
        }}
        onAddToCart={handleAddToCart}
      />

      {/* Vendor Onboarding (Become a Vendor) Modal */}
      <VendorOnboardingModal
        isOpen={isVendorOnboardingOpen}
        onClose={() => setIsVendorOnboardingOpen(false)}
        onRegisterVendor={handleRegisterVendor}
      />

      {/* Vendor Dashboard Modal */}
      <VendorDashboardModal
        vendor={currentVendor || vendors[0]}
        foods={foods}
        orders={orders}
        isOpen={isVendorDashboardOpen}
        onClose={() => setIsVendorDashboardOpen(false)}
        onAddNewDish={handleAddNewDish}
        onToggleDishAvailability={handleToggleDishAvailability}
        onDeleteDish={handleDeleteDish}
        onUpdateOrderStatus={handleUpdateOrderStatus}
      />

      {/* Customer Orders Tracking & History Modal */}
      <MyOrdersModal
        orders={orders}
        isOpen={isMyOrdersOpen}
        onClose={() => setIsMyOrdersOpen(false)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginAsCustomer={(user) => setCurrentUser(user)}
        onLoginAsVendor={() => {
          setCurrentVendor(vendors[0]);
          setIsVendorDashboardOpen(true);
        }}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        selectedZone={selectedZone}
        setSelectedZone={setSelectedZone}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Modal (Paystack simulation + Delivery form) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        selectedZone={selectedZone}
        onOrderComplete={handleOrderComplete}
      />

      {/* Order Success Celebration Receipt */}
      <OrderSuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        order={completedOrder}
        onOpenPortal={() => setIsMyOrdersOpen(true)}
      />

      {/* Packaging & Freezer Specs Modal */}
      <PackagingShowcaseModal
        isOpen={isBrandDeckOpen}
        onClose={() => setIsBrandDeckOpen(false)}
      />

      {/* Customer Portal: Freezer Inventory Management */}
      <CustomerPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

    </div>
  );
}
