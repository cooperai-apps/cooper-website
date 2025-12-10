# Cooper AI Website Setup

This is a static Next.js marketing site for Cooper AI.

## Prerequisites

- Node.js 18+ installed

## Local Development

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

Build the static site:
```bash
npm run build
```

This outputs static files to the `/out` directory.

## Deploy

### Option 1: Vercel (Recommended)

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com) and sign up/login

3. Click "Add New Project"

4. Import your GitHub repository

5. Click "Deploy" - no configuration needed

### Option 2: Any Static Hosting

After running `npm run build`, deploy the `/out` directory to any static hosting provider (Netlify, GitHub Pages, Cloudflare Pages, S3, etc.).

## Customization

- Edit content in `app/page.tsx`
- Modify styles in `app/globals.css`
- Update landing page sections in `components/landing/`
- Change branding/logo in `components/cooper-logo.tsx`
