'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';

interface HeroBackgroundProps {
  children?: ReactNode;
  imageUrl?: string;
  imageSrc?: string;
  gradient?: string;
  overlay?: 'dark' | 'light' | 'gradient' | 'none';
  overlayOpacity?: number;
  className?: string;
  priority?: boolean; // For above-the-fold images
}

export default function HeroBackground({
  children,
  imageUrl,
  imageSrc,
  gradient = 'from-primary/20 via-background-dark to-accent-terracotta/20',
  overlay = 'gradient',
  overlayOpacity = 0.4,
  className = '',
  priority = false,
}: HeroBackgroundProps) {
  const backgroundImage = imageUrl || imageSrc;
  const [isLoaded, setIsLoaded] = useState(false);

  const getOverlayClasses = () => {
    switch (overlay) {
      case 'dark':
        return `bg-background-dark/[${overlayOpacity}]`;
      case 'light':
        return `bg-white/[${overlayOpacity}]`;
      case 'gradient':
        return 'bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent';
      case 'none':
        return '';
      default:
        return 'bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent';
    }
  };

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      {/* Overlay Layer */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 z-10 ${getOverlayClasses()}`}></div>
      )}

      {/* Background Image or Gradient */}
      {backgroundImage ? (
        <div className="relative w-full h-full">
          {/* Placeholder gradient while image loads */}
          {!isLoaded && (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} z-0`}></div>
          )}
          
          {/* Optimized Next.js Image */}
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className={`object-cover grayscale brightness-75 transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="100vw"
            quality={75}
            priority={priority}
            onLoadingComplete={() => setIsLoaded(true)}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${gradient}`}></div>
      )}

      {/* Optional Pattern Overlay */}
      {children}
    </div>
  );
}
