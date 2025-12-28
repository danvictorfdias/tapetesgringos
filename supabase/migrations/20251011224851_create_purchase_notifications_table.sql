/*
  # Create Purchase Notifications Table

  1. New Tables
    - `purchase_notification_names`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Female name for notifications
      - `active` (boolean, default true) - Whether name is active
      - `created_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on `purchase_notification_names` table
    - Add policy for public read access (notifications are public info)
    
  3. Initial Data
    - Seed table with 25 Brazilian female names for variety
*/

CREATE TABLE IF NOT EXISTS purchase_notification_names (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE purchase_notification_names ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active notification names"
  ON purchase_notification_names
  FOR SELECT
  USING (active = true);

-- Seed initial data with Brazilian female names
INSERT INTO purchase_notification_names (name, active) VALUES
  ('Maria Silva', true),
  ('Ana Santos', true),
  ('Juliana Costa', true),
  ('Fernanda Oliveira', true),
  ('Camila Souza', true),
  ('Patricia Lima', true),
  ('Carla Pereira', true),
  ('Beatriz Alves', true),
  ('Mariana Rocha', true),
  ('Gabriela Martins', true),
  ('Amanda Ferreira', true),
  ('Larissa Gomes', true),
  ('Renata Ribeiro', true),
  ('Tatiana Cardoso', true),
  ('Daniela Araújo', true),
  ('Luciana Dias', true),
  ('Vanessa Castro', true),
  ('Adriana Barbosa', true),
  ('Simone Moreira', true),
  ('Cristina Nunes', true),
  ('Eliane Correia', true),
  ('Sandra Mendes', true),
  ('Claudia Pinto', true),
  ('Roberta Freitas', true),
  ('Bianca Monteiro', true)
ON CONFLICT DO NOTHING;