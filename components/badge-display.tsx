import { Badge } from '@/lib/types'
import { Sparkles } from 'lucide-react'

interface BadgeDisplayProps {
  badge: Badge
  size?: 'sm' | 'md' | 'lg'
  showDetails?: boolean
}

export function BadgeDisplay({ badge, size = 'md', showDetails = false }: BadgeDisplayProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className={`${sizeClasses[size]} bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border-2 border-primary/30 relative group`}
        title={badge.name}
      >
        <span>{badge.icon}</span>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 rounded-full transition-colors" />
      </div>
      {showDetails && (
        <div className="text-center">
          <p className="text-xs font-semibold">{badge.name}</p>
          {badge.description && (
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          )}
        </div>
      )}
    </div>
  )
}
