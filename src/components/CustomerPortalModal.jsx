import React, { useState } from 'react';
import { X, Calendar, RefreshCw, Pause, Play, Snowflake, Check, AlertCircle, ChefHat, PackageCheck, Flame } from 'lucide-react';

export default function CustomerPortalModal({ isOpen, onClose }) {
  const [isPaused, setIsPaused] = useState(false);
  const [activePlan, setActivePlan] = useState("The Couple's Weekly Pantry");
  const [selectedSoups, setSelectedSoups] = useState(['Royal Egusi Elegusi (2.5L)', 'Designer Ayamase (2.0L)']);
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  const handleSwapSoup = () => {
    setSelectedSoups(prev => 
      prev[0].includes('Egusi') 
        ? ['Island Fisherman Seafood Okro (2.5L)', 'Slow-Simmered Buka Stew (2.5L)']
        : ['Royal Egusi Elegusi (2.5L)', 'Designer Ayamase (2.0L)']
    );
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-modal border border-maize-300 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-6 bg-charcoal-900 text-white flex items-center justify-between border-b border-charcoal-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-forest-700 flex items-center justify-center text-amberGold">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-extrabold text-xl text-white">
                  My Weekly Household Pantry
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-forest-800 text-forest-200 uppercase tracking-wider border border-forest-700">
                  Active Subscriber
                </span>
              </div>
              <p className="text-xs text-charcoal-300">
                Manage your weekly batch selections, pause delivery, or adjust household portions.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-charcoal-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-maize-50/40">
          
          {saveToast && (
            <div className="p-3 rounded-xl bg-forest-800 text-white text-xs font-bold flex items-center gap-2 shadow-md animate-fade-in">
              <Check className="w-4 h-4 text-amberGold" />
              <span>Household preferences updated! Next Friday prep reflects your changes.</span>
            </div>
          )}

          {/* Active Cycle Status Card */}
          <div className="p-5 rounded-2xl bg-white border border-maize-300 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-forest-700 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-forest-600" />
                <span>Next Weekend Dispatch Window:</span>
              </div>
              <div className="text-lg font-black text-charcoal-900 font-display">
                {isPaused ? 'Paused for This Weekend' : 'Saturday • 9:00 AM – 12:00 PM'}
              </div>
              <p className="text-xs text-charcoal-500">
                Lekki Phase 1, Lagos • Cutoff locks Thursday 11:59 PM
              </p>
            </div>

            <button
              onClick={handleTogglePause}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                isPaused
                  ? 'bg-forest-700 hover:bg-forest-800 text-white shadow-sm'
                  : 'bg-charcoal-100 hover:bg-charcoal-200 text-charcoal-800 border border-charcoal-300'
              }`}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5 text-paprika-600" />}
              <span>{isPaused ? 'Resume Weekly Delivery' : 'Pause Next Weekend Batch'}</span>
            </button>
          </div>

          {/* Current Batch Composition */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-sm text-charcoal-900 uppercase tracking-wider">
                Active Weekly Menu Configuration:
              </h4>
              <button
                onClick={handleSwapSoup}
                className="text-xs font-bold text-paprika-600 hover:text-paprika-700 flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Quick-Swap Next Week’s Flavors</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white border border-maize-300 shadow-soft space-y-1.5">
                <div className="text-[10px] font-black uppercase text-paprika-600 tracking-wider">Soup Choice 1</div>
                <div className="font-display font-extrabold text-sm text-charcoal-900">{selectedSoups[0]}</div>
                <p className="text-xs text-charcoal-500">Fresh crayfish, smoked panla, stockfish</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-maize-300 shadow-soft space-y-1.5">
                <div className="text-[10px] font-black uppercase text-paprika-600 tracking-wider">Stew Choice 2</div>
                <div className="font-display font-extrabold text-sm text-charcoal-900">{selectedSoups[1]}</div>
                <p className="text-xs text-charcoal-500">Bleached palm oil, green tatase, boiled eggs</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-maize-300 shadow-soft space-y-1.5">
                <div className="text-[10px] font-black uppercase text-forest-700 tracking-wider">Protein Tray 1</div>
                <div className="font-display font-extrabold text-sm text-charcoal-900">Spiced Peppered Turkey (8 pcs)</div>
                <p className="text-xs text-charcoal-500">Crispy skin in scotch bonnet glaze</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-maize-300 shadow-soft space-y-1.5">
                <div className="text-[10px] font-black uppercase text-forest-700 tracking-wider">Protein Tray 2</div>
                <div className="font-display font-extrabold text-sm text-charcoal-900">Asun-Style Goat Meat (16 chunks)</div>
                <p className="text-xs text-charcoal-500">Slow braised tender chevon</p>
              </div>
            </div>
          </div>

          {/* Refrigerator & Freezer Inventory Guide */}
          <div className="p-5 rounded-2xl bg-white border border-maize-300 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-900 flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-forest-600" />
              Optimal Household Storage Strategy
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-forest-50 border border-forest-100 text-forest-900 space-y-1">
                <strong>Main Chiller (0°C – 4°C):</strong>
                <p className="text-[11px] text-forest-800">
                  Keep 1x Soup + 1x Stew for consumption Monday through Wednesday.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-paprika-50 border border-paprika-100 text-paprika-900 space-y-1">
                <strong>Deep Freezer (-18°C):</strong>
                <p className="text-[11px] text-paprika-800">
                  Keep remainder tubs. Defrost in chiller 12 hours before Thursday dinner.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-maize-200 flex items-center justify-between px-6">
          <span className="text-xs text-charcoal-500 font-medium">
            Monthly recurring billing: ₦78,000/week • Modify anytime
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-charcoal-900 hover:bg-paprika-600 text-white font-bold text-xs transition-colors"
          >
            Close Pantry View
          </button>
        </div>

      </div>
    </div>
  );
}
