"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem("visual_lang")
    if (stored) {
      setSelectedLang(stored)
    }
  }, [])

  const current = LANGUAGES.find((l) => l.code === selectedLang) ?? LANGUAGES[0]

  const handleChange = (code: string) => {
    setSelectedLang(code)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("visual_lang", code)
    }
    console.log("[VISUAL] Language changed to:", code)
    // TODO: brancher ici le système i18n global quand il sera prêt
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-4 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30 gap-2"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50"
      >
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className="cursor-pointer focus:bg-purple-600/50 focus:text-white py-2.5"
          >
            <span className="mr-2 text-lg">{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
