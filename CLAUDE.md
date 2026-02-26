# CLAUDE.md

## Project Overview

**ghost-stellar** — A React + TypeScript design system component library built with Vite, showcasing Figma-integrated UI components. Deployed to GitHub Pages.

## Commands

- `npm run dev` — Start dev server (Vite HMR)
- `npm run build` — TypeScript compile + Vite production build
- `npm run lint` — Run ESLint on all .ts/.tsx files
- `npm run preview` — Preview production build locally
- `npm run deploy` — Deploy to GitHub Pages

## Project Structure

```
src/
├── main.tsx              # Entry point (renders App with StrictMode)
├── App.tsx               # Root component & showcase layout
├── App.css               # Showcase layout styles
├── index.css             # Global CSS reset & base styles
├── fonts.css             # Saans font-face definitions
├── components/
│   ├── HeroCampaign/     # Hero campaign section
│   ├── CTAButton/        # Call-to-action button
│   ├── LinkCard/         # Navigation card
│   └── Badge/            # Label/tag component
└── Avolta Saans/         # Custom font files (otf, ttf, woff)
```

## Coding Conventions

- **Components**: Each component gets its own folder with a `.tsx` and `.css` file
- **Exports**: Named exports for components and their prop interfaces (`export const Component`, `export interface ComponentProps`)
- **Component pattern**: `React.FC<Props>` with destructured props and defaults
- **CSS naming**: BEM convention — block (`cta-btn`), element (`cta-btn__icon`), modifier (`cta-btn--dark`)
- **TypeScript**: Strict mode enabled; no unused locals or parameters
- **Variants**: Use union types for props like size (`'sml' | 'med' | 'lrg'`) and map to BEM modifier classes

## Design Tokens

- **Primary color**: `#9747FF` (purple)
- **Dark backgrounds**: `#333`, `#373737`, `#191919`
- **Fonts**: Saans (headings), Inter (body)
- **Font weights**: Light (300), Regular (400), Medium (500), SemiBold (600)

## Deployment

- Base path: `/figmatest/` (configured in `vite.config.ts`)
- Target: https://jyhq2s57pk-ux.github.io/figmatest/
