import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Video, Trophy, Upload, User } from "lucide-react"
import { SignOutButton } from "./signout-button"
import { LanguageSelector } from "./language-selector"
import { getSupabaseServerClient } from "@/lib/supabase/server"

export async function Navigation() {
  const supabase = await getSupabaseServerClient()

  let user = null
  let profile = null

  try {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser()
    user = authUser

    if (user) {
      const { data: profileData } = await supabase.from("users").select("*").eq("id", user.id).single()
      profile = profileData
    }
  } catch (error) {
    console.log("[v0] Auth check failed, running in offline mode")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <Video className="w-8 h-8 text-primary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VISUAL
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
            Explore
          </Link>
          <Link
            href="/leaderboard"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Trophy className="w-4 h-4" />
            Leaderboard
          </Link>
          {user && (
            <Link
              href="/upload"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Upload className="w-4 h-4" />
              Upload
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSelector />

          <div className="hidden sm:block w-px h-6 bg-border" />

          {user ? (
            <>
              {profile && (
                <Link
                  href="/dashboard"
                  className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-semibold">{profile.visupoints}</span>
                  <span>VP</span>
                </Link>
              )}
              <Link href="/dashboard">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Se connecter</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">S'inscrire</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
