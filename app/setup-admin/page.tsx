"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Shield, AlertCircle, CheckCircle } from "lucide-react"

export default function SetupAdminPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleMakeAdmin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/make-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setResult({ type: "success", message: data.message })
      } else {
        setResult({ type: "error", message: data.error })
      }
    } catch (error) {
      setResult({ type: "error", message: "Failed to connect to server" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 bg-black/40 backdrop-blur-sm border-purple-500/30">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-purple-400" />
          <h1 className="text-2xl font-bold text-white">Configuration Admin</h1>
        </div>

        <p className="text-gray-300 mb-6">
          Entrez l'adresse email de votre compte VISUAL pour vous attribuer le rôle d'administrateur.
        </p>

        <form onSubmit={handleMakeAdmin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email du compte</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre-email@example.com"
              required
              className="bg-purple-950/50 border-purple-500/30 text-white"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-purple-600 hover:bg-purple-700">
            {loading ? "Attribution en cours..." : "Devenir Admin"}
          </Button>
        </form>

        {result && (
          <div
            className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
              result.type === "success"
                ? "bg-green-500/10 border border-green-500/30"
                : "bg-red-500/10 border border-red-500/30"
            }`}
          >
            {result.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={result.type === "success" ? "text-green-300" : "text-red-300"}>{result.message}</p>
              {result.type === "success" && (
                <a href="/admin" className="text-purple-400 hover:text-purple-300 underline mt-2 inline-block">
                  → Accéder au Dashboard Admin
                </a>
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
