'use client'

export function TrafficLight({ className = '' }: { className?: string }) {
  return (
    <div className={`relative p-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-4 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.5)] ${className}`}>
      <div className="flex flex-col gap-3">
        {/* Red light with enhanced glow */}
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-red-500/30 border-2 border-red-500 animate-pulse-red shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
          <div className="absolute inset-0 w-8 h-8 rounded-full bg-red-500/20 animate-ping" />
        </div>
        
        {/* Yellow light with enhanced glow */}
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-yellow-500/30 border-2 border-yellow-500 animate-pulse-yellow shadow-[0_0_20px_rgba(234,179,8,0.8)]" />
          <div className="absolute inset-0 w-8 h-8 rounded-full bg-yellow-500/20 animate-ping animation-delay-1000" />
        </div>
        
        {/* Green light with enhanced glow */}
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-green-500/30 border-2 border-green-500 animate-pulse-green shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
          <div className="absolute inset-0 w-8 h-8 rounded-full bg-green-500/20 animate-ping animation-delay-2000" />
        </div>
      </div>
    </div>
  )
}
