-- Add phone column to waitlist table
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS phone TEXT;
