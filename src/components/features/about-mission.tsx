'use client';

import { useTranslations } from 'next-intl';

export default function AboutMission() {
  const t = useTranslations('about.mission');

  return (
    <section className="py-32 px-6 md:px-20 bg-background-dark/40" id="mission">
      <div className="max-w-6xl mx-auto">
        <div className="relative text-center mb-24">
          <span className="material-symbols-outlined text-primary/20 text-[10rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            format_quote
          </span>
          <h2 className="relative z-10 text-4xl md:text-6xl font-black text-slate-100 italic tracking-tight leading-tight max-w-4xl mx-auto px-4">
            "{t('quote.text1')} <span className="text-primary">{t('quote.highlight')}</span> {t('quote.text2')}"
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 border border-primary/20 group hover:bg-primary/5 transition-colors">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
              01 / {t('reflections.reflection1.title')}
            </span>
            <p className="text-slate-300 leading-relaxed">
              {t('reflections.reflection1.text')}
            </p>
          </div>
          <div className="p-8 border border-primary/20 group hover:bg-primary/5 transition-colors">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
              02 / {t('reflections.reflection2.title')}
            </span>
            <p className="text-slate-300 leading-relaxed">
              {t('reflections.reflection2.text')}
            </p>
          </div>
          <div className="p-8 border border-primary/20 group hover:bg-primary/5 transition-colors">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
              03 / {t('reflections.reflection3.title')}
            </span>
            <p className="text-slate-300 leading-relaxed">
              {t('reflections.reflection3.text')}
            </p>
          </div>
          <div className="p-8 border border-primary/20 group hover:bg-primary/5 transition-colors">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
              04 / {t('reflections.reflection4.title')}
            </span>
            <p className="text-slate-300 leading-relaxed">
              {t('reflections.reflection4.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
