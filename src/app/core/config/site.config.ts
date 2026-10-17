

export const SITE = {
  domain: 'https://madiorniang.dev',
  languages: ['en', 'fr'] as const,
  defaultLanguage: 'en' as const,

  owner: {
    firstName: 'Madior',
    lastName: 'Niang',
    fullName: 'Madior Niang',
   
    emailUser: 'contact',
    emailDomain: 'madiorniang.dev',
    location: {
      city: 'Palma de Mallorca',
      region: 'Balearic Islands',
      countryCode: 'ES',
      countryName: { en: 'Spain', fr: 'Espagne' },
    },
  },

  links: {
    github: 'https://github.com/Madior74',
    linkedin: 'https://www.linkedin.com/in/madior-niang-36a65a394/',
    coursera: {
      javaDeveloper: 'https://coursera.org/share/0e3c9d767c84a91777804884359d057d',
      cybersecurity: 'https://coursera.org/share/08dc249284a5c9dfedcf3f813def9ed7',
    },
    // Dépôt confirmé pour SchoolAdmin API.
    schoolAdminRepo: 'https://github.com/Madior74/Spring-Boot-Memory-Project-',
    // Tontines : laisser vide si code privé.
    tontinesRepo: '',
  },

  availability: {
    status: 'internship' as 'internship' | 'freelance' | 'both' | 'unavailable',
    startDate: 'as soon as possible',
  },

  legal: {
    host: 'Cloudflare, Inc. (Cloudflare Pages)',
    processors: ['Web3Forms', 'Cloudflare Turnstile'],
  },
} as const;

export type SiteLanguage = (typeof SITE)['languages'][number];
