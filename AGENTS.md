# AGENTS.md - Portfolio Project

## Tech Stack
- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Vitest

## Commands
```bash
npm run dev      # Start dev server
npm run build   # Production build
npm run lint    # Run ESLint
npm run test    # Run Vitest
npm run preview # Preview production build
```

## Conventions
- Use functional components with Hooks
- Tailwind utility classes for styling (avoid custom CSS unless necessary)
- Place components in `src/components/`
- Place pages in `src/pages/`
- Tests colocated with components as `*.test.tsx` or `*.spec.tsx`
- Use TypeScript - no plain JS files

## Project Structure
```
src/
  components/   # Reusable UI components
  pages/        # Route components
  hooks/        # Custom hooks
  lib/          # Utilities and helpers
  assets/       # Static assets
```