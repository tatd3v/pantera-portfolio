import Navbar from '@/components/ui/navbar';
import Hero from '@/components/ui/hero';
import SmoothLink from '@/components/ui/smooth-link';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <section className="py-24 px-6 relative" id="music">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="w-12 h-px bg-primary"></span>
                {t('portfolio.title')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Music Card */}
              <SmoothLink
                href="/music"
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass p-6 flex flex-col justify-end border border-white/5 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent-bronze/20 transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">graphic_eq</span>
                  <h3 className="text-2xl font-bold">{t('portfolio.music.title')}</h3>
                  <p className="text-slate-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{t('portfolio.music.description')}</p>
                </div>
              </SmoothLink>

              {/* Events Card */}
              <SmoothLink href="/work/events" className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass p-6 flex flex-col justify-end border border-white/5 hover:border-accent-bronze/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-bronze/30 to-primary/20 transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-accent-bronze text-4xl mb-4">celebration</span>
                  <h3 className="text-2xl font-bold">{t('portfolio.events.title')}</h3>
                  <p className="text-slate-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{t('portfolio.events.description')}</p>
                </div>
              </SmoothLink>

              {/* Photos Card */}
              <SmoothLink href="/work/photos" className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass p-6 flex flex-col justify-end border border-white/5 hover:border-accent-terracotta/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/30 to-accent-bronze/20 transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-accent-terracotta text-4xl mb-4">photo_camera</span>
                  <h3 className="text-2xl font-bold">{t('portfolio.photos.title')}</h3>
                  <p className="text-slate-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{t('portfolio.photos.description')}</p>
                </div>
              </SmoothLink>
            </div>
          </div>
        </section>

        {/* Featured Works Asymmetric Grid */}
        <section className="py-24 px-6 bg-background-dark/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter">{t('featured.title')}</h2>
                <p className="text-slate-400">{t('featured.subtitle')}</p>
              </div>
              <button className="hidden md:block text-primary font-bold border-b-2 border-primary hover:text-white hover:border-white transition-all pb-1">
                {t('featured.viewArchive')}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {/* Large Feature */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-2xl aspect-video md:aspect-auto md:h-[600px]">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent-bronze/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <span className="text-accent-bronze font-bold text-sm tracking-widest uppercase mb-2 block">{t('featured.latestRelease')}</span>
                  <h3 className="text-4xl font-bold mb-4">Midnight Sessions</h3>
                  <button className="flex items-center gap-2 font-bold text-white group-hover:text-primary transition-colors">
                    {t('featured.viewProject')} <span className="material-symbols-outlined">north_east</span>
                  </button>
                </div>
              </div>
              {/* Side Vertical Feature */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl aspect-[3/4] md:h-[600px]">
                <div className="w-full h-full bg-gradient-to-br from-accent-terracotta/30 to-primary/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-accent-terracotta font-bold text-sm tracking-widest uppercase mb-2 block">{t('featured.audio')}</span>
                  <h3 className="text-3xl font-bold mb-4">Solstice EP</h3>
                  <button className="flex items-center gap-2 font-bold text-white group-hover:text-primary transition-colors">
                    {t('featured.listen')} <span className="material-symbols-outlined">headphones</span>
                  </button>
                </div>
              </div>
              {/* Bottom Small Features */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-accent-bronze/30 to-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold">Fabric Studies</h3>
                </div>
              </div>
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent-terracotta/20"></div>
                <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-xl font-bold">Ballroom Archives</h3>
                </div>
              </div>
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-accent-terracotta/30 to-accent-bronze/20"></div>
                <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-xl font-bold">Community Roots</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 px-6" id="contact">
          <div className="max-w-5xl mx-auto glass rounded-[2.5rem] p-12 md:p-24 text-center border-2 border-primary/20 relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                {t.rich('cta.title', {
                  future: (chunks) => <span className="text-gradient-gold">{chunks}</span>
                })}
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
                <a className="w-full md:w-auto bg-primary text-background-dark px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2" href="mailto:contact@pantera.com">
                  {t('cta.contactStudio')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-dark py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary/20 flex items-center justify-center rounded-lg flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-sm font-bold text-[20px] leading-none">music_note</span>
            </div>
            <h2 className="text-lg font-black tracking-tighter uppercase">Pantera</h2>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
            <a className="hover:text-primary transition-colors" href="#">SoundCloud</a>
            <a className="hover:text-primary transition-colors" href="#">Spotify</a>
            <a className="hover:text-primary transition-colors" href="#">YouTube</a>
          </div>
          <p className="text-xs text-slate-600">
            © 2024 PANTERA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  );
}
