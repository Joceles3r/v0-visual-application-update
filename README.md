# VISUAL - Plateforme de Streaming Participatif

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/joces-projects-e11cad87/v0-visual-application-update)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/l5RcBqAKiuj)

## Vue d'ensemble

**VISUAL** est la première plateforme de streaming participatif qui permet des investissements limités, équitables et sécurisés dans les projets audiovisuels de demain. Notre plateforme connecte trois acteurs clés : les visiteurs, les porteurs de projets et les investisseurs.

## Fonctionnalités principales

### 🎬 Interface utilisateur moderne
- **Design cinématographique** : Interface inspirée du cinéma avec des feux tricolores symboliques positionnés aux extrémités
- **Responsive** : Optimisé pour tous les écrans (mobile, tablette, desktop)
- **Animations synchronisées** : Le logo VISUAL s'illumine en synchronisation avec les feux tricolores (rouge → jaune → vert)
- **Titre responsive** : Utilisation de `clamp()` pour garantir que le titre "VISUAL" reste toujours visible et jamais coupé

### 👥 Trois rôles distincts

#### 1. Visiteur
- Découvrir des projets audiovisuels innovants
- Regarder des contenus exclusifs (films, clips, documentaires)
- Explorer sans engagement

#### 2. Porteur de projet
- Déposer et présenter des projets audiovisuels
- Accéder à un financement participatif plafonné et équitable
- Bénéficier d'une visibilité auprès d'une communauté engagée

#### 3. Investisseur
- Investir dans des projets audiovisuels avec des montants limités
- Soutenir la création culturelle
- Profiter d'une sécurité juridique et d'une transparence totale

### 🎯 Sections principales

#### Hero central
- Titre "VISUAL" géant avec animation tricolore synchronisée
- Onglets interactifs pour découvrir chaque rôle
- Boutons d'action : "Découvrir les Projets" et "Commencer Maintenant"

#### Comment ça marche
1. **Créez votre compte** : Choisissez votre rôle (Visiteur, Porteur ou Investisseur)
2. **Découvrez les projets** : Explorez la bibliothèque de projets audiovisuels
3. **Participez** : Regardez, déposez ou investissez selon votre profil

#### Les rôles VISUAL
Cartes détaillées expliquant les bénéfices et actions de chaque rôle

#### Projets en Vedette
- **Eclipse Éternelle** : Thriller spatial futuriste
- **Neon Dreams** : Clip musical synthwave
- **Océans Invisibles** : Documentaire sur la vie marine

#### TOP 10
Classement des projets les plus populaires avec système de votes et statistiques

### 🎨 Design et animations

- **Palette de couleurs** : Violet profond (#1a0b2e, #2e1065) avec accents néon
- **Feux tricolores animés** : Positionnés aux extrémités avec pulsations synchronisées (2s par couleur)
- **Effets glassmorphism** : Cartes translucides avec backdrop-blur
- **Transitions fluides** : Animations hover et changements d'état élégants
- **Typographie** : Police Geist Sans moderne et lisible

### 🔧 Architecture technique

#### Stack
- **Framework** : Next.js 16 (App Router)
- **UI** : React 19.2 avec components shadcn/ui
- **Styling** : Tailwind CSS v4
- **Base de données** : Supabase (PostgreSQL)
- **Storage** : Vercel Blob
- **Déploiement** : Vercel

#### Structure des fichiers
\`\`\`
app/
├── page.tsx                    # Page d'accueil avec hero et sections
├── layout.tsx                  # Layout principal avec fonts
├── globals.css                 # Styles globaux et animations
├── dashboard/                  # Tableau de bord utilisateur
├── explore/                    # Exploration des projets
├── leaderboard/               # Classement TOP 10
├── login/                     # Authentification
└── upload/                    # Dépôt de projets

components/
├── visual-header.tsx          # Header avec menus déroulants enrichis
├── traffic-light.tsx          # Feux tricolores animés
└── ui/                        # Components shadcn/ui

lib/
├── supabase/
│   ├── client.ts             # Client Supabase browser
│   └── server.ts             # Client Supabase server
└── utils.ts                   # Utilitaires

middleware.ts                  # Middleware d'authentification
\`\`\`

### 📱 Responsive Design

Le titre "VISUAL" utilise `clamp()` pour une taille adaptative :
- **Mobile** (375-430px) : 3rem minimum
- **Tablette** (768px) : 7.5vw adaptatif
- **Desktop** (1280-1440px) : 6rem maximum

Garantie que le mot "VISUAL" reste :
- Toujours visible en entier
- Jamais coupé sur deux lignes
- Parfaitement centré
- Avec un espacement élégant (`tracking-[0.35em]`)

### 🔐 Sécurité et authentification

- Authentification via Supabase Auth
- Row Level Security (RLS) sur les données
- Environnement variables sécurisées
- Middleware de protection des routes

### 🚀 Intégrations

- **Supabase** : Base de données, authentification, storage
- **Vercel Blob** : Stockage de fichiers média
- **Vercel Analytics** : Suivi des performances

## Installation locale

\`\`\`bash
# Cloner le repository
git clone https://github.com/votre-username/v0-visual-application-update.git

# Installer les dépendances
npm install

# Configurer les variables d'environnement
# Créer un fichier .env.local avec :
# NEXT_PUBLIC_SUPABASE_URL=votre_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé
# SUPABASE_SERVICE_ROLE_KEY=votre_clé_service
# BLOB_READ_WRITE_TOKEN=votre_token

# Lancer le serveur de développement
npm run dev
\`\`\`

## Déploiement

Le projet est automatiquement déployé sur Vercel à chaque push sur la branche principale.

**Production** : [https://vercel.com/joces-projects-e11cad87/v0-visual-application-update](https://vercel.com/joces-projects-e11cad87/v0-visual-application-update)

## Continuer le développement

Poursuivez le développement sur :
**[https://v0.app/chat/l5RcBqAKiuj](https://v0.app/chat/l5RcBqAKiuj)**

## Améliorations récentes

### Interface Hero
- Titre VISUAL responsive avec `clamp()` pour éviter tout cassage
- Onglets interactifs pour les 3 rôles (Visiteur, Porteur, Investisseur)
- Boutons CTA centrés et équilibrés

### Feux tricolores
- Positionnement fixe aux extrémités de l'interface
- Animation de pulsation synchronisée (rouge → jaune → vert, 2s chaque)
- Synchronisation avec l'illumination des titres VISUAL

### Menus déroulants enrichis
- **Projets** : Découvrir, Déposer, Mes projets
- **Catégories** : Films, Clips, Documentaires
- **Découvrir** : Tendances, Nouveautés, TOP 10
- **Ressources** : Aide, Documentation, FAQ, Contact

### Sections
- "Comment ça marche" avec 3 étapes visuelles
- "Les rôles VISUAL" avec cartes détaillées
- "Projets en Vedette" avec images et statistiques
- "TOP 10" avec classement interactif

### Animations
- Animation tricolore synchronisée pour tous les titres VISUAL
- Effet de dégradé fluide lors des transitions de couleur
- Effets hover sophistiqués sur les cartes

## Licence

Tous droits réservés © 2025 VISUAL

## Support

Pour toute question ou support, contactez-nous via [Vercel Help](https://vercel.com/help).
