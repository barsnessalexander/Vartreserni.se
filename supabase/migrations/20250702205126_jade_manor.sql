/*
  # Add travel timing functionality

  1. Changes
    - Add duration_weeks column to destinations table (1-12 weeks)
    - Add travel_weeks column to destinations table (array of week numbers 1-52)
    - Add duration_weeks column to backpacking_trips table (1-12 weeks)
    - Add travel_weeks column to backpacking_trips table (array of week numbers 1-52)
    - Add constraints for valid duration and week numbers

  2. Security
    - Maintain existing RLS policies
*/

-- Add columns to destinations table
ALTER TABLE destinations 
ADD COLUMN IF NOT EXISTS duration_weeks integer,
ADD COLUMN IF NOT EXISTS travel_weeks integer[];

-- Add columns to backpacking_trips table
ALTER TABLE backpacking_trips 
ADD COLUMN IF NOT EXISTS duration_weeks integer,
ADD COLUMN IF NOT EXISTS travel_weeks integer[];

-- Add constraints for duration (1-12 weeks max)
ALTER TABLE destinations
ADD CONSTRAINT valid_duration_weeks CHECK (
  duration_weeks IS NULL OR 
  (duration_weeks >= 1 AND duration_weeks <= 12)
);

ALTER TABLE backpacking_trips
ADD CONSTRAINT valid_duration_weeks CHECK (
  duration_weeks IS NULL OR 
  (duration_weeks >= 1 AND duration_weeks <= 12)
);

-- Create a function to validate week numbers
CREATE OR REPLACE FUNCTION validate_week_numbers(weeks integer[])
RETURNS boolean AS $$
BEGIN
  -- Return true if weeks is null or empty
  IF weeks IS NULL OR array_length(weeks, 1) IS NULL THEN
    RETURN true;
  END IF;
  
  -- Check if all week numbers are between 1 and 52
  RETURN NOT EXISTS (
    SELECT 1 FROM unnest(weeks) AS week_num 
    WHERE week_num < 1 OR week_num > 52
  );
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Add constraints using the validation function
ALTER TABLE destinations
ADD CONSTRAINT valid_travel_weeks CHECK (validate_week_numbers(travel_weeks));

ALTER TABLE backpacking_trips
ADD CONSTRAINT valid_travel_weeks CHECK (validate_week_numbers(travel_weeks));