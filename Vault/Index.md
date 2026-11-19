---
description: Entry point to the Steal Treasure from Dragons knowledge vault. Claude reads this at the start of every task.
---
# Steal Treasure from Dragons Vault

What Claude has learned while working on the game: preferences, references, gotchas and decisions. Keep this page short; detail lives in the linked notes.

## How Claude uses this vault
- Read this page before starting a task, then open the notes relevant to it.
- When you learn a preference, gotcha or decision, write a note in the right folder (or `Inbox/` if unsure), add it below, and tell the user.
- One idea per note. Frontmatter carries a one-line `description` and a `type`. Link related notes with `[[Note Name]]`.
- Update an existing note rather than adding a duplicate. Delete notes that turn out to be wrong.
- Images live in `Attachments/`. Every image is embedded in a note that says what to take from it.
- Keep [[To Do]] current: remove items once done and checked in code, add new ones when the user approves work.
- Procedures belong in skills (`.claude/skills/`), not here: `roblox-gui`, `roblox-input`, `roblox-monetization`, `roblox-studio-mcp`, `studio-playtest`, `vfx`.

## Project
- [[Steal Treasure from Dragons]] — what the game is, repos, design source of truth
- [[To Do]] — running task list

## Preferences
- [[Code Output Rules]] — no comments, no scope creep, propose-and-wait on player-facing changes
- [[Only Surface Blocking Opens]] — on status questions, name only items that gate current work
- [[Stage Only Own Files]] — parallel sessions; `git add` by explicit path
- [[User Playtests Changes]] — run check.ps1 and hand over what to look for; playtest only when asked
- [[Ask The User To Look]] — ask the user to watch something in Studio instead of long screenshot loops
- [[Always Restore Camera Type]] — test scripts that set the camera Scriptable put it back to Custom
- [[UI Built In Studio]] — ScreenGuis authored in Studio, driven by UIController screens
- [[UI Text Style]] — colored stroke + gradient fill; black/white only when asked
- [[No All Caps In UI]] — "Rebirth", never "REBIRTH"
- [[High Saturation Colors]] — max-saturation by default
- [[Literal Black And Grey]] — "black"/"grey" mean neutral black and grey
- [[Drop In Assets Over Ids In Code]] — asset lists read a Studio folder, not ids in config
- [[Textured Attack Telegraphs]] — attack warnings use textures, never coloured Parts
- [[Use Open Cloud Yourself]] — upload assets and create products through the Open Cloud key

## Reference
- [[Open Cloud Key]] — where the key lives, group id, upload and product endpoints

## Decisions

## Systems
