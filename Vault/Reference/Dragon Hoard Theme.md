---
description: 2026-11-19 the project's Claude app theme - a top-down tile-mosaic red dragon over the sea that breathes fire on each commit; lives in .claude/skills/dragon-hoard
type: reference
---
# Dragon Hoard theme

A Claude desktop/mobile theme mod, made 2026-11-19 in the style of the built-in Honu Lagoon theme (tile mosaic: square tiles with glyphs like `$ % X : t S`). It lives in `.claude/skills/dragon-hoard/`, and a mod in a project's `.claude/skills/<name>/` loads by itself in every session opened in this project, with no settings entry.

- **Scene** (`hooks/scene.ts`): the red dragon from the dragon sheet, seen from above, gliding over a tiled sea with its shadow on the water; lagoon blue in light mode, night sea in dark. The tiles are generated from shapes (wing polygon, body ellipse, tail curve), so change those numbers to reshape it.
- **Fire on commit** (`hooks/register.tsx`): a successful `git commit` run by Claude's shell tools makes the dragon breathe fire for about 4.5 s. A commit typed in your own terminal doesn't trigger it.
- **Palette**: sand surfaces in light mode, navy in dark; accent dragon red-orange, success emerald, warning gold.
- Check edits with `claude plugin validate .claude/skills/dragon-hoard`.
