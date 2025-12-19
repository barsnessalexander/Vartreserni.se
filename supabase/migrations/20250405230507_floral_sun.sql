/*
  # Add data for additional destinations
  
  1. Changes
    - Add data for additional destinations with:
      - Varied gender distributions (40-60% male/female)
      - Age distributions (50-70% in 18-20 range)
      - ~50% from Stockholm for home locations
*/

-- Recreate helper functions
CREATE OR REPLACE FUNCTION generate_age(
  age_18_20_percent integer,
  age_16_17_percent integer DEFAULT NULL
) RETURNS integer AS $$
DECLARE
  rand float;
BEGIN
  rand := random();
  
  IF age_16_17_percent IS NOT NULL THEN
    IF rand < (age_18_20_percent::float / 100) THEN
      RETURN floor(random() * 3 + 18)::integer;
    ELSIF rand < ((age_18_20_percent + age_16_17_percent)::float / 100) THEN
      RETURN floor(random() * 2 + 16)::integer;
    ELSE
      RETURN floor(random() * 5 + 21)::integer;
    END IF;
  END IF;
  
  IF rand < (age_18_20_percent::float / 100) THEN
    RETURN floor(random() * 3 + 18)::integer;
  ELSE
    IF random() < 0.5 THEN
      RETURN floor(random() * 2 + 16)::integer;
    ELSE
      RETURN floor(random() * 5 + 21)::integer;
    END IF;
  END IF;
END;
$$ LANGUAGE plpgsql;

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

-- Barcelona (25 travelers, 2 interested, 55% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Barcelona',
  generate_age(65),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(50, 'Göteborg', 15, 'Uppsala', 10),
  false
FROM generate_series(1, 25);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Barcelona',
  generate_age(65),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(50, 'Göteborg', 15, 'Uppsala', 10),
  true
FROM generate_series(1, 2);

-- Ibiza (30 travelers, 3 interested, 60% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Ibiza',
  generate_age(70),
  CASE WHEN random() < 0.6 THEN 'Male' ELSE 'Female' END,
  generate_home_location(55, 'Malmö', 12, 'Linköping', 8),
  false
FROM generate_series(1, 30);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Ibiza',
  generate_age(70),
  CASE WHEN random() < 0.6 THEN 'Male' ELSE 'Female' END,
  generate_home_location(55, 'Malmö', 12, 'Linköping', 8),
  true
FROM generate_series(1, 3);

-- Alicante (20 travelers, 1 interested, 45% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Alicante',
  generate_age(55),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(45, 'Västerås', 15, 'Örebro', 10),
  false
FROM generate_series(1, 20);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Alicante',
  generate_age(55),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(45, 'Västerås', 15, 'Örebro', 10),
  true
FROM generate_series(1, 1);

-- Marbella (15 travelers, 2 interested, 40% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Marbella',
  generate_age(60),
  CASE WHEN random() < 0.4 THEN 'Male' ELSE 'Female' END,
  generate_home_location(48, 'Norrköping', 12, 'Helsingborg', 10),
  false
FROM generate_series(1, 15);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Marbella',
  generate_age(60),
  CASE WHEN random() < 0.4 THEN 'Male' ELSE 'Female' END,
  generate_home_location(48, 'Norrköping', 12, 'Helsingborg', 10),
  true
FROM generate_series(1, 2);

-- Malaga (28 travelers, 3 interested, 50% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Malaga',
  generate_age(58),
  CASE WHEN random() < 0.5 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Jönköping', 13, 'Umeå', 8),
  false
FROM generate_series(1, 28);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Malaga',
  generate_age(58),
  CASE WHEN random() < 0.5 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Jönköping', 13, 'Umeå', 8),
  true
FROM generate_series(1, 3);

-- Kreta (22 travelers, 2 interested, 43% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Kreta',
  generate_age(63),
  CASE WHEN random() < 0.43 THEN 'Male' ELSE 'Female' END,
  generate_home_location(51, 'Lund', 14, 'Växjö', 9),
  false
FROM generate_series(1, 22);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Kreta',
  generate_age(63),
  CASE WHEN random() < 0.43 THEN 'Male' ELSE 'Female' END,
  generate_home_location(51, 'Lund', 14, 'Växjö', 9),
  true
FROM generate_series(1, 2);

-- Malta (18 travelers, 1 interested, 58% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Malta',
  generate_age(67),
  CASE WHEN random() < 0.58 THEN 'Male' ELSE 'Female' END,
  generate_home_location(53, 'Karlstad', 12, 'Sundsvall', 8),
  false
FROM generate_series(1, 18);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Malta',
  generate_age(67),
  CASE WHEN random() < 0.58 THEN 'Male' ELSE 'Female' END,
  generate_home_location(53, 'Karlstad', 12, 'Sundsvall', 8),
  true
FROM generate_series(1, 1);

-- Drop helper functions
DROP FUNCTION IF EXISTS generate_age(integer, integer);
DROP FUNCTION IF EXISTS generate_home_location(integer, text, integer, text, integer);