# Mohammed Fahchouch — Portfolio

Portfolio en français construit avec React, TypeScript et Vite. Direction éditoriale : papier clair, encre sombre, accent cobalt et schémas d’architecture réalisés en CSS.

## Développement

```sh
npm ci --legacy-peer-deps
npm run dev
```

Le flag legacy-peer-deps est nécessaire pour certaines dépendances historiques de l’ancien site.

## Vérifications

```sh
npm run build
npm run lint
npm run test:e2e
```

Les tests Playwright utilisent Google Chrome installé localement (`npx playwright install chrome` si nécessaire), sur des profils desktop et mobile. Ils vérifient les filtres, les fiches projet, la fermeture au clavier et le retour du focus, les principes SOLID, la copie de l’email, la navigation mobile et l’absence de débordement de 320 à 1440 px.

## Modifier le contenu

- `src/data/portfolio.ts` : projets, réalisations, explications SOLID, compétences et stages.
- `src/Portfolio.tsx` : page, parcours scolaire, coordonnées et interactions.
- `src/index.css` : design responsive, réduction des animations et impression.
- `index.html` : langue, titre et métadonnées de partage.

Les anciens chemins /projects, /about et /contact ouvrent les sections correspondantes. Le site est statique : les liens de contact utilisent email et téléphone, sans serveur ni collecte de données. Les aperçus des projets sont des illustrations conceptuelles, pas des captures des applications.

## Publication

`npm run build` produit le dossier `dist/`. Pour conserver les anciens chemins, configurer l’hébergeur avec une réécriture SPA vers `index.html`. `npm run preview` permet de vérifier le build localement.

## Informations à compléter

Le contenu reprend les informations fournies, sans inventer de résultats chiffrés :

- CHU Oujda : année et missions à préciser ; seuls juillet et la durée d’un mois sont affichés.
- BTS : dates à préciser.
- MySQL Compass : pas de lien de dépôt disponible.
- Monark : intégrations Stripe et PayPal en développement.
- Ajouter une URL canonique et une image Open Graph absolue une fois le domaine de production confirmé.

L’ancien PDF de CV est conservé dans le dépôt mais n’est pas proposé au téléchargement, car son contenu n’a pas été mis à jour avec ce portfolio. Les anciens composants sont conservés et ne sont plus chargés par la page principale.
