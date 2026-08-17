# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Meraksandık" — a single-page Turkish-language app that picks a random topic (concept/law/effect/bias) from a chosen category, then gives the user a timed research window to look it up from real sources. Completed topics are logged to a local catalog history.

It is self-contained: no accounts, no API keys, no backend, no data leaving the browser. Everything the app knows ships in `app.js`; everything the user produces stays in `localStorage`/`sessionStorage`. The one outbound request is the Google Fonts stylesheet in `index.html` — the app is fully functional without it (the font stacks fall back), and self-hosting those three families is the obvious move if true zero-network is ever wanted. **There was an LLM topic-generation feature; it was removed deliberately** — the hand-curated pools proved better than the generated ones, and the feature dragged in an API key, a serverless proxy and a host requirement for no real gain. Do not reintroduce it.

## Running the app

The frontend (`index.html`/`app.js`/`styles.css`) has no build step, no package manager, no dependencies — plain HTML/CSS/JS served statically:

```
python -m http.server 5173
```

(This matches `.claude/launch.json`, which VS Code/editors can use to launch a "static-server" config.) Then open `http://localhost:5173`. Opening `index.html` directly via `file://` mostly works too, except some browser security contexts behave better over `http://localhost`.

There are no exceptions and no `api/` directory: every path the app uses is a static file, so any static host works and `python -m http.server` exercises the whole app.

There is no lint, test, or build command in this repo — there is no `package.json`.

## Architecture

Three code files, no framework, plus a handful of static media assets:

- `index.html` — static shell: topbar (profile button, settings button), the hanging lamp pull-chain (`#lampPullChain`, sits outside the topbar), a `.library-backdrop` layer, an empty `#stage` element that all screen content is rendered into, and the settings + profile modal markup.
- `app.js` — all state, logic, rendering, the `SoundEffects` audio engine, and the pull-chain physics sim.
- `styles.css` — all styling, including the three palette/theme variants and the pull-chain/cat/lamp visual layers.
- `logo.jpg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — app branding/icons (all four are currently the same curiosity-chest image file, just referenced under different names).
- `library-bg.jpg` / `library-bg-light.jpg` — full-bleed backdrop photos behind `.library-backdrop`, swapped by `[data-theme="light"]`.
- `meow.mp3` / `purr.mp3` / `fireplace.mp3` / `rain.mp3` / `ocean.mp3` — real Pixabay-licensed recordings (Pixabay Content License, free commercial/personal use, no attribution required) loaded via `new Audio(...)`. These replaced an earlier all-synthesized version (procedural oscillator meow/purr, filtered-noise rain/fire) after user feedback that the synthesis sounded fake — see `SoundEffects.init()` (`app.js:237`) for what's actually wired. `fireplace.mp3` was itself swapped once already (an initial "Fierce Crackling Fire" pick sounded too aggressive; replaced with a calmer "Sound of a Fantastic, Warm Fireplace" track) — expect ambience track picks to keep getting refined by ear, they're a taste call, not a correctness one. `rain.mp3`/`ocean.mp3` are multi-minute loops (~5.5MB/~4MB) chosen over shorter clips so the loop seam is inaudible during a research session, and are deliberately **not** in `sw.js`'s `PRECACHE_URLS` — they cache opportunistically on first play instead of bloating the install. Short UI blips (tick, land, chime, chain click, coffee, rustle, wax stamp) are still synthesized live with the Web Audio API — no reason to sample those.

### Visual design ("kütüphane fiş kataloğu")

Warm-walnut library theme, dark by default. Tokens live in `:root` in `styles.css`: `--bg`/`--surface`/`--surface-raised` for grounds, `--accent` (antique brass) for primary actions and the active tab, `--stamp-red` for the `ARAŞTIRILDI` stamp, plus a per-category book-binding colour set (`--cat-*`) and a `--cat-color` used by the cat SVG. Type is Lora (`--font-serif`, concept headlines) + Plus Jakarta Sans (`--font-sans`/`--font-type`, UI and labels) + JetBrains Mono (`--font-mono`, call numbers, countdown) — three Google Fonts families loaded from `index.html`.

Two independent axes control appearance, both persisted in `settings` and applied via `<html>` attributes:

- **Theme** (`data-theme`: `dark`/`light`) — set by `applyTheme()`. Toggled from the settings-modal segmented buttons (`#themeBtnDark`/`#themeBtnLight`) **or** by pulling/tapping the physically-simulated lamp chain (see below) — two independent controls calling the same function, keep both wired if you touch either.
- **Palette** (`data-palette`: `coffee`/`library`/`matcha`) — set by `applyPalette()` from the settings-modal palette swatches (`.palette-btn[data-palette]`). Each palette has its own dark *and* light CSS block in `styles.css` (e.g. `[data-palette="library"]` and `[data-theme="light"][data-palette="library"]`), so a new palette needs both.

Two rules worth keeping when editing:

- **`.wheel-viewport`'s height must be an ODD multiple of `--wheel-item`** — otherwise the centered `.wheel-guide` lands on a boundary between two rows instead of framing one. `spin()` measures the real row height off the first `<li>` rather than hardcoding it, so changing `--wheel-item` (it drops to 52px under 540px) needs no JS change.
- **Every user-supplied string that goes into a render template must go through `esc()`** — in practice the research notes, which are persisted to `localStorage` and re-rendered on later visits. The renderers build HTML strings and assign them via `innerHTML`, so an unescaped note is a stored-XSS hole, not just a display glitch.
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — PWA install support (installable, `sw.js` caches the static shell network-first — always tries the network so returning users get the latest deploy, only falling back to cache when offline; it skips cross-origin requests, registered from `app.js` behind a `"serviceWorker" in navigator` check). **Bump `CACHE_NAME` in `sw.js` on any deploy that changes cached files** (`index.html`/`app.js`/`styles.css`/icons) — that's what triggers `activate`'s cleanup of the old cache; skipping it isn't fatal (network-first self-heals) but leaves a stale cache entry lingering until the next real bump.

### Atmosphere layer (lamp chain, cat, ambient audio)

Layered on top of the state machine, decorative but stateful:

- **Hanging lamp pull-chain** (`setupHangingLampChain()`, `app.js:2335`) — a from-scratch Verlet-physics rope sim (9 pinned nodes, SVG `viewBox 0 0 100 240`) rendered into `#chainPhysicsSvg`/`#chainBeadsGroup`. Dragging and releasing the chain (or a quick tap) calls `triggerThemeSwitch()`, which just calls `applyTheme()` — the physics are purely cosmetic, theme state doesn't depend on chain position surviving a reload.
- **Sandık Kedisi (the cat)** — an inline SVG (`renderCozyDecorations()`, `app.js:1688`) with a CSS breathing-belly loop, drawn with a knit nightcap automatically between 22:00–06:00 local time (`new Date().getHours()` check, re-evaluated on every render — not persisted). Clicking/tapping it (`#cozyCatBtn` handler in `bindStageEvents()`, `app.js:1990`) has a **mood**: `playCatInteraction(mood)` defaults to `"happy"` (65% `playMeow()` — randomly one of `meowAudio`/`meowSweetAudio` — else `playPurr()`), but 3+ clicks within `RAPID_PET_WINDOW_MS` (1000ms, tracked via module-level `lastCatPetTime`/`rapidPetStreak`) flips it to `"annoyed"` and plays `playGrowl()` instead, resetting the streak so it doesn't growl on every click after. Not persisted — resets on reload.
- **Ambient audio** (`SoundEffects` class, `app.js:216`) — one `AudioContext` shared for the short synthesized blips (`playTick()`/`playLand()`/`playChime()`/`playChainClick()`/etc). `setAmbience("rain"|"fire"|"ocean"|"none")` instead plays/pauses a real looping `<audio>` element (`rainAudio`/`fireAudio`/`oceanAudio`, all `loop = true`) with a ~600ms manual volume ramp (`fadeAmbienceVolume()`) up to 0.55 so it doesn't pop in; switching type pauses whichever track was playing first. `isAmbiencePlaying()` checks all three elements' `.paused` state — use it (not a stale flag) anywhere that needs to know if ambience is actually running. `#ambientSoundBtn` in the topbar cycles through a hardcoded `["none", "rain", "fire", "ocean"]` sequence (`app.js:2081`) — adding a fourth ambience type means extending that array, the `syncAmbientButton()` icon/title map, and the toast `msgs` map together. Persisted as `settings.ambience`.
- **Lamp focus mode** (`applyLampFocus()`) — toggles a `focus-lamp-on` body class (spotlight vignette) and an `is-lit` class on the chain; persisted as `settings.lampFocus`.

None of this is required reading to change the research flow itself, but touching `styles.css` theme/palette blocks or `SoundEffects` without knowing this layer exists is how regressions happen — grep for the relevant class/id before assuming a chunk of CSS or a canvas/SVG element is dead.

### State machine

`app.js` drives everything off a single `state` object and a `phase` field with these values, in order: `idle → landed → researching → done`.

- `idle`: topic wheel with a category chip row above it; user hits "Çevir" (spin) to land on a random topic from the active category's pool.
- `landed`: topic is chosen; user starts the research timer.
- `researching`: countdown timer running, with an optional notes textarea; using AI to look the topic up is discouraged by the UX copy but not technically enforced. Can be finished early.
- `done`: research is logged to history (`addToHistory`) and a simple completion card is shown, with a button back to `idle`.

There's no router/framework: `render()` is a manual switch on `state.phase` that regenerates `stage.innerHTML` from one of the `renderIdle/renderLanded/renderResearching/renderDone` functions, each returning an HTML template string. Because `innerHTML` is replaced wholesale on every render, `bindStageEvents()` must be called after every render to rewire event listeners on the newly-created DOM nodes — when adding new interactive elements to a `renderX()` function, always wire their listeners in `bindStageEvents()`, not inline.

### Topics & categories

`TOPICS` is a hard-coded bilingual (`tr`/`en`) array of 103 named concepts (cognitive biases, laws, historical events, etc.) — intentionally definition-free so the user has to research it themselves. It is the "Genel" drawer.

`CATEGORY_TOPICS` maps each category id to its own hand-curated pool: `general` aliases `TOPICS`, and the other twelve hold 30 concepts each (463 total). `currentTopicPool(category)` is a one-liner over this map, and `pickTopic()`, `spin()` and `renderIdle()` all go through it. **When adding topics, keep them real and named** — a concept someone can actually look up ("Gresham Yasası"), never a bare noun ("ekonomi") — and give both the Turkish and the original/English name.

`pickTopic()` prefers topics absent from the history, falling back to the whole pool once the drawer is exhausted; that is why pool depth matters. Thirty per drawer is the current floor — below roughly that, repeats start showing up within a couple of weeks of daily use.

`CATEGORIES` defines the 13 selectable domains (Genel, Teknoloji, Bilim, Felsefe, Psikoloji, Tarih, Ekonomi, Pazarlama & Reklam, Sanat, Hukuk, Astronomi, Matematik, Sağlık & Biyoloji), each with a hand-drawn line-icon (inline SVG path string) and a matching key in `CATEGORY_TOPICS`. The tab strip on the idle screen (`renderCategoryTabs`) lets the user pick one; every category works unconditionally. Adding a category means updating both arrays together — `CATEGORIES` without a matching `CATEGORY_TOPICS` entry breaks `currentTopicPool()`.

### Settings & persistence

Settings live in one object persisted to `localStorage` under key `offscript-settings-v1` (`loadSettings`/`saveSettings`), shape: `{ researchMinutes, sound, theme, palette, category, ambience, lampFocus }`. `loadSettings()` also strips legacy fields left by removed features (`provider`/`apiKeys`/`models` from the old AI layer, `waxColor` from a since-removed wax-seal colour picker) and rewrites the entry, so no stale value survives in a returning user's browser — keep that migration until it is safe to assume every install has run it, and add to it (don't replace it) the next time a settings field gets retired. Settings UI is a modal (`#settingsModal`) with its own two-way bindings, separate from the phase-driven `render()` cycle.

In-progress sessions (current phase/topic/timer) are persisted to `sessionStorage` under `offscript-session-v1` (`persistSession`/`restoreSession`) so a page reload resumes where it left off.

Completed research topics are appended to `localStorage` under `offscript-history-v1` (`loadHistory`/`saveHistory`/`addToHistory`) and shown in the "Kataloğun" modal (`#profileModal`, populated by `syncProfileUI`/`renderStats`/`renderFilterChips`/`renderHistoryList`, with search + category filtering), with a "Kataloğu Boşalt" reset and a "Dışa aktar" button that generates a markdown file client-side (`historyToMarkdown`) via a Blob + temporary `<a download>`. `computeStats()` also derives a daily-streak count and `getRankInfo()` maps total completions to a title/badge (🧭 → 🌱 → ✨ → ☕ → 💎) shown in the profile modal — purely derived from `history` length/dates, nothing extra to persist.

`dueForReview()` looks at the most recent history entry per unique topic and, if ≥7 days old (`REVIEW_AFTER_MS`), surfaces it as a "Tekrar Vakti" banner on the idle screen (`renderRecall`) — accepting it jumps straight to the `landed` phase with that topic, skipping the wheel. Dismissal is in-memory only (`dismissedReview`), not persisted.
