import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { whatsappUrl, generalInquiryMessage } from '@/lib/utils';
import type { ProductCategory } from '@/types';
import { useI18n } from '@/i18n/types';

interface FooterProps {
  onNavigate: (section: string) => void;
  onCategorySelect: (category: ProductCategory) => void;
}

const CATEGORY_LINKS: ProductCategory[] = [
  'Skincare',
  'Makeup',
  'Haircare',
  'Body Care',
  'Beauty Accessories',
  'Fragrance',
];

export function Footer({ onNavigate, onCategorySelect }: FooterProps) {
  const { t } = useI18n();

  const navLinks = [
    { label: t.nav.home, section: 'home' },
    { label: t.nav.shop, section: 'shop' },
    { label: t.nav.wholesale, section: 'wholesale' },
    { label: t.nav.about, section: 'about' },
  ];

  return (
    <footer id="contact" className="bg-espresso-950 text-ivory-100">
      {/* Contact CTA band */}
      <div className="border-b border-ivory-50/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory-50 mb-2">
                {t.footer.ctaTitle}
              </h2>
              <p className="text-sm text-ivory-100/60 max-w-md">
                {t.footer.ctaBody}
              </p>
            </div>
            <a
              href={whatsappUrl(generalInquiryMessage(t))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t.footer.messageUs}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-xl font-semibold tracking-wider text-ivory-50 leading-none block">
                BEAUTY LINE
              </span>
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-400 mt-0.5 leading-none block">
                K G L
              </span>
            </div>
            <p className="text-sm text-ivory-100/50 leading-relaxed max-w-xs">
              {t.footer.brandTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-champagne-400 mb-4">
              {t.footer.navigate}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.section}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-sm text-ivory-100/60 hover:text-ivory-50 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm text-ivory-100/60 hover:text-ivory-50 transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-champagne-400 mb-4">
              {t.footer.categories}
            </h3>
            <ul className="space-y-2.5">
              {CATEGORY_LINKS.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => onCategorySelect(cat)}
                    className="text-sm text-ivory-100/60 hover:text-ivory-50 transition-colors"
                  >
                    {t.categories[cat]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-champagne-400 mb-4">
              {t.footer.getInTouch}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-ivory-100/60">{SITE_CONFIG.city}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${SITE_CONFIG.phoneIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ivory-100/60 hover:text-ivory-50 transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-ivory-100/60">{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-ivory-100/60">
                  <p>{t.footer.hours}</p>
                  <p className="text-ivory-100/40 text-xs mt-0.5">{t.footer.hoursSunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-ivory-50/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ivory-100/40">
            {t.footer.rights(new Date().getFullYear(), SITE_CONFIG.businessName)}
          </p>
          <p className="text-xs text-ivory-100/30 italic text-center sm:text-right">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
