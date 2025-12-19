/*
  # Add is_interested column to backpacking_trips table

  1. Changes
    - Add is_interested column with boolean type
    - Set default value to false
    - Make column non-nullable

  2. Security
    - No additional security changes needed
*/

-- Add is_interested column with default value
ALTER TABLE backpacking_trips 
ADD COLUMN IF NOT EXISTS is_interested boolean DEFAULT false NOT NULL;