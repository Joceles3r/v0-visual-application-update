import { getSupabaseBrowserClient } from './supabase/client'
import { Badge, UserBadge } from './types'

export async function checkAndAwardBadges(userId: string) {
  const supabase = getSupabaseBrowserClient()
  
  // Get user stats
  const { data: user } = await supabase
    .from('users')
    .select('total_views, visupoints')
    .eq('id', userId)
    .single()

  if (!user) return

  // Get user's video count
  const { count: videoCount } = await supabase
    .from('videos')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)

  // Get all badges
  const { data: badges } = await supabase
    .from('badges')
    .select('*')

  if (!badges) return

  // Get badges user already has
  const { data: userBadges } = await supabase
    .from('user_badges')
    .select('badge_id')
    .eq('user_id', userId)

  const earnedBadgeIds = new Set(userBadges?.map(ub => ub.badge_id) || [])

  // Check each badge requirement
  for (const badge of badges) {
    if (earnedBadgeIds.has(badge.id)) continue

    let qualifies = false

    switch (badge.requirement_type) {
      case 'views':
        qualifies = user.total_views >= badge.requirement_value
        break
      case 'videos':
        qualifies = (videoCount || 0) >= badge.requirement_value
        break
      case 'visupoints':
        qualifies = user.visupoints >= badge.requirement_value
        break
    }

    if (qualifies) {
      await supabase.from('user_badges').insert({
        user_id: userId,
        badge_id: badge.id,
      })
    }
  }
}

export async function awardVisupoints(userId: string, points: number, reason: string) {
  const supabase = getSupabaseBrowserClient()
  
  const { data: user } = await supabase
    .from('users')
    .select('visupoints')
    .eq('id', userId)
    .single()

  if (!user) return

  await supabase
    .from('users')
    .update({ visupoints: user.visupoints + points })
    .eq('id', userId)

  // Check if user earned new badges
  await checkAndAwardBadges(userId)
}

export const VISUPOINT_REWARDS = {
  VIDEO_UPLOAD: 10,
  VIDEO_VIEW: 1,
  COMMENT_RECEIVED: 2,
  VIDEO_SHARED: 5,
}
