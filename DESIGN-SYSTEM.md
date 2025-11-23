# Grilli Restaurant Website - Design System Guide

A comprehensive style guide for maintaining design consistency when adding new pages or components to the Grilli website.

---

## Table of Contents

1. [Color Palette](#1-color-palette)
2. [Typography](#2-typography)
3. [Spacing System](#3-spacing-system)
4. [Animations & Transitions](#4-animations--transitions)
5. [Layout Patterns](#5-layout-patterns)
6. [Component Styles](#6-component-styles)
7. [Decorative Elements](#7-decorative-elements)
8. [Image Handling](#8-image-handling)
9. [Data Attributes (JavaScript Hooks)](#9-data-attributes-javascript-hooks)
10. [Third-Party Dependencies](#10-third-party-dependencies)
11. [New Page Checklist](#11-new-page-checklist)

---

## 1. Color Palette

### Primary Colors

| Color Name | CSS Variable | Value | Usage |
|------------|--------------|-------|-------|
| Gold/Crayola | `--gold-crayola` | `hsl(38, 61%, 73%)` | Primary accent - buttons, links, highlights |
| Smoky Black 1 | `--smoky-black-1` | `hsla(40, 12%, 5%, 1)` | Deep dark for text and primary backgrounds |
| White | `--white` | `hsla(0, 0%, 100%, 1)` | Primary text and contrast color |

### Background Colors (Dark Theme)

| Color Name | CSS Variable | Value | Usage |
|------------|--------------|-------|-------|
| Eerie Black 1 | `--eerie-black-1` | `hsla(210, 4%, 9%, 1)` | Main body background |
| Eerie Black 2 | `--eerie-black-2` | `hsla(210, 4%, 11%, 1)` | Form input backgrounds |
| Eerie Black 3 | `--eerie-black-3` | `hsla(180, 2%, 8%, 1)` | Feature card backgrounds (odd) |
| Eerie Black 4 | `--eerie-black-4` | `hsla(0, 0%, 13%, 1)` | Image holder backgrounds, header active |
| Smoky Black 2 | `--smoky-black-2` | `hsla(30, 8%, 5%, 1)` | Section backgrounds |
| Smoky Black 3 | `--smoky-black-3` | `hsla(0, 3%, 7%, 1)` | Feature cards (even), preloader |

### Gray Scale

| Color Name | CSS Variable | Value | Usage |
|------------|--------------|-------|-------|
| Quick Silver | `--quick-silver` | `hsla(0, 0%, 65%, 1)` | Secondary text color |
| Davys Grey | `--davys-grey` | `hsla(30, 3%, 34%, 1)` | Strikethrough text |

### Transparency Variants

| Color Name | CSS Variable | Value | Usage |
|------------|--------------|-------|-------|
| White Alpha 20 | `--white-alpha-20` | `hsla(0, 0%, 100%, 0.2)` | Subtle white overlays |
| White Alpha 10 | `--white-alpha-10` | `hsla(0, 0%, 100%, 0.1)` | Very subtle white overlays |
| Black Alpha 80 | `--black-alpha-80` | `hsla(0, 0%, 0%, 0.8)` | Dark overlay (nav menu) |
| Black Alpha 15 | `--black-alpha-15` | `hsla(0, 0%, 0%, 0.15)` | Header border |

### Gradients

```css
/* Loading Text Gradient */
linear-gradient(90deg, transparent 0% 16.66%, var(--smoky-black-3) 33.33% 50%, transparent 66.66% 75%)

/* Event Card Overlay */
linear-gradient(to top, hsla(0, 0%, 0%, 0.9), hsla(0, 0%, 0%, 0.7), transparent)
```

---

## 2. Typography

### Font Families

| Purpose | Font Family | Style |
|---------|-------------|-------|
| Display/Headings | `'Forum', cursive` | Elegant serif for large headings and display text |
| Body Text | `'DM Sans', sans-serif` | Clean sans-serif for body text and UI |

### Font Sizes (Responsive with Viewport Units)

| CSS Variable | Size | Usage |
|--------------|------|-------|
| `--fs-display-1` | `calc(1.3rem + 6.7vw)` | Hero title (largest) |
| `--fs-headline-1` | `calc(2rem + 2.5vw)` | Major section titles |
| `--fs-headline-2` | `calc(1.3rem + 2.4vw)` | Secondary headings |
| `--fs-title-1` | `calc(1.6rem + 1.2vw)` | Card titles |
| `--fs-title-2` | `2.2rem` | Menu item titles |
| `--fs-title-3` | `2.1rem` | Menu card titles |
| `--fs-title-4` | `calc(1.6rem + 1.2vw)` | Smaller titles |
| `--fs-body-1` | `2.4rem` | Large contact numbers |
| `--fs-body-2` | `1.6rem` / `2rem` (575px+) | Main body text |
| `--fs-body-3` | `1.8rem` | Secondary body |
| `--fs-body-4` | `1.6rem` | Standard body text |
| `--fs-label-1` | `1.4rem` | Small labels |
| `--fs-label-2` | `1.2rem` | Extra small labels |

### Font Weights

| CSS Variable | Value | Usage |
|--------------|-------|-------|
| `--fw-400` | `400` | Regular - Default text weight |
| `--fw-700` | `700` | Bold - Emphasis, headings, buttons |

### Line Heights

| CSS Variable | Value | Usage |
|--------------|-------|-------|
| `--lh-1` | `1em` | Display/hero titles |
| `--lh-2` | `1.2em` | Headings (Forum family) |
| `--lh-3` | `1.5em` | Body text, comfortable reading |
| `--lh-4` | `1.6em` | Body text variant |
| `--lh-5` | `1.85em` | Default body line height |
| `--lh-6` | `1.4em` | Compact heading height |

### Letter Spacing

| CSS Variable | Value | Usage |
|--------------|-------|-------|
| `--ls-1` | `0.15em` | Hero button text |
| `--ls-2` | `0.4em` | Section subtitles (uppercase) |
| `--ls-3` | `0.2em` | Button labels |
| `--ls-4` | `0.3em` | Footer links |
| `--ls-5` | `3px` | Button labels |

### Typography Classes

```css
/* Headings */
.display-1    /* Hero titles - Forum font */
.headline-1   /* Major section titles */
.headline-2   /* Secondary headings */
.title-1      /* Card titles */
.title-2      /* Menu item titles */
.title-3      /* Menu card titles */
.title-4      /* Smaller titles */

/* Body */
.body-1       /* Large contact numbers */
.body-2       /* Main body text */
.body-3       /* Secondary body */
.body-4       /* Standard body text */

/* Labels */
.label-1      /* Small labels */
.label-2      /* Extra small labels */

/* Special */
.section-subtitle   /* Uppercase gold subtitle with letter-spacing */
.contact-label      /* Contact section labels */
.contact-number     /* Large contact numbers */
```

---

## 3. Spacing System

### Section Spacing

| CSS Variable | Default | Large Screens (992px+) |
|--------------|---------|------------------------|
| `--section-space` | `70px` | `100px` |

Applied via: `padding-block: var(--section-space);` on `.section` class

### Common Spacing Values

| Category | Values |
|----------|--------|
| Extra Small | `5px`, `6px`, `8px` |
| Small | `10px`, `12px`, `15px`, `16px` |
| Medium | `20px`, `30px`, `40px` |
| Large | `50px`, `60px`, `70px`, `80px`, `90px` |
| Extra Large | `100px`, `120px`, `150px` |

### Container

```css
.container {
  padding-inline: 16px;  /* Default */
  padding-inline: 20px;  /* Desktop */
  max-width: 1200px;     /* Large screens */
  margin-inline: auto;
}
```

### Grid Gap Values

| Context | Gap Value |
|---------|-----------|
| Grid List | `40px` |
| Service/Event | `40px` default, `150px` (1200px+) |
| Menu Grid | `55px` vertical, `200px` horizontal (1200px+) |
| Footer Lists | `20px` |

---

## 4. Animations & Transitions

### Transition Durations (CSS Variables)

| CSS Variable | Value | Usage |
|--------------|-------|-------|
| `--transition-1` | `250ms ease` | Quick state changes |
| `--transition-2` | `500ms ease` | Standard transitions |
| `--transition-3` | `1000ms ease` | Slider transitions, shine effect |

### Keyframe Animations

#### rotate360
```css
@keyframes rotate360 {
  0% { transform: rotate(0); }
  100% { transform: rotate(1turn); }
}
/* Usage: animation: rotate360 15s linear infinite; */
/* Applied to: badges, separators */
```

#### smoothScale (Ken Burns Effect)
```css
@keyframes smoothScale {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}
/* Usage: animation: smoothScale 7s linear forwards; */
/* Applied to: hero background images */
```

#### sliderReveal
```css
@keyframes sliderReveal {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
/* Usage: animation: sliderReveal 1s ease forwards; */
/* Applied to: hero slide content with staggered delays */
```

#### loadingText
```css
@keyframes loadingText {
  0% { background-position: 100%; }
  100% { background-position: 0%; }
}
/* Usage: animation: loadingText 2s linear infinite; */
/* Applied to: preloader text */
```

#### move (Floating Animation)
```css
@keyframes move {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(30px); }
}
/* Usage: animation: move 5s linear infinite; */
/* Applied to: decorative floating shapes */
```

#### menuBtn
```css
@keyframes menuBtn {
  0% { transform: scaleX(1); }
  100% { transform: scaleX(0.5); }
}
/* Usage: animation: menuBtn 400ms ease-in-out alternate infinite; */
/* Applied to: hamburger menu lines with staggered delays */
```

### Hover Effects

#### 1. Link Underline (`.hover-underline`)
```css
.hover-underline::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-block: 1px solid var(--gold-crayola);
  transform: scaleX(0.2);
  opacity: 0;
  transition: var(--transition-2);
}

.hover-underline:is(:hover, :focus-visible)::after {
  transform: scaleX(1);
  opacity: 1;
}
```

#### 2. Shine Effect (`.hover\:shine`)
```css
.hover\:shine::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent 0%, #fff6 100%);
  transform: skewX(-0.08turn) translateX(-180%);
  transition: var(--transition-3);
}

.hover\:shine:is(:hover, :focus)::after {
  transform: skewX(-0.08turn) translateX(275%);
}
```

#### 3. Button Background Animation
```css
.btn::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 200%;
  height: 200%;
  border-radius: var(--radius-circle);
  background-color: var(--gold-crayola);
  transition: var(--transition-2);
  z-index: -1;
}

.btn:is(:hover, :focus-visible)::after {
  bottom: -50%;
}
```

#### 4. Card Image Hover
```css
.card:is(:hover, :focus-visible) .img-cover {
  transform: scale(1.05);
  opacity: 0.7;
}
```

#### 5. Icon Flip
```css
.feature-card:is(:hover, :focus-visible) .card-icon {
  transform: scale(-1) rotate(180deg);
}
```

### Scroll Effects

- **Back-to-top button**: Fades in when scrolled past threshold
- **Header hide/show**: Header hides on scroll down, shows on scroll up
- **Parallax**: About section images move with mouse position

---

## 5. Layout Patterns

### Responsive Breakpoints

| Breakpoint | Min-Width | Purpose |
|------------|-----------|---------|
| Mobile | Default | Mobile-first base styles |
| Tablet Small | `575px` | Topbar displays, button layouts |
| Tablet | `768px` | 2-column grids |
| Desktop | `992px` | 3-column grids, full topbar |
| Large Desktop | `1200px` | Max container width, 4-column |
| Extra Large | `1400px` | Navbar centering adjustments |

### Grid Patterns

```css
/* Base Grid */
.grid-list {
  display: grid;
  gap: 40px;
}

/* 2-Column (768px+) */
@media (min-width: 768px) {
  .grid-list {
    grid-template-columns: 1fr 1fr;
  }
}

/* 3-Column (992px+) */
@media (min-width: 992px) {
  .grid-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 4-Column (1200px+) */
@media (min-width: 1200px) {
  .grid-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Footer Grid (992px+) */
.footer-top {
  grid-template-columns: 0.45fr 1fr 0.45fr;
}
```

### Flexbox Patterns

```css
/* Header Layout */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Centered Content */
.centered {
  display: grid;
  place-content: center;
}

/* Space Between */
.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Fixed Elements Z-Index Scale

| Element | Z-Index |
|---------|---------|
| Preloader | `10` |
| Header | `4` |
| Navbar (Mobile) | `2` |
| Overlay | `1` |

### Container Sizing

```css
/* Default Mobile */
.container {
  padding-inline: 16px;
}

/* Service/Event Container (575px+) */
.service .container,
.event .container {
  max-width: 420px;
  margin-inline: auto;
}

/* Service/Event Container (768px+) */
.service .container,
.event .container {
  max-width: 820px;
}

/* Main Container (1200px+) */
.container {
  max-width: 1200px;
}
```

---

## 6. Component Styles

### Buttons

#### Primary Button (`.btn-primary`)
```css
.btn-primary {
  color: var(--gold-crayola);
  border: 2px solid var(--gold-crayola);
  padding: 12px 45px;
  font-size: var(--fs-label-2);
  font-weight: var(--fw-700);
  text-transform: uppercase;
  letter-spacing: 3px;
  /* Background animation on hover - see Animations section */
}
```

#### Secondary Button (`.btn-secondary`)
```css
.btn-secondary {
  background-color: var(--gold-crayola);
  color: var(--black);
  border: 2px solid var(--gold-crayola);
  /* Dark background animates in on hover */
}
```

### Form Inputs

```css
.input-field {
  background-color: var(--eerie-black-2);
  color: var(--white);
  height: 56px;
  padding: 10px 20px;
  border: 1px solid var(--white-alpha-10);
  border-radius: var(--radius-24);
  transition: border-color var(--transition-2);
}

.input-field:focus {
  border-color: var(--gold-crayola);
}
```

### Icon Wrapper (Select/Input with Icon)
```css
.icon-wrapper {
  position: relative;
}

.icon-wrapper ion-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* Left or right positioning */
}
```

### Navigation

#### Header
```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding-block: 40px;
  transition: var(--transition-2);
  z-index: 4;
}

.header.active {
  background-color: var(--eerie-black-4);
  padding-block: 20px;
  border-block-end: 1px solid var(--black-alpha-15);
}

.header.hide {
  transform: translateY(-100%);
}
```

#### Mobile Navbar
```css
.navbar {
  position: fixed;
  top: 0;
  left: -360px;
  width: 360px;
  height: 100vh;
  background-color: var(--smoky-black-1);
  padding: 30px;
  z-index: 2;
  transition: var(--transition-2);
}

.navbar.active {
  transform: translateX(360px);
}
```

#### Nav Link Styling
```css
.navbar-link {
  font-size: var(--fs-label-2);
  text-transform: uppercase;
  padding-block: 10px;
  border-block: 1px solid var(--white-alpha-20);
}

.navbar-link:is(:hover, :focus-visible) .span {
  color: var(--gold-crayola);
  transform: translateX(20px);
}

/* Separator diamond appears on hover */
.navbar-link .separator {
  opacity: 0;
  transition: opacity var(--transition-2);
}

.navbar-link:is(:hover, :focus-visible) .separator {
  opacity: 1;
}
```

### Cards

#### Service Card
```css
.service-card {
  overflow: hidden;
  position: relative;
}

/* Pattern background flip on hover */
.service-card .has-before::before {
  transition: transform var(--transition-2);
}

.service-card:is(:hover, :focus-within) .has-before::before {
  transform: rotateY(0.5turn) translateX(50%);
}

/* Image scale on hover */
.service-card:is(:hover, :focus-within) .img-cover {
  transform: scale(1.05);
}
```

#### Menu Card
```css
.menu-card {
  display: flex;
  gap: 20px;
}

.menu-card .badge {
  background-color: var(--gold-crayola);
  font-family: var(--ff-forum);
  padding: 5px 10px;
  border-radius: var(--radius-24);
}

.menu-card .price {
  color: var(--gold-crayola);
  font-family: var(--ff-forum);
}
```

#### Event Card
```css
.event-card {
  position: relative;
  overflow: hidden;
}

/* Gradient overlay */
.event-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--gradient-1);
  z-index: 1;
}

/* Publish date positioning */
.event-card .publish-date {
  position: absolute;
  top: 30px;
  left: 25px;
  z-index: 2;
  background-color: var(--black);
  color: var(--gold-crayola);
  padding: 5px 10px;
}
```

#### Feature Card
```css
.feature-card {
  padding: 30px 20px 40px;
}

/* Alternating backgrounds */
.feature-card:nth-child(odd) {
  background-color: var(--eerie-black-3);
}

.feature-card:nth-child(even) {
  background-color: var(--smoky-black-3);
}

/* Icon flip on hover */
.feature-card:is(:hover, :focus-visible) .card-icon {
  transform: scale(-1) rotate(180deg);
}
```

### Hero Section

```css
.hero {
  position: relative;
  min-height: 100vh;
  padding-block: 120px;
}

.hero-slider-item {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-3), visibility var(--transition-3);
}

.hero-slider-item.active {
  opacity: 1;
  visibility: visible;
}

/* Staggered reveal delays */
.hero-slider-item.active .hero-subtitle { animation-delay: 500ms; }
.hero-slider-item.active .hero-title { animation-delay: 1000ms; }
.hero-slider-item.active .hero-text { animation-delay: 1.5s; }
.hero-slider-item.active .btn { animation-delay: 2s; }
```

### Forms

```css
/* Reservation form negative offset */
.reservation-form {
  margin-block-start: -270px;
}

/* Input wrapper grid */
.input-wrapper {
  display: grid;
  gap: 20px;
}

@media (min-width: 575px) {
  .input-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

/* Time selector 3-column grid */
@media (min-width: 768px) {
  .input-wrapper.time-selector {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 7. Decorative Elements

### Border Radius

| CSS Variable | Value | Usage |
|--------------|-------|-------|
| `--radius-24` | `24px` | Cards, input fields, images |
| `--radius-circle` | `50%` | Circular elements, buttons, profile images |

### Shadows

```css
--shadow-1: 0px 0px 25px 0px hsla(0, 0%, 0%, 0.25);
/* Applied to: back-to-top button, general depth */
```

### Borders

```css
/* Separator Diamond */
.separator {
  width: 8px;
  height: 8px;
  border: 1px solid var(--gold-crayola);
  transform: rotate(45deg);
}

/* Input Fields */
border: 1px solid var(--white-alpha-10);
/* Focus state */
border-color: var(--gold-crayola);

/* Navbar Items */
border-block: 1px solid var(--white-alpha-20);
```

### Overlays

```css
/* Nav Overlay */
.overlay {
  position: fixed;
  inset: 0;
  background-color: var(--black-alpha-80);
  opacity: 0;
  pointer-events: none;
  transition: var(--transition-2);
  z-index: 1;
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}

/* Event Card Gradient Overlay */
background: linear-gradient(to top,
  hsla(0, 0%, 0%, 0.9),
  hsla(0, 0%, 0%, 0.7),
  transparent
);
```

### Separators

```css
/* Section separator with SVG */
.section-divider {
  /* Uses separator SVG as background */
  background-repeat: no-repeat;
  background-position: center;
}
```

---

## 8. Image Handling

### Aspect Ratio Pattern

```html
<div class="img-holder" style="--width: 285; --height: 336;">
  <img src="image.jpg"
       width="285"
       height="336"
       alt="Description"
       class="img-cover"
       loading="lazy">
</div>
```

```css
.img-holder {
  aspect-ratio: var(--width) / var(--height);
  background-color: var(--eerie-black-4);
  overflow: hidden;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Common Aspect Ratios Used

| Width | Height | Usage |
|-------|--------|-------|
| 285 | 336 | Service cards |
| 350 | 450 | Menu cards |
| 400 | 300 | Event cards |
| 580 | 400 | About section |

### Performance Best Practices

```html
<!-- Lazy loading for below-fold images -->
<img loading="lazy" src="image.jpg" alt="Description">

<!-- Preload critical images in <head> -->
<link rel="preload" as="image" href="./assets/images/hero-slider-1.jpg">
```

### Background Images

```css
/* Hero Background */
.hero-slider-item {
  background-position: center;
  background-size: cover;
}

/* Testimonial Section */
.testi {
  background-image: url('../images/testimonial-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## 9. Data Attributes (JavaScript Hooks)

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `data-preload` | `.preloader` | Preloader element reference |
| `data-header` | `.header` | Header for scroll behavior |
| `data-navbar` | `.navbar` | Mobile navigation menu |
| `data-nav-toggler` | `.nav-toggle-btn` | Menu toggle buttons |
| `data-overlay` | `.overlay` | Dark overlay element |
| `data-back-top-btn` | `.back-top-btn` | Back to top button |
| `data-hero-slider` | `.hero-slider` | Hero slider container |
| `data-hero-slider-item` | `.hero-slider-item` | Individual slider items |
| `data-prev-btn` | `.slider-btn.prev` | Previous slide button |
| `data-next-btn` | `.slider-btn.next` | Next slide button |
| `data-parallax-item` | `.shape` | Parallax elements |
| `data-parallax-speed` | `.shape` | Parallax speed value (number) |

---

## 10. Third-Party Dependencies

### Google Fonts

```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap" rel="stylesheet">
```

### Ionicons (v5.5.2)

```html
<!-- Before closing </body> -->
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
```

#### Commonly Used Icons

| Icon Name | Usage |
|-----------|-------|
| `location-outline` | Address/location |
| `time-outline` | Time/hours |
| `call-outline` | Phone |
| `mail-outline` | Email |
| `close-outline` | Close button |
| `person-outline` | User/person |
| `calendar-clear-outline` | Date picker |
| `chevron-down` | Dropdown |
| `chevron-up` | Collapse |
| `chevron-back` | Previous |
| `chevron-forward` | Next |

```html
<!-- Usage example -->
<ion-icon name="location-outline" aria-hidden="true"></ion-icon>
```

---

## 11. New Page Checklist

Use this checklist when creating a new page to ensure design consistency:

### HTML Structure

- [ ] Include preloader markup with `data-preload` attribute
- [ ] Include complete header/topbar structure
- [ ] Include complete footer structure
- [ ] Add preloader removal script or ensure `loaded` class handling
- [ ] Use semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, etc.)

### CSS Integration

- [ ] Link to main `style.css` file
- [ ] Use existing CSS variables for all colors
- [ ] Apply `70px`/`100px` section spacing (`--section-space`)
- [ ] Use `.container` class for max-width containment
- [ ] Apply `.section` class for consistent padding
- [ ] Follow mobile-first responsive approach

### Typography

- [ ] Use `Forum` font for all headings
- [ ] Use `DM Sans` for all body text
- [ ] Apply appropriate typography classes (`.headline-1`, `.body-2`, etc.)
- [ ] Maintain consistent letter-spacing for uppercase text

### Components

- [ ] Reuse existing button styles (`.btn-primary`, `.btn-secondary`)
- [ ] Follow card patterns with hover effects
- [ ] Use `.img-holder` pattern for all images
- [ ] Apply hover effects (`.hover-underline`, `.hover:shine`)

### Responsiveness

- [ ] Test at 575px breakpoint
- [ ] Test at 768px breakpoint
- [ ] Test at 992px breakpoint
- [ ] Test at 1200px breakpoint
- [ ] Test at 1400px breakpoint
- [ ] Verify grid layouts collapse correctly

### Animations

- [ ] Use CSS variables for transition durations
- [ ] Apply consistent hover effects
- [ ] Include shine effect on appropriate images
- [ ] Maintain 500ms as default transition time

### JavaScript

- [ ] Add appropriate `data-*` attributes for interactive elements
- [ ] Include parallax elements if using floating shapes
- [ ] Ensure scroll behaviors function correctly
- [ ] Test mobile navigation toggle

### Accessibility

- [ ] Include proper `alt` text for all images
- [ ] Use `aria-hidden="true"` on decorative icons
- [ ] Ensure focus states are visible
- [ ] Maintain color contrast ratios
- [ ] Use semantic heading hierarchy (h1 → h2 → h3)

### Performance

- [ ] Add `loading="lazy"` to below-fold images
- [ ] Preload critical above-fold images
- [ ] Optimize image file sizes
- [ ] Minimize additional CSS/JS files

---

## Quick Reference: CSS Variables

```css
:root {
  /* Colors */
  --gold-crayola: hsl(38, 61%, 73%);
  --smoky-black-1: hsla(40, 12%, 5%, 1);
  --eerie-black-1: hsla(210, 4%, 9%, 1);
  --eerie-black-2: hsla(210, 4%, 11%, 1);
  --white: hsla(0, 0%, 100%, 1);
  --white-alpha-20: hsla(0, 0%, 100%, 0.2);
  --white-alpha-10: hsla(0, 0%, 100%, 0.1);

  /* Typography */
  --ff-forum: 'Forum', cursive;
  --ff-dm-sans: 'DM Sans', sans-serif;
  --fw-400: 400;
  --fw-700: 700;

  /* Spacing */
  --section-space: 70px;

  /* Border Radius */
  --radius-24: 24px;
  --radius-circle: 50%;

  /* Shadows */
  --shadow-1: 0px 0px 25px 0px hsla(0, 0%, 0%, 0.25);

  /* Transitions */
  --transition-1: 250ms ease;
  --transition-2: 500ms ease;
  --transition-3: 1000ms ease;
}
```

---

*This design system guide was generated for the Grilli Restaurant Website project.*
