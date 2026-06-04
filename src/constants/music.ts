export interface Mix {
  title: string;
  duration: string;
  plays: string;
}

export interface Event {
  date: string;
  venue: string;
  location: string;
  title: string;
}

export const MIXES: Mix[] = [
  { title: "Electronic Journey", duration: "45:30", plays: "12.5K" },
  { title: "Deep House Sessions", duration: "38:15", plays: "8.2K" },
  { title: "Techno Warehouse", duration: "52:45", plays: "15.7K" },
  { title: "Ambient Explorations", duration: "41:20", plays: "6.8K" },
  { title: "Progressive Elements", duration: "48:00", plays: "9.4K" },
  { title: "Underground Sounds", duration: "44:30", plays: "11.2K" },
];

export const EVENTS: Event[] = [
  { date: "MAR 15", venue: "Club Nexus", location: "Berlin, Germany", title: "Electronic Music Festival" },
  { date: "MAR 22", venue: "Warehouse District", location: "Amsterdam, NL", title: "Techno Underground" },
  { date: "APR 05", venue: "Sky Lounge", location: "London, UK", title: "Progressive House Night" },
  { date: "APR 18", venue: "Beach Club", location: "Ibiza, Spain", title: "Summer Opening Party" },
];

export const SOCIAL_PLATFORMS = [
  { name: 'platforms.mixcloud', icon: 'library_music', href: '#' },
  { name: 'platforms.soundcloud', icon: 'headphones', href: '#' },
  { name: 'platforms.spotify', icon: 'music_note', href: '#' },
  { name: 'platforms.youtube', icon: 'smart_display', href: '#' },
] as const;
