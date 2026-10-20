import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { whatsappUrl, generalInquiryMessage } from '@/lib/utils';
import { useI18n } from '@/i18n/types';

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  const { t } = useI18n();

  return (
    <section id="home" className="relative bg-ivory-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[88vh] py-12 lg:py-0">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1 max-w-xl animate-fade-up">
            <p className="section-eyebrow mb-5">
              {t.hero.eyebrow}
            </p>
            <h1 className="text-display font-serif font-semibold text-espresso-900 text-balance">
              {t.hero.headline1}<br />
              <span className="text-burgundy-600 italic">{t.hero.headline2}</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-espresso-700/70 leading-relaxed max-w-md">
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onExplore} className="btn-primary">
                {t.hero.exploreCta}
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={whatsappUrl(generalInquiryMessage(t))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {t.hero.chatCta}
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-espresso-700/10">
              <div className="text-xs text-espresso-700/60">
                <span className="block font-serif text-lg text-espresso-900 font-medium">6+</span>
                {t.hero.categoriesLabel}
              </div>
              <div className="text-xs text-espresso-700/60">
                <span className="block font-serif text-lg text-espresso-900 font-medium">{t.hero.localLabel}</span>
                {t.hero.kigaliRwanda}
              </div>
              <div className="text-xs text-espresso-700/60">
                <span className="block font-serif text-lg text-espresso-900 font-medium">{t.hero.retailLabel}</span>
                {t.hero.andWholesale}
              </div>
            </div>
          </div>

          {/* Right: Image composition */}
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] max-w-md mx-auto lg:max-w-none lg:ml-auto">
              {/* Main image */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-espresso-900/10">
                <img
                  src="https://images.pexels.com/photos/22619770/pexels-photo-22619770.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                  alt={t.hero.eyebrow}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating product card */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 w-36 sm:w-44 bg-ivory-50 rounded-2xl shadow-xl p-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <img
                  src="https://images.pexels.com/photos/38822007/pexels-photo-38822007.jpeg?auto=compress&cs=tinysrgb&h=300&w=300"
                  alt={t.products.p1.name}
                  className="w-full h-20 sm:h-24 rounded-xl object-cover"
                  loading="lazy"
                />
                <p className="mt-2 text-xs font-medium text-espresso-900 truncate">{t.products.p1.name}</p>
                <p className="text-xs text-burgundy-600 font-medium">18,500 RWF</p>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-champagne-200/40 -z-10" />
              <div className="absolute bottom-1/3 -right-6 w-12 h-12 rounded-full bg-rose-200/40 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
