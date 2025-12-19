import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const PAGE_SIZE = 1000;

export async function fetchAllRecords(table, query = {}) {
  let allRecords = [];
  let hasMore = true;
  let start = 0;

  while (hasMore) {
    const { data, error, count } = await supabase
      .from(table)
      .select('*', { count: 'exact', ...query })
      .range(start, start + PAGE_SIZE - 1);

    if (error) {
      throw error;
    }

    if (data) {
      allRecords = [...allRecords, ...data];
      
      // Check if we've received less than PAGE_SIZE records
      // or if we've reached the total count
      if (data.length < PAGE_SIZE) {
        hasMore = false;
      } else {
        start += PAGE_SIZE;
      }
    } else {
      hasMore = false;
    }
  }

  return allRecords;
}