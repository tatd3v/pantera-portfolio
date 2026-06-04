'use client';

import AudioPlayer from '@/components/ui/audio-player';
import { useTranslations } from 'next-intl';
import { MIXES, EVENTS, SOCIAL_PLATFORMS } from '@/constants/music';

export default function MusicPage() {
  const t = useTranslations('music');

  return (
    <main className="min-h-screen pt-20 px-6 md:px-20 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
              {t.rich('hero.title', {
                music: (chunks) => <span className="text-gradient-gold">{chunks}</span>
              })}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <AudioPlayer
              title={t('hero.latestMix')}
              subtitle={t('hero.subtitle')}
            />
          </div>
        </section>

        {/* Mixes Section */}
        <section id="mixes" className="mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-12 text-center">
              {t.rich('mixes.title', {
                mixes: (chunks) => <span className="text-gradient-gold">{chunks}</span>
              })}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MIXES.map((mix, index) => (
                <div key={index} className="glass rounded-xl p-6 hover:bg-white/5 transition-all cursor-pointer group">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent-bronze/20 rounded-lg mb-4 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent-bronze/30 transition-all">
                    <span className="material-symbols-outlined text-4xl text-primary">music_note</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{mix.title}</h3>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>{mix.duration}</span>
                    <span>{mix.plays} {t('mixes.plays')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-12 text-center">
              {t.rich('events.title', {
                events: (chunks) => <span className="text-gradient-gold">{chunks}</span>
              })}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EVENTS.map((event, index) => (
                <div key={index} className="glass rounded-xl p-6 hover:bg-white/5 transition-all">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-black text-primary">{event.date.split(' ')[0]}</div>
                      <div className="text-sm text-slate-400">{event.date.split(' ')[1]}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-100 mb-1">{event.title}</h3>
                      <p className="text-slate-400 mb-2">{event.venue}</p>
                      <p className="text-sm text-slate-500">{event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-12">
              {t.rich('contact.title', {
                touch: (chunks) => <span className="text-gradient-gold">{chunks}</span>
              })}
            </h2>

            <div className="glass rounded-2xl p-8">
              <p className="text-lg text-slate-300 mb-8">
                {t('contact.description')}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-primary text-background-dark rounded-lg font-bold hover:brightness-110 transition-all">
                  <span className="material-symbols-outlined">email</span>
                  {t('contact.email')}
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 glass border border-primary/20 text-slate-100 rounded-lg font-bold hover:bg-primary/20 transition-all">
                  <span className="material-symbols-outlined">phone</span>
                  {t('contact.phone')}
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 glass border border-primary/20 text-slate-100 rounded-lg font-bold hover:bg-primary/20 transition-all">
                  <span className="material-symbols-outlined">chat</span>
                  {t('contact.whatsapp')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Links */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-100 mb-8">{t('platforms.title')}</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SOCIAL_PLATFORMS.map((platform) => (
                <a key={platform.name} href={platform.href} className="glass rounded-xl p-6 hover:bg-white/5 transition-all group">
                  <span className="material-symbols-outlined text-3xl text-primary mb-2">{platform.icon}</span>
                  <div className="text-sm font-bold">{t(platform.name)}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
