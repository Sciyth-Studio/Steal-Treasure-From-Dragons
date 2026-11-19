---
description: Asset lists (music, sounds, images) read whatever sits in a Studio folder under ReplicatedStorage.Assets, not ids in config.
type: preference
---
Carried over from Chop a Rock: the user would "much rather have the music system be a drop sound into folder instead of adding ids to code." Ids that lived only in Studio's copy of a config were wiped by Rojo there.

- Add the folder to `default.project.json` under `Assets` with `$ignoreUnknownInstances: true` (Rojo creates it but never empties it). The project already has `VFX`, `Sounds`, `Music`, `Animations`, `Models` and `Images`.
- Read the instances at runtime and use their own properties, such as a Sound's `Volume`.
