'use client';

import { useCarousel } from '@/hooks/useCarousel';
import { CarouselButton, CarouselDot } from '@/components/ui/carousel/carousel-button';
import { CarouselSlide } from '@/components/ui/carousel/carousel-slide';
import { HERO_SLIDES, HERO_CONFIG } from '@/constants/hero';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  const { currentSlide, goToSlide, nextSlide, previousSlide } = useCarousel({
    totalSlides: HERO_SLIDES.length,
    autoPlayInterval: HERO_CONFIG.AUTOPLAY_INTERVAL,
  });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <CarouselSlide
          key={index}
          slide={slide}
          isActive={index === currentSlide}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-20"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-end px-6 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[64px] md:text-[96px] font-black leading-[0.9] tracking-[-0.05em] uppercase mb-6">
            <span className="block text-slate-100">{t(HERO_SLIDES[currentSlide].title.line1)}</span>
            <span className="block text-primary">{t(HERO_SLIDES[currentSlide].title.line2)}</span>
          </h1>
          <p className="text-lg md:text-xl text-accent-terracotta max-w-xl leading-relaxed">
            {t(HERO_SLIDES[currentSlide].quote)}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
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

      {/* Carousel Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-4">
        {HERO_SLIDES.map((_, index) => (
          <CarouselDot
            key={index}
            isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
            ariaLabel={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
