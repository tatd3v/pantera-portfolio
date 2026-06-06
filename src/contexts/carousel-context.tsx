'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CarouselConfig } from '@/components/ui/carousel/generic-carousel';

interface CarouselContextType {
  globalConfig: CarouselConfig;
  updateConfig: (config: Partial<CarouselConfig>) => void;
}

const defaultConfig: CarouselConfig = {
  autoPlayInterval: 5000,
  showNavigation: true,
  showDots: true,
  transitionDuration: 1000,
};

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

interface CarouselProviderProps {
  children: ReactNode;
  defaultConfig?: CarouselConfig;
}

export function CarouselProvider({ children, defaultConfig: customConfig }: CarouselProviderProps) {
  const [globalConfig, setGlobalConfig] = useState<CarouselConfig>({
    ...defaultConfig,
    ...customConfig,
  });

  const updateConfig = (config: Partial<CarouselConfig>) => {
    setGlobalConfig(prev => ({ ...prev, ...config }));
  };

  return (
    <CarouselContext.Provider value={{ globalConfig, updateConfig }}>
      {children}
    </CarouselContext.Provider>
  );
}

export function useCarouselConfig() {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error('useCarouselConfig must be used within a CarouselProvider');
  }
  return context;
}
