export const HERO_CONFIG = {
  AUTOPLAY_INTERVAL: 5000,
  TRANSITION_DURATION: 1000,
} as const;

export interface HeroSlide {
  image: string;
  alt: string;
  title: {
    line1: string;
    line2: string;
  };
  quote: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: 'https://ik.imagekit.io/tats26/PNT/pantera-hero-1',
    alt: 'Performance',
    title: {
      line1: 'home.hero.slides.slide1.title.line1',
      line2: 'home.hero.slides.slide1.title.line2',
    },
    quote: 'home.hero.slides.slide1.quote',
  },
  {
    image: 'https://ik.imagekit.io/tats26/PNT/pantera-hero-2',
    alt: 'Model',
    title: {
      line1: 'home.hero.slides.slide2.title.line1',
      line2: 'home.hero.slides.slide2.title.line2',
    },
    quote: 'home.hero.slides.slide2.quote',
  },
  {
    image: 'https://ik.imagekit.io/tats26/PNT/pantera-hero-3',
    alt: 'DJ',
    title: {
      line1: 'home.hero.slides.slide3.title.line1',
      line2: 'home.hero.slides.slide3.title.line2',
    },
    quote: 'home.hero.slides.slide3.quote',
  },
];
