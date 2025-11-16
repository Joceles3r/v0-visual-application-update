'use client'

export function CinemaFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Cinema curtain effect */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-b from-red-900/80 to-transparent" />
      <div className="absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-t from-red-900/80 to-transparent" />
      
      {/* Main frame */}
      <div className="relative border-8 border-red-900/60 rounded-3xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm shadow-[0_0_50px_rgba(153,27,27,0.5)]">
        {/* Corner decorations */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-yellow-500/80 rounded-tl-lg" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-yellow-500/80 rounded-tr-lg" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-yellow-500/80 rounded-bl-lg" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-yellow-500/80 rounded-br-lg" />
        
        {/* Content */}
        <div className="p-12">
          {children}
        </div>
      </div>
    </div>
  )
}
