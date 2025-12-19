-- Update forum_users policies
DROP POLICY IF EXISTS "Users can read all profiles" ON forum_users;
DROP POLICY IF EXISTS "Users can update own profile" ON forum_users;

-- Allow anyone to read forum_users
CREATE POLICY "Anyone can read forum_users"
  ON forum_users
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to insert their own profile
CREATE POLICY "Users can create own profile"
  ON forum_users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile"
  ON forum_users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Update forum_posts policies to allow public read
DROP POLICY IF EXISTS "Anyone can read posts" ON forum_posts;

CREATE POLICY "Anyone can read posts"
  ON forum_posts
  FOR SELECT
  TO public
  USING (true);