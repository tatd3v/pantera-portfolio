'use client';

import React from 'react';
import { useCarousel } from '@/hooks/useCarousel';
import { CarouselButton, CarouselDot } from '@/components/ui/carousel/carousel-button';
import { HeroCarouselSlide } from '@/components/ui/carousel/hero-carousel-slide';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { HERO_SLIDES, HERO_CONFIG } from '@/constants/hero';
import { useTranslations } from 'next-intl';
import { CarouselConfig } from '@/components/ui/carousel/generic-carousel';

export default function Hero() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleSlideChange = React.useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex);
  }, []);

  const renderHeroSlide = (slide: typeof HERO_SLIDES[0], isActive: boolean) => (
    <ErrorBoundary
      fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-6xl text-slate-600 mb-4">
              broken_image
            </span>
            <p className="text-slate-400">Slide unavailable</p>
          </div>
        </div>
      }
    >
      <HeroCarouselSlide slide={slide} isActive={isActive} />
    </ErrorBoundary>
  );

  return (
    <section className="relative h-screen overflow-hidden">
      <ErrorBoundary>
        <SynchronizedCarousel
          items={HERO_SLIDES}
          renderItem={renderHeroSlide}
          config={HERO_CONFIG}
          className="h-full"
          onSlideChange={handleSlideChange}
        />
      </ErrorBoundary>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-20"></div>

      {/* Content Overlay */}
      <ErrorBoundary>
        <HeroContent slides={HERO_SLIDES} translations={t} currentSlide={currentSlide} />
      </ErrorBoundary>
    </section>
  );
}

interface SynchronizedCarouselProps<T> {
  items: T[];
  renderItem: (item: T, isActive: boolean) => React.ReactNode;
  config?: CarouselConfig;
  className?: string;
  onSlideChange: (index: number) => void;
}

function SynchronizedCarousel<T>({
  items,
  renderItem,
  config = {},
  className = '',
  onSlideChange,
}: SynchronizedCarouselProps<T>) {
  const {
    autoPlayInterval = 5000,
    showNavigation = true,
    showDots = true,
  } = config;

  const { currentSlide, goToSlide, nextSlide, previousSlide } = useCarousel({
    totalSlides: items.length,
    autoPlayInterval,
  });

  React.useEffect(() => {
    onSlideChange(currentSlide);
  }, [currentSlide, onSlideChange]);

  if (items.length === 0) {
    return (
      <div className={`flex items-center justify-center h-full ${className}`}>
        <p className="text-slate-400">No items to display</p>
      </div>
    );
  }

  return (
    <div className={`relative h-full overflow-hidden ${className}`}>
      {/* Carousel Items */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {renderItem(item, index === currentSlide)}
        </div>
      ))}

      {/* Navigation Arrows */}
      {showNavigation && items.length > 1 && (
        <div className="absolute inset-y-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 pointer-events-none">
          <CarouselButton
            onClick={previousSlide}
            ariaLabel="Previous slide"
            className="pointer-events-auto"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </CarouselButton>
          <CarouselButton
            onClick={nextSlide}
            ariaLabel="Next slide"
            className="pointer-events-auto"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </CarouselButton>
        </div>
      )}

      {/* Carousel Dots */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-4">
          {items.map((_, index) => (
            <CarouselDot
              key={index}
              isActive={index === currentSlide}
              onClick={() => goToSlide(index)}
              ariaLabel={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface HeroContentProps {
  slides: typeof HERO_SLIDES;
  translations: (key: string) => string;
  currentSlide: number;
}

function HeroContent({ slides, translations, currentSlide }: HeroContentProps) {

  return (
    <div className="absolute inset-0 z-20 flex items-end px-4 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] sm:leading-[0.9] tracking-[-0.02em] sm:tracking-[-0.03em] md:tracking-[-0.05em] uppercase mb-4 sm:mb-6 md:mb-8">
          <span className="block text-slate-100">
            {translations(slides[currentSlide].title.line1)}
          </span>
          <span className="block text-primary">
            {translations(slides[currentSlide].title.line2)}
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-accent-terracotta max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl leading-relaxed">
          {translations(slides[currentSlide].quote)}
        </p>
      </div>
    </div>
  );
}
