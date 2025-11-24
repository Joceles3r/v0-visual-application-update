import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Film, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Film className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Présentation Rapide
            </h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              VISUAL est la première plateforme de streaming participatif qui révolutionne le financement et la
              distribution de contenus audiovisuels.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-white/5 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Regarder</h3>
                <p className="text-gray-400">Découvrez des projets innovants dans 7 catégories</p>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-400 mb-3">Investir</h3>
                <p className="text-gray-400">Soutenez les créateurs avec des micro-investissements</p>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Gagner</h3>
                <p className="text-gray-400">Recevez des récompenses et des VISUpoints</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Notre Mission</h2>
            <p className="text-gray-300 mb-6">
              Démocratiser l'accès au financement pour les créateurs tout en offrant aux spectateurs une nouvelle façon
              de participer au succès des œuvres qu'ils aiment.
            </p>

            <div className="flex gap-4 mt-8">
              <Link href="/how-it-works">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Comment ça marche
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Commencer gratuitement</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
