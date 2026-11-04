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

## Aperçu

- Design sombre, sobre et éditorial : échelle typographique resserrée, micro-libellés
  mono lisibles (≥ 10 px), reliefs internes discrets, aucun effet décoratif gratuit.
- Interface responsive de 360 px à 1440 px et au-delà.
- Animations légères, désactivées si `prefers-reduced-motion` est actif.
- Navigation clavier, lien d'évitement, contrastes vérifiés.
- Formulaire de contact qui prépare un email via `mailto:` — aucune donnée
  n'est envoyée à un serveur.

## Structure

```text
portfolio/
├── index.html    → contenu, structure et métadonnées SEO
├── style.css     → design, responsive, impression, animations
├── script.js     → menu, scrollspy, filtres, formulaire, copie
├── README.md     → cette documentation
├── robots.txt    → indexation
└── sitemap.xml   → plan du site pour les moteurs de recherche
```

## Sections

| # | Section | Contenu |
| - | ------- | ------- |
| — | Accueil | Présentation, accroche, terminal de profil, appels à l'action |
| 01 | À propos | Parcours, méthode, fiche factuelle, principes de travail |
| 02 | Compétences | Six domaines, trois niveaux honnêtes, sans pourcentages |
| 03 | Projets | Six fiches, filtres, détails vérifiés, statuts réels |
| 04 | Parcours | BEPC, DELF B1, baccalauréat, L2, projets, objectifs |
| 05 | Services | Quatre prestations à niveau étudiant, avec limites explicites |
| 06 | Contact | Formulaire `mailto`, email réel, GitHub, localisation |

## Projets présentés

| Projet | Statut affiché | Technologies | Lien |
| ------ | -------------- | ------------ | ---- |
| **IANATRA** — gestion scolaire | Pilote avancé, en validation | Python, Flask, SQLite, Jinja2, JS, unittest | Code local, non publié |
| **JARVIS** — assistant personnel | Opérationnel en local | Node.js natif, API OpenCode, SSE, Piper, faster-whisper | Usage local uniquement |
| **Linux Permission Manager** | Terminé — v1.0 | Bash, Linux, `chmod`, `stat`, Git | [GitHub](https://github.com/Ronus-E/linux-permission-manager) |
| **Budget Pro** | À consolider | HTML, CSS, JavaScript, `localStorage` | Source à retrouver |
| **Mini Adventure** | Prototype jouable | Python, Tkinter | Prototype local |
| **GMAO** — gestion de maintenance | Projet d'études, dépôt public | Python, CustomTkinter, SQLite, Git | [GitHub](https://github.com/Ronus-E/GMAO_App) |

### Vérifications effectuées sur les projets

- **Linux Permission Manager** : script exécuté sur un fichier de test temporaire
  (mode 664 → 644), sortie et code de retour vérifiés.
- **IANATRA** : code Flask/SQLite inspecté, fonctionnalités et rôles recoupés avec
  le README et les templates. La suite de tests existe mais n'a pas été exécutée
  dans le cadre de cette refonte.
- **JARVIS** : arborescence, serveur Node et README inspectés. Le projet tourne
  sur la machine mais n'a pas été relancé pour ce portfolio.
- **Budget Pro** : seul un artefact HTML autonome a été retrouvé dans le stockage
  de VS Code ; le code source n'est pas disponible.
- **Mini Adventure** : `game.py` lu et fonctionnalités confirmées.
- **GMAO** : dépôt public `Ronus-E/GMAO_App` (fork de `FoxIngenious/GMAO_App`)
  inspecté via l'API GitHub le 4 novembre 2026 — branche `master`, Python,
  `requirements.txt` = `customtkinter`, modules `materiels`, `ajouter`,
  `techniciens`, `database`, `models`, `impression`, `demandes_intervention`,
  `bons_travail`. Application non relancée localement.

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

## Tests réalisés le 4 novembre 2026

| Vérification | Résultat |
| ------------ | -------- |
| `node --check script.js` | OK |
| `xmllint --html --noout index.html` | OK |
| `GET /`, `/style.css`, `/script.js` | HTTP 200 |
| Ancres internes (`#accueil` … `#contact`) | Toutes résolues |
| 7 sections attendues | Présentes |
| Filtres projets | Web = 2, Équipe = 1, Tous = 6 |
| Détails techniques | 6 blocs dépliables fonctionnels |
| Formulaire vide | 3 erreurs affichées et champs marqués |
| Formulaire valide | Statut `mailto` affiché |
| Menu mobile | Ouverture, `aria-expanded`, fermeture au clic |
| Scrollspy | Lien actif correct sur `#projets` |
| Débordement horizontal | 0 px en 1440, 768, 390 et 360 |
| Erreurs console sévères | Aucune |
| `prefers-reduced-motion` | Contenu visible, animations neutralisées |
| Contrastes mesurés | Texte 17,25:1 · texte doux 10,18:1 · texte discret 5,57:1 |

**Total : 24 vérifications automatisées Selenium/Chromium, 24 réussies.**

### Non testé

- Firefox, Safari et navigateurs mobiles réels.
- Ouverture effective d'un logiciel de messagerie par `mailto:`.
- Lecteurs d'écran (NVDA, Orca).
- Copie presse-papiers en mode headless : refusée par Chromium, le repli affiche
  un message explicite. Sur `localhost`, l'API Clipboard est normalement
  disponible dans un navigateur de bureau.
- Audit Lighthouse : non exécuté.

## Dépendances et limites

- **Aucune dépendance front-end.** Le site est statique.
- Le formulaire dépend du logiciel de messagerie configuré sur la machine
  (`mailto:`). Sans client email, il faut copier l'adresse manuellement. Un
  message très long peut être tronqué par certains clients.
- Les liens GitHub ouvrent des sites externes.
- Les projets IANATRA, JARVIS, Budget Pro et Mini Adventure n'ont pas de démo
  publique : leur code n'est pas publié ou ne peut pas être exposé sans risque.
- GMAO est une application de bureau : elle se lance avec `python main.py` et
  ne peut pas être démontrée dans un navigateur.

## Publication GitHub Pages

Le site est publié sur <https://ronus-e.github.io/Portfolio/> depuis le dépôt
<https://github.com/Ronus-E/Portfolio>.

Après validation des modifications :

```bash
cd /home/ghostroot/Documents/portfolio
git add index.html style.css script.js README.md robots.txt sitemap.xml
git commit -m "Refonte du portfolio : projets réels, design responsive et accessibilité"
git push origin main
```

GitHub Pages republie automatiquement depuis la branche `main`.

## Personnalisation

- **Couleurs et espacements** : variables `:root` en tête de `style.css`.
- **Contenu** : directement dans `index.html`, sections commentées.
- **Ajouter un projet** : dupliquer un `<article class="project">`, renseigner
  `data-tags` (`web`, `system`, `ai`, `game`, `team`, `todo`) et le statut.
- **Ajouter un filtre** : bouton `data-filter="..."` + valeur correspondante
  dans `data-tags`.
- **Année du pied de page** : injectée automatiquement par `script.js`.

## Sauvegarde

Une copie de l'ancienne version a été créée avant la refonte :

```text
/home/ghostroot/Documents/portfolio-backup-20261104-095145/
```

## Prochaines étapes prioritaires

1. Retrouver ou reconstruire le code source de **Budget Pro**.
2. Ajouter un extrait de code ou une capture de **GMAO** depuis l'application réelle.
3. Tester le site sur Firefox et sur un téléphone réel.
4. Vérifier l'ouverture de `mailto:` avec le client email de la machine.
5. Envisager un backend de contact uniquement si un hébergement et une protection
   anti-spam sont disponibles.
6. Ajouter des captures uniquement si elles proviennent de l'application réelle.
