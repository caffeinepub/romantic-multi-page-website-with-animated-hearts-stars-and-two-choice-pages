# Specification

## Summary
**Goal:** Build a romantic, pastel-themed multi-page website with an animated landing screen and two separate choice pages (“yass” and “definitely”).

**Planned changes:**
- Create a landing page showing the exact prompt text “be with me forever taruna🫴🏼🌷?” in a cursive-style font, with a heart-filled background plus floating hearts and stars animations, and two buttons labeled “yass” and “definitely”.
- Add client-side routing so “yass” and “definitely” navigate to separate URL routes, each with a simple “Back” control to return to the landing page.
- Build the “yass” page with a very light pastel pink background, render the provided multi-line message text exactly (preserving line breaks) in a baby-pink bubble-style font, and show a kiss-stamp graphic near an edge.
- Build the “definitely” page with a white background, show an illustration of two girls jumping with a heart between them, render the exact caption “together forever- taru and shara” in a cherry-pink bubbly font with a heart near it, and animate floating + twinkling stars.
- Apply a consistent romantic visual theme across pages (typography pairing, spacing, button styling, and animation styling).
- Add required static image assets under `frontend/public/assets/generated` and reference them directly from the frontend.

**User-visible outcome:** Visitors see an animated romantic landing page and can choose “yass” or “definitely” to navigate to distinct themed pages with the specified messages/illustrations, then return back to the landing page.
