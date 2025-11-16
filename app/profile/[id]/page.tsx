import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { VideoGrid } from '@/components/video-grid'
import { VisupointsDisplay } from '@/components/visupoints-display'
import { BadgeDisplay } from '@/components/badge-display'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, VideoIcon, Award, Calendar } from 'lucide-react'

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const supabase = await getSupabaseServerClient()
  
  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!profile) {
    notFound()
  }

  const { data: videos } = await supabase
    .from('videos')
    .select('*')
    .eq('user_id', params.id)
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  const { data: userBadges } = await supabase
    .from('user_badges')
    .select(`
      *,
      badge:badges(*)
    `)
    .eq('user_id', params.id)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
  }

  const totalVideos = videos?.length || 0
  const totalViews = profile.total_views || 0
  const visupoints = profile.visupoints || 0

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-24 h-24 border-4 border-primary">
                <AvatarFallback className="bg-primary/20 text-primary text-3xl">
                  {profile.full_name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{profile.full_name}</h1>
                <p className="text-muted-foreground mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Calendar className="w-4 h-4" />
                  Joined {formatDate(profile.created_at)}
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                  <VisupointsDisplay points={visupoints} size="lg" />
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <VideoIcon className="w-5 h-5" />
                    <span className="font-semibold">{totalVideos}</span>
                    <span>Videos</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="w-5 h-5" />
                    <span className="font-semibold">{totalViews.toLocaleString()}</span>
                    <span>Views</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">{userBadges?.length || 0}</span>
                    <span>Badges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badges Section */}
          {userBadges && userBadges.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Badges ({userBadges.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6">
                  {userBadges.map((userBadge) => (
                    <BadgeDisplay
                      key={userBadge.id}
                      badge={userBadge.badge}
                      showDetails
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Videos Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Videos ({totalVideos})</h2>
            {videos && videos.length > 0 ? (
              <VideoGrid videos={videos} />
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <VideoIcon className="w-12 h-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No videos yet</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
