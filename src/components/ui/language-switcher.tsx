'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (newLocale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      window.location.reload();
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('en')}
        disabled={isPending}
        className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
          locale === 'en'
            ? 'bg-primary text-background-dark'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('es')}
        disabled={isPending}
        className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
          locale === 'es'
            ? 'bg-primary text-background-dark'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        ES
      </button>
    </div>
  );
}
