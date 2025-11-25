# Design System

## 1. Colors

### Philosopher Side (Strategy / Left)
| Token Name | Value | Usage |
|---|---|---|
| `philosopher-bg` | `#F2F0E9` | Main background for strategy sections (Paper-like) |
| `philosopher-text` | `neutral-900` | Primary text |
| `philosopher-accent` | `orange-600` | Primary accent (Icons, Links, Highlights) |
| `philosopher-accent-secondary` | `orange-500` | Secondary accent |
| `philosopher-highlight` | `orange-100` | Text highlight background |
| `philosopher-texture` | `url('patterns/paper.png')` | Background texture overlay |

### Builder Side (Execution / Right)
| Token Name | Value | Usage |
|---|---|---|
| `builder-bg` | `#0a0a0a` | Main background for execution sections |
| `builder-card-bg` | `#0f1110` | Card background |
| `builder-code-bg` | `#050505` | Code block background |
| `builder-text` | `white` | Primary text |
| `builder-accent` | `green-500` | Primary accent (Neon Green) |
| `builder-accent-dim` | `green-400` | Dimmed accent for text |
| `builder-accent-dark` | `green-900` | Dark accent for backgrounds/borders |
| `builder-texture` | `radial-gradient(#22c55e)` | Background texture overlay |

### Shared / Neutral
| Token Name | Value | Usage |
|---|---|---|
| `neutral-bg` | `bg-stone-100` | Page background |
| `neutral-text-primary` | `neutral-900` | Primary text |
| `neutral-text-secondary` | `neutral-600` | Secondary text |
| `neutral-text-tertiary` | `neutral-400` | Tertiary text / Icons |
| `selection-bg` | `bg-orange-500` | Text selection background |
| `selection-text` | `text-white` | Text selection color |

## 2. Typography

### Font Families
| Token | Font Family | Usage |
|---|---|---|
| `font-serif` | *Default Serif / Custom* | Headings, Quotes, "Philosopher" content |
| `font-mono` | `Geist Mono` | Code, Stats, "Builder" content, Tags |
| `font-sans` | `Geist Sans` | Body text, UI elements |

### Font Sizes
| Token | Size | Usage |
|---|---|---|
| `text-7xl` / `text-9xl` | `4.5rem` / `8rem` | Hero Headings |
| `text-5xl` / `text-8xl` | `3rem` / `6rem` | Section Headings (Selected Works) |
| `text-4xl` / `text-5xl` | `2.25rem` / `3rem` | Section Titles |
| `text-3xl` | `1.875rem` | Card Titles |
| `text-xl` / `text-2xl` | `1.25rem` / `1.5rem` | Subtitles, Large Body |
| `text-lg` | `1.125rem` | Body Text |
| `text-sm` | `0.875rem` | Meta info, Links |
| `text-xs` | `0.75rem` | Labels, Badges |
| `text-[10px]` | `10px` | Tiny Labels, Tracking text |

### Font Weights
| Token | Weight | Usage |
|---|---|---|
| `font-black` | `900` | Hero Name |
| `font-bold` | `700` | Headings, Buttons, Strong text |
| `font-medium` | `500` | Hero Title |

## 3. Spacing

### Padding
| Token | Usage |
|---|---|
| `py-32` / `pt-32` | Section vertical padding (Large) |
| `py-24` / `pt-24` | Section vertical padding (Medium) |
| `p-8` / `p-16` | Container padding (Responsive) |
| `p-8` / `p-10` | Card padding |

### Gap
| Token | Usage |
|---|---|
| `gap-12` | Large layout gap (Columns) |
| `gap-8` | Medium layout gap |
| `gap-6` | Component gap |
| `gap-4` | Small component gap |

## 4. Tailwind Configuration (v4 CSS Variables)

Add these to your `app/globals.css` under `@theme inline` or `:root`:

```css
@theme inline {
  /* Colors */
  --color-philosopher-bg: #F2F0E9;
  --color-philosopher-accent: var(--color-orange-600);
  
  --color-builder-bg: #0a0a0a;
  --color-builder-card: #0f1110;
  --color-builder-accent: var(--color-green-500);

  /* Spacing (if needed custom) */
  /* --spacing-128: 32rem; */
}

/* Custom Utilities */
.bg-paper {
  background-image: url('https://www.transparenttextures.com/patterns/paper.png');
}

.bg-grid-pattern {
  background-image: linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px);
  background-size: 40px 40px;
}
```

## 5. Components

### Buttons & Links
*   **Text Link (Philosopher):** `hover:text-orange-600 transition-colors`
*   **Text Link (Builder):** `hover:text-green-400 hover:underline decoration-green-500/50 underline-offset-4`
*   **Primary Button (Orange):** `px-6 py-3 bg-orange-600 text-white rounded font-bold text-sm hover:bg-orange-700 shadow-lg`
*   **Secondary Button (Outline):** `px-6 py-3 border-2 border-orange-600 text-orange-600 rounded font-bold text-sm hover:bg-orange-50`

### Badges
*   **Execution Badge:** `bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200 font-mono text-xs font-bold`
*   **Discovery Badge:** `bg-blue-100 text-blue-600 px-3 py-1 rounded-full border border-blue-200 font-mono text-xs font-bold`
*   **Strategy Badge:** `bg-purple-100 text-purple-600 px-3 py-1 rounded-full border border-purple-200 font-mono text-xs font-bold`
*   **Tech Tag:** `text-xs font-mono text-neutral-600 bg-neutral-800 px-2 py-1 rounded`

### Cards
*   **Deep Dive Card (Left):** `border-b border-neutral-300 pb-6 hover:pl-4 transition-all duration-300`
*   **Deep Dive Card (Right):** `bg-neutral-900/50 border border-green-900/30 p-6 hover:border-green-500 transition-all duration-300`
