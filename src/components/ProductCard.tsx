import { Eye, Plus } from 'lucide-react';
import type { Product } from '@/types';
import { formatRWF, whatsappUrl, productInquiryMessage } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useI18n } from '@/i18n/types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  const { t } = useI18n();

  const badgeColors: Record<string, string> = {
    'New': 'bg-champagne-300 text-espresso-900',
    'Best Seller': 'bg-burgundy-600 text-ivory-50',
  };

  const badgeText = product.badge === 'New' ? t.badges.new : product.badge === 'Best Seller' ? t.badges.bestSeller : '';

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-ivory-200">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className={`product-badge absolute top-3 left-3 ${badgeColors[product.badge]}`}>
            {badgeText}
          </span>
        )}

        {/* Quick view overlay */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 flex items-center justify-center bg-espresso-950/0 group-hover:bg-espresso-950/20 transition-all duration-300"
          aria-label={t.productCard.quickViewAria(product.name)}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory-50/95 px-4 py-2 text-xs font-medium uppercase tracking-wider text-espresso-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
            <Eye className="w-3.5 h-3.5" />
            {t.productCard.quickView}
          </span>
        </button>
      </div>

      {/* Details */}
      <div className="mt-3.5 flex flex-col flex-1">
        <p className="text-xs text-espresso-700/50 uppercase tracking-wider mb-1">
          {t.categories[product.category]}
        </p>
        <h3 className="text-sm sm:text-base font-medium text-espresso-900 leading-snug">
          {product.name}
        </h3>
        <p className="mt-1.5 font-serif text-base sm:text-lg font-semibold text-burgundy-600">
          {formatRWF(product.price)}
        </p>

        {/* Actions */}
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-espresso-800 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-ivory-50 transition-all duration-300 hover:bg-burgundy-600 active:scale-[0.97]"
          >
            <Plus className="w-3.5 h-3.5" />
            {t.productCard.addToBag}
          </button>
          <a
            href={whatsappUrl(productInquiryMessage(product.name, product.price, t))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#25D366]/40 px-3 py-2.5 text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
            aria-label={t.productCard.inquireAria(product.name)}
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
