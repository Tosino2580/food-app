import React, { useState } from 'react';
import { X, Calendar, RefreshCw, Pause, Play, Snowflake, Check, PackageCheck } from 'lucide-react';

export default function CustomerPortalModal({ isOpen, onClose }) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSoups, setSelectedSoups] = useState(['Royal Egusi Elegusi (2.5L)', 'Designer Ayamase (2.0L)']);
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  const showToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleSwapSoup = () => {
    setSelectedSoups(prev =>
      prev[0].includes('Egusi')
        ? ['Island Seafood Okro (2.5L)', 'Slow-Simmered Buka Stew (2.5L)']
        : ['Royal Egusi Elegusi (2.5L)', 'Designer Ayamase (2.0L)']
    );
    showToast();
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
    showToast();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="relative bg-white w-full sm:max-w-3xl rounded-t-3xl sm:rounded-3xl shadow-modal border-t sm:border border-maize-300 flex flex-col max-h-[96vh] sm:max-h-[92vh]">

        {/* Header */}
        <div className="p-4 sm:p-5 bg-charcoal-900 text-white flex items-center justify-between border-b border-charcoal-800 rounded-t-3xl shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-forest-700 flex items-center justify-center text-amberGold shrink-0">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display font-extrabold text-sm sm:text-xl text-white">My Weekly Household Pantry</h3>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-forest-800 text-forest-200 uppercase tracking-wider border border-forest-700 shrink-0">
                  Active
                </span>
              </div>
              <p className="text-xs text-charcoal-300 hidden sm:block mt-0.5">
                Manage selections, pause delivery, or adjust portions.
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-charcoal-400 hover:text-white shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">

          {saveToast && (
            <div className="p-3 rounded-xl bg-forest-800 text-white text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4 text-amberGold" />
              <span>Preferences updated! Reflects next Friday's prep.</span>
            </div>
          )}

          {/* Active Cycle Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-maize-300 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-forest-700 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-forest-600" />
                <span>Next Dispatch:</span>
              </div>
              <div className="text-base sm:text-lg font-black text-charcoal-900 font-display">
                {isPaused ? 'Paused This Weekend' : 'Saturday • 9:00 AM – 12:00 PM'}
              </div>
              <p className="text-xs text-charcoal-500">Lekki Phase 1 • Cutoff: Thursday 11:59 PM</p>
            </div>
            <button
              onClick={handleTogglePause}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shrink-0 ${
                isPaused
                  ? 'bg-forest-700 hover:bg-forest-800 text-white shadow-sm'
                  : 'bg-charcoal-100 hover:bg-charcoal-200 text-charcoal-800 border border-charcoal-300'
              }`}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5 text-paprika-600" />}
              <span>{isPaused ? 'Resume Delivery' : 'Pause Weekend'}</span>
            </button>
          </div>

          {/* Batch Configuration */}
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-display font-bold text-sm text-charcoal-900 uppercase tracking-wider">This Week's Menu:</h4>
              <button onClick={handleSwapSoup} className="text-xs font-bold text-paprika-600 hover:text-paprika-700 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Quick-Swap Flavors</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'Soup Choice 1', value: selectedSoups[0], desc: 'Fresh crayfish, smoked panla, stockfish', color: 'paprika' },
                { label: 'Stew Choice 2', value: selectedSoups[1], desc: 'Bleached palm oil, green tatase, boiled eggs', color: 'paprika' },
                { label: 'Protein Tray 1', value: 'Peppered Turkey (8 pcs)', desc: 'Crispy skin in scotch bonnet glaze', color: 'forest' },
                { label: 'Protein Tray 2', value: 'Asun-Style Goat Meat (16 chunks)', desc: 'Slow braised tender chevon', color: 'forest' }
              ].map(({ label, value, desc, color }) => (
                <div key={label} className="p-4 rounded-2xl bg-white border border-maize-300 shadow-soft space-y-1">
                  <div className={`text-[10px] font-black uppercase text-${color}-600 tracking-wider`}>{label}</div>
                  <div className="font-display font-extrabold text-sm text-charcoal-900 leading-snug">{value}</div>
                  <p className="text-xs text-charcoal-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Storage Guide */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-maize-300 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-900 flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-forest-600" />
              Optimal Storage Strategy
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-forest-50 border border-forest-100 text-forest-900 space-y-1">
                <strong className="text-forest-800">Main Chiller (0°C – 4°C):</strong>
                <p className="text-[11px] text-forest-700">Keep 1x Soup + 1x Stew for Mon–Wed consumption.</p>
              </div>
              <div className="p-3 rounded-xl bg-paprika-50 border border-paprika-100 text-paprika-900 space-y-1">
                <strong className="text-paprika-800">Deep Freezer (-18°C):</strong>
                <p className="text-[11px] text-paprika-700">Freeze remainder. Defrost 12hrs before Thursday dinner.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-maize-200 flex items-center justify-between px-4 sm:px-6 shrink-0">
          <span className="text-xs text-charcoal-500 hidden sm:block">₦78,000/week • Modify anytime</span>
          <button onClick={onClose} className="ml-auto px-5 py-2 rounded-xl bg-charcoal-900 hover:bg-paprika-600 text-white font-bold text-xs transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
