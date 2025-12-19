/*
  # Add ski trips feature

  1. New Tables
    - `ski_trips`
      - `id` (uuid, primary key)
      - `destination` (text, not null)
      - `age` (integer, not null, 16-25)
      - `gender` (text, not null)
      - `home_location` (text, not null)
      - `is_interested` (boolean, default false)
      - `duration_weeks` (integer, 1-12 weeks)
      - `travel_weeks` (integer[], week numbers)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on ski_trips table
    - Add policies for public access
*/

CREATE TABLE IF NOT EXISTS ski_trips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination text NOT NULL,
  age integer NOT NULL CHECK (age >= 16 AND age <= 25),
  gender text NOT NULL CHECK (gender IN ('Male', 'Female')),
  home_location text NOT NULL,
  is_interested boolean DEFAULT false NOT NULL,
  duration_weeks integer CHECK (duration_weeks IS NULL OR (duration_weeks >= 1 AND duration_weeks <= 12)),
  travel_weeks integer[] CHECK (validate_week_numbers(travel_weeks)),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ski_trips ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read ski trips
CREATE POLICY "Anyone can read ski_trips"
  ON ski_trips
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to insert ski trips
CREATE POLICY "Anyone can create ski_trips"
  ON ski_trips
  FOR INSERT
  TO public
  WITH CHECK (true);