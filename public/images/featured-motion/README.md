# Reference typography motion

Extracted from the user-supplied `Screen Recording 2026-09-16 at 2.46.13 PM.mov`.

- Source dimensions: 1544 × 1458.
- Website frame: x=78, y=16, width=1392, height=1440.
- Typography crop: x=260, y=240, width=1030, height=175.
- Sampling: 30 frames per second, starting at 0.5 seconds.
- Measured cycle: 100 frames / 3.333333 seconds; three cycles per ten-second GSAP timeline.
- Each transparent atlas contains 50 frames, arranged in five columns and ten rows.
- Red-channel normalization removes both the gray canvas and red rectangle. Letter edges retain their recorded antialiasing.
- `type-poster.png` is the first frame and the reduced-motion/loading fallback.

Regenerate on macOS using `scripts/extract-portfolio-type.swift` with the source video path. Video decoding requires access to the macOS media services.

The extracted typography preserves the source recording's resolution and compression; it is not editable font text. The heading retains an accessible Portfolio label. Card artwork remains separate placeholder imagery.
