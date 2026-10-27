import React from 'react';
import { CalendarCheck, Flame, Truck, Utensils } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Plan by Thursday Midnight',
      subtitle: 'Order Cutoff 11:59 PM',
      description: 'Select your curated weekly plan or custom soup & stew litres. The window closes on Thursday so partner kitchens can source pristine farm-fresh produce.',
      icon: CalendarCheck,
      tag: 'Lock In Menu'
    },
    {
      num: '02',
      title: 'Friday Morning Slow-Simmer',
      subtitle: 'Certified Kitchen Prep',
      description: 'Chefs blend roasted tatase, peel fresh melon seeds, and slow-braise proteins in sanitized commercial kitchens with zero artificial preservatives.',
      icon: Flame,
      tag: 'Crafted Fresh'
    },
    {
      num: '03',
      title: 'Weekend Cold-Chain Delivery',
      subtitle: 'Saturday & Sunday Slots',
      description: 'Packed into airtight tubs and dispatched in insulated thermal cold-bags right to your doorstep across Lagos Island and Mainland.',
      icon: Truck,
      tag: 'Direct to Fridge'
    },
    {
      num: '04',
      title: 'Reheat & Enjoy All Week',
      subtitle: 'Zero Weekday Stress',
      description: 'Keep 3 days in chiller, freeze the rest. Scoop desired portions and microwave or simmer for 3 minutes. Dinner handled.',
      icon: Utensils,
      tag: 'Instant Dinner'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-white border-y border-maize-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-paprika-600 bg-paprika-50 px-3 py-1 rounded-full border border-paprika-200">
            The Weekly Rhythm
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            How HomeBatch powers your home
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            No daily delivery scrambles. A predictable weekly operating system for your kitchen.
          </p>
        </div>

        {/* Steps — 1 col on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-5 sm:p-6 bg-maize-50 border border-maize-200/80 hover:border-paprika-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-2xl sm:text-3xl text-paprika-600/40 group-hover:text-paprika-600 transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-charcoal-700 border border-maize-200">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-white shadow-soft flex items-center justify-center text-paprika-600 border border-maize-200 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-charcoal-900">
                      {step.title}
                    </h3>
                    <div className="text-xs font-bold text-forest-700 mt-0.5">{step.subtitle}</div>
                    <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
