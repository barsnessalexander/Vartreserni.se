/*
  # Add interest field to destinations table

  1. Changes
    - Add new column to destinations table:
      - is_interested (boolean) to distinguish between actual travelers and interested people
  
  2. Security
    - Maintain existing RLS policies
*/

ALTER TABLE destinations 
ADD COLUMN IF NOT EXISTS is_interested boolean DEFAULT false;