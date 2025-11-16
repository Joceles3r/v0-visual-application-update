import { Navigation } from '@/components/navigation'
import { VideoGrid } from '@/components/video-grid'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { Video } from '@/lib/types'

export default async function ExplorePage() {
  const supabase = await getSupabaseServerClient()
  
  const { data: videos } = await supabase
    .from('videos')
    .select(`
      *,
      user:users(*)
    `)
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(24)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Explore</h1>
          <p className="text-muted-foreground">
            Discover amazing content from creators around the world
          </p>
        </div>

        <VideoGrid videos={videos as Video[]} />
      </div>
    </div>
  )
}
