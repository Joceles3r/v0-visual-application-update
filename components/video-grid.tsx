import Link from 'next/link'
import { Video } from '@/lib/types'
import { VideoCard } from './video-card'

interface VideoGridProps {
  videos: Video[]
}

export function VideoGrid({ videos }: VideoGridProps) {
  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No videos found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <Link key={video.id} href={`/video/${video.id}`}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  )
}
