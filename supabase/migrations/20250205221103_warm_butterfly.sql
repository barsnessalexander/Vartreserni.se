/*
  # Add gender column to backpacking_trips table

  1. Changes
    - Add gender column to backpacking_trips table as nullable first
    - Add check constraint to ensure valid gender values
    - Update any existing rows with a default value
    - Make the column non-nullable after updating existing data
*/

-- Add the column as nullable first
ALTER TABLE backpacking_trips 
ADD COLUMN gender text;

-- Add check constraint
ALTER TABLE backpacking_trips
ADD CONSTRAINT valid_gender CHECK (gender IN ('Male', 'Female'));

-- Update any existing rows with a default value
UPDATE backpacking_trips
SET gender = 'Male'
WHERE gender IS NULL;

-- Now make it non-nullable
ALTER TABLE backpacking_trips
ALTER COLUMN gender SET NOT NULL;