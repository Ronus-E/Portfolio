# Portfolio — Ronus Eldo TOLIZARA

Portfolio personnel construit avec **HTML5**, **CSS3** et **JavaScript vanilla**,
sans framework, sans bibliothèque et sans backend.

> Ce portfolio reflète un apprentissage en cours. Il ne présente aucune
> expérience professionnelle, aucun diplôme, aucune certification ni aucun
> projet inventé.

## Présentation

Ce site présente, de façon honnête et fidèle, le parcours actuel de
**Ronus Eldo TOLIZARA**, étudiant en informatique :

- ses compétences actuelles, classées par niveau de pratique réel ;
- ses projets personnels confirmés ;
- son parcours d'apprentissage (Linux, Bash, Git/GitHub, cybersécurité) ;
- sa méthode d'apprentissage ;
- ses objectifs.

## Objectif du projet

Construire une présence en ligne **crédible et évolutive** : le site grandira au
même rythme que les compétences de son auteur. Il ne sert pas à se présenter
comme un professionnel, mais à documenter sérieusement une progression
d'étudiant.

## Technologies utilisées

| Technologie | Rôle                                   |
| ----------- | -------------------------------------- |
| HTML5       | Structure et contenu du site           |
| CSS3        | Mise en forme, couleurs, responsive    |
| JavaScript  | Menu mobile, année dynamique, navigation active |

## Structure du projet

```
portfolio/
├── index.html    → structure et contenu des sections
├── style.css     → apparence, disposition, responsive
├── script.js     → comportements (menu, année, lien actif)
└── README.md     → cette documentation
```

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
  section Projets.
- Ajout d'une compétence : dupliquer une ligne dans le groupe de compétences
  concerné.

## Publication sur GitHub

Le dépôt GitHub du projet principal est :
[`Ronus-E/linux-permission-manager`](https://github.com/Ronus-E/linux-permission-manager).

Ce portfolio n'est pas encore publié. Pour le publier :

```bash
# 1. Initialiser le dépôt Git
git init
git add .
git commit -m "Portfolio initial"

# 2. Créer un dépôt vide nommé "portfolio" sur GitHub, puis :
git remote add origin https://github.com/Ronus-E/portfolio.git
git branch -M main
git push -u origin main
```

Pour publier le site gratuitement avec GitHub Pages :

1. Sur GitHub : **Settings → Pages**
2. Source : branche `main`, dossier `/ (root)`
3. Le site sera disponible sur `https://Ronus-E.github.io/portfolio/`

## Portfolio évolutif

Ce site est conçu pour évoluer. Quand de nouvelles compétences, de nouveaux
projets ou de nouvelles étapes d'apprentissage seront réels, il suffira de les
ajouter dans la section correspondante. Aucune information n'a été ajoutée en
avance pour gonfler la page.

## Accessibilité et SEO

- `lang="fr"`, meta description, balises sémantiques
  (`header`, `nav`, `main`, `section`, `footer`, `address`)
- Navigation utilisable au clavier (`focus-visible`)
- Menu mobile piloté par `aria-expanded`
- Contrastes vérifiés sur fond sombre
- Respect de `prefers-reduced-motion`