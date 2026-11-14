# Portfolio — Ronus

Portfolio personnel de **Ronus Eldo TOLIZARA**, étudiant en L2 Génie informatique
à l'ISSTM de Mahajanga (Madagascar).

Construit en **HTML5**, **CSS3** et **JavaScript vanilla**. Aucun framework,
aucune bibliothèque, aucun backend, aucune police distante. Le site fonctionne
localement et reste léger sur une machine à 8 Go de RAM.

> Principe éditorial : ne présenter que des projets réellement présents sur la
> machine ou vérifiables sur un dépôt GitHub, avec leur état exact. Les projets
> inachevés, privés ou introuvables sont signalés comme tels. Aucune
> démonstration, capture ou URL n'est inventée.

## Direction visuelle

- Dossier technique sombre, accent cuivre et teal mesuré, trame discrète.
- Typographie locale : **Lato** pour le texte, **Fira Code** pour les libellés
  techniques, accent serif italique pour les mots clés.
- Hero asymétrique avec panneau de profil, schéma des domaines et heure locale.
- Animations courtes : révélation au défilement, barre de progression, pulsation
  des statuts. Tout est neutralisé si `prefers-reduced-motion` est actif.
- Interface responsive de 360 px à 1440 px et au-delà.
- Navigation clavier, lien d'évitement, contrastes vérifiés.
- Formulaire de contact qui prépare un email via `mailto:` — aucune donnée
  n'est envoyée à un serveur.

## Structure

```text
portfolio/
├── index.html    → contenu, structure et métadonnées SEO (langue source : français)
├── style.css     → design, responsive, impression, animations
├── i18n.js       → moteur multilingue : registre, bascule, menu, SEO
├── i18n/
│   ├── en.js     → dictionnaire anglais
│   ├── es.js     → dictionnaire espagnol
│   └── de.js     → dictionnaire allemand
├── script.js     → menu, scrollspy, filtres, formulaire, copie, horloge
├── versionner.sh → pose les empreintes des ressources dans index.html
├── README.md     → cette documentation
├── robots.txt    → indexation
└── sitemap.xml   → plan du site pour les moteurs de recherche
```

## Multilingue

Le site est disponible en **français**, **anglais**, **espagnol** et **allemand**.
La bascule est instantanée, sans rechargement ni appel réseau.

- Le **français est la langue source** : elle vit dans le balisage de
  `index.html`. Aucun contenu français n'est dupliqué dans un dictionnaire.
- Chaque langue cible est **un fichier** dans `i18n/`, qui ne contient que des
  données et s'enregistre auprès du moteur :
  `window.PortfolioI18N.register("<code>", { ... })`.
- Le **menu déroulant est construit** à partir du registre `LOCALES` de
  `i18n.js` : rien à maintenir dans `index.html` pour ajouter une langue.
- Priorité de la langue au démarrage :
  `?lang=xx` → `localStorage` → langue du navigateur → français.
- Le titre, la description, les balises `og:*` et le JSON-LD (`inLanguage`)
  suivent la langue active. L'URL est mise à jour (`?lang=xx`, paramètre retiré
  pour le français) et `index.html` déclare les balises `hreflang`.
- Les **noms propres, technologies et noms de projets** ne sont pas traduits.
- Une clé absente d'une traduction retombe sur le français et déclenche un
  avertissement en console : jamais de trou dans la page.

### Ajouter une langue

1. `cp i18n/en.js i18n/<code>.js` puis traduire les **valeurs** (jamais les clés).
2. Ajouter une entrée dans `LOCALES` (`i18n.js`) : code, nom, drapeau,
   `htmlLang`, `ogLocale`, `dir`.
3. Ajouter `<script src="i18n/<code>.js" defer></script>` dans `index.html`,
   **avant** `script.js`.

Aucune autre modification n'est nécessaire : le menu, la détection navigateur,
le SEO et la mémorisation s'adaptent automatiquement.

### Limites connues

- Le japonais est prévu mais non livré (l'architecture le permet sans refonte).
- Les moteurs de recherche doivent exécuter JavaScript pour voir les variantes
  `?lang=xx` ; le contenu français reste servi par défaut à l'URL canonique.
- Les traductions sont professionnelles mais n'ont pas été relues par un
  locuteur natif.

## Cache et versions des ressources

GitHub Pages sert les fichiers avec `cache-control: max-age=600`. Sans
précaution, un navigateur peut donc afficher un `index.html` à jour **avec un
`i18n.js` périmé** (ou l'inverse) : la page montre alors le bouton de langue
mais le clic reste sans effet, puisque le balisage et le script ne
correspondent plus.

`index.html` référence donc chaque ressource avec une empreinte :

```html
<script src="i18n.js?v=8d38b09a" defer></script>
```

Ainsi une page fraîche tire toujours des fichiers cohérents avec elle, et une
page encore en cache continue d'utiliser les siens : le mélange incohérent
devient impossible.

Après avoir modifié `style.css`, `i18n.js`, `script.js` ou un fichier de
`i18n/`, il suffit de relancer :

```bash
./versionner.sh
```

Le script est idempotent, n'utilise que `md5sum` et `sed`, et ne touche qu'aux
attributs `href` et `src` de `index.html`. Ce n'est **pas** une étape de
compilation : le site fonctionne sans lui.

> Si une visite affiche encore une ancienne version, un rechargement forcé
> (`Ctrl+Shift+R`) suffit : `index.html` lui-même reste en cache jusqu'à
> dix minutes.

## Sections

| # | Section | Contenu |
| - | ------- | ------- |
| — | Accueil | Présentation, accroche, panneau de profil, schéma des domaines |
| 01 | À propos | Parcours, méthode, fiche factuelle, principes de travail |
| 02 | Compétences | Six domaines, trois niveaux honnêtes, sans pourcentages |
| 03 | Projets | Huit fiches, filtres, détails vérifiés, statuts réels |
| 04 | Parcours | BEPC, DELF B1, baccalauréat, L2, projets, limites assumées |
| 05 | Objectifs | Cap 2026–2027, 2027–2029 et 2029+, cadre des missions |
| 06 | Contact | Formulaire `mailto`, email, GitHub, disponibilité |

## Projets présentés

| Projet | Statut affiché | Technologies | Lien |
| ------ | -------------- | ------------ | ---- |
| **Linux Permission Manager** | Terminé — v1.0 | Bash, Linux, `chmod`, `stat`, Git | [GitHub](https://github.com/Ronus-E/linux-permission-manager) |
| **IANATRA** — gestion scolaire | Pilote avancé, en validation | Python, Flask, SQLite, Jinja2, JS, unittest | Code local, non publié |
| **JARVIS** — assistant personnel | Opérationnel en local | Node.js natif, API OpenCode, SSE, Piper, faster-whisper | Usage local uniquement |
| **Laboratoires Linux** | Pratique régulière | Kali Linux, permissions, processus, Bash | Travaux locaux |
| **Analyse réseau** | En apprentissage | Wireshark, Packet Tracer, TCP/IP, IPv4 | Captures non publiées |
| **Mini Adventure** | Prototype jouable | Python, Tkinter, Canvas | Prototype local |
| **GMAO** — gestion de maintenance | Projet d'études, dépôt public | Python, CustomTkinter, SQLite, Git | [GitHub](https://github.com/Ronus-E/GMAO_App) |
| **Budget Pro** | À consolider | HTML, CSS, JavaScript, `localStorage` | Source à retrouver |

### Vérifications effectuées sur les projets

- **Linux Permission Manager** : script relu et exécuté sur un fichier de test
  temporaire (mode 664 → 640), sortie et code de retour vérifiés. Le bloc de
  code affiché dans la fiche reprend la sortie réelle du script.
- **IANATRA** : code Flask/SQLite inspecté, fonctionnalités et rôles recoupés avec
  les README et les templates. La suite de tests existe mais n'a pas été exécutée
  dans le cadre de cette refonte.
- **JARVIS** : arborescence, serveur Node et README inspectés. Le projet tourne
  sur la machine mais n'a pas été relancé pour ce portfolio.
- **Laboratoires Linux** : exercices et notes présents dans
  `/home/ghostroot/CyberLab/01_Linux/`. Aucun dépôt public.
- **Analyse réseau** : deux simulations Packet Tracer conservées
  (`First-simul.pkt`, `second-simul.pkt`) et guide Wireshark débutant consulté.
  Aucune capture `.pcap` n'est publiée.
- **Mini Adventure** : `game.py` lu et fonctionnalités confirmées.
- **GMAO** : dépôt public `Ronus-E/GMAO_App` (fork de `FoxIngenious/GMAO_App`)
  inspecté via l'API GitHub le 4 novembre 2026 — branche `master`, Python,
  `requirements.txt` = `customtkinter`, modules `materiels`, `ajouter`,
  `techniciens`, `database`, `models`, `impression`, `demandes_intervention`,
  `bons_travail`. Application non relancée localement.
- **Budget Pro** : seul un artefact HTML autonome a été retrouvé dans le stockage
  de VS Code ; le code source n'est pas disponible.

## Lancer le portfolio sur Kali Linux

Aucune installation, aucun `npm install`, aucun `pip install`.

### Option 1 — Serveur local (recommandé)

```bash
cd /home/ghostroot/Documents/portfolio
python3 -m http.server 8000 --bind 127.0.0.1
```

Puis ouvrir :

```text
http://127.0.0.1:8000
```

Arrêter le serveur avec `Ctrl+C`.

### Option 2 — Ouvrir directement le fichier

```bash
xdg-open /home/ghostroot/Documents/portfolio/index.html
```

Cette méthode fonctionne, mais un serveur local reproduit mieux les conditions
réelles (chemins, en-têtes, presse-papiers).

## Tests réalisés le 10 novembre 2026

| Vérification | Résultat |
| ------------ | -------- |
| `node --check script.js` | OK |
| Analyse HTML5 (`html5lib`) | 0 erreur |
| Identifiants HTML dupliqués | Aucun |
| `GET /`, `/style.css`, `/script.js` | HTTP 200 |
| Ancres internes (`#accueil` … `#contact`) | Toutes résolues |
| 7 sections attendues | Présentes, dans l'ordre |
| Projets affichés | 8 |
| Filtre « Réseau » | 1 résultat correct |
| Détails techniques | Blocs dépliables fonctionnels |
| Formulaire vide | 3 erreurs affichées et champs marqués |
| Formulaire valide | Statut `mailto` affiché, champs valides |
| Menu mobile | Ouverture, `aria-expanded`, fermeture au clic et par Échap |
| Scrollspy | `Projets` puis `Objectifs` correctement actifs |
| Horloge locale | `Mahajanga · HH:MM UTC+3` |
| Débordement horizontal | 0 px en 1440, 1280, 1024, 920, 780, 768, 720, 600, 460, 390 et 360 |
| Contrastes mesurés | Texte 17,71:1 · texte doux 9,45:1 · texte discret 5,04:1 · méta 4,87:1 |
| `prefers-reduced-motion` | Contenu visible, défilement instantané |
| Champs sans label | Aucun |
| Liens vides | Aucun |
| Liens `target="_blank"` sans `noopener` | Aucun |
| Un seul `h1` | Oui |
| Firefox 153.4 ESR | Chargement, 7 sections, 0 débordement en 1440 et 390 |

**Total : 24 vérifications automatisées Selenium/Chromium et Firefox, 24 réussies.**

### Non testé

- Contrôle visuel humain des captures (le rendu a été mesuré, pas jugé à l'œil).
- Safari et navigateurs mobiles réels.
- Ouverture effective d'un logiciel de messagerie par `mailto:`.
- Lecteurs d'écran (NVDA, Orca).
- Copie presse-papiers en mode headless : le repli affiche un message explicite.
  Sur `localhost`, l'API Clipboard est normalement disponible dans un navigateur
  de bureau.
- Audit Lighthouse : non exécuté.

## Dépendances et limites

- **Aucune dépendance front-end.** Le site est statique.
- Les polices utilisées sont locales, avec des replis système si elles sont
  absentes (`Lato` → `system-ui`, `Fira Code` → monospace, `C059` → Georgia).
- Le formulaire dépend du logiciel de messagerie configuré sur la machine
  (`mailto:`). Sans client email, il faut copier l'adresse manuellement. Un
  message très long peut être tronqué par certains clients.
- Les liens GitHub ouvrent des sites externes.
- Les projets IANATRA, JARVIS, Budget Pro, Mini Adventure et les laboratoires
  Linux n'ont pas de démo publique : leur code n'est pas publié ou ne peut pas
  être exposé sans risque.
- GMAO est une application de bureau : elle se lance avec `python main.py` et
  ne peut pas être démontrée dans un navigateur.

## Publication GitHub Pages

Le site est publié sur <https://ronus-e.github.io/Portfolio/> depuis le dépôt
<https://github.com/Ronus-E/Portfolio>.

Après validation des modifications :

```bash
cd /home/ghostroot/Documents/portfolio
git add index.html style.css script.js README.md robots.txt sitemap.xml
git commit -m "Refonte du portfolio : structure en 7 sections, objectifs et projets réels"
git push origin main
```

GitHub Pages republie automatiquement depuis la branche `main`.

## Personnalisation

- **Couleurs et espacements** : variables `:root` en tête de `style.css`.
- **Contenu** : directement dans `index.html`, sections commentées.
- **Ajouter un projet** : dupliquer un `<article class="project">`, renseigner
  `data-tags` (`system`, `network`, `web`, `python`, `team`, `todo`) et le statut.
- **Ajouter un filtre** : bouton `data-filter="..."` + valeur correspondante
  dans `data-tags`, puis mettre à jour le compteur affiché.
- **Année du pied de page** : injectée automatiquement par `script.js`.
- **Heure locale** : fuseau `Indian/Antananarivo` dans `script.js`.

## Sauvegarde

Deux copies de sécurité existent :

```text
/home/ghostroot/Documents/portfolio-backups/20261110-113054/
/home/ghostroot/Documents/portfolio-backup-20261104-095145/
```

La première contient la version présente avant la refonte du 10 novembre 2026.
La seconde contient la version du 4 novembre 2026.

## Prochaines étapes prioritaires

1. Contrôler visuellement le rendu sur Chromium et Firefox, puis ajuster les
   espacements si nécessaire.
2. Retrouver ou reconstruire le code source de **Budget Pro**.
3. Ajouter un extrait de code ou une capture de **GMAO** depuis l'application réelle.
4. Tester le site sur un téléphone réel.
5. Vérifier l'ouverture de `mailto:` avec le client email de la machine.
6. Envisager un backend de contact uniquement si un hébergement et une protection
   anti-spam sont disponibles.
7. Ajouter des captures uniquement si elles proviennent de l'application réelle.
