/* =========================================================================
   PORTFOLIO — Ronus
   Dictionnaire ESPAGNOL (es-ES).

   Fichier de langue : uniquement des donnees, aucune logique.
   Les noms propres, technologies et noms de projets restent inchanges.

   Ajouter une langue : copier ce fichier, traduire les VALEURS (jamais les
   cles), renommer le code, puis declarer la langue dans LOCALES (i18n.js)
   et ajouter la balise <script> correspondante dans index.html.
   ========================================================================= */

"use strict";

window.PortfolioI18N.register("es", {
      /* --- En-tete du document --- */
      "meta.title":
        "Ronus — Estudiante de Ingeniería Informática | Linux, redes y ciberseguridad",
      "meta.description":
        "Portafolio de Ronus, estudiante de segundo año de Ingeniería Informática en el ISSTM de Mahajanga. Proyectos reales, laboratorios Linux, redes y aprendizaje de ciberseguridad, presentados con su nivel exacto.",
      "meta.og.locale": "es_ES",
      "meta.og.title": "Ronus — Estudiante de Ingeniería Informática",
      "meta.og.description":
        "Linux, redes, Python y fundamentos de ciberseguridad: una trayectoria de aprendizaje documentada, proyectos probados y límites honestos.",
      "meta.jsonld": `
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ronus Eldo TOLIZARA",
    "alternateName": "Ronus",
    "url": "https://ronus-e.github.io/Portfolio/",
    "jobTitle": "Estudiante de Ingeniería Informática",
    "description": "Estudiante de segundo año de Ingeniería Informática en el ISSTM de Mahajanga, orientado a Linux, redes y ciberseguridad defensiva.",
    "inLanguage": "es",
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

      /* --- Navigation --- */
      "brand.aria": "Ronus — volver arriba",
      "skip": "Ir al contenido principal",
      "nav.aria": "Navegación principal",
      "lang.aria": "Idioma del sitio",
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.skills": "Competencias",
      "nav.projects": "Proyectos",
      "nav.journey": "Trayectoria",
      "nav.goals": "Objetivos",
      "nav.contact": "Contacto",

      /* --- Inicio --- */
      "hero.eyebrow": `
            <span class="eyebrow__pulse" aria-hidden="true"></span>
            Ronus · Ingeniería Informática, 2.º año · Mahajanga
          `,
      "hero.title": `
            Aprendo sistemas.<br>
            Construyo <em>con método.</em>
          `,
      "hero.lead": `
            Estudiante de Ingeniería Informática en el <strong>ISSTM de Mahajanga</strong>, me formo
            en <strong>Kali Linux</strong>: administración del sistema, scripts Bash, redes y
            fundamentos de ciberseguridad. Los proyectos que aparecen aquí se ejecutaron, se probaron y se
            documentaron — <strong>límites incluidos</strong>.
          `,
      "hero.cta.projects": `
              Explorar mis proyectos
              <span aria-hidden="true">→</span>
            `,
      "hero.cta.journey": "Leer mi trayectoria",
      "hero.meta.aria": "Datos clave",
      "hero.meta.1": `<span aria-hidden="true">01</span> Kali Linux a diario`,
      "hero.meta.2": `<span aria-hidden="true">02</span> Proyectos probados en local`,
      "hero.meta.3": `<span aria-hidden="true">03</span> Nivel real, sin exagerar`,

      /* --- Panel de perfil --- */
      "profile.aria": "Resumen del perfil",
      "profile.path": "carpeta / ronus",
      "profile.stamp": "ACT · 11.2026",
      "profile.status": "Estado",
      "profile.status.value": `<span class="dot dot--live" aria-hidden="true"></span>Estudiante — en aprendizaje`,
      "profile.education": "Formación",
      "profile.education.value": "Ingeniería Informática, 2.º año — ISSTM",
      "profile.hands": "Práctica",
      "profile.hands.value": "Kali Linux · terminal · laboratorio local",
      "profile.focus": "Enfoque",
      "profile.focus.value": "Linux · redes · seguridad defensiva",
      "profile.clock": "Hora local",
      "profile.map.aria":
        "Esquema de las cuatro áreas de trabajo: sistemas, código, redes y seguridad, vinculadas al perfil",
      "map.systems": "SISTEMAS",
      "map.code": "CÓDIGO",
      "map.network": "REDES",
      "map.security": "SEGURIDAD",

      /* --- Sobre mi --- */
      "about.index": `<span>01</span> Perfil`,
      "about.title": `
            La trayectoria de un estudiante,<br>
            la exigencia de un profesional.
          `,
      "about.intro": `
              No presento el currículum de un especialista. Presento lo que sé hacer,
              lo que estoy aprendiendo y las pruebas que lo acompañan.
            `,
      "about.p1": `
              Soy <strong>Ronus Eldo TOLIZARA</strong>, estudiante de segundo año de
              <strong>Ingeniería Informática</strong> en el ISSTM de Mahajanga, Madagascar.
              Obtuve el bachillerato en 2024 y desde entonces me formo con una idea
              sencilla: no se puede proteger un sistema que no se entiende.
            `,
      "about.p2": `
              Mi entorno principal es <strong>Kali Linux</strong>. Trabajo allí con la terminal,
              los permisos, los scripts Bash, Git y el desarrollo web. También uso Windows, VS Code
              y máquinas virtuales para mis laboratorios. Python y C forman parte de mi progreso —
              al nivel de un estudiante que sigue aprendiendo.
            `,
      "about.p3": `
              Mi método se resume en cinco palabras: <em>leer, practicar, romper, reparar, documentar</em>.
              Cada proyecto de este portafolio existe en mi máquina. Los que están sin terminar
              se señalan como tales y no se inventa ninguna demostración.
            `,
      "about.p4": `
              Con el tiempo quiero ser autónomo en Linux y en redes, y luego profundizar en la
              <strong>ciberseguridad defensiva</strong>. También quiero continuar mis estudios
              en el extranjero, en particular en Japón, y construir herramientas útiles para quienes
              me rodean.
            `,
      "fact.aria": "Datos clave",
      "fact.label": "// ficha rápida",
      "fact.education": "Formación",
      "fact.education.value": `Ingeniería Informática, 2.º año<br><span>ISSTM Mahajanga</span>`,
      "fact.bac": "Bachillerato",
      "fact.bac.value": "2024",
      "fact.env": "Entorno",
      "fact.env.value": "Kali Linux · Windows",
      "fact.langs": "Idiomas",
      "fact.langs.value": "Francés fluido · inglés principiante · japonés principiante",
      "fact.interests": "Intereses",
      "fact.interests.value": "Linux · redes · ciberseguridad · documentación",
      "fact.search": "Busco",
      "fact.search.value": "Becas — Japón e internacional",
      "principle.1.title": "Entender antes de automatizar",
      "principle.1.text":
        "Un comando que no sé explicar no es una competencia adquirida.",
      "principle.2.title": "Probar antes de publicar",
      "principle.2.text":
        "Un proyecto solo se presenta como funcional si se ha ejecutado y verificado.",
      "principle.3.title": "Documentar lo que queda pendiente",
      "principle.3.text":
        "Los límites se escriben con todas las letras, no se esconden tras una etiqueta.",

      /* --- Competencias --- */
      "skills.index": `<span>02</span> Competencias`,
      "skills.title": `
            Lo que sé hacer,<br>
            lo que sigo aprendiendo.
          `,
      "skills.intro": `
              Tres niveles, sin porcentajes inventados. Una etiqueta describe un uso real,
              no un valor profesional.
            `,
      "skills.legend.aria": "Leyenda de niveles",
      "skills.legend.1": " ya utilizado en un proyecto o en el día a día.",
      "skills.legend.2": " estudiado y practicado, todavía en consolidación.",
      "skills.legend.3": " nociones iniciales, aún sin autonomía.",
      "level.practice": "Practicado",
      "level.progress": "En progreso",
      "level.discover": "Descubrimiento",

      "skills.sys.title": `Sistemas y Linux`,
      "skills.sys.1":
        "Linux / Kali: terminal, archivos, procesos, permisos",
      "skills.sys.2": "Windows: uso diario, herramientas básicas",
      "skills.sys.3": "Administración básica: servicios, registros, copias de seguridad",
      "skills.sys.4": "Endurecimiento del sistema y virtualización avanzada",

      "skills.bash.title": `Bash y automatización`,
      "skills.bash.1":
        "Variables, condiciones, bucles, funciones, validación de entradas",
      "skills.bash.2":
        "Scripts de copia de seguridad, auditoría de permisos y limpieza",
      "skills.bash.3": "Gestión de errores, códigos de salida, pruebas locales",
      "skills.bash.4": "Programación con cron y scripts de systemd",

      "skills.net.title": "Redes",
      "skills.net.1": "Modelos OSI y TCP/IP, direccionamiento IPv4, puertos",
      "skills.net.2": `Diagnóstico: <code>ip</code>, <code>ping</code>, <code>ss</code>, DNS`,
      "skills.net.3": "Wireshark: filtros y lectura guiada de cabeceras",
      "skills.net.4": "Packet Tracer, VLAN, enrutamiento y conmutación",

      "skills.py.title": `Python y algoritmia`,
      "skills.py.1": "Scripts, lógica, bucles, funciones, Tkinter",
      "skills.py.2": "Leer y adaptar código existente",
      "skills.py.3": "Flask / Jinja2: comprender las plantillas",
      "skills.py.4": "C: bases del lenguaje, compilación, tipos",

      "skills.web.title": `Web y documentación`,
      "skills.web.1": "HTML semántico y CSS adaptable",
      "skills.web.2": "JavaScript nativo: DOM, eventos, interacciones",
      "skills.web.3": "Accesibilidad, rendimiento, organización del CSS",
      "skills.web.4": "Git, GitHub, Markdown y README técnicos",

      "skills.sec.title": `Seguridad y método`,
      "skills.sec.1":
        "Permisos en Linux y principio de mínimo privilegio",
      "skills.sec.2": "Cuentas, copias de seguridad y lectura de registros",
      "skills.sec.3": "Criptografía aplicada y seguridad de red",
      "skills.sec.4": "Nociones de pentesting, sin uso en producción",

      "skills.note": `
          No se reclama ninguna certificación profesional. El DELF B1 (2022) es la única
          titulación lingüística mencionada.
        `,

      /* --- Proyectos: filtro --- */
      "projects.index": `<span>03</span> Proyectos`,
      "projects.title": `
            Trabajo real,<br>
            con su estado exacto.
          `,
      "projects.intro": `
              Inventario verificado en noviembre de 2026: proyectos inspeccionados en mi máquina y
              repositorios de GitHub revisados. Cada tarjeta indica el estado real y lo que queda por hacer.
            `,
      "projects.filter.label": "Filtrar",
      "projects.filter.all": `Todos <span>8</span>`,
      "projects.filter.system": `Sistema <span>3</span>`,
      "projects.filter.network": `Red <span>1</span>`,
      "projects.filter.web": `Web <span>2</span>`,
      "projects.filter.python": `Python <span>2</span>`,
      "projects.filter.team": `Equipo <span>1</span>`,
      "projects.filter.todo": `Por terminar <span>1</span>`,

      /* --- Proyecto 01: Linux Permission Manager --- */
      "p1.kind": "01 · Herramienta de sistema",
      "p1.status": `<span class="status__dot" aria-hidden="true"></span>Terminado — v1.0`,
      "p1.desc": `
                Script Bash interactivo para consultar y modificar los permisos de un archivo
                en Linux. Muestra los derechos simbólicos y numéricos, el propietario y
                el grupo, y luego aplica un modo autorizado tras confirmación.
              `,
      "p1.details": "Funciones verificadas en el script",
      "p1.li1": `Menú interactivo y modo con argumentos <code>&lt;archivo&gt; &lt;permiso&gt;</code>.`,
      "p1.li2": "Muestra los permisos, el propietario y el grupo.",
      "p1.li3": "Valida los modos 600, 640, 644, 700 y 755.",
      "p1.li4":
        "Gestión de errores: archivo ausente, directorio, permiso no válido.",
      "p1.li5": "Vuelve a mostrar los permisos después del cambio.",
      "p1.note": `
                    <strong>Límites asumidos:</strong> un archivo a la vez, cinco modos aceptados,
                    sin cambio de propietario ni de grupo.
                  `,
      "p1.link": `
                  Código en GitHub <span aria-hidden="true">↗</span>
                  <span class="visually-hidden">(se abre en una pestaña nueva)</span>
                `,
      "p1.aside.aria": "Ejemplo de la salida del script",
      "p1.caption": "Salida real del script sobre un archivo de prueba.",

      /* --- Proyecto 02: IANATRA --- */
      "p2.kind": "02 · Aplicación web",
      "p2.status": `<span class="status__dot" aria-hidden="true"></span>Piloto avanzado — en validación`,
      "p2.title": "IANATRA — Gestión escolar",
      "p2.desc": `
              Aplicación web local de gestión para un centro de secundaria: clases, alumnos,
              personal, asistencia, notas, boletines, tasas, pagos, recibos, gastos y
              registro de auditoría. Interfaz en francés, datos en una base SQLite.
            `,
      "p2.details": "Funciones verificadas en el código",
      "p2.li1":
        "Gestión de clases, alumnos, personal y cuentas de usuario.",
      "p2.li2":
        "Asistencia, notas, medias ponderadas, clasificación y boletines imprimibles.",
      "p2.li3":
        "Tasas, pagos, recibos numerados, gastos e informes mensuales.",
      "p2.li4":
        "Roles en el servidor: administrador, secretaría, contabilidad, profesor, solo lectura.",
      "p2.li5":
        "Token CSRF, contraseñas con hash, sesión reverificada contra la base de datos.",
      "p2.li6": `Copia de seguridad de SQLite, exportaciones CSV y una batería de pruebas <code>unittest</code> incluida.`,
      "p2.note": `
                  <strong>Estado honesto:</strong> versión piloto, no desplegada públicamente ni
                  auditada de forma independiente. Debe probarse con datos ficticios antes de cualquier uso
                  real. El código permanece en local y no se publica en GitHub.
                `,
      "p2.muted": "Código local — sin publicar",
      "p2.meta": "Flask · SQLite · roles",

      /* --- Proyecto 03: JARVIS --- */
      "p3.kind": "03 · Asistente local",
      "p3.status": `<span class="status__dot" aria-hidden="true"></span>En ejecución local`,
      "p3.desc": `
              Asistente personal conectado a OpenCode: interfaz web local, conversación
              en streaming, gestión de sesiones, permisos confirmados por una persona y voz
              local. La interfaz y la voz se quedan en la máquina.
            `,
      "p3.details": "Funciones verificadas en el código",
      "p3.li1": `Servidor local en <code>127.0.0.1:7860</code>, proxy hacia OpenCode.`,
      "p3.li2":
        "Respuestas en streaming SSE, historial de sesiones, interrupción de peticiones.",
      "p3.li3":
        "Confirmación humana obligatoria antes de cualquier permiso sensible.",
      "p3.li4": "Supervisión de CPU / RAM / disco en solo lectura.",
      "p3.li5":
        "Síntesis de voz Piper y reconocimiento local faster-whisper, opcionales.",
      "p3.li6": "CSP estricta, ningún secreto expuesto al navegador.",
      "p3.note": `
                  <strong>Estado honesto:</strong> proyecto personal en ejecución en mi máquina,
                  no publicado y no destinado a exponerse en Internet. Sin demostración pública.
                `,
      "p3.muted": "Solo uso local",
      "p3.meta": "Node · SSE · voz",

      /* --- Proyecto 04: Laboratorios Linux --- */
      "p4.kind": "04 · Laboratorio personal",
      "p4.status": `<span class="status__dot" aria-hidden="true"></span>Práctica regular`,
      "p4.title": "Laboratorios Linux",
      "p4.desc": `
              Ejercicios repetidos en una máquina Kali: navegación, permisos, usuarios,
              grupos, procesos y redirección. Cada tarea se rehace en la terminal
              hasta volverse un reflejo, no una receta copiada.
            `,
      "p4.details": "Qué cubren estos laboratorios",
      "p4.li1":
        "Leer y modificar permisos simbólicos y numéricos.",
      "p4.li2": "Propietarios, grupos y principio de mínimo privilegio.",
      "p4.li3":
        "Supervisión de procesos e identificación de un servicio en ejecución.",
      "p4.li4": "Redirecciones, tuberías y búsqueda dentro de archivos.",
      "p4.li5": `Organizar un espacio de trabajo <code>CyberLab</code> por temas.`,
      "p4.note": `
                  <strong>Estado honesto:</strong> trabajo práctico personal, sin publicar.
                  Demuestra práctica, no experiencia de producción.
                `,
      "p4.muted": "Trabajo práctico local",

      /* --- Proyecto 05: Analisis de red --- */
      "p5.kind": "05 · Aprendizaje de redes",
      "p5.status": `<span class="status__dot" aria-hidden="true"></span>En aprendizaje`,
      "p5.title": `Análisis de red — Wireshark y Packet Tracer`,
      "p5.desc": `
              Lectura guiada de capturas con Wireshark — filtros, cabeceras, TCP y UDP — y
              simulaciones de topología en Packet Tracer. Objetivo: entender lo que viaja por el
              cable antes de diagnosticarlo o protegerlo.
            `,
      "p5.details": "Estado real de este aprendizaje",
      "p5.li1": "Filtros de visualización y lectura de las cabeceras principales.",
      "p5.li2": "Dos simulaciones de Packet Tracer conservadas y reabiertas.",
      "p5.li3": `Comandos de diagnóstico: <code>ip</code>, <code>ping</code>, <code>ss</code>, DNS.`,
      "p5.li4":
        "Nociones de VLAN, enrutamiento y conmutación todavía en nivel de descubrimiento.",
      "p5.note": `
                  <strong>Límite honesto:</strong> no se publica ninguna captura real y no
                  pretendo un análisis experto. Es aprendizaje supervisado, no una auditoría.
                `,
      "p5.muted": "Capturas sin publicar",

      /* --- Proyecto 06: Python --- */
      "p6.kind": "06 · Ejercicios de Python",
      "p6.status": `<span class="status__dot" aria-hidden="true"></span>Prototipo jugable`,
      "p6.title": `Mini Adventure y ejercicios de Python`,
      "p6.desc": `
              Un pequeño juego de plataformas en Tkinter: desplazamiento, salto y doble salto. Alrededor de este
              prototipo, una serie de ejercicios para entender las variables, los bucles y el
              bucle de animación de una interfaz gráfica.
            `,
      "p6.details": "Funciones verificadas en el código",
      "p6.li1": "Ventana de 800 × 500 y una zona de juego dibujada en un lienzo.",
      "p6.li2": "Desplazamiento a izquierda y derecha limitado a los bordes de la pantalla.",
      "p6.li3":
        "Salto animado con velocidad vertical y reinicio al tocar el suelo.",
      "p6.li4": "Doble salto limitado a dos impulsos.",
      "p6.li5":
        "Apuntes personales del curso que explican cada instrucción.",
      "p6.note": `
                    <strong>Límites asumidos:</strong> sin puntuación, sin niveles, sin enemigos.
                    Es un prototipo de aprendizaje, no un juego completo.
                  `,
      "p6.muted": "Prototipo local",

      /* --- Proyecto 07: GMAO --- */
      "p7.kind": "07 · Aplicación de escritorio",
      "p7.status": `<span class="status__dot" aria-hidden="true"></span>Proyecto de estudios — repositorio público`,
      "p7.title": "GMAO — Gestión de mantenimiento",
      "p7.desc": `
              Aplicación de escritorio en Python para gestionar el material de un servicio:
              inventario, solicitudes de intervención, órdenes de trabajo, técnicos e impresión.
              Interfaz oscura en CustomTkinter, datos locales en SQLite. Proyecto de estudios realizado
              en un equipo de 5 personas.
            `,
      "p7.details": "Mis aportaciones dentro del equipo",
      "p7.li1": `Pantalla de material: listado y alta de elementos (<code>materiels.py</code>, <code>ajouter.py</code>).`,
      "p7.li2": `Gestión de técnicos (<code>techniciens.py</code>).`,
      "p7.li3": `Capa de base de datos: esquema SQLite y modelos (<code>database.py</code>, <code>models.py</code>).`,
      "p7.li4": `Impresión y salida de documentos (<code>impression.py</code>).`,
      "p7.note": `
                    <strong>Estado honesto:</strong> proyecto en equipo, no un trabajo individual.
                    El repositorio original pertenece al equipo; el enlace apunta a mi fork.
                    Aplicación de escritorio local, sin demostración web.
                  `,
      "p7.link": `
                Código en GitHub <span aria-hidden="true">↗</span>
                <span class="visually-hidden">(se abre en una pestaña nueva)</span>
              `,

      /* --- Proyecto 08: Budget Pro --- */
      "p8.kind": "08 · Aplicación web",
      "p8.status": `<span class="status__dot" aria-hidden="true"></span>Por consolidar`,
      "p8.desc": `
              Aplicación personal de gestión de presupuesto, contenida en una sola página HTML.
              Los datos se quedan en el navegador mediante <code>localStorage</code>, sin cuenta
              y sin servidor.
            `,
      "p8.details": "Funciones encontradas en el artefacto",
      "p8.li1":
        "Salario mensual, sobres de gasto y seguimiento del progreso.",
      "p8.li2":
        "Ahorro, fondo de emergencia y control de las compras impulsivas.",
      "p8.li3": "Historial de transacciones y archivo mensual.",
      "p8.li4": "Exportación e importación de datos en formato JSON.",
      "p8.note": `
                    <strong>Estado honesto:</strong> solo se encontró un artefacto HTML autocontenido;
                    el código fuente no está disponible. El proyecto se presenta como pendiente de
                    consolidación, sin enlace público ni demostración.
                  `,
      "p8.muted": "Código por recuperar",

      /* --- Trayectoria --- */
      "journey.index": `<span>04</span> Trayectoria`,
      "journey.title": `
            Un progreso que se<br>
            documenta, no se decora.
          `,
      "journey.intro": `
              Ninguna experiencia profesional hasta la fecha. Mi experiencia práctica son
              los proyectos anteriores y los laboratorios realizados en mi máquina.
            `,
      "journey.2021.text":
        "Fin de la educación secundaria básica. Primeros fundamentos de informática y afición por los sistemas.",
      "journey.2022.text":
        "Certificación de francés, útil para la documentación y los intercambios técnicos.",
      "journey.2024.title": "Bachillerato",
      "journey.2024.text":
        "Título obtenido y luego orientación hacia la ingeniería informática en el ISSTM.",
      "journey.degree.title":
        "Grado en Ingeniería Informática — 1.º y 2.º año",
      "journey.degree.text": `
                Formación en informática, desarrollo de software, sistemas y redes.
                Entorno de trabajo principal: Kali Linux.
              `,
      "journey.2026.title": "Primeros proyectos personales completos",
      "journey.2026.text": `
                Linux Permission Manager (publicado), IANATRA, JARVIS, Budget Pro y
                Mini Adventure. Primeras pruebas reales, primeros límites documentados.
              `,
      "journey.today.year": "Hoy",
      "journey.today.title": "Redes y ciberseguridad defensiva",
      "journey.today.text": `
                Consolidación de los fundamentos de red, los permisos en Linux y la documentación
                técnica. Objetivo: proyectos más sólidos, no más numerosos.
              `,
      "honesty.label": "// lo que no afirmo",
      "honesty.1": "Ninguna experiencia profesional en empresa.",
      "honesty.2": "Ninguna certificación en ciberseguridad.",
      "honesty.3": "Ningún servicio de pentesting ni de auditoría de seguridad.",
      "honesty.4": "Ninguna administración de servidores en producción.",

      /* --- Objetivos --- */
      "goals.index": `<span>05</span> Objetivos`,
      "goals.title": `
            Hacia dónde voy,<br>
            y cómo pienso llegar.
          `,
      "goals.intro": `
              Una dirección clara, dividida en etapas realistas. Sin promesas de experiencia:
              competencias por adquirir, pruebas por producir.
            `,
      "goals.statement": `
          Llegar a ser un profesional <em>útil</em>: capaz de entender una infraestructura,
          diagnosticarla, protegerla y explicar mis decisiones.
        `,
      "goals.1.range": "2026 — 2027",
      "goals.1.title": "Consolidar los cimientos",
      "goals.1.li1":
        "Terminar la carrera con bases sólidas en sistemas y redes.",
      "goals.1.li2":
        "Administrar Linux a diario: servicios, registros, copias de seguridad, permisos.",
      "goals.1.li3":
        "Alcanzar un nivel de fundamentos de red cercano al programa CCNA.",
      "goals.1.li4":
        "Publicar tres repositorios limpios, documentados y probados.",
      "goals.1.li5":
        "Realizar mis primeros trabajos locales supervisados: copia de seguridad, auditoría de permisos, limpieza.",
      "goals.2.range": "2027 — 2029",
      "goals.2.title": "Especializar la práctica",
      "goals.2.li1":
        "Profundizar en la ciberseguridad defensiva: endurecimiento, registros, integridad, respuesta inicial.",
      "goals.2.li2":
        "Multiplicar los laboratorios autorizados y los ejercicios de detección.",
      "goals.2.li3":
        "Completar unas prácticas en infraestructura, soporte o seguridad.",
      "goals.2.li4":
        "Obtener una certificación solo si es útil, está financiada y se prepara de verdad.",
      "goals.3.range": "2029 — …",
      "goals.3.title": "Ampliar la escala",
      "goals.3.li1":
        "Cursar un máster o una especialización en el extranjero, en particular en Japón.",
      "goals.3.li2":
        "Trabajar en el equipo defensivo: SOC, infraestructura o seguridad de sistemas.",
      "goals.3.li3":
        "Construir herramientas sencillas y útiles para pequeñas empresas locales y asociaciones.",
      "goals.3.li4": "Transmitir a mi vez lo que he aprendido.",
      "goals.note": `
            <strong>Postura declarada:</strong> la seguridad ofensiva solo se practicará en un marco
            autorizado, pedagógico y documentado. Ningún encargo real sin
            contrato, alcance escrito y competencia verificada.
          `,
      "goals.cta": "Hablar de una oportunidad",

      /* --- Contacto --- */
      "contact.index": `<span>06</span> Contacto`,
      "contact.title": `
            Hablemos de un proyecto,<br>
            unas prácticas o un consejo.
          `,
      "contact.intro": `
              Para una pregunta, una colaboración o comentarios sobre un proyecto. El formulario
              prepara un correo en tu cliente de mensajería: no se envía ningún dato
              a un servidor.
            `,
      "contact.lead": `
              Lo más sencillo sigue siendo el correo electrónico. También consulto GitHub para seguir
              los proyectos publicados.
            `,
      "contact.email.label": "Escribir a",
      "contact.location.label": "Ubicación",
      "contact.copy": `
              Copiar la dirección de correo
            `,
      "contact.availability.label": "// disponibilidad",
      "contact.availability.text": `
                Abierto a prácticas, colaboraciones pedagógicas y pequeños trabajos locales:
                asistencia Linux, scripts Bash, páginas web estáticas, documentación.
              `,
      "form.name": `Nombre <span aria-hidden="true">*</span>`,
      "form.name.ph": "Tu nombre",
      "form.email": `Correo <span aria-hidden="true">*</span>`,
      "form.email.ph": "tu@ejemplo.com",
      "form.subject": "Asunto",
      "form.subject.1": "Pregunta sobre un proyecto",
      "form.subject.2": "Oferta de prácticas",
      "form.subject.3": "Trabajo local",
      "form.subject.4": "Propuesta de colaboración",
      "form.subject.5": "Comentarios sobre el portafolio",
      "form.subject.6": "Otro",
      "form.message": `Mensaje <span aria-hidden="true">*</span>`,
      "form.message.ph": "Describe tu solicitud en unas líneas…",
      "form.submit": `
              Preparar el correo
              <span aria-hidden="true">→</span>
            `,
      "form.note": `
              El botón abre tu cliente de correo con el mensaje ya rellenado.
              Si no se abre nada, copia la dirección de correo que aparece al lado.
            `,

      /* --- Pie de pagina --- */
      "footer.role":
        "Estudiante de Ingeniería Informática — ISSTM Mahajanga, Madagascar.",
      "footer.built":
        "Portafolio construido con HTML, CSS y JavaScript nativo.",
      "footer.source": `
            Código fuente <span aria-hidden="true">↗</span>
          `,

      /* --- Cadenas generadas por script.js --- */
      "js.menu.open": "Abrir el menú",
      "js.menu.close": "Cerrar el menú",
      "js.form.err.name": "Introduce al menos dos caracteres.",
      "js.form.err.email": "Introduce una dirección de correo válida.",
      "js.form.err.message": "Escribe al menos diez caracteres.",
      "js.form.err.summary":
        "El formulario contiene un error. Revisa los campos señalados.",
      "js.form.subject.default": "Mensaje desde el portafolio",
      "js.form.mailto.name": "Nombre",
      "js.form.mailto.email": "Correo",
      "js.form.mailto.footer": "Mensaje preparado desde el portafolio de Ronus.",
      "js.form.status":
        "Tu cliente de correo se abrirá con el mensaje ya rellenado. Si no, copia la dirección de correo.",
      "js.copy.ok": "Dirección copiada al portapapeles.",
      "js.copy.fail":
        "Copia automática imposible — selecciona la dirección manualmente.",
});
