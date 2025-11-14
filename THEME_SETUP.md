# Theme Setup Documentation

This document describes the comprehensive theme system implemented for the Atylus Astro project, including light/dark mode support, custom typography, and Material Design-inspired components.

## Overview

The theme system is built on top of Tailwind CSS v4 and includes:

- **Dual Mode Support**: Full light and dark mode with localStorage persistence
- **Custom Color Palette**: iOS/Material Design-inspired color system
- **Typography Scale**: Complete typography system with custom utility classes
- **Theme Toggle**: User-friendly theme switcher component
- **FOUC Prevention**: Inline scripts to prevent flash of unstyled content

## File Structure

```
src/
├── styles/
│   ├── globals.css          # Main CSS entry point
│   ├── theme.css            # CSS variables and theme configuration (UPDATED)
│   └── components.css       # Component styles and typography utilities (UPDATED)
└── layouts/
    └── components/
        ├── widgets/
        │   └── ThemeToggle.astro    # Theme toggle component (NEW)
        └── global/
            └── FooterThree.astro    # Footer with integrated theme toggle (UPDATED)
```

## Color System

### Standard Colors

Both light and dark modes include the following color palette:

- Red, Orange, Yellow
- Green, Mint, Teal, Cyan
- Blue, Indigo, Purple, Pink
- Brown, Gray
- White, Black

**Usage in CSS:**
```css
color: var(--color-blue);
background: var(--color-green);
```

**Usage in Tailwind:**
```html
<div class="text-[var(--color-blue)]">Blue text</div>
```

### Fill Colors

Five levels of fill colors for backgrounds and overlays:
- Primary (10% opacity)
- Secondary (8% opacity)
- Tertiary (5% opacity)
- Quaternary (2% opacity)
- Quinary (15% opacity)

**Usage:**
```css
background: var(--fill-primary);
```

### Label Colors

Five levels of label/text colors:
- Primary (85% opacity)
- Secondary (50% opacity)
- Tertiary (25% opacity)
- Quaternary (10% opacity)
- Quinary (5% opacity)

**Usage:**
```css
color: var(--label-primary);
```

### Background Colors

Five levels of background colors for materials:
- Ultra Thick (90% opacity)
- Thick (85% opacity)
- Regular (80% opacity)
- Thin (75% opacity)
- Ultra Thin (70% opacity)

**Usage:**
```css
background: var(--bg-thick);
```

### Vibrant Colors

Special vibrant fill and label colors for high-contrast scenarios.

## Typography System

### Custom Typography Classes

The following utility classes are available for typography:

#### Large Title
- `.text-large-title-bold` - 26px, line-height 32px, bold
- `.text-large-title` - 26px, line-height 32px, regular

#### Title 1
- `.text-title-1-bold` - 22px, line-height 26px, bold
- `.text-title-1` - 22px, line-height 26px, regular

#### Title 2
- `.text-title-2-bold` - 17px, line-height 22px, bold
- `.text-title-2` - 17px, line-height 22px, regular

#### Title 3
- `.text-title-3-semibold` - 15px, line-height 20px, semibold
- `.text-title-3` - 15px, line-height 20px, regular

#### Headline
- `.text-headline-heavy` - 13px, line-height 16px, heavy (900)
- `.text-headline-bold` - 13px, line-height 16px, bold

#### Body
- `.text-body-semibold` - 13px, line-height 16px, semibold
- `.text-body` - 13px, line-height 16px, regular

#### Callout
- `.text-callout-semibold` - 12px, line-height 15px, semibold
- `.text-callout` - 12px, line-height 15px, regular

#### Subheadline
- `.text-subheadline-semibold` - 11px, line-height 14px, semibold
- `.text-subheadline` - 11px, line-height 14px, regular

#### Footnote
- `.text-footnote-semibold` - 10px, line-height 13px, semibold
- `.text-footnote` - 10px, line-height 13px, regular

#### Caption 1
- `.text-caption-1-medium` - 10px, line-height 13px, medium
- `.text-caption-1` - 10px, line-height 13px, regular

#### Caption 2
- `.text-caption-2-semibold` - 10px, line-height 13px, semibold
- `.text-caption-2-medium` - 10px, line-height 13px, medium

**Example Usage:**
```html
<h1 class="text-large-title-bold">Main Heading</h1>
<h2 class="text-title-1">Subheading</h2>
<p class="text-body">Body text content</p>
<span class="text-caption-1">Small caption</span>
```

## Material Design Elements

### Border Radius
- `--radius-sm`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 16px
- `--radius-xl`: 20px
- `--radius-2xl`: 24px

### Box Shadows
- `--shadow-card`: Card shadow
- `--shadow-elevated`: Elevated element shadow
- `--shadow-modal`: Modal/dialog shadow

**Usage:**
```css
border-radius: var(--radius-md);
box-shadow: var(--shadow-card);
```

## Theme Toggle Component

### Features

1. **localStorage Persistence**: Theme preference is saved and restored
2. **System Preference**: Respects user's system dark mode preference
3. **FOUC Prevention**: Inline script prevents flash of unstyled content
4. **Smooth Animations**: 300ms transitions for all theme changes
5. **Visual Feedback**: Sun/moon icons with animated toggle

### Usage

The theme toggle is already integrated into the footer. To use it elsewhere:

```astro
---
import ThemeToggle from "@/components/widgets/ThemeToggle.astro";
---

<ThemeToggle />
```

### How It Works

1. **On Page Load**: Inline script checks localStorage or system preference
2. **User Interaction**: Click toggles between light and dark modes
3. **Persistence**: Preference is saved to localStorage
4. **Visual Update**: HTML element gets `.dark` class applied/removed

## Dark Mode Implementation

### Automatic Class Toggle

The theme system uses the `.dark` class on the `<html>` element to toggle dark mode:

```html
<!-- Light mode -->
<html lang="en">

<!-- Dark mode -->
<html lang="en" class="dark">
```

### CSS Variable Override

Dark mode variables are defined in `theme.css`:

```css
/* Light mode (default) */
@theme inline {
  --color-blue: #007AFF;
  /* ... */
}

/* Dark mode */
.dark {
  --color-blue: #0A84FF;
  /* ... */
}
```

## Migration Guide

### Using New Typography Classes

**Before:**
```html
<h1 class="text-4xl font-bold">Title</h1>
```

**After:**
```html
<h1 class="text-large-title-bold">Title</h1>
```

### Using New Color Variables

**Before:**
```html
<div class="bg-blue-500 text-white">Content</div>
```

**After:**
```html
<div class="bg-[var(--color-blue)] text-[var(--label-primary)]">Content</div>
```

### Using Material Design Elements

**Before:**
```html
<div class="rounded-lg shadow-md">Card</div>
```

**After:**
```html
<div style="border-radius: var(--radius-md); box-shadow: var(--shadow-card);">Card</div>
```

## Testing

### Test Light/Dark Mode

1. Visit the website
2. Scroll to the footer
3. Click the "Theme" toggle button
4. Verify:
   - Colors change appropriately
   - Theme persists on page reload
   - Toggle animation is smooth
   - Icons update correctly

### Test Typography

Create a test page with all typography classes:

```html
<div class="space-y-4 p-8">
  <h1 class="text-large-title-bold">Large Title Bold</h1>
  <h2 class="text-title-1">Title 1</h2>
  <h3 class="text-title-2-bold">Title 2 Bold</h3>
  <p class="text-body">Body text with regular weight</p>
  <p class="text-callout-semibold">Callout semibold</p>
  <span class="text-footnote">Footnote</span>
</div>
```

## Browser Support

- Modern browsers with CSS custom properties support
- localStorage support required for theme persistence
- Fallback to system preference if localStorage unavailable

## Future Enhancements

- [ ] Add transition animations for theme switching
- [ ] Implement theme-aware component variants
- [ ] Add more color scheme presets
- [ ] Create theme customization panel
- [ ] Add keyboard shortcuts for theme toggle

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [iOS Human Interface Guidelines - Color](https://developer.apple.com/design/human-interface-guidelines/color)
- [Material Design Color System](https://material.io/design/color)

---

**Last Updated**: 2025-11-14
**Version**: 1.0.0
