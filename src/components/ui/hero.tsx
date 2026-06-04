'use client';

import { useTranslations } from 'next-intl';
import SmoothLink from '@/components/ui/smooth-link';

export default function Hero() {
  const t = useTranslations('home');

  return (
    <section className="relative min-h-[90vh] flex items-end px-6 pb-20 overflow-hidden">
      {/* Background with Logo */}
      <div className="absolute inset-0 z-0 bg-background-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-background-dark/80 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain opacity-20" 
            src="/logo_trans.svg"
            alt="Pantera"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-terracotta/20 border border-accent-terracotta/30 px-3 py-1 rounded-full text-accent-terracotta text-xs font-bold uppercase tracking-widest">
            <span className="size-2 bg-accent-terracotta rounded-full"></span>
            {t('badge')}
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
            {t.rich('hero.title', {
              modern: (chunks) => <span className="text-gradient-gold">{chunks}</span>
            })}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed italic border-l-2 border-primary pl-4">
            {t('hero.tagline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <SmoothLink
              href="/music"
              className="bg-primary text-background-dark px-8 py-4 rounded-xl font-bold flex items-center gap-2 group hover:brightness-110 transition-all"
            >
              {t('buttons.exploreWorks')}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </SmoothLink>
            <a 
              href="#contact" 
              className="glass px-8 py-4 rounded-xl font-bold flex items-center gap-2 border border-white/10 hover:bg-white/5 transition-all"
            >
              {t('buttons.getInTouch')}
              <span className="material-symbols-outlined">play_circle</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
