import { useState, useEffect } from 'react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { whatsappUrl, generalInquiryMessage } from '@/lib/utils';
import { useI18n } from '@/i18n/types';

export function FloatingWhatsApp() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl(generalInquiryMessage(t))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.floatingAria}
      className={`fixed bottom-5 right-5 z-30 flex items-center gap-2.5 rounded-full bg-[#25D366] text-white pl-3.5 pr-5 py-3 shadow-lg shadow-[#25D366]/30 transition-all duration-500 hover:bg-[#1DB954] hover:shadow-xl hover:shadow-[#25D366]/40 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <span className="relative flex">
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
        <WhatsAppIcon className="w-6 h-6 relative" />
      </span>
      <span className="text-sm font-medium">{t.whatsapp.floatingLabel}</span>
    </a>
  );
}
