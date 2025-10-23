# Cooper AI Website Setup

This is a Next.js application for an insurance AI landing page with a waitlist form.

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier is fine)

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in:
   - Project name: `cooper-website` (or your choice)
   - Database password: (save this somewhere safe)
   - Region: Choose closest to your users
4. Wait for the project to be created (~2 minutes)

### 2. Create the Waitlist Table

1. In your Supabase project, go to the **SQL Editor** (left sidebar)
2. Click "New Query"
3. Copy and paste the SQL from `scripts/001_create_waitlist_table.sql`
4. Click "Run" or press Cmd/Ctrl + Enter
5. Repeat for `scripts/002_add_organization_type_to_waitlist.sql`
6. Repeat for `scripts/003_add_phone_to_waitlist.sql`

Or run this combined SQL:

```sql
-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  organization_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for the form)
CREATE POLICY "Enable insert for all users" ON public.waitlist
  FOR INSERT WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist(email);
```

### 3. Get Your API Credentials

1. In Supabase, go to **Project Settings** (gear icon in left sidebar)
2. Click **API** in the left menu
3. Copy these two values:
   - **Project URL** (under "Project URL")
   - **service_role key** (under "Project API keys" - click "Reveal" to see it)

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

**Important:** Never commit `.env.local` to git (it's already in .gitignore)

## Local Development

1. Install dependencies (already done):
   ```bash
   npm install --legacy-peer-deps
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Test the waitlist form - submissions should appear in your Supabase database!

## Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name? `cooper-website` (or your choice)
   - In which directory is your code located? `./`
   - Want to override settings? **N**

4. Add environment variables:
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add SUPABASE_SERVICE_ROLE_KEY
   ```
   - For each, select "Production", "Preview", and "Development"
   - Paste the values from your `.env.local`

5. Redeploy to use the new environment variables:
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub (create a new repository)

2. Go to [Vercel](https://vercel.com) and sign up/login

3. Click "Add New Project"

4. Import your GitHub repository

5. Configure:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Environment Variables:
     - Add `NEXT_PUBLIC_SUPABASE_URL` with your Supabase URL
     - Add `SUPABASE_SERVICE_ROLE_KEY` with your service role key

6. Click "Deploy"

## Viewing Waitlist Submissions

You can view all waitlist submissions in Supabase:

1. Go to your Supabase project
2. Click **Table Editor** in the left sidebar
3. Select the `waitlist` table
4. You'll see all submissions with name, email, company, phone, and organization type

You can also:
- Export to CSV
- Set up email notifications when new rows are added
- Connect to other tools via Supabase webhooks

## Customization

- Edit content in `app/page.tsx`
- Modify styles in `app/globals.css`
- Update form fields in `components/waitlist-form.tsx`
- Change branding/logo in `components/cooper-logo.tsx`

## Troubleshooting

### Form submissions not working
- Check that environment variables are set correctly
- Verify the Supabase table was created successfully
- Check browser console for errors

### Build fails on Vercel
- Make sure you're using `npm install --legacy-peer-deps` or add a `.npmrc` file
- Verify all environment variables are set in Vercel

### Styling looks wrong
- Clear your browser cache
- Check that Tailwind is configured correctly in `postcss.config.mjs`
