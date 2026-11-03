---
version: alpha
name: "hodomaroo orbit"
description: "원자 탐색과 짧은 한국어 CV로 연결되는 김두호의 포트폴리오"
colors:
  paper: "#f7f8fa"
  surface: "#ffffff"
  ink: "#202632"
  muted: "#626c7e"
  line: "#dfe4eb"
  blue: "#3159de"
  lilac: "#a58ccf"
  mint: "#66a38d"
  slate: "#8594a9"
typography:
  sans:
    fontFamily: "DM Sans, Noto Sans KR, sans-serif"
  display:
    fontFamily: "Manrope, Noto Sans KR, sans-serif"
rounded:
  DEFAULT: "18px"
  sm: "6px"
  md: "12px"
spacing:
  page-max: "1180px"
  page-inset: "28px"
components:
  atom: { interaction: "HTML links projected over a Three.js scene" }
  navigation: { interaction: "hash-based static routes" }
  detail: { interaction: "shared article renderer" }
  drawer: { interaction: "native dialog, right on desktop, full width on mobile" }
---

# hodomaroo orbit Design System

## Overview

### Creative North Star
An atom model on a quiet research desk: a cobalt nucleus connects all experience, three glass-like electrons lead to projects, activities/research and career. The homepage is an exploration surface, the CV is a concise index.

### Product context and register
- Audience: Korean-speaking readers evaluating Duho Kim's engineering work.
- Locale: Korean content; English used for names, technical terms and restrained section captions. Asia/Seoul dates.
- Register: portfolio/content site. No accounts, forms or mutable application data.
- Signature: Three.js nucleus and three electrons, with an expanding-sphere navigation transition.
- Reference: yunmin.dev's spatial exploration plus conventional navigation. refresh.cv structure was requested but its body could not be loaded during initial research.
- Restraint: details use ordinary typography and lists. No fabricated project metrics or roles.
- Anti-references: generic SaaS dashboards, busy particle backgrounds and long introductory essays.
- Canonical runtime tokens: style.css :root. This document mirrors those CSS values; changes update both. Three.js materials intentionally use shaded 3D variants of the same hue families.

## Colors
Paper and surface provide the reading field; ink and muted provide hierarchy. Blue marks the nucleus, focus and navigation. Lilac, mint and slate distinguish categories but are always paired with text labels. No dark theme is implied. Forced colors preserve controls and system scrollbars.

## Typography
Manrope provides display proportions, Noto Sans KR supplies Korean glyphs. DM Sans with Noto Sans KR handles prose. Body copy wraps at Korean word boundaries with overflow protection. Dates use tabular numerals. Detailed text uses 1.95 line height, while CV labels stay compact.

## Layout
Desktop homepage: introduction left, atom right. Under 760px the atom follows the introduction. All categories have direct text links. Content uses an 1180px maximum width, CV 1000px, article 900px. Phone padding is 22px. The right drawer becomes full width on phones. Global scrollbars retain stable layout.

## Elevation & Depth
Only the atom uses physical highlights and depth. Project banners use original presentation covers or official site cover assets, fitted without cropping. The drawer has a subdued shadow and backdrop. CV rows are flat with hairline separators.

## Shapes
Project visuals use the 18px primary radius, small tags use 5px, article images 12px. Electrons and navigation transition are circular. Thin lines express orbits and document structure.

## Components

### Foundational visual states
Links and buttons are semantic, with visible blue focus. Hover accents are secondary to text. No disabled or pending actions are shown unless the action is unavailable. No forms or asynchronous remote records exist.

### Buttons and actions
Header CV link is outlined; secondary links are underlined on hover. Motion pauses while the atom is hovered or keyboard focused; no visible motion control or instructional caption. Print uses the browser's print UI with a dedicated CV print stylesheet.

### Navigation and data display
Hash routes support static hosting, direct links, reload, back and forward. Category lists and CV rows share content from data.mjs. Titles reflect the current route. Unknown paths show a navigable 404.

### Forms and overlays
No forms. The native dialog handles focus trapping and inert background. Escape, close button and backdrop click dismiss it. Focus returns to the original CV row. A permalink opens the same detail as a full article. CV selection lives in the URL.

### Iconography
Document icons identify detail pages, panel icons identify CV side-panel links, arrows mark external links, and a labeled × closes the panel. Category colors are always accompanied by readable names.

### Motion
Electrons slowly travel their orbits when idle. Pointer position smoothly tilts the entire model; hovering or keyboard focus pauses orbital motion so targets remain reachable. Electron navigation expands from the selected sphere for 480ms and fades for 220ms. Reduced motion disables ambient motion and transitions. A CSS fallback preserves all navigation if WebGL fails.

### Content and data visualization
CV contains dates, roles, organizations and brief project summaries. Narrative belongs to detail pages. Supplied presentation facts supersede incomplete public descriptions; plans remain separate from demonstrated results. KIST internship completion was confirmed by the user.

## Do's and Don'ts
- Do keep all three categories and the nucleus keyboard navigable.
- Do preserve the same detail content in standalone pages and the CV panel.
- Don't turn team technology choices into unverified personal achievements.
- Don't add decorative motion to reading pages.

## Category structure
Activities use bold group headings for contests, papers, awards/selection, and studies/student council. Experience and Education are separate sections on the career page. Education shares its facts with the CV. Project covers come from the Malo final PDF, the MediVC final deck and KUCSE Roadmap official OG image.
