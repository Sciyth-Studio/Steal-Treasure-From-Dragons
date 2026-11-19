# Icon and thumbnail runs

Same pipeline as Chop a Rock: one fresh ChatGPT chat per run, paste the whole prompt, attach the images in the order listed. To change a prompt, edit `GameIcon/Request_*.txt` or `GameThumbnail/Request_*.txt` (or the shared rules) and rebuild the pack. Each `*Prompt.md` has a matching `*Prompt.txt` with just the text to paste.

## Order
1. **Sand background** (done 2026-11-19): `Background/SandBaseplate.webp`.
2. **The three reference sheets**, one fresh chat each:
   - Dragon (done 2026-11-19): `Dragon/DragonSheet.webp` is the studded dragon the user swapped in; the first blocky one is `Dragon/DragonSheet_Blocky.webp`.
   - Carry pose (done 2026-11-19): `Reference/CarryPoseSheet.webp`.
   - Emerald (done 2026-11-19): `Reference/EmeraldSheet.webp`.
3. **The icon and thumbnail.** Save results to `GameIcon/Results/` and `GameThumbnail/Results/` as `<Name>_v<n>.webp`, with the prompt next to keepers.

## Runs and attachments (attach in this order)
| Paste | Attach |
|---|---|
| `Pack/Icon_Chase.txt` | `Reference/BaconHair_Classic.webp`, `Reference/Faces/25_Shock.png`, `Reference/CarryPoseSheet.webp`, `Reference/EmeraldSheet.webp`, `Dragon/DragonSheet.webp`, `Background/SandBaseplate.webp`, `GameIcon/Results/Chase_v1.webp` (v2 copies v1; v1 used `Reference/Layout/IconLayout.png`) |
| `Pack/Thumb_Chase.txt` | `Reference/BaconHair_Classic.webp`, `Reference/Faces/25_Shock.png`, `Reference/CarryPoseSheet.webp`, `Reference/EmeraldSheet.webp`, `Dragon/DragonSheet.webp`, `Background/SandBaseplate.webp`, `Reference/Layout/ThumbnailLayout.png`, `GameIcon/Results/Chase_v2.webp` |

## Rebuild the packs after editing (Git Bash, from this folder)
```bash
for r in GameIcon/Request_*.txt; do cat GameIcon/IconRules.txt "$r" GameIcon/IconCheck.txt > "Pack/$(basename "$r" .txt | sed 's/Request_/Icon_/').txt"; done
for r in GameThumbnail/Request_*.txt; do cat GameThumbnail/ThumbnailRules.txt "$r" GameThumbnail/ThumbnailCheck.txt > "Pack/$(basename "$r" .txt | sed 's/Request_/Thumb_/').txt"; done
```

## References
`Reference/` holds copies from Chop a Rock: the classic Bacon Hair sheet, the accepted baseplate plate, five faces from the GFX kit (numbered as on `Faces/ContactSheet.png`, which shows all 52; the full set is in Chop a Rock's `assets/Icons/BaconHair/GFXFaces/`).
