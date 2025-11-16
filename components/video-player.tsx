'use client'

import { useEffect, useRef } from 'react'
import { Video } from '@/lib/types'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { awardVisupoints, VISUPOINT_REWARDS } from '@/lib/gamification'

interface VideoPlayerProps {
  video: Video
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const viewRecordedRef = useRef(false)

  useEffect(() => {
    const recordView = async () => {
      if (viewRecordedRef.current) return
      viewRecordedRef.current = true

      const supabase = getSupabaseBrowserClient()
      const { data: { user } } = await supabase.auth.getUser()

      // Record view
      await supabase.from('video_views').insert({
        video_id: video.id,
        viewer_id: user?.id || null,
      })

      // Update video views count
      await supabase
        .from('videos')
        .update({ views: video.views + 1 })
        .eq('id', video.id)

      // Update user's total views if they're the creator
      if (user && video.user_id) {
        const { data: userData } = await supabase
          .from('users')
          .select('total_views')
          .eq('id', video.user_id)
          .single()

        if (userData) {
          await supabase
            .from('users')
            .update({ total_views: userData.total_views + 1 })
            .eq('id', video.user_id)

          await awardVisupoints(video.user_id, VISUPOINT_REWARDS.VIDEO_VIEW, 'Video view')
        }
      }
    }

    // Record view after 3 seconds of watching
    const timer = setTimeout(recordView, 3000)
    return () => clearTimeout(timer)
  }, [video.id, video.user_id, video.views])

  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={video.video_url}
        controls
        className="w-full h-full"
        poster={video.thumbnail_url || undefined}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
