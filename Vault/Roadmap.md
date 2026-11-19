---
description: The development roadmap for Steal Treasure from Dragons (2026-11-19) - what gets built when, in dependency order, from the Game Plan; MVP phases with checklists, tests and done criteria, then post-MVP
type: project
---
# Roadmap

Built from the [[Game Plan]] on 2026-11-19, as its template's final step asks. The four sources of truth stay separate:
- [[Game Plan]] says **what** the game becomes.
- This roadmap says **when** each part is built.
- Feature plans (one per system, written when its phase starts) say **how** it behaves.
- The code and the Studio place say **what exists**.

When they disagree, Claude flags the conflict instead of picking one.

## 1. The game in one paragraph (check this is right)
A K-5 steal-and-collect simulator in a stud-style medieval world. You run into a zone where a dragon sleeps on its hoard, grab a treasure (rarity plus a weight in kg; your bag's kg limit decides what you can lift), and the dragon wakes, chases you and breathes fire. A hit knocks you back and the treasure flies home to the hoard. Reach your castle and the treasure goes on a display slot, earning money every second, shown as grey NPC visitors paying to look at it. Money buys speed (the main progression and each zone's gate), a bigger bag, and more display slots. Other players raid your castle one treasure at a time; you lock it or knock them back with a sword. Each player has their own dragon. Ten zones at launch; the MVP proves the loop with two.

## 2. Gaps to settle before the phase that needs them
None of these block Phase 0. Each one is asked at the start of the phase listed.

| Gap | Needed by | Notes |
|---|---|---|
| Zone 1 and zone 2 themes, and what their dragons look like | Phase 1 | The approved studded red dragon is the zone 1 target ([[Icon And Thumbnail Pipeline]]). The sand baseplate in the marketing art suggests a desert zone 1. |
| Treasure list for zones 1-2: names, rarities, kg ranges | Phase 1 | Rarity names and colours also feed the UI. |
| Players per server and the castle plot layout | Phase 1 | Sets how many plots, and how far castles sit from the zones. |
| Who builds the map | Phase 1 | In Chop a Rock the user built the world and Claude didn't author world geometry. Assume the same unless told otherwise. |
| What other players see of your chase | Phase 2 | Dragons are player-sided. Do others see your dragon chasing you, or only you? (suggestion: others see it too, as a visual only, so a chase looks exciting from outside) |
| Lock duration and cooldown | Phase 4 | Claude drafts numbers for the user to tune. |
| A protection window for brand-new players | Phase 4 | (suggestion, from risk 3) e.g. castles of players in their first few minutes can't be raided. |
| Intro cutscene story and tutorial steps | Phase 6 | Section 05 gives only the order: cutscene, tutorial, first steal. |
| Section 04 (how Claude works) | none | Covered by the vault and AGENTS.md. |

**Contradictions found:** none. Section 00's description says visitors "pay to come and see" the treasure, and section 07 says visitors are how treasure income is *shown*, not a second source. These agree as long as the code has one income number per treasure and visitors only present it.

## 3. System architecture
Follows AGENTS.md: services own state and rules on the server, controllers own presentation on the client, constants live in `src/shared/Config`, and screens go under `UIController`.

**Server services**
| Service | Owns |
|---|---|
| `DataService` (exists) | Profiles. New fields: speed level, bag level, slot count, displayed treasures, highest speed tier owned, tutorial progress. |
| `PlotService` | Assigning a castle to each player, display slots, placing and removing treasure, the lock. |
| `TreasureService` | The treasure catalogue, hoard spawns per zone, rolling rarity and kg, who is carrying what, pickup, drop and return-home. |
| `ChaseService` | Each player's dragon state (asleep, chasing, returning), its server-side position, fire hits, and carry validation (time, distance and max speed checks). Risk 1. |
| `ProgressionService` | Speed and bag upgrades, slot purchases, zone gates by speed. Turns the speed stat into real movement through the capped curve (risk 2). |
| `IncomeService` | Per-second income from displayed treasure (one number per treasure, X2 Money later). |
| `CombatService` | Sword hits, knockback, a carrier dropping treasure, raid rules. |
| `PurchaseService` (exists) | Post-MVP: X2 Money, X2 Bag Capacity, the speed ladder. |

**Client controllers**
- **`DragonController`:** draws your own dragon from the server's state, plays the wake, roar, fire telegraph and fire.
- **`CarryController`:** carry visuals, holding the treasure overhead.
- **`CombatController`:** sword input and the knockback feel.
- **`VisitorController`:** grey R6 visitors walking through castles, purely visual.
- **`IntroController`:** the loading cover and intro cutscene.
- **`UIController` screens:** Hud (money, speed, bag), Upgrades, Lock, Tutorial, Notifications and the zone banner.

**Components (tagged in Studio):** `Hoard` (a zone's treasure spawn area), `DisplaySlot`, `ZoneGate`, `CastlePlot`.

**Config:** `TreasureConfig`, `ZoneConfig`, `DragonConfig`, `SpeedConfig` (the movement curve and its cap), `UpgradeConfig`, `PlotConfig`, `CombatConfig`.

**Dependencies:**
1. Data fields → Plot, Treasure and Progression.
2. Treasure → Chase (you can only be chased while carrying).
3. Plot → Income and raids.
4. Progression (speed curve) → Chase balance and zone gates.
5. Everything → Tutorial (it walks through finished systems).

## 4. MVP phases
Each phase ends with `./scripts/check.ps1` passing and the user playtesting what Claude hands over ([[User Playtests Changes]]). Placeholder art is fine until Phase 7. Every number is a draft until the user approves it.

### Phase 0: Numbers and movement first (risk 2)
- [ ] Speed curve prototype: a speed stat → WalkSpeed mapping with a hard cap, tested in Studio at x1, x8, x128 and x4K for tunnelling, overshoot and how it looks to other players.
- [ ] Balance spreadsheet v1 for zones 1-2: treasure values per rarity and kg, upgrade prices, the zone 2 speed gate, dragon chase speeds. Profiles: a free player and buyers at x8, x128 and x4K.
- [ ] Settle the Phase 1 gaps (zone themes, treasure list, players per server, who builds the map).

**Done when:** the user approves the curve's feel and the first numbers.

### Phase 1: The steal loop without the dragon
- [ ] Data fields added to `PlayerData` (Data, Template, Validate together).
- [ ] Zone 1 greybox (built by whoever the gap says) with a `Hoard` and treasure spawns.
- [ ] Pickup (blocked over the bag's kg), carry, drop and return-home.
- [ ] Castle plots assigned per player; carried treasure goes onto a free display slot.
- [ ] Income per second from displayed treasure.
- [ ] A bare HUD showing money.

**Done when:** a player can grab treasure, bring it home, see it displayed and watch money go up, and it all survives a rejoin.

### Phase 2: The dragon (risks 1 and 4)
- [ ] `ChaseService`: asleep → wakes on grab → chases → returns and sleeps, one dragon per player.
- [ ] Fire breath: a textured telegraph, then a server-decided hit with lag allowance; a hit means knockback and the treasure flies home.
- [ ] Safe zone at your castle.
- [ ] Carry validation: fake a teleport and a deleted dragon in Studio, and the carry fails.
- [ ] Dragon model: a placeholder first, then the approved studded dragon built with the riptides-stud-builder skill and rigged for fly, roar and fire.

**Done when:** the chase is tense but fair at normal and high ping, and the exploit tests fail as they should.

### Phase 3: Progression and zone 2
- [ ] Speed and bag upgrades, display slot purchases.
- [ ] Zone 2 with its own hoard, treasure and dragon, behind a speed gate.
- [ ] Upgrades screen, the zone banner with its recommended speed, the red "!" alert when something is affordable.

**Done when:** a new player can earn their way into zone 2 at the pace the spreadsheet predicts.

### Phase 4: Raids
- [ ] Stealing one treasure from another player's unlocked castle and carrying it home.
- [ ] Sword: knockback only; a knocked-back thief's treasure returns to the castle it came from.
- [ ] Lock button with drafted duration and cooldown.
- [ ] The new-player protection window, if the user approves it.

**Done when:** a two-player test shows raids are possible but defendable, and a raided player isn't left with nothing.

### Phase 5: NPC visitors
- [ ] Grey R6 visitors with no clothes walking through castles and "paying", in time with income.
- [ ] Capped per castle and switched off by Low Graphics.

**Done when:** income reads as visitors paying, and performance holds with a full server.

### Phase 6: First player experience
- [ ] Loading cover into the intro cutscene (story from the Phase 6 gap).
- [ ] Tutorial: first steal, first chase, first display, first upgrade.

**Done when:** a brand-new player reaches their first displayed treasure in about two minutes without help.

### Phase 7: MVP polish and playtest
- [ ] UI feel, confetti, alerts and settings copied from Chop a Rock (Game Plan section 09).
- [ ] First-pass VFX and SFX for the new moments: waking, RUN!, fire hit, raid, lock, visitor paying.
- [ ] Rerun the exploit and high-ping tests; check performance on mobile.
- [ ] A playtest with the target age if possible.

**Done when:** the user signs off the MVP.

## 5. After the MVP (order to confirm)
1. Monetization: X2 Money, X2 Bag Capacity, the 12-tier speed ladder (needs Phase 0's curve and spreadsheet).
2. Offline earnings with a cap.
3. Collection book.
4. Rare spawn announcements.
5. Castle floors, then castle colours and designs.
6. Zones 3-10, one at a time, timing zone 1's build to plan the rest (risk 5).
7. Dressed NPC visitors.

## 6. Testing on every phase
- `./scripts/check.ps1` passes.
- The user playtests what Claude hands over.
- Every new client request is validated and rate-limited on the server (AGENTS.md).
- Any phase touching carrying, chasing or raids reruns the exploit tests from Phase 2.
- UI changes are checked on phone, tablet and desktop (the `roblox-gui` skill).
