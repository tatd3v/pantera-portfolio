import {NextRequest, NextResponse} from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

function getLocaleFromRequest(request: NextRequest): string {
  // Check if user has explicitly set language preference
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Detect browser language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    // Parse Accept-Language header (e.g., "en-US,en;q=0.9,es;q=0.8")
    const preferredLanguages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, quality = '1'] = lang.trim().split(';q=');
        return { code: code.split('-')[0], quality: parseFloat(quality) };
      })
      .sort((a, b) => b.quality - a.quality);

    // Find first supported language
    for (const { code } of preferredLanguages) {
      if (locales.includes(code)) {
        return code;
      }
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const locale = getLocaleFromRequest(request);
  
  // Set the detected locale in cookie if not already set
  const response = NextResponse.next();
  if (!request.cookies.get('NEXT_LOCALE')?.value) {
    response.cookies.set('NEXT_LOCALE', locale);
  }
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
