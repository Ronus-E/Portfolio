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
   9. Année du pied de page
   ========================================================================= */

"use strict";

(() => {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    navToggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
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

    const mobileQuery = window.matchMedia("(min-width: 721px)");
    const onViewportChange = (event) => {
      if (event.matches) closeMenu();
    };
    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", onViewportChange);
    } else if (typeof mobileQuery.addListener === "function") {
      mobileQuery.addListener(onViewportChange);
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
      const subject = subjectInput ? subjectInput.value : "Message depuis le portfolio";

      if (name.length < 2) {
        setFieldError(nameInput, nameError, "Indiquez au moins deux caractères.");
        firstInvalid = firstInvalid || nameInput;
      } else {
        clearFieldError(nameInput, nameError);
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailPattern.test(email)) {
        setFieldError(emailInput, emailError, "Indiquez une adresse email valide.");
        firstInvalid = firstInvalid || emailInput;
      } else {
        clearFieldError(emailInput, emailError);
      }

      if (message.length < 10) {
        setFieldError(messageInput, messageError, "Écrivez au moins dix caractères.");
        firstInvalid = firstInvalid || messageInput;
      } else {
        clearFieldError(messageInput, messageError);
      }

      if (firstInvalid) {
        if (formStatus) {
          formStatus.textContent = "Le formulaire contient une erreur. Vérifiez les champs signalés.";
        }
        firstInvalid.focus();
        return;
      }

      const subjectLine = `[Portfolio] ${subject} — ${name}`;
      const bodyLines = [
        `Nom : ${name}`,
        `Email : ${email}`,
        "",
        message,
        "",
        "—",
        "Message préparé depuis le portfolio de Ronus.",
      ];

      const mailto =
        `mailto:${recipient}` +
        `?subject=${encodeURIComponent(subjectLine)}` +
        `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      if (formStatus) {
        formStatus.textContent =
          "Votre logiciel de messagerie va s'ouvrir avec le message prérempli. Sinon, copiez l'adresse email.";
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
        copyStatus.textContent = copied
          ? "Adresse copiée dans le presse-papiers."
          : "Copie automatique impossible — sélectionnez l'adresse manuellement.";
      }

      window.setTimeout(() => {
        if (copyStatus) copyStatus.textContent = "";
      }, 3200);
    });
  });

  /* -----------------------------------------------------------------------
     9. ANNÉE DU PIED DE PAGE
     ----------------------------------------------------------------------- */
  const yearElement = document.querySelector("#current-year");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
})();
