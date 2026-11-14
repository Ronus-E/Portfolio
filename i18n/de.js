/* =========================================================================
   PORTFOLIO — Ronus
   Dictionnaire ALLEMAND (de-DE).

   Fichier de langue : uniquement des donnees, aucune logique.
   Les noms propres, technologies et noms de projets restent inchanges.

   Ajouter une langue : copier ce fichier, traduire les VALEURS (jamais les
   cles), renommer le code, puis declarer la langue dans LOCALES (i18n.js)
   et ajouter la balise <script> correspondante dans index.html.
   ========================================================================= */

"use strict";

window.PortfolioI18N.register("de", {
      /* --- En-tete du document --- */
      "meta.title":
        "Ronus — Student der Technischen Informatik | Linux, Netzwerke und Cybersicherheit",
      "meta.description":
        "Portfolio von Ronus, Student im zweiten Studienjahr Technische Informatik am ISSTM Mahajanga. Echte Projekte, Linux-Labore, Netzwerke und Cybersicherheit — mit dem jeweils genauen Stand.",
      "meta.og.locale": "de_DE",
      "meta.og.title": "Ronus — Student der Technischen Informatik",
      "meta.og.description":
        "Linux, Netzwerke, Python und Grundlagen der Cybersicherheit: ein dokumentierter Lernweg, getestete Projekte und ehrliche Grenzen.",
      "meta.jsonld": `
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ronus Eldo TOLIZARA",
    "alternateName": "Ronus",
    "url": "https://ronus-e.github.io/Portfolio/",
    "jobTitle": "Student der Technischen Informatik",
    "description": "Student im zweiten Studienjahr Technische Informatik am ISSTM Mahajanga, Schwerpunkt Linux, Netzwerke und defensive Cybersicherheit.",
    "inLanguage": "de",
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
      "brand.aria": "Ronus — zurück nach oben",
      "skip": "Zum Hauptinhalt springen",
      "nav.aria": "Hauptnavigation",
      "lang.aria": "Sprache der Website",
      "nav.home": "Start",
      "nav.about": "Über mich",
      "nav.skills": "Kenntnisse",
      "nav.projects": "Projekte",
      "nav.journey": "Werdegang",
      "nav.goals": "Ziele",
      "nav.contact": "Kontakt",

      /* --- Startseite --- */
      "hero.eyebrow": `
            <span class="eyebrow__pulse" aria-hidden="true"></span>
            Ronus · Technische Informatik, 2. Studienjahr · Mahajanga
          `,
      "hero.title": `
            Ich lerne Systeme.<br>
            Ich baue <em>mit Methode.</em>
          `,
      "hero.lead": `
            Als Student der Technischen Informatik am <strong>ISSTM in Mahajanga</strong> bilde ich mich
            auf <strong>Kali Linux</strong> weiter: Systemadministration, Bash-Skripte, Netzwerke und
            Grundlagen der Cybersicherheit. Die hier gezeigten Projekte wurden ausgeführt, getestet und
            dokumentiert — <strong>Grenzen inbegriffen</strong>.
          `,
      "hero.cta.projects": `
              Meine Projekte ansehen
              <span aria-hidden="true">→</span>
            `,
      "hero.cta.journey": "Meinen Werdegang lesen",
      "hero.meta.aria": "Eckdaten",
      "hero.meta.1": `<span aria-hidden="true">01</span> Täglich Kali Linux`,
      "hero.meta.2": `<span aria-hidden="true">02</span> Projekte lokal getestet`,
      "hero.meta.3": `<span aria-hidden="true">03</span> Echtes Niveau, ohne Übertreibung`,

      /* --- Profilbereich --- */
      "profile.aria": "Profilübersicht",
      "profile.path": "ordner / ronus",
      "profile.stamp": "AKT · 11.2026",
      "profile.status": "Status",
      "profile.status.value": `<span class="dot dot--live" aria-hidden="true"></span>Student — im Lernprozess`,
      "profile.education": "Ausbildung",
      "profile.education.value": "Technische Informatik, 2. Studienjahr — ISSTM",
      "profile.hands": "Praxis",
      "profile.hands.value": "Kali Linux · Terminal · lokales Labor",
      "profile.focus": "Schwerpunkt",
      "profile.focus.value": "Linux · Netzwerke · defensive Sicherheit",
      "profile.clock": "Ortszeit",
      "profile.map.aria":
        "Schema der vier Arbeitsbereiche: Systeme, Code, Netzwerke und Sicherheit, verknüpft mit dem Profil",
      "map.systems": "SYSTEME",
      "map.code": "CODE",
      "map.network": "NETZE",
      "map.security": "SICHERHEIT",

      /* --- Ueber mich --- */
      "about.index": `<span>01</span> Profil`,
      "about.title": `
            Der Weg eines Studenten,<br>
            der Anspruch eines Profis.
          `,
      "about.intro": `
              Ich präsentiere keinen Lebenslauf eines Spezialisten. Ich zeige, was ich kann,
              was ich lerne und die Belege dazu.
            `,
      "about.p1": `
              Ich bin <strong>Ronus Eldo TOLIZARA</strong>, Student im zweiten Studienjahr
              <strong>Technische Informatik</strong> am ISSTM in Mahajanga, Madagaskar.
              2024 habe ich das Abitur gemacht und bilde mich seither nach einer einfachen
              Idee weiter: Ein System, das man nicht versteht, kann man nicht absichern.
            `,
      "about.p2": `
              Meine Hauptumgebung ist <strong>Kali Linux</strong>. Dort arbeite ich mit dem Terminal,
              Berechtigungen, Bash-Skripten, Git und Webentwicklung. Außerdem nutze ich Windows, VS Code
              und virtuelle Maschinen für meine Labore. Python und C gehören zu meinem Fortschritt —
              auf dem Niveau eines Studenten, der noch lernt.
            `,
      "about.p3": `
              Meine Methode lässt sich in fünf Worten zusammenfassen: <em>lesen, üben, zerlegen, reparieren, dokumentieren</em>.
              Jedes Projekt in diesem Portfolio existiert auf meinem Rechner. Unfertige sind
              als solche gekennzeichnet, und keine Vorführung ist erfunden.
            `,
      "about.p4": `
              Mit der Zeit möchte ich in Linux und Netzwerken selbstständig werden und dann tiefer in die
              <strong>defensive Cybersicherheit</strong> einsteigen. Außerdem möchte ich mein Studium
              im Ausland fortsetzen, insbesondere in Japan, und Werkzeuge bauen, die den Menschen
              um mich herum nützen.
            `,
      "fact.aria": "Eckdaten",
      "fact.label": "// kurzes Datenblatt",
      "fact.education": "Ausbildung",
      "fact.education.value": `Technische Informatik, 2. Studienjahr<br><span>ISSTM Mahajanga</span>`,
      "fact.bac": "Abitur",
      "fact.bac.value": "2024",
      "fact.env": "Umgebung",
      "fact.env.value": "Kali Linux · Windows",
      "fact.langs": "Sprachen",
      "fact.langs.value": "Französisch fließend · Englisch Anfänger · Japanisch Anfänger",
      "fact.interests": "Interessen",
      "fact.interests.value": "Linux · Netzwerke · Cybersicherheit · Dokumentation",
      "fact.search": "Ich suche",
      "fact.search.value": "Stipendien — Japan und international",
      "principle.1.title": "Erst verstehen, dann automatisieren",
      "principle.1.text":
        "Ein Befehl, den ich nicht erklären kann, ist keine erworbene Fähigkeit.",
      "principle.2.title": "Erst testen, dann veröffentlichen",
      "principle.2.text":
        "Ein Projekt gilt nur dann als funktionsfähig, wenn es ausgeführt und überprüft wurde.",
      "principle.3.title": "Offenlegen, was noch fehlt",
      "principle.3.text":
        "Grenzen werden ausgeschrieben, nicht hinter einem Abzeichen versteckt.",

      /* --- Kenntnisse --- */
      "skills.index": `<span>02</span> Kenntnisse`,
      "skills.title": `
            Was ich kann,<br>
            was ich noch lerne.
          `,
      "skills.intro": `
              Drei Stufen, keine erfundenen Prozentwerte. Ein Label beschreibt die tatsächliche
              Nutzung, nicht den beruflichen Wert.
            `,
      "skills.legend.aria": "Legende der Stufen",
      "skills.legend.1": " bereits in einem Projekt oder im Alltag genutzt.",
      "skills.legend.2": " gelernt und geübt, noch in der Festigung.",
      "skills.legend.3": " erste Grundkenntnisse, noch nicht selbstständig.",
      "level.practice": "Geübt",
      "level.progress": "In Arbeit",
      "level.discover": "Entdeckung",

      "skills.sys.title": `Systeme und Linux`,
      "skills.sys.1":
        "Linux / Kali: Terminal, Dateien, Prozesse, Berechtigungen",
      "skills.sys.2": "Windows: tägliche Nutzung, einfache Werkzeuge",
      "skills.sys.3": "Grundlegende Administration: Dienste, Protokolle, Backups",
      "skills.sys.4": "Systemhärtung und fortgeschrittene Virtualisierung",

      "skills.bash.title": `Bash und Automatisierung`,
      "skills.bash.1":
        "Variablen, Bedingungen, Schleifen, Funktionen, Eingabeprüfung",
      "skills.bash.2":
        "Skripte für Backup, Berechtigungsaudit und Aufräumen",
      "skills.bash.3": "Fehlerbehandlung, Exit-Codes, lokale Tests",
      "skills.bash.4": "Zeitsteuerung mit cron und Skripte für systemd",

      "skills.net.title": "Netzwerke",
      "skills.net.1": "OSI- und TCP/IP-Modell, IPv4-Adressierung, Ports",
      "skills.net.2": `Diagnose: <code>ip</code>, <code>ping</code>, <code>ss</code>, DNS`,
      "skills.net.3": "Wireshark: Filter und geführtes Lesen der Header",
      "skills.net.4": "Packet Tracer, VLANs, Routing und Switching",

      "skills.py.title": `Python und Algorithmen`,
      "skills.py.1": "Skripte, Logik, Schleifen, Funktionen, Tkinter",
      "skills.py.2": "Vorhandenen Code lesen und anpassen",
      "skills.py.3": "Flask / Jinja2: Templates verstehen",
      "skills.py.4": "C: Sprachgrundlagen, Kompilierung, Typen",

      "skills.web.title": `Web und Dokumentation`,
      "skills.web.1": "Semantisches HTML und responsives CSS",
      "skills.web.2": "Reines JavaScript: DOM, Events, Interaktionen",
      "skills.web.3": "Barrierefreiheit, Performance, CSS-Struktur",
      "skills.web.4": "Git, GitHub, Markdown und technische READMEs",

      "skills.sec.title": `Sicherheit und Methode`,
      "skills.sec.1":
        "Linux-Berechtigungen und Prinzip der geringsten Rechte",
      "skills.sec.2": "Konten, Backups und Auswertung von Protokollen",
      "skills.sec.3": "Angewandte Kryptografie und Netzwerksicherheit",
      "skills.sec.4": "Grundlagen des Penetrationstests, ohne Produktiveinsatz",

      "skills.note": `
          Es wird keine berufliche Zertifizierung beansprucht. DELF B1 (2022) ist der einzige
          genannte Sprachabschluss.
        `,

      /* --- Projekte: Filter --- */
      "projects.index": `<span>03</span> Projekte`,
      "projects.title": `
            Echte Arbeit,<br>
            mit ihrem genauen Stand.
          `,
      "projects.intro": `
              Im November 2026 überprüftes Inventar: Projekte auf meinem Rechner geprüft und
              GitHub-Repositories gesichtet. Jede Karte nennt den echten Stand und was noch zu tun ist.
            `,
      "projects.filter.label": "Filter",
      "projects.filter.all": `Alle <span>8</span>`,
      "projects.filter.system": `System <span>3</span>`,
      "projects.filter.network": `Netzwerk <span>1</span>`,
      "projects.filter.web": `Web <span>2</span>`,
      "projects.filter.python": `Python <span>2</span>`,
      "projects.filter.team": `Team <span>1</span>`,
      "projects.filter.todo": `Offen <span>1</span>`,

      /* --- Projekt 01: Linux Permission Manager --- */
      "p1.kind": "01 · Systemwerkzeug",
      "p1.status": `<span class="status__dot" aria-hidden="true"></span>Fertig — v1.0`,
      "p1.desc": `
                Interaktives Bash-Skript zum Anzeigen und Ändern der Berechtigungen einer Datei
                unter Linux. Es zeigt symbolische und numerische Rechte, Eigentümer und
                Gruppe und wendet nach Bestätigung einen erlaubten Modus an.
              `,
      "p1.details": "Im Skript überprüfte Funktionen",
      "p1.li1": `Interaktives Menü und Argumentmodus <code>&lt;Datei&gt; &lt;Berechtigung&gt;</code>.`,
      "p1.li2": "Zeigt Berechtigungen, Eigentümer und Gruppe.",
      "p1.li3": "Prüft die Modi 600, 640, 644, 700 und 755.",
      "p1.li4":
        "Fehlerbehandlung: fehlende Datei, Verzeichnis, ungültige Berechtigung.",
      "p1.li5": "Zeigt die Berechtigungen nach der Änderung erneut an.",
      "p1.note": `
                    <strong>Eingeräumte Grenzen:</strong> eine Datei pro Durchgang, fünf akzeptierte Modi,
                    keine Änderung von Eigentümer oder Gruppe.
                  `,
      "p1.link": `
                  Code auf GitHub <span aria-hidden="true">↗</span>
                  <span class="visually-hidden">(öffnet in einem neuen Tab)</span>
                `,
      "p1.aside.aria": "Beispiel der Skriptausgabe",
      "p1.caption": "Tatsächliche Ausgabe des Skripts für eine Testdatei.",

      /* --- Projekt 02: IANATRA --- */
      "p2.kind": "02 · Webanwendung",
      "p2.status": `<span class="status__dot" aria-hidden="true"></span>Fortgeschrittener Pilot — in Validierung`,
      "p2.title": "IANATRA — Schulverwaltung",
      "p2.desc": `
              Lokale Webanwendung zur Verwaltung einer weiterführenden Schule: Klassen, Schüler,
              Personal, Anwesenheit, Noten, Zeugnisse, Gebühren, Zahlungen, Quittungen, Ausgaben und
              ein Audit-Protokoll. Französische Oberfläche, Daten in einer SQLite-Datenbank.
            `,
      "p2.details": "Im Code überprüfte Funktionen",
      "p2.li1":
        "Verwaltung von Klassen, Schülern, Personal und Benutzerkonten.",
      "p2.li2":
        "Anwesenheit, Noten, gewichtete Durchschnitte, Rangfolge und druckbare Zeugnisse.",
      "p2.li3":
        "Gebühren, Zahlungen, nummerierte Quittungen, Ausgaben und Monatsberichte.",
      "p2.li4":
        "Rollen serverseitig: Administrator, Sekretariat, Buchhaltung, Lehrkraft, nur Lesen.",
      "p2.li5":
        "CSRF-Token, gehashte Passwörter, Sitzung erneut gegen die Datenbank geprüft.",
      "p2.li6": `SQLite-Backup, CSV-Exporte und eine mitgelieferte <code>unittest</code>-Testreihe.`,
      "p2.note": `
                  <strong>Ehrlicher Stand:</strong> Pilotversion, nicht öffentlich bereitgestellt und nicht
                  unabhängig auditiert. Sie muss vor jeder echten Nutzung mit fiktiven Daten getestet
                  werden. Der Code bleibt lokal und wird nicht auf GitHub veröffentlicht.
                `,
      "p2.muted": "Lokaler Code — nicht veröffentlicht",
      "p2.meta": "Flask · SQLite · Rollen",

      /* --- Projekt 03: JARVIS --- */
      "p3.kind": "03 · Lokaler Assistent",
      "p3.status": `<span class="status__dot" aria-hidden="true"></span>Läuft lokal`,
      "p3.desc": `
              Persönlicher Assistent, verbunden mit OpenCode: lokale Weboberfläche,
              Streaming-Konversation, Sitzungsverwaltung, von Menschen bestätigte Berechtigungen und
              lokale Stimme. Oberfläche und Stimme bleiben auf dem Rechner.
            `,
      "p3.details": "Im Code überprüfte Funktionen",
      "p3.li1": `Lokaler Server auf <code>127.0.0.1:7860</code>, Proxy zu OpenCode.`,
      "p3.li2":
        "SSE-Streaming-Antworten, Sitzungsverlauf, Abbruch von Anfragen.",
      "p3.li3":
        "Menschliche Bestätigung vor jeder sensiblen Berechtigung erforderlich.",
      "p3.li4": "CPU- / RAM- / Festplattenüberwachung nur lesend.",
      "p3.li5":
        "Sprachsynthese mit Piper und lokale Erkennung mit faster-whisper, optional.",
      "p3.li6": "Strikte CSP, kein Geheimnis wird an den Browser gegeben.",
      "p3.note": `
                  <strong>Ehrlicher Stand:</strong> persönliches Projekt, das auf meinem Rechner läuft,
                  nicht veröffentlicht und nicht für das Internet gedacht. Keine öffentliche Demo.
                `,
      "p3.muted": "Nur lokale Nutzung",
      "p3.meta": "Node · SSE · Stimme",

      /* --- Projekt 04: Linux-Labore --- */
      "p4.kind": "04 · Persönliches Labor",
      "p4.status": `<span class="status__dot" aria-hidden="true"></span>Regelmäßige Übung`,
      "p4.title": "Linux-Labore",
      "p4.desc": `
              Wiederholte Übungen auf einer Kali-Maschine: Navigation, Berechtigungen, Benutzer,
              Gruppen, Prozesse und Umleitung. Jede Aufgabe wird im Terminal wiederholt,
              bis sie ein Reflex wird und kein abgeschriebenes Rezept.
            `,
      "p4.details": "Was diese Labore abdecken",
      "p4.li1":
        "Symbolische und numerische Berechtigungen lesen und ändern.",
      "p4.li2": "Eigentümer, Gruppen und das Prinzip der geringsten Rechte.",
      "p4.li3":
        "Prozessüberwachung und Erkennen eines laufenden Dienstes.",
      "p4.li4": "Umleitungen, Pipes und die Suche in Dateien.",
      "p4.li5": `Einen Arbeitsbereich <code>CyberLab</code> nach Themen ordnen.`,
      "p4.note": `
                  <strong>Ehrlicher Stand:</strong> persönliche Praxisarbeit, nicht veröffentlicht.
                  Sie belegt Übung, nicht Produktionserfahrung.
                `,
      "p4.muted": "Lokale Praxisarbeit",

      /* --- Projekt 05: Netzwerkanalyse --- */
      "p5.kind": "05 · Netzwerklernen",
      "p5.status": `<span class="status__dot" aria-hidden="true"></span>Im Lernprozess`,
      "p5.title": `Netzwerkanalyse — Wireshark und Packet Tracer`,
      "p5.desc": `
              Geführtes Lesen von Mitschnitten mit Wireshark — Filter, Header, TCP und UDP — und
              Topologiesimulationen in Packet Tracer. Ziel: verstehen, was über die Leitung geht,
              bevor man es diagnostiziert oder absichert.
            `,
      "p5.details": "Echter Stand dieses Lernens",
      "p5.li1": "Anzeigefilter und Lesen der wichtigsten Header.",
      "p5.li2": "Zwei Packet-Tracer-Simulationen aufbewahrt und erneut geöffnet.",
      "p5.li3": `Diagnosebefehle: <code>ip</code>, <code>ping</code>, <code>ss</code>, DNS.`,
      "p5.li4":
        "Kenntnisse zu VLAN, Routing und Switching noch auf Entdeckungsniveau.",
      "p5.note": `
                  <strong>Ehrliche Grenze:</strong> es wird kein echter Mitschnitt veröffentlicht und ich
                  beanspruche keine Expertenanalyse. Das ist begleitetes Lernen, kein Audit.
                `,
      "p5.muted": "Mitschnitte nicht veröffentlicht",

      /* --- Projekt 06: Python --- */
      "p6.kind": "06 · Python-Übungen",
      "p6.status": `<span class="status__dot" aria-hidden="true"></span>Spielbarer Prototyp`,
      "p6.title": `Mini Adventure und Python-Übungen`,
      "p6.desc": `
              Ein kleines Plattformspiel in Tkinter: Bewegung, Sprung und Doppelsprung. Rund um diesen
              Prototyp eine Reihe von Übungen, um Variablen, Schleifen und die
              Animationsschleife einer grafischen Oberfläche zu verstehen.
            `,
      "p6.details": "Im Code überprüfte Funktionen",
      "p6.li1": "Fenster 800 × 500 und eine auf einer Leinwand gezeichnete Spielfläche.",
      "p6.li2": "Bewegung nach links und rechts, begrenzt auf die Bildschirmränder.",
      "p6.li3":
        "Animierter Sprung mit vertikaler Geschwindigkeit und Rücksetzen am Boden.",
      "p6.li4": "Doppelsprung, begrenzt auf zwei Impulse.",
      "p6.li5":
        "Eigene Kursnotizen, die jede Anweisung erklären.",
      "p6.note": `
                    <strong>Eingeräumte Grenzen:</strong> keine Punkte, keine Level, keine Gegner.
                    Es ist ein Lernprototyp, kein fertiges Spiel.
                  `,
      "p6.muted": "Lokaler Prototyp",

      /* --- Projekt 07: GMAO --- */
      "p7.kind": "07 · Desktop-Anwendung",
      "p7.status": `<span class="status__dot" aria-hidden="true"></span>Studienprojekt — öffentliches Repository`,
      "p7.title": "GMAO — Instandhaltungsverwaltung",
      "p7.desc": `
              Python-Desktop-Anwendung zur Verwaltung des Materials einer Abteilung:
              Inventar, Interventionsanfragen, Arbeitsaufträge, Techniker und Druck.
              Dunkle Oberfläche mit CustomTkinter, lokale SQLite-Daten. Studienprojekt
              in einem Team von 5 Personen.
            `,
      "p7.details": "Meine Beiträge im Team",
      "p7.li1": `Materialbildschirm: Auflistung und Hinzufügen von Einträgen (<code>materiels.py</code>, <code>ajouter.py</code>).`,
      "p7.li2": `Technikerverwaltung (<code>techniciens.py</code>).`,
      "p7.li3": `Datenbankschicht: SQLite-Schema und Modelle (<code>database.py</code>, <code>models.py</code>).`,
      "p7.li4": `Druck und Dokumentausgabe (<code>impression.py</code>).`,
      "p7.note": `
                    <strong>Ehrlicher Stand:</strong> ein Teamprojekt, keine Einzelarbeit.
                    Das Original-Repository gehört dem Team; der Link zeigt auf meinen Fork.
                    Lokale Desktop-Anwendung, ohne Web-Demo.
                  `,
      "p7.link": `
                Code auf GitHub <span aria-hidden="true">↗</span>
                <span class="visually-hidden">(öffnet in einem neuen Tab)</span>
              `,

      /* --- Projekt 08: Budget Pro --- */
      "p8.kind": "08 · Webanwendung",
      "p8.status": `<span class="status__dot" aria-hidden="true"></span>Zu konsolidieren`,
      "p8.desc": `
              Persönliche Anwendung zur Budgetverwaltung, in einer einzigen HTML-Seite enthalten.
              Die Daten bleiben über <code>localStorage</code> im Browser, ohne Konto
              und ohne Server.
            `,
      "p8.details": "Im Artefakt gefundene Funktionen",
      "p8.li1":
        "Monatsgehalt, Ausgabenumschläge und Fortschrittsverfolgung.",
      "p8.li2":
        "Ersparnisse, Notfallreserve und Kontrolle über Impulskäufe.",
      "p8.li3": "Transaktionsverlauf und monatliche Archivierung.",
      "p8.li4": "Export und Import der Daten im JSON-Format.",
      "p8.note": `
                    <strong>Ehrlicher Stand:</strong> es wurde nur ein in sich geschlossenes HTML-Artefakt
                    gefunden; der Quellcode ist nicht verfügbar. Das Projekt gilt als
                    konsolidierungsbedürftig, ohne öffentlichen Link und ohne Demo.
                  `,
      "p8.muted": "Quellcode wiederzufinden",

      /* --- Werdegang --- */
      "journey.index": `<span>04</span> Werdegang`,
      "journey.title": `
            Ein Fortschritt, der<br>
            dokumentiert, nicht dekoriert wird.
          `,
      "journey.intro": `
              Bisher keine Berufserfahrung. Meine praktische Erfahrung sind
              die genannten Projekte und die auf meinem Rechner durchgeführten Labore.
            `,
      "journey.2021.text":
        "Ende der Sekundarstufe I. Erste Informatikgrundlagen und Interesse an Systemen.",
      "journey.2022.text":
        "Französischzertifikat, nützlich für Dokumentation und fachlichen Austausch.",
      "journey.2024.title": "Abitur",
      "journey.2024.text":
        "Abschluss erhalten, danach Orientierung zur Technischen Informatik am ISSTM.",
      "journey.degree.title":
        "Bachelorstudium Technische Informatik — 1. und 2. Studienjahr",
      "journey.degree.text": `
                Ausbildung in Informatik, Softwareentwicklung, Systemen und Netzwerken.
                Hauptarbeitsumgebung: Kali Linux.
              `,
      "journey.2026.title": "Erste vollständige eigene Projekte",
      "journey.2026.text": `
                Linux Permission Manager (veröffentlicht), IANATRA, JARVIS, Budget Pro und
                Mini Adventure. Erste echte Tests, erste dokumentierte Grenzen.
              `,
      "journey.today.year": "Heute",
      "journey.today.title": "Netzwerke und defensive Cybersicherheit",
      "journey.today.text": `
                Festigung der Netzwerkgrundlagen, der Linux-Berechtigungen und der technischen
                Dokumentation. Ziel: robustere Projekte, nicht mehr Projekte.
              `,
      "honesty.label": "// was ich nicht beanspruche",
      "honesty.1": "Keine Berufserfahrung in einem Unternehmen.",
      "honesty.2": "Keine Zertifizierung im Bereich Cybersicherheit.",
      "honesty.3": "Keine Dienstleistungen für Penetrationstests oder Sicherheitsaudits.",
      "honesty.4": "Keine Administration von Produktivservern.",

      /* --- Ziele --- */
      "goals.index": `<span>05</span> Ziele`,
      "goals.title": `
            Wohin ich gehe,<br>
            und wie ich dorthin kommen will.
          `,
      "goals.intro": `
              Eine klare Richtung, in realistische Etappen gegliedert. Kein Versprechen von Expertise:
              Kompetenzen, die es zu erwerben gilt, Belege, die zu erbringen sind.
            `,
      "goals.statement": `
          Ein <em>nützlicher</em> Fachmann werden: fähig, eine Infrastruktur zu verstehen,
          sie zu diagnostizieren, sie abzusichern und meine Entscheidungen zu erklären.
        `,
      "goals.1.range": "2026 — 2027",
      "goals.1.title": "Die Grundlagen festigen",
      "goals.1.li1":
        "Das Studium mit soliden Grundlagen in Systemen und Netzwerken abschließen.",
      "goals.1.li2":
        "Linux im Alltag administrieren: Dienste, Protokolle, Backups, Berechtigungen.",
      "goals.1.li3":
        "Ein Niveau in Netzwerkgrundlagen nahe am CCNA-Lehrplan erreichen.",
      "goals.1.li4":
        "Drei saubere, dokumentierte und getestete Repositories veröffentlichen.",
      "goals.1.li5":
        "Meine ersten begleiteten lokalen Aufträge durchführen: Backup, Berechtigungsaudit, Aufräumen.",
      "goals.2.range": "2027 — 2029",
      "goals.2.title": "Die Praxis spezialisieren",
      "goals.2.li1":
        "Tiefer in die defensive Cybersicherheit einsteigen: Härtung, Protokolle, Integrität, erste Reaktion.",
      "goals.2.li2":
        "Autorisierte Labore und Detektionsübungen vervielfachen.",
      "goals.2.li3":
        "Ein Praktikum in Infrastruktur, Support oder Sicherheit absolvieren.",
      "goals.2.li4":
        "Eine Zertifizierung nur dann machen, wenn sie nützlich, finanziert und wirklich vorbereitet ist.",
      "goals.3.range": "2029 — …",
      "goals.3.title": "Den Maßstab erweitern",
      "goals.3.li1":
        "Einen Master oder eine Spezialisierung im Ausland absolvieren, insbesondere in Japan.",
      "goals.3.li2":
        "Im defensiven Team arbeiten: SOC, Infrastruktur oder Systemsicherheit.",
      "goals.3.li3":
        "Einfache, nützliche Werkzeuge für lokale Kleinunternehmen und gemeinnützige Organisationen bauen.",
      "goals.3.li4": "Meinerseits weitergeben, was ich gelernt habe.",
      "goals.note": `
            <strong>Erklärte Haltung:</strong> offensive Sicherheit wird ausschließlich in einem
            autorisierten, lehrreichen und dokumentierten Rahmen praktiziert. Kein echter Auftrag ohne
            Vertrag, schriftlichen Umfang und nachgewiesene Kompetenz.
          `,
      "goals.cta": "Über eine Möglichkeit sprechen",

      /* --- Kontakt --- */
      "contact.index": `<span>06</span> Kontakt`,
      "contact.title": `
            Sprechen wir über ein Projekt,<br>
            ein Praktikum oder einen Rat.
          `,
      "contact.intro": `
              Für eine Frage, eine Zusammenarbeit oder Rückmeldung zu einem Projekt. Das Formular
              bereitet eine E-Mail in Ihrem Mailprogramm vor: es werden keine Daten
              an einen Server gesendet.
            `,
      "contact.lead": `
              Am einfachsten ist weiterhin die E-Mail. Außerdem verfolge ich auf GitHub die
              veröffentlichten Projekte.
            `,
      "contact.email.label": "Schreiben an",
      "contact.location.label": "Ort",
      "contact.copy": `
              E-Mail-Adresse kopieren
            `,
      "contact.availability.label": "// Verfügbarkeit",
      "contact.availability.text": `
                Offen für Praktika, pädagogische Zusammenarbeit und kleine lokale Aufträge:
                Linux-Unterstützung, Bash-Skripte, statische Webseiten, Dokumentation.
              `,
      "form.name": `Name <span aria-hidden="true">*</span>`,
      "form.name.ph": "Ihr Name",
      "form.email": `E-Mail <span aria-hidden="true">*</span>`,
      "form.email.ph": "sie@beispiel.de",
      "form.subject": "Betreff",
      "form.subject.1": "Frage zu einem Projekt",
      "form.subject.2": "Praktikumsangebot",
      "form.subject.3": "Lokaler Auftrag",
      "form.subject.4": "Kooperationsvorschlag",
      "form.subject.5": "Rückmeldung zum Portfolio",
      "form.subject.6": "Sonstiges",
      "form.message": `Nachricht <span aria-hidden="true">*</span>`,
      "form.message.ph": "Beschreiben Sie Ihr Anliegen in wenigen Zeilen…",
      "form.submit": `
              E-Mail vorbereiten
              <span aria-hidden="true">→</span>
            `,
      "form.note": `
              Die Schaltfläche öffnet Ihr Mailprogramm mit der bereits ausgefüllten Nachricht.
              Wenn sich nichts öffnet, kopieren Sie die danebenstehende E-Mail-Adresse.
            `,

      /* --- Fusszeile --- */
      "footer.role":
        "Student der Technischen Informatik — ISSTM Mahajanga, Madagaskar.",
      "footer.built":
        "Portfolio erstellt mit HTML, CSS und reinem JavaScript.",
      "footer.source": `
            Quellcode <span aria-hidden="true">↗</span>
          `,

      /* --- Von script.js erzeugte Zeichenketten --- */
      "js.menu.open": "Menü öffnen",
      "js.menu.close": "Menü schließen",
      "js.form.err.name": "Bitte geben Sie mindestens zwei Zeichen ein.",
      "js.form.err.email": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      "js.form.err.message": "Bitte schreiben Sie mindestens zehn Zeichen.",
      "js.form.err.summary":
        "Das Formular enthält einen Fehler. Prüfen Sie die markierten Felder.",
      "js.form.subject.default": "Nachricht vom Portfolio",
      "js.form.mailto.name": "Name",
      "js.form.mailto.email": "E-Mail",
      "js.form.mailto.footer": "Nachricht vom Portfolio von Ronus aus vorbereitet.",
      "js.form.status":
        "Ihr Mailprogramm öffnet sich mit der vorausgefüllten Nachricht. Andernfalls kopieren Sie die E-Mail-Adresse.",
      "js.copy.ok": "Adresse in die Zwischenablage kopiert.",
      "js.copy.fail":
        "Automatisches Kopieren nicht möglich — wählen Sie die Adresse manuell aus.",
});
