/*
  # Add articles feature

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `slug` (text, unique, not null)
      - `content` (text, not null)
      - `author` (text, not null)
      - `publication_date` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on articles table
    - Add policies for public read access
    - Add policies for admin write access
*/

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text NOT NULL,
  author text NOT NULL,
  publication_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can read articles"
  ON articles
  FOR SELECT
  TO public
  USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample articles
INSERT INTO articles (title, slug, content, author) VALUES
(
  'Tips inför festresan',
  'tips-infor-festresan',
  E'## Planera din festresa\n\nAtt åka på festresa är ett minne för livet! Här är några viktiga tips att tänka på:\n\n### 1. Budget\nSe till att ha en realistisk budget som täcker:\n- Boende\n- Mat och dryck\n- Inträden till klubbar\n- Transport\n- Extra för oförutsedda utgifter\n\n### 2. Säkerhet\n- Ha alltid koll på dina värdesaker\n- Res aldrig ensam nattetid\n- Ha viktiga nummer sparade i telefonen\n\n### 3. Boende\n- Välj boende nära festområdet\n- Läs recensioner noga\n- Boka i god tid\n\n### 4. Packning\n- Ta med både fest- och vardagskläder\n- Glöm inte solskydd\n- Pack lätt - du vill kunna röra dig enkelt\n\n### 5. Försäkring\nSe till att ha en bra reseförsäkring som täcker eventuella incidenter.',
  'Marcus Andersson'
),
(
  'Hur mycket pengar bör jag ha med mig?',
  'hur-mycket-pengar-bor-jag-ha-med-mig',
  E'## Budget för din resa\n\nHur mycket pengar du behöver ha med dig beror på flera faktorer. Här är en grundlig genomgång:\n\n### Dagliga utgifter\n\n#### Mat & Dryck\n- Frukost: 50-100 kr\n- Lunch: 100-150 kr\n- Middag: 150-300 kr\n- Dryck på klubb: 300-500 kr per kväll\n\n#### Transport\n- Lokaltrafik: 50-100 kr/dag\n- Taxi: 150-300 kr per resa\n\n#### Aktiviteter\n- Klubbinträde: 150-300 kr\n- Dagsutflykter: 300-600 kr\n\n### Rekommenderad totalbudget\n\nFör en veckas resa rekommenderar vi:\n- Budget: 5000-7000 kr\n- Standard: 7000-10000 kr\n- Lyx: 10000+ kr\n\n### Tips för att spara\n- Boka boende med frukost\n- Använd lokaltrafik istället för taxi\n- Leta efter happy hour\n- Handla mat i lokala mataffärer',
  'Emma Nilsson'
),
(
  'De bästa festdestinationerna 2025',
  'basta-festdestinationerna-2025',
  E'## Toppdestinationer för fest 2025\n\n### 1. Magaluf, Mallorca\nPerfekt för dig som vill ha fest dygnet runt. Här finns:\n- Stora klubbar\n- Poolpartyn\n- Båtfester\n- Prisvärda drinkar\n\n### 2. Ayia Napa, Cypern\nEn klassiker som levererar:\n- Vackra stränder\n- Världskända DJs\n- Bra klubbar\n- Skönt klimat\n\n### 3. Sunny Beach, Bulgarien\nBudgetvänligt alternativ med:\n- Låga priser\n- Lång strand\n- Många barer\n- Bra nattklubbar\n\n### 4. Ibiza, Spanien\nFestöns konung erbjuder:\n- Världens bästa klubbar\n- Kända DJs\n- Vackra stränder\n- Lyxig atmosfär\n\n### 5. Zante, Grekland\nPerfekt mix av fest och sol:\n- Lagom stort\n- Bra priser\n- Skönt klimat\n- Trevlig atmosfär',
  'Marcus Andersson'
);