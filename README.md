# Pantera Portfolio

A modern, responsive DJ/Producer portfolio showcasing electronic music projects with stunning visuals, smooth user experience, and full internationalization support.

## 🎵 Live Demo

[**pantera-music.com**](https://pantera-music.com) - Experience the portfolio live

## 🚀 Tech Stack

### Core Framework

- **Framework**: Next.js 16.2.1 (App Router)
- **Language**: TypeScript 5
- **Package Manager**: npm
- **Build Tool**: Turbopack
- **Styling**: Tailwind CSS v4

### UI & Design

- **Components**: Radix UI primitives
- **Icons**: Lucide React + Material Symbols
- **Typography**: Inter font (Google Fonts)
- **Theme**: Dark mode with golden accents
- **Effects**: Glass morphism, smooth transitions

### Performance & Optimization

- **Images**: Next.js Image optimization (WebP/AVIF)
- **Routing**: Smooth page transitions
- **Loading**: Lazy loading + blur placeholders
- **Cache**: 30-day image caching

## ✨ Features

### 🌍 Internationalization (i18n)

- **Automatic language detection** from browser preferences
- **Manual language switching** with persistent cookie storage
- **SEO-compatible** with `lang` attribute on `<html>`
- **Supported languages**: English (en) and Spanish (es)
- **Middleware-based routing** without `[locale]` folder restructuring
- **Rich text translations** with styled component interpolation

### 🎨 Design Excellence

- **Glass morphism effects** with backdrop blur
- **Golden gradient accents** (#deb12b primary)
- **Smooth animations** and micro-interactions
- **Responsive design** for all devices
- **Dark theme** optimized for music content

### 🎧 Music Showcase

- **Audio player interface** with controls
- **Mixes showcase grid** with play counts
- **Events calendar** with venue details
- **Platform links** (Mixcloud, SoundCloud, Spotify, YouTube)
- **Contact section** with multiple channels

### ⚡ Performance

- **Image optimization** with WebP/AVIF formats
- **Lazy loading** for below-the-fold content
- **Smooth routing** with View Transitions API
- **Blur placeholders** for instant visual feedback
- **30-day caching** for repeat visitors

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/pantera-portfolio.git
   cd pantera-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🌐 Internationalization

### How It Works

1. **First Visit**: Automatically detects browser language from `Accept-Language` header
2. **Manual Switch**: Users can select language via dropdown in navbar
3. **Persistence**: Selection stored in `NEXT_LOCALE` cookie for future visits

### Translation Files

```
messages/
├── en.json  # English translations
└── es.json  # Spanish translations
```

### Adding a New Language

1. Add locale code to `src/middleware.ts`:
   ```typescript
   const locales = ['en', 'es', 'fr']; // Add new locale
   ```

2. Create translation file `messages/fr.json`

3. Add language option to `src/components/ui/language-dropdown.tsx`:
   ```typescript
   const languages = [
     { code: 'en', label: 'English' },
     { code: 'es', label: 'Español' },
     { code: 'fr', label: 'Français' }
   ];
   ```

## 📁 Project Structure

```txt
src/
├── app/
│   ├── page.tsx              # Homepage (/)
│   ├── layout.tsx            # Root layout with NextIntlClientProvider
│   ├── globals.css           # Global styles
│   └── music/
│       └── page.tsx          # Music page (/music)
├── components/
│   └── ui/
│       ├── navbar.tsx        # Navigation with language dropdown
│       ├── language-dropdown.tsx  # Language switcher component
│       └── smooth-link.tsx   # Smooth routing
├── lib/
│   └── utils/
│       └── translation-helpers.tsx  # Rich text parsing utilities
├── i18n/
│   └── request.ts          # next-intl request configuration
└── middleware.ts           # Language detection middleware

messages/
├── en.json                  # English translations
└── es.json                  # Spanish translations

public/
└── logo_trans.svg           # Transparent SVG logo
```

## 🎨 Design System

### Colors

- **Primary**: `#deb12b` (Golden)
- **Accent Bronze**: `#D4AF37`
- **Accent Terracotta**: `#E07A5F`
- **Background Dark**: `#201d12`
- **Background Light**: `#f8f7f6`

### Typography

- **Font**: Inter (Google Fonts)
- **Icons**: Material Symbols Outlined
- **Weights**: 300, 400, 600, 700, 900

### Components

- Glass morphism effects
- Gradient text effects
- Smooth transitions and hover states
- Responsive grid layouts

## 🖼️ Logo

- **Format**: SVG with transparency (`public/logo_trans.svg`)
- **Navbar**: 48x48px (h-12 w-12)
- **Footer**: 128x128px (h-32 w-32)
- **Placement**: Navbar (left) and Footer (center-left)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms

- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing framework
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **next-intl** - Internationalization library
- **Google Fonts** - Inter font family
- **Material Design** - Icon system

## 📞 Contact

- **Portfolio**: [pantera-music.com](https://pantera-music.com)
- **Email**: contact@pantera-music.com
- **Social**: [@pantera_music](https://twitter.com/pantera_music)

---

### Built with ❤️ for the electronic music community

