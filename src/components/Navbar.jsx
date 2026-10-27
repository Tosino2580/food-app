import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Package, Calendar, Clock, MapPin, Menu, X, ArrowRight, UserCheck } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenBrandDeck, 
  onOpenPortal 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-maize-100/90 backdrop-blur-md shadow-soft border-b border-paprika-100' 
        : 'bg-maize-100/70 backdrop-blur-sm'
    }`}>
      {/* Top Cutoff Notice Bar */}
      <div className="bg-forest-800 text-maize-100 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amberGold text-charcoal-900 font-bold text-[10px] uppercase tracking-wider">
          Weekly Window
        </span>
        <span>Orders for this weekend close <strong>Thursday 11:59 PM</strong></span>
        <span className="hidden md:inline text-forest-300">•</span>
        <span className="hidden md:inline text-forest-200">Fresh slow-cooked Friday, chilled delivery Saturday & Sunday</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-paprika-500 to-paprika-700 flex items-center justify-center shadow-md shadow-paprika-500/20 group-hover:scale-105 transition-transform duration-200">
            <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6 text-maize-100">
              {/* Cooking Pot & Batch Lid Icon */}
              <path d="M10 17C10 14 30 14 30 17C30 25 26 29 20 29C14 29 10 25 10 17Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 17H34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M16 11C16 8 18 7 18 5M24 11C24 8 22 7 22 5" stroke="#E9A825" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="11" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-2xl tracking-tight text-charcoal-900">
                Home<span className="text-paprika-600">Batch</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-forest-100 text-forest-800 rounded border border-forest-200 uppercase tracking-wider">
                Lagos
              </span>
            </div>
            <p className="text-[11px] text-charcoal-500 font-medium tracking-wide -mt-0.5 hidden sm:block">
              Your weekly cooking, handled.
            </p>
          </div>
        </a>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-charcoal-700">
          <a href="#how-it-works" className="hover:text-paprika-600 transition-colors">How It Works</a>
          <a href="#menu-plans" className="hover:text-paprika-600 transition-colors">Weekly Bundles</a>
          <a href="#batch-builder" className="hover:text-paprika-600 transition-colors">Build A Batch</a>
          <a href="#calculator" className="hover:text-paprika-600 transition-colors">Time Calculator</a>
          <a href="#the-standard" className="hover:text-paprika-600 transition-colors">Kitchen Standards</a>
          <a href="#faqs" className="hover:text-paprika-600 transition-colors">FAQs</a>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {/* Client Pitch Presentation Mode Button */}
          <button
            onClick={onOpenBrandDeck}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-800 border border-forest-200 transition-all duration-200 shadow-sm"
            title="View Brand Deliverables & Packaging Specs"
          >
            <Sparkles className="w-3.5 h-3.5 text-forest-600" />
            <span>Brand Deck & Packaging</span>
          </button>

          {/* Customer Portal / Active Pantry Button */}
          <button
            onClick={onOpenPortal}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-white hover:bg-maize-50 text-charcoal-800 border border-maize-300 transition-all duration-200 shadow-sm"
            title="Manage your subscription and freezer pantry"
          >
            <UserCheck className="w-3.5 h-3.5 text-paprika-600" />
            <span>My Weekly Batch</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            id="nav-cart-btn"
            className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-paprika-600 hover:bg-paprika-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-paprika-600/25 transition-all duration-200"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">My Batch</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-amberGold text-charcoal-900 text-xs font-black flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal-700 hover:bg-maize-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-maize-100 border-b border-paprika-200 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => { onOpenBrandDeck(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-1.5 text-xs font-bold p-2.5 rounded-xl bg-forest-50 text-forest-800 border border-forest-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brand Deliverables</span>
            </button>
            <button
              onClick={() => { onOpenPortal(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-1.5 text-xs font-bold p-2.5 rounded-xl bg-white text-charcoal-800 border border-maize-300"
            >
              <UserCheck className="w-3.5 h-3.5 text-paprika-600" />
              <span>My Weekly Batch</span>
            </button>
          </div>
          <div className="flex flex-col gap-2 font-semibold text-charcoal-800 pt-2 border-t border-maize-200">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-maize-200">How It Works</a>
            <a href="#menu-plans" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-maize-200">Weekly Bundles</a>
            <a href="#batch-builder" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-maize-200">Build A Batch</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-maize-200">Time Saved Calculator</a>
            <a href="#the-standard" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-maize-200">Kitchen Standards</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-maize-200">FAQs</a>
          </div>
        </div>
      )}
    </header>
  );
}
