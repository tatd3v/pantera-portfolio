'use client';

import { useTranslations } from 'next-intl';

export default function AboutTimeline() {
  const t = useTranslations('about.timeline');

  return (
    <section className="py-32 px-6 md:px-20 overflow-hidden" id="timeline">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <h2 className="text-7xl font-black text-slate-100 tracking-tighter">
            {t('title')}
          </h2>
          <p className="text-primary font-bold uppercase tracking-widest text-sm border-b border-primary pb-2">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          <div className="pt-12 border-t border-primary/30 relative">
            <span className="absolute -top-6 left-0 text-5xl font-black text-primary/20">
              {t('events.event1.year')}
            </span>
            <h3 className="text-xl font-bold text-white">
              {t('events.event1.title')}
            </h3>
            <p className="text-slate-500 mt-4 text-sm">
              {t('events.event1.description')}
            </p>
          </div>
          <div className="pt-24 border-t border-primary/30 relative md:mt-12">
            <span className="absolute top-6 left-0 text-5xl font-black text-primary/20">
              {t('events.event2.year')}
            </span>
            <h3 className="text-xl font-bold text-white">
              {t('events.event2.title')}
            </h3>
            <p className="text-slate-500 mt-4 text-sm">
              {t('events.event2.description')}
            </p>
          </div>
          <div className="pt-12 border-t border-primary/30 relative">
            <span className="absolute -top-6 left-0 text-5xl font-black text-primary/20">
              {t('events.event3.year')}
            </span>
            <h3 className="text-xl font-bold text-white">
              {t('events.event3.title')}
            </h3>
            <p className="text-slate-500 mt-4 text-sm">
              {t('events.event3.description')}
            </p>
          </div>
          <div className="pt-24 border-t border-primary/30 relative md:mt-12">
            <span className="absolute top-6 left-0 text-5xl font-black text-primary/20">
              {t('events.event4.year')}
            </span>
            <h3 className="text-xl font-bold text-white">
              {t('events.event4.title')}
            </h3>
            <p className="text-slate-500 mt-4 text-sm">
              {t('events.event4.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
