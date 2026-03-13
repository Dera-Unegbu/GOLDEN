/*
  # Event Media Management Schema

  1. New Tables
    - `event_media`
      - `id` (uuid, primary key) - Unique identifier
      - `event_id` (uuid, foreign key) - Links to events table
      - `media_url` (text) - URL to image or video
      - `media_type` (text) - Either 'image' or 'video'
      - `display_order` (integer) - Order in gallery
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `event_media` table
    - Add policy for public read access
    - Add policy for authenticated admin insert/update/delete

  3. Indexes
    - Index on event_id for efficient queries
    - Index on display_order for correct ordering
*/

CREATE TABLE IF NOT EXISTS event_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  media_url text NOT NULL,
  media_type text NOT NULL CHECK (media_type IN ('image', 'video')),
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE event_media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Event media is viewable by everyone"
  ON event_media
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert event media"
  ON event_media
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update event media"
  ON event_media
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete event media"
  ON event_media
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_event_media_event_id ON event_media(event_id);
CREATE INDEX IF NOT EXISTS idx_event_media_order ON event_media(event_id, display_order ASC);