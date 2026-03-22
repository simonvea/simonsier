# UI Design Notes

## Current design (after 2026-03 refresh)
- **Dark theme**: background `rgb(34, 34, 34)`, text `rgb(224,224,224,0.87)`
- **Accent color**: `#fedb8b` (warm gold) — used for post titles and article titles only, NOT page titles
- **Links**: `#8bb8df` (soft blue)
- **Font**: Lora (serif, 700) for headings; system sans-serif for body
- **Article body**: 1.1875rem, line-height 1.75, max-width 68ch
- **All styles**: inlined from `src/_includes/critical.css` via Nunjucks include in `src/_includes/head.njk`

## Front page post list
- Single-column list (not card grid) — title in gold (Lora), date · description in muted text below
- Thin `rgba(255,255,255,0.08)` border between posts
- No "Les mer" button — title is the link

## Key decisions made
- Gold accent reserved for interactive/navigational headings (post links, article title), not page titles
- `max-width: 1100px; margin: auto` on large screens instead of 22vw margins
- Header: subtle `border-bottom` instead of heavy box-shadow
