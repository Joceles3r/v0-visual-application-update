import { VisualHeader } from '@/components/visual-header'
import { FloatingParticles } from '@/components/floating-particles'
import { CinemaFrame } from '@/components/cinema-frame'
import { Play, Film, Music, FileVideo, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <VisualHeader />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <FloatingParticles />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
            <h1 className="text-8xl md:text-9xl font-bold gradient-tricolor-animated mb-6 leading-none tracking-tight">
              VISUAL
            </h1>
            <h2 className="text-6xl md:text-7xl font-bold gradient-tricolor mb-4 leading-none tracking-tight">
              VISUAL
            </h2>
            <p className="text-2xl md:text-4xl text-white font-light mb-16 tracking-wide">
              Regarde-Investis-Gagne
            </p>
            
            <div className="flex justify-center items-center mb-16">
              <div className="relative w-full max-w-3xl">
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl border-2 border-white/20 overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </button>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                      <p className="text-white/60 text-sm mb-2">Vidéo de démonstration</p>
                      <p className="text-white/40 text-xs">Découvrez comment VISUAL fonctionne en 60 secondes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="text-4xl font-bold gradient-purple-blue mb-2">600+</div>
                <div className="text-gray-300">Projets Actifs</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="text-4xl font-bold gradient-purple-blue mb-2">50K+€</div>
                <div className="text-gray-300">Gains Distribués</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-colors">
                <div className="text-4xl font-bold gradient-purple-blue mb-2">2.5K+</div>
                <div className="text-gray-300">Investisseurs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Catégories
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Explorez les différentes catégories de projets disponibles sur VISUAL
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link 
              href="/categories/films"
              className="group relative overflow-hidden rounded-3xl border border-gray-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src="/cinema-movie-theater-film-reel.jpg" 
                  alt="Films"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <Film className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Films</h3>
                <p className="text-gray-200 text-sm mb-3">
                  Courts et longs métrages de créateurs indépendants
                </p>
                <div className="text-purple-400 font-medium">Explorer →</div>
              </div>
            </Link>

            <Link 
              href="/categories/video-clips"
              className="group relative overflow-hidden rounded-3xl border border-gray-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src="/music-video-recording-studio-concert.jpg" 
                  alt="Vidéo-clips"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Vidéo-clips</h3>
                <p className="text-gray-200 text-sm mb-3">
                  Productions musicales et clips artistiques originaux
                </p>
                <div className="text-purple-400 font-medium">Explorer →</div>
              </div>
            </Link>

            <Link 
              href="/categories/documentaires"
              className="group relative overflow-hidden rounded-3xl border border-gray-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src="/documentary-camera-filming-nature.jpg" 
                  alt="Documentaires"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <FileVideo className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Documentaires</h3>
                <p className="text-gray-200 text-sm mb-3">
                  Histoires vraies et reportages captivants
                </p>
                <div className="text-purple-400 font-medium">Explorer →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <CinemaFrame>
              <h2 className="text-4xl font-bold text-center mb-4 text-white">
                Comment cela marche ?
              </h2>
              <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                Découvrez le processus simple en 3 étapes pour commencer à gagner avec VISUAL
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Regarde</h3>
                  <p className="text-gray-300">
                    Découvrez des projets créatifs uniques et soutenez vos créateurs préférés
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-green-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Investis</h3>
                  <p className="text-gray-300">
                    Participez au financement des projets qui vous inspirent le plus
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Gagne</h3>
                  <p className="text-gray-300">
                    Récoltez des Visupoints, débloquez des badges et gagnez des récompenses
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all text-white font-bold text-lg shadow-2xl hover:scale-105"
                >
                  Commencer maintenant
                  <TrendingUp className="w-5 h-5" />
                </Link>
              </div>
            </CinemaFrame>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold gradient-tricolor mb-4">VISUAL</h3>
              <p className="text-gray-400 text-sm mb-4">
                La plateforme de streaming participative où les créateurs gagnent des récompenses
              </p>
              <p className="text-xs text-gray-500">
                Regarde-Investis-Gagne
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/contact" className="hover:text-purple-300 transition-colors">Contactez-nous</Link></li>
                <li><Link href="/support" className="hover:text-purple-300 transition-colors">Support</Link></li>
                <li><Link href="/faq" className="hover:text-purple-300 transition-colors">FAQ</Link></li>
                <li>contact@visual.fr</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-4">Liens Utiles</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-purple-300 transition-colors">À propos</Link></li>
                <li><Link href="/terms" className="hover:text-purple-300 transition-colors">Conditions d'utilisation</Link></li>
                <li><Link href="/privacy" className="hover:text-purple-300 transition-colors">Politique de confidentialité</Link></li>
                <li><Link href="/careers" className="hover:text-purple-300 transition-colors">Carrières</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-4">Suivez-nous</h4>
              <div className="flex gap-3 mb-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span className="text-lg">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span className="text-lg">📷</span>
                </a>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 transition-colors outline-none text-sm placeholder:text-gray-500"
                />
                <button className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all text-sm font-medium">
                  OK
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>&copy; 2025 VISUAL. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
