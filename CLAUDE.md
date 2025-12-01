# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cooper Website is a Next.js 16 marketing site for Cooper, an AI-powered insurance assistant product. It features a landing page with demo request form that stores submissions in Supabase.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

Note: Use `npm install --legacy-peer-deps` for installing dependencies (required due to peer dependency conflicts).

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router (React 19)
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Backend**: Supabase for waitlist/demo request storage
- **Deployment**: Vercel

### Project Structure
- `app/` - Next.js App Router pages and server actions
  - `page.tsx` - Main landing page (client component with scroll effects)
  - `actions.ts` - Server action for Supabase waitlist insertion
  - `privacy/`, `terms/` - Legal pages
- `components/` - React components
  - `ui/` - shadcn/ui primitives (Button, Input, Tabs, etc.)
  - `cooper-logo.tsx` - Brand logo component
  - `waitlist-form.tsx` - Demo request form with work email validation
- `lib/utils.ts` - Utility functions (`cn` for class merging)
- `scripts/` - SQL migration scripts for Supabase waitlist table

### Key Patterns
- Server actions in `app/actions.ts` handle form submissions to Supabase
- Work email validation in `waitlist-form.tsx` blocks free email providers (gmail, yahoo, etc.)
- Path aliases: `@/` maps to project root (e.g., `@/components`, `@/lib`)

### Environment Variables
Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (server-side only)

### Database Schema
The `waitlist` table stores demo requests with: id, email (unique), name, company, phone, organization_type, preferred_date, preferred_time, created_at. See `scripts/` for migration SQL.
