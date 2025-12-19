import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function clearDestinations() {
  try {
    const { error } = await supabase
      .from('destinations')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');
    
    if (error) {
      throw new Error(`Failed to clear destinations: ${error.message}`);
    }
    console.log('Successfully cleared destinations table');
  } catch (error) {
    console.error('Error clearing destinations:', error);
  }
}

async function clearBackpackingTrips() {
  try {
    const { error } = await supabase
      .from('backpacking_trips')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');
    
    if (error) {
      throw new Error(`Failed to clear backpacking trips: ${error.message}`);
    }
    console.log('Successfully cleared backpacking_trips table');
  } catch (error) {
    console.error('Error clearing backpacking trips:', error);
  }
}

async function clearAllData() {
  try {
    await clearDestinations();
    await clearBackpackingTrips();
    console.log('Successfully cleared all data from the database');
  } catch (error) {
    console.error('Error clearing data:', error);
  }
}

clearAllData();