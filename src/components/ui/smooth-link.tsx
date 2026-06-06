'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

type SmoothLinkProps = ComponentProps<typeof Link>;

export default function SmoothLink({ href, children, ...props }: SmoothLinkProps) {
  const router = useRouter();

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

        if ('startViewTransition' in document) {
          (document as any).startViewTransition(() => {
            router.push(href);
          });
        } else {
          router.push(href);
        }
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
