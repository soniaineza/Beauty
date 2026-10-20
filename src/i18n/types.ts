import { createContext, useContext } from 'react';
import type { ProductCategory } from '@/types';

export type Lang = 'en' | 'rw' | 'fr';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface InfoItem {
  title: string;
  description: string;
}

export interface SocialTile {
  alt: string;
  label: string;
}

export interface Translations {
  // Announcement
  announcement: string;

  // Nav
  nav: {
    home: string;
    shop: string;
    categories: string;
    wholesale: string;
    about: string;
    contact: string;
    menu: string;
    searchPlaceholder: string;
    noResults: string;
    whatsappUsAt: string;
    openMenu: string;
    closeMenu: string;
    closeSearch: string;
    searchProducts: string;
    shoppingBag: (count: number) => string;
    goToHome: string;
  };

  // Hero
  hero: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    body: string;
    exploreCta: string;
    chatCta: string;
    categoriesLabel: string;
    localLabel: string;
    kigaliRwanda: string;
    retailLabel: string;
    andWholesale: string;
  };

  // Category grid
  categoryGrid: {
    eyebrow: string;
    title: string;
    subtitle: string;
    shopNow: string;
  };

  // Categories (translated names)
  categories: Record<ProductCategory, string>;
  categoriesAll: string;
  categoryDescriptions: Record<ProductCategory, string>;

  // Product grid
  productGrid: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    sortFeatured: string;
    sortPriceLow: string;
    sortPriceHigh: string;
    sortNameAz: string;
    noResults: string;
    resetFilters: string;
  };

  // Product card
  productCard: {
    quickView: string;
    addToBag: string;
    inquireAria: (name: string) => string;
    quickViewAria: (name: string) => string;
  };

  // Badges
  badges: {
    new: string;
    bestSeller: string;
  };

  // Quick view modal
  quickView: {
    closeAria: string;
    sampleNote: string;
    quantity: string;
    decreaseAria: string;
    increaseAria: string;
    addToBag: string;
    inquireWhatsapp: string;
  };

  // Cart
  cart: {
    title: (count: number) => string;
    closeAria: string;
    emptyTitle: string;
    emptyBody: string;
    exploreCta: string;
    removeAria: (name: string) => string;
    decreaseAria: string;
    increaseAria: string;
    clearAll: string;
    subtotal: string;
    confirmNote: string;
    checkoutWhatsapp: string;
    continueShopping: string;
  };

  // WhatsApp messages
  whatsapp: {
    general: string;
    productInquiry: (name: string, price: string) => string;
    cartCheckout: (items: { name: string; qty: number; price: string; lineTotal: string }[], subtotal: string) => string;
    wholesale: (name: string, business: string, phone: string, interests: string, message: string) => string;
    floatingLabel: string;
    floatingAria: string;
  };

  // Wholesale
  wholesale: {
    eyebrow: string;
    title: string;
    body: string;
    benefits: BenefitItem[];
    formTitle: string;
    formBody: string;
    nameLabel: string;
    namePlaceholder: string;
    businessLabel: string;
    businessPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    interestsLabel: string;
    interestsPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    requiredMark: string;
    errors: {
      name: string;
      business: string;
      phone: string;
      interests: string;
    };
    successTitle: string;
    successBody: string;
    successBtn: string;
    editForm: string;
  };

  // About
  about: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    local: string;
    basedInKigali: string;
    personal: string;
    oneOnOne: string;
    exploreCta: string;
  };

  // Social
  social: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tiles: SocialTile[];
    followUs: string;
    instagram: string;
    instagramAria: string;
    tiktok: string;
    tiktokAria: string;
    linksNote: string;
  };

  // Trust
  trust: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: InfoItem[];
  };

  // FAQ
  faq: {
    eyebrow: string;
    title: string;
    items: FAQItem[];
  };

  // Footer
  footer: {
    ctaTitle: string;
    ctaBody: string;
    messageUs: string;
    brandTagline: string;
    navigate: string;
    categories: string;
    getInTouch: string;
    hours: string;
    hoursSunday: string;
    rights: (year: number, name: string) => string;
    disclaimer: string;
  };

  // Products
  products: Record<string, { name: string; description: string }>;

  // Language switcher
  language: {
    label: string;
    aria: string;
  };
}

export interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
