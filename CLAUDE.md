# Prompts Playbook — Social Media Managers

Standalone HTML/JS slide deck teaching a 10-prompt strategic workflow for AI-assisted
social media content creation (audience research → tension → insight → message → hooks).
Hebrew-first (RTL), with English toggles on every prompt slide. Built by Eduardo Mitelman
(@neoverseboy) as personal course material — not for redistribution.

**Read this file first.** It exists so you don't have to re-read `deck.js` (a single
~900-line file) or re-derive project structure from scratch every session.

## Live site & repo

- Live: https://stratigo-cmyk.github.io/prompts-playbook-social-media/
- Remote: `origin` → `github.com/stratigo-cmyk/prompts-playbook-social-media.git`, branch `main`
- **Push to `main` = deploy.** GitHub Pages serves directly from `main`. There is no
  build step, no CI, no staging — a push goes live within ~1-2 minutes.
- ⚠️ This folder is its own git repo, nested inside the parent `prompts-playbooks/`
  folder which is *also* a separate git repo. Always confirm `git remote -v` and
  `pwd` before committing — it's easy to be in the wrong repo.
- Multiple sessions/agents have worked on this repo independently. **Always
  `git fetch origin` and diff against `origin/main` before pushing** — a prior
  session may have already made an equivalent (or conflicting) fix. If your local
  commit turns out to be redundant with what's already on `origin/main`, prefer
  `git reset --hard origin/main` over force-pushing over someone else's work.

## Stack

Zero dependencies, zero build step. Plain HTML + CSS + vanilla JS.

- `index.html` — page shell: CSS (custom properties for the whole visual system), HUD
  (progress bar, nav controls, counter), table-of-contents overlay, notes overlay,
  copy-toast. Loads Google Fonts (Heebo + IBM Plex Mono) and `deck.js`.
- `deck.js` — **everything else**: prompt content, all slide markup, and the runtime
  (slide rendering, navigation, keyboard shortcuts, clipboard copy, TOC, notes, fullscreen).
- No `package.json`, no npm, no bundler. Run locally with any static server:
  ```bash
  python3 -m http.server 8752
  # open http://localhost:8752
  ```
  (`file://` also works but the Clipboard API behaves more reliably over `http://`.)

## `deck.js` structure (top to bottom)

1. `INSTAGRAM_URL` — the one piece of contact info reused across slides.
2. `ENGLISH_PROMPTS` — array of `{id, title, prompt}` for prompts 1-10, English, used
   by the per-slide English toggle buttons.
3. `promptCard()` / `promptCardWithEnglish()` — HTML-generating helpers for the
   two-button (Hebrew copy + English copy) prompt cards used on prompt slides.
4. `FULL_PROMPTS_HE` — array of `{id, title, prompt}`, the **fuller** Hebrew prompt
   text (see "Two versions of every prompt" below).
5. `buildFullPromptsText()`, `ALL_PROMPTS_HE_TEXT`, `ALL_PROMPTS_EN_TEXT` — builds the
   single blob of text (all 10 prompts concatenated with headers) that the closing
   slide's two "copy everything" buttons put on the clipboard.
6. `SLIDES` — the array of all slides, in display order. Each entry:
   `{ label, screen, notes, html }`. `label` is TOC/notes display text, `screen` is
   the zero-padded page-number string shown in the counter and TOC badge.
7. IIFE at the bottom — renders `SLIDES` into `#stage-wrap`, builds the TOC, wires up
   keyboard nav, click-to-advance, fullscreen, notes toggle, and the clipboard-copy
   click delegation (all copy buttons are handled via one `click` listener on `wrap`,
   matched by CSS class — see "Adding a new copy button" below).

## ⚠️ Critical invariant: `screen` numbers must match array position

`SLIDES[index].screen` is display-only text (a string) — nothing enforces it matches
`index + 1`. **If you reorder slides, you must manually renumber every `screen` field
after the reordered slide so the sequence stays `"01", "02", ... "NN"` matching
physical array order.** This has broken twice already: moving a slide without
renumbering caused the counter to jump backward (e.g. show `19/19` then `13/19`) on
navigation, which read as a missing/broken slide. Verify with:
```bash
grep -n 'screen: "' deck.js
```
and check the sequence is strictly increasing with no gaps/dupes, ending at `SLIDES.length`.

## Current slide order (20 slides)

| # | Label | Notes |
|---|-------|-------|
| 01 | Cover | Hebrew title + English "Prompts for Social" + cover image |
| 02 | Contents | 4-section overview |
| 03 | About the Instructor | Bio + Instagram QR |
| 04 | Platforms | 9-tool grid (Higgsfield highlighted red) |
| 05 | לפני שמתחילים לכתוב | Strategic-foundation intro copy |
| 06 | Section 1 — Audience | Divider |
| 07 | Prompt 1 — קהל | Strategic Audience Researcher |
| 08 | Prompt 2 — מצב קהל | Audience Situation Mapper |
| 09 | Section 2 — Tension | Divider |
| 10 | Prompt 3 — מתחים | Audience Tension Mapper |
| 11 | Prompt 4 — חסמים | Barrier and Belief Analyzer |
| 12 | Section 3 — Insight | Divider |
| 13 | Prompt 5 — תובנות | Strategic Insight Synthesizer |
| 14 | Prompt 6 — פערים | Category Gap Finder |
| 15 | Section 4 — Message & Hooks | Divider |
| 16 | Prompt 7 — מסר | Message Architect |
| 17 | Prompt 8 — מיצוב | Brand Positioning Specialist |
| 18 | Prompt 9 — הוקים | Smart Hook Generator |
| 19 | Prompt 10 — ביקורת | Hook Critic and Clickbait Filter |
| 20 | כל הפרומפטים | Closing slide, two "copy all 10 prompts" buttons |

Logical flow per prompt pair: Section divider → 1-2 prompt slides that execute that
stage of the strategy (audience → tension → insight → message/hooks). Prompt 5
(Insight) belongs *before* Prompt 6 (Category Gap) — this was a real bug fixed twice,
don't move it again without checking the strategic sequence in `README`-adjacent docs
(`10_prompts_hebrew.md`) makes sense.

## Two versions of every prompt — know which one to use

There are **two levels of completeness** for the same 10 prompts. Pick correctly:

- **On-slide versions** (embedded directly in each `SLIDES[i].html` via
  `promptCardWithEnglish()`) — trimmed/condensed for on-screen readability. Some
  sections are shortened or dropped entirely (e.g. Hebrew Prompt 1 on-slide is missing
  the "הפרד בין:" section that the source file has).
- **Canonical/full versions** — `10_prompts_hebrew.md` and `10_prompts_english.md` at
  the repo root. These are the source of truth for prompt content. `FULL_PROMPTS_HE`
  and `ENGLISH_PROMPTS` in `deck.js` are hand-transcribed from these files and feed
  the closing slide's "copy all 10 prompts" buttons — **not** the trimmed per-slide text.

If asked to update prompt wording, update **both**: the source `.md` file and whichever
JS representation(s) derive from it (on-slide inline text, and/or `FULL_PROMPTS_HE`/`ENGLISH_PROMPTS`).

## Design system (from `index.html` `:root`)

```
--paper:      #F3EEE4   light background
--ink:        #191714   dark background / primary text on paper
--accent:     #E8385A   red — used for eyebrows, dividers, hover states, CTA emphasis
--accent-dark:#c72d4c
--muted:      #6b6459
--muted-2:    #8a8276
--card:       #ffffff
Stage:        1920×1080, scales to fit viewport, always 16:9
Fonts:        Heebo (UI/body), IBM Plex Mono (`.mono` — labels, counters, buttons)
```

Recurring slide patterns: dark (`--ink`) background = section dividers / cover-adjacent
"statement" slides; light (`--paper`) background = content/prompt slides. Every content
slide has an "eyebrow" row (short red tick mark + uppercase label) near the top-left/right.
Buttons are always pill-shaped (`border-radius:100px` or `24px`+), dark fill, cream text,
red on hover, green (`#2f8f5b` / `.copied` class) briefly on successful copy.

## Adding a new copy-to-clipboard button

The click handler lives in the IIFE at the bottom of `deck.js`, inside
`wrap.addEventListener("click", (e) => {...})`. It's a chain of
`e.target.closest(".your-class")` checks — each one reads a `data-*` attribute off the
button, calls `navigator.clipboard.writeText()`, and falls back to a hidden-textarea +
`document.execCommand("copy")` on failure (`fallbackCopy()`, defined right after). To
add a new copy button: give it a unique class, add a new `if (closest(...))` block
following the existing pattern, and remember buttons are excluded from the
next/prev-slide click-to-advance handler automatically (it skips
`e.target.closest("a,button,.copy-btn")` — any real `<button>` element is covered).

**Testing clipboard copy in a headless/sandboxed browser preview:** `document.hasFocus()`
is often `false` in embedded preview iframes, which makes both
`navigator.clipboard.writeText()` and `execCommand("copy")` fail silently or reject with
`NotAllowedError`, even though the same click works fine for a real user. Don't conclude
a copy button is broken from a preview screenshot alone — verify the underlying handler
logic fired (e.g. via `btn.click()` + inspecting `btn.textContent`/dataset in a JS eval)
before treating it as a bug.

## Known stale content (not yet cleaned up)

- **`README.md` is outdated** — it describes an earlier version of this deck (an
  architecture/interior/material-prompting course, 19 slides, "Bezalel logo" and
  "moodboard" slide references) that no longer matches the current content
  (social-media strategy prompts). Don't trust it for current slide structure; this
  `CLAUDE.md` supersedes it. Worth rewriting or deleting next time README changes are in scope.
- **`index.html` `<meta name="description">`** (line 7) still says "architecture,
  interior, landscape and material prompting" — same stale-content issue as README.
- **`assets/moodboard.png`, `assets/cover-generic.jpg`** — appear unreferenced by the
  current `deck.js`; likely leftovers from the older deck version above.
- **`assets/qr-code.png`, `assets/cover.png`** — actively used (slides 01, 03).
- `english_prompts_slide_toggle.md`, `llm_edits.md`, `prompts_playbook_update_prompt_he.md`,
  `HANDOFF.md`, `prompts/prompts.pdf` — historical working docs / handoff notes from past
  sessions, not live source of truth. Useful for archaeology, not for current state.
- No `.gitignore` in this folder (the parent `prompts-playbooks/` has one, but it
  doesn't apply here) — `.DS_Store` shows up as untracked; don't accidentally `git add -A` it.

## Working conventions for this repo

- Ask before pushing to `origin/main` — it's a live, public deploy with no staging.
- Prefer small, single-purpose commits with a clear "why" in the message (see `git log`
  for the established style — plain-English summary + occasional bullet list of changes).
- When fixing a display/counter bug, actually load the page (local static server or the
  browser preview tool) and click through — don't assume from reading the array.
