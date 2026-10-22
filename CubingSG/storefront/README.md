# CUBINGSG — Storefront

Live build of the hybrid storefront architecture: **TheCubicle** (base layout) + **DailyPuzzles** (horizontal mega menu) + **SpeedCubeShop** (Cube Finder & Parent's Guide).

Open `index.html` directly in a browser. No build step, no dependencies, no server required.

---

## Files

```
CubingSG/
├── STOREFRONT_ARCHITECTURE_SPEC.md      Design tokens + component blueprint
├── README.md                            This file
├── assets/logo/CubingSG Logo.png        Original master logo (source of truth)
└── storefront/                           The build
    ├── index.html                        Homepage
    ├── cube-finder.html                  Dedicated Cube Finder page
    ├── parents-guide.html                Parent's Guide hub
    ├── build_logo.py                     Logo processing script (rerun if master changes)
    ├── assets/
    │   ├── logo-nav.png                  250×144 transparent — header/footer
    │   ├── logo-full.png                 Full transparent mark — hero
    │   └── og-image.png                  1200×630 social card
    ├── css/
    │   ├── core.css                      Tokens, header, nav, mega menu, buttons
    │   ├── catalog.css                   Hero, product grid, brands, trust, footer
    │   ├── cubefinder.css                Finder wizard + result layout
    │   └── parents.css                   Longform prose, callouts, tables, FAQ
    └── js/
        ├── icons.js                      SVG sprite — 9 event glyphs, 4 feature cards, UI icons
        ├── data.js                       17-product catalog + finder question set
        ├── site.js                       Mega menu, predictive search, cart, FAQ, grid render
        └── cubefinder.js                 Finder scoring engine + wizard state
```

---

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#080c24` | Page background |
| `--card` | `#0d133d` | Tile / card background |
| `--line` | `#1e275e` | Borders |
| `--green` | `#39e75f` | Icons, headings, primary CTA |
| `--red` | `#ee2737` | Sale flags, brand accent |
| `--r-lg` | `22px` | Tile radius |

All colours are declared once in `css/core.css` under `:root`. Changing them there propagates everywhere.

---

## 1. Mega Menu (DailyPuzzles benchmark)

Hover or click **Cubes & Puzzles** in the nav. Two-column layout:

- **Left** — 3×3 grid of 9 event tiles. Each is a navy card with a neon-green SVG glyph and a white pill label.
- **Right** — 2×2 grid of 4 feature cards with an isometric wireframe watermark and a `GO ▶▶▶` link.

| Glyph ID | Tile | Glyph ID | Feature card |
|---|---|---|---|
| `i-all` | All Puzzles | `f-all` | All Products |
| `i-2x2` | 2x2 | `f-best` | Best Sellers |
| `i-3x3` | 3x3 | `f-new` | New! |
| `i-4x4` | 4x4 | `f-acc` | Accessories & Lifestyle |
| `i-pyraminx` | Pyraminx | `wm-cube` | shared watermark |
| `i-skewb` | Skewb | | |
| `i-megaminx` | Megaminx | | |
| `i-square1` | Square-1 | | |
| `i-clock` | Clock | | |

All glyphs live in the `<defs>` block in `js/icons.js` and are mounted once per page. Edit the `<symbol>` markup to change a shape — the colour follows `currentColor`.

> **Note on the event glyphs:** the filled shapes use `fill="currentColor"` and the internal subdivision lines use a hard-coded `#0d133d` (`CARD` in `js/icons.js`) so the icons read as solid objects with cut lines. If you change `--card`, update `CARD` in `js/icons.js` to match.

---

## 2. Cube Finder (SpeedCubeShop benchmark)

Present twice: as a section on the homepage (`#finder`) and as a standalone page (`cube-finder.html`). Same engine, self-initialising on any `[data-cube-finder]` element.

**Four questions:** persona → puzzle type → budget → turning feel.

**Scoring** (`js/cubefinder.js`):

| Signal | Weight |
|---|---|
| Puzzle type match | 40 |
| Persona match | 26 |
| Budget tier (exact / ±1 / ±2) | 20 / 12 / 4 |
| Turning feel match | 14 |
| `hot` flag bonus | +2 |
| `fun` bonus when looking for specialty/event | +3 |

Also includes **6 scenario presets** (pills) and a **Surprise Me** button weighted toward the novelty shelf.

**Adding a product:** append an object to `PRODUCTS` in `js/data.js`. Required fields are `id`, `name`, `brand`, `price`, `category`, `persona[]`, `size[]`, `tier`, `feel[]`. The grid, search index, and finder all pick it up automatically.

---

## 3. Parent's Guide (SpeedCubeShop benchmark)

`parents-guide.html` — six full articles plus a six-item FAQ accordion. Anchors: `#s101`, `#tech`, `#first-cube`, `#maintenance`, `#competitions`, `#glossary`.

Content is plain HTML inside `.prose` wrappers. Callouts use `.callout`, comparison tables use `.compare`. Adding an article = one `.article` card in the index grid plus one `.prose` section.

---

## Search

`js/site.js` scores every query word against `name + brand + category + chips + blurb`, with bonuses for name-prefix and brand-prefix matches. Keyboard: ↑ ↓ to move, Enter to select, Esc to close.

---

## Cart

Currently a visual counter only. Add-to-cart anywhere dispatches:

```js
window.dispatchEvent(new CustomEvent("cubingsg:addtocart", { detail: { id, name } }));
```

Wire that to WooCommerce `wc-add-to-cart` or a real cart drawer in `site.js → bumpCart()`.

---

## Regenerating logo assets

Edit or replace `CubingSG/assets/logo/CubingSG Logo.png`, then:

```bash
py CubingSG/storefront/build_logo.py
```

Crops to content, flood-fills the background to transparent (tolerance 34, so the cube's white face survives), and writes `logo-nav.png`, `logo-full.png`, `og-image.png`.

---

## Wiring into WooCommerce / Astra Pro

This build is deliberately framework-free so the markup can be lifted directly:

| Here | Becomes |
|---|---|
| `<nav class="nav">` + `.mega` | Astra header element, or a child-theme override |
| `.tiles` / `.feats` | WooCommerce menu item mega-panel HTML |
| `[data-cube-finder]` | Shortcode or template part |
| `.prod` card | Loop item inside `woocommerce_content` |
| `.compare` tables | Plain Gutenberg custom HTML block |

The catalog in `data.js` is shaped to map straight onto WooCommerce product meta (`persona`/`size`/`tier`/`feel` as product tags or a custom taxonomy).

---

## Verified

Rendered and checked in headless Chrome at 1440px:
- Mega menu opens, all 13 glyphs render in green
- Finder completes all four steps and returns a correct match
- Search returns ranked results with prices
- FAQ accordion expands and collapses
- Longform prose, callouts and tables render correctly
- All four JS files pass `node --check`