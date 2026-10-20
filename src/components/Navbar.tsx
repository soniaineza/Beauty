import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG } from '@/data';
import type { Product } from '@/types';
import { useI18n } from '@/i18n/types';
import { useLocalizedProducts } from '@/lib/useLocalized';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (section: string) => void;
  onProductSelect: (product: Product) => void;
}

export function Navbar({ cartCount, onCartClick, onNavigate, onProductSelect }: NavbarProps) {
  const { t } = useI18n();
  const products = useLocalizedProducts();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen, searchOpen]);

  const navLinks = [
    { label: t.nav.home, section: 'home' },
    { label: t.nav.shop, section: 'shop' },
    { label: t.nav.categories, section: 'categories' },
    { label: t.nav.wholesale, section: 'wholesale' },
    { label: t.nav.about, section: 'about' },
    { label: t.nav.contact, section: 'contact' },
  ];

  const filteredProducts = searchQuery.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.categories[p.category].toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleNavClick = (section: string) => {
    setMobileOpen(false);
    onNavigate(section);
  };

  const handleProductClick = (product: Product) => {
    setSearchOpen(false);
    setSearchQuery('');
    onNavigate('shop');
    setTimeout(() => onProductSelect(product), 300);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm'
            : 'bg-ivory-50'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2 text-espresso-800 hover:text-burgundy-600 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.openMenu}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex flex-col items-center lg:items-start lg:flex-shrink-0 group"
              aria-label={t.nav.goToHome}
            >
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-wider text-espresso-900 leading-none">
                BEAUTY LINE
              </span>
              <span className="font-sans text-[0.6rem] sm:text-[0.65rem] tracking-[0.3em] text-champagne-500 mt-0.5 leading-none">
                K G L
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <button
                  key={link.section}
                  onClick={() => handleNavClick(link.section)}
                  className="text-sm font-medium text-espresso-800 hover:text-burgundy-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-burgundy-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-espresso-800 hover:text-burgundy-600 transition-colors"
                aria-label={t.nav.searchProducts}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={onCartClick}
                className="relative p-2 text-espresso-800 hover:text-burgundy-600 transition-colors"
                aria-label={t.nav.shoppingBag(cartCount)}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-burgundy-600 text-ivory-50 text-[0.65rem] font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-espresso-950/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 max-w-[80vw] bg-ivory-50 shadow-xl animate-slide-in-left flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-espresso-700/10">
              <span className="font-serif text-lg font-semibold text-espresso-900">{t.nav.menu}</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-espresso-800 hover:text-burgundy-600"
                aria-label={t.nav.closeMenu}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {navLinks.map(link => (
                <button
                  key={link.section}
                  onClick={() => handleNavClick(link.section)}
                  className="block w-full text-left px-5 py-3.5 text-espresso-800 hover:bg-ivory-100 hover:text-burgundy-600 transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="p-5 border-t border-espresso-700/10">
              <p className="text-xs text-espresso-700/60 mb-1">{t.nav.whatsappUsAt}</p>
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneIntl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-burgundy-600"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-espresso-950/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setSearchOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-ivory-50 shadow-xl animate-fade-in">
            <div className="mx-auto max-w-2xl px-4 py-6">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-espresso-700/50 flex-shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={t.nav.searchPlaceholder}
                  className="flex-1 bg-transparent text-base text-espresso-900 placeholder:text-espresso-700/40 focus:outline-none py-2"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1.5 text-espresso-800 hover:text-burgundy-600"
                  aria-label={t.nav.closeSearch}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {filteredProducts.length > 0 && (
                <div className="mt-4 space-y-1">
                  {filteredProducts.map(product => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-ivory-100 transition-colors text-left"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-espresso-900 truncate">{product.name}</p>
                        <p className="text-xs text-espresso-700/60">{t.categories[product.category]}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {searchQuery.trim() && filteredProducts.length === 0 && (
                <p className="mt-4 text-sm text-espresso-700/50">{t.nav.noResults}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
