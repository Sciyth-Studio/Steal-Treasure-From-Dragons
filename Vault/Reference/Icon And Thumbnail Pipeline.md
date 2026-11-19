---
description: 2026-11-19 how this game's icon and thumbnails are made - ChatGPT runs from paste-ready packs in assets/Icons, the dragon sheet first, the round-1 ideas and why
type: reference
---
# Icon and thumbnail pipeline

Set up 2026-11-19 from Chop a Rock's pipeline (its vault: `Reference/Game Icon Reference.md`, `Reference/Thumbnail Inspiration.md`). Everything is in `assets/Icons/`; its `README.md` lists each run and what to attach.

- **Rules files:** `GameIcon/IconRules.txt` and `GameThumbnail/ThumbnailRules.txt` are Chop a Rock's prompts with rocks swapped for treasure and a dragon-sheet rule added. Requests are separate files; `Pack/*.txt` = rules + request + final check, rebuilt by the loop in the README.
- **Dragon sheet first:** `Dragon/DragonSheetPrompt.md` makes a turnaround sheet (five views plus asleep, roaring, fire) attached to every run, like Chop a Rock's Pet sheets. Draft design: chunky red dragon, golden belly, cream horns, yellow eyes. Whatever is approved becomes the zone 1 dragon's target look ([[Thumbnails Must Match The Game]]).
- **Lessons carried over:** square Roblox studs, "NOT LEGO"; the plain baseplate + blue sky background; at most three big shapes with gaps between them (the squint test); solid, outlined effect shapes, never white against the sky; one attached face, never the numbered sheet; [[Fresh Chat Per Thumbnail Run]]; [[Bacon Hair In Marketing Art]].

## The chase layout (user, 2026-11-19)
The user is replicating these two layouts. The icon is flipped from the thumbnail: hero left, enemy right.

![[Icon Layout Reference.png]]
![[Thumbnail Layout Reference.png]]
Take the **structure** both share: an angry enemy chasing, speed lines in the sky, and the Bacon Hair running away scared in a low lunging stride with a giant item held overhead in both arms; the thumbnail adds red "!!" over the enemy and a curved red arrow at the item. Leave out their egg, the beasts, and the name and $/s text (we have no real numbers yet).

Our version: the red dragon from the dragon sheet, flying low after him, a giant **emerald** (user's pick; green stands out against the red dragon, blue sky and sand ground), the shock face (25). The background is a sand version of the baseplate plate with the horizon dropped to about one fifth up, because dragons fly and need sky (user, 2026-11-19): `Background/SandBaseplatePrompt.md`, made by attaching the green plate so the studs and clouds stay right. The Bacon Hair boy is the default character unless the user says otherwise. Packs: `Pack/Icon_Chase.txt`, `Pack/Thumb_Chase.txt`, each attaching its layout reference from `Reference/Layout/`.

**Sand plate accepted (2026-11-19):** `Background/SandBaseplate.webp`, first run. Square studs, golden sand, about 14 clouds; the horizon landed about 30% up rather than the asked-for 20%, which still gives a mostly-sky frame.

**Every element has its own sheet** (user, 2026-11-19): the dragon (`Dragon/DragonSheetPrompt.md`, now with a flying-chase panel), the Bacon Hair carry pose (`Reference/CarryPosePrompt.md`: three angles, both arms straight up, empty hands, blank face) and the emerald (`Reference/EmeraldPrompt.md`: classic gem-icon cut, few large facets, dark-green outline). The final runs attach all of them plus the layout reference (7 attachments); the icon uses pose panel 1 (running left), the thumbnail panel 3 (running right).

**Sheets accepted (2026-11-19, first runs):** `Reference/EmeraldSheet.webp` (gem-icon cut, dark-green outline) and `Reference/CarryPoseSheet.webp` (lunge, arms up, empty C-hands, blank face; the three angles came out close to each other, all roughly front-facing, which is fine for both layouts).

**The dragon is BLOCKY** (user, 2026-11-19): built from bevelled boxes and wedges like the blocky T-rex in the thumbnail layout reference, printed stripes, no studs. The shared rules were changed to allow blocky shapes on the dragon and to forbid it coming out rounded. Accepted first run: `Dragon/DragonSheet.webp`, red with dark printed stripes, cream belly, horns, claws and back spikes, orange wing panels, angry square yellow eyes. This is the zone 1 dragon's target look.

**Icon chase v1 (2026-11-19)** (`GameIcon/Results/Chase_v1.webp` + prompt): passes the squint test at 64 and 100 px. The emerald, the red dragon and the yellow sand are three clean blocks of colour, and the shock face still reads at 100 px. Weak spots: he runs upright instead of the low lunge on the pose sheet (it reads as running, so fine); fists instead of C-shaped hands; the dragon's near wing fills the gap between the gem and its head, so at 64 px they start to merge; the gem's left tip sits close to the rounded corner; the black jacket goes dark at 64 px, like in Chop a Rock.

**Icon chase v2 is the keeper (2026-11-19)** (`GameIcon/Results/Chase_v2.webp` + prompt). The v2 prompt attached v1 as its layout reference and changed three things: a gap of sky between the gem and the dragon, the gem moved in from the rounded corner, and C-shaped hands. All three landed, and it reads cleanly at 64 px. For v2 the user swapped in a different dragon sheet: a **studded** blocky red dragon, slimmer and longer-necked, with a golden plated belly, dark red back spikes and orange wings. That sheet is now `Dragon/DragonSheet.webp` (the first blocky one is kept as `DragonSheet_Blocky.webp`), and it is the zone 1 dragon's target look. The rules now let the dragon carry studs as on its sheet; studs still never go on the avatar or the treasure.

**Thumbnail:** `Pack/Thumb_Chase.txt` attaches the approved icon as an 8th, style reference, so the thumbnail's hero, gem and dragon match it.

**Thumbnail chase v1 (2026-11-19)** (`GameThumbnail/Results/Chase_v1.webp` + prompt): reads at thumb size. The dragon, the "!!", the arrow, the emerald and the kid are all clear, and it matches the icon. Weak spots: the foreground ground studs came out as round LEGO studs (the Chop a Rock gotcha again, even with the sand plate attached); the dragon's right wing tip nearly touches the gem; his feet sit in the bottom eighth that the player-count bar covers (only the feet, so fine).

**Keepers (user, 2026-11-19): icon v2 and thumbnail v1.** The user called the round studs "negligible" and moved on, so small ground-stud flaws aren't worth another run. Upload-ready copies are in `assets/Icons/Upload/`: `GameIcon_512.png` (512x512) and `Thumbnail_Chase_1920x1080.png` (1920x1080, 2.1 MB, under the 3 MB limit).

An earlier round-1 set (sneak, colossal, jackpot, raid) was dropped for this layout before it was run.

Held back until decided in the [[Game Plan]]: treasure names, kg or income numbers, zone themes.
