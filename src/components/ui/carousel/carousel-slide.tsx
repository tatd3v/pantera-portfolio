import Image from 'next/image';
import { HeroSlide } from '@/constants/hero';

interface CarouselSlideProps {
  slide: HeroSlide;
  isActive: boolean;
}

export function CarouselSlide({ slide, isActive }: CarouselSlideProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        priority={isActive}
        quality={90}
        sizes="100vw"
        className="object-cover grayscale brightness-75"
      />
    </div>
  );
}
