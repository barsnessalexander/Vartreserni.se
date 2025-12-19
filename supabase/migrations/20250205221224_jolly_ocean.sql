/*
  # Remove continent column from backpacking_trips table

  1. Changes
    - Remove continent column from backpacking_trips table since it's no longer needed
*/

-- Remove the continent column and its constraint
ALTER TABLE backpacking_trips 
DROP COLUMN continent;