/* =========================================================================
   PORTFOLIO — SCRIPT JAVASCRIPT
   Rôle : gérer les comportements du site :
   1. Menu mobile (ouverture / fermeture)
   2. Fermeture du menu quand on clique sur un lien
   3. Fermeture du menu avec la touche Échap
   4. Mise à jour de l'année dans le footer
   5. Lien actif dans la navigation selon la section affichée
   6. Barre de progression de lecture en haut de page
   7. Révélation douce des sections au défilement (si animations autorisées)
   Aucune dépendance externe — JavaScript vanilla.
   ========================================================================= */

// "use strict" active un mode strict : les erreurs courantes
// (variable non déclarée, par exemple) sont signalées plus tôt.
"use strict";

/* -------------------------------------------------------------------------
   1. RÉCUPÉRATION DES ÉLÉMENTS DU DOM
   querySelector retourne le PREMIER élément correspondant au sélecteur CSS.
   ------------------------------------------------------------------------- */
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav__link");
const yearElement = document.querySelector("#current-year");

/* Largeur à partir de laquelle on considère l'écran "mobile"
   (doit correspondre au media query du CSS : max-width: 720px) */
const MOBILE_QUERY = window.matchMedia("(max-width: 720px)");

/* -------------------------------------------------------------------------
   2. MENU MOBILE
   Le bouton pilote deux choses :
   - la classe .is-open sur le menu (ouvre/ferme le CSS)
   - l'attribut aria-expanded (informe les lecteurs d'écran de l'état)
   ------------------------------------------------------------------------- */
function toggleMenu() {
  // classe "is-open" ajoutée si absente, retirée si présente
  const isOpen = navMenu.classList.toggle("is-open");

  // aria-expanded = "true" ou "false" : état lu par les lecteurs d'écran
  navToggle.setAttribute("aria-expanded", String(isOpen));

  // aria-label mis à jour : le bouton annonce "Fermer" ou "Ouvrir"
  navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
}

function closeMenu() {
  // Si le menu est déjà fermé, on ne fait rien
  if (!navMenu.classList.contains("is-open")) return;

  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Ouvrir le menu");
}

// Événement "click" sur le bouton burger → ouvrir/fermer
navToggle.addEventListener("click", toggleMenu);

/* -------------------------------------------------------------------------
   3. FERMETURE DU MENU
   ------------------------------------------------------------------------- */

// a) Quand on clique sur un lien du menu, il se ferme
//    (utile sur mobile : on veut voir la section cliquée)
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// b) Touche Échap : raccourci clavier classique pour fermer un menu
//    keydown = "une touche vient d'être enfoncée"
document.addEventListener("keydown", (event) => {
  // event.key contient le nom de la touche pressée
  if (event.key === "Escape") {
    closeMenu();
    // On rend le focus visible sur le bouton pour repartir proprement au clavier
    navToggle.focus();
  }
});

// c) Si on repasse en grand écran (rotation de téléphone, redimensionnement),
//    on referme proprement le menu mobile.
//    "change" = événement déclenché quand la media query change d'état.
MOBILE_QUERY.addEventListener("change", (event) => {
  if (!event.matches) closeMenu(); // plus en mode mobile → fermer
});

/* -------------------------------------------------------------------------
   4. ANNÉE COURTE DANS LE FOOTER
   new Date() = date et heure actuelles.
   .getFullYear() = année au format numérique (ex: 2026).
   On remplace le contenu de #current-year pour ne jamais le mettre à jour
   manuellement.
   ------------------------------------------------------------------------- */
if (yearElement) {
  // La condition if protège le script : si l'élément n'existe pas dans le
  // HTML, on n'essaie pas d'écrire dedans (cela provoquerait une erreur).
  yearElement.textContent = String(new Date().getFullYear());
}

/* -------------------------------------------------------------------------
   5. LIEN ACTIF DANS LA NAVIGATION
   On observe les sections du site ; celle qui occupe le centre de l'écran
   devient "active" (son lien est surligné en vert).

   IntersectionObserver = API moderne qui surveille la position des éléments
   par rapport à la fenêtre. Plus performant qu'un écouteur de défilement.
   ------------------------------------------------------------------------- */
const sections = document.querySelectorAll("section[id]");

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // entry.isIntersecting : la section est visible à l'écran ?
        if (!entry.isIntersecting) return;

        const currentId = entry.target.id;

        // On retire la classe "is-active" de tous les liens...
        navLinks.forEach((link) => link.classList.remove("is-active"));

        // ...puis on l'ajoute uniquement au lien de la section visible
        const activeLink = document.querySelector(
          `.nav__link[href="#${currentId}"]`
        );
        if (activeLink) activeLink.classList.add("is-active");
      });
    },
    {
      // Le point de déclenchement : quand la section atteint ~45% de la
      // hauteur de l'écran, elle devient la section active.
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* -------------------------------------------------------------------------
   6. BARRE DE PROGRESSION DE LECTURE
   Une fine barre en haut de page indique la progression dans le document.
   L'élément est créé ici (aucune modification du HTML nécessaire).
   ------------------------------------------------------------------------- */
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
progressBar.setAttribute("aria-hidden", "true"); // purement décoratif
document.body.appendChild(progressBar);

function updateProgress() {
  const root = document.documentElement;
  const scrollable = root.scrollHeight - root.clientHeight;
  const ratio = scrollable > 0 ? root.scrollTop / scrollable : 0;
  progressBar.style.width = (ratio * 100).toFixed(2) + "%";
}

updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

/* -------------------------------------------------------------------------
   7. RÉVÉLATION DOUCE AU DÉFILEMENT
   Les sections apparaissent légèrement quand elles entrent dans l'écran.
   Désactivé si l'utilisateur préfère moins d'animations, ou si
   IntersectionObserver n'est pas disponible.
   ------------------------------------------------------------------------- */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(".hero__inner, .section");

  // État initial : éléments légèrement décalés et transparents (voir CSS)
  revealTargets.forEach((el) => el.classList.add("reveal-init"));

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-in");
        obs.unobserve(entry.target); // on n'anime qu'une seule fois
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
}
