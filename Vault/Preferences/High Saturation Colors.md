---
description: Default to max-saturation colours for player-facing UI and VFX unless the user says otherwise; gradients must not wash out.
type: preference
---
Carried over from Chop a Rock: punchy, arcade-style colour. A muted palette was rejected there.

- Without a spec, use pure primaries and secondaries, e.g. `Color3.fromRGB(255, 255, 0)`.
- Gradients keep both stops saturated and vary brightness only; blending toward a pale centre reads washed out.
- Realistic materials (stone, wood) can be muted when the user asks.

Related: [[Literal Black And Grey]], [[UI Text Style]]
