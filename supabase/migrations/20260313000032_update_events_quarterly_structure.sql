/*
  # Update Events Table with Quarterly Outreach Data

  1. Changes
    - Delete existing events and replace with new quarterly structure
    - Add quarterly medical outreach events for Feb, May, Aug, Nov
    - Keep Community Health Fair and Medical Equipment Upgrade as past events

  2. New Events
    - Quarterly Medical Outreach: February
    - Quarterly Medical Outreach: May
    - Quarterly Medical Outreach: August
    - Quarterly Medical Outreach: November
*/

DELETE FROM events WHERE title LIKE 'Quarterly%' OR title = 'Annual Medical Outreach' OR title = 'Pediatric Care Workshop' OR title = 'World Health Day Celebration';

INSERT INTO events (title, description, image_url, event_date, is_past) VALUES
  (
    'Quarterly Medical Outreach : November 2025',
    'Our previous November community outreach program brought essential healthcare services directly to underserved communities. Free consultations, health screenings, and medical supplies distribution.',
    'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    '2026-02-15 09:00:00+01',
    false
  ),
  (
    'Quarterly Medical Outreach: May',
    'May quarterly outreach focuses on maternal and child health, providing prenatal care, immunization services, and nutritional guidance to families in need.',
    'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg',
    '2026-05-10 10:00:00+01',
    false
  ),
  (
    'Quarterly Medical Outreach: August',
    'August outreach program emphasizes disease prevention and health awareness, with special focus on infectious disease screening and preventive medicine.',
    'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
    '2026-08-20 08:00:00+01',
    false
  ),
  (
    'Quarterly Medical Outreach : November 2026',
    'November brings our year-ending community health initiative, featuring comprehensive health assessments, wellness consultations, and holiday health awareness campaigns.',
    'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg',
    '2026-11-15 09:00:00+01',
    false
  )
ON CONFLICT (id) DO NOTHING;