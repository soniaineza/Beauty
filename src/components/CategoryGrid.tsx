import { CATEGORIES } from '@/data';
import type { ProductCategory } from '@/types';
import { useReveal } from '@/lib/useReveal';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/i18n/types';

interface CategoryGridProps {
  onCategorySelect: (category: ProductCategory) => void;
}

export function CategoryGrid({ onCategorySelect }: CategoryGridProps) {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="categories" className="py-16 sm:py-24 bg-ivory-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="section-eyebrow mb-3">{t.categoryGrid.eyebrow}</p>
          <h2 className="text-heading font-serif font-semibold text-espresso-900">
            {t.categoryGrid.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-espresso-700/60 max-w-lg mx-auto">
            {t.categoryGrid.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => onCategorySelect(cat.name)}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-ivory-200"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <img
                src={cat.image}
                alt={t.categories[cat.name]}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-espresso-950/10 to-transparent transition-opacity duration-300 group-hover:from-espresso-950/80" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-left">
                <h3 className="font-serif text-sm sm:text-lg font-medium text-ivory-50 leading-tight">
                  {t.categories[cat.name]}
                </h3>
                <p className="hidden sm:block text-xs text-ivory-100/70 mt-1 line-clamp-1">
                  {t.categoryDescriptions[cat.name]}
                </p>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-champagne-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t.categoryGrid.shopNow} <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
