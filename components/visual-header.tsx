"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  Search,
  Film,
  LayoutGrid,
  Trophy,
  HelpCircle,
  Tv,
  Archive,
  TrendingUp,
  Star,
  Video,
  Wallet,
  Users,
  BarChart3,
  Upload,
  Briefcase,
  History,
  CreditCard,
  GraduationCap,
  Mail,
  LifeBuoy,
  BookOpen,
  AlertCircle,
  Activity,
  LayoutDashboard,
  Database,
  FileText,
  Cog,
  Settings,
  Bell,
  User,
  UserPlus,
  LogIn,
  Eye,
  FolderOpen,
  Award,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageSelector } from "@/components/language-selector"

export function VisualHeader() {
  const IS_ADMIN = false // TODO: brancher sur le rôle Supabase plus tard

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Fond / gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b2e]/98 via-[#0f0529]/98 to-[#1a0b2e]/98 backdrop-blur-2xl border-b border-white/10 h-20 shadow-2xl shadow-purple-900/40" />

      <div className="container mx-auto px-6 h-20 relative flex items-center justify-between">
        {/* Zone gauche : logo + recherche */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 z-10 group">
            <div className="relative">
              <span className="text-3xl font-black tracking-tighter gradient-tricolor-animated drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                VISUAL
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
          </Link>

          {/* Barre de recherche */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un projet..."
              className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-56"
            />
          </div>
        </div>

        {/* Zone droite : menus + langues + auth */}
        <div className="flex items-center gap-2 z-10 flex-wrap justify-end">
          {/* 1. Découvrir VISUAL */}
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
                  <span className="font-semibold">Concept : Regarde - Investis - Gagne</span>
                  <span className="text-xs text-gray-400">La nouvelle économie du streaming</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-white/10" />

              <Link href="/faq" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                  <HelpCircle className="mr-3 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="font-semibold">FAQ / Questions fréquentes</span>
                    <span className="text-xs text-gray-400">Tout ce que vous devez savoir</span>
                  </div>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 2. Rôles VISUAL */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Rôles VISUAL <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50">
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">
                Les rôles sur VISUAL
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-blue-600/50 focus:text-white cursor-pointer group py-3">
                <Eye className="mr-3 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Visiteur</span>
                  <span className="text-xs text-gray-400">Découvrez et explorez gratuitement</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <Video className="mr-3 h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Porteur de projet</span>
                  <span className="text-xs text-gray-400">Déposez vos créations et lancez une campagne</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-green-600/50 focus:text-white cursor-pointer group py-3">
                <Wallet className="mr-3 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Investisseur</span>
                  <span className="text-xs text-gray-400">Investissez et suivez vos positions</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-cyan-600/50 focus:text-white cursor-pointer group py-3">
                <BarChart3 className="mr-3 h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Infoporteur</span>
                  <span className="text-xs text-gray-400">Partagez VISUAL et gagnez des VISUpoints</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-3">
                <BookOpen className="mr-3 h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Investi-lecteur</span>
                  <span className="text-xs text-gray-400">Lisez, sélectionnez, accompagnez les projets</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-white/10" />

              <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                <Users className="mr-3 h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-semibold">Comparatif des rôles</span>
                  <span className="text-xs text-gray-400">Trouvez le rôle qui vous correspond</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 3. Projets & Classements */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Projets & Classements <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50">
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">
                Découvrir les projets
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <Link href="/explore" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Film className="mr-3 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Explorer les projets</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/projects/featured" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Star className="mr-3 h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Projets en vedette</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/leaderboard" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Trophy className="mr-3 h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">TOP 10 VISUAL</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/vsls" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Tv className="mr-3 h-5 w-5 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Visual Studio Live Show (VSLS)</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/archives" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Archive className="mr-3 h-5 w-5 text-gray-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Archives et historique</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/stats" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <TrendingUp className="mr-3 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Statistiques publiques</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 4. Créateurs & Studio */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Créateurs & Studio <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50">
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">
                Espace porteur de projet
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <Link href="/upload" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Upload className="mr-3 h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Déposer un projet</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/creator/projects" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <FolderOpen className="mr-3 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Mes projets</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/creator/studio" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Briefcase className="mr-3 h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Studio VISUAL</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/sandbox/creators" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <History className="mr-3 h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Sandbox tests porteurs</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 5. Investissement & Portefeuille */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Investissement <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50">
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">Espace investisseur</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <Link href="/wallet" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Wallet className="mr-3 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Mon portefeuille</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/wallet/history" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <History className="mr-3 h-5 w-5 text-gray-300 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Historique des micro-investissements</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/wallet/rewards" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Trophy className="mr-3 h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Mes gains et répartitions</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/wallet/payment-methods" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <CreditCard className="mr-3 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Moyens de paiement</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/wallet/education" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <GraduationCap className="mr-3 h-5 w-5 text-purple-300 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Centre pédagogique</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 6. Communauté & Support */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/70 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Support <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-purple-500/30 text-white backdrop-blur-2xl shadow-2xl shadow-purple-900/50">
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">Communauté VISUAL</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <Link href="/support/mailbox" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Mail className="mr-3 h-5 w-5 text-blue-300 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Boite aux lettres interne</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/support" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <LifeBuoy className="mr-3 h-5 w-5 text-cyan-300 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Centre d aide</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/guides" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <BookOpen className="mr-3 h-5 w-5 text-amber-300 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Guides et tutoriels</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/support/report" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <AlertCircle className="mr-3 h-5 w-5 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Signaler un problème</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/status" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Activity className="mr-3 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Statut de la plateforme</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 7. Mon Espace */}
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
              <DropdownMenuLabel className="text-purple-300 text-base font-bold">Mon compte VISUAL</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />

              <Link href="/dashboard" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                  <LayoutDashboard className="mr-3 h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Tableau de bord</span>
                    <span className="text-xs text-gray-400">Vue d ensemble de votre activité</span>
                  </div>
                </DropdownMenuItem>
              </Link>

              <Link href="/profile" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                  <User className="mr-3 h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Mon profil</span>
                    <span className="text-xs text-gray-400">Informations publiques et avatar</span>
                  </div>
                </DropdownMenuItem>
              </Link>

              <Link href="/profile/gamification" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-3">
                  <Award className="mr-3 h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Mes VISUpoints et récompenses</span>
                    <span className="text-xs text-gray-400">Badges, classement, progression</span>
                  </div>
                </DropdownMenuItem>
              </Link>

              <DropdownMenuSeparator className="bg-white/10" />

              <Link href="/settings" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Settings className="mr-2 h-4 w-4 text-gray-300" />
                  Paramètres du compte
                </DropdownMenuItem>
              </Link>

              <Link href="/settings/notifications" className="w-full">
                <DropdownMenuItem className="focus:bg-purple-600/50 focus:text-white cursor-pointer group py-2.5">
                  <Bell className="mr-2 h-4 w-4 text-yellow-300" />
                  Notifications
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 8. Administration (visible seulement si IS_ADMIN) */}
          {IS_ADMIN && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg border border-amber-400/50 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-amber-400/90 hover:scale-105 hover:shadow-lg hover:shadow-amber-900/40"
                >
                  Administration <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-gradient-to-b from-[#1a103c] to-[#0f0529] border-amber-500/50 text-white backdrop-blur-2xl shadow-2xl shadow-amber-900/60">
                <DropdownMenuLabel className="text-amber-300 text-base font-bold">
                  Panneau ADMIN / PATRON
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />

                <Link href="/admin" className="w-full">
                  <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-2.5">
                    <LayoutDashboard className="mr-3 h-5 w-5 text-amber-300 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Tableau de bord ADMIN</span>
                  </DropdownMenuItem>
                </Link>

                <Link href="/admin/projects" className="w-full">
                  <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-2.5">
                    <Film className="mr-3 h-5 w-5 text-purple-300 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Gestion des projets</span>
                  </DropdownMenuItem>
                </Link>

                <Link href="/admin/users" className="w-full">
                  <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-2.5">
                    <Users className="mr-3 h-5 w-5 text-blue-300 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Gestion des utilisateurs</span>
                  </DropdownMenuItem>
                </Link>

                <Link href="/admin/vsls" className="w-full">
                  <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-2.5">
                    <Tv className="mr-3 h-5 w-5 text-red-300 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Visual Studio Live Show</span>
                  </DropdownMenuItem>
                </Link>

                <Link href="/admin/db" className="w-full">
                  <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-2.5">
                    <Database className="mr-3 h-5 w-5 text-green-300 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Monitoring base Supabase</span>
                  </DropdownMenuItem>
                </Link>

                <Link href="/admin/payments" className="w-full">
                  <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-2.5">
                    <CreditCard className="mr-3 h-5 w-5 text-blue-300 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Monitoring paiements Stripe</span>
                  </DropdownMenuItem>
                </Link>

                <Link href="/admin/logs" className="w-full">
                  <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-2.5">
                    <FileText className="mr-3 h-5 w-5 text-gray-300 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Journal et logs de sécurité</span>
                  </DropdownMenuItem>
                </Link>

                <Link href="/admin/settings" className="w-full">
                  <DropdownMenuItem className="focus:bg-amber-600/50 focus:text-white cursor-pointer group py-2.5">
                    <Cog className="mr-3 h-5 w-5 text-amber-200 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Paramètres système</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Sélecteur de langues */}
          <div className="ml-2">
            <LanguageSelector />
          </div>

          {/* Boutons Auth (mode invité par défaut) */}
          <Link href="/login">
            <Button
              variant="ghost"
              className="bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 h-10 px-5 text-sm font-medium transition-all duration-300 hover:border-purple-500/50 hover:scale-105 ml-2"
            >
              <LogIn className="mr-2 h-4 w-4" /> Se connecter
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:via-violet-500 hover:to-fuchsia-500 text-white rounded-lg border border-white/20 h-10 px-6 text-sm font-bold shadow-lg shadow-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/70">
              <UserPlus className="mr-2 h-4 w-4" /> Créer un compte
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
