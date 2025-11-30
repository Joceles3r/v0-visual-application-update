"use client"

import { Navigation } from "@/components/navigation"
import { VideoGrid } from "@/components/video-grid"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import type { Video } from "@/lib/types"
import { useEffect, useState } from "react"
import { Play, TrendingUp, Clock, Award } from "lucide-react"

const mockVideos: Video[] = [
  {
    id: "1",
    title: "Comment VISUAL révolutionne la monétisation vidéo",
    description: "Découvrez le concept unique de VISUAL et comment gagner des VisuPoints",
    thumbnail_url: "/visual-platform-video-monetization.jpg",
    video_url: "",
    user_id: "demo-user-1",
    status: "published",
    views: 15420,
    clicks: 892,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user: {
      id: "demo-user-1",
      full_name: "VISUAL Team",
      email: "",
      avatar_url: "/visual-team-avatar.jpg",
      role: "porteur",
      visupoints: 50000,
      total_views: 150000,
      total_clicks: 8500,
    },
  },
  {
    id: "2",
    title: "Tutoriel: Devenir Porteur de Projet sur VISUAL",
    description: "Guide complet pour publier votre première vidéo et attirer des investisseurs",
    thumbnail_url: "/tutorial-video-creator-guide.jpg",
    video_url: "",
    user_id: "demo-user-2",
    status: "published",
    views: 8750,
    clicks: 523,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user: {
      id: "demo-user-2",
      full_name: "Marie Créatrice",
      email: "",
      avatar_url: "/female-creator-avatar.jpg",
      role: "porteur",
      visupoints: 25000,
      total_views: 87500,
      total_clicks: 5230,
    },
  },
  {
    id: "3",
    title: "Les secrets des Investisseurs VISUAL qui réussissent",
    description: "Stratégies pour maximiser vos retours en soutenant les bons projets",
    thumbnail_url: "/investment-strategy-success.jpg",
    video_url: "",
    user_id: "demo-user-3",
    status: "published",
    views: 12300,
    clicks: 756,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user: {
      id: "demo-user-3",
      full_name: "Jean Investisseur",
      email: "",
      avatar_url: "/male-investor-avatar.jpg",
      role: "investisseur",
      visupoints: 75000,
      total_views: 0,
      total_clicks: 0,
    },
  },
  {
    id: "4",
    title: "VISUAL vs YouTube: Pourquoi les créateurs migrent",
    description: "Analyse comparative des modèles de monétisation",
    thumbnail_url: "/youtube-vs-visual-comparison.jpg",
    video_url: "",
    user_id: "demo-user-4",
    status: "published",
    views: 23100,
    clicks: 1245,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user: {
      id: "demo-user-4",
      full_name: "Tech Analyst",
      email: "",
      avatar_url: "/tech-analyst-avatar.png",
      role: "infoporteur",
      visupoints: 42000,
      total_views: 231000,
      total_clicks: 12450,
    },
  },
  {
    id: "5",
    title: "Cuisine fusion: Recettes qui cartonnent sur VISUAL",
    description: "Comment un chef a gagné 50,000 VisuPoints en 1 mois",
    thumbnail_url: "/fusion-cooking-recipe-video.jpg",
    video_url: "",
    user_id: "demo-user-5",
    status: "published",
    views: 18900,
    clicks: 1023,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user: {
      id: "demo-user-5",
      full_name: "Chef Marco",
      email: "",
      avatar_url: "/chef-avatar-cooking.jpg",
      role: "porteur",
      visupoints: 50000,
      total_views: 189000,
      total_clicks: 10230,
    },
  },
  {
    id: "6",
    title: "Fitness: Programme 30 jours transformation",
    description: "Le programme viral qui a généré 100,000 vues en une semaine",
    thumbnail_url: "/fitness-transformation-workout.jpg",
    video_url: "",
    user_id: "demo-user-6",
    status: "published",
    views: 45200,
    clicks: 2890,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user: {
      id: "demo-user-6",
      full_name: "FitCoach Sarah",
      email: "",
      avatar_url: "/fitness-coach-avatar.png",
      role: "porteur",
      visupoints: 89000,
      total_views: 452000,
      total_clicks: 28900,
    },
  },
  {
    id: "7",
    title: "Développement web: Créer une app en 1 heure",
    description: "Tutoriel complet pour débutants avec React et Next.js",
    thumbnail_url: "/web-development-coding-tutorial.jpg",
    video_url: "",
    user_id: "demo-user-7",
    status: "published",
    views: 31500,
    clicks: 1876,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user: {
      id: "demo-user-7",
      full_name: "DevPro Lucas",
      email: "",
      avatar_url: "/developer-programmer-avatar.jpg",
      role: "porteur",
      visupoints: 67000,
      total_views: 315000,
      total_clicks: 18760,
    },
  },
  {
    id: "8",
    title: "Voyage: Les destinations cachées d'Europe",
    description: "Guide des lieux secrets que les touristes ne connaissent pas",
    thumbnail_url: "/hidden-europe-travel-destination.jpg",
    video_url: "",
    user_id: "demo-user-8",
    status: "published",
    views: 27800,
    clicks: 1654,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user: {
      id: "demo-user-8",
      full_name: "Travel Emma",
      email: "",
      avatar_url: "/travel-blogger-avatar.jpg",
      role: "porteur",
      visupoints: 54000,
      total_views: 278000,
      total_clicks: 16540,
    },
  },
]

export default function ExplorePage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "trending" | "recent" | "top">("all")

  useEffect(() => {
    const loadVideos = async () => {
      const supabase = getSupabaseBrowserClient()

      if (!supabase) {
        // Supabase not available, use mock data
        console.log("[v0] Supabase not available, using mock videos")
        setVideos(mockVideos)
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from("videos")
          .select(`
            *,
            user:users(*)
          `)
          .eq("status", "published")
          .order("created_at", { ascending: false })
          .limit(24)

        if (error) {
          console.log("[v0] Supabase error, using mock videos:", error.message)
          setVideos(mockVideos)
        } else {
          setVideos((data as Video[]) || mockVideos)
        }
      } catch (err) {
        console.log("[v0] Exception loading videos, using mock data")
        setVideos(mockVideos)
      }

      setLoading(false)
    }

    loadVideos()
  }, [])

  const filteredVideos = videos
    .filter(() => {
      // For demo, all filters show all videos
      return true
    })
    .sort((a, b) => {
      if (filter === "trending") return (b.views || 0) - (a.views || 0)
      if (filter === "top") return (b.clicks || 0) - (a.clicks || 0)
      if (filter === "recent") return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      return 0
    })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Explorer les Vidéos</h1>
          <p className="text-muted-foreground mb-6">
            Découvrez du contenu incroyable de créateurs du monde entier et gagnez des VisuPoints
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              <Play className="w-4 h-4" />
              Toutes
            </button>
            <button
              onClick={() => setFilter("trending")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "trending"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Tendances
            </button>
            <button
              onClick={() => setFilter("recent")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "recent"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              <Clock className="w-4 h-4" />
              Récentes
            </button>
            <button
              onClick={() => setFilter("top")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "top"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              <Award className="w-4 h-4" />
              Top Clics
            </button>
          </div>
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{videos.length}</div>
            <div className="text-sm text-muted-foreground">Vidéos disponibles</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              {videos.reduce((acc, v) => acc + (v.views || 0), 0).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Vues totales</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              {videos.reduce((acc, v) => acc + (v.clicks || 0), 0).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Clics générés</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{new Set(videos.map((v) => v.user_id)).size}</div>
            <div className="text-sm text-muted-foreground">Créateurs actifs</div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-video bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <VideoGrid videos={filteredVideos} />
        )}
      </div>
    </div>
  )
}
