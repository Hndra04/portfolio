# Portfolio

Personal portfolio website built with Vite + React + TypeScript + Tailwind CSS.

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Vitest
- **Container**: Docker & Docker Compose

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development with Docker

```bash
# Start dev container
docker compose up dev

# Stop containers
docker compose down
```

## Production with Docker

```bash
# Build and run production container
docker compose up prod
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests with Vitest |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
  components/   # Reusable UI components
  pages/        # Route components
  hooks/        # Custom React hooks
  lib/          # Utilities and helpers
  assets/       # Static assets
```

## License

MIT