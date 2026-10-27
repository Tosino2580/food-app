import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X, ChefHat, User, Package, LogIn, Store } from 'lucide-react';

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenMyOrders,
  onOpenVendorOnboarding,
  onOpenVendorDashboard,
  onOpenAuth,
  currentVendor,
  currentUser,
  onExploreFoods,
  onExploreVendors,
  onGoHome
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'bg-maize-100/95 backdrop-blur-md shadow-soft border-b border-paprika-100'
        : 'bg-maize-100/80 backdrop-blur-sm'
    }`}>
      {/* Top Banner Notice */}
      <div className="bg-forest-900 text-maize-100 text-[11px] py-2 px-3 text-center font-medium flex items-center justify-center gap-2 flex-wrap leading-tight">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amberGold text-charcoal-950 font-black text-[9px] uppercase tracking-wider shrink-0">
          Lagos Homemade Marketplace
        </span>
        <span>Authentic Nigerian soups in <strong>1.5L, 3L & 5L</strong> from verified independent cooks</span>
        <span className="hidden sm:inline text-forest-400">•</span>
        <span className="hidden sm:inline text-forest-200">Chilled doorstep delivery across Lagos</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <button 
          onClick={onGoHome} 
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0 text-left focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-paprika-500 to-paprika-700 flex items-center justify-center shadow-md shadow-paprika-500/20 group-hover:scale-105 transition-transform duration-200">
            <svg viewBox="0 0 40 40" fill="none" className="w-5 h-5 sm:w-6 sm:h-6 text-maize-100">
              <path d="M10 17C10 14 30 14 30 17C30 25 26 29 20 29C14 29 10 25 10 17Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 17H34" stroke="currentColor" strokeWidth="2.5" strokeLineround="round"/>
              <path d="M16 11C16 8 18 7 18 5M24 11C24 8 22 7 22 5" stroke="#E9A825" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="11" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-charcoal-900">
                Home<span className="text-paprika-600">Batch</span>
              </span>
              <span className="hidden sm:inline text-[9px] font-black px-1.5 py-0.5 bg-forest-100 text-forest-800 rounded border border-forest-200 uppercase tracking-wider">
                Marketplace
              </span>
            </div>
            <p className="text-[10px] text-charcoal-500 font-medium tracking-wide -mt-0.5 hidden md:block">
              Homemade Nigerian Food Network
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold text-charcoal-700">
          <button 
            type="button" 
            onClick={onGoHome} 
            className="hover:text-paprika-600 transition-colors"
          >
            Home
          </button>
          <button
            type="button"
            onClick={onExploreFoods}
            className="hover:text-paprika-600 transition-colors"
          >
            Explore Foods
          </button>
          <button
            type="button"
            onClick={onExploreVendors}
            className="hover:text-paprika-600 transition-colors"
          >
            Food Vendors
          </button>
          <button
            type="button"
            onClick={onOpenMyOrders}
            className="hover:text-paprika-600 transition-colors flex items-center gap-1.5"
          >
            <Package className="w-4 h-4 text-forest-700" />
            <span>My Orders</span>
          </button>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Prominent "Become a Vendor" Button */}
          {currentVendor ? (
            <button
              onClick={onOpenVendorDashboard}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-maize-100 border border-forest-700 transition-all shadow-xs"
            >
              <Store className="w-3.5 h-3.5 text-amberGold" />
              <span>Vendor Dashboard</span>
            </button>
          ) : (
            <button
              onClick={onOpenVendorOnboarding}
              id="become-vendor-nav-btn"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-maize-100 border border-forest-700 transition-all shadow-xs active:scale-95"
            >
              <ChefHat className="w-3.5 h-3.5 text-amberGold" />
              <span>Become a Vendor</span>
            </button>
          )}

          {/* Login / Profile */}
          <button
            onClick={onOpenAuth}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-white hover:bg-maize-50 text-charcoal-800 border border-maize-300 transition-all shadow-2xs"
          >
            {currentUser ? (
              <>
                <User className="w-3.5 h-3.5 text-paprika-600" />
                <span className="truncate max-w-[80px]">{currentUser.name || 'Account'}</span>
              </>
            ) : (
              <>
                <LogIn className="w-3.5 h-3.5 text-charcoal-600" />
                <span>Login / Sign Up</span>
              </>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            id="nav-cart-btn"
            className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-paprika-600 hover:bg-paprika-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-paprika-600/25 transition-all"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-amberGold text-charcoal-950 text-[11px] font-black flex items-center justify-center shrink-0 shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-charcoal-700 hover:text-charcoal-900 hover:bg-maize-200/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-maize-50 border-b border-maize-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-1 font-bold text-sm text-charcoal-800">
            <button
              type="button"
              onClick={() => { close(); if (onGoHome) onGoHome(); }}
              className="px-3 py-2.5 rounded-xl hover:bg-maize-200/60 text-left transition-colors font-bold"
            >
              Home
            </button>
            <button
              onClick={() => { close(); if (onExploreFoods) onExploreFoods(); }}
              className="px-3 py-2.5 rounded-xl hover:bg-maize-200/60 text-left transition-colors"
            >
              Explore Foods
            </button>
            <button
              onClick={() => { close(); if (onExploreVendors) onExploreVendors(); }}
              className="px-3 py-2.5 rounded-xl hover:bg-maize-200/60 text-left transition-colors"
            >
              Food Vendors
            </button>
            <button
              onClick={() => { close(); onOpenMyOrders(); }}
              className="px-3 py-2.5 rounded-xl hover:bg-maize-200/60 text-left transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4 text-forest-700" />
                <span>My Orders</span>
              </span>
            </button>
          </div>

          <div className="pt-3 border-t border-maize-200 space-y-2">
            <button
              onClick={() => {
                close();
                if (currentVendor) onOpenVendorDashboard();
                else onOpenVendorOnboarding();
              }}
              className="w-full py-3 px-4 rounded-xl bg-forest-800 text-maize-100 font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <ChefHat className="w-4 h-4 text-amberGold" />
              <span>{currentVendor ? 'My Vendor Dashboard' : 'Become a Food Vendor'}</span>
            </button>

            <button
              onClick={() => { close(); onOpenAuth(); }}
              className="w-full py-2.5 px-4 rounded-xl bg-white border border-maize-300 text-charcoal-800 font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{currentUser ? `Logged in: ${currentUser.name}` : 'Login / Sign Up'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
