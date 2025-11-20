"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  User,
  Film,
  LayoutGrid,
  LogIn,
  Star,
  Trophy,
  Wallet,
  Settings,
  Bell,
  Search,
  UserPlus,
  HelpCircle,
  Users,
  BarChart,
  Video,
  Home,
  Archive,
  Tv,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function VisualHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b2e]/98 via-[#0f0529]/98 to-[#1a0b2e]/98 backdrop-blur-2xl border-b border-white/10 h-20 shadow-2xl shadow-purple-900/40" />

      <div className="container mx-auto px-6 h-20 relative flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 z-10 group">
            <div className="relative">
              <span className="text-3xl font-black tracking-tighter gradient-tricolor-animated drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                VISUAL
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un projet..."
              className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-56"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 z-10">
          {/* Menu 1: Découvrir VISUAL */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Découvrir VISUAL <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50">
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">
                La Plateforme VISUAL
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <Film className="mr-3 h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Présentation Rapide</span>
                  <span className="text-xs text-gray-400">Streaming participatif innovant</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <LayoutGrid className="mr-3 h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Les 7 Catégories</span>
                  <span className="text-xs text-gray-400">Films, Clips, Docs, Séries...</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <Trophy className="mr-3 h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Concept : Regarde • Investis • Gagne</span>
                  <span className="text-xs text-gray-400">La nouvelle économie du streaming</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <HelpCircle className="mr-3 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">FAQ / Questions Fréquentes</span>
                  <span className="text-xs text-gray-400">Tout ce que vous devez savoir</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu 2: Rôles & Comptes */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Rôles & Comptes <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50">
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">
                Les Rôles sur VISUAL
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-blue-600/50 focus:text-white cursor-pointer group py-3">
                <User className="mr-3 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Visiteur</span>
                  <span className="text-xs text-gray-400">Découvrez et explorez gratuitement</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <Video className="mr-3 h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Porteur de Projet</span>
                  <span className="text-xs text-gray-400">Financez vos créations</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-green-600/50 focus:text-white cursor-pointer group py-3">
                <Wallet className="mr-3 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Investisseur</span>
                  <span className="text-xs text-gray-400">Investissez et générez des revenus</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-cyan-600/50 focus:text-white cursor-pointer group py-3">
                <BarChart className="mr-3 h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Infoporteur</span>
                  <span className="text-xs text-gray-400">Partagez et gagnez</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-3">
                <Star className="mr-3 h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Investi-lecteur</span>
                  <span className="text-xs text-gray-400">Regardez et investissez</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <Users className="mr-3 h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Comparatif des Rôles</span>
                  <span className="text-xs text-gray-400">Trouvez le rôle qui vous correspond</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu 3: Navigation VISUAL */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Navigation <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50">
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">Naviguer sur VISUAL</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                <Home className="mr-3 h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Accueil VISUAL</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                <Film className="mr-3 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Projets en Cours</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                <Trophy className="mr-3 h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">TOP 10 / Classements</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                <Tv className="mr-3 h-5 w-5 text-red-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Visual Studio Live Show (VSLS)</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                <Archive className="mr-3 h-5 w-5 text-gray-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Archives / Historique</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                <HelpCircle className="mr-3 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Aide & Support</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu 4: Mon Espace */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Mon Espace <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50">
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">Mon Compte VISUAL</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <LayoutGrid className="mr-3 h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Tableau de Bord</span>
                  <span className="text-xs text-gray-400">Vue d'ensemble de votre activité</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <Video className="mr-3 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Mes Projets</span>
                  <span className="text-xs text-gray-400">Pour les porteurs de projets</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <Wallet className="mr-3 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Mes Investissements</span>
                  <span className="text-xs text-gray-400">Pour les investisseurs</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <Trophy className="mr-3 h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Mes VISUpoints & Récompenses</span>
                  <span className="text-xs text-gray-400">Gamification et badges</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                <Settings className="mr-2 h-4 w-4 text-gray-400" /> Paramètres du Compte
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                <Bell className="mr-2 h-4 w-4 text-yellow-400" /> Notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
          <Button
            variant="ghost"
            className="bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/50 hover:scale-105 ml-2"
          >
            <LogIn className="mr-2 h-4 w-4" /> Se connecter
          </Button>

          <Button className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:via-violet-500 hover:to-fuchsia-500 text-white rounded-lg border border-white/20 h-10 px-6 text-sm font-bold shadow-lg shadow-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/70">
            <UserPlus className="mr-2 h-4 w-4" /> Créer un Compte
          </Button>
        </div>
      </div>
    </header>
  )
}
