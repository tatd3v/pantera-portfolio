'use client';

import { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import { useTranslations } from 'next-intl';

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations('music');

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <Navbar />

      <main className="pt-20 px-6 md:px-20 py-12">
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

            {/* Featured Audio Player */}
            <div className="glass rounded-2xl p-8 mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">{t('hero.latestMix')}</h3>
                  <p className="text-slate-400">{t('hero.subtitle')}</p>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center justify-center w-16 h-16 bg-primary rounded-full text-background-dark hover:brightness-110 transition-all"
                >
                  <span className="material-symbols-outlined text-3xl">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
              </div>

              {/* Audio Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3 rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-500">
                  <span>2:45</span>
                  <span>8:20</span>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-center gap-6">
                <button className="text-slate-400 hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined">shuffle</span>
                </button>
                <button className="text-slate-400 hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined">skip_previous</span>
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-background-dark hover:brightness-110 transition-all"
                >
                  <span className="material-symbols-outlined">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <button className="text-slate-400 hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined">skip_next</span>
                </button>
                <button className="text-slate-400 hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined">repeat</span>
                </button>
              </div>
            </div>
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
              {[
                { title: "Electronic Journey", duration: "45:30", plays: "12.5K" },
                { title: "Deep House Sessions", duration: "38:15", plays: "8.2K" },
                { title: "Techno Warehouse", duration: "52:45", plays: "15.7K" },
                { title: "Ambient Explorations", duration: "41:20", plays: "6.8K" },
                { title: "Progressive Elements", duration: "48:00", plays: "9.4K" },
                { title: "Underground Sounds", duration: "44:30", plays: "11.2K" },
              ].map((mix, index) => (
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
              {[
                { date: "MAR 15", venue: "Club Nexus", location: "Berlin, Germany", title: "Electronic Music Festival" },
                { date: "MAR 22", venue: "Warehouse District", location: "Amsterdam, NL", title: "Techno Underground" },
                { date: "APR 05", venue: "Sky Lounge", location: "London, UK", title: "Progressive House Night" },
                { date: "APR 18", venue: "Beach Club", location: "Ibiza, Spain", title: "Summer Opening Party" },
              ].map((event, index) => (
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
              <a href="#" className="glass rounded-xl p-6 hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined text-3xl text-primary mb-2">library_music</span>
                <div className="text-sm font-bold">{t('platforms.mixcloud')}</div>
              </a>
              <a href="#" className="glass rounded-xl p-6 hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined text-3xl text-primary mb-2">headphones</span>
                <div className="text-sm font-bold">{t('platforms.soundcloud')}</div>
              </a>
              <a href="#" className="glass rounded-xl p-6 hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined text-3xl text-primary mb-2">music_note</span>
                <div className="text-sm font-bold">{t('platforms.spotify')}</div>
              </a>
              <a href="#" className="glass rounded-xl p-6 hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined text-3xl text-primary mb-2">smart_display</span>
                <div className="text-sm font-bold">{t('platforms.youtube')}</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-10 border-t border-primary/10 bg-background-dark text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
<img
              src="/logo_trans.svg"
              alt="Pantera"
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-24" />
            <p> 2024 {t('footer.tagline')}</p>
          </div>
          <div className="flex gap-8 font-bold text-xs uppercase tracking-widest">
            <a className="hover:text-primary transition-colors" href="#">{t('footer.pressKit')}</a>
            <a className="hover:text-primary transition-colors" href="#">{t('footer.privacy')}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
