import { ShoppingBag, MessageCircle, CreditCard, Truck, RefreshCw, HelpCircle } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { useI18n } from '@/i18n/types';

const INFO_ICONS = [ShoppingBag, MessageCircle, CreditCard, Truck, RefreshCw, HelpCircle];

export function TrustSection() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-16 sm:py-24 bg-ivory-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="section-eyebrow mb-3">{t.trust.eyebrow}</p>
          <h2 className="text-heading font-serif font-semibold text-espresso-900">
            {t.trust.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-espresso-700/60 max-w-lg mx-auto">
            {t.trust.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.trust.items.map((item, idx) => {
            const Icon = INFO_ICONS[idx];
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-espresso-700/10 bg-ivory-100/40 p-6 transition-all duration-300 hover:border-burgundy-500/20 hover:bg-ivory-100 hover:shadow-md"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className="w-11 h-11 rounded-full bg-burgundy-600/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-burgundy-600/15">
                  <Icon className="w-5 h-5 text-burgundy-600" />
                </div>
                <h3 className="text-sm font-medium text-espresso-900 mb-2">{item.title}</h3>
                <p className="text-sm text-espresso-700/60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
