import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-maize-100/60 border-t border-maize-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-paprika-600 bg-paprika-50 px-3 py-1 rounded-full border border-paprika-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Everything you need to know about our Lagos weekly batch cadence, tubs, and storage.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-maize-300 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-extrabold text-base text-charcoal-900">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-200 ${isOpen ? 'rotate-180 bg-paprika-50 text-paprika-600' : 'text-charcoal-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-maize-100 animate-fade-in">
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
