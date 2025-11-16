'use client'

import Link from 'next/link'
import { TrafficLight } from './traffic-light'
import { Search, ChevronDown, Globe, User } from 'lucide-react'
import { useState } from 'react'

export function VisualHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 gap-6">
          {/* Left: Traffic Light + VISUAL mini logo */}
          <div className="flex items-center gap-4">
            <TrafficLight />
            <div className="text-2xl font-bold gradient-tricolor-animated tracking-tight">
              VISUAL
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
            {/* Menu Principal */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
              >
                Menu Principal
                <ChevronDown className="w-4 h-4" />
              </button>
              {isMenuOpen && (
                <div className="absolute top-full mt-2 left-0 w-64 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-purple-400 mb-3">Profils Utilisateurs</h3>
                    <Link href="/login" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      🎬 Porteur de Projet
                    </Link>
                    <Link href="/login" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      💰 Investisseur
                    </Link>
                    <Link href="/explore" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      👁️ Visiteur
                    </Link>
                    <Link href="/login" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      📰 Infoporteur
                    </Link>
                    <Link href="/login" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      📖 Investi-Lecteur
                    </Link>
                    <div className="border-t border-white/10 my-2 pt-2">
                      <Link href="/about" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm text-gray-400">
                        À propos de VISUAL
                      </Link>
                      <Link href="/help" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm text-gray-400">
                        Aide & Support
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="search"
                placeholder="Rechercher des projets, créateurs..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:bg-white/20 transition-all outline-none text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Catégories */}
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
              >
                Catégories
                <ChevronDown className="w-4 h-4" />
              </button>
              {isCategoriesOpen && (
                <div className="absolute top-full mt-2 left-0 w-56 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-4 space-y-2">
                    <Link href="/categories/films" className="block px-4 py-2 rounded-lg hover:bg-purple-600/20 transition-colors text-sm">
                      🎬 Films
                    </Link>
                    <Link href="/categories/video-clips" className="block px-4 py-2 rounded-lg hover:bg-purple-600/20 transition-colors text-sm">
                      🎵 Vidéo-clips
                    </Link>
                    <Link href="/categories/documentaires" className="block px-4 py-2 rounded-lg hover:bg-purple-600/20 transition-colors text-sm">
                      📺 Documentaires
                    </Link>
                    <div className="border-t border-white/10 my-2 pt-2">
                      <Link href="/categories/live" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm text-gray-400">
                        🔴 Live Streaming
                      </Link>
                      <Link href="/categories/nft" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm text-gray-400">
                        💎 NFT Marketplace
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Multi-langues */}
            <div className="relative">
              <button
                onClick={() => setIsLanguagesOpen(!isLanguagesOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLanguagesOpen && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-2">
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      🇫🇷 Français
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      🇬🇧 English
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      🇪🇸 Español
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                      🇩🇪 Deutsch
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Connexion/Inscription */}
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all text-sm font-medium"
            >
              <User className="w-4 h-4" />
              Connexion
            </Link>
          </div>

          {/* Right: Traffic Light */}
          <div className="hidden lg:block">
            <TrafficLight />
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
