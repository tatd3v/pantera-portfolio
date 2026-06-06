'use client';

import { useCarousel } from '@/hooks/useCarousel';
import { CarouselButton, CarouselDot } from '@/components/ui/carousel/carousel-button';

export interface CarouselConfig {
  autoPlayInterval?: number;
  showNavigation?: boolean;
  showDots?: boolean;
  transitionDuration?: number;
}

interface GenericCarouselProps<T> {
  items: T[];
  renderItem: (item: T, isActive: boolean, index: number) => React.ReactNode;
  config?: CarouselConfig;
  className?: string;
}

export function GenericCarousel<T>({
  items,
  renderItem,
  config = {},
  className = '',
}: GenericCarouselProps<T>) {
  const {
    autoPlayInterval = 5000,
    showNavigation = true,
    showDots = true,
  } = config;

  const { currentSlide, goToSlide, nextSlide, previousSlide } = useCarousel({
    totalSlides: items.length,
    autoPlayInterval,
  });

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
          {renderItem(item, index === currentSlide, index)}
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
