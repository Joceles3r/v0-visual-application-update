-- Allow users to insert their own profile during signup
DROP POLICY IF EXISTS "Users can insert their own profile" ON users;
CREATE POLICY "Users can insert their own profile"
  ON users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Make sure users can read their own profile
DROP POLICY IF EXISTS "Users can view their own profile or admins can view all" ON users;
CREATE POLICY "Users can view their own profile or admins can view all"
  ON users FOR SELECT
  USING (auth.uid() = id OR (SELECT role FROM users WHERE id = auth.uid()) = 'admin');
