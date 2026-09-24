# Ferrosaur Overlay

A free, open-source desktop overlay for **The Isle: Evrima**, used by the Ferrosaur community server.

**Basiert auf dem Overlay von Hideki Sensei (github.com/HidekiSensei), angepasst von Ferrosaur.**

## Features

- 🎙️ **Proximity voice chat** — talk to nearby players, volume scales with in-game distance (self-hosted LiveKit)
- 🗺️ **Map** — large map with PVP/PVE zones, your position, and waypoints
- 📍 **Minimap** — always-on-top minimap with a live zone indicator
- 🔥 **Heatmap** — toggle an activity heatmap on the big map
- ⌨️ **Global hotkeys** — connect/disconnect, mic, settings, map

## Project structure

- `app/` — the Electron overlay application (this is what players install)

> Der frühere `token-service/` (Node: Discord-Login → LiveKit-Token + Positions-Relay) wurde
> vollständig durch das Go-Backend (`ferrosaur-backend`, `config.tokenBase`) ersetzt und entfernt.

## Tech

Electron · LiveKit · Node.js · esbuild

## License

[MIT](LICENSE) — free and open source. This software is **not** distributed commercially.

Copyright (c) 2026 BlackFossil (original author: Hideki Sensei). The unchanged license text with the copyright notice is included in every distributed build (`LICENSE` in the installed app's `resources` folder, and under Settings → Software in the app).

## Downloads

Windows installers are published under [Releases](https://github.com/FERROSAUR445/ferrosaur-overlay/releases).
