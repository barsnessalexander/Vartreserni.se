/*
  # Add demographic fields to destinations table

  1. Changes
    - Add new columns to destinations table:
      - age (integer)
      - gender (text)
      - home_location (text)
  
  2. Security
    - Maintain existing RLS policies
*/

ALTER TABLE destinations 
ADD COLUMN IF NOT EXISTS age integer,
ADD COLUMN IF NOT EXISTS gender text,
ADD COLUMN IF NOT EXISTS home_location text;