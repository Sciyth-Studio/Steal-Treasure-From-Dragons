---
description: Any test or Studio script that changes workspace.CurrentCamera.CameraType sets it back to Custom before it ends.
type: preference
---
Carried over from Chop a Rock, where the user kept having to reset the camera after Claude's tests.

- Every `execute_luau` call that sets `CameraType` to Scriptable restores `Enum.CameraType.Custom` before it ends, including early returns and error paths.
- After stopping a playtest, the Edit camera may read `Fixed`; check it and set it back to Custom.
