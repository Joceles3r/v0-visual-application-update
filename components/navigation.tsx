"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Video,
  Film,
  PlayCircle,
  LayoutGrid,
  TrendingUp,
  HelpCircle,
  Eye,
  Upload,
  Wallet,
  Users,
  UserPlus,
  Target,
  FolderOpen,
  BarChart,
  Lightbulb,
  Briefcase,
  History,
  Trophy,
  CreditCard,
  GraduationCap,
  Mail,
  LifeBuoy,
  BookOpen,
  AlertCircle,
  Activity,
  LayoutDashboard,
  User,
  Award,
  Settings,
  Shield,
  Database,
  FileText,
  Cog,
} from "lucide-react"
import { SignOutButton } from "./signout-button"
import { LanguageSelector } from "./language-selector"
import { useState } from "react"

export function Navigation() {
  const [user, setUser] = useState<any>(null)
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <Video className="w-8 h-8 text-purple-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            VISUAL
          </span>
        </Link>

        {/* Center - Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Rechercher un projet..."
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm focus:outline-none focus:border-purple-500/50 transition"
            />
            <Target className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Right - Dropdown Menus */}
        <div className="flex items-center gap-2">
          {/* Menu 1: Découvrir VISUAL */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden md:flex gap-1">
                <Film className="w-4 h-4" />
                Découvrir
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-black/95 border-purple-500/20 backdrop-blur">
              <DropdownMenuItem asChild>
                <Link href="/about" className="flex items-center gap-3 cursor-pointer">
                  <Film className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-medium">Présentation Rapide</div>
                    <div className="text-xs text-gray-400">Streaming participatif innovant</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/how-it-works" className="flex items-center gap-3 cursor-pointer">
                  <PlayCircle className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-medium">Comment ça marche ?</div>
                    <div className="text-xs text-gray-400">Le parcours VISUAL en 4 étapes</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/categories" className="flex items-center gap-3 cursor-pointer">
                  <LayoutGrid className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-medium">Les 7 Catégories</div>
                    <div className="text-xs text-gray-400">Films, Clips, Docs, Séries...</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/roadmap" className="flex items-center gap-3 cursor-pointer">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-medium">Roadmap & Nouveautés</div>
                    <div className="text-xs text-gray-400">Évolutions et mises à jour</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/faq" className="flex items-center gap-3 cursor-pointer">
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-medium">FAQ VISUAL</div>
                    <div className="text-xs text-gray-400">Questions fréquentes</div>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu 2: Rôles VISUAL */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden md:flex gap-1">
                <Users className="w-4 h-4" />
                Rôles
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-black/95 border-purple-500/20 backdrop-blur">
              <DropdownMenuItem asChild>
                <Link href="/roles/guest" className="flex items-center gap-3 cursor-pointer">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="font-medium">Invité (non inscrit)</div>
                    <div className="text-xs text-gray-400">Découverte limitée</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/roles/visitor" className="flex items-center gap-3 cursor-pointer">
                  <UserPlus className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="font-medium">Visiteur</div>
                    <div className="text-xs text-gray-400">Accès complet gratuit</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/roles/creator" className="flex items-center gap-3 cursor-pointer">
                  <Upload className="w-4 h-4 text-green-400" />
                  <div>
                    <div className="font-medium">Porteur de projet</div>
                    <div className="text-xs text-gray-400">Créez et financez</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/roles/investor" className="flex items-center gap-3 cursor-pointer">
                  <Wallet className="w-4 h-4 text-yellow-400" />
                  <div>
                    <div className="font-medium">Investisseur</div>
                    <div className="text-xs text-gray-400">Investissez et gagnez</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/roles/infoporter" className="flex items-center gap-3 cursor-pointer">
                  <Lightbulb className="w-4 h-4 text-orange-400" />
                  <div>
                    <div className="font-medium">Infoporteur</div>
                    <div className="text-xs text-gray-400">Partagez et gagnez</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/roles/investireader" className="flex items-center gap-3 cursor-pointer">
                  <Target className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-medium">Investi-lecteur</div>
                    <div className="text-xs text-gray-400">Double rôle</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/roles/comparison" className="flex items-center gap-3 cursor-pointer">
                  <BarChart className="w-4 h-4 text-pink-400" />
                  <div className="font-medium">Comparatif des rôles</div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu 3: Projets & Classements */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden md:flex gap-1">
                <FolderOpen className="w-4 h-4" />
                Projets
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-black/95 border-purple-500/20 backdrop-blur">
              <DropdownMenuItem asChild>
                <Link href="/explore" className="flex items-center gap-3 cursor-pointer">
                  <Target className="w-4 h-4 text-purple-400" />
                  <div className="font-medium">Explorer les projets</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/projects/featured" className="flex items-center gap-3 cursor-pointer">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <div className="font-medium">Projets en vedette</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/leaderboard" className="flex items-center gap-3 cursor-pointer">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <div className="font-medium">Top 10 VISUAL</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vsls" className="flex items-center gap-3 cursor-pointer">
                  <Video className="w-4 h-4 text-pink-500" />
                  <div className="font-medium">Visual Studio Live Show</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/archives/projects" className="flex items-center gap-3 cursor-pointer">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <div className="font-medium">Archives des campagnes</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/stats/public" className="flex items-center gap-3 cursor-pointer">
                  <BarChart className="w-4 h-4 text-blue-400" />
                  <div className="font-medium">Statistiques publiques</div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu 4: Créateurs & Studio */}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden md:flex gap-1">
                  <Upload className="w-4 h-4" />
                  Studio
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-black/95 border-purple-500/20 backdrop-blur">
                <DropdownMenuItem asChild>
                  <Link href="/upload" className="flex items-center gap-3 cursor-pointer">
                    <Upload className="w-4 h-4 text-green-400" />
                    <div className="font-medium">Déposer un projet</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/creator/projects" className="flex items-center gap-3 cursor-pointer">
                    <FolderOpen className="w-4 h-4 text-purple-400" />
                    <div className="font-medium">Mes projets</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/creator/studio" className="flex items-center gap-3 cursor-pointer">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <div className="font-medium">Studio VISUAL</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sandbox/creators" className="flex items-center gap-3 cursor-pointer">
                    <Lightbulb className="w-4 h-4 text-yellow-400" />
                    <div className="font-medium">Sandbox tests porteurs</div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Menu 5: Investissement & Portefeuille */}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden lg:flex gap-1">
                  <Wallet className="w-4 h-4" />
                  Wallet
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-black/95 border-purple-500/20 backdrop-blur">
                <DropdownMenuItem asChild>
                  <Link href="/wallet" className="flex items-center gap-3 cursor-pointer">
                    <Wallet className="w-4 h-4 text-yellow-400" />
                    <div className="font-medium">Mon portefeuille</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wallet/history" className="flex items-center gap-3 cursor-pointer">
                    <History className="w-4 h-4 text-blue-400" />
                    <div className="font-medium">Historique des micro-investissements</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wallet/rewards" className="flex items-center gap-3 cursor-pointer">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <div className="font-medium">Mes gains & répartitions</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wallet/payment-methods" className="flex items-center gap-3 cursor-pointer">
                    <CreditCard className="w-4 h-4 text-green-400" />
                    <div className="font-medium">Moyens de paiement</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wallet/education" className="flex items-center gap-3 cursor-pointer">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    <div className="font-medium">Centre pédagogique</div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Menu 6: Communauté & Support */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden lg:flex gap-1">
                <LifeBuoy className="w-4 h-4" />
                Support
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-black/95 border-purple-500/20 backdrop-blur">
              <DropdownMenuItem asChild>
                <Link href="/support/mailbox" className="flex items-center gap-3 cursor-pointer">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="font-medium">Boîte aux lettres interne</div>
                    <div className="text-xs text-gray-400">Communication avec l'équipe</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/support" className="flex items-center gap-3 cursor-pointer">
                  <LifeBuoy className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-medium">Centre d'aide</div>
                    <div className="text-xs text-gray-400">Trouvez les réponses aux questions</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/guides" className="flex items-center gap-3 cursor-pointer">
                  <BookOpen className="w-4 h-4 text-green-400" />
                  <div>
                    <div className="font-medium">Guides & tutoriels</div>
                    <div className="text-xs text-gray-400">Apprenez à utiliser VISUAL</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/support/report" className="flex items-center gap-3 cursor-pointer">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <div>
                    <div className="font-medium">Signaler un problème</div>
                    <div className="text-xs text-gray-400">Aidez à améliorer VISUAL</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/status" className="flex items-center gap-3 cursor-pointer">
                  <Activity className="w-4 h-4 text-yellow-400" />
                  <div>
                    <div className="font-medium">Statut de la plateforme</div>
                    <div className="text-xs text-gray-400">Vérifiez l'état actuel de VISUAL</div>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu 7: Mon Espace */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <User className="w-4 h-4" />
                  <span className="hidden md:inline">Mon Espace</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-black/95 border-purple-500/20 backdrop-blur">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center gap-3 cursor-pointer">
                    <LayoutDashboard className="w-4 h-4 text-purple-400" />
                    <div className="font-medium">Tableau de bord</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/profile/${user.id}`} className="flex items-center gap-3 cursor-pointer">
                    <User className="w-4 h-4 text-blue-400" />
                    <div className="font-medium">Mon profil</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile/gamification" className="flex items-center gap-3 cursor-pointer">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <div className="font-medium">Mes badges & VISUpoints</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/settings/account" className="flex items-center gap-3 cursor-pointer">
                    <Settings className="w-4 h-4 text-gray-400" />
                    <div className="font-medium">Paramètres du compte</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings/privacy" className="flex items-center gap-3 cursor-pointer">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <div className="font-medium">Confidentialité</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-400">
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Se connecter
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  S'inscrire
                </Button>
              </Link>
            </div>
          )}

          {/* Menu 8: Admin (si admin) */}
          {isAdmin && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-red-400">
                  <Shield className="w-4 h-4" />
                  <span className="hidden md:inline">Admin</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-black/95 border-red-500/20 backdrop-blur">
                <DropdownMenuItem asChild>
                  <Link href="/admin" className="flex items-center gap-3 cursor-pointer">
                    <LayoutDashboard className="w-4 h-4 text-red-400" />
                    <div className="font-medium">Dashboard Admin</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/users" className="flex items-center gap-3 cursor-pointer">
                    <Users className="w-4 h-4 text-blue-400" />
                    <div className="font-medium">Gestion utilisateurs</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/videos" className="flex items-center gap-3 cursor-pointer">
                    <Video className="w-4 h-4 text-purple-400" />
                    <div className="font-medium">Gestion vidéos</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/moderation" className="flex items-center gap-3 cursor-pointer">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                    <div className="font-medium">Modération</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/database" className="flex items-center gap-3 cursor-pointer">
                    <Database className="w-4 h-4 text-green-400" />
                    <div className="font-medium">Base de données</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/settings" className="flex items-center gap-3 cursor-pointer">
                    <Cog className="w-4 h-4 text-gray-400" />
                    <div className="font-medium">Paramètres système</div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Language Selector */}
          <LanguageSelector />
        </div>
      </div>
    </nav>
  )
}
