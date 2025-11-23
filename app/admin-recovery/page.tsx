"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertTriangle } from "lucide-react"

export default function AdminRecoveryPage() {
  const [email, setEmail] = useState("")
  const [secret, setSecret] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleRecovery = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch("/api/emergency-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, secret }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({
          type: "success",
          text: `Succès! Le rôle admin a été accordé à ${email}. Vous pouvez maintenant vous connecter.`,
        })
        setEmail("")
        setSecret("")
      } else {
        setMessage({ type: "error", text: data.error || "Échec de la récupération" })
      }
    } catch (error: any) {
      setMessage({ type: "error", text: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-red-900/20 border-red-500/30 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-red-400" />
          </div>
          <CardTitle className="text-3xl text-white">Récupération Admin</CardTitle>
          <CardDescription className="text-red-200">
            Page de secours pour retrouver l'accès administrateur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6 bg-red-950/50 border-red-500/50">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-red-200">
              Cette page est réservée aux situations d'urgence. Utilisez le code secret fourni lors de la configuration.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleRecovery} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email du compte admin
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@visual.com"
                required
                className="bg-red-950/30 border-red-500/30 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="secret" className="text-white">
                Code secret de récupération
              </Label>
              <Input
                id="secret"
                type="password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Entrez le code secret"
                required
                className="bg-red-950/30 border-red-500/30 text-white"
              />
            </div>

            {message && (
              <Alert
                className={
                  message.type === "success" ? "bg-green-950/50 border-green-500/50" : "bg-red-950/50 border-red-500/50"
                }
              >
                <AlertDescription className={message.type === "success" ? "text-green-200" : "text-red-200"}>
                  {message.text}
                </AlertDescription>
              </Alert>
            )}

            <Button type="submit" disabled={loading} className="w-full bg-red-600 hover:bg-red-700 text-white">
              {loading ? "Récupération en cours..." : "Récupérer l'accès admin"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-red-950/50 rounded-lg border border-red-500/30">
            <p className="text-sm text-red-200 font-mono">
              Code secret par défaut : <span className="text-red-400 font-bold">VISUAL-EMERGENCY-2025</span>
            </p>
            <p className="text-xs text-red-300 mt-2">
              Changez ce code via la variable d'environnement EMERGENCY_ADMIN_SECRET
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
