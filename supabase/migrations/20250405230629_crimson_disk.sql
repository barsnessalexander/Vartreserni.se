/*
  # Add data for remaining destinations
  
  1. Changes
    - Add data for remaining destinations with:
      - 10-20 travelers per destination
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

-- Tenneriffa (15 travelers, 2 interested, 45% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Tenneriffa',
  generate_age(60),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(50, 'Göteborg', 15, 'Malmö', 10),
  false
FROM generate_series(1, 15);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Tenneriffa',
  generate_age(60),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(50, 'Göteborg', 15, 'Malmö', 10),
  true
FROM generate_series(1, 2);

-- Gotland (12 travelers, 1 interested, 55% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Gotland',
  generate_age(65),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(48, 'Uppsala', 15, 'Västerås', 12),
  false
FROM generate_series(1, 12);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Gotland',
  generate_age(65),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(48, 'Uppsala', 15, 'Västerås', 12),
  true
FROM generate_series(1, 1);

-- Cancun (18 travelers, 3 interested, 52% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Cancun',
  generate_age(58),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Linköping', 12, 'Örebro', 8),
  false
FROM generate_series(1, 18);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Cancun',
  generate_age(58),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Linköping', 12, 'Örebro', 8),
  true
FROM generate_series(1, 3);

-- Las Vegas (20 travelers, 2 interested, 58% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Las Vegas',
  generate_age(62),
  CASE WHEN random() < 0.58 THEN 'Male' ELSE 'Female' END,
  generate_home_location(51, 'Helsingborg', 14, 'Norrköping', 10),
  false
FROM generate_series(1, 20);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Las Vegas',
  generate_age(62),
  CASE WHEN random() < 0.58 THEN 'Male' ELSE 'Female' END,
  generate_home_location(51, 'Helsingborg', 14, 'Norrköping', 10),
  true
FROM generate_series(1, 2);

-- Miami (16 travelers, 2 interested, 54% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Miami',
  generate_age(55),
  CASE WHEN random() < 0.54 THEN 'Male' ELSE 'Female' END,
  generate_home_location(49, 'Jönköping', 13, 'Lund', 11),
  false
FROM generate_series(1, 16);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Miami',
  generate_age(55),
  CASE WHEN random() < 0.54 THEN 'Male' ELSE 'Female' END,
  generate_home_location(49, 'Jönköping', 13, 'Lund', 11),
  true
FROM generate_series(1, 2);

-- Kavos (14 travelers, 1 interested, 60% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Kavos',
  generate_age(68),
  CASE WHEN random() < 0.60 THEN 'Male' ELSE 'Female' END,
  generate_home_location(53, 'Växjö', 12, 'Karlstad', 8),
  false
FROM generate_series(1, 14);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Kavos',
  generate_age(68),
  CASE WHEN random() < 0.60 THEN 'Male' ELSE 'Female' END,
  generate_home_location(53, 'Växjö', 12, 'Karlstad', 8),
  true
FROM generate_series(1, 1);

-- Torrevieja (12 travelers, 1 interested, 48% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Torrevieja',
  generate_age(57),
  CASE WHEN random() < 0.48 THEN 'Male' ELSE 'Female' END,
  generate_home_location(50, 'Sundsvall', 15, 'Umeå', 10),
  false
FROM generate_series(1, 12);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Torrevieja',
  generate_age(57),
  CASE WHEN random() < 0.48 THEN 'Male' ELSE 'Female' END,
  generate_home_location(50, 'Sundsvall', 15, 'Umeå', 10),
  true
FROM generate_series(1, 1);

-- Albufeira (15 travelers, 2 interested, 52% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Albufeira',
  generate_age(63),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(51, 'Borås', 14, 'Eskilstuna', 10),
  false
FROM generate_series(1, 15);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Albufeira',
  generate_age(63),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(51, 'Borås', 14, 'Eskilstuna', 10),
  true
FROM generate_series(1, 2);

-- Valencia (17 travelers, 2 interested, 45% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Valencia',
  generate_age(59),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Täby', 13, 'Huddinge', 10),
  false
FROM generate_series(1, 17);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Valencia',
  generate_age(59),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Täby', 13, 'Huddinge', 10),
  true
FROM generate_series(1, 2);

-- Zagreb (13 travelers, 1 interested, 50% male)
INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Zagreb',
  generate_age(56),
  CASE WHEN random() < 0.50 THEN 'Male' ELSE 'Female' END,
  generate_home_location(48, 'Södertälje', 15, 'Uppsala', 12),
  false
FROM generate_series(1, 13);

INSERT INTO destinations (location, age, gender, home_location, is_interested)
SELECT 
  'Zagreb',
  generate_age(56),
  CASE WHEN random() < 0.50 THEN 'Male' ELSE 'Female' END,
  generate_home_location(48, 'Södertälje', 15, 'Uppsala', 12),
  true
FROM generate_series(1, 1);

-- Drop helper functions
DROP FUNCTION IF EXISTS generate_age(integer, integer);
DROP FUNCTION IF EXISTS generate_home_location(integer, text, integer, text, integer);