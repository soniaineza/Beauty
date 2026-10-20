import { useState, useCallback } from 'react';
import type { Product, ProductCategory } from '@/types';
import { useCart } from '@/lib/useCart';
import { I18nProvider } from '@/i18n/I18nProvider';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductGrid } from '@/components/ProductGrid';
import { QuickViewModal } from '@/components/QuickViewModal';
import { CartDrawer } from '@/components/CartDrawer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Wholesale } from '@/components/Wholesale';
import { About } from '@/components/About';
import { SocialGrid } from '@/components/SocialGrid';
import { TrustSection } from '@/components/TrustSection';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

function AppContent() {
  const cart = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');

  const scrollToSection = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleCategorySelect = useCallback((category: ProductCategory) => {
    setSelectedCategory(category);
    scrollToSection('shop');
  }, [scrollToSection]);

  const handleContinueShopping = useCallback(() => {
    cart.setIsOpen(false);
    scrollToSection('shop');
  }, [cart, scrollToSection]);

  return (
    <div className="min-h-screen bg-ivory-50">
      <AnnouncementBar />
      <Navbar
        cartCount={cart.itemCount}
        onCartClick={() => cart.setIsOpen(true)}
        onNavigate={scrollToSection}
        onProductSelect={setQuickViewProduct}
      />

      <main>
        <Hero onExplore={() => scrollToSection('shop')} />
        <CategoryGrid onCategorySelect={handleCategorySelect} />
        <ProductGrid
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onQuickView={setQuickViewProduct}
          onAddToCart={cart.addToCart}
        />
        <Wholesale />
        <About onShop={() => scrollToSection('shop')} />
        <SocialGrid />
        <TrustSection />
        <FAQ />
      </main>

      <Footer
        onNavigate={scrollToSection}
        onCategorySelect={handleCategorySelect}
      />

      {/* Overlays */}
      <CartDrawer
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        subtotal={cart.subtotal}
        itemCount={cart.itemCount}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeItem}
        onClearCart={cart.clearCart}
        onContinueShopping={handleContinueShopping}
      />
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={cart.addToCart}
      />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
