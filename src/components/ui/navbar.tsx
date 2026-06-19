'use client';

import { useState } from 'react';
import SmoothLink from '@/components/ui/smooth-link';
import LanguageDropdown from '@/components/ui/language-dropdown';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <SmoothLink href="/" className="flex items-center gap-3 group">
          <img
            src="/logo_trans.svg"
            alt="Pantera"
            className="h-10 w-auto md:h-12 lg:h-16 flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
          />
        </SmoothLink>
        <div className="hidden md:flex items-center gap-10">
          <SmoothLink href="/music" className="text-sm lg:text-base xl:text-lg font-semibold text-slate-300 hover:text-primary hover:scale-105 transition-all duration-300 relative group">
            {t('music')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </SmoothLink>
          {/* <SmoothLink href="#events">{t('events')}</SmoothLink> */}
          {/* <SmoothLink href="#photos">{t('photos')}</SmoothLink> */}
          <SmoothLink href="/about" className="text-sm lg:text-base xl:text-lg font-semibold text-slate-300 hover:text-primary hover:scale-105 transition-all duration-300 relative group">
            {t('about')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </SmoothLink>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden active:scale-95 transition-transform hover:text-primary/80 transition-colors duration-300"
          aria-label="Toggle menu"
          style={{ color: '#fccd46', display: 'flex' }}
        >
          <span className="material-symbols-outlined text-5xl" style={{ color: 'inherit', fontSize: '32px' }}>menu</span>
        </button>

        {/* Desktop Language Dropdown */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageDropdown />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-20 right-0 w-64 bg-background-dark/95 backdrop-blur-md border-l border-primary/10 shadow-2xl z-50 md:hidden">
            <div className="flex flex-col p-6 gap-6">
              <SmoothLink
                href="/music"
                className="text-lg font-semibold text-slate-300 hover:text-primary transition-all duration-300 py-3 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('music')}
              </SmoothLink>
              <SmoothLink
                href="/about"
                className="text-lg font-semibold text-slate-300 hover:text-primary transition-all duration-300 py-3 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </SmoothLink>
              <div className="pt-4">
                <LanguageDropdown />
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
