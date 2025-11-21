-- Add admin role column to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'visitor';

-- Create index for faster role lookups
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Set first user as admin (IMPORTANT: update with your actual email after signup)
-- UPDATE users SET role = 'admin' WHERE email = 'votre-email@example.com';

COMMENT ON COLUMN users.role IS 'User role: visitor, porteur, investisseur, admin';
