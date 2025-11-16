import { Zap } from 'lucide-react'

interface VisupointsDisplayProps {
  points: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export function VisupointsDisplay({ points, size = 'md', showLabel = true }: VisupointsDisplayProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  return (
    <div className={`flex items-center gap-1.5 ${sizeClasses[size]}`}>
      <Zap className={`${iconSizes[size]} text-primary fill-primary`} />
      <span className="font-bold">{points.toLocaleString()}</span>
      {showLabel && (
        <span className="text-muted-foreground">visupoints</span>
      )}
    </div>
  )
}
