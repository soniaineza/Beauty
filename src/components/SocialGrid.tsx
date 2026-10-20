import { Instagram, Music2 } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { useI18n } from '@/i18n/types';

const SOCIAL_IMAGES = [
  'https://images.pexels.com/photos/35817115/pexels-photo-35817115.jpeg?auto=compress&cs=tinysrgb&h=650&w=500',
  'https://images.pexels.com/photos/39392892/pexels-photo-39392892.jpeg?auto=compress&cs=tinysrgb&h=650&w=500',
  'https://images.pexels.com/photos/18656575/pexels-photo-18656575.jpeg?auto=compress&cs=tinysrgb&h=650&w=500',
  'https://images.pexels.com/photos/10157845/pexels-photo-10157845.jpeg?auto=compress&cs=tinysrgb&h=650&w=500',
  'https://images.pexels.com/photos/39281912/pexels-photo-39281912.jpeg?auto=compress&cs=tinysrgb&h=650&w=500',
  'https://images.pexels.com/photos/6724510/pexels-photo-6724510.jpeg?auto=compress&cs=tinysrgb&h=650&w=500',
];

export function SocialGrid() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-16 sm:py-24 bg-ivory-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-10 reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="section-eyebrow mb-3">{t.social.eyebrow}</p>
          <h2 className="text-heading font-serif font-semibold text-espresso-900">
            {t.social.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-espresso-700/60 max-w-lg mx-auto">
            {t.social.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {t.social.tiles.map((tile, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-ivory-200 cursor-pointer"
            >
              <img
                src={SOCIAL_IMAGES[idx]}
                alt={tile.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-ivory-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tile.label}
              </span>
              {/* Video icon for tutorial tiles */}
              {(idx === 3 || idx === 5) && (
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-espresso-950/50 backdrop-blur-sm flex items-center justify-center">
                  <Music2 className="w-3.5 h-3.5 text-ivory-50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-espresso-700/60">{t.social.followUs}</span>
          <div className="flex gap-2">
            <button
              className="inline-flex items-center gap-2 rounded-full border border-espresso-700/15 bg-ivory-50 px-4 py-2 text-xs font-medium text-espresso-800 hover:border-burgundy-500/40 hover:text-burgundy-600 transition-colors"
              aria-label={t.social.instagramAria}
            >
              <Instagram className="w-4 h-4" />
              {t.social.instagram}
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-full border border-espresso-700/15 bg-ivory-50 px-4 py-2 text-xs font-medium text-espresso-800 hover:border-burgundy-500/40 hover:text-burgundy-600 transition-colors"
              aria-label={t.social.tiktokAria}
            >
              <Music2 className="w-4 h-4" />
              {t.social.tiktok}
            </button>
          </div>
          <span className="text-xs text-espresso-700/40 italic">
            {t.social.linksNote}
          </span>
        </div>
      </div>
    </section>
  );
}
