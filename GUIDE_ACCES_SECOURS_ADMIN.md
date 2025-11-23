# Guide d'Accès de Secours au Dashboard Admin

En cas de perte d'accès au dashboard admin de VISUAL, vous disposez de plusieurs méthodes de récupération :

## Méthode 1 : Page de Récupération Admin (Recommandée)

1. **Accédez à la page de récupération :**
   \`\`\`
   https://votre-domaine.com/admin-recovery
   \`\`\`

2. **Entrez vos informations :**
   - Email : `jocelyndru@gmail.com`
   - Code secret : `VISUAL-EMERGENCY-2025` (code par défaut)

3. **Validez** et vous retrouverez instantanément le rôle admin

**Important :** Pour plus de sécurité, changez le code secret après la première utilisation en ajoutant la variable d'environnement :
\`\`\`
EMERGENCY_ADMIN_SECRET=votre-nouveau-code-secret-unique
\`\`\`

## Méthode 2 : Route API directe

Si la page de récupération ne fonctionne pas, utilisez cette commande curl :

\`\`\`bash
curl -X POST https://votre-domaine.com/api/emergency-admin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jocelyndru@gmail.com",
    "secret": "VISUAL-EMERGENCY-2025"
  }'
\`\`\`

## Méthode 3 : Script SQL Direct (Dernier recours)

Si tout échoue, connectez-vous au dashboard Supabase :

1. Allez sur https://supabase.com/dashboard
2. Sélectionnez votre projet VISUAL
3. Allez dans l'éditeur SQL
4. Exécutez le script `scripts/007_emergency_admin_access.sql`
5. Ou copiez-collez directement :

\`\`\`sql
UPDATE public.users
SET role = 'admin'
WHERE email = 'jocelyndru@gmail.com';
\`\`\`

## Méthode 4 : Variable d'environnement Super Admin (Configuration préventive)

Ajoutez cette variable d'environnement sur Vercel pour définir un email qui aura TOUJOURS le rôle admin :

\`\`\`
SUPER_ADMIN_EMAIL=jocelyndru@gmail.com
\`\`\`

Puis modifiez le code de vérification admin pour accepter cet email même sans rôle dans la base de données.

## Sécurité

- Ne partagez jamais le code secret de récupération
- Changez le code secret après chaque utilisation
- Gardez une copie du script SQL dans un endroit sûr
- La page `/admin-recovery` est publique mais protégée par le code secret

## Test de la récupération

Pour tester que le système de secours fonctionne :

1. Retirez temporairement votre rôle admin dans Supabase
2. Utilisez la page `/admin-recovery` pour le récupérer
3. Vérifiez que vous pouvez accéder à `/admin` à nouveau

## En cas de problème

Si aucune méthode ne fonctionne, contactez le support Supabase pour accéder directement à votre base de données et modifier manuellement le rôle.
