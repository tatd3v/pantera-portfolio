'use client';

import { useTranslations } from 'next-intl';

export default function AboutHero() {
  const t = useTranslations('about.hero');

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-20 overflow-hidden pattern-bg">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 items-start md:items-center">
        <div className="md:col-span-7 z-10 flex flex-col justify-center">
          <span className="text-primary font-bold tracking-[0.4em] uppercase mb-4 block">
            {t('subtitle')}
          </span>
          <h1 className="text-slate-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
            {t('title.line1')} <br />
            {t('title.line2')} <br />
            {t('title.line3')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40">
              {t('title.line4')}
            </span>
          </h1>
          <div className="max-w-md">
            <p className="text-slate-400 text-xl leading-relaxed italic">
              "{t('quote')}"
            </p>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div 
            className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden shadow-[40px_40px_0px_0px_rgba(222,177,43,0.1)] border border-primary/20 bg-center bg-cover"
            style={{ backgroundImage: 'url("https://ik.imagekit.io/tats26/PNT/pantera-hero-1")' }}
          />
          <div className="absolute -bottom-10 -left-10 text-primary/10 text-[12rem] font-black select-none z-0">
            PNT
          </div>
        </div>
      </div>
    </section>
  );
}
