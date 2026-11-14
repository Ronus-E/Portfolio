/* =========================================================================
   PORTFOLIO — Ronus
   Moteur d'internationalisation (i18n).
   Bascule de langue instantanee, sans rechargement, sans dependance et
   sans le moindre appel reseau.

   -------------------------------------------------------------------------
   ARCHITECTURE
   -------------------------------------------------------------------------
   Langue SOURCE   : le balisage de index.html, ecrit en francais. Il est
                     photographie depuis le DOM au demarrage (contenu HTML et
                     attributs). Aucune duplication du contenu francais.

   Langues cibles : un fichier par langue, dans i18n/<code>.js. Chacun
                     s'enregistre aupres du moteur :
                         window.PortfolioI18N.register("<code>", { ...cles });

   Le menu deroulant est construit a partir du registre LOCALES : rien a
   ecrire dans index.html pour ajouter une langue.

   -------------------------------------------------------------------------
   AJOUTER UNE LANGUE — 3 etapes, aucune logique a modifier
   -------------------------------------------------------------------------
     1. cp i18n/en.js i18n/<code>.js   puis traduire les VALEURS (pas les cles)
     2. Ajouter une entree dans LOCALES ci-dessous
     3. Ajouter <script src="i18n/<code>.js" defer></script> dans index.html

   -------------------------------------------------------------------------
   BALISAGE RECONNU DANS index.html
   -------------------------------------------------------------------------
     data-i18n="cle"                 remplace le contenu HTML de l'element
     data-i18n-aria-label="cle"      remplace l'attribut aria-label
     data-i18n-placeholder="cle"     remplace l'attribut placeholder
     data-i18n-content="cle"         remplace l'attribut content (meta, link)
     class="level level--practice"   etiquettes de niveau, traduites par classe

   -------------------------------------------------------------------------
   PRIORITE DE LA LANGUE AU DEMARRAGE
   -------------------------------------------------------------------------
     ?lang=xx   >   localStorage   >   langue du navigateur   >   francais

   -------------------------------------------------------------------------
   API PUBLIQUE : window.PortfolioI18N
   -------------------------------------------------------------------------
     .register(code, dict)   enregistre un dictionnaire (appele par i18n/*.js)
     .apply(code)            applique une langue et met a jour l'interface
     .t(cle)                 chaine traduite (pour les messages de script.js)
     .lang                   langue courante ("fr", "en", "es", "de")
     .locales                langues disponibles (registre + dictionnaire)
   Evenement : document "portfolio:langchange"  (detail.lang)
   ========================================================================= */

"use strict";

(() => {
  /* -----------------------------------------------------------------------
     CONSTANTES
     ----------------------------------------------------------------------- */
  const STORAGE_KEY = "portfolio-lang";
  const SOURCE_LOCALE = "fr";
  const DEFAULT_LOCALE = "fr";
  const ATTR_PREFIX = "data-i18n-";
  const URL_PARAM = "lang";

  /* -----------------------------------------------------------------------
     REGISTRE DES LANGUES
     Chaque entree decrit la langue pour le menu, le SEO et l'attribut lang.
     ----------------------------------------------------------------------- */
  const LOCALES = [
    { code: "fr", name: "Français", flag: "🇫🇷", htmlLang: "fr", ogLocale: "fr_FR", dir: "ltr" },
    { code: "en", name: "English", flag: "🇬🇧", htmlLang: "en", ogLocale: "en_GB", dir: "ltr" },
    { code: "es", name: "Español", flag: "🇪🇸", htmlLang: "es", ogLocale: "es_ES", dir: "ltr" },
    { code: "de", name: "Deutsch", flag: "🇩🇪", htmlLang: "de", ogLocale: "de_DE", dir: "ltr" },
  ];

  const LOCALE_BY_CODE = new Map(LOCALES.map((locale) => [locale.code, locale]));

  /* -----------------------------------------------------------------------
     DICTIONNAIRES
     Remplis par les fichiers i18n/<code>.js au chargement de la page.
     La langue source n'en a pas besoin : elle est lue dans le DOM.
     ----------------------------------------------------------------------- */
  const DICTS = new Map();

  /* -----------------------------------------------------------------------
     CHAINES PRODUITES PAR script.js
     Elles n'existent pas dans le balisage : leur version francaise (langue
     source) doit donc etre fournie ici. Chaque fichier de langue les
     redefinit avec les cles "js.*".
     ----------------------------------------------------------------------- */
  const SOURCE_STRINGS = {
    "js.menu.open": "Ouvrir le menu",
    "js.menu.close": "Fermer le menu",
    "js.form.err.name": "Indiquez au moins deux caractères.",
    "js.form.err.email": "Indiquez une adresse email valide.",
    "js.form.err.message": "Écrivez au moins dix caractères.",
    "js.form.err.summary":
      "Le formulaire contient une erreur. Vérifiez les champs signalés.",
    "js.form.subject.default": "Message depuis le portfolio",
    "js.form.mailto.name": "Nom",
    "js.form.mailto.email": "Email",
    "js.form.mailto.footer": "Message préparé depuis le portfolio de Ronus.",
    "js.form.status":
      "Votre logiciel de messagerie va s'ouvrir avec le message prérempli. Sinon, copiez l'adresse email.",
    "js.copy.ok": "Adresse copiée dans le presse-papiers.",
    "js.copy.fail":
      "Copie automatique impossible — sélectionnez l'adresse manuellement.",
  };

  /* -----------------------------------------------------------------------
     ETIQUETTES DE NIVEAU
     Elles reviennent une trentaine de fois dans le balisage : traduites par
     classe plutot que par cle individuelle.
     ----------------------------------------------------------------------- */
  const LEVEL_KEYS = {
    "level--practice": "level.practice",
    "level--progress": "level.progress",
    "level--discover": "level.discover",
  };

  /* -----------------------------------------------------------------------
     ETAT
     ----------------------------------------------------------------------- */
  const textNodes = []; //  { el, key, source }  contenu HTML
  const attrNodes = []; //  { el, attr, key, source }  attributs traduisibles
  const levelNodes = []; // { el, key, source }  etiquettes de niveau
  let current = SOURCE_LOCALE;
  let captured = false;
  let initialized = false;
  let toggleEl = null;
  let menuEl = null;
  let menuOpen = false;

  /* -----------------------------------------------------------------------
     1. PHOTOGRAPHIE DE LA LANGUE SOURCE
     ----------------------------------------------------------------------- */
  function capture() {
    if (captured) return;
    captured = true;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      textNodes.push({ el, key: el.dataset.i18n, source: el.innerHTML });
    });

    document
      .querySelectorAll(
        `[${ATTR_PREFIX}aria-label],[${ATTR_PREFIX}placeholder],[${ATTR_PREFIX}content]`
      )
      .forEach((el) => {
        Array.from(el.attributes).forEach((attr) => {
          if (!attr.name.startsWith(ATTR_PREFIX)) return;
          const target = attr.name.slice(ATTR_PREFIX.length);
          attrNodes.push({
            el,
            attr: target,
            key: attr.value,
            source: el.getAttribute(target) || "",
          });
        });
      });

    document.querySelectorAll(".level").forEach((el) => {
      const cls = Object.keys(LEVEL_KEYS).find((name) => el.classList.contains(name));
      if (cls) levelNodes.push({ el, key: LEVEL_KEYS[cls], source: el.innerHTML });
    });
  }

  /* -----------------------------------------------------------------------
     2. RESOLUTION D'UNE CLE
     ----------------------------------------------------------------------- */
  function lookup(code, key) {
    if (code === SOURCE_LOCALE) return SOURCE_STRINGS[key];
    const dict = DICTS.get(code);
    return dict ? dict[key] : undefined;
  }

  /* Une cle absente d'une traduction retombe sur la langue source plutot que
     de laisser un trou : la page reste lisible, et l'avertissement console
     permet de reperer le manque. */
  function resolve(code, key) {
    const value = lookup(code, key);
    if (typeof value === "string") return value;
    return lookup(SOURCE_LOCALE, key);
  }

  /* -----------------------------------------------------------------------
     3. APPLICATION D'UNE LANGUE
     ----------------------------------------------------------------------- */
  function apply(code) {
    const target = LOCALE_BY_CODE.has(code) ? code : DEFAULT_LOCALE;
    capture();

    const missing = [];

    textNodes.forEach(({ el, key, source }) => {
      if (target === SOURCE_LOCALE) {
        el.innerHTML = source;
        return;
      }
      const value = resolve(target, key);
      if (typeof value === "string") el.innerHTML = value;
      else {
        missing.push(key);
        el.innerHTML = source;
      }
    });

    attrNodes.forEach(({ el, attr, key, source }) => {
      if (target === SOURCE_LOCALE) {
        el.setAttribute(attr, source);
        return;
      }
      const value = resolve(target, key);
      if (typeof value === "string") el.setAttribute(attr, value);
      else {
        missing.push(key);
        el.setAttribute(attr, source);
      }
    });

    levelNodes.forEach(({ el, key, source }) => {
      if (target === SOURCE_LOCALE) {
        el.innerHTML = source;
        return;
      }
      const value = resolve(target, key);
      el.innerHTML = typeof value === "string" ? value : source;
    });

    if (missing.length > 0) {
      console.warn(
        `[i18n] ${new Set(missing).size} cle(s) absente(s) en "${target}" :`,
        [...new Set(missing)].join(", ")
      );
    }

    /* --- metadonnees SEO et attributs du document --- */
    const meta = LOCALE_BY_CODE.get(target);
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;

    current = target;

    syncUI(target);
    persist(target);
    syncURL(target);

    document.dispatchEvent(
      new CustomEvent("portfolio:langchange", { detail: { lang: target } })
    );
  }

  /* Traduction a la demande, pour les messages generes par script.js. */
  function t(key) {
    const value = resolve(current, key);
    return typeof value === "string" ? value : key;
  }

  /* -----------------------------------------------------------------------
     4. MENU DEROULANT (construit depuis le registre)
     ----------------------------------------------------------------------- */
  function availableLocales() {
    return LOCALES.filter((locale) => locale.code === SOURCE_LOCALE || DICTS.has(locale.code));
  }

  function buildMenu() {
    if (!menuEl) return;
    menuEl.textContent = "";

    availableLocales().forEach((locale) => {
      const item = document.createElement("li");
      item.className = "lang-select__li";
      item.setAttribute("role", "none");

      const button = document.createElement("button");
      button.type = "button";
      button.className = "lang-select__item";
      button.dataset.lang = locale.code;
      button.setAttribute("role", "menuitemradio");
      button.setAttribute("aria-checked", "false");
      button.setAttribute("lang", locale.htmlLang);
      button.innerHTML =
        `<span class="lang-select__flag" aria-hidden="true">${locale.flag}</span>` +
        `<span class="lang-select__name">${locale.name}</span>` +
        `<span class="lang-select__tag">${locale.code.toUpperCase()}</span>` +
        `<span class="lang-select__check" aria-hidden="true">✓</span>`;

      button.addEventListener("click", () => {
        apply(locale.code);
        closeMenu();
        if (toggleEl) toggleEl.focus();
      });

      item.appendChild(button);
      menuEl.appendChild(item);
    });
  }

  function items() {
    return menuEl ? Array.from(menuEl.querySelectorAll(".lang-select__item")) : [];
  }

  function openMenu(focusIndex) {
    if (!menuEl || !toggleEl || menuOpen) return;
    menuOpen = true;
    menuEl.hidden = false;
    toggleEl.setAttribute("aria-expanded", "true");
    toggleEl.closest(".lang-select")?.classList.add("is-open");

    if (typeof focusIndex === "number") {
      const list = items();
      const index = focusIndex < 0 ? list.length - 1 : focusIndex;
      list[index]?.focus();
    }
  }

  function closeMenu() {
    if (!menuEl || !toggleEl || !menuOpen) return;
    menuOpen = false;
    menuEl.hidden = true;
    toggleEl.setAttribute("aria-expanded", "false");
    toggleEl.closest(".lang-select")?.classList.remove("is-open");
  }

  function moveFocus(step) {
    const list = items();
    if (list.length === 0) return;
    const at = list.indexOf(document.activeElement);
    const next = at < 0 ? 0 : (at + step + list.length) % list.length;
    list[next].focus();
  }

  function wireMenu() {
    toggleEl = document.querySelector(".lang-select__toggle");
    menuEl = document.getElementById("lang-menu");
    if (!toggleEl || !menuEl) return;

    toggleEl.addEventListener("click", () => {
      if (menuOpen) closeMenu();
      else openMenu();
    });

    toggleEl.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        openMenu(0);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        openMenu(-1);
      }
    });

    menuEl.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveFocus(1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        moveFocus(-1);
      } else if (event.key === "Home") {
        event.preventDefault();
        items()[0]?.focus();
      } else if (event.key === "End") {
        event.preventDefault();
        const list = items();
        list[list.length - 1]?.focus();
      } else if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        toggleEl.focus();
      } else if (event.key === "Tab") {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (!menuOpen) return;
      if (!event.target.closest(".lang-select")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuOpen) {
        closeMenu();
        toggleEl.focus();
      }
    });
  }

  /* -----------------------------------------------------------------------
     5. SYNCHRONISATION DE L'INTERFACE
     ----------------------------------------------------------------------- */
  function syncUI(code) {
    document.querySelectorAll("[data-lang-current]").forEach((el) => {
      el.textContent = code.toUpperCase();
    });

    items().forEach((item) => {
      const active = item.dataset.lang === code;
      item.setAttribute("aria-checked", String(active));
      item.classList.toggle("is-active", active);
    });
  }

  /* -----------------------------------------------------------------------
     6. MEMORISATION ET URL
     ----------------------------------------------------------------------- */
  function persist(code) {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch (error) {
      /* stockage indisponible (navigation privee, quota) : on continue */
    }
  }

  /* L'URL reflete la langue : les liens ?lang=xx sont partageables et
     coherents avec les balises hreflang de index.html. */
  function syncURL(code) {
    if (!window.history || typeof window.history.replaceState !== "function") return;
    try {
      const url = new URL(window.location.href);
      if (code === SOURCE_LOCALE) url.searchParams.delete(URL_PARAM);
      else url.searchParams.set(URL_PARAM, code);
      const next = url.pathname + url.search + url.hash;
      window.history.replaceState(null, "", next);
    } catch (error) {
      /* file:// ou origine opaque : on ignore */
    }
  }

  /* -----------------------------------------------------------------------
     7. LANGUE INITIALE
     ----------------------------------------------------------------------- */
  function baseCode(tag) {
    return String(tag || "").toLowerCase().split("-")[0];
  }

  function fromURL() {
    try {
      const value = new URLSearchParams(window.location.search).get(URL_PARAM);
      const code = baseCode(value);
      return LOCALE_BY_CODE.has(code) ? code : null;
    } catch (error) {
      return null;
    }
  }

  function fromStorage() {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return LOCALE_BY_CODE.has(value) ? value : null;
    } catch (error) {
      return null;
    }
  }

  function fromNavigator() {
    const tags =
      Array.isArray(navigator.languages) && navigator.languages.length
        ? navigator.languages
        : [navigator.language];
    for (const tag of tags) {
      const code = baseCode(tag);
      if (LOCALE_BY_CODE.has(code)) return code;
    }
    return null;
  }

  function initialCode() {
    return fromURL() || fromStorage() || fromNavigator() || DEFAULT_LOCALE;
  }

  /* -----------------------------------------------------------------------
     8. DEMARRAGE
     ----------------------------------------------------------------------- */
  function init() {
    capture();
    wireMenu();
    buildMenu();
    apply(initialCode());
    initialized = true;
  }

  function register(code, dict) {
    if (!LOCALE_BY_CODE.has(code)) {
      console.warn(`[i18n] langue non declaree dans LOCALES : "${code}"`);
      return;
    }
    if (!dict || typeof dict !== "object") {
      console.warn(`[i18n] dictionnaire invalide pour "${code}"`);
      return;
    }
    DICTS.set(code, dict);

    /* Cas normal : le dictionnaire s'enregistre avant init(), qui fera le
       reste. Cas tardif : on rafraichit le menu et, si c'est la langue
       affichee, on reapplique pour que la traduction prenne effet. */
    if (menuEl) {
      buildMenu();
      syncUI(current);
    }
    if (initialized && code === current) apply(code);
  }

  window.PortfolioI18N = {
    register,
    apply,
    t,
    levels: LEVEL_KEYS,
    get lang() {
      return current;
    },
    get locales() {
      return availableLocales();
    },
  };

  /* Les dictionnaires sont charges par des <script defer> : ils s'executent
     apres l'analyse du document, donc avec readyState === "interactive" (et
     non "loading"). Initialiser immediatement ferait tourner apply() avant
     qu'aucun dictionnaire ne soit enregistre : toute la page retomberait en
     francais avec 286 avertissements.
     On attend donc DOMContentLoaded, emis seulement apres le dernier script
     differe. Repli : si le document est deja complet (script charge
     dynamiquement), DOMContentLoaded ne viendra plus — on demarre aussitot. */
  if (document.readyState === "complete") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
