
/*
  # Create destinations table

  1. New Tables
    - `destinations`
      - `id` (uuid, primary key)
      - `location` (text, not null)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `destinations` table
    - Add policies for public access to read and create destinations
*/

CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read destinations
CREATE POLICY "Anyone can read destinations" 
  ON destinations
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to insert destinations
CREATE POLICY "Anyone can create destinations" 
  ON destinations
  FOR INSERT
  TO public
  WITH CHECK (true);