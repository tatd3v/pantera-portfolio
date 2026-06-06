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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary/20">
          <div className="p-12 border-b md:border-b-0 md:border-r border-primary/20 group hover:bg-primary/5 transition-colors">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-8 block">
              01 / {t('values.value1.label')}
            </span>
            <h4 className="text-2xl font-bold mb-4 text-white">
              {t('values.value1.title')}
            </h4>
            <p className="text-slate-500 group-hover:text-slate-300 transition-colors">
              {t('values.value1.description')}
            </p>
          </div>
          <div className="p-12 border-b md:border-b-0 md:border-r border-primary/20 group hover:bg-primary/5 transition-colors">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-8 block">
              02 / {t('values.value2.label')}
            </span>
            <h4 className="text-2xl font-bold mb-4 text-white">
              {t('values.value2.title')}
            </h4>
            <p className="text-slate-500 group-hover:text-slate-300 transition-colors">
              {t('values.value2.description')}
            </p>
          </div>
          <div className="p-12 group hover:bg-primary/5 transition-colors">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-8 block">
              03 / {t('values.value3.label')}
            </span>
            <h4 className="text-2xl font-bold mb-4 text-white">
              {t('values.value3.title')}
            </h4>
            <p className="text-slate-500 group-hover:text-slate-300 transition-colors">
              {t('values.value3.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
