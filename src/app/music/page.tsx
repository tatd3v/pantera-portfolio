'use client';

import { useTranslations } from 'next-intl';

export default function MusicPage() {
  const t = useTranslations('music');

  return (
    <main className="min-h-screen pt-20 px-6 md:px-20 py-12">
      {/* Spotify Profile Section */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-8 text-center">
            <span className="text-gradient-gold">{t('platforms.spotify')}</span>
          </h2>
          <div className="glass rounded-2xl p-4 md:p-6">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/2KzYBaVenkQj80YZ3aWIPd?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SoundCloud Profile Section */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-8 text-center">
            <span className="text-gradient-gold">{t('platforms.soundcloud')}</span>
          </h2>
          <div className="glass rounded-2xl p-4 md:p-6">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https://soundcloud.com/pantera-godoy&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true&color=%23deb12b"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
