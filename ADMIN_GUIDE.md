# Guide d'Accès au Dashboard ADMIN de VISUAL

## 🚀 Comment Accéder au Dashboard Admin

### Étape 1 : Exécuter le Script SQL
1. **Exécutez le script** `scripts/003_add_admin_role.sql` depuis v0
   - Ce script ajoute une colonne `role` à la table `users`
   - Cliquez sur le bouton "Run" dans l'interface v0

### Étape 2 : Créer un Compte Utilisateur
1. **Inscrivez-vous** sur VISUAL via `/signup`
2. **Notez votre email** utilisé pour l'inscription

### Étape 3 : Vous Attribuer le Rôle Admin
1. **Exécutez cette requête SQL** directement depuis v0 :
   \`\`\`sql
   UPDATE users SET role = 'admin' WHERE email = 'votre-email@example.com';
   \`\`\`
   Remplacez `votre-email@example.com` par votre vrai email

### Étape 4 : Accéder au Dashboard
1. **Connectez-vous** via `/login`
2. **Naviguez vers** `/admin`
3. **Vous voilà admin !** 🎉

## 📊 Fonctionnalités du Dashboard

### 🔢 Vue d'Ensemble (Stats)
- **Nombre total d'utilisateurs**
- **Nombre total de vidéos**
- **Nombre total de commentaires**
- **Total des Visupoints distribués**

### 👥 Gestion des Utilisateurs
- **Voir tous les utilisateurs** avec pagination et recherche
- **Changer le rôle** (Visiteur, Porteur, Investisseur, Admin)
- **Ajuster manuellement les Visupoints** en temps réel
- **Voir le profil** de n'importe quel utilisateur

### 🎥 Gestion des Vidéos
- **Modérer les vidéos** (Publié, En attente, Rejeté)
- **Supprimer des vidéos** inappropriées
- **Voir les statistiques** (vues, date de création)
- **Ouvrir la vidéo** dans un nouvel onglet

### 💬 Gestion des Commentaires
- **Modérer les commentaires** récents (100 derniers)
- **Supprimer les commentaires** inappropriés
- **Rechercher** dans les commentaires

## 🎨 Interface Intuitive

Le dashboard utilise :
- **Feux tricolores** comme repères visuels (identité VISUAL)
- **Onglets clairs** pour chaque section
- **Recherche instantanée** dans toutes les listes
- **Confirmations** pour les actions destructives
- **Design cohérent** avec le reste de VISUAL

## 🔒 Sécurité

Le middleware protège automatiquement la route `/admin` :
- Seuls les utilisateurs authentifiés peuvent accéder
- Seuls les utilisateurs avec `role = 'admin'` peuvent voir le dashboard
- Les autres sont redirigés vers la page d'accueil

## 📝 URL Complète

Une fois connecté en tant qu'admin :
- **Dashboard** : `https://votre-domaine.vercel.app/admin`

## ⚡ Actions Rapides

- **Utilisateurs** : Cliquez sur le rôle pour le changer instantanément
- **Visupoints** : Tapez un nombre et appuyez sur Entrée
- **Vidéos** : Changez le statut via le menu déroulant
- **Suppression** : Confirmation requise pour éviter les erreurs

---

**Vous avez maintenant le contrôle total de VISUAL !** 🎬
