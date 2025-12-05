"use client"

import { Navigation } from "@/components/navigation"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { VisupointsDisplay } from "@/components/visupoints-display"
import { Trophy, Medal, Eye, VideoIcon, Award } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function LeaderboardPage() {
  const [usersWithStats, setUsersWithStats] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadLeaderboard() {
      const supabase = getSupabaseBrowserClient()

      if (!supabase) {
        setLoading(false)
        return
      }

      const { data: topUsers } = await supabase
        .from("users")
        .select(`
          *,
          user_badges:user_badges(count)
        `)
        .order("visupoints", { ascending: false })
        .limit(50)

      if (topUsers) {
        const usersWithVideoCounts = await Promise.all(
          topUsers.map(async (user, index) => {
            const { count: videoCount } = await supabase!
              .from("videos")
              .select("*", { count: "exact", head: true })
              .eq("user_id", user.id)

            return {
              ...user,
              rank: index + 1,
              videoCount: videoCount || 0,
              badgeCount: user.user_badges[0]?.count || 0,
            }
          }),
        )
        setUsersWithStats(usersWithVideoCounts)
      }
      setLoading(false)
    }

    loadLeaderboard()
  }, [])

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />
      default:
        return <span className="text-muted-foreground font-semibold">#{rank}</span>
    }
  }

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/50"
      case 2:
        return "bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/50"
      case 3:
        return "bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-600/50"
      default:
        return "bg-card border-border"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-10 bg-muted rounded w-1/3" />
              <div className="h-6 bg-muted rounded w-2/3" />
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-20 bg-muted rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="w-10 h-10 text-primary" />
              Leaderboard
            </h1>
            <p className="text-muted-foreground">Top creators ranked by visupoints and achievements</p>
          </div>

          {/* Top 3 Podium */}
          {usersWithStats.length >= 3 && (
            <div className="grid grid-cols-3 gap-4 mb-12">
              {/* Second Place */}
              <div className="flex flex-col items-center pt-12">
                <div className="relative mb-4">
                  <Avatar className="w-20 h-20 border-4 border-gray-400">
                    <AvatarFallback className="bg-gray-400/20 text-gray-400 text-2xl">
                      {usersWithStats[1].full_name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-400 text-background rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <Link
                  href={`/profile/${usersWithStats[1].id}`}
                  className="text-center hover:text-primary transition-colors"
                >
                  <p className="font-semibold">{usersWithStats[1].full_name}</p>
                </Link>
                <VisupointsDisplay points={usersWithStats[1].visupoints} size="sm" showLabel={false} />
              </div>

              {/* First Place */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Avatar className="w-24 h-24 border-4 border-yellow-500">
                    <AvatarFallback className="bg-yellow-500/20 text-yellow-500 text-3xl">
                      {usersWithStats[0].full_name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-background rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <Trophy className="absolute -top-8 left-1/2 -translate-x-1/2 w-10 h-10 text-yellow-500" />
                </div>
                <Link
                  href={`/profile/${usersWithStats[0].id}`}
                  className="text-center hover:text-primary transition-colors"
                >
                  <p className="font-bold text-lg">{usersWithStats[0].full_name}</p>
                </Link>
                <VisupointsDisplay points={usersWithStats[0].visupoints} size="md" showLabel={false} />
              </div>

              {/* Third Place */}
              <div className="flex flex-col items-center pt-12">
                <div className="relative mb-4">
                  <Avatar className="w-20 h-20 border-4 border-amber-600">
                    <AvatarFallback className="bg-amber-600/20 text-amber-600 text-2xl">
                      {usersWithStats[2].full_name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-600 text-background rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <Link
                  href={`/profile/${usersWithStats[2].id}`}
                  className="text-center hover:text-primary transition-colors"
                >
                  <p className="font-semibold">{usersWithStats[2].full_name}</p>
                </Link>
                <VisupointsDisplay points={usersWithStats[2].visupoints} size="sm" showLabel={false} />
              </div>
            </div>
          )}

          {/* Full Leaderboard */}
          <div className="space-y-3">
            {usersWithStats.map((user) => (
              <Link key={user.id} href={`/profile/${user.id}`}>
                <div
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all hover:scale-[1.02] ${getRankBadgeColor(user.rank)}`}
                >
                  {/* Rank */}
                  <div className="w-12 flex items-center justify-center">{getRankIcon(user.rank)}</div>

                  {/* Avatar */}
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {user.full_name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  {/* User Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold">{user.full_name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <VisupointsDisplay points={user.visupoints} size="sm" showLabel={false} />
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {user.total_views.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1">
                        <VideoIcon className="w-3 h-3" />
                        {user.videoCount} videos
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {user.badgeCount} badges
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
