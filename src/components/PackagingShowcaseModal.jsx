import React, { useState } from 'react';
import { X, Check, Package, Sparkles, Copy, ThermometerSnowflake, CheckCircle2 } from 'lucide-react';
import { BRAND_IDENTITY } from '../data/packagingAssets';

export default function PackagingShowcaseModal({ isOpen, onClose }) {
  const [copiedHex, setCopiedHex] = useState(null);
  const [activeTab, setActiveTab] = useState('packaging');

  if (!isOpen) return null;

  const handleCopyHex = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="relative bg-white w-full sm:max-w-5xl rounded-t-3xl sm:rounded-3xl shadow-modal border-t sm:border border-maize-300 flex flex-col max-h-[96vh] sm:max-h-[92vh]">

        {/* Header */}
        <div className="p-4 sm:p-5 bg-forest-900 text-white flex items-center justify-between border-b border-forest-800 rounded-t-3xl shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-paprika-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-amberGold" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display font-extrabold text-sm sm:text-lg text-white">Brand Identity & Touchpoints</h3>
                <span className="text-[9px] uppercase font-bold bg-amberGold text-charcoal-950 px-2 py-0.5 rounded shrink-0">
                  Section 6
                </span>
              </div>
              <p className="text-xs text-forest-200 mt-0.5 hidden sm:block">
                Packaging, sticker, color palette and brand architecture.
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-forest-300 hover:text-white shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs — scrollable on mobile */}
        <div className="flex border-b border-maize-200 bg-maize-50 px-4 pt-3 gap-4 overflow-x-auto shrink-0">
          {[
            { id: 'packaging', icon: Package, label: 'Packaging & Touchpoints' },
            { id: 'identity', icon: Sparkles, label: 'Color & Typography' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`pb-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === id
                  ? 'border-paprika-600 text-paprika-600'
                  : 'border-transparent text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 bg-maize-100/40 flex-1">

          {/* TAB 1: PACKAGING */}
          {activeTab === 'packaging' && (
            <div className="space-y-6">

              {/* Sticker Label + Fridge Card — stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                {/* Tub Sticker Label */}
                <div className="bg-white p-4 sm:p-6 rounded-3xl border-2 border-maize-300 shadow-soft space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-paprika-600 bg-paprika-50 px-2.5 py-1 rounded-md block w-fit">
                    01 · Tub Sticker Label
                  </span>
                  <div className="p-4 rounded-2xl bg-maize-100 border border-paprika-200 space-y-2.5 font-sans">
                    <div className="flex items-center justify-between border-b border-paprika-200 pb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-paprika-600 flex items-center justify-center text-white text-[9px] font-black">HB</div>
                        <span className="font-display font-extrabold text-sm text-charcoal-900">HomeBatch</span>
                      </div>
                      <span className="text-[9px] font-bold bg-forest-800 text-white px-1.5 py-0.5 rounded">2.5L BATCH</span>
                    </div>
                    <div>
                      <div className="text-[9px] text-charcoal-500 uppercase font-semibold">Simmered Soup</div>
                      <div className="text-sm font-display font-black text-charcoal-900">Royal Egusi Elegusi</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[9px] bg-white p-2 rounded-lg border border-maize-200">
                      <div>
                        <span className="text-charcoal-500 block">Cook Date:</span>
                        <strong className="text-charcoal-800">Friday 24th Oct</strong>
                      </div>
                      <div>
                        <span className="text-charcoal-500 block">Use By (Chiller):</span>
                        <strong className="text-paprika-700">Wed 29th Oct</strong>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] text-charcoal-600">
                      <div className="flex items-center gap-1">
                        <ThermometerSnowflake className="w-3 h-3 text-forest-600" />
                        <span>0°C – 4°C Chiller</span>
                      </div>
                      <span className="font-bold text-forest-700">100% Natural</span>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    High-tack waterproof matte polypropylene sticker with tamper-evident fold over tub rim.
                  </p>
                </div>

                {/* Fridge Card */}
                <div className="bg-white p-4 sm:p-6 rounded-3xl border-2 border-maize-300 shadow-soft space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-forest-700 bg-forest-50 px-2.5 py-1 rounded-md block w-fit">
                    02 · Magnetic Fridge Card
                  </span>
                  <div className="p-4 rounded-2xl bg-forest-900 text-white space-y-2.5 font-sans">
                    <div className="flex items-center justify-between border-b border-forest-800 pb-1.5">
                      <span className="font-display font-bold text-[10px] text-amberGold uppercase tracking-wider">Reheat Protocol</span>
                      <span className="text-[9px] text-forest-300">Fridge Door</span>
                    </div>
                    <h4 className="font-display font-bold text-xs text-white">"Your cooking is handled."</h4>
                    <div className="space-y-1.5 text-[10px] text-forest-200">
                      {[
                        'Keep Days 1–3 in chiller; freeze the rest.',
                        'Microwave: scoop into bowl, 3–4 mins high.',
                        'Stove: low heat with 2 tbsp water.'
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-amberGold shrink-0 mt-0.5" />
                          <span><strong>Step {i + 1}:</strong> {step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-1.5 border-t border-forest-800 text-[9px] text-amberGold font-bold">
                      WhatsApp: +234 810 000 HBAT
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    Magnetic backing included in every first delivery. Stays on the refrigerator door as a brand reminder.
                  </p>
                </div>
              </div>

              {/* Packaging Touchpoints Grid */}
              <div className="bg-white p-4 sm:p-6 rounded-3xl border border-maize-300 space-y-4">
                <h4 className="font-display font-extrabold text-sm text-charcoal-900 flex items-center gap-2">
                  <Package className="w-4 h-4 text-paprika-600" />
                  Full Unboxing Journey
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BRAND_IDENTITY.touchpoints.map((tp, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-maize-50 border border-maize-200 space-y-2">
                      <div className="text-[10px] font-black uppercase text-paprika-600 tracking-wider">{tp.type}</div>
                      <div className="font-display font-bold text-xs text-charcoal-900">{tp.title}</div>
                      <p className="text-[11px] text-charcoal-600 leading-relaxed">{tp.description}</p>
                      <div className="pt-1.5 border-t border-maize-200 space-y-0.5">
                        {tp.features.map((feat, fidx) => (
                          <div key={fidx} className="text-[10px] text-charcoal-700 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-forest-600 shrink-0" />
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

          {/* TAB 2: IDENTITY */}
          {activeTab === 'identity' && (
            <div className="space-y-6">
              <div className="p-5 rounded-3xl bg-forest-900 text-white space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-amberGold font-extrabold">Brand Shift</span>
                <h4 className="font-display font-black text-lg sm:text-2xl text-white leading-snug">
                  "You don't hate cooking. You hate everything that comes before eating."
                </h4>
              </div>

              {/* Color Swatches — 2 cols on mobile */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-sm text-charcoal-900">Warm Gourmet Palette</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {BRAND_IDENTITY.colorPalette.map((col, idx) => (
                    <div key={idx} className="bg-white p-3 sm:p-4 rounded-2xl border border-maize-300 shadow-soft space-y-2">
                      <div className="w-full h-12 sm:h-16 rounded-xl shadow-inner border border-black/5" style={{ backgroundColor: col.hex }} />
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-[11px] text-charcoal-900 truncate flex-1">{col.name}</span>
                        <button onClick={() => handleCopyHex(col.hex)} className="text-charcoal-400 hover:text-paprika-600 p-1 shrink-0">
                          {copiedHex === col.hex ? <Check className="w-3 h-3 text-forest-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                      <div className="font-mono text-[10px] font-bold text-charcoal-600">{col.hex}</div>
                      <p className="text-[9px] text-charcoal-500 leading-tight">{col.role.split('•')[0]}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="bg-white p-4 sm:p-6 rounded-3xl border border-maize-300 space-y-3">
                <h4 className="font-display font-bold text-sm text-charcoal-900">Typography Pairing</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { font: 'display', badge: 'Display Font', name: 'Outfit', desc: 'Geometric, modern. Used for headlines and brand mark.' },
                    { font: 'sans', badge: 'Body Font', name: 'Plus Jakarta Sans', desc: 'Humanist, high legibility for prices, metrics, and UI.' }
                  ].map(({ font, badge, name, desc }) => (
                    <div key={font} className="p-4 rounded-2xl bg-maize-50 border border-maize-200 space-y-1">
                      <span className={`text-[10px] font-black uppercase ${font === 'display' ? 'text-paprika-600' : 'text-forest-700'} tracking-wider`}>{badge}</span>
                      <h5 className={`font-${font} font-extrabold text-xl text-charcoal-900`}>{name}</h5>
                      <p className="text-xs text-charcoal-600">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-maize-200 flex items-center justify-between px-4 sm:px-6 shrink-0">
          <span className="text-xs text-charcoal-500 hidden sm:block">HomeBatch Client Pitch Deck</span>
          <button onClick={onClose} className="ml-auto px-5 py-2 rounded-xl bg-charcoal-900 hover:bg-paprika-600 text-white font-bold text-xs transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
