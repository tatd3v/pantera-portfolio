// DEPRECATED: Use HeroCarouselSlide instead
// This file is kept for backward compatibility
import { HeroCarouselSlide } from './hero-carousel-slide';
import { HeroSlide } from '@/constants/hero';

interface CarouselSlideProps {
  slide: HeroSlide;
  isActive: boolean;
}

export function CarouselSlide({ slide, isActive }: CarouselSlideProps) {
  console.warn('CarouselSlide is deprecated. Use HeroCarouselSlide instead.');
  return <HeroCarouselSlide slide={slide} isActive={isActive} />;
}
