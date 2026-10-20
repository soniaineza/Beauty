import { SITE_CONFIG } from '@/data';
import type { CartItem } from '@/types';
import type { Translations } from '@/i18n/types';

export function formatRWF(amount: number): string {
  return new Intl.NumberFormat('en-RW').format(amount) + ' RWF';
}

export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.phoneIntl}?text=${encoded}`;
}

export function generalInquiryMessage(t: Translations): string {
  return t.whatsapp.general;
}

export function productInquiryMessage(productName: string, price: number, t: Translations): string {
  return t.whatsapp.productInquiry(productName, formatRWF(price));
}

export function cartCheckoutMessage(items: CartItem[], t: Translations): string {
  const mapped = items.map(item => ({
    name: item.product.name,
    qty: item.quantity,
    price: formatRWF(item.product.price),
    lineTotal: formatRWF(item.product.price * item.quantity),
  }));
  return t.whatsapp.cartCheckout(mapped, formatRWF(
    items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  ));
}

export function wholesaleMessage(name: string, business: string, phone: string, interests: string, messageText: string, t: Translations): string {
  return t.whatsapp.wholesale(name, business, phone, interests, messageText);
}
