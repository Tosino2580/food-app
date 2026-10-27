import React from 'react';
import { Sparkles, MessageSquare, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer({ onOpenBrandDeck, onOpenPortal }) {
  return (
    <footer className="bg-charcoal-950 text-white pt-16 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-paprika-500 to-paprika-700 flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" className="w-5 h-5 text-white">
                  <path d="M10 17C10 14 30 14 30 17C30 25 26 29 20 29C14 29 10 25 10 17Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 17H34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M16 11C16 8 18 7 18 5M24 11C24 8 22 7 22 5" stroke="#E9A825" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display font-extrabold text-2xl text-white">
                Home<span className="text-paprika-500">Batch</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-400 max-w-sm leading-relaxed">
              Lagos-based weekly home-cooked food replenishment for busy households. 
              Authentic soups, stews, and proteins slow-simmered on Friday, delivered chilled on Saturday.
            </p>

            <div className="text-xs text-amberGold font-semibold">
              “Your weekly cooking, handled.”
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenBrandDeck}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-forest-200 border border-charcoal-700"
              >
                Brand Deck & Specs
              </button>
              <button
                onClick={onOpenPortal}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-paprika-400 border border-charcoal-700"
              >
                Household Portal
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-300">
              The Service
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-400">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How Weekly Batches Work</a></li>
              <li><a href="#menu-plans" className="hover:text-white transition-colors">Weekly Curated Plans</a></li>
              <li><a href="#batch-builder" className="hover:text-white transition-colors">Custom Litre Builder</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Time Saved Calculator</a></li>
              <li><a href="#the-standard" className="hover:text-white transition-colors">Kitchen Partner Standard</a></li>
            </ul>
          </div>

          {/* Lagos Delivery Coverage */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-300">
              Weekend Dispatch Zones
            </h4>
            <ul className="space-y-1.5 text-xs text-charcoal-400">
              <li>• Lekki Phase 1 & Oniru</li>
              <li>• Ikoyi & Victoria Island</li>
              <li>• Chevron, Ikate & Osapa</li>
              <li>• Ikeja GRA & Maryland</li>
              <li>• Magodo Phase 1 & 2</li>
              <li>• Surulere & Yaba</li>
            </ul>
          </div>

          {/* Concierge & Support */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-300">
              Direct Concierge
            </h4>
            <p className="text-xs text-charcoal-400 leading-relaxed">
              Have a custom event batch, special dietary request, or office inquiry?
            </p>
            <div className="space-y-1 text-xs text-forest-300">
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +234 810 000 HBAT</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>orders@homebatch.ng</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-4">
          <div>
            © {new Date().getFullYear()} HomeBatch Technologies Ltd. All rights reserved. Lagos, Nigeria.
          </div>
          <div className="flex items-center gap-1 text-charcoal-400">
            <span>Built with React + Tailwind CSS for HomeBatch Client Pitch</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
