# Portfolio — Ronus Eldo TOLIZARA

Portfolio personnel construit avec **HTML5**, **CSS3** et **JavaScript vanilla**,
sans framework, sans bibliothèque et sans backend.

> Ce portfolio reflète un apprentissage en cours. Il ne présente aucune
> expérience professionnelle, aucun diplôme, aucune certification ni aucun
> projet inventé.

## Présentation

Ce site présente, de façon honnête et fidèle, le parcours actuel de
**Ronus Eldo TOLIZARA**, étudiant en informatique :

- ses compétences, classées par domaine et par état réel d'apprentissage
  (`Pratiqué`, `En apprentissage`, `Prévu`) ;
- son premier projet personnel terminé : **Linux Permission Manager v1.0** ;
- son parcours d'apprentissage en sept étapes (Linux, Bash, réseaux,
  cybersécurité, projets) ;
- sa méthode d'apprentissage ;
- ses objectifs ;
- un espace documentation pour ses futures fiches techniques.

## Objectif du projet

Construire une présence en ligne **crédible et évolutive** : le site grandira au
même rythme que les compétences de son auteur. Il ne sert pas à se présenter
comme un professionnel, mais à documenter sérieusement une progression
d'étudiant.

## Technologies utilisées

| Technologie | Rôle                                             |
| ----------- | ------------------------------------------------ |
| HTML5       | Structure et contenu du site                     |
| CSS3        | Mise en forme, couleurs, responsive              |
| JavaScript  | Menu mobile, année dynamique, navigation active  |

## Structure du projet

```text
portfolio/
├── index.html    → structure et contenu des sections
├── style.css     → apparence, disposition, responsive
├── script.js     → comportements (menu, année, lien actif)
└── README.md     → cette documentation
```

### Sections de la page

1. **Accueil** — présentation et liens rapides.
2. **À propos** — intérêt pour Linux, réseaux et cybersécurité.
3. **Compétences** — cartes par domaine, avec les trois états d'apprentissage.
4. **Projets** — fiche complète de Linux Permission Manager v1.0.
5. **Parcours** — timeline en sept étapes.
6. **Méthode** — cycle d'apprentissage.
7. **Objectifs** — intentions de progression.
8. **Documentation** — notes et comptes rendus publics à venir.
9. **Contact** — coordonnées réelles uniquement.

## Lancer le portfolio localement

Aucune installation nécessaire.

### Option 1 — Ouvrir le fichier directement

```bash
xdg-open index.html      # Linux
open index.html          # macOS
start index.html         # Windows
```

### Option 2 — Serveur local (recommandé)

Nécessite Python 3 (souvent déjà installé sur Linux) :

```bash
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000> dans le navigateur.

## Personnalisation

Le contenu principal se trouve dans `index.html`. Chaque section est clairement
annotée par un commentaire HTML (`<!-- 1. ACCUEIL -->`, `<!-- 2. À PROPOS -->`,
etc.).

- Couleurs du site : variables `:root` dans `style.css` (ex. `--accent`).
- Ajout d'un projet : dupliquer un bloc `<article class="project-card">` dans la
  section Projets, puis adapter statut, fonctionnalités et lien.
- Ajout d'une compétence : dupliquer une ligne dans la carte de domaine
  concernée, avec l'étiquette adaptée (`tag--practice`, `tag--learning` ou
  `tag--planned`).
- Mise à jour du parcours : modifier le texte du badge
  (`timeline__status--practice`, `--learning` ou `--planned`) sur l'étape
  concernée.

## Projet principal

Le dépôt GitHub du projet présenté est :
[`Ronus-E/linux-permission-manager`](https://github.com/Ronus-E/linux-permission-manager).

Statut affiché sur le portfolio : **Terminé — v1.0**.

## Publication

Le portfolio est publié via **GitHub Pages** :

- site : <https://ronus-e.github.io/Portfolio/>
- dépôt : <https://github.com/Ronus-E/Portfolio>

Pour republier après une modification :

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push
```

GitHub Pages republie automatiquement le site après un `push` sur `main`.

## Portfolio évolutif

Ce site est conçu pour évoluer. Quand de nouvelles compétences, de nouveaux
projets ou de nouvelles étapes d'apprentissage seront réels, il suffira de les
ajouter dans la section correspondante. Aucune information n'a été ajoutée en
avance pour gonfler la page.

## Accessibilité et SEO

- `lang="fr"`, meta description, balises sémantiques
  (`header`, `nav`, `main`, `section`, `footer`, `address`, `figure`, `ol`)
- Navigation utilisable au clavier (`focus-visible`)
- Menu mobile piloté par `aria-expanded`
- Bloc terminal focalisable au clavier (`tabindex="0"`) pour le défilement
- Attribut `aria-hidden` sur les éléments purement décoratifs
- Contrastes vérifiés sur fond sombre
- Respect de `prefers-reduced-motion`
