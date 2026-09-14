// Patcht die Test-Defaults, die im Repo eingecheckt sind, auf Produktiv-Werte —
// wird von .github/workflows/release.yml (main-Branch) vor dem Build aufgerufen,
// je einmal im Windows- und im Linux-Job. dev-build.yml ruft das NICHT auf, damit
// Test-Installer (andere appId/productName/API-URL) parallel zum Produktiv-Build
// installierbar bleiben.
'use strict';
const fs = require('fs');

function patch(path, replacements) {
  let s = fs.readFileSync(path, 'utf8');
  for (const [from, to] of replacements) {
    if (!s.includes(from)) throw new Error(`${path}: Pattern nicht gefunden: ${from}`);
    s = s.split(from).join(to);
  }
  fs.writeFileSync(path, s);
}

patch('app/src/main.js', [
  ['https://api-test.ferrosaur.de', 'https://api.ferrosaur.de'],
  ["'Ferrosaur Overlay Test'", "'Ferrosaur Overlay'"],
  ["'Ferrosaur Login Test'", "'Ferrosaur Login'"],
  // Deep-Link-Scheme: Test-Build registriert ferrosaur-test, Prod ferrosaur (nur die
  // Konstante — der quotierte Vergleich trifft NICHT den Kommentar-Text "ferrosaur-test://").
  ["const SCHEME = 'ferrosaur-test'", "const SCHEME = 'ferrosaur'"],
]);

patch('app/package.json', [
  ['"de.ferrosaur.overlay.test"', '"de.ferrosaur.overlay"'],
  ['"Ferrosaur Overlay Test"', '"Ferrosaur Overlay"'],
  ['"Ferrosaur-Overlay-Test-Setup.${ext}"', '"Ferrosaur-Overlay-Setup.${ext}"'],
  // protocols.schemes — quotiert, trifft nur die Scheme-Zeile, nicht die appId
  // (de.ferrosaur.overlay.test enthält "ferrosaur-test" nicht als Teilstring).
  ['"ferrosaur-test"', '"ferrosaur"'],
  // Linux-Binary + .desktop-Eintrag. Ohne eigenen Namen leitet electron-builder ihn
  // aus package.json.name ab — Test und Prod hießen dann beide "ferrosaur-overlay"
  // und überschrieben sich unter Linux gegenseitig den Desktop-Eintrag (unter Windows
  // trennt NSIS sie über appId/productName, deshalb fiel es dort nie auf).
  // Der Prod-Wert bleibt "ferrosaur-overlay" — bestehende Installationen ändern sich
  // nicht. Steht bewusst NACH dem "ferrosaur-test"-Replace: das greift hier nicht,
  // weil vor "test" ein Bindestrich statt eines Quotes steht.
  ['"executableName": "ferrosaur-overlay-test"', '"executableName": "ferrosaur-overlay"'],
]);

// ── Companion-App ───────────────────────────────────────────────────────────
// Zweite App, gleiche Logik: im Repo stehen Test-Defaults, hier werden sie auf
// Produktiv gedreht. Overlay und Companion bleiben dabei in BEIDEN Varianten
// parallel installierbar (vier verschiedene appIds insgesamt).
patch('app/src/companion-main.js', [
  ['https://api-test.ferrosaur.de', 'https://api.ferrosaur.de'],
  ["'Ferrosaur Companion Test'", "'Ferrosaur Companion'"],
  // Nur die Konstante treffen, nicht die Kommentare, die den Scheme erwähnen.
  ["const SCHEME = 'ferrosaur-companion-test'", "const SCHEME = 'ferrosaur-companion'"],
]);

patch('app/electron-builder.companion.yml', [
  ['de.ferrosaur.companion.test', 'de.ferrosaur.companion'],
  ['Ferrosaur Companion Test', 'Ferrosaur Companion'],
  ['Ferrosaur-Companion-Test-Setup.${ext}', 'Ferrosaur-Companion-Setup.${ext}'],
  // Reihenfolge zählt: der Scheme-Eintrag steht in einer eigenen Zeile und würde
  // sonst schon vom appId-Replace oben mit erwischt werden — deshalb ist das
  // Pattern hier der volle Scheme-String inkl. Listen-Präfix.
  ['- ferrosaur-companion-test', '- ferrosaur-companion'],
  ['executableName: ferrosaur-companion-test', 'executableName: ferrosaur-companion'],
]);

console.log('Produktiv-Werte gesetzt für Overlay UND Companion (appId, productName, artifactName, Scheme, API-URL).');
