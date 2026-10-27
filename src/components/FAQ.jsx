import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="faqs" className="py-12 md:py-20 bg-maize-100/60 border-t border-maize-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-paprika-600 bg-paprika-50 px-3 py-1 rounded-full border border-paprika-200">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Everything about our Lagos weekly batch cadence, tubs, and storage.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-maize-300 shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 focus:outline-none"
                >
                  <span className="font-display font-extrabold text-sm sm:text-base text-charcoal-900 text-left">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-paprika-50 text-paprika-600' : 'text-charcoal-400'
                  }`}>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-maize-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
