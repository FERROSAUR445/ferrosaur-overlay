# Changelog

<!-- Kuratiert & spielerfreundlich. CI erzeugt daraus releases.json fürs Overlay-Update-Fenster.
     Neue Version: einen "## vX.Y.Z — Titel"-Abschnitt oben ergänzen (Version MUSS zu package.json
     passen), Punkte unter "## [Unreleased]" nach oben verschieben. "### Intern" wird aus den
     öffentlichen Notes herausgefiltert. -->

## [Unreleased]

## v1.11.66 — Encounter-System (einfache Variante)

### ✨ Neu

- Admin → 🤖 AI: Das Encounter-System funktioniert jetzt. Encounter anlegen (Art aus der Liste, Anzahl 1–20,
  Spawnpunkt = deine Position), bearbeiten, löschen. Aktive Encounters spawnen automatisch bei jedem
  Server-Start und per „🦖 Spawnen“ sofort, mit der normalen Spiel-KI. Direkt darüber steht weiterhin
  „🦖 KI-Dino spawnen“ für einzelne Spawns bei dir.
- Bewusst nicht enthalten: Revier/Leine, Patrouillen-Steuerung und Nachspawnen. Bereits gespawnte KI bleibt
  bis zum nächsten Server-Neustart, auch nach Ändern oder Löschen des Encounters.

## v1.11.65 — Admin-Tab „AI“ zeigt den KI-Dino-Spawn

### 🐛 Fehlerbehoben

- Der Tab „🤖 AI“ im Admin-Panel war auf Servern ohne Encounter-System leer und ohne Funktion (die
  Encounter-Routen fehlen dort). Dort steht jetzt stattdessen der Block „🦖 KI-Dino spawnen“ (Art wählen,
  Anzahl 1–5, „Bei mir spawnen“) mit einem Hinweis, dass das Encounter-System nicht installiert ist.

## v1.11.64 — KI-Dinos direkt spawnen

### ✨ Neu

- Admin → Server-Steuerung → ⚙️ Steuerung: neuer Block „🦖 KI-Dino spawnen“. Art auswählen, Anzahl (1–5)
  eintragen, „Bei mir spawnen“ – die KI erscheint direkt bei dir und verhält sich normal. Sie bleibt bis
  zum Server-Neustart.

## v1.11.63 — Paten-Status im Overlay

### 🎨 Sonstiges

- Paten sehen in den Audio-Einstellungen einen neuen Block „Paten-Status“ und können sich als
  Discord-Pate, Ingame-Pate oder voll abwesend eintragen. Neulinge werden nur Paten zugeteilt, die nicht abwesend sind.

## v1.11.62 — HP/Grow/Nährstoffe aus dem HUD entfernt

### 🎨 Sonstiges

- Auf Wunsch entfernt: die HP-, Grow- und die drei Nährstoff-Waben (α/β/γ)
  sind aus der Lebensanzeige raus. Übrig bleiben Essen, Ausdauer und Durst.

## v1.11.61 — Essen/Ausdauer/Durst: großes Icon statt Zahl

### 🎨 Sonstiges

- Essen, Ausdauer und Durst zeigen jetzt ein großes Icon in der Waben-Mitte
  statt einer kleinen Prozentzahl mit winzigem Icon darunter, passend zum
  gewünschten Referenz-Look.

## v1.11.60 — Waben-Vergrößerung zurückgenommen

### 🎨 Sonstiges

- Die Vergrößerung von Essen/Ausdauer/Durst aus v1.11.59 war nicht gewünscht -
  alle HUD-Waben sind wieder einheitlich groß wie zuvor.

## v1.11.59 — Essen/Ausdauer/Durst-Waben vergrößert

### 🎨 Sonstiges

- Die drei Waben für Essen, Ausdauer und Durst sind jetzt etwas größer als die
  restlichen HUD-Waben (HP, Grow, Nährstoffe bleiben unverändert).

## v1.11.58 — Garage-Swap: wartende Wiederherstellung sichtbar

### 🐛 Fehlerbehoben

- Nach einem Swap/Ausparken auf eine andere Spezies (Tod → Spawn-Menü) musste
  man exakt die richtige Spezies wählen, sonst wartete die Wiederherstellung
  unsichtbar im Hintergrund - sah aus wie ein kaputter Swap, obwohl der alte
  Dino sicher in der Garage lag. Die Garage zeigt jetzt an, welche Spezies
  noch auf Wiederherstellung wartet.

## v1.11.57 — KI-Dino-Spawn-Schalter

### ✨ Neu

- Neuer Schalter in Server-Steuerung → ⚙️ Steuerung: Admins können den
  eingebauten Wildlife-Spawn des Spiels komplett an- oder ausschalten. Kein
  gezieltes Spawnen einzelner Dinos (Spezies/Ort) - das würde eine bisher
  ungetestete, riskantere Mod-Funktion brauchen.

## v1.11.56 — Ausparken-Button-Fix

### 🐛 Fehlerbehoben

- Der "Ausparken"-Button in der Garage wurde nur angezeigt, wenn man gerade
  lebend genau dieselbe Spezies spielte wie der gespeicherte Dino - der
  häufigste Fall (tot / im Spawn-Menü, kein lebender Dino) zeigte den Button
  gar nicht erst an. Er erscheint jetzt auch ohne lebenden Dino.

## v1.11.55 — Teleport-Punkte: Höhe korrigieren

### ✨ Neu

- Admins können in der Teleport-Verwaltung jetzt per Klick auf 📍 einen
  bestehenden Teleport-Punkt auf die eigene aktuelle Position (X/Y/Z)
  korrigieren, statt ihn löschen und neu anlegen zu müssen. Praktisch für
  Punkte, deren Höhe beim Anlegen ungenau war und die deshalb beim
  Teleportieren einen spürbaren Fall verursacht haben.

## v1.11.54 — Teleport-Punkte-Liste, Kontrast erhöht

### 🐛 Fehlerbehoben

- Der Kasten pro Teleport-Punkt aus v1.11.53 war noch zu schwach zu erkennen.
  Rahmen und Hintergrund sind jetzt deutlich kräftiger und der Abstand
  zwischen den Einträgen größer, damit jeder Punkt klar als eigener Kasten
  erkennbar ist.

## v1.11.53 — Teleport-Punkte-Liste

### 🐛 Fehlerbehoben

- Die Teleport-Punkte-Liste zeigte alle Einträge ohne sichtbaren Rahmen an —
  sie wirkten optisch zu einem Block zusammengeklebt. Jeder Punkt hat jetzt
  einen eigenen, deutlich sichtbaren Kasten (Rahmen, Hintergrund, Schatten),
  auch ohne Hover.

## v1.11.52 — Push-to-Talk, Entomb-Rückmeldung, Admin-Mutationen

### 🐛 Fehlerbehoben

- Push-to-Talk: Der erste Tastendruck nach jedem Verbinden brauchte spürbar
  lange, weil das Mikro erst in diesem Moment angelegt und veröffentlicht
  wurde. Das Overlay legt den Mikro-Track jetzt direkt beim Verbinden an
  (stummgeschaltet) — Push-to-Talk reagiert danach sofort.
- Entomben zeigte nur den Wachstums-Reset. Die Elder-Stufe kam nirgends im
  Overlay an. Die Detailansicht zeigt jetzt „Elder-Stufe X/3" inklusive
  Badge und Mutationsslots, direkt nach dem Entomben.
- Perfekte Ernährung (Prime) hatte mit 90 % eine Schwelle, die im normalen
  Spiel kaum zu halten war. Auf 70 % gesenkt.

### 🔧 Sonstiges

- Admin → Dino-Token: Der Mutations-Bereich zeigt jetzt einen Hinweis, dass
  ausgewählte Mutationen nur gespeichert, aber nicht live auf den Dino
  übertragen werden (Absturzrisiko im Server-Mod).

## v1.11.51 — Prime-Bedingung „Perfekte Ernährung"

### 🐛 Fehlerbehoben

- „Perfekte Ernährung" im Prime-Fortschritt wurde nie erfüllt, weil sie
  nicht getrackt wurde. Jetzt zählt sie, sobald alle für die Diät eines
  Dinos nötigen Nährstoffe (Karnivoren: Protein + Fett, Herbivoren:
  Kohlenhydrate, Allesfresser: alle drei) gleichzeitig bei mindestens
  90 % liegen.

## v1.11.50 — Zombie-Look im Skin-Menü

### ✨ Neu

- Der Zombie-Look-Regler im Skin-Editor ist für das Team freigeschaltet und
  wirkt auf deinen Dino im Spiel (Verrottungs-Maske, 0–100 %). Der Server
  kann ihn über eine Einstellung für alle Spieler öffnen.

## v1.11.49 — Zonen komplett bearbeiten

### ✨ Neu

- Zonen lassen sich jetzt direkt auf der großen Karte bearbeiten (Admin,
  über „📐 Zonen"): Eckpunkte ziehen, auf ein grünes ＋ an einer Kante
  ziehen für eine neue Ecke, Shift + Ziehen verschiebt die ganze Zone,
  Rechtsklick auf eine Ecke löscht sie. „🖱️ Punkte per Klick" setzt
  neue Ecken per Mausklick, ohne im Spiel herumzufliegen.
- Der Typ einer vorhandenen Zone ist änderbar (PvP, PvE, Sanctuary, Patrol,
  Migration, Patenzone, Event). Zonen lassen sich kopieren und in der Liste
  suchen; die Liste zeigt jetzt Typ und Punktzahl.
- Die erste gesetzte Ecke einer neuen Zone ist sofort sichtbar.

### 🐛 Fehlerbehoben

- Prime-Fortschritt: Die drei automatisch erfüllten Bedingungen (nie
  unfruchtbar, keine Muskelkrämpfe, Spezies-Bonus) zählen jetzt als erfüllt.
  Sanctuary, Migrations- und Patrol-Zonen werden mit den neuen Zonendaten
  erkannt.

## v1.11.48 — Zonen auf der Karte gut sichtbar

### ✨ Neu

- Sanctuary-, Patrol- und Migrations-Zonen werden auf der Karte jetzt mit
  zarter Farbfüllung gezeichnet, nicht nur als dünner Umriss. Auf der
  großen Karte stehen bei Sanctuary- und Migrations-Zonen die Namen dabei.
- Die Zonen ersetzen die bisherigen Platzhalter und sind auf die
  Spielkarte kalibriert (Positionen auf Karte und Minimap stimmen damit
  genauer).

## v1.11.47 — Skin-Fenster verschiebbar

### ✨ Neu

- Das Skin-Editor-Fenster lässt sich jetzt direkt an der Kopfzeile ziehen
  (ohne Edit-Modus), damit du deinen Dino dahinter siehst. Die Position
  wird gemerkt; „Layout zurücksetzen" in den Einstellungen stellt sie
  wieder her.

## v1.11.46 — Eigener Bot für den Token-Markt

### 🔧 Sonstiges

- Der Token-Markt auf Discord nutzt jetzt einen eigenen, zweiten Bot mit
  eigenem Token, eigener Application-ID und eigenem Public Key. Im
  Server-Panel (Übersicht → Discord-Bot) gibt es dafür ein eigenes
  Token-Feld im Token-Markt-Abschnitt. Status-Bot und Markt-Bot lassen
  sich getrennt eintragen und getrennt löschen.

## v1.11.45 — Quest-System entfernt

### 🔧 Sonstiges

- Das Quest-System ist aus dem Overlay entfernt: Dock-Button, Quest-Fenster
  und die Quest-Zeile im Profil. Der Server verfolgt Quests nicht mehr.

## v1.11.44 — Server-Name und Token-Markt auf Discord

### ✨ Neu

- Im Server-Panel (Übersicht) trägst du jetzt den Server-Namen ein. Er
  erscheint im Discord-Status und im Token-Markt-Angebot.
- Token-Markt auf Discord: Spieler verkaufen mit dem Befehl
  `/token-verkaufen` Token an andere Spieler. Das Angebot erscheint als
  Nachricht mit „Kaufen"-Button im Markt-Kanal und gleichzeitig im
  Token-Markt des Overlays. Kauft oder zieht jemand im Overlay zurück,
  aktualisiert sich die Discord-Nachricht automatisch, und umgekehrt.
- Mit `/tokens` sehen Spieler auf Discord ihre Token und Punkte.
- Alles wird im Server-Panel unter „Übersicht → Discord-Bot" eingetragen.

## v1.11.43 — Discord Status-Bot

### ✨ Neu

- Im Server-Panel (Übersicht) gibt es den neuen Block „Discord Status-Bot".
  Admins tragen dort Bot-Token, Kanal-ID und Intervall ein. Der Bot hält
  danach eine Nachricht mit Server-Status (online/offline) und Spielerzahl
  im Discord-Kanal aktuell. Der Token wird nur auf dem Server gespeichert
  und nie ans Overlay zurückgeschickt.

## v1.11.42 — Nieten in der Lootbox

### ✨ Neu

- Die Lootbox kann jetzt auch Nieten ziehen: Landet die mittlere Walze auf
  💨, gibt es diesmal nichts. Drei Nieten sind kein Jackpot. Die Chance
  steht bei den Drop-Chancen, und Admins stellen sie im Lootbox-Editor ein
  (0 schaltet Nieten ab).

## v1.11.41 — Dino-Markt entfernt

### 🔧 Sonstiges

- Der Dino-Markt (Angebote, Gesuche und „An Spieler listen") ist aus dem
  Overlay entfernt. Der Markt zeigt nur noch den Token-Markt und „Meine
  Angebote". Dinos an den Server verkaufen geht weiterhin in der Garage.

## v1.11.40 — Quest direkt im Spiel starten

### ✨ Neu

- Eine gewürfelte Quest startet jetzt automatisch, sobald du im Spiel als
  Quest-Spezies spawnst (Juvi bis 30 % Wachstum). Du musst dafür nichts
  mehr im Overlay anklicken, das Overlay meldet den Start per Hinweis.

## v1.11.39 — Quest-Start parkt deinen Dino ein

### 🐛 Fehlerbehoben

- Beim Start einer Quest wird dein aktueller Dino jetzt wirklich in die
  Garage eingeparkt, so wie es im Quest-Fenster steht. Danach wählst du im
  Spawn-Menü die Quest-Spezies. Hat dein Dino nicht volle Gesundheit,
  bekommst du eine Meldung und die Quest startet erst nach dem Heilen.

## v1.11.38 — Wachstumsbalken in der Garage

### ✨ Neu

- Garage-Karten und die Detailansicht zeigen jetzt einen Wachstumsbalken
  mit Prozentwert.

## v1.11.37 — Prime-Status aus dem Spiel

### 🐛 Fehlerbehoben

- Ist dein Dino im Spiel bereits Prime, zeigt das Dino-Panel jetzt
  „Prime erreicht" an. Bisher stand dort weiter 0/5, weil der Status des
  Spiels nicht ans Overlay weitergegeben wurde.
- Dasselbe gilt für das Prime-Abzeichen in der Garage-Detailansicht.
- Der vierte Mutationsslot beim Insta-Grow erkennt Prime-Dinos jetzt
  ebenfalls.

## v1.11.36 — Garage: Dinos wirklich tauschen

### ✨ Neu

- Einparken, Ausparken und Tauschen funktionieren jetzt für alle Spieler
  im Spiel: „Tauschen" parkt deinen aktuellen Dino ein und du landest im
  Spawn-Menü. Wählst du dort die Spezies des Garagen-Dinos, werden
  Wachstum, Skin und Nährstoffe automatisch wiederhergestellt.
- Tauschst du gegen einen Dino derselben Spezies, wird dein aktueller Dino
  eingeparkt und der gespeicherte sofort aktiv — ohne Tod und ohne
  Spawn-Menü.
- Mutationen lassen sich nicht wiederherstellen und bleiben die des neuen
  Spawns.

## v1.11.35 — Nährstoff-Waben und roter Team-Skin im Dienst

### ✨ Neu

- Die Lebensanzeige zeigt jetzt auch die drei Nährstoff-Waben mit echten
  Live-Werten: α Kohlenhydrate, β Protein, γ Fett.
- Beim Wechsel in den Admin-Dienst wird der Dino automatisch rot
  (Team-Skin). Beim Verlassen des Dienstes bekommst du deinen vorherigen
  Skin zurück.
- Der rote Team-Skin ist für normale Spieler gesperrt.

## v1.11.34 — Skin wird gespeichert und wieder geladen

### 🐛 Fehlerbehoben

- Der Skin-Editor zeigte beim erneuten Öffnen immer wieder graue
  Standardfarben statt deines zuletzt bestätigten Skins. Dein Skin
  wird jetzt gespeichert und beim Öffnen wieder angezeigt.
- Eigene Vorlagen ließen sich zwar speichern, aber nicht anwenden oder
  löschen. Beides funktioniert jetzt.
- Kurze Server-Neustarts lösten die Fehlermeldung „Unexpected token '<'
  … is not valid JSON" aus. Das Overlay wiederholt die Anfrage jetzt
  automatisch und zeigt eine verständliche Meldung.

## v1.11.33 — Prime-Fortschritt in der Garage sichtbar

### 🐛 Fehlerbehoben

- Geparkte/gekaufte Dinos zeigten nie einen Prime-Status oder
  -Fortschritt, weil dieser beim Einparken/Tauschen nie mitgespeichert
  wurde. Die Detailansicht zeigt jetzt denselben Prime-Fortschritt
  (5 von 10 Bedingungen) wie das Live-Dino-Info-Panel.

## v1.11.32 — Overlay-Fenster bleibt immer offen

### 🔧 Sonstiges

- Das Overlay beendet sich nicht mehr automatisch und blendet sich
  nicht mehr aus, wenn The Isle nicht läuft oder nicht im Vordergrund
  ist. Das Fenster bleibt immer sichtbar — nutzbar auch ohne laufendes
  Spiel (z. B. für Settings/Team/Admin).

## v1.11.31 — Kompass folgt jetzt korrekt der Bewegung

### 🐛 Fehlerbehoben

- Der Kompass-Zeiger drehte sich beim Laufen kaum (Rechenfehler:
  Bewegungsrichtung wurde in Radiant berechnet, aber wie Grad benutzt).
  Jetzt korrekt umgerechnet, der Zeiger folgt sauber deiner Bewegung.

## v1.11.30 — Garage/Markt zeigen wieder die Dino-Art

### 🐛 Fehlerbehoben

- Karten in Garage, Markt und Verkaufen-Dialog zeigten weder Bild noch
  Name des Dinos (nur Platzhalter-Silhouette + "Male - 100%"). Die
  Karten lasen ein falsches Datenfeld, jetzt korrigiert.

## v1.11.29 — α/β/γ-Deko-Waben wieder entfernt

### 🔧 Sonstiges

- Die drei kleinen α/β/γ-Waben sind wieder raus. Verbundene Wabenform
  (HP/Grow/Essen/Ausdauer/Durst als ein Block) bleibt wie sie ist.

## v1.11.28 — Lebensanzeige zurück zur verbundenen Wabenform

### 🔧 Sonstiges

- HP/Grow/Essen/Ausdauer/Durst wieder als ein zusammenhängender Block
  wie ursprünglich, inkl. der kleinen α/β/γ-Deko-Waben. Die Aufteilung
  in 5 einzeln verschiebbare Waben und das Entfernen der α/β/γ-Waben
  sind zurückgenommen.

## v1.11.27 — Login zeigt jetzt eine Fehlermeldung statt stumm zu scheitern

### 🔧 Sonstiges

- Wenn der Login lokal nicht abgeschlossen werden kann (meist weil eine
  zweite Ferrosaur-Instanz noch offen ist), zeigt das Login-Fenster
  jetzt eine klare Meldung statt einfach nichts zu tun.

## v1.11.26 — Team-Rollen: Admin/Moderator/Supporter vergeben

### 🔧 Sonstiges

- Im Team-Panel unter Accounts kannst du jetzt Spielern per Discord-ID
  die Rolle Admin, Moderator oder Supporter geben (oder entziehen).
  Jede Rolle hat automatisch die passenden Rechte im Overlay.

## v1.11.25 — Standard-Rang heißt jetzt FERROSAUR

### 🔧 Sonstiges

- Der Standard-Rang (ohne Abo) heißt jetzt "FERROSAUR" statt "Fossil".

## v1.11.24 — Lebensanzeige: jede Wabe einzeln anpassbar

### 🔧 Sonstiges

- HP, Grow, Essen, Ausdauer und Durst sind jetzt 5 eigenständige
  Waben statt einem festen Block. Im Edit-Mode (Settings → UI)
  kannst du jede einzeln verschieben, skalieren und ein-/ausblenden.
  Standardmäßig sieht die Anordnung weiterhin aus wie bisher.

## v1.11.22 — Support-Button entfernt

### 🔧 Sonstiges

- Der Support-Button im Dock ist wieder raus.

## v1.11.20 — Rate-Wabe entfernt, HP auf Grow-Ebene

### 🔧 Sonstiges

- Die Rate-Wabe (Nährstoffsumme) ist raus. HP steht jetzt auf
  derselben Ebene wie Grow, statt oben zentriert zu stehen.

## v1.11.19 — Kleine α/β/γ-Naehrstoff-Waben ergänzt

### ✨ Neu

- 3 kleine Deko-Waben (α/β/γ) oben rechts an der Essen-Wabe, wie im
  Referenzbild. Rein optisch — RCON liefert keine Nährstoff-Werte,
  deshalb ohne Füllung/Prozentzahl, nur Umriss + Symbol.

## v1.11.18 — Vitals-Waben als Dreieck (wie Referenzbild)

### 🔧 Sonstiges

- Essen/Ausdauer/Durst bilden jetzt ein echtes, durchgehend verzahntes
  Dreieck (Essen oben, Ausdauer/Durst darunter links/rechts), passend
  zum sauberen Referenzbild des nativen Vitals-HUDs.

## v1.11.17 — Ausdauer-Icon korrigiert

### 🔧 Sonstiges

- Ausdauer-Icon von Pfote auf Fußabdruck geändert (echtes Evrima-HUD
  nutzt einen Fußabdruck fürs Ausdauer-Icon).

## v1.11.16 — Vitals-Waben vergrößert

### 🔧 Sonstiges

- Die HP/Rate/Grow/Ausdauer/Essen/Durst-Wabenanzeige ist jetzt größer
  (war durch die 2. Reihe optisch geschrumpft, da die Breite gleich blieb).

## v1.11.15 — Sprecher-Box umsortiert

### 🔧 Sonstiges

- Die 🔊-Sprecher-Box steht jetzt direkt unter „Reichweite", vor der
  Zonen-Anzeige.

## v1.11.14 — Sprech-Anzeige in der Teilnehmerliste

### ✨ Neu

- In den Einstellungen bei den Voice-Teilnehmern leuchtet jetzt ein
  grüner Punkt neben dem Namen, solange die Person gerade spricht.

## v1.11.13 — Vitals-Waben mit Icons statt Text

### 🔧 Sonstiges

- Ausdauer/Essen/Durst zeigen jetzt Icons (🐾/🍖/💧) mit cyan-farbenem
  Umriss statt Text-Label, angelehnt ans native Spiel-HUD.

## v1.11.12 — Waben wieder durchgehend verzahnt

### 🔧 Sonstiges

- Ausdauer/Essen/Durst wieder direkt an Rate/Grow anschließend (keine
  Lücke), wie im nativen Spiel-HUD.

## v1.11.11 — Waben-Anordnung korrigiert

### 🔧 Sonstiges

- Ausdauer/Essen/Durst bilden jetzt eine eigene zweite Dreiecks-Gruppe
  (wie im Spiel-HUD), statt mit HP/Rate/Grow zu einer Wabe zu verschmelzen.

## v1.11.10 — Erweiterte Vitals-Anzeige

### ✨ Neu

- Die HP/Grow-Waben oben links zeigen jetzt zusätzlich Ausdauer, Essen
  und Durst — 6 Waben statt 3, wie das Standard-Spiel-HUD.

## v1.11.9 — Wachstums-Zonen

### ✨ Neu

- Zonen können jetzt ein Wachstums-Fenster bekommen (z. B. Baby-Zone
  0–25 %) — wer mit falschem Wachstum drinsteht, bekommt eine Warnung.

## v1.11.8 — Aufräumen

### 🔧 Sonstiges

- "Aktive Dinos"-Box neben der Minimap wieder entfernt.
- Admins sehen jetzt den Kalibrierungs-Button auf der Karte (bisher immer
  versteckt) — Kartenmarker brauchen eine einmalige Kalibrierung.

## v1.11.7 — Kompass zeigt "auf dem Server" korrekt an

### 🐛 Fehlerbehoben

- Der Kompass zeigte dauerhaft "nicht im Spiel", obwohl man erkannt wurde — er
  verlangte eine Blickrichtung, die RCON nicht liefert. Nutzt jetzt die aus der
  Bewegung berechnete Richtung als Ersatz.

## v1.11.6 — Skin-Menü speichert (noch ohne Live-Anwendung)

### ✨ Neu

- Skin-Editor speichert deine Auswahl inkl. Vorlagen. Live-Übertragung auf den
  Dino im Spiel folgt in einem späteren Update (braucht Server-Mod).

## v1.11.5 — Overlay erscheint jetzt wirklich

### 🐛 Fehlerbehoben

- Das Overlay erkannte das Spiel nicht, weil der aktuelle Isle-Client-Prozess
  anders heißt als angenommen. Dadurch blieb das HUD immer unsichtbar.

## v1.11.4 — Echte Live-Positionen

### ✨ Neu

- Karte, Minimap und der „Bist du auf dem Server"-Status nutzen jetzt echte
  Live-Spielerpositionen vom Isle-Server.

## v1.11.3 — Voice-Chat freigeschaltet

### ✨ Neu

- Voice-Chat funktioniert jetzt auch ohne Live-Positionsdaten vom Spielserver.

## v1.11.2 — Umstieg auf das neue HUD 🦖

### ✨ Neu

- **Der automatische Umstieg ist wieder da.** Beim nächsten Start lädt dieses Overlay das neue
  **Ferrosaur HUD 2.0.1**, installiert es, startet es — und entfernt sich danach selbst.
  Du musst nichts tun. Deine Punkte, Dinos, Skins und Token sind alle da.
- Die Abstürze, wegen derer der Umstieg am 19.08. ausgesetzt wurde, sind behoben (Ursache war
  die Minimap) und mit einer Testrunde auf dem echten Server abgenommen.
- Sollte der Umstieg schiefgehen, bleibt dieses Overlay installiert und startet normal weiter —
  mit einem Link zum HUD zum Selbst-Laden. Niemand steht ohne Overlay da.

## v1.11.1 — Overlay bleibt vorerst 🔙

### 🔧 Geändert

- **Der automatische Umstieg auf das neue HUD ist ausgesetzt.** Das HUD hat derzeit Abstürze, deshalb
  bleibt vorerst dieses Overlay im Einsatz. Es installiert nichts mehr nach und entfernt sich nicht
  mehr selbst. Sobald das HUD stabil läuft, kommt der Umstieg zurück.

## v1.11.0 — Umstieg auf das neue Ferrosaur HUD 🦖

### ✨ Neu

- **Das alte Overlay geht in Rente.** Diese Version lädt beim Start automatisch das neue
  **Ferrosaur HUD (Overlay 2.0)** herunter, installiert es, startet es — und entfernt das
  alte Overlay danach von selbst. Du musst nichts tun. Deine Punkte, Dinos, Skins und Token
  sind alle da.
- Klappt der automatische Umstieg nicht (kein Netz o. ä.), bleibt das alte Overlay installiert
  und zeigt dir den Download-Link: https://ferrosaur.de/profil

## v1.10.2 — Patenzone & Event-Zonen 🎗️

### ✨ Neu

- **Patenzone**: eine neue Kartenzone nur für Paten. Betrittst du sie — egal ob zu Fuß, im
  Flug oder per Teleport — werden Leben, Hunger, Durst und Blut eingefroren, bis du sie wieder
  verlässt. Beim Verlassen gibt es einmalig einen kostenlosen Rückkehr-Teleport zurück zu deiner
  Position von davor.
- **Paten-Teleport**: ein exklusiver, kostenloser Teleportpunkt nur für Paten.
- **Event-Zonen sichtbar**: nimmst du gerade an einer laufenden Event-Gruppe mit zugewiesener
  Zone teil, siehst du deren Umriss jetzt auch auf deiner Karte.

### Intern

- Neue Permission `core.paten.perks.use.self` (Rolle "Pate") steuert Patenzone-Sichtbarkeit/
  -Freeze und Paten-Teleport-Nutzung serverseitig; Event-Zonen-Sichtbarkeit jetzt per-Zone
  geprüft (aktive Event-Gruppen-Mitgliedschaft), vorher kategorisch nie an den Overlay
  ausgeliefert. Backend-Gegenstück: bf-backend!71.

## v1.10.1 — Dino-Namen im Panel & Geschlechtswechsel pausiert 🏷️

### ✨ Neu

- **Dino benennen, direkt im Dino-Panel**: oben im Panel gibt es ein Namensfeld für deinen
  aktiven Dino — Enter oder „Speichern" genügt. Der Name bleibt am Dino und wandert beim
  Einparken mit in den Garagen-Slot.

### ⚠️ Vorübergehend deaktiviert

- **Geschlechtswechsel** im Skin-Editor ist bis auf Weiteres abgeschaltet — für alle Ränge und
  auch während eines „Free Gender Swap"-Events. Dein aktuelles Geschlecht bleibt unverändert; an
  deinem Dino, seinen Farben und seinem Wachstum ändert sich nichts. Alles andere im Skin-Editor
  (Farben, Muster, Variation, Rollplay-Name, Zombie-Look) funktioniert wie gehabt. Wir melden
  uns, sobald der Geschlechtswechsel zurückkommt.

### Intern

- Riegel sitzt doppelt. Im Overlay ein Kill-Switch `GENDER_SWAP_DISABLED` (Buttons echt
  `disabled`, Klick-Handler wird nicht mehr gebunden, `changeGender()` bricht zusätzlich ab), im
  Backend das Flag `GENDER_SWAP_ENABLED` — ohne das antwortet `POST /me/gender` mit 403, auch für
  die älteren Overlay-Versionen, die noch draußen laufen.
- Wiederaktivieren: Konstante auf `false` **und** `GENDER_SWAP_ENABLED=1` + Neustart. Der
  Admin-Schalter „Free Gender Swap" bleibt bestehen, ist bis dahin aber wirkungslos.

## v1.10.0 — Wandern & Server-Übersicht 🥾

### ✨ Neu

- **Wandern** — Bestenliste fürs Laufen, Fliegen und Schwimmen, mit Wochen- und Gesamtwertung,
  persönlichen Rekorden und einer Live-Distanzanzeige im HUD.
- **Dino-Namen**: Dinos in der Garage lassen sich benennen; der Name bleibt am Dino.
- **Companion-App** — an einer zweiten Anwendung neben dem Overlay wird gearbeitet. Sie läuft
  gerade in einer geschlossenen Beta mit einem kleinen Kreis. Mehr dazu, sobald sie so weit ist.

### 🔧 Verbessert

- **Server-Panel** in Reiter aufgeteilt, mit neuem Übersichts-Dashboard: Auslastung, Festplatte,
  Datenbank-Antwortzeit und ein 24-Stunden-Verlauf der Spielerzahl.
- **Updates und Änderungshinweise** kommen jetzt vom eigenen Server statt von GitHub. Am Ablauf
  ändert sich für dich nichts — das Overlay aktualisiert sich weiterhin von selbst.

### 🐛 Behoben

- **Sprachfunk**: Kurzes Flackern des Todes-Zustands konnte die Tonkette zerlegen — entprellt.
- **Zuschauen**: Im Zuschauer-Modus zeigt die Karte einen Punkt statt eines Blickrichtungs-Pfeils,
  und der Kompass blendet sich aus.

### Intern

- **Companion-App** (oeffentlich nur als Beta erwaehnt, ohne Details): laeuft ohne Spiel,
  Zugang ueber BETA_STAFF_ONLY auf Staff begrenzt. Umfang: Vollbild-Karte mit Karten-Editor,
  Spielerverwaltung, Tokens, Dino- und Weltverwaltung, Ankuendigungen, Support, Verwarnungen,
  Accounts, Audits, Lexikon, Staff-Handbuch und Mithoeren.
- Farbschemata in der Companion (sieben Vorlagen plus eigene Farbe, alles aus einem Farbwert
  abgeleitet); roter Punkt an den Einstellungen bei verfuegbarem Update.
- Auto-Update und Release-Notes laufen ueber das eigene Backend (`/overlay`), damit das Repository
  privat werden kann. Overlay und Companion nutzen getrennte Kanaele.
- Windows: Overlay misst sich im Fenstermodus korrekt aufs Spielfenster ein.
- Kartenmarker folgen bewusst NICHT dem Farbschema — ein Teleportpunkt sieht ueberall gleich aus.
- CI-Riegel gegen versehentlich committete Test-Umleitungen (Produktions-URL, Ports).
- Installer werden nicht mehr blind zwischengespeichert; der Dateiname ist versionslos, wodurch bis
  zu einen Tag lang die alte Fassung ausgeliefert wurde.
- Rang-Pruefung fuer das Schreiben der Class-Limits ergaenzt (fehlte vollstaendig).

## v1.9.2 — Menü-Frischekur & Software-Tab ✨

### ✨ Neu
- Neuer **Software**-Tab in den Einstellungen: zeigt die Version und die letzten Änderungen.
- Menüs überarbeitet: echte Reiter-Tabs, einheitliche Buttons/Regler/Schalter, aufgeräumtes Design.
- Eigener **Ansage**-Tab im Team-Panel für server-weite Durchsagen.
- Fenster-Transparenz der Menüs umschaltbar (unter „HUD-Sichtbarkeit").

### 🔧 Fixes
- Einstellungen, Team- und Admin-Fenster sind jetzt gleich groß und scrollen sauber.
- Player-Audit: der Aktions-Filter ist jetzt ein durchsuchbares Auswahl-Popup statt der fummeligen Liste.

## v1.9.1 — Voice-Hotfix 🔧

### 🔧 Fixes
- Knistern behoben, Ausgabegerät-Auswahl korrigiert, Not-Aus-Schalter für 3D/Effekte.

## v1.9.0 — Räumlicher Ton & Gottstimme 🎙️

### ✨ Neu
- Räumlicher Voice-Ton (3D-Panning) — du hörst, aus welcher Richtung jemand spricht.
- **Gottstimme**: server-weite Admin-Durchsage „von oben" mit dezentem Himmels-Hall.
- Unterwasser dämpft die Stimmen jetzt hörbar.

## v1.8.2 — Test-Installer parallel 🧪

### ✨ Neu
- Test-Version läuft parallel zur Produktiv-App (eigener Deep-Link + eigener Datenordner).

## v1.7.5 — Kalibrierung: endlich alle Punkte an Land ✅

### 🔧 Fixes
- **Echter Fix für die Kalibrier-Punkte im Ozean.** Die Auto-Kalibrierung mischte bisher die gezeichneten Zonen-Ecken in die Zielauswahl — und deren äußerste Ecken liegen im Wasser. Dadurch teleportierte sie zu Wasser-Punkten und die zuvor angepassten Land-Anker wurden nie verwendet. Jetzt nutzt sie **ausschließlich die pixel-verifizierten Land-Punkte**.

## v1.7.4 — Kalibrierung: Referenzpunkte jetzt wirklich an Land 🎯

### 🔧 Fixes
- **Auto-Kalibrierung teleportiert jetzt zu Punkten, die sicher an Land liegen** (pixel-genau aus der Karte gewählt und verifiziert) — die vorherigen Ziele lagen teils noch im Ozean und ließen sich nicht anklicken. (Wer bereits kalibriert hat, muss nichts tun.)

## v1.7.2 — Neue Karte & verschiebbare Timer 🗺️

### ✨ Neu
- **🗺️ Neue Karte: Gateway V5.0** — aktualisiertes Kartenbild mit überarbeitetem Gateway, neuen Anlagen und Flussverläufen. Alle Positionen, Zonen und Wegpunkte passen weiterhin exakt (gleiche Kalibrierung).
- **⏱️ Timer sind jetzt frei platzierbar**: Der **Grow-Timer**, der **Goldene-Zone-Timer** und der **PvE-Einpark-Countdown** sitzen jetzt standardmäßig **oben neben deiner Punkte-Anzeige** — und lassen sich wie die anderen HUD-Elemente **verschieben und skalieren** (Einstellungen → HUD anpassen).
  - Im Bearbeiten-Modus werden die Timer als **Vorschau eingeblendet**, auch wenn gerade keiner läuft — so kannst du sie jederzeit platzieren.
  - „Layout zurücksetzen" stellt die Standard-Position neben den Punkten wieder her.

## v1.7.1 — Goldene Patrol-Zone: Feinschliff 🔧

### 🔧 Fixes
- **HUD erscheint erst bei Bedarf**: Der Goldene-Zone-Timer (inkl. „alle müssen rein"-Hinweis) wird jetzt erst angezeigt, wenn **mind. einer aus der Gruppe (oder du selbst) schon einmal in der goldenen Zone war**. Vorher war die Anzeige dauerhaft sichtbar und dadurch störend. (Wo die Zone liegt, zeigt weiterhin die goldene Markierung auf der Karte.)
- **Timer läuft jetzt rund**: Der Countdown springt nicht mehr bei jedem Server-Poll zurück, sondern zählt flüssig herunter.
- **Kein „Zonen-Springen" mehr**: Die goldene Zone wechselt nicht mehr fälschlich, während man drinsteht (kurzzeitige Server-Aussetzer werden abgefangen).

## v1.7.0 — Zonen-Rework & Goldene Patrol-Zone ⭐

### ✨ Neu
- **⭐ Goldene Patrol-Zone**: Pro Gruppe (oder allein) ist zufällig **eine Patrol-Zone golden**. Steht **die ganze Gruppe 15 Minuten** darin, gibt es **+100 Punkte pro Person**. Danach 15 Min Pause, dann rotiert eine neue goldene Zone rein. Ein **HUD-Timer oben** zeigt den Fortschritt.
  - Verlässt **jemand** die Zone, **pausiert** der Timer (kein Reset) — mit klarem Hinweis: „ALLE müssen in die Patrol-Zone, damit der Timer weiterläuft".
  - Die goldene Zone ist auf der Karte **golden hervorgehoben** (auch wenn der Patrol-Layer ausgeblendet ist).
- **👑 Prime über unsere Zonen**: Besuchte **Patrol-/Migrations-/Sanctuary-Zonen** zählen jetzt für die Elder-/Prime-Bedingungen (4 Patrol-Zonen, 2 Migrations-Zonen, Sanctuary als Juvenile) — pro Dino-Leben getrackt.

### 🗺️ Karte
- **Sanctuary / Patrol / Migration** werden jetzt als **sauberer Umriss** aus den vom Team gezeichneten Zonen gezeichnet (kein festes Bild, **kein Name-Label** mehr) — pro Typ **ein-/ausblendbar**.
- Die Zonen-Anzeige zeigt jetzt **alle** Zonen, in denen du gerade stehst (z. B. „Patrol · Migration") — Zonen überlappen sich, mehrere gelten gleichzeitig.

## v1.5.0 — Lootbox & Grow-Boosts direkt im Overlay 🎁

### ✨ Neu
- **🎁 Lootbox-Panel** (neuer Dock-Button): Boxen mit **Punkten** oder **Gratis-Boxen** öffnen, Drop-Chancen sehen und den Gewinn direkt ins Token-Inventar bekommen — komplett im Overlay, kein Discord mehr nötig.
- **📈 Grow-Boost** (Token): beschleunigt dein Wachstum **~1 Stunde** lang (+~20 %/h aktiver Spielzeit).
- **⏹️ Grow-Stop** (neuer Token): **stoppt** dein Wachstum **1 Stunde** lang auf einer **selbst gewählten Prozentzahl** — per Schieberegler einstellbar.
- **⚡ Insta-Grow** (Token): setzt dein Wachstum sofort auf 80 %.
- Alle Grow-Token werden im Lootbox-Panel unter **„Deine Grow-Token"** angezeigt und mit einem Klick eingelöst.

### 🛡️ Admin
- Neuer Admin-Tab **🎁 Lootbox**: **Box-Preis** und **Drop-Gewichte** je Token live einstellbar.

## v1.2.4 — Fix: Farbthemen fürs Team 🎨

### 🔧 Fixes
- **Team-Mitglieder** haben jetzt zuverlässig **alle Farbthemen** freigeschaltet (keine Schloss-Symbole mehr), inklusive **🎨 Eigene Farbe** mit Color-Picker — wie es für Obsidian/Team gedacht ist.

## v1.2.3 — Dino-Info & Karte 🦖

### 🧬 Dino-Info
- **Mutationen neu dargestellt** — übersichtlich nach **Basis / Eltern / Elder** gruppiert und tabellarisch mit **deutscher Kurzbeschreibung** je Mutation (was sie bewirkt). Auch im Garage-/Markt-Detail.
- **Prime-Fortschritt** — neuer Fortschrittsbalken (x/5 Bedingungen), klarere Bezeichnungen, „auto"-Markierung für automatische Bedingungen und kleine Zwischenschritt-Hinweise.
- **⚰️ Entomben-Button** — deinen aktuellen Dino direkt aus der Dino-Info entomben (neben „💀 Slay").

### 🔊 Voice
- **Sprecher-Anzeige in Rollenfarbe** — wer gerade in deiner Nähe spricht, wird in seiner **Discord-Rollenfarbe** angezeigt. Spender, Abonnenten und Team sind so auf einen Blick erkennbar.

### 🗺️ Karte
- **Wegpunkt anpassbar** — Farbe & Größe des Wegpunkt-Markers frei einstellbar (Einstellungen → 🗺️ Karten-Marker).
- **Spieler-Pfeil** — eigene Position/Blickrichtung bleibt beim Reinzoomen gut sichtbar; Pfeil-Farbe wählbar.

## v1.2.2 — Performance ⚡

### ⚡ Performance / FPS
- **Deutlich weniger FPS-Verlust im Spiel** — teure Dauer-Effekte (Weichzeichner, animierte Vitalbalken, HP-Herz, drehender Minimap-Ring) laufen jetzt nur noch, wenn das Dock/Panel offen ist. Beim Spielen bleibt das Overlay statisch und GPU-schonend.
- **Neues „⚡ Low-Spec / Performance"-Menü in den Einstellungen** — Master-Schalter „Low-Spec-Modus" plus Einzelschalter für **🌫️ Weichzeichner**, **⚡ Effekte** und **🗺️ Minimap**. Alle Einstellungen bleiben gespeichert.

## v1.1.1 — Bugfix

### 🔧 Fixes
- **🔊 „Wen du gerade hörst"** zeigt jetzt wirklich nur noch die Spieler, die du auch **hören kannst** — Sprecher außerhalb deiner Reichweite (oder wenn du taub bzw. jemanden stummgeschaltet hast) erscheinen nicht mehr.

## v1.1.0 — Großes Feature-Update 🦖

### 🆕 Neue Features
- **🆘 Support direkt im Overlay** — öffne Hilfe- oder „Spieler melden"-Tickets und chatte direkt im Overlay (immer synchron mit Discord). Das Team kann Tickets annehmen, weiterleiten und schließen.
- **🎁 Token-Markt im Overlay** — Token-Auktionen und Direkt-Tausch mit anderen Spielern, geteilt mit dem Discord-Markt.
- **🔎 Gesuche (Want-to-buy)** — suche gezielt nach Dinos/Token und biete Punkte oder Token. Plus **📋 „Meine Angebote"** mit Überblick über alles Eigene. Alle Angebote laufen jetzt 72 Stunden.
- **🦖 Profil: „Dinos auf dem Server"** — die rechte Profilspalte zeigt jetzt live die aktuelle Anzahl jeder Spezies vs. Limit (die Tickets sind in den Support-Bereich gewandert).
- **🗺️ Minimap an/aus** — neuer Schalter in den Einstellungen.
- **🔊 „Wen du gerade hörst"** — die Info-Box zeigt die Namen der Spieler, die du gerade über Voice hörst.

### ⚔️ Balance / Anti-Flucht
- **Einparken, Swap & Teleport** funktionieren nur noch mit vollem Dino (100 % Health, Blut & Stamina, nicht blutend) — damit sie nicht als Flucht aus dem PvP missbraucht werden.
- **Ausparken** braucht jetzt mindestens **50 m** Abstand zum nächsten Spieler.
- **Spezies-Limit** — ist eine Spezies voll, wird sie aus dem Spawn-Picker entfernt. Bestehende Dinos bleiben, niemand wird getötet.

### 🔧 Verbesserungen & Fixes
- Selbst-Slay tötet jetzt **leise** — kein lauter Blitz-Sound mehr.
- Quest-Fix: keine Übernahme von Mutationen/Prime mehr (Dupe behoben).
- Diverse Stabilitäts- und Performance-Verbesserungen.

### 🛠️ Für das Team
- Komplette Staff-Verwaltung jetzt im Overlay (tab-basiert): Dino-Token, PvP-Builds, Prime, Account-Verwaltung, Server-Steuerung & Ansagen.

> ⬆️ Das Update installiert sich beim nächsten Start automatisch.
