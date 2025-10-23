-- Add organization_type column to waitlist table
ALTER TABLE waitlist
ADD COLUMN IF NOT EXISTS organization_type TEXT;

-- Make company column NOT NULL if it isn't already
ALTER TABLE waitlist
ALTER COLUMN company SET NOT NULL;
