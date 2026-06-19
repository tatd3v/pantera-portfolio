import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-background-dark py-2 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
          <a href="https://www.instagram.com/pntr_g" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/instagram.png" alt={t('instagram')} className="w-8 h-8 md:w-10 md:h-10 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
          <a href="https://on.soundcloud.com/QBzbEgcke8nXGPYQl4" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/soundcloud.png" alt={t('soundcloud')} className="w-12 h-12 md:w-14 md:h-14 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
          <a href="https://open.spotify.com/artist/2KzYBaVenkQj80YZ3aWIPd?si=CbcKOEGPRMu6p_y9lvvhiQ" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/spotify.png" alt={t('spotify')} className="w-8 h-8 md:w-10 md:h-10 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
          <a href="https://www.youtube.com/@panteragodoy" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/youtube.png" alt={t('youtube')} className="w-12 h-12 md:w-14 md:h-14 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
        </div>
        <p className="text-xs text-slate-600">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
