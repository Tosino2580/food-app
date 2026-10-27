import React, { useState } from 'react';
import { Calculator, Users, Clock, TrendingUp, Sparkles, ArrowRight, Check } from 'lucide-react';

export default function MealCalculator({ onSelectBundle }) {
  const [householdSize, setHouseholdSize] = useState(2); // 1, 2, 4, 6
  const [coverageDays, setCoverageDays] = useState(7); // 5 or 7 days

  // Dynamic calculations
  const totalMeals = householdSize * coverageDays;
  const soupLitresNeeded = householdSize === 1 ? '2.0L' : householdSize === 2 ? '4.0L' : householdSize === 4 ? '7.0L' : '10.0L';
  const stewLitresNeeded = householdSize === 1 ? '1.5L' : householdSize === 2 ? '2.5L' : householdSize === 4 ? '4.5L' : '7.0L';
  const proteinPiecesNeeded = householdSize === 1 ? 6 : householdSize === 2 ? 16 : householdSize === 4 ? 28 : 42;
  const hoursSavedWeekly = householdSize === 1 ? 9 : householdSize === 2 ? 14 : householdSize === 4 ? 20 : 26;
  const monthlyHoursSaved = hoursSavedWeekly * 4;

  // Financial comparison in Naira
  const deliveryAppsMonthlyCost = totalMeals * 4 * 7500; // avg 7.5k per delivery app meal in Lagos
  const homeBatchMonthlyCost = (householdSize === 1 ? 42500 : householdSize === 2 ? 78000 : 145000) * 4;
  const monthlySavings = deliveryAppsMonthlyCost - homeBatchMonthlyCost;

  const targetBundleId = householdSize === 1 ? 'bundle-solo' : householdSize === 2 ? 'bundle-couples' : 'bundle-family';

  return (
    <section id="calculator" className="py-16 md:py-24 bg-maize-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paprika-100 text-paprika-800 text-xs font-bold border border-paprika-200">
            <Calculator className="w-3.5 h-3.5 text-paprika-600" />
            <span>Interactive Household Replenishment Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            How much time & stress does HomeBatch save your home?
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Adjust your household parameters below to calculate exact batch litre requirements and see your weekly return on peace of mind.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-card border border-maize-300 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-maize-200">
              
              {/* Household Size Selector */}
              <div className="space-y-3">
                <label className="flex items-center justify-between text-sm font-bold text-charcoal-900">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-paprika-600" />
                    Household Size
                  </span>
                  <span className="text-paprika-600 font-extrabold text-base">
                    {householdSize === 1 ? '1 Adult (Solo)' : householdSize === 2 ? '2 Adults (Couple)' : householdSize === 4 ? 'Family of 4' : 'Large Family (5+)'}
                  </span>
                </label>

                <div className="grid grid-cols-4 gap-2">
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

              {/* Days Coverage */}
              <div className="space-y-3">
                <label className="flex items-center justify-between text-sm font-bold text-charcoal-900">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-paprika-600" />
                    Coverage Required
                  </span>
                  <span className="text-paprika-600 font-extrabold text-base">
                    {coverageDays === 5 ? '5 Days (Weekday Dinners)' : '7 Days (Full Week Coverage)'}
                  </span>
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCoverageDays(5)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold text-center transition-all ${
                      coverageDays === 5
                        ? 'bg-paprika-600 text-white shadow-md'
                        : 'bg-maize-50 text-charcoal-700 hover:bg-maize-100 border border-maize-200'
                    }`}
                  >
                    5 Days (Weekday Dinners)
                  </button>
                  <button
                    onClick={() => setCoverageDays(7)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold text-center transition-all ${
                      coverageDays === 7
                        ? 'bg-paprika-600 text-white shadow-md'
                        : 'bg-maize-50 text-charcoal-700 hover:bg-maize-100 border border-maize-200'
                    }`}
                  >
                    7 Days (Full 24/7 Coverage)
                  </button>
                </div>
              </div>

              {/* Metric Breakdown Table */}
              <div className="p-4 rounded-2xl bg-maize-50 border border-maize-200/80 space-y-2.5 text-xs">
                <div className="font-bold text-charcoal-900 text-xs uppercase tracking-wider text-charcoal-500">
                  Recommended Weekly Batch Volume
                </div>
                <div className="flex justify-between items-center py-1 border-b border-maize-200">
                  <span className="text-charcoal-600">Simmered Soups:</span>
                  <strong className="text-charcoal-900 font-bold">{soupLitresNeeded} (e.g. 2 varieties)</strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-maize-200">
                  <span className="text-charcoal-600">Rich Stews / Sauces:</span>
                  <strong className="text-charcoal-900 font-bold">{stewLitresNeeded}</strong>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-charcoal-600">Seasoned Proteins:</span>
                  <strong className="text-charcoal-900 font-bold">{proteinPiecesNeeded} pieces / cuts</strong>
                </div>
              </div>

            </div>

            {/* Output Calculation Highlights */}
            <div className="lg:col-span-6 p-6 sm:p-10 bg-gradient-to-br from-forest-850 via-forest-800 to-forest-900 text-white flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-700/60 text-forest-200 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amberGold" />
                    <span>Your Household Value Summary</span>
                  </span>
                  <h3 className="text-2xl font-black font-display mt-2 text-white">
                    {monthlyHoursSaved} Hours Given Back Per Month
                  </h3>
                  <p className="text-forest-200 text-xs sm:text-sm mt-1">
                    Equivalent to getting <strong>4 full Saturdays back</strong> every month to spend with your family, work on your startup, or simply rest.
                  </p>
                </div>

                {/* Savings Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-forest-700/40 border border-forest-600/50">
                    <div className="text-[11px] font-bold text-forest-300 uppercase">Weekly Hours Saved</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-amberGold font-display mt-0.5">
                      {hoursSavedWeekly} hrs
                    </div>
                    <div className="text-[10px] text-forest-200 mt-1">No market mud or stove watching</div>
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
                    <span>Total meals covered: <strong>{totalMeals} generous home-cooked servings</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amberGold shrink-0" />
                    <span>Delivered fresh every weekend in insulated thermal totes</span>
                  </div>
                </div>
              </div>

              {/* Load Recommended Bundle Button */}
              <button
                onClick={() => onSelectBundle(targetBundleId)}
                className="w-full py-4 px-6 rounded-2xl bg-amberGold hover:bg-amber-400 active:scale-95 text-charcoal-950 font-black text-sm sm:text-base shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>View Recommended Plan for {householdSize === 1 ? '1 Person' : householdSize === 2 ? 'Couple' : 'Family'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
