---
description: UI is authored in Studio (StarterGui) through the Studio MCP and driven by UIController screens, never built with Instance.new.
type: preference
---
Carried over from Chop a Rock: "I don't prefer code built UI." The user restyles visuals in Studio.

- One ScreenGui in StarterGui per screen, and one `UIController/Screens/<Name>.luau` module that finds elements by name and drives them (see AGENTS.md).
- Build and edit the UI with the `mcp__Roblox_Studio__*` tools. Remind the user to save the place afterwards.
