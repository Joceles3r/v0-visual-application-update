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
import { TrafficLight } from "@/components/traffic-light"

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

        <div className="w-full max-w-5xl mx-auto relative mb-8">
          <div className="bg-gradient-to-b from-[#8B4513] via-[#654321] to-[#3D2817] p-4 rounded-t-3xl rounded-b-xl shadow-[0_40px_80px_rgba(0,0,0,0.9)] border-[6px] border-[#654321] relative overflow-hidden">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] opacity-40 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-amber-400/60 blur-2xl" />
            <div className="bg-black border-[20px] border-[#1a1a1a] rounded-2xl relative overflow-hidden aspect-video shadow-[inset_0_0_60px_rgba(0,0,0,0.95)]">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-red-900/90 via-red-800/70 to-transparent pointer-events-none z-10">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_8px)]" />
              </div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-red-900/90 via-red-800/70 to-transparent pointer-events-none z-10">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_8px)]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950/30 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 bg-[url('/cinematic-movie-theater-screen.jpg')] opacity-10 bg-cover bg-center" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-radial from-purple-500/10 to-transparent blur-3xl" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full border-4 border-white/30 flex items-center justify-center mb-8 hover:scale-110 transition-transform duration-300 cursor-pointer bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-green-400/70 shadow-[0_0_40px_rgba(0,0,0,0.6)] relative group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
                    <Play className="w-12 h-12 text-white fill-white ml-2" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-3 tracking-wide">Démo Interactive</h3>
                  <p className="text-gray-300 mb-10 font-light text-lg">Découvrez l'expérience VISUAL • 60s</p>
                  <Button className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:brightness-125 text-black font-black rounded-full px-12 py-8 h-auto text-xl shadow-[0_0_40px_rgba(234,179,8,0.4)] border-2 border-white/20 transition-all hover:scale-110 hover:shadow-[0_0_60px_rgba(234,179,8,0.6)]">
                    <Play className="w-6 h-6 mr-3 fill-black" /> Lancer la Démo
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute top-3 left-3 w-10 h-10 border-t-[6px] border-l-[6px] border-amber-500/90 rounded-tl-xl shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            <div className="absolute top-3 right-3 w-10 h-10 border-t-[6px] border-r-[6px] border-amber-500/90 rounded-tr-xl shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            <div className="absolute bottom-3 left-3 w-10 h-10 border-b-[6px] border-l-[6px] border-amber-500/90 rounded-bl-xl shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            <div className="absolute bottom-3 right-3 w-10 h-10 border-b-[6px] border-r-[6px] border-amber-500/90 rounded-br-xl shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
          </div>
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

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight text-center">
            Projets en Vedette
          </h2>
          <div className="flex justify-center mb-12">
            <Button className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-black font-black rounded-full px-8 py-4 shadow-lg shadow-amber-900/50 hover:scale-105 transition-all">
              Voir le TOP 10
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Eclipse Éternelle",
                category: "Films",
                budget: "€250K",
                funded: 89,
                image: "/sci-fi-space-thriller-movie-poster-dark-purple-atm.jpg",
              },
              {
                title: "Neon Dreams",
                category: "Vidéo-clips",
                budget: "€80K",
                funded: 67,
                image: "/synthwave-neon-music-video-cyberpunk-vaporwave.jpg",
              },
              {
                title: "Océans Invisibles",
                category: "Documentaires",
                budget: "€120K",
                funded: 92,
                image: "/underwater-ocean-documentary-marine-life-deep-sea.jpg",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white border-none shadow-lg">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-white mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-purple-300 font-bold">{project.budget}</span>
                    <span className="text-green-400 font-bold">{project.funded}% financé</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 mb-4 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-300 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${project.funded}%` }}
                    />
                  </div>
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-xl transition-all">
                    Voir le Projet
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-b from-[#8B4513] via-[#654321] to-[#3D2817] p-3 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-4 border-[#654321]">
            <div className="bg-black/90 border-8 border-[#1a1a1a] rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-red-900/60 via-red-800/40 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-red-900/60 via-red-800/40 to-transparent pointer-events-none z-10" />

              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center relative z-20">
                Comment ça marche ?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 relative z-20">
                {[
                  {
                    number: "1",
                    title: "Découvrez",
                    description: "Explorez les projets créatifs en cours de financement",
                  },
                  {
                    number: "2",
                    title: "Investissez",
                    description: "Choisissez un projet et investissez dès 10€",
                  },
                  {
                    number: "3",
                    title: "Gagnez",
                    description: "Recevez votre part des revenus générés",
                  },
                ].map((step) => (
                  <div key={step.number} className="text-center mx-auto max-w-xs">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 text-white flex items-center justify-center text-4xl font-black mb-4 mx-auto shadow-lg shadow-purple-900/50">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 py-12 px-4 mt-20 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4 gradient-tricolor-animated inline-block">VISUAL</h3>
              <p className="text-gray-400 text-sm">
                La plateforme de streaming participatif qui révolutionne le financement de l'audiovisuel.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Découvrir</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Projets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Catégories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    TOP 10
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Participer</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Déposer un projet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Devenir investisseur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Comment ça marche
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Aide</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            © 2025 VISUAL. Tous droits réservés. Plateforme de streaming participatif et d'investissement audiovisuel.
          </div>
        </div>
      </footer>
    </main>
  )
}
