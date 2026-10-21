---
name: Luminous Onyx
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display:
    fontFamily: Sora
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Sora
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Sora
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system manifests a nocturnal luxury aesthetic engineered for high-ticket modern commerce. It balances the technological authority of deep space slate tones with hyper-vivid bioluminescent accents. The emotional resonance is exclusive, futuristic, and meticulously engineered—evoking the tactile indulgence of carbon fiber, polished titanium, and illuminated vitrines.

The visual style merges refined modern minimalism with dark glassmorphism. Surfaces do not rely on harsh divides; rather, structural elements emerge from deep onyx voids through translucent frosted sheets, microscopic chromatic rim lighting, and luminous spectral glows that guide the user’s shopping journey.

## Colors
The color architecture rests on a non-absolute black foundation:
- **Base Canvas (`#0b0f17`):** Deep abyssal slate that avoids pure `#000000` to prevent eye strain and maintain OLED depth.
- **Surface Elevation (`#111827`):** Deep onyx used for elevated panels, card bases, and navigation modules.
- **Primary Emerald (`#10b981`):** Electric emerald acts as the primary conversion engine—powering primary CTAs, instant checkout actions, and inventory availability indicators.
- **Secondary Cyan (`#06b6d4`):** Luminous cyber cyan used for technological feature highlights, interactive badges, active states, and focal focal micro-gradients.
- **Tertiary Amber (`#f59e0b`):** Warm gold-amber designated strictly for value signals: review stars, limited drops, VIP badges, and promotional tags.

Translucent states utilize alpha overlays (`rgba(255, 255, 255, 0.04)` to `rgba(255, 255, 255, 0.08)`) with cyan or emerald hairline perimeter borders (`rgba(6, 182, 212, 0.15)`).

## Typography
The pairing establishes structural authority and effortless readability:
- **Display & Headlines:** `Sora` provides geometric precision with wide stance character dynamics, imparting an elite, architectural signature suited for luxury products and editorial curation.
- **Body & Product Metadata:** `Plus Jakarta Sans` delivers clean grotesque ergonomics with open apertures, ensuring micro-legibility for product specifications, pricing, checkout disclosures, and order timelines.

Numeric data such as pricing, stock thresholds, and specs should utilize tabular lining figures (`font-variant-numeric: tabular-nums`) to maintain immaculate alignment in carts, tables, and product carousels.

## Layout & Spacing
The layout relies on a 12-column adaptive fluid grid for desktop and tablet, collapsing down to a structured 4-column framework on mobile:
- **Desktop (1200px+):** 12 columns, 24px (`gutter`) gutters, 48px (`margin`) outer page margin with a 1440px maximum content constraint.
- **Tablet (768px - 1199px):** 8 columns, 16px gutters, 24px margins.
- **Mobile (< 768px):** 4 columns, 12px (`gutter-mobile`) gutters, 16px (`margin-mobile`) margins.

Rhythm is strictly modular, governed by multiples of 8px for containers and 4px for component interiors. Sticky action bars on mobile are elevated above a 16px bottom safe-zone clearance to prevent overlap with standard system navigation bars.

## Elevation & Depth
Depth in the system is not achieved through muddy dark drop shadows, but through luminous backdrops, frosted glass physics, and gradient borders:
- **Surface Level 0 (Canvas):** Solid `#0b0f17`.
- **Surface Level 1 (Panels & Cards):** Background `rgba(17, 24, 39, 0.65)` layered with `backdrop-filter: blur(16px)` and a 1px border of `rgba(255, 255, 255, 0.07)`.
- **Surface Level 2 (Floating Modals & Flyouts):** Background `rgba(17, 24, 39, 0.85)` with `backdrop-filter: blur(24px)` and a subtle ambient outer blur: `0 20px 40px -15px rgba(0, 0, 0, 0.7)`.
- **Active Interactive Glow:** Hovered or focused interactive objects cast a bioluminescent ambient corona using their respective accent tokens:
  - Primary actions: `0 0 24px -4px rgba(16, 185, 129, 0.35)`
  - Secondary accents: `0 0 24px -4px rgba(6, 182, 212, 0.35)`
  - Warning/Drop alerts: `0 0 20px -4px rgba(245, 158, 11, 0.3)`

## Shapes
A dual-tier roundedness grammar defines this system:
- **Pill-shaped (Level 3):** Buttons, interactive filter chips, floating search bars, and pricing badges feature completely rounded pill silhouettes (`border-radius: 9999px`). This offsets the high-tech edge of dark mode with an organic, ergonomic finish.
- **Structural Containers:** Product cards, modal dialogs, drawers, and media preview frames employ an expressive 24px (`rounded-lg`) to 32px (`rounded-xl`) corner curvature, mirroring contemporary luxury hardware industrial design.

## Components

### Buttons
- **Primary Action (Add to Cart / Buy Now):** Pill contour, vibrant `#10b981` solid surface, dark slate typography (`#0b0f17`), semi-bold. On hover, produces an ambient emerald glow and slight 1.02x scale transformation.
- **Secondary Action (Explore / View Details):** Pill contour, glass fill `rgba(255, 255, 255, 0.05)`, border `1px solid rgba(6, 182, 212, 0.3)`, crisp white text. On hover, the border transitions to 100% luminous cyan with inner text illumination.
- **Ghost Action:** Pure text button accompanied by directional icon micro-animations (e.g., arrow shifting right 4px on hover).

### Product Cards
- **Architecture:** Frosted backdrop (`rgba(17, 24, 39, 0.65)`), 20px padding, 24px border radius.
- **Visuals:** Framed media viewport with a subtle ambient dark gradient wash behind transparent PNGs or cinematic photography. Hover activates subtle 1.03x image zoom with a cyan hairline trace around the card edge.
- **Micro-Badges:** Positioned top-right and top-left within the card:
  - **Stock/Drop Badges:** Translucent dark pill with glowing emerald or cyan dot ping indicator.
  - **Discount Badges:** Warm amber translucent pill (`rgba(245, 158, 11, 0.15)`) with `#f59e0b` text.

### Chips & Filter Pills
- Pill-shaped filters displaying product categories, sizing, and specs.
- Inactive state: `rgba(255, 255, 255, 0.05)` fill with low-contrast gray text (`#94a3b8`).
- Active state: `#10b981` or `#06b6d4` background tint at 15% opacity, solid 1px border in matching accent, and pure white text.

### Form Inputs & Selectors
- Background: `rgba(11, 15, 23, 0.7)`.
- Border: 1px solid `rgba(255, 255, 255, 0.1)`.
- Focus state: Border illuminates to `#06b6d4` accompanied by a localized cyan ring `0 0 0 3px rgba(6, 182, 212, 0.15)`. Text inputs feature a floating label animation in `Plus Jakarta Sans`.

### Checkboxes & Radios
- Custom dark-slate inset wells with smooth 200ms spring animations.
- Checkboxes feature rounded 6px corners; radio buttons are concentric rings.
- Active state fills with `#10b981` and an inner high-contrast white glyph.

### Mobile Bottom Bar & Mini-Cart
- Persistent glass dock pinned to the mobile screen base (`backdrop-filter: blur(20px)`).
- Instant total price display paired directly with a high-impact pill CTA for direct one-thumb checkout.