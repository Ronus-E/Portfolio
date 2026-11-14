/* =========================================================================
   PORTFOLIO — Ronus
   JavaScript vanilla, sans dépendance.
   Rôles :
   1. Menu mobile accessible
   2. En-tête condensé au défilement
   3. Barre de progression de lecture
   4. Lien de navigation actif (scrollspy)
   5. Révélation douce des blocs
   6. Filtres de projets
   7. Formulaire de contact (mailto, sans backend)
   8. Copie de l'adresse email
   9. Heure locale de Mahajanga
   10. Année du pied de page
   11. Bascule de langue FR / EN (moteur dans i18n.js)
   ========================================================================= */

"use strict";

(() => {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Traduction des messages produits ici. Les textes vivent dans i18n.js :
     on retombe sur la clé elle-même si i18n.js n'a pas pu se charger. */
  const t = (key) => (window.PortfolioI18N ? window.PortfolioI18N.t(key) : key);

  /* La classe n'est ajoutée que si le script s'exécute : sans JS, tout reste
     visible. Le CSS neutralise l'effet si l'utilisateur réduit les animations. */
  root.classList.add("reveal-ready");

  /* -----------------------------------------------------------------------
     1. MENU MOBILE
     ----------------------------------------------------------------------- */
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector("#nav-menu");
  const navLinks = Array.from(document.querySelectorAll(".nav__link"));

  function setMenuState(open) {
    if (!navToggle || !navMenu) return;
    navMenu.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? t("js.menu.close") : t("js.menu.open"));
  }

  function closeMenu() {
    if (!navMenu || !navMenu.classList.contains("is-open")) return;
    setMenuState(false);
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      setMenuState(!navMenu.classList.contains("is-open"));
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
        closeMenu();
        navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!navMenu.classList.contains("is-open")) return;
      if (navMenu.contains(event.target) || navToggle.contains(event.target)) return;
      closeMenu();
    });

    const desktopQuery = window.matchMedia("(min-width: 781px)");
    const onViewportChange = (event) => {
      if (event.matches) closeMenu();
    };
    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", onViewportChange);
    } else if (typeof desktopQuery.addListener === "function") {
      desktopQuery.addListener(onViewportChange);
    }
  }

  /* -----------------------------------------------------------------------
     2. EN-TÊTE CONDENSÉ + 3. PROGRESSION DE LECTURE
     ----------------------------------------------------------------------- */
  const header = document.querySelector("#site-header");
  const progressBar = document.querySelector("#scroll-progress-bar");
  let frameRequested = false;

  function updateScrollUI() {
    const scrollTop = window.scrollY || root.scrollTop;

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 8);
    }

    if (progressBar) {
      const scrollable = root.scrollHeight - root.clientHeight;
      const ratio = scrollable > 0 ? scrollTop / scrollable : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    }

    frameRequested = false;
  }

  function requestScrollUpdate() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateScrollUI);
  }

  updateScrollUI();
  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate);

  /* -----------------------------------------------------------------------
     4. LIEN DE NAVIGATION ACTIF
     ----------------------------------------------------------------------- */
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length > 0) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach((section) => spy.observe(section));
  }

  /* -----------------------------------------------------------------------
     5. RÉVÉLATION DOUCE
     ----------------------------------------------------------------------- */
  const revealTargets = Array.from(document.querySelectorAll("[data-reveal]"));

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    revealTargets.forEach((element) => revealObserver.observe(element));
  }

  /* -----------------------------------------------------------------------
     6. FILTRES DE PROJETS
     ----------------------------------------------------------------------- */
  const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
  const projectCards = Array.from(document.querySelectorAll("#projects-grid .project"));

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      projectCards.forEach((card) => {
        const tags = (card.dataset.tags || "").split(/\s+/).filter(Boolean);
        const visible = filter === "all" || tags.includes(filter);
        card.hidden = !visible;
      });
    });
  });

  /* -----------------------------------------------------------------------
     7. FORMULAIRE DE CONTACT — préparation d'un email (mailto)
     ----------------------------------------------------------------------- */
  const form = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");
  const recipient = "eldockarter@gmail.com";

  function getField(id) {
    return document.querySelector(`#${id}`);
  }

  function setFieldError(field, errorElement, message) {
    if (!field || !errorElement) return;
    field.setAttribute("aria-invalid", "true");
    errorElement.textContent = message;
  }

  function clearFieldError(field, errorElement) {
    if (!field || !errorElement) return;
    field.removeAttribute("aria-invalid");
    errorElement.textContent = "";
  }

  if (form) {
    const nameInput = getField("name");
    const emailInput = getField("email");
    const subjectInput = getField("subject");
    const messageInput = getField("message");

    const nameError = getField("name-error");
    const emailError = getField("email-error");
    const messageError = getField("message-error");

    const fields = [
      [nameInput, nameError],
      [emailInput, emailError],
      [messageInput, messageError],
    ];

    fields.forEach(([field, errorElement]) => {
      if (!field) return;
      field.addEventListener("input", () => clearFieldError(field, errorElement));
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let firstInvalid = null;
      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";
      /* Le libellé de l'option suit la langue active ; sa valeur reste un
         identifiant interne en français. On envoie donc le texte visible. */
      const selectedOption =
        subjectInput && subjectInput.selectedOptions ? subjectInput.selectedOptions[0] : null;
      const subject = selectedOption
        ? selectedOption.textContent.trim()
        : t("js.form.subject.default");

      if (name.length < 2) {
        setFieldError(nameInput, nameError, t("js.form.err.name"));
        firstInvalid = firstInvalid || nameInput;
      } else {
        clearFieldError(nameInput, nameError);
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailPattern.test(email)) {
        setFieldError(emailInput, emailError, t("js.form.err.email"));
        firstInvalid = firstInvalid || emailInput;
      } else {
        clearFieldError(emailInput, emailError);
      }

      if (message.length < 10) {
        setFieldError(messageInput, messageError, t("js.form.err.message"));
        firstInvalid = firstInvalid || messageInput;
      } else {
        clearFieldError(messageInput, messageError);
      }

      if (firstInvalid) {
        if (formStatus) {
          formStatus.textContent = t("js.form.err.summary");
        }
        firstInvalid.focus();
        return;
      }

      const subjectLine = `[Portfolio] ${subject} — ${name}`;
      const bodyLines = [
        `${t("js.form.mailto.name")} : ${name}`,
        `${t("js.form.mailto.email")} : ${email}`,
        "",
        message,
        "",
        "—",
        t("js.form.mailto.footer"),
      ];

      const mailto =
        `mailto:${recipient}` +
        `?subject=${encodeURIComponent(subjectLine)}` +
        `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      if (formStatus) {
        formStatus.textContent = t("js.form.status");
      }

      window.location.href = mailto;
    });
  }

  /* -----------------------------------------------------------------------
     8. COPIE DE L'ADRESSE EMAIL
     ----------------------------------------------------------------------- */
  const copyButtons = Array.from(document.querySelectorAll("[data-copy]"));
  const copyStatus = document.querySelector("#copy-status");

  function legacyCopy(text) {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    let succeeded = false;
    try {
      succeeded = document.execCommand("copy");
    } catch (error) {
      succeeded = false;
    }
    document.body.removeChild(helper);
    return succeeded;
  }

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy || "";
      if (!text) return;

      let copied = false;

      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        try {
          await navigator.clipboard.writeText(text);
          copied = true;
        } catch (error) {
          copied = legacyCopy(text);
        }
      } else {
        copied = legacyCopy(text);
      }

      if (copyStatus) {
        copyStatus.textContent = copied ? t("js.copy.ok") : t("js.copy.fail");
      }

      window.setTimeout(() => {
        if (copyStatus) copyStatus.textContent = "";
      }, 3200);
    });
  });

  /* -----------------------------------------------------------------------
     9. HEURE LOCALE DE MAHAJANGA (UTC+3)
     ----------------------------------------------------------------------- */
  const clock = document.querySelector("#local-clock");

  if (clock) {
    /* Le format suit la langue active : les codes du moteur (« fr », « en »,
       « es », « de ») sont des etiquettes BCP 47 valides pour Intl.
       « Mahajanga » et « UTC+3 » sont des donnees, pas du texte traduisible. */
    let timeFormat = null;

    const buildFormat = () => {
      const locale = (window.PortfolioI18N && window.PortfolioI18N.lang) || "fr";
      try {
        timeFormat = new Intl.DateTimeFormat(locale, {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Indian/Antananarivo",
        });
      } catch (error) {
        timeFormat = null;
      }
    };

    const updateClock = () => {
      try {
        clock.textContent = `Mahajanga · ${timeFormat.format(new Date())} UTC+3`;
      } catch (error) {
        clock.textContent = "Mahajanga · UTC+3";
      }
    };

    buildFormat();
    updateClock();
    window.setInterval(updateClock, 30000);

    document.addEventListener("portfolio:langchange", () => {
      buildFormat();
      updateClock();
    });
  }

  /* -----------------------------------------------------------------------
     10. ANNÉE DU PIED DE PAGE
     ----------------------------------------------------------------------- */
  const yearElement = document.querySelector("#current-year");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  /* -----------------------------------------------------------------------
     11. CHANGEMENT DE LANGUE
     Le remplacement des textes est fait par i18n.js, qui émet l'événement
     « portfolio:langchange ». Ici on ne gère que ce que i18n.js ne peut pas
     savoir : le libellé du menu mobile, les messages transitoires et
     l'horloge locale (section 9).
     ----------------------------------------------------------------------- */
  const errorIds = ["name-error", "email-error", "message-error"];
  const fieldIds = ["name", "email", "message"];

  document.addEventListener("portfolio:langchange", () => {
    /* Le libellé dépend de l'état ouvert/fermé, pas seulement de la langue. */
    if (navToggle && navMenu) {
      setMenuState(navMenu.classList.contains("is-open"));
    }

    /* Les messages de statut sont transitoires : on les vide plutôt que de
       les traduire après coup, pour éviter un texte orphelin hors contexte. */
    if (formStatus) formStatus.textContent = "";
    if (copyStatus) copyStatus.textContent = "";

    errorIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.textContent = "";
    });

    fieldIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.removeAttribute("aria-invalid");
    });
  });
})();
