import { getSupabaseServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UsersManagement } from "@/components/admin/users-management"
import { VideosManagement } from "@/components/admin/videos-management"
import { CommentsManagement } from "@/components/admin/comments-management"
import { StatsOverview } from "@/components/admin/stats-overview"
import { TrafficLight } from "@/components/traffic-light"

export default async function AdminDashboard() {
  const supabase = await getSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?redirect=/admin")
  }

  const { data: userData } = await supabase.from("users").select("role, full_name, email").eq("id", user.id).single()

  if (!userData || userData.role !== "admin") {
    redirect("/")
  }

  const [usersCount, videosCount, commentsCount, totalVisupoints] = await Promise.all([
    supabase.from("users").select("*", { count: "exact", head: true }),
    supabase.from("videos").select("*", { count: "exact", head: true }),
    supabase.from("comments").select("*", { count: "exact", head: true }),
    supabase.from("users").select("visupoints"),
  ])

  const stats = {
    users: usersCount.count || 0,
    videos: videosCount.count || 0,
    comments: commentsCount.count || 0,
    totalVisupoints: totalVisupoints.data?.reduce((sum, u) => sum + (u.visupoints || 0), 0) || 0,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black">
      <TrafficLight position="left" />
      <TrafficLight position="right" />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Dashboard{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ADMIN</span>
          </h1>
          <p className="text-purple-200">Bienvenue {userData.full_name || userData.email}</p>
        </div>

        <StatsOverview stats={stats} />

        <Card className="bg-purple-900/20 border-purple-500/30 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle className="text-white">Gestion de la Plateforme</CardTitle>
            <CardDescription className="text-purple-200">
              Gérez les utilisateurs, vidéos et commentaires de VISUAL
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-purple-800/30">
                <TabsTrigger value="users" className="data-[state=active]:bg-purple-600">
                  Utilisateurs
                </TabsTrigger>
                <TabsTrigger value="videos" className="data-[state=active]:bg-purple-600">
                  Vidéos
                </TabsTrigger>
                <TabsTrigger value="comments" className="data-[state=active]:bg-purple-600">
                  Commentaires
                </TabsTrigger>
              </TabsList>

              <TabsContent value="users" className="mt-6">
                <UsersManagement />
              </TabsContent>

              <TabsContent value="videos" className="mt-6">
                <VideosManagement />
              </TabsContent>

              <TabsContent value="comments" className="mt-6">
                <CommentsManagement />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
