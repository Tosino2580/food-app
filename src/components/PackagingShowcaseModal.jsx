import React, { useState } from 'react';
import { X, Sparkles, Copy, Check, Package, QrCode, Shield, ThermometerSnowflake, FileText, CheckCircle2 } from 'lucide-react';
import { BRAND_IDENTITY } from '../data/packagingAssets';

export default function PackagingShowcaseModal({ isOpen, onClose }) {
  const [copiedHex, setCopiedHex] = useState(null);
  const [activeTab, setActiveTab] = useState('packaging'); // 'packaging' | 'identity'

  if (!isOpen) return null;

  const handleCopyHex = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative bg-white w-full max-w-5xl rounded-3xl shadow-modal border border-maize-300 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-6 bg-forest-900 text-white flex items-center justify-between border-b border-forest-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-paprika-600 flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5 text-amberGold" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-extrabold text-xl text-white">
                  Client Pitch Deck: Brand Identity & Touchpoints
                </h3>
                <span className="text-[10px] uppercase font-bold bg-amberGold text-charcoal-950 px-2 py-0.5 rounded">
                  Section 6 Deliverables
                </span>
              </div>
              <p className="text-xs text-forest-200 mt-0.5">
                Physical packaging, sticker direction, color system, and brand experience architecture.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-forest-300 hover:text-white hover:bg-forest-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-maize-200 bg-maize-50 px-6 pt-3 gap-4">
          <button
            onClick={() => setActiveTab('packaging')}
            className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'packaging'
                ? 'border-paprika-600 text-paprika-600'
                : 'border-transparent text-charcoal-600 hover:text-charcoal-900'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Physical Customer Touchpoints (Packaging, Stickers, Box)</span>
          </button>

          <button
            onClick={() => setActiveTab('identity')}
            className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'identity'
                ? 'border-paprika-600 text-paprika-600'
                : 'border-transparent text-charcoal-600 hover:text-charcoal-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Color Palette & Typography System</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-maize-100/40">
          
          {/* TAB 1: PHYSICAL PACKAGING TOUCHPOINTS */}
          {activeTab === 'packaging' && (
            <div className="space-y-8">
              
              {/* Interactive Packaging Mockup Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Touchpoint 1: Tub Label Specimen */}
                <div className="bg-white p-6 rounded-3xl border-2 border-maize-300 shadow-soft space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-paprika-600 bg-paprika-50 px-2.5 py-1 rounded-md">
                      Touchpoint 01: Tub Sticker Label
                    </span>
                    <span className="text-xs font-bold text-charcoal-500">Waterproof Matte</span>
                  </div>

                  {/* Visual Render of Label */}
                  <div className="p-5 rounded-2xl bg-maize-100 border border-paprika-200 shadow-inner space-y-3 font-sans">
                    <div className="flex items-center justify-between border-b border-paprika-200 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-paprika-600 flex items-center justify-center text-white text-[10px] font-black">
                          HB
                        </div>
                        <span className="font-display font-extrabold text-sm text-charcoal-900">HomeBatch</span>
                      </div>
                      <span className="text-[10px] font-bold bg-forest-800 text-white px-2 py-0.5 rounded">
                        2.5 LITRE BATCH
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] text-charcoal-500 uppercase font-semibold">Simmered Soup</div>
                      <div className="text-base font-display font-black text-charcoal-900">
                        Royal Egusi Elegusi (Stockfish & Panla)
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] bg-white p-2.5 rounded-xl border border-maize-200">
                      <div>
                        <span className="text-charcoal-500 block">Batch Cook Date:</span>
                        <strong className="text-charcoal-800">Friday 24th Oct • Kitchen #04</strong>
                      </div>
                      <div>
                        <span className="text-charcoal-500 block">Use By (Chiller):</span>
                        <strong className="text-paprika-700">Wed 29th Oct (Or Freeze 4wks)</strong>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-charcoal-600 pt-1">
                      <div className="flex items-center gap-1">
                        <ThermometerSnowflake className="w-3.5 h-3.5 text-forest-600" />
                        <span>Keep Chilled at 0°C – 4°C</span>
                      </div>
                      <span className="font-bold text-forest-700">100% Natural • No Additives</span>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    High-tack waterproof polypropylene sticker placed centered on the lid with a tamper-evident fold extending over the tub rim.
                  </p>
                </div>

                {/* Touchpoint 2: Refrigerator Prep & Reheat Card */}
                <div className="bg-white p-6 rounded-3xl border-2 border-maize-300 shadow-soft space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-forest-700 bg-forest-50 px-2.5 py-1 rounded-md">
                      Touchpoint 02: Magnetic Fridge Card
                    </span>
                    <span className="text-xs font-bold text-charcoal-500">Customer Welcome Card</span>
                  </div>

                  {/* Visual Render of Welcome Insert */}
                  <div className="p-5 rounded-2xl bg-forest-900 text-white shadow-inner space-y-3 font-sans">
                    <div className="flex items-center justify-between border-b border-forest-800 pb-2">
                      <span className="font-display font-bold text-xs text-amberGold uppercase tracking-wider">
                        Household Reheat Protocol
                      </span>
                      <span className="text-[10px] text-forest-300">Stick on Fridge Door</span>
                    </div>

                    <h4 className="font-display font-bold text-sm text-white">
                      “Your weekly cooking is officially handled.”
                    </h4>

                    <div className="space-y-1.5 text-[11px] text-forest-200">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amberGold shrink-0 mt-0.5" />
                        <span><strong>Step 1:</strong> Keep tubs for Days 1–3 in fridge chiller; deep freeze the rest.</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amberGold shrink-0 mt-0.5" />
                        <span><strong>Step 2:</strong> Microwave: Scoop into bowl, reheat on high for 3–4 mins.</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amberGold shrink-0 mt-0.5" />
                        <span><strong>Step 3:</strong> Stove: Heat with 2 tablespoons of water over low flame.</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-forest-800 flex items-center justify-between text-[10px]">
                      <span className="text-forest-300">Need more stew or want to swap next batch?</span>
                      <span className="text-amberGold font-bold">WhatsApp Concierge: +234 810 000 HBAT</span>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    Included in every first tote delivery. Magnetic backing ensures it stays right on the refrigerator door as a constant brand reminder.
                  </p>
                </div>

              </div>

              {/* Touchpoint 3: Delivery Bag & Packaging Architecture */}
              <div className="bg-white p-6 rounded-3xl border border-maize-300 space-y-4">
                <h4 className="font-display font-extrabold text-base text-charcoal-900 flex items-center gap-2">
                  <Package className="w-4 h-4 text-paprika-600" />
                  Full Customer Unboxing Journey Specifications
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {BRAND_IDENTITY.touchpoints.map((tp, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-maize-50 border border-maize-200 space-y-2">
                      <div className="text-[10px] font-black uppercase text-paprika-600 tracking-wider">
                        {tp.type}
                      </div>
                      <div className="font-display font-bold text-xs text-charcoal-900">
                        {tp.title}
                      </div>
                      <p className="text-[11px] text-charcoal-600 leading-relaxed">
                        {tp.description}
                      </p>
                      <div className="pt-2 border-t border-maize-200/80 space-y-1">
                        {tp.features.map((feat, fidx) => (
                          <div key={fidx} className="text-[10px] text-charcoal-700 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-forest-600" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: BRAND IDENTITY & COLOR SYSTEM */}
          {activeTab === 'identity' && (
            <div className="space-y-8">
              
              {/* Brand Thought Recap */}
              <div className="p-6 rounded-3xl bg-forest-900 text-white space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-amberGold font-extrabold">
                  The Brand Shift
                </span>
                <h4 className="font-display font-black text-2xl text-white">
                  “You don’t necessarily hate cooking. You hate everything that comes before eating.”
                </h4>
                <p className="text-xs text-forest-200 max-w-2xl leading-relaxed">
                  HomeBatch sells time, domestic order, and peace of mind. The visual identity avoids standard fast-food or corporate grocery tropes, positioning HomeBatch as a modern Nigerian lifestyle essential.
                </p>
              </div>

              {/* Color Swatches */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-base text-charcoal-900">
                  Option A: Warm Gourmet Brand Palette (Selected Direction)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {BRAND_IDENTITY.colorPalette.map((col, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-2xl border border-maize-300 shadow-soft flex flex-col justify-between space-y-3"
                    >
                      <div
                        className="w-full h-16 rounded-xl shadow-inner border border-black/5"
                        style={{ backgroundColor: col.hex }}
                      />
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-xs text-charcoal-900">{col.name}</span>
                          <button
                            onClick={() => handleCopyHex(col.hex)}
                            className="text-charcoal-400 hover:text-paprika-600 transition-colors p-1"
                            title="Copy HEX"
                          >
                            {copiedHex === col.hex ? <Check className="w-3.5 h-3.5 text-forest-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        <div className="font-mono text-xs font-bold text-charcoal-600 mt-0.5">{col.hex}</div>
                        <p className="text-[10px] text-charcoal-500 mt-1 leading-tight">{col.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Specs */}
              <div className="bg-white p-6 rounded-3xl border border-maize-300 space-y-3">
                <h4 className="font-display font-bold text-base text-charcoal-900">
                  Typography Pairing
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-maize-50 border border-maize-200 space-y-1">
                    <span className="text-[10px] font-black uppercase text-paprika-600 tracking-wider">Display Font</span>
                    <h5 className="font-display font-extrabold text-xl text-charcoal-900">Outfit</h5>
                    <p className="text-xs text-charcoal-600">
                      Geometric, friendly, and structured. Used for bold headlines, section markers, and brand logo.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-maize-50 border border-maize-200 space-y-1">
                    <span className="text-[10px] font-black uppercase text-forest-700 tracking-wider">Body & UI Font</span>
                    <h5 className="font-sans font-extrabold text-xl text-charcoal-900">Plus Jakarta Sans</h5>
                    <p className="text-xs text-charcoal-600">
                      Humanist, high legibility on mobile screens, crisp numeric rendering for prices and litre metrics.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-maize-200 flex items-center justify-between px-6">
          <span className="text-xs text-charcoal-500 font-medium">
            HomeBatch Client Presentation Mode • Ready for stakeholder review
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-charcoal-900 hover:bg-paprika-600 text-white font-bold text-xs transition-colors"
          >
            Close Deck View
          </button>
        </div>

      </div>
    </div>
  );
}
