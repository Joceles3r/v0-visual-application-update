"use client"

import { Navigation } from "@/components/navigation"
import { VideoPlayer } from "@/components/video-player"
import { CommentSection } from "@/components/comment-section"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import type { Video } from "@/lib/types"
import { Eye, ThumbsUp, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function VideoPage() {
  const params = useParams()
  const [video, setVideo] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function loadVideo() {
      const supabase = getSupabaseBrowserClient()

      const { data: videoData, error } = await supabase
        .from("videos")
        .select(`
          *,
          user:users(*)
        `)
        .eq("id", params.id)
        .single()

      if (error || !videoData) {
        setNotFound(true)
        setLoading(false)
        return
      }

      setVideo(videoData)
      setLoading(false)
    }

    if (params.id) {
      loadVideo()
    }
  }, [params.id])

  const formatViews = (views: number) => {
    return views.toLocaleString()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-6xl mx-auto animate-pulse">
            <div className="aspect-video bg-muted rounded-lg mb-6" />
            <div className="h-8 bg-muted rounded w-3/4 mb-4" />
            <div className="h-32 bg-muted rounded" />
          </div>
        </div>
      </div>
    )
  }

  if (notFound || !video) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Video Not Found</h1>
          <p className="text-muted-foreground">The video you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <VideoPlayer video={video as Video} />

              {/* Video Info */}
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold text-balance">{video.title}</h1>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>{formatViews(video.views)} views</span>
                    <span>•</span>
                    <span>{formatDate(video.created_at)}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Like
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Creator Info */}
                {video.user && (
                  <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {video.user.full_name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{video.user.full_name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {video.user.visupoints} visupoints • {video.user.total_views} total views
                      </p>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Follow</Button>
                  </div>
                )}

                {/* Description */}
                {video.description && (
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">{video.description}</p>
                  </div>
                )}

                {/* Comments */}
                <CommentSection videoId={video.id} />
              </div>
            </div>

            {/* Sidebar - Related Videos */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Related Videos</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">No related videos yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
