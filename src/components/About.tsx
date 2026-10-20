import { useReveal } from '@/lib/useReveal';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/i18n/types';

interface AboutProps {
  onShop: () => void;
}

export function About({ onShop }: AboutProps) {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-16 sm:py-24 bg-ivory-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/9516030/pexels-photo-9516030.jpeg?auto=compress&cs=tinysrgb&h=800&w=650"
                alt={t.about.eyebrow}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent image */}
            <div className="absolute -top-5 -right-5 w-32 h-32 rounded-2xl overflow-hidden shadow-lg hidden sm:block">
              <img
                src="https://images.pexels.com/photos/39281910/pexels-photo-39281910.jpeg?auto=compress&cs=tinysrgb&h=200&w=200"
                alt={t.categories['Skincare']}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-champagne-200/50 -z-10" />
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2 max-w-lg">
            <p className="section-eyebrow mb-3">{t.about.eyebrow}</p>
            <h2 className="text-heading font-serif font-semibold text-espresso-900 mb-5 text-balance">
              {t.about.title}
            </h2>
            <p className="text-sm sm:text-base text-espresso-700/70 leading-relaxed mb-5">
              {t.about.body1}
            </p>
            <p className="text-sm sm:text-base text-espresso-700/70 leading-relaxed mb-8">
              {t.about.body2}
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-l-2 border-burgundy-500/30 pl-4">
                <p className="font-serif text-2xl font-semibold text-espresso-900">{t.about.local}</p>
                <p className="text-xs text-espresso-700/60 mt-0.5">{t.about.basedInKigali}</p>
              </div>
              <div className="border-l-2 border-champagne-400/50 pl-4">
                <p className="font-serif text-2xl font-semibold text-espresso-900">{t.about.personal}</p>
                <p className="text-xs text-espresso-700/60 mt-0.5">{t.about.oneOnOne}</p>
              </div>
            </div>

            <button onClick={onShop} className="btn-primary">
              {t.about.exploreCta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
