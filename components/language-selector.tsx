"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

type Language = {
  code: string
  label: string
  flag: string
}

const LANGUAGES: Language[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
]

export function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState<string>("fr")

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("visual_lang")
      if (stored) setSelectedLang(stored)
    } catch {
      // Ignore localStorage errors
    }
  }, [])

  const current = LANGUAGES.find((l) => l.code === selectedLang) ?? LANGUAGES[0]

  const handleChange = (code: string) => {
    setSelectedLang(code)
    try {
      window.localStorage.setItem("visual_lang", code)
    } catch {
      // Ignore localStorage errors
    }
    console.log("[VISUAL] Language changed to:", code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/60 h-10 px-3 rounded-full text-xs font-semibold text-white"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{current.flag}</span>
          <span className="hidden md:inline">{current.label}</span>
          <span className="inline md:hidden">{current.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-gradient-to-b from-[#1a103c] to-[#0f0529] border border-purple-500/40 text-white backdrop-blur-2xl shadow-2xl min-w-[190px]"
      >
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`flex items-center gap-2 py-2.5 text-sm cursor-pointer ${
              lang.code === selectedLang ? "bg-purple-600/60 text-white" : "hover:bg-purple-700/40"
            }`}
          >
            <span className="w-6 text-lg">{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
