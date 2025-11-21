-- Fix infinite recursion in RLS policies by simplifying them
-- Remove admin checks that cause recursion

-- Drop all existing policies that cause recursion
DROP POLICY IF EXISTS "Users can view their own profile or admins can view all" ON users;
DROP POLICY IF EXISTS "Users can update their own profile or admins can update all" ON users;
DROP POLICY IF EXISTS "Users can insert their own profile" ON users;
DROP POLICY IF EXISTS "Admins can manage all videos" ON videos;
DROP POLICY IF EXISTS "Admins can manage all comments" ON comments;

-- Create simple policies without recursion for users table
CREATE POLICY "Users can view their own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON users FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- For admin access, we'll create a separate function that doesn't cause recursion
-- This function checks if a user is admin using a direct query with SECURITY DEFINER
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.users
    WHERE id = user_id AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Now create admin policies using the function
CREATE POLICY "Admins can view all users"
  ON users FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update all users"
  ON users FOR UPDATE
  USING (public.is_admin(auth.uid()));

-- Apply similar fixes for videos and comments tables if they exist
DO $$ 
BEGIN
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'videos') THEN
    DROP POLICY IF EXISTS "Admins can manage all videos" ON videos;
    CREATE POLICY "Admins can manage all videos"
      ON videos FOR ALL
      USING (public.is_admin(auth.uid()));
  END IF;

  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'comments') THEN
    DROP POLICY IF EXISTS "Admins can manage all comments" ON comments;
    CREATE POLICY "Admins can manage all comments"
      ON comments FOR ALL
      USING (public.is_admin(auth.uid()));
  END IF;
END $$;

-- Grant execute permission on the is_admin function
GRANT EXECUTE ON FUNCTION public.is_admin(UUID) TO anon, authenticated;
