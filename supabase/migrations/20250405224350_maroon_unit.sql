/*
  # Delete all existing users and data

  1. Changes
    - Delete all data from forum_posts table
    - Delete all data from forum_users table
    - Delete all data from auth.users table
    - Delete all data from destinations table
    - Delete all data from backpacking_trips table
*/

-- Delete all data from dependent tables first
DELETE FROM forum_posts;
DELETE FROM forum_users;
DELETE FROM destinations;
DELETE FROM backpacking_trips;

-- Delete all users from auth schema
DELETE FROM auth.users;