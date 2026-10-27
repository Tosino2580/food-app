import React from 'react';
import { Sparkles, MessageSquare, Mail, UserCheck, ChefHat, Store, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenBrandDeck, onOpenPortal, onOpenVendorOnboarding, onExploreFoods, onExploreVendors }) {
  return (
    <footer className="bg-charcoal-950 text-white pt-12 sm:pt-16 pb-10 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-paprika-500 to-paprika-700 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 40 40" fill="none" className="w-5 h-5 text-white">
                  <path d="M10 17C10 14 30 14 30 17C30 25 26 29 20 29C14 29 10 25 10 17Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 17H34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M16 11C16 8 18 7 18 5M24 11C24 8 22 7 22 5" stroke="#E9A825" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl text-white">
                  Home<span className="text-paprika-500">Batch</span>
                </span>
                <span className="text-[10px] font-bold text-amberGold block uppercase tracking-wider">
                  Nigerian Homemade Food Marketplace
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-400 max-w-sm leading-relaxed">
              Connecting hungry Lagos households with independent home cooks for authentic 1.5L, 3L and 5L slow-simmered soups, stews, and party rice batches.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={onOpenVendorOnboarding}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-forest-900 hover:bg-forest-800 text-amberGold border border-forest-700 transition-colors flex items-center gap-1.5"
              >
                <ChefHat className="w-3.5 h-3.5" />
                <span>Become a Vendor</span>
              </button>

              <button
                onClick={onOpenBrandDeck}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-forest-200 border border-charcoal-700 transition-colors"
              >
                Brand Deck
              </button>
              
              <button
                onClick={onOpenPortal}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-paprika-400 border border-charcoal-700 transition-colors"
              >
                Household Portal
              </button>
            </div>
          </div>

          {/* Marketplace Navigation */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-300">
              Marketplace
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-400">
              <li>
                <a href="#featured-foods" className="hover:text-paprika-400 transition-colors">18 Featured Dishes</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-paprika-400 transition-colors">Food Categories</a>
              </li>
              <li>
                <a href="#vendors" className="hover:text-paprika-400 transition-colors">Verified Food Vendors</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-paprika-400 transition-colors">Household Calculator</a>
              </li>
              <li>
                <a href="#the-standard" className="hover:text-paprika-400 transition-colors">18-Point Hygiene Standards</a>
              </li>
            </ul>
          </div>

          {/* Sizing & Packaging */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-300">
              Sizing Standards
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-400">
              <li>1.5 Litres (4–6 Servings)</li>
              <li>3.0 Litres (8–10 Servings)</li>
              <li>5.0 Litres (14–16 Servings)</li>
              <li>Microwave & Freezer-Safe Tubs</li>
              <li>Cold-Chain Insulated Delivery</li>
            </ul>
          </div>

          {/* Lagos Delivery & Concierge */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-300">
              Coverage & Concierge
            </h4>
            <div className="space-y-2 text-xs text-charcoal-400">
              <p>Lekki, Ikoyi, Victoria Island, Ikeja, Magodo, Surulere & Yaba.</p>
              <div className="pt-2">
                <a
                  href="https://wa.me/2348030000000?text=Hi%20HomeBatch,%20I%20want%20to%20order%20homemade%20food"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-900 border border-forest-700 text-forest-200 text-xs font-semibold hover:bg-forest-800 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-forest-400" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>© {new Date().getFullYear()} HomeBatch Marketplace. All rights reserved. Connecting independent Nigerian cooks with households.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-forest-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Commercial Kitchen Vetted
            </span>
            <span>•</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
