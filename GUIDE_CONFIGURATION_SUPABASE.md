# Guide de Configuration Supabase pour VISUAL

## Étape 1: Désactiver la confirmation d'email (temporairement pour le développement)

Pour faciliter les tests pendant le développement, vous pouvez désactiver la confirmation d'email :

1. Allez dans votre dashboard Supabase
2. Naviguez vers **Authentication** → **Providers** → **Email**
3. Cherchez l'option **"Enable email confirmations"** ou **"Confirm email"**
4. **Désactivez** cette option
5. Sauvegardez les modifications

**Effet attendu :** Après l'inscription avec `signUp()`, Supabase renverra une session immédiatement, permettant à `signInWithPassword()` de fonctionner sans cliquer sur un lien de confirmation par email.

**Note :** Vous pourrez réactiver cette option plus tard en production pour plus de sécurité.

---

## Étape 2: Vérifier les variables d'environnement

Ces variables d'environnement sont **CRITIQUES** pour le bon fonctionnement de l'authentification :

### Variables requises

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-clé-anon-key
\`\`\`

### Où les trouver

1. Allez dans votre dashboard Supabase
2. Naviguez vers **Settings** → **API**
3. Copiez :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Vérifications importantes

- Pas d'espace en trop
- Pas de faute de frappe
- Les variables doivent être identiques à celles de Supabase
- Ne pas utiliser d'anciennes URL/clés d'un projet précédent

### Configuration dans v0/Vercel

1. Dans v0, allez dans l'onglet **Vars** de la sidebar
2. Ajoutez les deux variables d'environnement
3. Redéployez le projet

---

## Étape 3: Attribuer le rôle admin

Une fois que vous pouvez vous connecter de manière fiable :

1. Créez un compte admin (par exemple : `admin@visual.app`)
2. Allez dans votre dashboard Supabase
3. Naviguez vers **SQL Editor**
4. Exécutez cette requête SQL :

\`\`\`sql
UPDATE public.users
SET role = 'admin'
WHERE email = 'admin@visual.app';
\`\`\`

5. Vérifiez que la mise à jour a réussi :

\`\`\`sql
SELECT id, email, role FROM public.users WHERE email = 'admin@visual.app';
\`\`\`

---

## Étape 4: Scénario de test complet

Une fois la configuration terminée, testez le flux complet :

### Test d'inscription
1. Allez sur `/signup`
2. Créez un compte avec un nouvel email
3. Vérifiez qu'il n'y a pas d'erreur
4. Vous devez être redirigé vers `/login`

### Test de connexion
1. Allez sur `/login`
2. Connectez-vous avec email + mot de passe
3. Vous devez être redirigé vers `/dashboard`
4. Vous devez voir vos stats (VISUpoints = 0, etc.)

### Test de persistance de session
1. Actualisez `/dashboard` → vous devez rester connecté
2. Fermez l'onglet, ouvrez un nouvel onglet
3. Retournez sur `/dashboard` → vous devez toujours être connecté

### Test de déconnexion
1. Cliquez sur "Logout / Se déconnecter"
2. Essayez d'accéder à `/dashboard`
3. Vous devez être renvoyé vers `/login`

---

## Dépannage

### Erreur: "Supabase environment variables are missing"
- Vérifiez que les variables sont bien configurées
- Redéployez le projet après avoir ajouté les variables

### Problème: Boucle infinie entre /login et /dashboard
- Vérifiez que les variables d'environnement sont correctes
- Vérifiez que la confirmation d'email est désactivée (temporairement)
- Supprimez le cache du navigateur et les cookies

### Erreur: "new row violates row-level security policy"
- Le trigger `handle_new_user` devrait créer le profil automatiquement
- Si le trigger échoue, le code signup essaie de créer le profil manuellement
- Vérifiez les politiques RLS dans Supabase

---

## Pour plus tard: Sécuriser l'accès admin

Une fois l'authentification stable, vous pourrez :

1. Créer une page `/admin` protégée
2. Ajouter des vérifications de rôle :
   \`\`\`typescript
   if (user.role !== 'admin') {
     router.push('/')
     return
   }
   \`\`\`
3. Réactiver la confirmation d'email en production
4. Configurer des politiques RLS plus strictes

---

## Résumé du flux d'authentification actuel

1. **Inscription** (`/signup`)
   - L'utilisateur remplit le formulaire
   - `supabase.auth.signUp()` crée le compte auth
   - Le trigger `handle_new_user` (ou le code manuel) crée le profil dans `users`
   - Redirection vers `/login`

2. **Connexion** (`/login`)
   - L'utilisateur entre email + mot de passe
   - `supabase.auth.signInWithPassword()` établit une session
   - La session est stockée dans localStorage
   - Redirection vers `/dashboard`

3. **Dashboard** (`/dashboard`)
   - Vérifie la session avec `supabase.auth.getSession()`
   - Si pas de session → redirection vers `/login`
   - Si session valide → affiche les données utilisateur

Ce flux est simple, fiable, et fonctionne avec ou sans confirmation d'email activée.
