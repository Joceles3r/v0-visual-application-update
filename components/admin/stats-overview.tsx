import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Video, MessageSquare, Trophy } from "lucide-react"

interface StatsOverviewProps {
  stats: {
    users: number
    videos: number
    comments: number
    totalVisupoints: number
  }
}

export function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-purple-400/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">Utilisateurs</CardTitle>
          <Users className="h-4 w-4 text-purple-200" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{stats.users}</div>
          <p className="text-xs text-purple-100">Total des inscrits</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-pink-600 to-pink-700 border-pink-400/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">Vidéos</CardTitle>
          <Video className="h-4 w-4 text-pink-200" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{stats.videos}</div>
          <p className="text-xs text-pink-100">Total des projets</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-blue-400/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">Commentaires</CardTitle>
          <MessageSquare className="h-4 w-4 text-blue-200" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{stats.comments}</div>
          <p className="text-xs text-blue-100">Total des interactions</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-600 to-yellow-700 border-yellow-400/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">Visupoints</CardTitle>
          <Trophy className="h-4 w-4 text-yellow-200" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{stats.totalVisupoints.toLocaleString()}</div>
          <p className="text-xs text-yellow-100">Total distribués</p>
        </CardContent>
      </Card>
    </div>
  )
}
