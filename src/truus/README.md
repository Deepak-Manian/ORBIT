# `src/truus` — ORBIT landing page

A port of the reference site's (truus.co) design system, motion and interactions, filled with ORBIT content.

| File | What it is |
|---|---|
| `TruusLanding.tsx` | Mounts everything. Sets the `<body>` state attributes the CSS/JS read, starts/stops the motion layer, and handles "enter workspace" (plays the scribble transition, then calls `onEnterApp`). |
| `HomeHeader.tsx` … `Footer.tsx`, `SiteHeader.tsx`, `Floating.tsx` | One component per section. **Edit copy directly in these.** `Floating` holds the page-transition overlay and the custom cursor. |
| `motion.ts` | The reference's own animation code (Slater export), adapted: Barba + Vimeo removed, lifecycle-safe `destroy()`, `enter()` API. Easing `0.625,0.05,0,1`, Lenis `lerp 0.165`, cursor speed `0.15`, flick-card offsets etc. are the originals — change them with care. |
| `truus.css` | Generated: the reference's Webflow CSS filtered to the home page + its custom CSS, all scoped under `html.truus-on`. Uses an `em`-based fluid scale (16px at 1440px wide), so don't convert it to px/rem. |
| `orbit-extra.css` | The only hand-written CSS: agent tiles, word tiles, orbit backdrop. |
| `svgs.ts` | Inline SVG artwork (scribbles, stickers, shapes) referenced by the sections. |
| `OrbitBackdrop.tsx` | Hero panel background (the reference plays a video here). |
| `LogoSvg.tsx` | ORBIT wordmark used by the nav, loader and footer. |

## Key conventions
- Behaviour is driven by `data-*` attributes, exactly like the reference: `data-custom-cursor="drag|click|home|mute"`, `data-wiggle`, `data-inertia-element`, `data-scroll-animation`, `data-theme-section` (nav colour), `data-anchor-target` (Lenis scroll links).
- The landing owns its own Lenis + cursor; the app screens keep the shared `SmoothScrollProvider` / `CustomCursor` (see `App.tsx`).
- Old landing rules left in `src/index.css` are scoped to `html:not(.truus-on)`, so they can't affect the landing.

## Assets to replace before a public launch
The sticker artwork, cursor SVGs and several scribble shapes originate from the reference site. Swap them for your own: `public/stickers`, `public/cursors`, and the entries in `svgs.ts`. Placeholder values to update: footer email (`hello@orbit.app`) and LinkedIn link.
