"use client"

import { VisualHeader } from "@/components/visual-header"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HelpCircle, Mail, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a0320] via-[#1a0b2e] to-[#050214] text-white">
            <VisualHeader />

            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="text-center mb-16">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400 mb-4">
                        Centre d'Aide
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 gradient-tricolor-animated">
                        Questions Fréquentes
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Tout ce que vous devez savoir sur le fonctionnement de VISUAL, que vous soyez visiteur, investisseur ou créateur.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid gap-8">
                    {/* Section Visiteurs */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-blue-500/20 p-2 rounded-lg text-blue-400">👀</span>
                            Pour les Visiteurs
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="visiteur-1" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-blue-400 hover:no-underline">
                                    Comment créer un compte ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    L'inscription est totalement gratuite et prend moins de 2 minutes. Cliquez sur le bouton "Créer un Compte" en haut à droite, renseignez votre email et choisissez un mot de passe. Vous gagnerez immédiatement 100 VISUpoints de bienvenue !
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="visiteur-2" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-blue-400 hover:no-underline">
                                    C'est vraiment gratuit de regarder ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    Oui ! En tant que Visiteur, vous avez un accès illimité et gratuit à toutes les pages projets, aux bandes-annonces, aux statistiques et à la communauté. Vous pouvez suivre vos projets favoris et commenter sans rien payer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="visiteur-3" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-blue-400 hover:no-underline">
                                    Comment gagner des VISUpoints ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    Vous gagnez des points pour chaque interaction : 5 points par connexion quotidienne, 10 points par commentaire, 15 points par partage, et bien plus. Ces points débloquent des badges et des avantages exclusifs.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Section Investisseurs */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-green-500/20 p-2 rounded-lg text-green-400">💰</span>
                            Pour les Investisseurs
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="investor-1" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-green-400 hover:no-underline">
                                    Quel est le montant minimum d'investissement ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    L'investissement est accessible à tous dès 10€. Vous pouvez investir des montants plus importants par paliers (50€, 100€, etc.) jusqu'à un maximum de 10 000€ par projet pour garantir l'équité.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="investor-2" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-green-400 hover:no-underline">
                                    Comment fonctionne le calcul des parts ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    C'est proportionnel : 1 part = 10€. Si vous investissez 100€, vous possédez 10 parts. Si le projet génère des revenus, vous recevez un pourcentage de ces revenus correspondant exactement à votre part du financement total.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="investor-3" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-green-400 hover:no-underline">
                                    Puis-je perdre mon argent ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    Si un projet n'atteint pas son objectif de financement, vous êtes remboursé à 100% sans frais. Une fois le projet financé et produit, comme tout investissement, il existe un risque que les revenus générés soient inférieurs à la mise de départ, bien que nous sélectionnions rigoureusement les projets.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="investor-4" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-green-400 hover:no-underline">
                                    Quand et comment retirer mes gains ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    Vos gains sont crédités sur votre portefeuille VISUAL dès qu'ils sont distribués. Vous pouvez demander un virement vers votre compte bancaire à tout moment (minimum 50€). Les virements sont traités sous 48h.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Section Porteurs de Projet */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">🎬</span>
                            Pour les Porteurs de Projet
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="creator-1" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-purple-400 hover:no-underline">
                                    Comment soumettre mon projet ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    Créez un compte Porteur, puis cliquez sur "Soumettre un projet". Vous devrez fournir un synopsis, une présentation de l'équipe, un budget prévisionnel, et idéalement une bande-annonce ou un teaser vidéo.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="creator-2" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-purple-400 hover:no-underline">
                                    Quels sont les frais de la plateforme ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    VISUAL prélève une commission de 5% uniquement si votre campagne est un succès. Il n'y a aucun frais de dossier ou de mise en ligne. Si l'objectif n'est pas atteint, vous ne payez rien.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="creator-3" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-purple-400 hover:no-underline">
                                    Combien de temps prend la validation ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    Notre équipe examine chaque dossier sous 48 à 72 heures. Nous vérifions la complétude du dossier, la faisabilité du budget et la qualité des éléments visuels avant de valider la mise en ligne.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Section Infoporteurs */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400">📢</span>
                            Pour les Infoporteurs (Affiliation)
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="affiliate-1" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-cyan-400 hover:no-underline">
                                    Comment fonctionne le programme d'affiliation ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    Vous obtenez un lien unique pour chaque projet. Partagez-le sur vos réseaux. Si quelqu'un investit via votre lien, vous touchez une commission de 5% à 12% sur le montant investi, selon votre niveau (Bronze à Platine).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="affiliate-2" className="border-white/10">
                                <AccordionTrigger className="text-lg hover:text-cyan-400 hover:no-underline">
                                    Faut-il investir pour être Infoporteur ?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    Non, absolument pas ! Vous pouvez gagner de l'argent uniquement en partageant les projets, sans jamais investir vous-même. C'est un excellent moyen de générer des revenus sans risque.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold mb-8">Vous ne trouvez pas votre réponse ?</h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                            <Mail className="w-8 h-8 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold mb-2">Email</h4>
                            <p className="text-sm text-gray-400 mb-4">Réponse sous 24h</p>
                            <span className="text-purple-400 text-sm font-medium">support@visual-project.com</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                            <MessageCircle className="w-8 h-8 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold mb-2">Chat en Direct</h4>
                            <p className="text-sm text-gray-400 mb-4">Lun-Ven, 9h-19h</p>
                            <span className="text-green-400 text-sm font-medium">Démarrer une discussion</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                            <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold mb-2">Téléphone</h4>
                            <p className="text-sm text-gray-400 mb-4">Urgences uniquement</p>
                            <span className="text-blue-400 text-sm font-medium">+33 (0)1 XX XX XX XX</span>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <Link href="/signup">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full px-12 py-6 h-auto text-lg font-bold shadow-lg shadow-purple-900/50 hover:scale-105 transition-all">
                            Rejoindre VISUAL Maintenant
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
