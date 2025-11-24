import { Navigation } from "@/components/navigation"
import { PlayCircle, Eye, Wallet, Trophy, Upload } from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Eye,
      title: "1. Découvrez",
      description: "Explorez les projets audiovisuels dans 7 catégories différentes",
      color: "text-blue-400",
    },
    {
      icon: Wallet,
      title: "2. Investissez",
      description: "Soutenez vos projets préférés avec des micro-investissements à partir de 1€",
      color: "text-yellow-400",
    },
    {
      icon: PlayCircle,
      title: "3. Regardez",
      description: "Profitez du contenu en streaming haute qualité",
      color: "text-purple-400",
    },
    {
      icon: Trophy,
      title: "4. Gagnez",
      description: "Recevez des récompenses basées sur le succès des projets",
      color: "text-pink-400",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <PlayCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Comment ça marche ?
            </h1>
            <p className="text-xl text-gray-400">Le parcours VISUAL en 4 étapes simples</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition"
              >
                <step.icon className={`w-12 h-12 ${step.color} mb-4`} />
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
            <Upload className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Vous êtes créateur ?</h3>
            <p className="text-gray-400 mb-4">
              Déposez votre projet, fixez votre objectif de financement et partagez votre vision avec la communauté
              VISUAL.
            </p>
            <a
              href="/upload"
              className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center gap-2"
            >
              En savoir plus sur le dépôt de projet
              <PlayCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
