"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Video } from "lucide-react"

export default function SignupPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const supabase = getSupabaseBrowserClient()

      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (signUpError) {
        setError(signUpError.message)
        setLoading(false)
        return
      }

      if (!authData.user) {
        setError("Inscription échouée. Veuillez réessayer.")
        setLoading(false)
        return
      }

      const { data: sessionData } = await supabase.auth.getSession()

      if (sessionData.session) {
        // Session créée immédiatement = email confirmation désactivée
        setSuccess(true)
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 1500)
      } else {
        // Pas de session = email confirmation activée
        setSuccess(true)
        setError(
          "Compte créé ! Veuillez vérifier votre email pour confirmer votre inscription avant de vous connecter.",
        )
      }
    } catch (err) {
      console.error("[v0] Signup error:", err)
      setError(err instanceof Error ? err.message : "Une erreur inattendue s'est produite")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <Video className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VISUAL
          </span>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Créer votre compte</CardTitle>
            <CardDescription>Rejoignez VISUAL et commencez à gagner des récompenses</CardDescription>
          </CardHeader>
          <form onSubmit={handleSignup}>
            <CardContent className="space-y-4">
              {error && !success && (
                <div className="bg-destructive/10 border border-destructive/50 text-destructive px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-green-500/10 border border-green-500/50 text-green-600 px-4 py-3 rounded-lg text-sm">
                  {error || "Compte créé avec succès ! Redirection vers le dashboard..."}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="fullName">Nom complet</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  disabled={loading || success}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading || success}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={loading || success}
                />
                <p className="text-xs text-muted-foreground">Minimum 6 caractères</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={loading || success}
              >
                {loading ? "Création du compte..." : success ? "Compte créé !" : "S'inscrire"}
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Vous avez déjà un compte ?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Se connecter
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
