"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/mockData';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-subheadline text-[var(--soft-rose)] text-xl italic mb-4">Got Questions?</p>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-[var(--foreground)]">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--clay-beige)]/20 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--clay-beige)]/30 transition-colors"
              >
                <h3 className="font-headline text-lg font-semibold text-[var(--foreground)] pr-4">
                  {faq.question}
                </h3>
                {openFaq === index ? (
                  <ChevronUp className="text-[var(--soft-rose)] flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-[var(--soft-rose)] flex-shrink-0" size={24} />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5">
                  <p className="font-body text-[var(--foreground)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

