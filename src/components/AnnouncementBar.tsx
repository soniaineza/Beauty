import { useI18n } from '@/i18n/types';

export function AnnouncementBar() {
  const { t } = useI18n();
  return (
    <div className="bg-espresso-900 text-ivory-100 text-center py-2.5 px-4">
      <p className="text-xs sm:text-[0.8rem] tracking-wide font-light">
        {t.announcement}
      </p>
    </div>
  );
}
