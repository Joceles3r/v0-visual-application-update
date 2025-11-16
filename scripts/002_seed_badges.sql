-- Insert initial badges for the gamification system
INSERT INTO badges (name, description, icon, requirement_type, requirement_value) VALUES
  ('First Upload', 'Upload your first video', '🎬', 'videos', 1),
  ('Rising Star', 'Get 100 views across your videos', '⭐', 'views', 100),
  ('Viral Creator', 'Get 1,000 views across your videos', '🔥', 'views', 1000),
  ('Influencer', 'Get 10,000 views across your videos', '👑', 'views', 10000),
  ('Point Master', 'Earn 500 visupoints', '💎', 'visupoints', 500),
  ('Elite Creator', 'Upload 10 videos', '🏆', 'videos', 10),
  ('Community Hero', 'Earn 5,000 visupoints', '🌟', 'visupoints', 5000)
ON CONFLICT (name) DO NOTHING;
