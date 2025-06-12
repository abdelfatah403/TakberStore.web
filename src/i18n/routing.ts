import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en': '/us',
      'ar': '/eu/at'
      
    }
  },
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    '/': '/',
  }
});