"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TrafficLightProps {
  position: "left" | "right"
}

const LIGHT_STYLES = [
  // RED (0)
  {
    mainBorder: "border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.7)]",
    lightOn: "bg-red-500 shadow-[0_0_40px_rgba(239,68,68,1),0_0_80px_rgba(239,68,68,0.5)]",
    lightOff: "bg-red-950 opacity-30",
    pulse: "animate-pulse-red",
    statusLabel: "Hors ligne",
  },
  // YELLOW (1)
  {
    mainBorder: "border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.7)]",
    lightOn: "bg-yellow-400 shadow-[0_0_40px_rgba(250,204,21,1),0_0_80px_rgba(250,204,21,0.5)]",
    lightOff: "bg-yellow-950 opacity-30",
    pulse: "animate-pulse-yellow",
    statusLabel: "En attente",
  },
  // GREEN (2)
  {
    mainBorder: "border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.7)]",
    lightOn: "bg-green-500 shadow-[0_0_40px_rgba(34,197,94,1),0_0_80px_rgba(34,197,94,0.5)]",
    lightOff: "bg-green-950 opacity-30",
    pulse: "animate-pulse-green",
    statusLabel: "Connecté",
  },
]

export function TrafficLight({ position }: TrafficLightProps) {
  const [activeLight, setActiveLight] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const currentStyles = LIGHT_STYLES[activeLight]

  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "w-20 h-60 relative rounded-3xl border-[5px] transition-all duration-700 flex flex-col items-center justify-between py-8 z-50",
          // 3D metallic housing with depth
          "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
          // Inner shadow for depth
          "shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.8)]",
          currentStyles.mainBorder,
        )}
        role="status"
        aria-live="polite"
        aria-label={`Statut de connexion: ${currentStyles.statusLabel}`}
      >
        {/* Top decorative screws */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-600 shadow-inner" />
          <div className="w-2 h-2 rounded-full bg-gray-600 shadow-inner" />
        </div>

        {/* Red Light with glass reflection effect */}
        <div className="relative">
          <div
            className={cn(
              "w-10 h-10 rounded-full border-[3px] border-gray-800/80 transition-all duration-500 relative overflow-hidden",
              activeLight === 0
                ? `${LIGHT_STYLES[0].lightOn} scale-110 ${LIGHT_STYLES[0].pulse}`
                : LIGHT_STYLES[0].lightOff,
            )}
          >
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full" />
            <div className="absolute top-1 left-1 w-3 h-3 bg-white/50 rounded-full blur-sm" />
          </div>
          {/* Light glow ring effect when active */}
          {activeLight === 0 && (
            <div className="absolute inset-0 w-10 h-10 rounded-full border-2 border-red-400/50 animate-ping" />
          )}
        </div>

        {/* Divider line */}
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Yellow Light with glass reflection effect */}
        <div className="relative">
          <div
            className={cn(
              "w-10 h-10 rounded-full border-[3px] border-gray-800/80 transition-all duration-500 relative overflow-hidden",
              activeLight === 1
                ? `${LIGHT_STYLES[1].lightOn} scale-110 ${LIGHT_STYLES[1].pulse}`
                : LIGHT_STYLES[1].lightOff,
            )}
          >
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full" />
            <div className="absolute top-1 left-1 w-3 h-3 bg-white/50 rounded-full blur-sm" />
          </div>
          {/* Light glow ring effect when active */}
          {activeLight === 1 && (
            <div className="absolute inset-0 w-10 h-10 rounded-full border-2 border-yellow-300/50 animate-ping" />
          )}
        </div>

        {/* Divider line */}
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Green Light with glass reflection effect */}
        <div className="relative">
          <div
            className={cn(
              "w-10 h-10 rounded-full border-[3px] border-gray-800/80 transition-all duration-500 relative overflow-hidden",
              activeLight === 2
                ? `${LIGHT_STYLES[2].lightOn} scale-110 ${LIGHT_STYLES[2].pulse}`
                : LIGHT_STYLES[2].lightOff,
            )}
          >
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full" />
            <div className="absolute top-1 left-1 w-3 h-3 bg-white/50 rounded-full blur-sm" />
          </div>
          {/* Light glow ring effect when active */}
          {activeLight === 2 && (
            <div className="absolute inset-0 w-10 h-10 rounded-full border-2 border-green-400/50 animate-ping" />
          )}
        </div>

        {/* Bottom decorative screws */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-600 shadow-inner" />
          <div className="w-2 h-2 rounded-full bg-gray-600 shadow-inner" />
        </div>

        {/* Side highlights for 3D effect */}
        <div className="absolute inset-y-4 left-0 w-1 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-600 rounded-l-full opacity-50" />
        <div className="absolute inset-y-4 right-0 w-1 bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-r-full" />
      </div>

      <div className="relative w-3 h-full min-h-[100px] mt-[-2px] -z-10">
        {/* Main pole with metallic finish */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full shadow-lg" />
        {/* Light reflection on pole */}
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gray-500 to-transparent rounded-l-full opacity-60" />
        {/* Shadow on pole */}
        <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-black/50 to-transparent rounded-r-full" />
        {/* Fade to transparent at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-purple-950/50" />
      </div>
    </div>
  )
}
