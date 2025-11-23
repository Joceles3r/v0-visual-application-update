-- Script SQL de secours pour accéder au dashboard admin
-- À exécuter directement depuis Supabase SQL Editor en cas d'urgence

-- Remplacez 'votre-email@example.com' par votre email
UPDATE public.users
SET role = 'admin'
WHERE email = 'jocelyndru@gmail.com';

-- Vérifier que le changement a été appliqué
SELECT id, email, full_name, role
FROM public.users
WHERE email = 'jocelyndru@gmail.com';

-- Alternative : Donner le rôle admin à tous les utilisateurs avec un email spécifique
-- UPDATE public.users SET role = 'admin' WHERE email LIKE '%@votredomaine.com';
