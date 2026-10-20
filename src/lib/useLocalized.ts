import { useI18n } from '@/i18n/types';
import { PRODUCTS, CATEGORIES, SITE_CONFIG } from '@/data';
import type { Product, CategoryCard } from '@/types';

export function useLocalizedProducts(): Product[] {
  const { t } = useI18n();
  return PRODUCTS.map(p => ({
    ...p,
    name: t.products[p.id]?.name ?? p.name,
    description: t.products[p.id]?.description ?? p.description,
    category: p.category,
  }));
}

export function useLocalizedCategories(): CategoryCard[] {
  const { t } = useI18n();
  return CATEGORIES.map(c => ({
    ...c,
    name: c.name,
    description: t.categoryDescriptions[c.name] ?? c.description,
  }));
}

export function useLocalizedSiteConfig() {
  const { t } = useI18n();
  return {
    ...SITE_CONFIG,
    announcement: t.announcement,
    hours: t.footer.hours,
    hoursSunday: t.footer.hoursSunday,
  };
}
