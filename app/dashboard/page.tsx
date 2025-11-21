"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { VideoGrid } from "@/components/video-grid"
import { VisupointsDisplay } from "@/components/visupoints-display"
import { BadgeDisplay } from "@/components/badge-display"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Upload, Eye, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { createBrowserClient } from "@/lib/supabase/client"

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [videos, setVideos] = useState<any[]>([])
  const [userBadges, setUserBadges] = useState<any[]>([])

  useEffect(() => {
    async function loadDashboard() {
      console.log("[v0] Loading dashboard...")
      const supabase = createBrowserClient()

      const { data: sessionData } = await supabase.auth.getSession()
      console.log("[v0] Session check:", sessionData.session?.user?.id)

      if (!sessionData.session) {
        console.log("[v0] No session found, redirecting to login")
        router.push("/login")
        return
      }

      const currentUser = sessionData.session.user
      console.log("[v0] Current user from session:", currentUser.id)
      setUser(currentUser)

      const { data: profileData, error: profileError } = await supabase
        .from("users")
        .select("*")
        .eq("id", currentUser.id)
        .single()

      if (profileError) {
        console.error("[v0] Error loading profile:", profileError.message)
      } else {
        console.log("[v0] Profile loaded:", profileData?.full_name)
        setProfile(profileData)
      }

      const { data: videosData } = await supabase
        .from("videos")
        .select("*")
        .eq("user_id", currentUser.id)
        .order("created_at", { ascending: false })

      console.log("[v0] Videos loaded:", videosData?.length || 0)
      setVideos(videosData || [])

      const { data: badgesData } = await supabase
        .from("user_badges")
        .select(`
          *,
          badge:badges(*)
        `)
        .eq("user_id", currentUser.id)

      console.log("[v0] Badges loaded:", badgesData?.length || 0)
      setUserBadges(badgesData || [])

      setLoading(false)
    }

    loadDashboard()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement de votre dashboard...</p>
        </div>
      </div>
    )
  }

  const totalVideos = videos.length
  const totalViews = profile?.total_views || 0
  const visupoints = profile?.visupoints || 0

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Bienvenue {profile?.full_name || user?.email}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Visupoints</CardTitle>
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
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Videos</CardTitle>
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
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
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
              <CardTitle className="text-sm font-medium text-muted-foreground">Badges Earned</CardTitle>
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{userBadges.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Badges Section */}
        {userBadges.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Vos Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6">
                {userBadges.map((userBadge) => (
                  <BadgeDisplay key={userBadge.id} badge={userBadge.badge} showDetails />
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
              Uploader une Nouvelle Vidéo
            </Button>
          </Link>
        </div>

        {/* My Videos */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Vos Vidéos</h2>
          {videos.length > 0 ? (
            <VideoGrid videos={videos} />
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Video className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">Vous n'avez pas encore uploadé de vidéos</p>
                <Link href="/upload">
                  <Button>Uploader Votre Première Vidéo</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
