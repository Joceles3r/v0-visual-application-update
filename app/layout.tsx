import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { VisualHeader } from "@/components/visual-header"

const geistSans = Geist({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "VISUAL - Plateforme de Streaming Participatif",
  description:
    "La première plateforme de streaming participatif pour investir dans les projets audiovisuels de demain. Créez, investissez, regardez et gagnez des récompenses.",
  generator: "v0.app",

  keywords: [
    "streaming participatif",
    "crowdfunding audiovisuel",
    "cinéma",
    "investissement artistique",
    "projets audiovisuels",
    "financement créatif",
    "plateforme vidéo",
  ],

  openGraph: {
    title: "VISUAL - Plateforme de Streaming Participatif",
    description: "La première plateforme d'investissement et de streaming pour les créateurs et investisseurs.",
    url: "https://visual-project.vercel.app",
    siteName: "VISUAL",
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VISUAL - Streaming Participatif",
    description:
      "La plateforme de streaming nouvelle génération qui récompense les spectateurs et finance les créateurs.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.className} antialiased bg-black text-white`}>
        <VisualHeader />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
