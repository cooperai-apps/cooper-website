-- Add preferred demo date and time columns to waitlist table
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS preferred_date DATE;
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS preferred_time TEXT;
