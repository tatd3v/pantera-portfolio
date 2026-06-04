import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselProps {
  totalSlides: number;
  autoPlayInterval?: number;
}

interface UseCarouselReturn {
  currentSlide: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;
}

export function useCarousel({ 
  totalSlides, 
  autoPlayInterval = 5000 
}: UseCarouselProps): UseCarouselReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);
  }, [totalSlides, autoPlayInterval]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    resetTimer();
  }, [resetTimer]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetTimer();
  }, [totalSlides, resetTimer]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetTimer();
  }, [totalSlides, resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetTimer]);

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    previousSlide,
  };
}
