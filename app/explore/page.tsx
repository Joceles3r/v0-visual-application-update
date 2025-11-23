"use client"

import { Navigation } from "@/components/navigation"
import { VideoGrid } from "@/components/video-grid"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import type { Video } from "@/lib/types"
import { useEffect, useState } from "react"

export default function ExplorePage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = getSupabaseBrowserClient()

    supabase
      .from("videos")
      .select(`
        *,
        user:users(*)
      `)
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(24)
      .then(({ data }) => {
        setVideos((data as Video[]) || [])
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Explore</h1>
          <p className="text-muted-foreground">Discover amazing content from creators around the world</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-video bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <VideoGrid videos={videos} />
        )}
      </div>
    </div>
  )
}
