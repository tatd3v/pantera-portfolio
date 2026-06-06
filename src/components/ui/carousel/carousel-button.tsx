import React from 'react';

interface CarouselButtonProps {
  onClick: () => void;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
}

export const CarouselButton = React.memo(({ 
  onClick, 
  ariaLabel, 
  children, 
  className = '' 
}: CarouselButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 glass text-slate-100 hover:text-primary transition-colors rounded-full ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
});

CarouselButton.displayName = 'CarouselButton';

interface CarouselDotProps {
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
}

export const CarouselDot = React.memo(({ isActive, onClick, ariaLabel }: CarouselDotProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-1 transition-all duration-300 ${
        isActive ? 'w-8 bg-primary' : 'w-8 bg-white/20'
      }`}
      aria-label={ariaLabel}
    />
  );
});

CarouselDot.displayName = 'CarouselDot';
