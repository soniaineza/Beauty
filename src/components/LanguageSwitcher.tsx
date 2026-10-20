import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useI18n } from '@/i18n/types';
import type { Lang } from '@/i18n/types';

const LANG_OPTIONS: { code: Lang; label: string; native: string }[] = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'rw', label: 'RW', native: 'Kinyarwanda' },
  { code: 'fr', label: 'FR', native: 'Français' },
];

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const current = LANG_OPTIONS.find(l => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 rounded-full p-2 text-espresso-800 hover:text-burgundy-600 transition-colors"
        aria-label={t.language.aria}
        aria-expanded={open}
      >
        <Globe className="w-5 h-5" />
        <span className="text-xs font-medium uppercase tracking-wider hidden sm:inline">
          {current.label}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-xl bg-ivory-50 shadow-xl border border-espresso-700/10 overflow-hidden z-50 animate-scale-in">
          {LANG_OPTIONS.map(option => (
            <button
              key={option.code}
              onClick={() => {
                setLang(option.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                lang === option.code
                  ? 'bg-burgundy-600/10 text-burgundy-600'
                  : 'text-espresso-800 hover:bg-ivory-100'
              }`}
            >
              <span>{option.native}</span>
              {lang === option.code && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
