---
description: How code changes are delivered — no comments, no scope creep, propose-and-wait on player-facing decisions, surgical diffs.
type: preference
---
Carried over from Chop a Rock (2026-11-19).

1. **No comments in code** unless asked. Matches AGENTS.md.
2. **No changes outside the requested scope.** Don't tidy, refactor or "improve" unrelated code; flag adjacent problems in chat instead.
3. **Propose-and-wait on anything player-facing**: gameplay mechanics, progression, prices, UI decisions, monetization, lore and content need the user's approval before they're built. Drafted numbers are flagged as drafts.
4. **The user reviews git diffs before committing**, so keep diffs surgical and readable. Commit only when asked.

Related: [[Stage Only Own Files]]
