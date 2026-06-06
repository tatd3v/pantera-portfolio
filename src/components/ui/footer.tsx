import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  
  return (
    <footer className="bg-background-dark py-2 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex gap-8">
          <a href="https://www.instagram.com/pntr_g" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/instagram.svg" alt={t('instagram')} className="w-20 h-16 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
          <a href="https://on.soundcloud.com/QBzbEgcke8nXGPYQl4" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/soundcloud.svg" alt={t('soundcloud')} className="w-20 h-16 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/spotify.svg" alt={t('spotify')} className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src="/icons/youtube.svg" alt={t('youtube')} className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all" />
          </a> */}
        </div>
        <p className="text-xs text-slate-600">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
