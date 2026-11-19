---
description: Other Claude sessions may edit this repo at the same time; stage only the files this session changed, never git add src or -A.
type: preference
---
Carried over from Chop a Rock, where a `git add src` swept another session's work into the wrong commit.

Before every commit, check `git status`, then `git add` each file this session changed by path. Leave unfamiliar changes alone.
