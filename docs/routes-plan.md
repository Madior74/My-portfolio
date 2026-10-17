# Plan des routes

## EN (racine)
- /                              Accueil
- /skills                        Compétences
- /projects                      Projets (liste)
- /projects/schooladmin-api      Étude de cas 1
- /projects/tontines-app         Étude de cas 2
- /about                         Parcours + certifications + langues
- /contact                       Contact
- /legal                         Mentions légales
- /privacy                       Confidentialité
- (404 par défaut)

## FR (préfixe /fr/)
- /fr/                           Accueil
- /fr/competences
- /fr/projets
- /fr/projets/schooladmin-api
- /fr/projets/tontines-app
- /fr/a-propos
- /fr/contact
- /fr/mentions-legales
- /fr/confidentialite

## Réservé V2
- /blog  et  /fr/blog  (non implémenté en V1, route commentée)

## hreflang
- EN : /…            hreflang="en"
- FR : /fr/…         hreflang="fr"
- x-default : /      (EN)