import { Video } from '@/lib/types'
import { Play, Eye } from 'lucide-react'

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    
    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 7) return `${days} days ago`
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`
    if (days < 365) return `${Math.floor(days / 30)} months ago`
    return `${Math.floor(days / 365)} years ago`
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-3">
        {video.thumbnail_url ? (
          <img
            src={video.thumbnail_url || "/placeholder.svg"}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <Play className="w-12 h-12 text-primary" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 bg-primary/0 group-hover:bg-primary rounded-full flex items-center justify-center transition-all scale-0 group-hover:scale-100">
            <Play className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {video.views > 0 && (
          <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {formatViews(video.views)}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {video.user && (
            <>
              <span className="line-clamp-1">{video.user.full_name}</span>
              <span>•</span>
            </>
          )}
          <span>{formatDate(video.created_at)}</span>
        </div>
      </div>
    </div>
  )
}
