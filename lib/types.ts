export interface User {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  visupoints: number
  total_views: number
  total_clicks: number
  created_at: string
  updated_at: string
}

export interface Video {
  id: string
  user_id: string
  title: string
  description?: string
  video_url: string
  thumbnail_url?: string
  duration?: number
  views: number
  status: 'draft' | 'published' | 'archived'
  created_at: string
  updated_at: string
  user?: User
}

export interface Badge {
  id: string
  name: string
  description?: string
  icon: string
  requirement_type: 'views' | 'videos' | 'visupoints'
  requirement_value: number
  created_at: string
}

export interface UserBadge {
  id: string
  user_id: string
  badge_id: string
  earned_at: string
  badge?: Badge
}

export interface Comment {
  id: string
  video_id: string
  user_id: string
  content: string
  created_at: string
  updated_at: string
  user?: User
}

export interface LeaderboardEntry {
  user: User
  rank: number
  badges_count: number
}
