import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { VideoPlayer } from '@/components/video-player'
import { CommentSection } from '@/components/comment-section'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { Video } from '@/lib/types'
import { Eye, ThumbsUp, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default async function VideoPage({ params }: { params: { id: string } }) {
  const supabase = await getSupabaseServerClient()
  
  const { data: video } = await supabase
    .from('videos')
    .select(`
      *,
      user:users(*)
    `)
    .eq('id', params.id)
    .single()

  if (!video) {
    notFound()
  }

  const formatViews = (views: number) => {
    return views.toLocaleString()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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
                <h1 className="text-2xl md:text-3xl font-bold text-balance">
                  {video.title}
                </h1>

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
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Follow
                    </Button>
                  </div>
                )}

                {/* Description */}
                {video.description && (
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {video.description}
                    </p>
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
                {/* We'll add related videos here later */}
                <p className="text-sm text-muted-foreground">
                  No related videos yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
