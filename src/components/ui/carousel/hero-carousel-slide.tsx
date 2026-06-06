import React from 'react';
import Image from 'next/image';
import { HeroSlide } from '@/constants/hero';
import { cn } from '@/lib/utils';

interface HeroCarouselSlideProps {
  slide: HeroSlide;
  isActive: boolean;
  className?: string;
}

export const HeroCarouselSlide = React.memo(({ 
  slide, 
  isActive, 
  className = '' 
}: HeroCarouselSlideProps) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center",
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0',
        className
      )}>
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-slate-600 mb-4">
            broken_image
          </span>
          <p className="text-slate-400">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "absolute inset-0 transition-opacity duration-1000",
      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0',
      className
    )}>
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        priority={isActive}
        quality={90}
        sizes="100vw"
        className="object-cover grayscale brightness-75"
        onError={handleImageError}
      />
    </div>
  );
});

HeroCarouselSlide.displayName = 'HeroCarouselSlide';
