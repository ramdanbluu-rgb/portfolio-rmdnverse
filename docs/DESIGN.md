---
name: Void Minimalist
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#303031'
  secondary-container: '#464747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#342f2e'
  tertiary-container: '#eae0dd'
  on-tertiary-container: '#6a6361'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#eae0dd'
  tertiary-fixed-dim: '#cec5c2'
  on-tertiary-fixed: '#1f1b19'
  on-tertiary-fixed-variant: '#4b4644'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
---

## Brand & Style
The design system is engineered for high-end personal portfolios that demand an atmosphere of precision, technical mastery, and "quiet luxury." The brand personality is hyper-focused and intentional, evoking a sense of an elite developer or designer’s terminal.

The aesthetic follows a **Brutalist-leaning Minimalism**. It rejects decorative fluff in favor of structural integrity, utilizing raw high-contrast typography, strict 1px grid lines, and a "Deep Void" color philosophy. The UI should feel like a high-end physical hardware interface—tactile, responsive, and unapologetically digital.

## Colors
This design system utilizes a high-contrast monochromatic palette to create depth through value rather than hue.

- **Primary (#EDEDED):** Used for headlines and high-priority interactions. It should feel "luminous" against the dark background.
- **Secondary (#888888):** Reserved for supporting text, metadata, and deactivated states.
- **Background (#050505):** A "true black" base that maximizes the contrast of the 1px borders.
- **Surface (#111111):** Applied to cards and containers to create a subtle lift from the background.
- **Border (#222222):** The structural backbone of the UI. All elements are defined by these thin, surgical lines.

## Typography
The typographic hierarchy leans heavily on the interplay between the clean, geometric Swiss-style of **Geist** and the technical, monospaced precision of **JetBrains Mono**.

Headlines should be set with tight tracking to emphasize the brutalist influence. The monospaced font is exclusively for functional data: timestamps, tags, technical specs, and UI labels. This distinction helps the user differentiate between "narrative" content and "data" content.

## Layout & Spacing
The layout follows a **Strict Grid** model. Elements are aligned to a 4px baseline shift to ensure mathematical harmony.

- **Grid:** Use a 12-column grid for desktop with 24px gutters. On mobile, transition to a single-column stack with 16px side margins.
- **Dividers:** Instead of using white space alone, use 1px borders (#222222) to separate sections, reinforcing the technical, structured feel.
- **Reflow:** Large display type should scale down aggressively on mobile to maintain readability without horizontal scrolling.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Stacking** and **Glassmorphism** rather than traditional shadows.

- **Stacking:** The background is #050505. Moving "up" the Z-axis is represented by shifting to #111111 (Surface).
- **Glassmorphism:** For floating menus, tooltips, or navigation bars, use a semi-transparent background (e.g., `#11111180`) with a `backdrop-blur-md` (12px to 16px). This creates a futuristic "HUD" effect.
- **Outlines:** Every elevated element must have a 1px solid border (#222222). Do not use drop shadows; the high contrast between surfaces is sufficient for hierarchy.

## Shapes
The shape language is "Soft-Brutalist." While the layout is rigid, elements possess a 4px (0.25rem) corner radius to prevent the UI from feeling sharp or hostile. This subtle rounding provides a modern, manufactured feel—similar to high-end hardware.

- **Small elements (tags/badges):** 4px radius.
- **Large elements (cards/sections):** 8px (0.5rem) radius.
- **Interactive States:** On hover, borders may brighten to #EDEDED, but the shape remains static.

## Components

### Buttons
- **Primary:** Background #EDEDED, Text #050505, 4px radius. No border.
- **Secondary:** Background transparent, Border 1px #222222, Text #EDEDED. On hover, background becomes #111111.
- **Ghost:** Monospaced text, no background, underline on hover.

### Cards
- Background #111111, 1px border #222222.
- Title in Geist (Headline-sm), description in Secondary text (#888888).
- Any tags within the card should use JetBrains Mono in a 1px bordered box.

### Input Fields
- Background #050505, Border 1px #222222.
- Focus state: Border changes to #EDEDED.
- Placeholder text: Secondary color (#888888).

### Navigation
- Sticky top-bar with `backdrop-blur-md`.
- Bottom border 1px #222222.
- Active links marked with a small monospaced "01", "02" prefix.

### Chips/Tags
- Small, 1px border, JetBrains Mono font.
- Used for tech stacks (e.g., "REACT", "TYPESCRIPT").