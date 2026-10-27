import React from 'react';
import { Sparkles, MessageSquare, Mail, UserCheck } from 'lucide-react';

export default function Footer({ onOpenBrandDeck, onOpenPortal }) {
  return (
    <footer className="bg-charcoal-950 text-white pt-12 sm:pt-16 pb-10 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Info — full width on mobile */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-paprika-500 to-paprika-700 flex items-center justify-center shrink-0">
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
              Authentic soups, stews, and proteins slow-simmered on Friday, delivered chilled Saturday.
            </p>

            <div className="text-xs text-amberGold font-semibold">
              "Your weekly cooking, handled."
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
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
                My Batch Portal
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-300">
              The Service
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-400">
              {[
                { href: '#how-it-works', label: 'How It Works' },
                { href: '#menu-plans', label: 'Weekly Plans' },
                { href: '#batch-builder', label: 'Custom Batch Builder' },
                { href: '#calculator', label: 'Time Calculator' },
                { href: '#the-standard', label: 'Kitchen Standards' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Zones */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-300">
              Delivery Zones
            </h4>
            <ul className="space-y-1.5 text-xs text-charcoal-400">
              {[
                'Lekki Phase 1 & Oniru',
                'Ikoyi & Victoria Island',
                'Chevron, Ikate & Osapa',
                'Ikeja GRA & Maryland',
                'Magodo Phase 1 & 2',
                'Surulere & Yaba',
              ].map(zone => (
                <li key={zone}>• {zone}</li>
              ))}
            </ul>
          </div>

          {/* Concierge — hidden on mobile, shown lg */}
          <div className="hidden lg:block space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-300">
              Concierge
            </h4>
            <p className="text-xs text-charcoal-400 leading-relaxed">
              Custom event batches, dietary requests, or office inquiries?
            </p>
            <div className="space-y-1.5 text-xs text-forest-300">
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp: +234 810 000 HBAT</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>orders@homebatch.ng</span>
              </div>
            </div>
          </div>

        </div>

        {/* Concierge contacts on mobile — shown below lg */}
        <div className="lg:hidden flex flex-wrap gap-4 text-xs text-forest-300 border-t border-charcoal-800 pt-6">
          <div className="flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span>WhatsApp: +234 810 000 HBAT</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span>orders@homebatch.ng</span>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} HomeBatch Technologies Ltd. Lagos, Nigeria.
          </div>
          <div className="text-charcoal-600">
            Built with React + Tailwind CSS • Client Prototype
          </div>
        </div>

      </div>
    </footer>
  );
}
