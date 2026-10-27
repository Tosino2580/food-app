import React, { useState } from 'react';
import { Calculator, Users, Clock, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function MealCalculator({ onSelectBundle }) {
  const [householdSize, setHouseholdSize] = useState(2);
  const [coverageDays, setCoverageDays] = useState(7);

  const totalMeals = householdSize * coverageDays;
  const soupLitresNeeded = householdSize === 1 ? '2.0L' : householdSize === 2 ? '4.0L' : householdSize === 4 ? '7.0L' : '10.0L';
  const stewLitresNeeded = householdSize === 1 ? '1.5L' : householdSize === 2 ? '2.5L' : householdSize === 4 ? '4.5L' : '7.0L';
  const proteinPiecesNeeded = householdSize === 1 ? 6 : householdSize === 2 ? 16 : householdSize === 4 ? 28 : 42;
  const hoursSavedWeekly = householdSize === 1 ? 9 : householdSize === 2 ? 14 : householdSize === 4 ? 20 : 26;
  const monthlyHoursSaved = hoursSavedWeekly * 4;
  const deliveryAppsMonthlyCost = totalMeals * 4 * 7500;
  const homeBatchMonthlyCost = (householdSize === 1 ? 42500 : householdSize === 2 ? 78000 : 145000) * 4;
  const monthlySavings = deliveryAppsMonthlyCost - homeBatchMonthlyCost;
  const targetBundleId = householdSize === 1 ? 'bundle-solo' : householdSize === 2 ? 'bundle-couples' : 'bundle-family';

  const householdLabel =
    householdSize === 1 ? '1 Person' : householdSize === 2 ? 'Couple' : householdSize === 4 ? 'Family of 4' : 'Large Family';

  return (
    <section id="calculator" className="py-12 md:py-20 bg-maize-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paprika-100 text-paprika-800 text-xs font-bold border border-paprika-200">
            <Calculator className="w-3.5 h-3.5 text-paprika-600" />
            <span>Household Replenishment Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            How much time & stress does HomeBatch save?
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Adjust your household parameters to see your weekly savings.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-card border border-maize-300 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Input Controls */}
            <div className="lg:col-span-6 p-5 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-maize-200">

              {/* Household Size */}
              <div className="space-y-3">
                <label className="flex items-center justify-between text-sm font-bold text-charcoal-900">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-paprika-600" />
                    Household Size
                  </span>
                  <span className="text-paprika-600 font-extrabold text-sm">{householdLabel}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { value: 1, label: '1 Person' },
                    { value: 2, label: '2 People' },
                    { value: 4, label: '3–4 People' },
                    { value: 6, label: '5+ People' }
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setHouseholdSize(item.value)}
                      className={`py-3 px-2 rounded-xl text-xs font-bold transition-all ${
                        householdSize === item.value
                          ? 'bg-paprika-600 text-white shadow-md'
                          : 'bg-maize-50 text-charcoal-700 hover:bg-maize-100 border border-maize-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Coverage Days */}
              <div className="space-y-3">
                <label className="flex items-center justify-between text-sm font-bold text-charcoal-900">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-paprika-600" />
                    Coverage
                  </span>
                  <span className="text-paprika-600 font-extrabold text-sm">
                    {coverageDays === 5 ? '5 Days' : '7 Days (Full Week)'}
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { days: 5, label: '5 Days (Weekday)' },
                    { days: 7, label: '7 Days (Full Week)' }
                  ].map(({ days, label }) => (
                    <button
                      key={days}
                      onClick={() => setCoverageDays(days)}
                      className={`py-3 px-3 rounded-xl text-xs font-bold text-center transition-all ${
                        coverageDays === days
                          ? 'bg-paprika-600 text-white shadow-md'
                          : 'bg-maize-50 text-charcoal-700 hover:bg-maize-100 border border-maize-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Volume Breakdown */}
              <div className="p-4 rounded-2xl bg-maize-50 border border-maize-200/80 space-y-2 text-xs">
                <div className="font-bold text-[11px] uppercase tracking-wider text-charcoal-500 mb-2">
                  Recommended Batch Volume
                </div>
                {[
                  { label: 'Soups:', value: soupLitresNeeded },
                  { label: 'Stews / Sauces:', value: stewLitresNeeded },
                  { label: 'Proteins:', value: `${proteinPiecesNeeded} pieces` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-1 border-b border-maize-200 last:border-0">
                    <span className="text-charcoal-600">{label}</span>
                    <strong className="text-charcoal-900">{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-6 p-5 sm:p-8 bg-gradient-to-br from-forest-850 via-forest-800 to-forest-900 text-white flex flex-col justify-between gap-6">

              <div className="space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-700/60 text-forest-200 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amberGold" />
                    Your Household Value Summary
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-display mt-2 text-white">
                    {monthlyHoursSaved} Hours Back Per Month
                  </h3>
                  <p className="text-forest-200 text-xs sm:text-sm mt-1">
                    Equivalent to <strong>4 full Saturdays</strong> back every month.
                  </p>
                </div>

                {/* Savings Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-forest-700/40 border border-forest-600/50">
                    <div className="text-[11px] font-bold text-forest-300 uppercase">Weekly Hours Saved</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-amberGold font-display mt-0.5">
                      {hoursSavedWeekly} hrs
                    </div>
                    <div className="text-[10px] text-forest-200 mt-1">No market runs or stove time</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-forest-700/40 border border-forest-600/50">
                    <div className="text-[11px] font-bold text-forest-300 uppercase">Est. Monthly Savings</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-0.5">
                      ₦{Math.max(monthlySavings, 80000).toLocaleString()}
                    </div>
                    <div className="text-[10px] text-forest-200 mt-1">vs. daily delivery apps</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-forest-100">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amberGold shrink-0" />
                    <span>Total meals covered: <strong>{totalMeals} generous servings</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amberGold shrink-0" />
                    <span>Delivered fresh every weekend in thermal totes</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectBundle(targetBundleId)}
                className="w-full py-4 px-5 rounded-2xl bg-amberGold hover:bg-amber-400 active:scale-95 text-charcoal-950 font-black text-sm sm:text-base shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>View Recommended Plan for {householdLabel}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
