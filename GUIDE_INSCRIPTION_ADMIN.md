# Guide complet : Débloquer l'inscription ADMIN sur VISUAL

## Problème actuel

L'utilisateur est créé dans `auth.users` mais la session reste `undefined` après `signUp`, empêchant l'accès au dashboard.

**Cause principale** : La confirmation d'email est probablement activée dans Supabase, ce qui empêche la création immédiate d'une session.

---

## Solution en 4 étapes

### Étape 1 : Vérifier et configurer Supabase

#### A. Désactiver la confirmation d'email (temporairement)

1. Allez sur [Supabase Dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet VISUAL
3. Allez dans **Authentication** → **Providers** → **Email**
4. Trouvez l'option **"Confirm email"** ou **"Enable email confirmations"**
5. **Désactivez-la temporairement** pour tester l'inscription
6. Sauvegardez les modifications

> Note : Une fois que votre compte admin est créé, vous pourrez la réactiver.

#### B. Vérifier les variables d'environnement

Dans votre projet v0 ou Vercel, vérifiez que ces variables existent :

- `NEXT_PUBLIC_SUPABASE_URL` = URL de votre projet (ex: `https://xxxxx.supabase.co`)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Clé anonyme (trouvée dans Settings → API)

**Important** : Ce sont les variables avec le préfixe `NEXT_PUBLIC_` qui sont utilisées côté client.

---

### Étape 2 : Exécuter le script SQL de simplification

Exécutez le script `scripts/005_simplify_signup_rls.sql` qui :
- Supprime le trigger automatique `handle_new_user` (source de conflits)
- Crée des politiques RLS simples et claires
- Permet l'insertion du profil utilisateur pendant l'inscription

**Comment exécuter** :
1. Allez dans Supabase → **SQL Editor**
2. Copiez le contenu de `scripts/005_simplify_signup_rls.sql`
3. Exécutez-le
4. Vérifiez qu'il n'y a pas d'erreurs

---

### Étape 3 : Tester l'inscription

1. Allez sur votre application VISUAL
2. Cliquez sur **"Créer un Compte"** en haut à droite (ou allez sur `/signup`)
3. Remplissez le formulaire avec :
   - **Nom complet** : Votre nom
   - **Email** : L'email que vous voulez utiliser comme admin (ex: `admin@visual-project.app`)
   - **Mot de passe** : Minimum 6 caractères
4. Cliquez sur **"S'inscrire"**

**Résultat attendu** :
- Message de succès : "Compte créé avec succès !"
- Redirection automatique vers `/dashboard` après 1,5 secondes
- Vous êtes connecté et voyez votre dashboard

**Si vous voyez un message de confirmation d'email** :
- Cela signifie que la confirmation email est encore activée
- Retournez à l'Étape 1A et désactivez-la
- Supprimez l'utilisateur de test dans Supabase → Authentication → Users
- Réessayez l'inscription

---

### Étape 4 : Vous promouvoir en ADMIN

Une fois votre compte créé et que vous êtes connecté :

1. Allez dans Supabase → **SQL Editor**
2. Exécutez cette requête (remplacez l'email par le vôtre) :

\`\`\`sql
UPDATE public.users
SET role = 'admin'
WHERE email = 'admin@visual-project.app';
\`\`\`

3. Vérifiez dans **Table Editor** → `users` que votre ligne a bien `role = 'admin'`
4. Déconnectez-vous et reconnectez-vous pour que le nouveau rôle prenne effet
5. Vous pouvez maintenant accéder à `/admin` !

---

## Accéder au Dashboard Admin

### Chemin d'accès

Une fois que vous êtes ADMIN :

1. **Connectez-vous** sur `/login` avec vos identifiants
2. Allez directement sur `/admin` dans l'URL
3. Vous verrez le Dashboard Admin complet avec :
   - Statistiques en temps réel (utilisateurs, vidéos, commentaires)
   - Gestion des utilisateurs (modifier rôle, Visupoints, badges)
   - Modération des vidéos
   - Modération des commentaires

### Navigation dans le header

Pour faciliter l'accès, vous pouvez ajouter un lien dans le menu déroulant **"Mon Espace"** :
- Si votre rôle est `admin`, un lien "Dashboard Admin" apparaîtra automatiquement

---

## Vérification finale

### Checklist avant d'utiliser le dashboard admin

- [ ] La confirmation d'email est désactivée dans Supabase
- [ ] Les variables d'environnement `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` sont définies
- [ ] Le script `005_simplify_signup_rls.sql` a été exécuté sans erreur
- [ ] Vous avez créé un compte via `/signup`
- [ ] Vous avez été redirigé vers `/dashboard` après l'inscription
- [ ] Vous avez exécuté la requête SQL pour vous promouvoir en admin
- [ ] Vous pouvez accéder à `/admin` sans être redirigé

---

## Dépannage

### Problème : "Session undefined" après inscription

**Solution** : Vérifiez que la confirmation d'email est bien désactivée dans Supabase.

### Problème : "Violates row-level security policy"

**Solution** : Réexécutez le script `005_simplify_signup_rls.sql` qui corrige les politiques RLS.

### Problème : "Supabase environment variables not configured"

**Solution** : Vérifiez que `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` sont bien définies dans les variables d'environnement de votre projet.

### Problème : Redirigé vers `/login` au lieu du dashboard

**Solution** : Cela signifie qu'aucune session n'a été créée. Vérifiez l'Étape 1A (désactiver la confirmation d'email).

---

## Prochaines étapes

Une fois que votre compte admin fonctionne :

1. **Réactivez la confirmation d'email** dans Supabase pour la sécurité
2. **Testez la création d'autres comptes** pour vérifier que tout fonctionne
3. **Explorez le Dashboard Admin** pour gérer votre plateforme VISUAL
4. **Personnalisez les permissions** selon vos besoins

Bon développement ! 🎬
