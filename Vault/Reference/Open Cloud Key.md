---
description: Open Cloud API key lives in the user env var ROBLOX_API_KEY; uploads go under the Sciyth Studio group; endpoints for assets and developer products.
type: reference
---
Same key as Chop a Rock (carried over 2026-11-19).

- Stored as the Windows **user** environment variable `ROBLOX_API_KEY`. Never print it or write it to a file. Send it as `$env:ROBLOX_API_KEY` in the `x-api-key` header.
- Its scopes are wildcard (not limited to one universe), so it should work for this game's universe. Confirm with `POST https://apis.roblox.com/api-keys/v1/introspect` (remove the echoed key before showing the response).
- Upload under the Sciyth Studio group: `POST https://apis.roblox.com/assets/v1/assets` (multipart `request` JSON with `assetType`, `displayName`, `creationContext.creator.groupId` = `10962733`, plus `fileContent`), then poll `operations/<id>`. Use `assetType` **Image** for UI icons (Decal ids don't load in ImageLabels). FBX uploads use **Model**. If an upload keeps failing with `INTERNAL`, put spaces in the display name.
- Developer products: create them under `universes/<universeId>/developer-products` with multipart fields `name`, `description`, `price`, `isForSale=true`, sent with `curl -F` from Bash (PowerShell `Invoke-RestMethod -Form` got WAF-blocked). The full endpoint is in Chop a Rock's vault note `Reference/Open Cloud Key.md`.
- A changed env var only reaches shells after the Claude app is fully quit from the tray and reopened.
- This game's universe id: `10777889311` (place `136363810791077`).
