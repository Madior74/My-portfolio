/**
 * Configuration centrale du site.
 * Toute valeur ici doit être VRAIE et VÉRIFIABLE.
 * Les TODO doivent être résolus avant le build de production.
 */
export const SITE = {
  domain: "https://madiorniang.dev",
  languages: ["en", "fr"] as const,
  defaultLanguage: "en" as const,

  owner: {
    firstName: "Madior",
    lastName: "Niang",
    fullName: "Madior Niang",
    // Ne pas mettre l'e-mail en clair ici : il sera assemblé au runtime
    // (Module 9) pour limiter le scraping.
    emailUser: "madiorniang47",
    emailDomain: "gmail.com", 
    location: {
      city: "Palma de Mallorca",
      region: "Balearic Islands",
      countryCode: "es",
      countryName: { en: "Spain", fr: "Espagne" },
    },
  },

  links: {
    github: "https://github.com/Madior74",
    linkedin: "https://www.linkedin.com/in/madior-niang-36a65a394/",
    coursera: {
      javaDeveloper:
        "https://coursera.org/share/0e3c9d767c84a91777804884359d057d",
      cybersecurity:
        "https://coursera.org/share/08dc249284a5c9dfedcf3f813def9ed7",
    },
    // Renommer ce dépôt GitHub si ce n'est pas le bon projet SchoolAdmin :
    schoolAdminRepo: "https://github.com/Madior74/Spring-Boot-Memory-Project-",
    // Tontines : laisser vide si code privé (le site affichera
    // « Demander une démo privée » à la place).
    tontinesRepo: "",
  },

  availability: {
    status: "internship" as "internship" | "freelance" | "both" | "unavailable",
    // TODO propriétaire : remplir la date de début réelle
    startDate: "", // ex. '2026-02'
  },

  legal: {
    host: "Cloudflare, Inc. (Cloudflare Pages)",
    processors: ["Web3Forms", "Cloudflare Turnstile"],
  },
} as const;

export type SiteLanguage = (typeof SITE)["languages"][number];
