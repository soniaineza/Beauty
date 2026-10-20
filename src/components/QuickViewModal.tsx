import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import type { Product } from '@/types';
import { formatRWF, whatsappUrl, productInquiryMessage } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function QuickViewModal({ product, onClose, onAddToCart }: QuickViewModalProps) {
  const { t } = useI18n();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [product]);

  if (!product) return null;

  const badgeColors: Record<string, string> = {
    'New': 'bg-champagne-300 text-espresso-900',
    'Best Seller': 'bg-burgundy-600 text-ivory-50',
  };

  const badgeText = product.badge === 'New' ? t.badges.new : product.badge === 'Best Seller' ? t.badges.bestSeller : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-espresso-950/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative w-full max-w-3xl bg-ivory-50 rounded-3xl shadow-2xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-ivory-50/90 text-espresso-800 hover:text-burgundy-600 transition-colors shadow-sm"
          aria-label={t.quickView.closeAria}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid sm:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square sm:aspect-auto sm:h-full bg-ivory-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className={`product-badge absolute top-4 left-4 ${badgeColors[product.badge]}`}>
                {badgeText}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col">
            <p className="text-xs text-espresso-700/50 uppercase tracking-wider mb-2">
              {t.categories[product.category]}
            </p>
            <h2 className="font-serif text-2xl font-semibold text-espresso-900 leading-tight">
              {product.name}
            </h2>
            <p className="mt-3 font-serif text-xl font-semibold text-burgundy-600">
              {formatRWF(product.price)}
            </p>
            <p className="mt-4 text-sm text-espresso-700/70 leading-relaxed">
              {product.description}
            </p>

            <p className="mt-4 text-xs text-espresso-700/50 italic">
              {t.quickView.sampleNote}
            </p>

            {/* Quantity selector */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-espresso-700/70">{t.quickView.quantity}</span>
              <div className="flex items-center border border-espresso-700/15 rounded-full">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-2 text-espresso-800 hover:text-burgundy-600 transition-colors"
                  aria-label={t.quickView.decreaseAria}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 text-sm font-medium text-espresso-900 min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-2 text-espresso-800 hover:text-burgundy-600 transition-colors"
                  aria-label={t.quickView.increaseAria}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-6 space-y-2.5">
              <button
                onClick={() => { onAddToCart(product, quantity); onClose(); }}
                className="btn-primary w-full"
              >
                <ShoppingBag className="w-4 h-4" />
                {t.quickView.addToBag}
              </button>
              <a
                href={whatsappUrl(productInquiryMessage(product.name, product.price, t))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {t.quickView.inquireWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
