'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition, useRef, useEffect } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' }
];

export default function LanguageDropdown() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detectar locale desde la URL actual del navegador
  const [locale, setLocale] = useState<string>('en');
  
  useEffect(() => {
    const currentPath = window.location.pathname;
    const detectedLocale = currentPath.split('/')[1];
    if (detectedLocale === 'en' || detectedLocale === 'es') {
      setLocale(detectedLocale);
    }
  }, []);

  const currentLanguage = languages.find(lang => lang.code === locale);

  const switchLanguage = (newLocale: string) => {
    startTransition(() => {
      const currentPath = window.location.pathname;
      // Reemplazar el locale en la ruta: /es/about -> /en/about
      const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
      setIsOpen(false);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 text-sm uppercase font-semibold text-slate-300 hover:text-primary hover:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300"
      >
        <span className="material-symbols-outlined text-lg">language</span>
        <span>{currentLanguage?.label || 'Language'}</span>
        <span className={`material-symbols-outlined text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 glass rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                disabled={isPending || locale === lang.code}
                className={`px-6 py-3 flex items-center justify-between text-xs uppercase tracking-widest transition-colors ${
                  locale === lang.code
                    ? 'text-primary bg-white/5 cursor-not-allowed opacity-75'
                    : 'text-slate-300 hover:text-primary hover:bg-white/5'
                }`}
              >
                <span>{lang.label}</span>
                {locale === lang.code && (
                  <span className="material-symbols-outlined text-sm">check</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
