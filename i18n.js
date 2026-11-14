/* =========================================================================
   PORTFOLIO — Ronus
   Bascule de langue FR / EN, sans dependance ni appel reseau.

   Principe :
   - Le francais est la langue d'origine : il est photographie depuis le DOM
     au chargement (innerHTML + attributs). Aucune duplication du contenu FR.
   - L'anglais vit dans le dictionnaire DICT.en, indexe par les memes cles
     que les attributs data-i18n du HTML.
   - apply("fr") restaure la photographie ; apply("en") applique le dictionnaire.

   Conventions de balisage dans index.html :
     data-i18n="cle"                 -> remplace le contenu HTML de l'element
     data-i18n-aria-label="cle"      -> remplace l'attribut aria-label
     data-i18n-placeholder="cle"     -> remplace l'attribut placeholder
     data-i18n-content="cle"         -> remplace l'attribut content (balises meta)
     class="level level--practice"   -> traduit par classe (3 etiquettes de niveau)

   API publique : window.PortfolioI18N
     .lang        langue courante ("fr" ou "en")
     .t(cle)      chaine traduite (pour les messages generes par script.js)
     .apply(l)    applique une langue
   Evenement : document "portfolio:langchange" (detail.lang)
   ========================================================================= */

"use strict";

(() => {
  const STORAGE_KEY = "portfolio-lang";
  const DEFAULT_LANG = "fr";
  const SUPPORTED = ["fr", "en"];
  const ATTR_PREFIX = "data-i18n-";

  /* Les trois etiquettes de niveau sont repetees une trentaine de fois :
     on les traduit par classe plutot que par cle individuelle. */
  const LEVEL_KEYS = {
    "level--practice": "level.practice",
    "level--progress": "level.progress",
    "level--discover": "level.discover",
  };

  const DICT = {
    /* --- Chaines generees par script.js : le FR doit etre fourni ici,
           puisqu'elles n'existent pas dans le HTML. ---------------------- */
    fr: {
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
    },

    /* --- Anglais : toutes les cles du HTML + les cles js.* ------------- */
    en: {
      /* --- En-tete du document --- */
      "meta.title":
        "Ronus — Computer Engineering Student | Linux, Networks &amp; Cybersecurity",
      "meta.description":
        "Portfolio of Ronus, a second-year Computer Engineering student at ISSTM Mahajanga. Real projects, Linux labs, networking and cybersecurity learning, presented with their exact level.",
      "meta.og.locale": "en_US",
      "meta.og.title": "Ronus — Computer Engineering Student",
      "meta.og.description":
        "Linux, networking, Python and cybersecurity fundamentals: a documented learning path, tested projects and honest limits.",
      "meta.jsonld": `
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ronus Eldo TOLIZARA",
    "alternateName": "Ronus",
    "url": "https://ronus-e.github.io/Portfolio/",
    "jobTitle": "Computer Engineering Student",
    "description": "Second-year Computer Engineering student at ISSTM Mahajanga, focused on Linux, networking and defensive cybersecurity.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mahajanga",
      "addressCountry": "MG"
    },
    "affiliation": {
      "@type": "EducationalOrganization",
      "name": "ISSTM Mahajanga"
    },
    "sameAs": [
      "https://github.com/Ronus-E"
    ]
  }
  `,

      skip: "Skip to main content",

      /* --- Navigation --- */
      "brand.aria": "Ronus — back to the top",
      "nav.aria": "Main navigation",
      "lang.aria": "Site language",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.journey": "Journey",
      "nav.goals": "Goals",
      "nav.contact": "Contact",

      /* --- Accueil --- */
      "hero.eyebrow": `
            <span class="eyebrow__pulse" aria-hidden="true"></span>
            Ronus · Computer Engineering, Year 2 · Mahajanga
          `,
      "hero.title": `
            I learn systems.<br>
            I build <em>with method.</em>
          `,
      "hero.lead": `
            A Computer Engineering student at the <strong>ISSTM in Mahajanga</strong>, I train
            on <strong>Kali Linux</strong>: system administration, Bash scripts, networking and
            cybersecurity fundamentals. The projects shown here were run, tested and
            documented — <strong>limits included</strong>.
          `,
      "hero.cta.projects": `
              Explore my projects
              <span aria-hidden="true">→</span>
            `,
      "hero.cta.journey": "Read my journey",
      "hero.meta.aria": "Key facts",
      "hero.meta.1": `<span aria-hidden="true">01</span> Kali Linux every day`,
      "hero.meta.2": `<span aria-hidden="true">02</span> Projects tested locally`,
      "hero.meta.3": `<span aria-hidden="true">03</span> Real level, no overselling`,

      /* --- Panneau de profil --- */
      "profile.aria": "Profile summary",
      "profile.path": "folder / ronus",
      "profile.stamp": "UPD · 11.2026",
      "profile.status": "Status",
      "profile.status.value": `<span class="dot dot--live" aria-hidden="true"></span>Student — learning`,
      "profile.education": "Education",
      "profile.education.value": "Computer Engineering, Year 2 — ISSTM",
      "profile.hands": "Hands-on",
      "profile.hands.value": "Kali Linux · terminal · local lab",
      "profile.focus": "Focus",
      "profile.focus.value": "Linux · networking · defensive security",
      "profile.clock": "Local time",
      "profile.map.aria":
        "Diagram of the four work areas: systems, code, networking and security, linked to the profile",
      "map.systems": "SYSTEMS",
      "map.code": "CODE",
      "map.network": "NETWORKS",
      "map.security": "SECURITY",

      /* --- A propos --- */
      "about.index": `<span>01</span> Profile`,
      "about.title": `
            A student's journey,<br>
            a professional's standard.
          `,
      "about.intro": `
              I am not presenting a specialist's CV. I present what I can do,
              what I am learning, and the evidence that goes with it.
            `,
      "about.p1": `
              I am <strong>Ronus Eldo TOLIZARA</strong>, a second-year Bachelor's student
              in <strong>Computer Engineering</strong> at the ISSTM in Mahajanga, Madagascar.
              I obtained my baccalaureate in 2024 and have been training ever since with one
              simple idea: you cannot secure a system you do not understand.
            `,
      "about.p2": `
              My main environment is <strong>Kali Linux</strong>. I work there with the terminal,
              permissions, Bash scripts, Git and web development. I also use Windows, VS Code
              and virtual machines for my labs. Python and C are part of my progress —
              at the level of a student who is still learning.
            `,
      "about.p3": `
              My method comes down to five words: <em>read, practise, break, fix, document</em>.
              Every project in this portfolio exists on my machine. Those that are unfinished
              are flagged as such, and no demonstration is invented.
            `,
      "about.p4": `
              In time I want to become self-reliant on Linux and networking, then go deeper into
              <strong>defensive cybersecurity</strong>. I also want to continue my studies
              abroad, particularly in Japan, and build tools that are useful to the people
              around me.
            `,
      "fact.aria": "Key facts",
      "fact.label": "// quick sheet",
      "fact.education": "Education",
      "fact.education.value": `Computer Engineering, Year 2<br><span>ISSTM Mahajanga</span>`,
      "fact.bac": "Baccalaureate",
      "fact.bac.value": "2024",
      "fact.env": "Environment",
      "fact.env.value": "Kali Linux · Windows",
      "fact.langs": "Languages",
      "fact.langs.value": "Fluent French · Beginner English · Beginner Japanese",
      "fact.interests": "Interests",
      "fact.interests.value": "Linux · networking · cybersecurity · documentation",
      "fact.search": "Looking for",
      "fact.search.value": "Scholarships — Japan and international",
      "principle.1.title": "Understand before automating",
      "principle.1.text":
        "A command I cannot explain is not a skill I have acquired.",
      "principle.2.title": "Test before publishing",
      "principle.2.text":
        "A project is only presented as working if it has been run and verified.",
      "principle.3.title": "Document what is left to do",
      "principle.3.text":
        "Limits are written in black and white, not hidden behind a badge.",

      /* --- Competences --- */
      "skills.index": `<span>02</span> Skills`,
      "skills.title": `
            What I can do,<br>
            what I am still learning.
          `,
      "skills.intro": `
              Three levels, no invented percentages. A label describes real use,
              not professional value.
            `,
      "skills.legend.aria": "Level legend",
      "skills.legend.1": " already used in a project or in daily work.",
      "skills.legend.2": " studied and practised, still being consolidated.",
      "skills.legend.3": " initial notions, not yet self-reliant.",
      "level.practice": "Practised",
      "level.progress": "In progress",
      "level.discover": "Discovery",

      "skills.sys.title": `Systems &amp; Linux`,
      "skills.sys.1":
        "Linux / Kali: terminal, files, processes, permissions",
      "skills.sys.2": "Windows: daily use, basic tools",
      "skills.sys.3": "Basic administration: services, logs, backups",
      "skills.sys.4": "System hardening and advanced virtualisation",

      "skills.bash.title": `Bash &amp; automation`,
      "skills.bash.1":
        "Variables, conditions, loops, functions, input validation",
      "skills.bash.2":
        "Backup, permission-audit and cleanup scripts",
      "skills.bash.3": "Error handling, exit codes, local tests",
      "skills.bash.4": "cron scheduling and systemd scripts",

      "skills.net.title": "Networking",
      "skills.net.1": "OSI and TCP/IP models, IPv4 addressing, ports",
      "skills.net.2": `Diagnostics: <code>ip</code>, <code>ping</code>, <code>ss</code>, DNS`,
      "skills.net.3": "Wireshark: filters and guided reading of headers",
      "skills.net.4": "Packet Tracer, VLANs, routing and switching",

      "skills.py.title": `Python &amp; algorithms`,
      "skills.py.1": "Scripts, logic, loops, functions, Tkinter",
      "skills.py.2": "Reading and adapting existing code",
      "skills.py.3": "Flask / Jinja2: understanding templates",
      "skills.py.4": "C: language basics, compilation, types",

      "skills.web.title": `Web &amp; documentation`,
      "skills.web.1": "Semantic HTML and responsive CSS",
      "skills.web.2": "Vanilla JavaScript: DOM, events, interactions",
      "skills.web.3": "Accessibility, performance, CSS organisation",
      "skills.web.4": "Git, GitHub, Markdown and technical READMEs",

      "skills.sec.title": `Security &amp; method`,
      "skills.sec.1":
        "Linux permissions and the principle of least privilege",
      "skills.sec.2": "Accounts, backups and reading logs",
      "skills.sec.3": "Applied cryptography and network security",
      "skills.sec.4": "Penetration-testing notions, no real-world use",

      "skills.note": `
          No professional certification is claimed. DELF B1 (2022) is the only
          language qualification mentioned.
        `,

      /* --- Projets : filtre --- */
      "projects.index": `<span>03</span> Projects`,
      "projects.title": `
            Real work,<br>
            with its exact status.
          `,
      "projects.intro": `
              Inventory verified in November 2026: projects inspected on my machine and GitHub
              repositories reviewed. Each card states the real status and what is left to do.
            `,
      "projects.filter.label": "Filter",
      "projects.filter.all": `All <span>8</span>`,
      "projects.filter.system": `System <span>3</span>`,
      "projects.filter.network": `Network <span>1</span>`,
      "projects.filter.web": `Web <span>2</span>`,
      "projects.filter.python": `Python <span>2</span>`,
      "projects.filter.team": `Team <span>1</span>`,
      "projects.filter.todo": `To complete <span>1</span>`,

      /* --- Projet 01 : Linux Permission Manager --- */
      "p1.kind": "01 · System tool",
      "p1.status": `<span class="status__dot" aria-hidden="true"></span>Done — v1.0`,
      "p1.desc": `
                Interactive Bash script to view and change the permissions of a file
                on Linux. It shows symbolic and numeric rights, the owner and
                the group, then applies an allowed mode after confirmation.
              `,
      "p1.details": "Features verified in the script",
      "p1.li1": `Interactive menu and argument mode <code>&lt;file&gt; &lt;permission&gt;</code>.`,
      "p1.li2": "Displays permissions, owner and group.",
      "p1.li3": "Validates modes 600, 640, 644, 700 and 755.",
      "p1.li4":
        "Error handling: missing file, directory, invalid permission.",
      "p1.li5": "Re-displays the permissions after the change.",
      "p1.note": `
                    <strong>Assumed limits:</strong> one file at a time, five accepted modes,
                    no change of owner or group.
                  `,
      "p1.link": `
                  Code on GitHub <span aria-hidden="true">↗</span>
                  <span class="visually-hidden">(opens in a new tab)</span>
                `,
      "p1.aside.aria": "Example of the script's output",
      "p1.caption": "Actual output of the script on a test file.",

      /* --- Projet 02 : IANATRA --- */
      "p2.kind": "02 · Web application",
      "p2.status": `<span class="status__dot" aria-hidden="true"></span>Advanced pilot — under validation`,
      "p2.title": "IANATRA — School management",
      "p2.desc": `
              Local web management application for a secondary school: classes, students,
              staff, attendance, grades, report cards, fees, payments, receipts, expenses and
              an audit log. French interface, data stored in a SQLite database.
            `,
      "p2.details": "Features verified in the code",
      "p2.li1":
        "Management of classes, students, staff and user accounts.",
      "p2.li2":
        "Attendance, grades, weighted averages, rank and printable report cards.",
      "p2.li3":
        "Fees, payments, numbered receipts, expenses and monthly reports.",
      "p2.li4":
        "Server-side roles: administrator, secretariat, accountant, teacher, read-only.",
      "p2.li5":
        "CSRF token, hashed passwords, session re-checked against the database.",
      "p2.li6": `SQLite backup, CSV exports and a <code>unittest</code> test suite included.`,
      "p2.note": `
                  <strong>Honest status:</strong> pilot version, not publicly deployed and not
                  independently audited. It must be tested on fictional data before any real
                  use. The code stays local and is not published on GitHub.
                `,
      "p2.muted": "Local code — not published",
      "p2.meta": "Flask · SQLite · roles",

      /* --- Projet 03 : JARVIS --- */
      "p3.kind": "03 · Local assistant",
      "p3.status": `<span class="status__dot" aria-hidden="true"></span>Running locally`,
      "p3.desc": `
              Personal assistant connected to OpenCode: local web interface, streaming
              conversation, session management, permissions confirmed by a human and local
              voice. The interface and the voice stay on the machine.
            `,
      "p3.details": "Features verified in the code",
      "p3.li1": `Local server on <code>127.0.0.1:7860</code>, proxy to OpenCode.`,
      "p3.li2":
        "SSE streaming responses, session history, request interruption.",
      "p3.li3":
        "Human confirmation required before any sensitive permission.",
      "p3.li4": "Read-only CPU / RAM / disk monitoring.",
      "p3.li5":
        "Piper speech synthesis and local faster-whisper recognition, opt-in.",
      "p3.li6": "Strict CSP, no secret exposed to the browser.",
      "p3.note": `
                  <strong>Honest status:</strong> personal project running on my machine,
                  not published and not meant to be exposed on the Internet. No public demo.
                `,
      "p3.muted": "Local use only",
      "p3.meta": "Node · SSE · voice",

      /* --- Projet 04 : Laboratoires Linux --- */
      "p4.kind": "04 · Personal lab",
      "p4.status": `<span class="status__dot" aria-hidden="true"></span>Regular practice`,
      "p4.title": "Linux Labs",
      "p4.desc": `
              Repeated exercises on a Kali machine: navigation, permissions, users,
              groups, processes and redirection. Each task is redone in the terminal
              until it becomes a reflex, not a copied recipe.
            `,
      "p4.details": "What these labs cover",
      "p4.li1":
        "Reading and changing symbolic and numeric permissions.",
      "p4.li2": "Owners, groups and the principle of least privilege.",
      "p4.li3":
        "Process monitoring and identifying a running service.",
      "p4.li4": "Redirections, pipes and searching within files.",
      "p4.li5": `Organising a <code>CyberLab</code> workspace by topic.`,
      "p4.note": `
                  <strong>Honest status:</strong> personal practical work, not published.
                  It proves practice, not production experience.
                `,
      "p4.muted": "Local practical work",

      /* --- Projet 05 : Analyse reseau --- */
      "p5.kind": "05 · Network learning",
      "p5.status": `<span class="status__dot" aria-hidden="true"></span>Learning`,
      "p5.title": `Network analysis — Wireshark &amp; Packet Tracer`,
      "p5.desc": `
              Guided reading of captures with Wireshark — filters, headers, TCP and UDP — and
              topology simulations in Packet Tracer. Goal: understand what travels across the
              wire before diagnosing or securing it.
            `,
      "p5.details": "Real state of this learning",
      "p5.li1": "Display filters and reading of the main headers.",
      "p5.li2": "Two Packet Tracer simulations kept and reopened.",
      "p5.li3": `Diagnostic commands: <code>ip</code>, <code>ping</code>, <code>ss</code>, DNS.`,
      "p5.li4":
        "VLAN, routing and switching notions still at discovery level.",
      "p5.note": `
                  <strong>Honest limit:</strong> no real capture is published and I do not
                  claim expert analysis. This is supervised learning, not an audit.
                `,
      "p5.muted": "Captures not published",

      /* --- Projet 06 : Python --- */
      "p6.kind": "06 · Python exercises",
      "p6.status": `<span class="status__dot" aria-hidden="true"></span>Playable prototype`,
      "p6.title": `Mini Adventure &amp; Python exercises`,
      "p6.desc": `
              A small Tkinter platform game: movement, jump and double jump. Around this
              prototype, a series of exercises to understand variables, loops and the
              animation loop of a graphical interface.
            `,
      "p6.details": "Features verified in the code",
      "p6.li1": "800 × 500 window and a play area drawn on a canvas.",
      "p6.li2": "Left / right movement bounded to the screen edges.",
      "p6.li3":
        "Animated jump with vertical velocity and reset on the ground.",
      "p6.li4": "Double jump limited to two impulses.",
      "p6.li5":
        "Personal course notes explaining each instruction.",
      "p6.note": `
                    <strong>Assumed limits:</strong> no score, no levels, no enemies.
                    This is a learning prototype, not a complete game.
                  `,
      "p6.muted": "Local prototype",

      /* --- Projet 07 : GMAO --- */
      "p7.kind": "07 · Desktop application",
      "p7.status": `<span class="status__dot" aria-hidden="true"></span>Study project — public repository`,
      "p7.title": "GMAO — Maintenance management",
      "p7.desc": `
              Python desktop application for managing a department's equipment:
              inventory, intervention requests, work orders, technicians and printing.
              Dark CustomTkinter interface, local SQLite data. Study project carried out
              in a team of 5 people.
            `,
      "p7.details": "My contributions within the team",
      "p7.li1": `Equipment screen: listing and adding items (<code>materiels.py</code>, <code>ajouter.py</code>).`,
      "p7.li2": `Technician management (<code>techniciens.py</code>).`,
      "p7.li3": `Database layer: SQLite schema and models (<code>database.py</code>, <code>models.py</code>).`,
      "p7.li4": `Printing and document output (<code>impression.py</code>).`,
      "p7.note": `
                    <strong>Honest status:</strong> a team project, not individual work.
                    The original repository belongs to the team; the link points to my fork.
                    Local desktop application, with no web demo.
                  `,
      "p7.link": `
                Code on GitHub <span aria-hidden="true">↗</span>
                <span class="visually-hidden">(opens in a new tab)</span>
              `,

      /* --- Projet 08 : Budget Pro --- */
      "p8.kind": "08 · Web application",
      "p8.status": `<span class="status__dot" aria-hidden="true"></span>To consolidate`,
      "p8.desc": `
              Personal budget management application, self-contained in a single HTML page.
              Data stays in the browser via <code>localStorage</code>, with no account
              and no server.
            `,
      "p8.details": "Features found in the artefact",
      "p8.li1":
        "Monthly salary, spending envelopes and progress tracking.",
      "p8.li2":
        "Savings, an emergency fund and control over impulse purchases.",
      "p8.li3": "Transaction history and monthly archiving.",
      "p8.li4": "Export and import of data in JSON format.",
      "p8.note": `
                    <strong>Honest status:</strong> only a self-contained HTML artefact was found;
                    the source code is not available. The project is presented as needing
                    consolidation, with no public link and no demo.
                  `,
      "p8.muted": "Source to be recovered",

      /* --- Parcours --- */
      "journey.index": `<span>04</span> Journey`,
      "journey.title": `
            Progress that is<br>
            documented, not decorated.
          `,
      "journey.intro": `
              No professional experience to date. My practical experience is
              the projects above and the labs carried out on my machine.
            `,
      "journey.2021.text":
        "End of lower secondary school. First computing basics and an interest in systems.",
      "journey.2022.text":
        "French certification, useful for documentation and technical exchanges.",
      "journey.2024.title": "Baccalaureate",
      "journey.2024.text":
        "Diploma obtained, then a move towards computer engineering at the ISSTM.",
      "journey.degree.title":
        "Bachelor's degree in Computer Engineering — Year 1 then Year 2",
      "journey.degree.text": `
                Training in computing, software development, systems and networks.
                Main working environment: Kali Linux.
              `,
      "journey.2026.title": "First complete personal projects",
      "journey.2026.text": `
                Linux Permission Manager (published), IANATRA, JARVIS, Budget Pro and
                Mini Adventure. First real tests, first documented limits.
              `,
      "journey.today.year": "Today",
      "journey.today.title": "Networking and defensive cybersecurity",
      "journey.today.text": `
                Consolidating network fundamentals, Linux permissions and technical
                documentation. Goal: more robust projects, not more numerous ones.
              `,
      "honesty.label": "// what I do not claim",
      "honesty.1": "No professional experience in a company.",
      "honesty.2": "No cybersecurity certification.",
      "honesty.3": "No penetration-testing or security-audit services.",
      "honesty.4": "No production server administration.",

      /* --- Objectifs --- */
      "goals.index": `<span>05</span> Goals`,
      "goals.title": `
            Where I am going,<br>
            and how I plan to get there.
          `,
      "goals.intro": `
              A clear direction, broken into realistic steps. No promise of expertise:
              skills to acquire, evidence to produce.
            `,
      "goals.statement": `
          To become a <em>useful</em> professional: able to understand an infrastructure,
          diagnose it, secure it and explain my choices.
        `,
      "goals.1.range": "2026 — 2027",
      "goals.1.title": "Consolidate the foundations",
      "goals.1.li1":
        "Finish the degree with solid foundations in systems and networking.",
      "goals.1.li2":
        "Administer Linux day to day: services, logs, backups, permissions.",
      "goals.1.li3":
        "Reach a level of network fundamentals close to the CCNA syllabus.",
      "goals.1.li4":
        "Publish three clean, documented and tested repositories.",
      "goals.1.li5":
        "Carry out my first supervised local jobs: backup, permission audit, cleanup.",
      "goals.2.range": "2027 — 2029",
      "goals.2.title": "Specialise the practice",
      "goals.2.li1":
        "Go deeper into defensive cybersecurity: hardening, logs, integrity, initial response.",
      "goals.2.li2":
        "Multiply authorised labs and detection exercises.",
      "goals.2.li3":
        "Complete an internship in infrastructure, support or security.",
      "goals.2.li4":
        "Take a certification only if it is useful, funded and genuinely prepared for.",
      "goals.3.range": "2029 — …",
      "goals.3.title": "Scale up",
      "goals.3.li1":
        "Pursue a master's degree or a specialisation abroad, particularly in Japan.",
      "goals.3.li2":
        "Work on the blue team: SOC, infrastructure or system security.",
      "goals.3.li3":
        "Build simple, useful tools for local SMEs and non-profit organisations.",
      "goals.3.li4": "Pass on in turn what I have learned.",
      "goals.note": `
            <strong>Stated stance:</strong> offensive security will only be practised within an
            authorised, educational and documented framework. No real engagement without a
            contract, a written scope and verified competence.
          `,
      "goals.cta": "Discuss an opportunity",

      /* --- Contact --- */
      "contact.index": `<span>06</span> Contact`,
      "contact.title": `
            Let's talk about a project,<br>
            an internship or some advice.
          `,
      "contact.intro": `
              For a question, a collaboration or feedback on a project. The form
              prepares an email in your mail client: no data is sent
              to a server.
            `,
      "contact.lead": `
              The simplest way is still email. I also check GitHub to follow
              published projects.
            `,
      "contact.email.label": "Write to",
      "contact.location.label": "Location",
      "contact.copy": `
              Copy email address
            `,
      "contact.availability.label": "// availability",
      "contact.availability.text": `
                Open to internships, educational collaborations and small local jobs:
                Linux assistance, Bash scripts, static web pages, documentation.
              `,
      "form.name": `Name <span aria-hidden="true">*</span>`,
      "form.name.ph": "Your name",
      "form.email": `Email <span aria-hidden="true">*</span>`,
      "form.email.ph": "you@example.com",
      "form.subject": "Subject",
      "form.subject.1": "Question about a project",
      "form.subject.2": "Internship offer",
      "form.subject.3": "Local job",
      "form.subject.4": "Collaboration proposal",
      "form.subject.5": "Feedback on the portfolio",
      "form.subject.6": "Other",
      "form.message": `Message <span aria-hidden="true">*</span>`,
      "form.message.ph": "Describe your request in a few lines…",
      "form.submit": `
              Prepare the email
              <span aria-hidden="true">→</span>
            `,
      "form.note": `
              The button opens your mail client with the message pre-filled.
              If nothing opens, copy the email address next to it.
            `,

      /* --- Pied de page --- */
      "footer.role":
        "Computer Engineering student — ISSTM Mahajanga, Madagascar.",
      "footer.built":
        "Portfolio built with HTML, CSS and vanilla JavaScript.",
      "footer.source": `
            Source code <span aria-hidden="true">↗</span>
          `,

      /* --- Chaines generees par script.js --- */
      "js.menu.open": "Open the menu",
      "js.menu.close": "Close the menu",
      "js.form.err.name": "Please enter at least two characters.",
      "js.form.err.email": "Please enter a valid email address.",
      "js.form.err.message": "Please write at least ten characters.",
      "js.form.err.summary":
        "The form contains an error. Please check the highlighted fields.",
      "js.form.subject.default": "Message from the portfolio",
      "js.form.mailto.name": "Name",
      "js.form.mailto.email": "Email",
      "js.form.mailto.footer": "Message prepared from Ronus's portfolio.",
      "js.form.status":
        "Your mail client will open with the message pre-filled. Otherwise, copy the email address.",
      "js.copy.ok": "Address copied to the clipboard.",
      "js.copy.fail":
        "Automatic copy failed — please select the address manually.",
    },
  };

  /* -----------------------------------------------------------------------
     PHOTOGRAPHIE DU FRANCAIS (langue d'origine, lue depuis le DOM)
     ----------------------------------------------------------------------- */
  const textNodes = []; // { el, fr }  contenu HTML
  const attrNodes = []; // { el, attr, key, fr }  attributs
  const levelNodes = []; // { el, cls, fr }  etiquettes de niveau

  let current = DEFAULT_LANG;

  function capture() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      textNodes.push({ el, fr: el.innerHTML });
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
            fr: el.getAttribute(target) || "",
          });
        });
      });

    document.querySelectorAll(".level").forEach((el) => {
      const cls = Object.keys(LEVEL_KEYS).find((name) => el.classList.contains(name));
      if (cls) levelNodes.push({ el, cls, fr: el.innerHTML });
    });
  }

  /* -----------------------------------------------------------------------
     APPLICATION D'UNE LANGUE
     ----------------------------------------------------------------------- */
  function apply(lang) {
    const target = SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
    const missing = [];

    textNodes.forEach(({ el, fr }) => {
      if (target === "fr") {
        el.innerHTML = fr;
        return;
      }
      const value = DICT.en[el.dataset.i18n];
      if (typeof value === "string") {
        el.innerHTML = value;
      } else {
        missing.push(el.dataset.i18n);
      }
    });

    attrNodes.forEach(({ el, attr, key, fr }) => {
      if (target === "fr") {
        el.setAttribute(attr, fr);
        return;
      }
      const value = DICT.en[key];
      if (typeof value === "string") {
        el.setAttribute(attr, value);
      } else {
        missing.push(key);
      }
    });

    levelNodes.forEach(({ el, cls, fr }) => {
      if (target === "fr") {
        el.innerHTML = fr;
        return;
      }
      const value = DICT.en[LEVEL_KEYS[cls]];
      if (typeof value === "string") el.innerHTML = value;
    });

    if (missing.length > 0) {
      console.warn("[i18n] cles anglaises manquantes :", missing.join(", "));
    }

    document.documentElement.lang = target;
    current = target;

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.dataset.lang === target;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    try {
      window.localStorage.setItem(STORAGE_KEY, target);
    } catch (error) {
      /* stockage local indisponible (navigation privee, quota) : on continue */
    }

    document.dispatchEvent(
      new CustomEvent("portfolio:langchange", { detail: { lang: target } })
    );
  }

  /* Traduction des chaines generees par script.js. */
  function t(key) {
    const langDict = DICT[current] || {};
    if (typeof langDict[key] === "string") return langDict[key];
    if (typeof DICT.fr[key] === "string") return DICT.fr[key];
    if (typeof DICT.en[key] === "string") return DICT.en[key];
    return key;
  }

  /* -----------------------------------------------------------------------
     LANGUE INITIALE + BRANCHEMENT DES BOUTONS
     ----------------------------------------------------------------------- */
  function storedLang() {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.includes(value) ? value : null;
    } catch (error) {
      return null;
    }
  }

  capture();

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.lang;
      if (next && next !== current) apply(next);
    });
  });

  apply(storedLang() || DEFAULT_LANG);

  window.PortfolioI18N = {
    apply,
    t,
    levels: LEVEL_KEYS,
    get lang() {
      return current;
    },
  };
})();
