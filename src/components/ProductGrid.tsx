import { useState, useMemo } from 'react';import { Search, SlidersHorizontal } from 'lucide-react';
import type { Product, ProductCategory } from '@/types';
import { ProductCard } from '@/components/ProductCard';
import { useReveal } from '@/lib/useReveal';
import { useI18n } from '@/i18n/types';
import { useLocalizedProducts } from '@/lib/useLocalized';

interface ProductGridProps {
  selectedCategory: ProductCategory | 'All';
  onCategoryChange: (category: ProductCategory | 'All') => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name-az';

const CATEGORY_KEYS: (ProductCategory | 'All')[] = [
  'All',
  'Skincare',
  'Makeup',
  'Haircare',
  'Body Care',
  'Beauty Accessories',
  'Fragrance',
];

export function ProductGrid({
  selectedCategory,
  onCategoryChange,
  onQuickView,
  onAddToCart,
}: ProductGridProps) {
  const { t } = useI18n();
  const products = useLocalizedProducts();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('featured');
  const { ref, visible } = useReveal<HTMLDivElement>();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) || t.categories[p.category].toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => {
          if (a.badge === 'Best Seller' && b.badge !== 'Best Seller') return -1;
          if (b.badge === 'Best Seller' && a.badge !== 'Best Seller') return 1;
          if (a.badge === 'New' && b.badge !== 'New') return -1;
          if (b.badge === 'New' && a.badge !== 'New') return 1;
          return 0;
        });
    }

    return result;
  }, [products, selectedCategory, search, sort, t]);

  return (
    <section id="shop" className="py-16 sm:py-24 bg-ivory-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-10 reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="section-eyebrow mb-3">{t.productGrid.eyebrow}</p>
          <h2 className="text-heading font-serif font-semibold text-espresso-900">
            {t.productGrid.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-espresso-700/60 max-w-lg mx-auto">
            {t.productGrid.subtitle}
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-8 space-y-4">
          {/* Category pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORY_KEYS.map(cat => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-burgundy-600 text-ivory-50'
                    : 'bg-ivory-50 text-espresso-700/70 hover:bg-ivory-200 border border-espresso-700/10'
                }`}
              >
                {cat === 'All' ? t.categoriesAll : t.categories[cat]}
              </button>
            ))}
          </div>

          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso-700/40" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={t.productGrid.searchPlaceholder}
                className="w-full rounded-full border border-espresso-700/15 bg-ivory-50 pl-10 pr-4 py-2.5 text-sm text-espresso-900 placeholder:text-espresso-700/40 focus:border-burgundy-500 focus:outline-none focus:ring-1 focus:ring-burgundy-500/30 transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-espresso-700/50 flex-shrink-0" />
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortOption)}
                className="rounded-full border border-espresso-700/15 bg-ivory-50 px-4 py-2.5 text-sm text-espresso-900 focus:border-burgundy-500 focus:outline-none focus:ring-1 focus:ring-burgundy-500/30 transition-colors cursor-pointer"
              >
                <option value="featured">{t.productGrid.sortFeatured}</option>
                <option value="price-low">{t.productGrid.sortPriceLow}</option>
                <option value="price-high">{t.productGrid.sortPriceHigh}</option>
                <option value="name-az">{t.productGrid.sortNameAz}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-espresso-700/50 text-sm">
              {t.productGrid.noResults}
            </p>
            <button
              onClick={() => { setSearch(''); onCategoryChange('All'); }}
              className="mt-4 btn-ghost"
            >
              {t.productGrid.resetFilters}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
