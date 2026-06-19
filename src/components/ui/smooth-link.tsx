'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ComponentProps, useEffect, useState } from 'react';

type SmoothLinkProps = ComponentProps<typeof Link>;

export default function SmoothLink({ href, children, ...props }: SmoothLinkProps) {
  const router = useRouter();
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    const currentPath = window.location.pathname;
    const detectedLocale = currentPath.split('/')[1];
    if (detectedLocale === 'en' || detectedLocale === 'es') {
      setLocale(detectedLocale);
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof href === 'string') {
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          window.history.pushState(null, '', href);
        }
      } else {
        e.preventDefault();
        
        // Agregar locale a la ruta si no lo tiene
        const fullHref = href.startsWith(`/${locale}`) ? href : `/${locale}${href}`;

        if ('startViewTransition' in document) {
          (document as any).startViewTransition(() => {
            router.push(fullHref);
          });
        } else {
          router.push(fullHref);
        }
      }
    }
  };

  // Agregar locale al href para el componente Link también
  const finalHref = typeof href === 'string' && !href.startsWith('#') && !href.startsWith(`/${locale}`) 
    ? `/${locale}${href}` 
    : href;

  return (
    <Link href={finalHref} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
