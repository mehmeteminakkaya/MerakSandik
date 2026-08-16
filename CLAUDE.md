# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Meraksandık" — a single-page Turkish-language app that picks a random topic (concept/law/effect/bias) from a chosen category, then gives the user a timed research window to look it up from real sources. Completed topics are logged to a local catalog history.

It is self-contained: no accounts, no API keys, no backend, no data leaving the browser. Everything the app knows ships in `app.js`; everything the user produces stays in `localStorage`/`sessionStorage`. The one outbound request is the Google Fonts stylesheet in `index.html` — the app is fully functional without it (the font stacks fall back), and self-hosting those four families is the obvious move if true zero-network is ever wanted. **There was an LLM topic-generation feature; it was removed deliberately** — the hand-curated pools proved better than the generated ones, and the feature dragged in an API key, a serverless proxy and a host requirement for no real gain. Do not reintroduce it.

## Running the app

The frontend (`index.html`/`app.js`/`styles.css`) has no build step, no package manager, no dependencies — plain HTML/CSS/JS served statically:

```
python -m http.server 5173
```

(This matches `.claude/launch.json`, which VS Code/editors can use to launch a "static-server" config.) Then open `http://localhost:5173`. Opening `index.html` directly via `file://` mostly works too, except some browser security contexts behave better over `http://localhost`.

There are no exceptions and no `api/` directory: every path the app uses is a static file, so any static host works and `python -m http.server` exercises the whole app.

There is no lint, test, or build command in this repo — there is no `package.json`.

## Architecture

Three files, no framework:

- `index.html` — static shell: topbar (profile button, settings button), an empty `#stage` element that all screen content is rendered into, and the settings + profile modal markup.
- `app.js` — all state, logic, and rendering.
- `styles.css` — all styling.

### Visual design ("kütüphane fiş kataloğu")

Dark warm-walnut library theme. Tokens live in `:root` in `styles.css`: `--bg`/`--surface`/`--surface-raised` for grounds, `--accent` (antique brass) for primary actions and the active tab, `--stamp-red` for the `ARAŞTIRILDI` stamp, plus a per-category book-binding colour set (`--cat-*`). Type is Playfair Display (`--font-serif`, concept headlines) + Plus Jakarta Sans (`--font-sans`, UI) + Courier Prime/JetBrains Mono (`--font-type`/`--font-mono`, labels, call numbers, countdown).

Two rules worth keeping when editing:

- **`.wheel-viewport`'s height must be an ODD multiple of `--wheel-item`** — otherwise the centered `.wheel-guide` lands on a boundary between two rows instead of framing one. `spin()` measures the real row height off the first `<li>` rather than hardcoding it, so changing `--wheel-item` (it drops to 52px under 540px) needs no JS change.
- **Every user-supplied string that goes into a render template must go through `esc()`** — in practice the research notes, which are persisted to `localStorage` and re-rendered on later visits. The renderers build HTML strings and assign them via `innerHTML`, so an unescaped note is a stored-XSS hole, not just a display glitch.
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — PWA install support (installable, `sw.js` caches the static shell network-first — always tries the network so returning users get the latest deploy, only falling back to cache when offline; it skips cross-origin requests, registered from `app.js` behind a `"serviceWorker" in navigator` check). **Bump `CACHE_NAME` in `sw.js` on any deploy that changes cached files** (`index.html`/`app.js`/`styles.css`/icons) — that's what triggers `activate`'s cleanup of the old cache; skipping it isn't fatal (network-first self-heals) but leaves a stale cache entry lingering until the next real bump.

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

`CATEGORIES` defines the selectable domains (Genel, Teknoloji, Bilim, Reklam, Hukuk, Felsefe, Tarih, Psikoloji, …), each with a hand-drawn line-icon (inline SVG path string). The tab strip on the idle screen (`renderCategoryTabs`) lets the user pick one; every category works unconditionally.

### Settings & persistence

Settings (research duration, sound, selected category) live in one object persisted to `localStorage` under key `offscript-settings-v1` (`loadSettings`/`saveSettings`). `loadSettings()` also strips the legacy `provider`/`apiKeys`/`models` fields left by older versions and rewrites the entry, so no stale API key survives in a returning user's browser — keep that migration until it is safe to assume every install has run it. Settings UI is a modal (`#settingsModal`) with its own two-way bindings, separate from the phase-driven `render()` cycle.

In-progress sessions (current phase/topic/timer) are persisted to `sessionStorage` under `offscript-session-v1` (`persistSession`/`restoreSession`) so a page reload resumes where it left off.

Completed research topics are appended to `localStorage` under `offscript-history-v1` (`loadHistory`/`saveHistory`/`addToHistory`) and shown in the "Kataloğun" modal (`#profileModal`, populated by `syncProfileUI`/`renderStats`/`renderFilterChips`/`renderHistoryList`, with search + category filtering), with a "Kataloğu Boşalt" reset and a "Dışa aktar" button that generates a markdown file client-side (`historyToMarkdown`) via a Blob + temporary `<a download>`.

`dueForReview()` looks at the most recent history entry per unique topic and, if ≥7 days old (`REVIEW_AFTER_MS`), surfaces it as a "Tekrar Vakti" banner on the idle screen (`renderRecall`) — accepting it jumps straight to the `landed` phase with that topic, skipping the wheel. Dismissal is in-memory only (`dismissedReview`), not persisted.
