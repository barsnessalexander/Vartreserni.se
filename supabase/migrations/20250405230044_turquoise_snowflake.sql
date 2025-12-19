/*
  # Restore destination statistics
  
  1. Changes
    - Insert statistics data for:
      - Zakynthos (351 travelers, 7 interested)
      - Magaluf (328 travelers, 4 interested)
      - Rhodos (236 travelers, 1 interested)
      - Aiya Napa (170 travelers, 4 interested)
      - Kos (174 travelers, 0 interested)
      - Nice (99 travelers, 0 interested)
      - Split (94 travelers, 2 interested)

  2. Data includes:
    - Home locations distribution
    - Gender distribution
    - Age distribution
*/

-- Function to generate random ages based on percentages
CREATE OR REPLACE FUNCTION generate_age(
  age_18_20_percent integer,
  age_16_17_percent integer DEFAULT NULL
) RETURNS integer AS $$
DECLARE
  rand float;
BEGIN
  rand := random();
  
  -- If age_16_17_percent is specified, use three-way distribution
  IF age_16_17_percent IS NOT NULL THEN
    IF rand < (age_18_20_percent::float / 100) THEN
      RETURN floor(random() * 3 + 18)::integer; -- 18-20
    ELSIF rand < ((age_18_20_percent + age_16_17_percent)::float / 100) THEN
      RETURN floor(random() * 2 + 16)::integer; -- 16-17
    ELSE
      RETURN floor(random() * 5 + 21)::integer; -- 21-25
    END IF;
  END IF;
  
  -- Default two-way distribution
  IF rand < (age_18_20_percent::float / 100) THEN
    RETURN floor(random() * 3 + 18)::integer; -- 18-20
  ELSE
    -- Split remaining percentage between 16-17 and 21-25
    IF random() < 0.5 THEN
      RETURN floor(random() * 2 + 16)::integer; -- 16-17
    ELSE
      RETURN floor(random() * 5 + 21)::integer; -- 21-25
    END IF;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Function to generate home location based on percentages
CREATE OR REPLACE FUNCTION generate_home_location(
  stockholm_percent integer,
  second_city text,
  second_percent integer,
  third_city text,
  third_percent integer
) RETURNS text AS $$
DECLARE
  rand float;
  other_cities text[] := ARRAY['Uppsala', 'Örebro', 'Västerås', 'Eskilstuna', 'Södertälje', 'Täby', 'Huddinge'];
BEGIN
  rand := random();
  
  IF rand < (stockholm_percent::float / 100) THEN
    RETURN 'Stockholm';
  ELSIF rand < ((stockholm_percent + second_percent)::float / 100) THEN
    RETURN second_city;
  ELSIF rand < ((stockholm_percent + second_percent + third_percent)::float / 100) THEN
    RETURN third_city;
  ELSE
    RETURN other_cities[floor(random() * array_length(other_cities, 1) + 1)];
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Insert Zakynthos data (351 travelers, 7 interested)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Zakynthos',
  generate_age(77),
  CASE WHEN random() < 0.6 THEN 'Male' ELSE 'Female' END,
  generate_home_location(70, 'Göteborg', 7, 'Malmö', 3),
  false
FROM generate_series(1, 351);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Zakynthos',
  generate_age(77),
  CASE WHEN random() < 0.6 THEN 'Male' ELSE 'Female' END,
  generate_home_location(70, 'Göteborg', 7, 'Malmö', 3),
  true
FROM generate_series(1, 7);

-- Insert Magaluf data (328 travelers, 4 interested)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Magaluf',
  generate_age(78),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(50, 'Göteborg', 10, 'Helsingborg', 5),
  false
FROM generate_series(1, 328);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Magaluf',
  generate_age(78),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(50, 'Göteborg', 10, 'Helsingborg', 5),
  true
FROM generate_series(1, 4);

-- Insert Rhodos data (236 travelers, 1 interested)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Rhodos',
  generate_age(78),
  CASE WHEN random() < 0.82 THEN 'Male' ELSE 'Female' END,
  generate_home_location(54, 'Malmö', 7, 'Göteborg', 6),
  false
FROM generate_series(1, 236);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Rhodos',
  generate_age(78),
  CASE WHEN random() < 0.82 THEN 'Male' ELSE 'Female' END,
  generate_home_location(54, 'Malmö', 7, 'Göteborg', 6),
  true
FROM generate_series(1, 1);

-- Insert Aiya Napa data (170 travelers, 4 interested)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Aiya Napa',
  generate_age(87),
  CASE WHEN random() < 0.6 THEN 'Male' ELSE 'Female' END,
  generate_home_location(60, 'Jönköping', 3, 'Västerås', 3),
  false
FROM generate_series(1, 170);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Aiya Napa',
  generate_age(87),
  CASE WHEN random() < 0.6 THEN 'Male' ELSE 'Female' END,
  generate_home_location(60, 'Jönköping', 3, 'Västerås', 3),
  true
FROM generate_series(1, 4);

-- Insert Kos data (174 travelers, 0 interested)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Kos',
  generate_age(78),
  CASE WHEN random() < 0.35 THEN 'Male' ELSE 'Female' END,
  generate_home_location(57, 'Linköping', 8, 'Göteborg', 8),
  false
FROM generate_series(1, 174);

-- Insert Nice data (99 travelers, 0 interested)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Nice',
  generate_age(77),
  CASE WHEN random() < 0.5 THEN 'Male' ELSE 'Female' END,
  generate_home_location(60, 'Norrköping', 10, 'Jönköping', 5),
  false
FROM generate_series(1, 99);

-- Insert Split data (94 travelers, 2 interested)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Split',
  generate_age(73, 20),
  CASE WHEN random() < 0.7 THEN 'Male' ELSE 'Female' END,
  generate_home_location(58, 'Göteborg', 10, 'Norrköping', 4),
  false
FROM generate_series(1, 94);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Split',
  generate_age(73, 20),
  CASE WHEN random() < 0.7 THEN 'Male' ELSE 'Female' END,
  generate_home_location(58, 'Göteborg', 10, 'Norrköping', 4),
  true
FROM generate_series(1, 2);

-- Drop the helper functions
DROP FUNCTION IF EXISTS generate_age(integer, integer);
DROP FUNCTION IF EXISTS generate_home_location(integer, text, integer, text, integer);