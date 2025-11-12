# Tuus Imago

A React-based web application for image processing and checkout flow, built with TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- Node.js (version 18 or higher)
- pnpm (package manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd au-checkout
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Development

Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`.

## Building

Build the application for production:
```bash
pnpm build
```

The built files will be in the `dist` directory.

## Preview

Preview the production build locally:
```bash
pnpm preview
```

## Linting

Run ESLint to check for code issues:
```bash
pnpm lint
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the build configuration:

- Build command: `pnpm build`
- Publish directory: `dist`
- SPA fallback: All routes redirect to `index.html` for client-side routing

To deploy:
1. Connect your repository to Netlify
2. Set the build settings according to `netlify.toml`
3. Deploy

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI, Lucide Icons
- **File Uploads**: Uppy with Transloadit and Uploadcare
- **Deployment**: Netlify
