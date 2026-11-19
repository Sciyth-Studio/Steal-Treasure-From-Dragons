---
description: The master game plan (design source of truth) for Steal Treasure from Dragons, filled in section by section from the user's answers; open questions listed at the end.
type: project
---
# Game Plan

Built from the user's master planning template (`Downloads/@jsmelo MASTER DOC.txt`). Only the user's decisions go in here; Claude's suggestions are marked **(suggestion)** until approved. Sections without answers yet are left out.

## 00. Introduction
- **Name:** Steal Treasure from Dragons (final). Easy to understand for the target audience.
- **Description:** Players sneak into dragon lairs, grab treasure from each sleeping dragon's hoard and run back to their castle while the woken dragon chases them and breathes fire. Treasure displayed at the castle earns money every second, and NPC visitors pay to come and see it. Money buys speed (to outrun tougher dragons in later zones), bigger bags (to carry heavier treasure), display slots, castle floors and castle looks. Other players can raid your castle, and everyone carries a sword to knock them back. The setting is medieval.
- **Game type:** Steal-and-collect simulator (the Steal an Egg / Steal a Brainrot family).
- **Main player fantasy:** being the sneaky hero who robs a sleeping dragon and gets away with it, then building a huge hoard of your own.
- **Target audience:** K-5 (about ages 5-11).
- **Main selling points over Steal an Egg:**
  1. NPC visitors come to your castle for passive income.
  2. Dragons launch fire breath at you while you run away.
  3. A bag you upgrade to carry heavier treasure.
  4. Treasure scales on both rarity and size (weight in kg).

## 01. References
### Steal an Egg (Roblox): the loop and the dragons
What the guides say it does (third-party guides, Aug 2026; not verified in the live game):
- Each biome has a guardian that works as a **speed gate**: below the biome's recommended speed it catches you, ragdolls you and you drop the egg. A "RUN!!" prompt shows as it closes in. It stops chasing once you reach your base (the safe zone).
- Nine biomes, unlocked by speed. Better biomes give heavier, more valuable eggs; rare eggs sometimes spawn in low biomes and players rush them. Spawns reset every 5 minutes.
- Eggs go in the base Pen and hatch into pets that earn money per second based on size and mutation. Pen upgrades add slots. An index gives a reward per new pet.
- Speed comes from a treadmill (AFK-able, upgradable) and trails (10 tiers).

**Take from it:** the steal → run → display → earn → get faster loop; dragons as per-zone speed gates; dropping treasure when caught; the base as a safe zone; zone unlocks by speed; rare spawns in low zones; the collection index.

### Steal a Brainrot (Roblox): raids and the base
What the guides say (third-party; they disagree on the lock timer):
- A **lock button** closes your base with a barrier for a short time (guides say about 30-60 s, longer after rebirths); nobody can steal while it's locked, and it goes on cooldown.
- A thief grabs one unit from an unlocked base and carries it to their own base; the owner chases and hits them to make them drop it.
- Bases have **floors**; upper floors are harder to reach, so players keep their best units up high.

**Take from it:** the lock button, one-at-a-time raids, the owner knocking the thief back, floors.

**Not to copy (either game):** eggs, hatching and pets, brainrots, the treadmill and trail look, and their names and UI, so the game reads as its own.

## 02. Core gameplay loop
1. Leave your castle and run into a dragon's zone. The dragon is asleep on its hoard.
2. Sneak up and grab a piece of treasure. Grabbing wakes the dragon. (Treasure heavier, in kg, than your bag holds can't be picked up.)
3. The dragon chases you and breathes fire. A hit knocks you back and makes you drop the treasure.
4. Reach your castle and put the treasure on display. It earns money every second, based on rarity and weight; that money is shown as NPC visitors paying to see it.
5. Spend money on speed (main), a bigger bag (secondary), display slots, floors and castle looks.
6. Faster players can survive tougher zones with more valuable treasure. Repeat.
- Throughout: other players can raid your castle one treasure at a time; lock it, or knock them back with your sword so they drop it.

## 03. Visual direction (partial)
- The environment is stud-styled, like Chop a Rock.

## 05. First player experience
The first two minutes: an intro cutscene, then a tutorial, then the player's first treasure steal.

## 06. World (partial)
- **World type:** zones. One dragon per zone; 10 zones at launch.
- **Rare spawns:** sometimes a rare treasure appears in an early zone and the server announces it, so everyone races for it.

## 07. Progression, economy and rewards (partial)
- **Main progression:** speed.
- **Secondary axis:** bag capacity in kg. A treasure heavier than your bag allows can't be picked up.
- **Treasure value:** rarity and size. Size is a number: each treasure's weight in kg.
- **Money is earned from:** displayed treasure, per second (rarer and heavier treasure pays more). NPC visitors are how that income is shown: they come to see the treasure and pay. They are not a second income source (user, 2026-11-19).
- **Money is spent on:** speed, bag upgrades, display slots, castle floors (more income) and castle colours and designs.
- **Collection book:** one page per zone; a reward for each new treasure found.
- **Offline earnings:** displayed treasure keeps earning while you're away, up to a cap.

## 08. Core systems (partial)
- **Dragons:** asleep on the hoard; grabbing treasure wakes it; it chases and breathes fire; a hit knocks you back and you drop the treasure; it stops at your castle (safe zone), then flies back to its hoard and falls asleep again.
- **Dragons are player-sided:** each player has their own dragon, so several players can be chased at once without affecting each other.
- **Dropped treasure** goes back to where it came from: the dragon's hoard, or the castle it was stolen from.
- **Combat:** swords knock players back (no damage). A knocked-back carrier drops the treasure.
- **Raids and base defence:** modelled on Steal a Brainrot: a timed lock button, one treasure stolen at a time, floors that are harder to reach. Lock duration and cooldown: Claude drafts numbers later for the user to tune.
- **NPC visitors:** walk through your castle and pay to see your treasure. They are the in-world explanation of treasure income, not a separate source.

## 09. UI, audio, feedback and game feel
**Basically identical to Chop a Rock** (user, 2026-11-19). The source notes are in Chop a Rock's vault (`Documents/RobloxDev/Vault`); open them before building UI, sounds or effects, and copy the approach (and code where it fits) rather than reinventing it.
- **UI style:** icon-driven, huge buttons, minimal reading. Tile style ([[Tile Style Reference]], [[Menu Panel Style]], [[UI Style References]] there), plus this vault's [[UI Text Style]], [[No All Caps In UI]] and [[High Saturation Colors]]. Built in Studio ([[UI Built In Studio]]).
- **Button and panel feel:** as in Chop a Rock's [[UI Feel]]: hover darkens and grows with a tick, press squashes with a click, panels pop, a shimmer on things that want attention, a success bounce and an error shake.
- **Celebrations:** screen-space confetti and a sound on special moments, as in Chop a Rock's [[Confetti]] (here: rare treasure, new zone, bag or speed upgrade, collection page claim, tutorial end, Robux purchase).
- **Alerts and banners:** a wiggling red "!" when an upgrade is affordable ([[Upgrade Alerts]]), a zone banner with the recommended speed when you enter a zone ([[Zone Banner]]).
- **Prompts:** the one custom prompt template ([[Interaction Prompts]]), with the treasure's rarity and kg on it.
- **Join:** a loading cover ([[Loading Cover]]) into the intro cutscene.
- **Settings:** Music and Sounds sliders, Low Graphics, Notifications and Screen Shake toggles ([[Settings]]).
- **Audio and VFX:** made the same way as Chop a Rock (the `vfx` skill, Chop a Rock's music, ambience and sound notes). Effect templates are swappable so the user's own effects can replace a first pass.
- **Telegraphs:** fire breath warnings use textures, never coloured Parts ([[Textured Attack Telegraphs]]).

**New moments with no Chop a Rock equivalent** (to design when built): the dragon waking up, the chase and a "RUN!" warning, the fire breath hit and treasure drop, a raid on your castle, the lock button, a visitor paying.

## 10. Scope and MVP (partial)
**MVP must have** (the user's core plus Claude's proposals, which the user amended on 2026-11-19):
1. The first zone and the first dragon.
2. A working base (castle).
3. Stealing: treasure spawning on the hoard in a few rarities and weights (kg), carrying it, dropping it.
4. The dragon's full behaviour: asleep, wakes on grab, chases, fire breath with knockback.
5. Display and income: display slots that earn money per second.
6. Speed upgrades and the bag (kg capacity), so money has something to buy.
7. A second zone behind a speed requirement, so the speed gate is tested.
8. Raids: other players can steal one treasure at a time, swords knock back, the lock button.
9. NPC visitors, as placeholder grey R6 NPCs with no clothes.
10. Saving: money, speed, bag and displayed treasure persist.
11. The intro cutscene and tutorial (section 05).

**After the MVP (suggestion):** floors, castle colours and designs, the collection book, offline earnings, rare spawn announcements, zones 3-10, dressed NPC visitors, monetization.

## 10. Monetization (partial, not in the MVP)
**Decision (user, 2026-11-19): copy Steal an Egg's monetization** ([[Steal an Egg Monetization]]). Claude's wider proposal (starter pack, money packs, timed boosts, Claim x3, Lock Now, server boosts, gifting, a treasure stand, paid cosmetics) is dropped.
- **X2 Money** game pass, 299 R$.
- **Speed ladder** as developer products, Steal an Egg's full 12 tiers (user, 2026-11-19; replaces the earlier x10 cap): x2 3, x4 9, x8 24, x16 39, x32 79, x64 129, x128 199, x256 299, x512 499, x1K 649, x2K 949, x4K 1,375 R$ (their wiki prices, drafts). Tiers don't stack: the highest tier owned counts (user, 2026-11-19). The zone speed gates have to be balanced knowing players buy these.
- **X2 Bag Capacity** game pass, 467 R$ (user, 2026-11-19; in place of Steal an Egg's X2 Growth Speed, which speeds up their second progression, as the bag is ours): doubles the bag's kg capacity.
- Steal an Egg's timer skips (Instant Hatch, Grow All) have no match, because treasure doesn't grow or hatch.

## 10. Major development risks (Claude's analysis, all six approved by the user 2026-11-19)
1. **Player-sided dragons are easy to cheat.**
   - *Why dangerous:* if the dragon and its fire run only on the player's client, an exploiter can delete the dragon, ignore fire or teleport home with treasure, and other players can't see it happen.
   - *Prevention / test:* the server owns the outcome. It tracks the carry (start time, position checks, max speed from the player's speed stat) and decides whether a fire hit counts from a server-side model of the dragon's position, using the client's effect only for looks. Test by faking a teleport and a missing dragon in Studio and checking the carry fails.
2. **The x4K speed ladder breaks the zones and the physics.**
   - *Why dangerous:* a buyer with x4K could skip every speed gate in minutes and run out of content; a literal WalkSpeed of thousands makes characters tunnel through walls, overshoot and stutter on other clients.
   - *Prevention / test:* "speed" is a stat, not WalkSpeed. It maps to real movement through a curve with a hard cap, and zone gates and dragon speeds use the stat. Model the economy in a spreadsheet (like Chop a Rock's Balance Model) for a free player and for buyers at x8, x128 and x4K before numbers go in. Prototype the movement mapping early.
3. **Raids drive young players away.**
   - *Why dangerous:* for K-5 players, losing their best treasure to an older player can mean leaving and not coming back, which hurts first-play bounce and D1, the signals Roblox ranks on.
   - *Prevention / test:* the lock button, one treasure at a time, dropped treasure going back to the owner, knockback only (no damage). Consider a short protection window for brand-new players. Watch how many players leave within a minute of being raided once analytics are in.
4. **Fire breath feels unfair.**
   - *Why dangerous:* hits that land after you've visibly dodged (lag, or a server check that disagrees with the client) feel like cheating and frustrate kids.
   - *Prevention / test:* a clear textured telegraph before each breath, generous hitboxes in the player's favour, and a server check that allows for latency. Playtest at high ping.
5. **Ten zones of art is the bottleneck.**
   - *Why dangerous:* each zone needs a dragon, a hoard, treasures in several rarities and an environment. Art, not code, decides how fast zones ship.
   - *Prevention / test:* one dragon rig reused across zones (riptides-stud-builder skill), recoloured and re-dressed per zone; treasures as stud models from one kit. Build zone 1 end to end first and time it.
6. **Reading as a Steal an Egg clone.**
   - *Why dangerous:* copying its loop and monetization is fine, but if the game also looks and sounds like it, players skip it and Roblox may treat it as a copy.
   - *Prevention / test:* keep the "not to copy" list (section 01), lead marketing with what's ours (sleeping dragons, fire breath, the hoard, the castle), and keep thumbnails true to the game.

## Open questions
- **Sections still empty:** 04 AI's purpose, and the rest of 03 and 06-08.
