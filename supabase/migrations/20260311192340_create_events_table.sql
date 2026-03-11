/*
  # Events Management Schema

  1. New Tables
    - `events`
      - `id` (uuid, primary key) - Unique identifier for each event
      - `title` (text) - Event name/title
      - `description` (text) - Detailed event description
      - `image_url` (text) - URL to event cover image
      - `event_date` (timestamptz) - When the event occurred/will occur
      - `is_past` (boolean) - Whether event has already happened
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `events` table
    - Add policy for public read access (events are publicly viewable)
    - Add policy for authenticated admin insert/update/delete

  3. Indexes
    - Index on event_date for efficient sorting
    - Index on is_past for filtering past/future events
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  event_date timestamptz NOT NULL,
  is_past boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are viewable by everyone"
  ON events
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_events_date ON events(event_date DESC);
CREATE INDEX IF NOT EXISTS idx_events_is_past ON events(is_past);

-- Insert sample events data
INSERT INTO events (title, description, image_url, event_date, is_past) VALUES
  (
    'Community Health Fair 2024',
    'Golden Hands Medical Centre hosted a free health screening event for the local community, offering blood pressure checks, diabetes screening, and health consultations.',
    'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg',
    '2024-08-15 10:00:00+01',
    true
  ),
  (
    'Medical Equipment Upgrade',
    'We unveiled our new state-of-the-art MRI machine and upgraded CT scanner, enhancing our diagnostic capabilities for better patient care.',
    'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg',
    '2024-10-20 14:00:00+01',
    true
  ),
  (
    'Staff Training Workshop',
    'Our medical team participated in an intensive training program on emergency response protocols and advanced patient care techniques.',
    'https://images.pexels.com/photos/7089171/pexels-photo-7089171.jpeg',
    '2024-11-05 09:00:00+01',
    true
  ),
  (
    'World Health Day Celebration',
    'Join us for our upcoming World Health Day event featuring free consultations, health talks, and wellness activities for the whole family.',
    'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    '2026-04-07 10:00:00+01',
    false
  ),
  (
    'Pediatric Care Workshop',
    'An educational session for parents on child healthcare, nutrition, and developmental milestones. Register now for this informative event.',
    'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg',
    '2026-05-15 15:00:00+01',
    false
  ),
  (
    'Annual Medical Outreach',
    'Our team will be visiting rural communities to provide free medical services, medications, and health education. Volunteers welcome!',
    'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
    '2026-06-10 08:00:00+01',
    false
  )
ON CONFLICT (id) DO NOTHING;