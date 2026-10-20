import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { useI18n } from '@/i18n/types';

export function FAQ() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-ivory-100/60">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-10 reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="section-eyebrow mb-3">{t.faq.eyebrow}</p>
          <h2 className="text-heading font-serif font-semibold text-espresso-900">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-espresso-700/10 bg-ivory-50 overflow-hidden transition-shadow duration-300 hover:shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-espresso-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-burgundy-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-espresso-700/70 leading-relaxed">
                      {faq.answer}
                    </p>
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
