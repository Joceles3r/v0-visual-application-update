import { redirect } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { VideoGrid } from '@/components/video-grid'
import { VisupointsDisplay } from '@/components/visupoints-display'
import { BadgeDisplay } from '@/components/badge-display'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Video, Upload, Eye, TrendingUp, Award } from 'lucide-react'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await getSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()

  const { data: videos } = await supabase
    .from('videos')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const { data: userBadges } = await supabase
    .from('user_badges')
    .select(`
      *,
      badge:badges(*)
    `)
    .eq('user_id', user.id)

  const totalVideos = videos?.length || 0
  const totalViews = profile?.total_views || 0
  const visupoints = profile?.visupoints || 0

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your content and track your progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Visupoints
              </CardTitle>
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <VisupointsDisplay points={visupoints} size="lg" showLabel={false} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Videos
              </CardTitle>
              <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Video className="w-4 h-4 text-secondary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalVideos}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Views
              </CardTitle>
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                <Eye className="w-4 h-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalViews.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Badges Earned
              </CardTitle>
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{userBadges?.length || 0}</div>
            </CardContent>
          </Card>
        </div>

        {/* Badges Section */}
        {userBadges && userBadges.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Your Badges
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

        {/* Quick Actions */}
        <div className="mb-8">
          <Link href="/upload">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Upload className="w-5 h-5 mr-2" />
              Upload New Video
            </Button>
          </Link>
        </div>

        {/* My Videos */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Videos</h2>
          {videos && videos.length > 0 ? (
            <VideoGrid videos={videos} />
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Video className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">You haven't uploaded any videos yet</p>
                <Link href="/upload">
                  <Button>Upload Your First Video</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
