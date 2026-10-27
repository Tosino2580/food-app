import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import BatchBuilder from './components/BatchBuilder';
import MealCalculator from './components/MealCalculator';
import HowItWorks from './components/HowItWorks';
import QualityStandards from './components/QualityStandards';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Modals & Drawers
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderSuccessModal from './components/OrderSuccessModal';
import PackagingShowcaseModal from './components/PackagingShowcaseModal';
import CustomerPortalModal from './components/CustomerPortalModal';

export default function App() {
  // Local storage cart persistence for seamless client demonstration
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('homebatch_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default starter demo item: "The Couple's Weekly Pantry"
    return [
      {
        id: 'bundle-couples-demo',
        originalId: 'bundle-couples',
        name: "The Couple's Weekly Pantry",
        type: 'bundle',
        sizeLabel: '2 Adults (7 Days)',
        price: 78000,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
        category: 'Curated Plan'
      }
    ];
  });

  const [selectedZone, setSelectedZone] = useState('island-lekki1');
  const [activeBuilderTab, setActiveBuilderTab] = useState('bundles');

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isBrandDeckOpen, setIsBrandDeckOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('homebatch_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const handleAddToCart = (newItem) => {
    setCartItems(prev => {
      // Check if identical item with same size exists
      const existingIndex = prev.findIndex(item => 
        item.originalId === newItem.originalId && item.sizeLabel === newItem.sizeLabel
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + 1;
        return updated;
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });

    // Automatically open drawer briefly or update count
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

  const handleSelectBundleFromCalc = (bundleId) => {
    setActiveBuilderTab('bundles');
    const el = document.getElementById('menu-plans');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderComplete = (orderData) => {
    setCompletedOrder(orderData);
    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
    // Clear cart on successful order
    setCartItems([]);
  };

  const totalItemCount = cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-maize-100 text-charcoal-900 selection:bg-paprika-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBrandDeck={() => setIsBrandDeckOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplorePlans={() => {
            setActiveBuilderTab('bundles');
            document.getElementById('batch-builder')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onBuildCustomBatch={() => {
            setActiveBuilderTab('custom');
            document.getElementById('batch-builder')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. The Problem & Fundamental Shift */}
        <TheProblem />

        {/* 3. Interactive Household Replenishment Calculator */}
        <MealCalculator onSelectBundle={handleSelectBundleFromCalc} />

        {/* 4. The Weekly Menu & Batch Builder (Hybrid: Bundles + Custom Litres) */}
        <BatchBuilder
          activeTab={activeBuilderTab}
          setActiveTab={setActiveBuilderTab}
          onAddToCart={handleAddToCart}
        />

        {/* 5. How It Works (The Weekly Cadence) */}
        <HowItWorks />

        {/* 6. The HomeBatch Standard (Kitchen Partner Vetting & Hygiene) */}
        <QualityStandards />

        {/* 7. Lagos Customer Testimonials */}
        <Testimonials />

        {/* 8. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer
        onOpenBrandDeck={() => setIsBrandDeckOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* DRAWERS & MODALS */}

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

      {/* Checkout Modal (Paystack simulation + WhatsApp Concierge) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        selectedZone={selectedZone}
        onOrderComplete={handleOrderComplete}
      />

      {/* Order Celebration & Confirmation Receipt */}
      <OrderSuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        order={completedOrder}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Client Pitch Presentation Mode: Brand Deck & Packaging Deliverables */}
      <PackagingShowcaseModal
        isOpen={isBrandDeckOpen}
        onClose={() => setIsBrandDeckOpen(false)}
      />

      {/* Customer Portal: Active Pantry & Freezer Inventory Management */}
      <CustomerPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

    </div>
  );
}
