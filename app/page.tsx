"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Play,
  Film,
  Eye,
  Wallet,
  Trophy,
  TrendingUp,
  Star,
  PlayCircle,
  ChevronRight,
  Users,
  Target,
  Coins,
} from "lucide-react"
import { VisualHeader } from "@/components/visual-header"
import { FloatingParticles } from "@/components/floating-particles"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrafficLight } from "@/components/traffic-light" // Keep this import

export default function Home() {
  const [activeRole, setActiveRole] = useState<"visitor" | "creator" | "investor">("visitor")

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0a0320] via-[#1a0b2e] to-[#050214]">
      <FloatingParticles />
      <VisualHeader />

      <div className="fixed top-20 left-0 bottom-0 z-40 flex flex-col items-center">
        <TrafficLight position="left" />
      </div>
      <div className="fixed top-20 right-0 bottom-0 z-40 flex flex-col items-center">
        <TrafficLight position="right" />
      </div>

      <section className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1
            className="whitespace-nowrap font-black tracking-[0.35em] uppercase gradient-tricolor-animated drop-shadow-[0_0_60px_rgba(255,255,255,0.3)]"
            style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}
          >
            VISUAL
          </h1>

          <p className="max-w-xl text-lg md:text-2xl text-white/90 font-light tracking-widest uppercase border-b-2 border-white/20 pb-4 px-8 inline-block shadow-[0_4px_30px_rgba(139,92,246,0.4)]">
            Regarde • Investis • Gagne
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 flex flex-col items-center text-center relative z-10">
        <div className="container mx-auto max-w-7xl">
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed px-4 text-center">
            La première plateforme de <span className="text-purple-400 font-bold">streaming participatif</span> qui
            permet des{" "}
            <span className="text-green-400 font-bold">investissements limités, équitables et sécurisés</span> dans les
            projets audiovisuels de demain.
          </p>

          <div className="max-w-5xl mx-auto mb-20 flex justify-center">
            <div className="glass-card rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/50 border-2 border-white/10 w-full">
              {/* Tabs */}
              <div className="grid grid-cols-3 border-b border-white/10">
                <button
                  onClick={() => setActiveRole("visitor")}
                  className={`py-6 px-4 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeRole === "visitor"
                      ? "bg-gradient-to-br from-blue-600/40 to-blue-900/40 text-white border-b-4 border-blue-400"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Eye className="w-5 h-5 mx-auto mb-2" />
                  Visiteur
                </button>
                <button
                  onClick={() => setActiveRole("creator")}
                  className={`py-6 px-4 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeRole === "creator"
                      ? "bg-gradient-to-br from-purple-600/40 to-purple-900/40 text-white border-b-4 border-purple-400"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Film className="w-5 h-5 mx-auto mb-2" />
                  Porteur de Projet
                </button>
                <button
                  onClick={() => setActiveRole("investor")}
                  className={`py-6 px-4 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeRole === "investor"
                      ? "bg-gradient-to-br from-green-600/40 to-green-900/40 text-white border-b-4 border-green-400"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Wallet className="w-5 h-5 mx-auto mb-2" />
                  Investisseur
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-8 md:p-12">
                {activeRole === "visitor" && (
                  <div className="animate-fadeIn">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Découvrez VISUAL Gratuitement</h3>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Explorez des milliers de projets créatifs, suivez vos favoris et rejoignez une communauté
                      passionnée.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
                        <Eye className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white mb-2">Accès Illimité</h4>
                        <p className="text-sm text-gray-400">Explorez tous les projets</p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
                        <Star className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white mb-2">Favoris</h4>
                        <p className="text-sm text-gray-400">Suivez vos projets préférés</p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
                        <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white mb-2">Communauté</h4>
                        <p className="text-sm text-gray-400">Rejoignez la discussion</p>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-full px-12 py-8 h-auto text-lg font-bold shadow-lg shadow-blue-900/50 hover:scale-105 transition-all">
                      Continuer en Visiteur
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                )}

                {activeRole === "creator" && (
                  <div className="animate-fadeIn">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Financez Votre Projet Créatif</h3>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Présentez votre projet à une communauté engagée et obtenez le financement nécessaire pour le
                      réaliser.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 text-center">
                        <Film className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white mb-2">Soumettez</h4>
                        <p className="text-sm text-gray-400">Présentez votre vision</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 text-center">
                        <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white mb-2">Financez</h4>
                        <p className="text-sm text-gray-400">Atteignez vos objectifs</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 text-center">
                        <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white mb-2">Réalisez</h4>
                        <p className="text-sm text-gray-400">Créez votre œuvre</p>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white rounded-full px-12 py-8 h-auto text-lg font-bold shadow-lg shadow-purple-900/50 hover:scale-105 transition-all">
                      Déposer un Projet
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                )}

                {activeRole === "investor" && (
                  <div className="animate-fadeIn">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                      Investissez et Générez des Revenus
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Participez au financement de projets prometteurs dès 10€ et recevez une part des revenus générés.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                        <Wallet className="w-8 h-8 text-green-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white mb-2">Dès 10€</h4>
                        <p className="text-sm text-gray-400">Investissement accessible</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                        <Coins className="w-8 h-8 text-green-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white mb-2">Revenus</h4>
                        <p className="text-sm text-gray-400">Parts proportionnelles</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                        <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                        <h4 className="font-bold text-white mb-2">Sécurisé</h4>
                        <p className="text-sm text-gray-400">Investissement équitable</p>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white rounded-full px-12 py-8 h-auto text-lg font-bold shadow-lg shadow-green-900/50 hover:scale-105 transition-all">
                      Investir sur un Projet
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:via-violet-500 hover:to-fuchsia-500 text-white rounded-full px-14 py-8 h-auto text-xl font-black shadow-2xl shadow-purple-900/60 hover:scale-110 transition-all border-2 border-white/20">
              <PlayCircle className="mr-3 w-7 h-7" /> Découvrir les Projets
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white rounded-full px-14 py-8 h-auto text-xl font-black border-2 border-white/30 hover:border-white/50 shadow-xl hover:scale-110 transition-all"
            >
              Commencer Maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* Existing Demo Video Section */}
      <section className="pt-[25vh] pb-16 px-4 flex flex-col items-center text-center">
        <div className="mb-8 relative w-full max-w-5xl mx-auto">
          <h1
            className="font-black tracking-tighter leading-none gradient-tricolor-animated drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] uppercase select-none"
            style={{
              fontSize: "clamp(1.5rem, 7.5vw, 6rem)",
            }}
          >
            VISUAL
          </h1>
          <div className="absolute -bottom-6 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-2xl" />
        </div>

        <p className="text-2xl md:text-3xl text-white/90 font-light tracking-[0.6em] uppercase mb-20 border-b-2 border-white/20 pb-6 px-16 inline-block shadow-[0_4px_20px_rgba(139,92,246,0.3)]">
          Regarde • Investis • Gagne
        </p>

        {/* Demo Video Section */}
        <div className="w-full max-w-5xl mx-auto relative mb-8">
          {/* Old Cinema Screen Frame */}
          <div className="bg-gradient-to-b from-[#8B4513] via-[#654321] to-[#3D2817] p-4 rounded-t-3xl rounded-b-xl shadow-[0_40px_80px_rgba(0,0,0,0.9)] border-[6px] border-[#654321] relative overflow-hidden">
            {/* Wooden texture effect */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] opacity-40 pointer-events-none" />

            {/* Screen Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-amber-400/60 blur-2xl" />

            {/* Inner Screen Frame */}
            <div className="bg-black border-[20px] border-[#1a1a1a] rounded-2xl relative overflow-hidden aspect-video shadow-[inset_0_0_60px_rgba(0,0,0,0.95)]">
              {/* Red Curtains on sides */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-red-900/90 via-red-800/70 to-transparent pointer-events-none z-10">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_8px)]" />
              </div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-red-900/90 via-red-800/70 to-transparent pointer-events-none z-10">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_8px)]" />
              </div>

              {/* Video Content Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950/30 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 bg-[url('/cinematic-movie-theater-screen.jpg')] opacity-10 bg-cover bg-center" />

                {/* Spotlight effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-radial from-purple-500/10 to-transparent blur-3xl" />

                {/* Play Button */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full border-4 border-white/30 flex items-center justify-center mb-8 hover:scale-110 transition-transform duration-300 cursor-pointer bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-green-400/70 shadow-[0_0_40px_rgba(0,0,0,0.6)] relative group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
                    <Play className="w-12 h-12 text-white fill-white ml-2" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-3 tracking-wide">Démo Interacttive</h3>
                  <p className="text-gray-300 mb-10 font-light text-lg">Découvrez l'expérience VISUAL • 60s</p>

                  <Button className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:brightness-125 text-black font-black rounded-full px-12 py-8 h-auto text-xl shadow-[0_0_40px_rgba(234,179,8,0.4)] border-2 border-white/20 transition-all hover:scale-110 hover:shadow-[0_0_60px_rgba(234,179,8,0.6)]">
                    <Play className="w-6 h-6 mr-3 fill-black" /> Lancer la Démo
                  </Button>
                </div>
              </div>
            </div>

            {/* Corner golden decorations */}
            <div className="absolute top-3 left-3 w-10 h-10 border-t-[6px] border-l-[6px] border-amber-500/90 rounded-tl-xl shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            <div className="absolute top-3 right-3 w-10 h-10 border-t-[6px] border-r-[6px] border-amber-500/90 rounded-tr-xl shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            <div className="absolute bottom-3 left-3 w-10 h-10 border-b-[6px] border-l-[6px] border-amber-500/90 rounded-bl-xl shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            <div className="absolute bottom-3 right-3 w-10 h-10 border-b-[6px] border-r-[6px] border-amber-500/90 rounded-br-xl shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
          </div>

          {/* Wooden base stand */}
          <div className="h-8 w-1/3 mx-auto bg-gradient-to-b from-[#654321] to-[#3D2817] rounded-b-xl shadow-2xl mt-[-2px] border-x-[6px] border-b-[6px] border-[#3D2817] relative">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_8px)] opacity-50" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "850+",
                label: "Projets Financés",
                icon: Film,
                color: "text-red-400",
                gradient: "from-red-500/20 to-red-900/20",
              },
              {
                number: "€125K+",
                label: "Gains Distribués",
                icon: Trophy,
                color: "text-yellow-400",
                gradient: "from-yellow-500/20 to-yellow-900/20",
              },
              {
                number: "4.2K+",
                label: "Investisseurs Actifs",
                icon: TrendingUp,
                color: "text-green-400",
                gradient: "from-green-500/20 to-green-900/20",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-10 text-center hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 group relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <stat.icon
                  className={`w-10 h-10 mx-auto mb-6 ${stat.color} opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125 relative z-10`}
                />
                <div className="text-6xl font-black text-white mb-3 tracking-tighter relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-purple-200/70 font-bold uppercase tracking-wider text-sm relative z-10">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            Catégories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Films Card */}
            <div className="group rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a0b2e] to-[#0f0529] border-2 border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-red-900/50">
              <div className="h-72 relative overflow-hidden">
                <Image
                  src="/cinema-movie-theater-film-reel.jpg"
                  alt="Films"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0529] via-[#0f0529]/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500/30 text-red-300 border-2 border-red-400/50 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-lg">
                    Cinéma
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-black text-white mb-2 group-hover:text-red-400 transition-colors drop-shadow-lg">
                    Longs Métrages
                  </h3>
                </div>
              </div>
              <div className="p-6 relative">
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Participez à la production des blockbusters de demain et partagez les revenus du box-office.
                </p>
                <Button className="w-full bg-gradient-to-r from-red-600/20 to-red-800/20 hover:from-red-600/40 hover:to-red-800/40 text-white border-2 border-red-500/30 hover:border-red-500/70 rounded-xl h-14 text-sm uppercase tracking-widest font-black transition-all hover:scale-105 shadow-lg hover:shadow-red-900/50">
                  <PlayCircle className="mr-2 h-5 w-5" /> Streaming Pro
                </Button>
              </div>
            </div>

            {/* Video-clips Card */}
            <div className="group rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a0b2e] to-[#0f0529] border-2 border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-yellow-900/50">
              <div className="h-72 relative overflow-hidden">
                <Image
                  src="/music-video-recording-studio-concert.jpg"
                  alt="Vidéo-clips"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0529] via-[#0f0529]/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500/30 text-yellow-300 border-2 border-yellow-400/50 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-lg">
                    Musique
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors drop-shadow-lg">
                    Vidéo-clips
                  </h3>
                </div>
              </div>
              <div className="p-6 relative">
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Propulsez les artistes vers le sommet des charts et bénéficiez des royalties streaming.
                </p>
                <Button className="w-full bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 hover:from-yellow-600/40 hover:to-yellow-800/40 text-white border-2 border-yellow-500/30 hover:border-yellow-500/70 rounded-xl h-14 text-sm uppercase tracking-widest font-black transition-all hover:scale-105 shadow-lg hover:shadow-yellow-900/50">
                  <PlayCircle className="mr-2 h-5 w-5" /> Streaming Pro
                </Button>
              </div>
            </div>

            {/* Documentaires Card */}
            <div className="group rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a0b2e] to-[#0f0529] border-2 border-white/10 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-green-900/50">
              <div className="h-72 relative overflow-hidden">
                <Image
                  src="/documentary-camera-filming-nature.jpg"
                  alt="Documentaires"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0529] via-[#0f0529]/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500/30 text-green-300 border-2 border-green-400/50 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-lg">
                    Docu
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-black text-white mb-2 group-hover:text-green-400 transition-colors drop-shadow-lg">
                    Documentaires
                  </h3>
                </div>
              </div>
              <div className="p-6 relative">
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Soutenez des histoires vraies qui changent le monde et partagez les revenus de distribution.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-600/20 to-green-800/20 hover:from-green-600/40 hover:to-green-800/40 text-white border-2 border-green-500/30 hover:border-green-500/70 rounded-xl h-14 text-sm uppercase tracking-widest font-black transition-all hover:scale-105 shadow-lg hover:shadow-green-900/50">
                  <PlayCircle className="mr-2 h-5 w-5" /> Streaming Pro
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
            Comment ça Marche ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="group text-center">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border-2 border-blue-500/30 flex items-center justify-center mx-auto mb-8 group-hover:border-blue-500/70 group-hover:scale-110 transition-all duration-500 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Eye className="w-14 h-14 text-blue-400 transition-all duration-500 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Regarde les Projets</h3>
              <p className="text-gray-400 leading-relaxed">
                Explorez notre catalogue exclusif de projets en développement dans toutes les catégories.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group text-center">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-green-600/20 to-green-900/20 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-8 group-hover:border-green-500/70 group-hover:scale-110 transition-all duration-500 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Wallet className="w-14 h-14 text-green-400 transition-all duration-500 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Investis de Petites Sommes</h3>
              <p className="text-gray-400 leading-relaxed">
                Achetez des parts de vos projets favoris dès 10€ et devenez copropriétaire.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group text-center">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-amber-600/20 to-amber-900/20 border-2 border-amber-500/30 flex items-center justify-center mx-auto mb-8 group-hover:border-amber-500/70 group-hover:scale-110 transition-all duration-500 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Star className="w-14 h-14 text-amber-400 transition-all duration-500 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vote et Gagne des Récompenses</h3>
              <p className="text-gray-400 leading-relaxed">
                Participez aux décisions et gagnez des VISUpoints pour vos contributions.
              </p>
            </div>

            {/* Step 4 */}
            <div className="group text-center">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 border-2 border-purple-500/30 flex items-center justify-center mx-auto mb-8 group-hover:border-purple-500/70 group-hover:scale-110 transition-all duration-500 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <TrendingUp className="w-14 h-14 text-purple-400 transition-all duration-500 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Suis l'Évolution des Projets</h3>
              <p className="text-gray-400 leading-relaxed">
                Recevez des royalties sur les revenus générés par les projets financés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-8 text-white">Les Rôles VISUAL</h2>
          <p className="text-center text-gray-400 text-lg mb-20 max-w-3xl mx-auto">
            Découvrez comment vous pouvez participer à l'écosystème VISUAL selon votre profil et vos objectifs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visiteur */}
            <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-blue-500/50 group cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-900/30 border-2 border-blue-500/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <Eye className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visiteur</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Accès gratuit à tous les projets. Explorez, suivez et commentez sans engagement financier.
              </p>
              <Button
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform"
              >
                En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            {/* Porteur de Projet */}
            <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-purple-500/50 group cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-900/30 border-2 border-purple-500/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <Film className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Porteur de Projet</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Présentez votre création et obtenez le financement participatif nécessaire pour la réaliser.
              </p>
              <Button
                variant="ghost"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform"
              >
                En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            {/* Investisseur */}
            <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-green-500/50 group cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600/30 to-green-900/30 border-2 border-green-500/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <Wallet className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Investisseur</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Investissez dès 10€ dans des projets prometteurs et recevez des royalties proportionnelles.
              </p>
              <Button
                variant="ghost"
                className="text-green-400 hover:text-green-300 hover:bg-green-500/10 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform"
              >
                En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            {/* Infoporteur */}
            <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-cyan-500/50 group cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-cyan-900/30 border-2 border-cyan-500/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Infoporteur</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Partagez les projets avec votre réseau et gagnez des commissions sur les investissements générés.
              </p>
              <Button
                variant="ghost"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform"
              >
                En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            {/* Investi-lecteur */}
            <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-amber-500/50 group cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-600/30 to-amber-900/30 border-2 border-amber-500/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <Star className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Investi-lecteur</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Profitez du meilleur des deux mondes : regardez et investissez dans vos projets préférés.
              </p>
              <Button
                variant="ghost"
                className="text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform"
              >
                En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            {/* Comparatif (Spans 2 columns on larger screens or full width on mobile) */}
            <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-pink-500/50 group cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-600/30 to-pink-900/30 border-2 border-pink-500/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <Users className="w-10 h-10 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Comparatif des Rôles</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Comparez les avantages de chaque rôle et trouvez celui qui correspond le mieux à vos objectifs.
              </p>
              <Button
                variant="ghost"
                className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform"
              >
                Voir le comparatif <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="w-full text-center mb-8 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Projets en Vedette</h2>
              <p className="text-gray-400 text-lg">Découvrez les projets les plus populaires de la communauté VISUAL</p>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 rounded-full px-8 py-6 h-auto font-bold"
            >
              Voir le TOP 10 <TrendingUp className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a0b2e] to-[#0f0529] border-2 border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-purple-900/50 cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/sci-fi-space-thriller-movie-poster-dark-purple-atm.jpg"
                  alt="Eclipse Éternelle"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0529] via-[#0f0529]/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500/80 text-white border-0 font-black uppercase">Film</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white border border-white/20">
                    <TrendingUp className="w-3 h-3 inline mr-1 text-green-400" />
                    #3
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Eclipse Éternelle
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Un thriller spatial haletant qui repousse les limites du genre.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Progression</div>
                  <div className="text-xs font-bold text-green-400">78%</div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    style={{ width: "78%" }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-400">
                    <span className="font-bold text-white">245</span> investisseurs
                  </div>
                  <div className="text-gray-400">
                    <span className="font-bold text-green-400">€152K</span> levés
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a0b2e] to-[#0f0529] border-2 border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-yellow-900/50 cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/synthwave-neon-music-video-cyberpunk-vaporwave.jpg"
                  alt="Neon Dreams"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0529] via-[#0f0529]/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500/80 text-black border-0 font-black uppercase">Clip</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white border border-white/20">
                    <TrendingUp className="w-3 h-3 inline mr-1 text-green-400" />
                    #1
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  Neon Dreams
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Le clip révolutionnaire qui mélange synthwave et réalité virtuelle.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Progression</div>
                  <div className="text-xs font-bold text-green-400">92%</div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    style={{ width: "92%" }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-400">
                    <span className="font-bold text-white">412</span> investisseurs
                  </div>
                  <div className="text-gray-400">
                    <span className="font-bold text-green-400">€87K</span> levés
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a0b2e] to-[#0f0529] border-2 border-white/10 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-green-900/50 cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/underwater-ocean-documentary-marine-life-deep-sea.jpg"
                  alt="Océans Invisibles"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0529] via-[#0f0529]/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500/80 text-white border-0 font-black uppercase">Docu</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white border border-white/20">
                    <TrendingUp className="w-3 h-3 inline mr-1 text-green-400" />
                    #7
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-green-400 transition-colors">
                  Océans Invisibles
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Plongez dans les profondeurs méconnues et découvrez la vie sous-marine.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Progression</div>
                  <div className="text-xs font-bold text-green-400">65%</div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-400">
                    <span className="font-bold text-white">189</span> investisseurs
                  </div>
                  <div className="text-gray-400">
                    <span className="font-bold text-green-400">€95K</span> levés
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-transparent to-[#0a041c] border-t border-white/5 pt-20 pb-10 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Logo & Description */}
            <div className="col-span-1">
              <span className="text-3xl font-black tracking-tighter gradient-tricolor-animated mb-6 block">VISUAL</span>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                La première plateforme de streaming participatif qui récompense les spectateurs et finance les
                créateurs.
              </p>
            </div>

            {/* Liens Plateforme */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Plateforme</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Découvrir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Investir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Créateurs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Succès
                  </a>
                </li>
              </ul>
            </div>

            {/* Liens Ressources */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Ressources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Aide & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Presse
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Liens Légal */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Légal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Mentions Légales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    CGU / Règlement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Politique de Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>&copy; 2025 VISUAL Project. Tous droits réservés.</p>
            <div className="text-gray-500">
              Fait avec <span className="text-red-500">♥</span> pour les créateurs et investisseurs
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
