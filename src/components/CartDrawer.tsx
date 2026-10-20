import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import type { CartItem } from '@/types';
import { formatRWF, whatsappUrl, cartCheckoutMessage } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useI18n } from '@/i18n/types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  itemCount: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onContinueShopping: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  subtotal,
  itemCount,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContinueShopping,
}: CartDrawerProps) {
  const { t } = useI18n();

  if (!isOpen) return null;

  const checkoutMessage = cartCheckoutMessage(items, t);

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-espresso-950/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-espresso-700/10 flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-burgundy-600" />
            <h2 className="font-serif text-lg font-semibold text-espresso-900">
              {t.cart.title(itemCount)}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-espresso-800 hover:text-burgundy-600 transition-colors"
            aria-label={t.cart.closeAria}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-ivory-200 flex items-center justify-center mb-5">
              <ShoppingBag className="w-9 h-9 text-espresso-700/30" />
            </div>
            <p className="font-serif text-xl text-espresso-900 mb-2">{t.cart.emptyTitle}</p>
            <p className="text-sm text-espresso-700/60 mb-6 max-w-xs">
              {t.cart.emptyBody}
            </p>
            <button onClick={onContinueShopping} className="btn-primary">
              {t.cart.exploreCta}
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-3.5">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-sm font-medium text-espresso-900 truncate">{item.product.name}</h3>
                        <p className="text-xs text-espresso-700/60 mt-0.5">{t.categories[item.product.category]}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1 text-espresso-700/40 hover:text-burgundy-600 transition-colors flex-shrink-0"
                        aria-label={t.cart.removeAria(item.product.name)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-espresso-700/15 rounded-full">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 text-espresso-800 hover:text-burgundy-600 transition-colors"
                          aria-label={t.cart.decreaseAria}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-sm font-medium text-espresso-900 min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 text-espresso-800 hover:text-burgundy-600 transition-colors"
                          aria-label={t.cart.increaseAria}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-espresso-900">
                        {formatRWF(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={onClearCart}
                className="text-xs text-espresso-700/50 hover:text-burgundy-600 transition-colors underline underline-offset-2"
              >
                {t.cart.clearAll}
              </button>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 border-t border-espresso-700/10 px-5 py-4 space-y-3 bg-ivory-100/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-espresso-700/70">{t.cart.subtotal}</span>
                <span className="font-serif text-xl font-semibold text-espresso-900">{formatRWF(subtotal)}</span>
              </div>
              <p className="text-xs text-espresso-700/50">
                {t.cart.confirmNote}
              </p>
              <a
                href={whatsappUrl(checkoutMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {t.cart.checkoutWhatsapp}
              </a>
              <button onClick={onContinueShopping} className="btn-ghost w-full justify-center">
                {t.cart.continueShopping}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
