'use client';

import { useTranslations } from 'next-intl';

export default function AboutNarrative() {
  const t = useTranslations('about.narrative');

  return (
    <section className="py-32 px-6 md:px-20 relative" id="narrative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-y-12">
        <div className="md:col-span-1 hidden md:flex items-center justify-center">
          <p className="vertical-text text-primary text-sm font-bold tracking-widest uppercase opacity-40">
            {t('sideLabel')}
          </p>
        </div>
        <div className="md:col-span-5 relative z-10">
          <div className="p-10 glass rounded-2xl md:-mr-24 md:mt-12 border border-primary/10">
            <h3 className="text-4xl font-bold mb-8 text-slate-100">
              {t('title')}
            </h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>{t('paragraph1')}</p>
              <p className="border-l-2 border-primary pl-6 py-2 italic text-slate-100">
                {t('highlight')}
              </p>
              <p>{t('paragraph2')}</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 relative">
          <div 
            className="aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: 'url("https://ik.imagekit.io/tats26/PNT/pantera-hero-2")' }}
          />
        </div>
      </div>
    </section>
  );
}
