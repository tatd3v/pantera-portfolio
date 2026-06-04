// Optimized image paths and configurations
export const IMAGES = {
  // Hero backgrounds - use priority loading for above-the-fold
  HERO: {
    HOMEPAGE: '/images/hero/home-hero.jpg',
    MUSIC: '/images/hero/music-hero.jpg',
    EVENTS: '/images/hero/events-hero.jpg',
  },
  
  // Mix covers - lazy loaded
  MIXES: {
    ELECTRONIC_JOURNEY: '/images/mixes/electronic-journey.jpg',
    DEEP_HOUSE: '/images/mixes/deep-house.jpg',
    TECHNO_WAREHOUSE: '/images/mixes/techno-warehouse.jpg',
    AMBIENT_EXPLORATIONS: '/images/mixes/ambient-explorations.jpg',
    PROGRESSIVE_ELEMENTS: '/images/mixes/progressive-elements.jpg',
    UNDERGROUND_SOUNDS: '/images/mixes/underground-sounds.jpg',
  },
  
  // Event covers
  EVENTS: {
    CLUB_NEXUS: '/images/events/club-nexus.jpg',
    WAREHOUSE_DISTRICT: '/images/events/warehouse-district.jpg',
    SKY_LOUNGE: '/images/events/sky-lounge.jpg',
    BEACH_CLUB: '/images/events/beach-club.jpg',
  },
  
  // Brand assets
  BRAND: {
    LOGO: '/logo_trans.svg',
    LOGO_WHITE: '/images/brand/logo-white.png',
    FAVICON: '/favicon.ico',
  },
};

// Image optimization presets
export const IMAGE_PRESETS = {
  HERO: {
    priority: true,
    quality: 80,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw',
  },
  MIX_COVER: {
    priority: false,
    quality: 75,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  EVENT_COVER: {
    priority: false,
    quality: 75,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw',
  },
};

// Blur data URLs for placeholder (optimized for performance)
export const BLUR_PLACEHOLDERS = {
  HERO: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  MIX: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
};
