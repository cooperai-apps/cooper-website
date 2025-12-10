# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cooper Website is a static Next.js 16 marketing site for Cooper, an AI-powered insurance assistant product.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build (outputs to /out directory)
npm run lint     # Run ESLint
```

Note: Use `npm install --legacy-peer-deps` for installing dependencies (required due to peer dependency conflicts).

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router (React 19), static export
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Deployment**: Vercel (or any static hosting)

### Project Structure
- `app/` - Next.js App Router pages
  - `page.tsx` - Main landing page (client component with scroll effects)
  - `privacy/`, `terms/` - Legal pages
- `components/` - React components
  - `ui/` - shadcn/ui primitives (Button, Input, Tabs, etc.)
  - `landing/` - Landing page section components
  - `cooper-logo.tsx` - Brand logo component
- `lib/utils.ts` - Utility functions (`cn` for class merging)

### Key Patterns
- Static export enabled via `output: "export"` in next.config.mjs
- Demo requests redirect to external Calendly link
- Path aliases: `@/` maps to project root (e.g., `@/components`, `@/lib`)
