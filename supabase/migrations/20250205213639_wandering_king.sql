/*
  # Add backpacking feature

  1. New Tables
    - `backpacking_trips`
      - `id` (uuid, primary key)
      - `continent` (text) - Either 'Europe' or 'Asia'
      - `age` (integer)
      - `home_location` (text)
      - `destinations` (text[]) - Array of destinations
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `backpacking_trips` table
    - Add policies for public access
*/

CREATE TABLE IF NOT EXISTS backpacking_trips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  continent text NOT NULL CHECK (continent IN ('Europe', 'Asia')),
  age integer NOT NULL,
  home_location text NOT NULL,
  destinations text[] NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE backpacking_trips ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read backpacking trips
CREATE POLICY "Anyone can read backpacking_trips" 
  ON backpacking_trips
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to insert backpacking trips
CREATE POLICY "Anyone can create backpacking_trips" 
  ON backpacking_trips
  FOR INSERT
  TO public
  WITH CHECK (true);