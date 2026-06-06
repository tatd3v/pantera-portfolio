import SmoothLink from '@/components/ui/smooth-link';
import LanguageDropdown from '@/components/ui/language-dropdown';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('nav');
  
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <SmoothLink href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo_trans.svg" 
            alt="Pantera" 
            className="h-10 w-auto md:h-12 lg:h-16 flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
          />
        </SmoothLink>
        <div className="hidden md:flex items-center gap-10">
          <SmoothLink href="/music" className="text-sm font-semibold text-slate-300 hover:text-primary hover:scale-105 transition-all duration-300 relative group">
            {t('music')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </SmoothLink>
          {/* <SmoothLink href="#events">{t('events')}</SmoothLink> */}
          {/* <SmoothLink href="#photos">{t('photos')}</SmoothLink> */}
          <SmoothLink href="/about" className="text-sm font-semibold text-slate-300 hover:text-primary hover:scale-105 transition-all duration-300 relative group">
            {t('about')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </SmoothLink>
        </div>
        <div className="flex items-center gap-4">
          <LanguageDropdown />
        </div>
      </div>
    </nav>
  );
}
