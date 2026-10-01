# Portfolio – Odette Fidèle Gossi LOKOSSOU

Page unique en français : développeuse full stack junior & data analyst transactions (Owendo, Libreville, Gabon).
Ne jamais la présenter comme designer ou spécialiste UX. Adobe XD apparaît uniquement dans la liste des outils.

## Stack
Astro (statique), composants `.astro` avec styles scopés + CSS variables. Pas de JS hydraté (îlots inutiles) : scripts natifs bundlés par Astro.
- `astro-icon` + `@iconify-json/lucide` (icônes UI) et `@iconify-json/devicon` (logos techno, passés en niveaux de gris, couleur au hover).
- `@astrojs/sitemap` + `robots.txt.ts`. Polices auto-hébergées via @fontsource-variable.
Structure : `src/layouts/Layout.astro`, `src/components/*` (Header, Hero, Marquee, About, Work, Stack, Contact, Footer). Work (projets avec captures réelles, lightbox `<dialog>`) : images dans `src/assets/projects/`, optimisées via `astro:assets`.
Commandes : `npm run dev`, `npm run build`, `npm run preview`. Déploiement : Vercel ou Netlify (renseigner `site` dans astro.config.mjs).

## Tokens (src/styles/tokens.css – seul endroit où définir couleurs et polices)
| Rôle | Variable | Valeur |
|---|---|---|
| Fond / sections alternées | --color-bg / --color-bg-alt | #FFFFFF / #F4F7FB |
| Titres | --color-heading | #0B1F3A |
| Texte / secondaire | --color-text / --color-text-muted | #0F172A / #475569 |
| Bordures | --color-border | #E2E8F0 |
| Accent (boutons, liens, icônes, chiffres clés) | --color-accent / -hover | #1D4ED8 / #1E40AF |
| Texte sur accent | --color-on-accent | #FFFFFF |
| Badges | --color-badge-bg / -text | #EFF6FF / #1D4ED8 |
| Focus clavier | --color-focus | #2563EB (outline 3px, offset 3px) |

Polices : titres Plus Jakarta Sans (`--font-heading`), texte Inter (`--font-body`), chiffres JetBrains Mono (`--font-mono`).

## Conventions
- Aucune couleur ni police en dur hors tokens.css ; les composants utilisent uniquement `var(--…)`.
- Un seul accent (bleu). Thème clair par défaut + mode nuit (tokens `:root[data-theme="dark"]` dans tokens.css, bouton dans l'en-tête, préférence mémorisée dans localStorage, sinon celle du système ; script anti-flash dans Layout). `--color-ink` est un bleu nuit constant (texte sur boutons blancs) ; ne pas utiliser `--color-heading` comme fond. Seule exception voulue : le bandeau Contact en bleu nuit (tokens `--color-inverse-*`).
- Ce site est un portfolio, pas un CV : privilégier le visuel et la mise en scène plutôt que les listes de texte.
- Relèvement au hover uniquement sur les éléments cliquables.
- Mobile-first ; breakpoints 48rem et 64rem.
- Accessibilité : contraste AA minimum, lien d'évitement, focus visible, `aria-*` sur le menu, `prefers-reduced-motion` respecté.
- Animations minimales : apparition au scroll (`.reveal`) et relèvement des cartes au hover.
- Cartes : fond blanc, bordure fine, ombre très légère.
- Contenu : n'afficher que les informations fournies (pas de placeholder visible) ; ne jamais inventer de chiffres, de rôles ni de technologies.
- Captures de projets : validées par la cliente ; le dashboard est recadré pour masquer la barre latérale (identité utilisateur).
- Noms autorisés : Paynala, Tonji, Yubile Technologie (validé). Aucun autre nom de client ou projet tiers.

## À confirmer / compléter
- Téléphone (+241 62 30 71 00) : absent tant qu'il n'est pas confirmé.
- Rôles de Fougamou et Graphic Side Designers, technologies des projets et lien MyAirtel : non fournis, donc non affichés.
- URL du site (astro.config.mjs, canonical, Open Graph) et image Open Graph.
- Liens LinkedIn / GitHub à vérifier.

## Direction design (moderne, palette inchangée)
- Composition : en-tête en pilule flottante, hero à grand titre avec photo sur bloc bleu et pastilles flottantes, bandeau défilant unique (technologies, bleu accent), grilles bento (À propos, Compétences), Contact dans un grand panneau arrondi bleu nuit vers bleu profond peu saturé (`--color-deep`), avec aurore animée (3 halos flous), quadrillage fin et carte formulaire en verre dépoli ; tokens `--color-aurora-*`, `--color-glass*`.
- Formes : boutons et badges en pilule ; cartes `--radius-lg` (28px) ; illustrations `--radius`. Pas d'ombres portées : bordures fines et aplats.
- Couleurs : uniquement les tokens ; dégradés limités à accent vers accent-hover.
- Mouvement : apparition au scroll, hover des cartes, marquee, barre de progression (CSS scroll-timeline), pastilles qui flottent ; tout est désactivé sous `prefers-reduced-motion`.
- Texte : titres Plus Jakarta Sans très grands et serrés (`letter-spacing` négatif), repères « 01 · Section » en monospace au-dessus de chaque titre.

## Formulaire de contact
- Site statique : pas de backend. Renseigner `PUBLIC_FORM_ENDPOINT` (voir `.env.example`, ex. URL Formspree) pour un envoi direct ; sans cette variable, le formulaire ouvre la messagerie de l'utilisateur (mailto) avec le message prérempli.
- Anti-spam : champ piège `website`. Validation côté client avec messages d'erreur liés par `aria-describedby`.
