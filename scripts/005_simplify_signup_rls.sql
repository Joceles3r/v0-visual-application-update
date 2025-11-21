-- Script 005: Simplifier l'inscription (Option 2)
-- Supprimer le trigger automatique et utiliser des RLS simples

-- 1. Supprimer le trigger automatique si il existe
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- 2. Créer une politique RLS simple pour permettre l'insertion du profil
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.users;
CREATE POLICY "Users can insert their own profile"
  ON public.users
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 3. Politique pour lire son propre profil
DROP POLICY IF EXISTS "Users can view their own profile or admins can view all" ON public.users;
CREATE POLICY "Users can view their own profile or admins can view all"
  ON public.users
  FOR SELECT
  USING (auth.uid() = id OR (SELECT role FROM public.users WHERE id = auth.uid()) = 'admin');

-- 4. Politique pour mettre à jour son propre profil
DROP POLICY IF EXISTS "Users can update their own profile or admins can update all" ON public.users;
CREATE POLICY "Users can update their own profile or admins can update all"
  ON public.users
  FOR UPDATE
  USING (auth.uid() = id OR (SELECT role FROM public.users WHERE id = auth.uid()) = 'admin');

-- 5. Politique admin pour gérer tous les utilisateurs
DROP POLICY IF EXISTS "Admins can manage all users" ON public.users;
CREATE POLICY "Admins can manage all users"
  ON public.users
  FOR ALL
  USING ((SELECT role FROM public.users WHERE id = auth.uid()) = 'admin');
