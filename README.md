# Prompts Playbook — Playbook 01 (standalone deck)

A self-contained implementation of `Prompts Playbook Deck.dc.html`, imported from the
Claude Design project. The original was built in Claude's proprietary `<x-dc>` canvas
format (depends on `support.js` + `deck-stage.js`). This version reproduces the same
19 slides as a plain HTML presentation with no proprietary runtime — it opens and
presents anywhere.

## Run

Any static server works. From this folder:

```bash
python3 -m http.server 8752
# open http://localhost:8752
```

(Opening `index.html` directly via `file://` also works, though a server is
recommended so the clipboard API and images behave consistently.)

## Controls

| Key / action            | Result                          |
|-------------------------|---------------------------------|
| `→` `Space` `PageDown`  | Next slide                      |
| `←` `PageUp`            | Previous slide                  |
| Click right / left 60%  | Next / previous                 |
| `Home` / `End`          | First / last slide              |
| `C`                     | Table of contents (jump to any) |
| `N`                     | Toggle speaker notes            |
| `F`                     | Fullscreen (Esc to exit)        |
| **Copy** button         | Copies that prompt to clipboard |

The 1920×1080 stage scales proportionally to any viewport and preserves 16:9.
Deep-link to a slide with a hash, e.g. `index.html#09`.

## Files

- `index.html` — shell, styles, HUD, TOC, notes overlay
- `deck.js` — all 19 slides (content faithfully reproduced from the source) + runtime
- `assets/cover.png` — cover collage
- `assets/qr-code.png` — Instagram QR (slide 03)

## Image substitutions

Two source images exceeded the design API's 256 KB transfer cap and could not be
retrieved intact, so they were replaced with on-brand equivalents:

- **Slide 03 — Bezalel logo** → a typographic `BEZALEL` wordmark.
- **Slide 16 — material reference photo** → a generated material-swatch grid
  (natural stone / timber tones), which fits the slide's "study pattern & texture
  layering" message.

To restore the originals, drop the real files into `assets/` and swap the
corresponding markup in `deck.js` (search for `BEZALEL` and `moodboard`).

## Content note

Prompt text is preserved verbatim from the source deck (the `data-prompt` value each
Copy button carries is the full, unabbreviated prompt; the on-card text is the
source's shortened display version where the two differed). Speaker notes are carried
over from the source `data-speaker-notes` attributes. This is course material for
personal use — not for redistribution.
