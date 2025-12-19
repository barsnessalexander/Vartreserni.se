/*
  # Add 300 responses for Palma de Mallorca

  1. New Data
    - 300 entries for Palma de Mallorca
    - 50/50 gender distribution (150 male, 150 female)
    - All ages 16 or 17 years old
    - All trips 1 week duration
    - 85% travel in week 33 (255 entries)
    - 15% travel in weeks 32 or 34 (45 entries)
    - 80% from Stockholm (240 entries)
    - 20% from other Swedish cities (60 entries)

  2. Security
    - Uses existing RLS policies
*/

-- Helper function to generate random age (16 or 17)
CREATE OR REPLACE FUNCTION generate_palma_age() RETURNS integer AS $$
BEGIN
  RETURN CASE WHEN random() < 0.5 THEN 16 ELSE 17 END;
END;
$$ LANGUAGE plpgsql;

-- Helper function to generate home location (80% Stockholm, 20% others)
CREATE OR REPLACE FUNCTION generate_palma_home_location() RETURNS text AS $$
DECLARE
  other_cities text[] := ARRAY['Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping', 'Lund'];
BEGIN
  IF random() < 0.8 THEN
    RETURN 'Stockholm';
  ELSE
    RETURN other_cities[floor(random() * array_length(other_cities, 1) + 1)];
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Helper function to generate travel week (85% week 33, 15% weeks 32 or 34)
CREATE OR REPLACE FUNCTION generate_palma_travel_week() RETURNS integer[] AS $$
BEGIN
  IF random() < 0.85 THEN
    RETURN ARRAY[33];
  ELSE
    RETURN ARRAY[CASE WHEN random() < 0.5 THEN 32 ELSE 34 END];
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Insert 150 male entries
INSERT INTO destinations (location, age, gender, home_location, is_interested, duration_weeks, travel_weeks)
SELECT 
  'Palma de Mallorca',
  generate_palma_age(),
  'Male',
  generate_palma_home_location(),
  false,
  1,
  generate_palma_travel_week()
FROM generate_series(1, 150);

-- Insert 150 female entries
INSERT INTO destinations (location, age, gender, home_location, is_interested, duration_weeks, travel_weeks)
SELECT 
  'Palma de Mallorca',
  generate_palma_age(),
  'Female',
  generate_palma_home_location(),
  false,
  1,
  generate_palma_travel_week()
FROM generate_series(1, 150);

-- Drop helper functions
DROP FUNCTION IF EXISTS generate_palma_age();
DROP FUNCTION IF EXISTS generate_palma_home_location();
DROP FUNCTION IF EXISTS generate_palma_travel_week();