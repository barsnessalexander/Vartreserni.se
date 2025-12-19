/*
  # Add image_url column to articles table

  1. Schema Changes
    - Add `image_url` column to `articles` table
      - `image_url` (text, nullable) - URL to article's featured image

  2. Purpose
    - Enable visual article cards with featured images
    - Improve user engagement and click-through rates
    - Support responsive design with image-based layouts
*/

-- Add image_url column to articles table
ALTER TABLE public.articles 
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Add comment to document the column purpose
COMMENT ON COLUMN public.articles.image_url IS 'URL to the featured image for the article';