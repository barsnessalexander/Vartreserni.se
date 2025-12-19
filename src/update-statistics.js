import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function updateDestinationStatistics() {
  try {
    // Fetch all destinations
    const { data: destinations, error: destError } = await supabase
      .from('destinations')
      .select('*');

    if (destError) {
      throw new Error(`Error fetching destinations: ${destError.message}`);
    }

    // Fetch all backpacking trips
    const { data: backpackingTrips, error: backError } = await supabase
      .from('backpacking_trips')
      .select('*');

    if (backError) {
      throw new Error(`Error fetching backpacking trips: ${backError.message}`);
    }

    // Process destinations
    const destinationStats = destinations.reduce((acc, curr) => {
      if (!acc[curr.location]) {
        acc[curr.location] = {
          travelers: 0,
          interested: 0,
          ages: [],
          genders: { Male: 0, Female: 0 },
          homeLocations: {}
        };
      }

      // Update statistics
      if (curr.is_interested) {
        acc[curr.location].interested++;
      } else {
        acc[curr.location].travelers++;
      }

      acc[curr.location].ages.push(curr.age);
      acc[curr.location].genders[curr.gender]++;
      acc[curr.location].homeLocations[curr.home_location] = 
        (acc[curr.location].homeLocations[curr.home_location] || 0) + 1;

      return acc;
    }, {});

    // Process backpacking trips
    backpackingTrips.forEach(trip => {
      trip.destinations.forEach(dest => {
        if (!destinationStats[dest]) {
          destinationStats[dest] = {
            travelers: 0,
            interested: 0,
            ages: [],
            genders: { Male: 0, Female: 0 },
            homeLocations: {}
          };
        }

        if (trip.is_interested) {
          destinationStats[dest].interested++;
        } else {
          destinationStats[dest].travelers++;
        }

        destinationStats[dest].ages.push(trip.age);
        destinationStats[dest].genders[trip.gender]++;
        destinationStats[dest].homeLocations[trip.home_location] = 
          (destinationStats[dest].homeLocations[trip.home_location] || 0) + 1;
      });
    });

    console.log('Statistics updated successfully!');
    console.log('\nDestination Statistics:');
    Object.entries(destinationStats).forEach(([location, stats]) => {
      console.log(`\n${location}:`);
      console.log(`- Total Travelers: ${stats.travelers}`);
      console.log(`- Interested: ${stats.interested}`);
      console.log(`- Average Age: ${(stats.ages.reduce((a, b) => a + b, 0) / stats.ages.length).toFixed(1)}`);
      console.log(`- Gender Distribution: Male: ${stats.genders.Male}, Female: ${stats.genders.Female}`);
      console.log('- Top Home Locations:');
      Object.entries(stats.homeLocations)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3)
        .forEach(([location, count]) => {
          console.log(`  * ${location}: ${count}`);
        });
    });

  } catch (error) {
    console.error('Error updating statistics:', error);
  }
}

updateDestinationStatistics();