/*
  # Add backpacking statistics for selected destinations
  
  1. Changes
    - Add data for 20 popular backpacking destinations
    - Each destination has 20-30 entries
    - Gender distribution between 40-60% male
    - Age distribution centered around 18-20
    - Stockholm as primary home location (>50%)
*/

-- Helper functions
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

-- Helper function to generate random destinations array
CREATE OR REPLACE FUNCTION generate_random_destinations(
  main_destination text,
  num_destinations integer DEFAULT 3
) RETURNS text[] AS $$
DECLARE
  destinations text[] := ARRAY[
    'Bangkok', 'Chiang Mai', 'Ho Chi Minh-staden', 'Hanoi', 'Siem Reap (Angkor Wat)',
    'Bali', 'Singapore', 'Kuala Lumpur', 'Tokyo', 'Seoul', 'Taipei', 'Hongkong',
    'Amsterdam', 'Berlin', 'Barcelona', 'Paris', 'Rome', 'Prague', 'Budapest', 'Vienna'
  ];
  result text[] := ARRAY[main_destination];
  available_cities text[];
  random_city text;
  i integer;
BEGIN
  -- Remove main destination from available cities
  available_cities := array_remove(destinations, main_destination);
  
  -- Add random cities until we reach desired length
  FOR i IN 2..num_destinations LOOP
    -- Get random city
    random_city := available_cities[floor(random() * array_length(available_cities, 1) + 1)];
    -- Only add if not already in result
    IF NOT random_city = ANY(result) THEN
      result := array_append(result, random_city);
      -- Remove selected city from available cities
      available_cities := array_remove(available_cities, random_city);
    END IF;
  END LOOP;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Clear existing backpacking data
DELETE FROM backpacking_trips;

-- Insert data for each destination
-- Asian destinations
INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(70),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(55, 'Göteborg', 15, 'Malmö', 10),
  generate_random_destinations('Bangkok', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 28);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(65),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Uppsala', 12, 'Linköping', 8),
  generate_random_destinations('Chiang Mai', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 25);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(68),
  CASE WHEN random() < 0.58 THEN 'Male' ELSE 'Female' END,
  generate_home_location(54, 'Västerås', 14, 'Örebro', 10),
  generate_random_destinations('Ho Chi Minh-staden', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 23);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(72),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(53, 'Helsingborg', 13, 'Norrköping', 9),
  generate_random_destinations('Hanoi', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 26);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(70),
  CASE WHEN random() < 0.48 THEN 'Male' ELSE 'Female' END,
  generate_home_location(51, 'Jönköping', 15, 'Lund', 10),
  generate_random_destinations('Siem Reap (Angkor Wat)', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 24);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(65),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(56, 'Växjö', 12, 'Karlstad', 8),
  generate_random_destinations('Bali', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 27);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(68),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(54, 'Sundsvall', 13, 'Umeå', 8),
  generate_random_destinations('Singapore', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 22);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(70),
  CASE WHEN random() < 0.48 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Borås', 14, 'Eskilstuna', 10),
  generate_random_destinations('Kuala Lumpur', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 21);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(72),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(55, 'Täby', 13, 'Huddinge', 10),
  generate_random_destinations('Tokyo', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 25);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(68),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(53, 'Södertälje', 15, 'Uppsala', 12),
  generate_random_destinations('Seoul', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 24);

-- European destinations
INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(70),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(54, 'Göteborg', 15, 'Malmö', 10),
  generate_random_destinations('Amsterdam', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 26);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(65),
  CASE WHEN random() < 0.58 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Uppsala', 12, 'Linköping', 8),
  generate_random_destinations('Berlin', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 28);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(68),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(53, 'Västerås', 14, 'Örebro', 10),
  generate_random_destinations('Barcelona', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 27);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(72),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(55, 'Helsingborg', 13, 'Norrköping', 9),
  generate_random_destinations('Paris', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 25);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(70),
  CASE WHEN random() < 0.48 THEN 'Male' ELSE 'Female' END,
  generate_home_location(51, 'Jönköping', 15, 'Lund', 10),
  generate_random_destinations('Rome', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 24);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(65),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(56, 'Växjö', 12, 'Karlstad', 8),
  generate_random_destinations('Prague', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 23);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(68),
  CASE WHEN random() < 0.55 THEN 'Male' ELSE 'Female' END,
  generate_home_location(54, 'Sundsvall', 13, 'Umeå', 8),
  generate_random_destinations('Budapest', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 26);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(70),
  CASE WHEN random() < 0.48 THEN 'Male' ELSE 'Female' END,
  generate_home_location(52, 'Borås', 14, 'Eskilstuna', 10),
  generate_random_destinations('Vienna', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 22);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(72),
  CASE WHEN random() < 0.45 THEN 'Male' ELSE 'Female' END,
  generate_home_location(55, 'Täby', 13, 'Huddinge', 10),
  generate_random_destinations('Taipei', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 25);

INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(68),
  CASE WHEN random() < 0.52 THEN 'Male' ELSE 'Female' END,
  generate_home_location(53, 'Södertälje', 15, 'Uppsala', 12),
  generate_random_destinations('Hongkong', floor(random() * 2 + 3)::integer),
  false
FROM generate_series(1, 24);

-- Add some interested entries (about 10% of total entries)
INSERT INTO backpacking_trips (age, gender, home_location, destinations, is_interested)
SELECT 
  generate_age(70),
  CASE WHEN random() < 0.5 THEN 'Male' ELSE 'Female' END,
  generate_home_location(53, 'Göteborg', 15, 'Malmö', 10),
  generate_random_destinations(
    (ARRAY['Bangkok', 'Berlin', 'Barcelona', 'Tokyo', 'Amsterdam', 'Bali'])[floor(random() * 6 + 1)],
    floor(random() * 2 + 3)::integer
  ),
  true
FROM generate_series(1, 50);

-- Drop helper functions
DROP FUNCTION IF EXISTS generate_age(integer, integer);
DROP FUNCTION IF EXISTS generate_home_location(integer, text, integer, text, integer);
DROP FUNCTION IF EXISTS generate_random_destinations(text, integer);