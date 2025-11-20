"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TrafficLightProps {
  position: "left" | "right"
}

export function TrafficLight({ position }: TrafficLightProps) {
  const [activeLight, setActiveLight] = useState<0 | 1 | 2>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => ((prev + 1) % 3) as 0 | 1 | 2)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const getBorderColor = () => {
    switch (activeLight) {
      case 0:
        return "border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.6)]"
      case 1:
        return "border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)]"
      case 2:
        return "border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.6)]"
      default:
        return "border-gray-700"
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "w-16 h-52 bg-gradient-to-b from-gray-900 to-black rounded-2xl border-4 transition-all duration-700 flex flex-col items-center justify-between py-6 relative z-50",
          getBorderColor(),
        )}
      >
        {/* Red Light */}
        <div
          className={cn(
            "w-8 h-8 rounded-full border-2 border-red-900/50 transition-all duration-500",
            activeLight === 0
              ? "bg-red-500 shadow-[0_0_30px_rgba(239,68,68,1)] scale-110 animate-pulse-red"
              : "bg-red-950 opacity-30",
          )}
        />

        {/* Yellow Light */}
        <div
          className={cn(
            "w-8 h-8 rounded-full border-2 border-yellow-900/50 transition-all duration-500",
            activeLight === 1
              ? "bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,1)] scale-110 animate-pulse-yellow"
              : "bg-yellow-950 opacity-30",
          )}
        />

        {/* Green Light */}
        <div
          className={cn(
            "w-8 h-8 rounded-full border-2 border-green-900/50 transition-all duration-500",
            activeLight === 2
              ? "bg-green-500 shadow-[0_0_30px_rgba(34,197,94,1)] scale-110 animate-pulse-green"
              : "bg-green-950 opacity-30",
          )}
        />
      </div>

      <div className="w-2 h-full min-h-[100px] bg-gradient-to-b from-gray-800 to-transparent opacity-50 mt-[-2px] -z-10" />
    </div>
  )
}
