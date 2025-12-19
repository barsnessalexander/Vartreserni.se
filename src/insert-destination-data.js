import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

const DESTINATIONS = ['Zakynthos', 'Magaluf', 'Rhodos', 'Ayia Napa', 'Palma de Mallorca', 'Kos'];

const CITIES = [
  'Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping',
  'Helsingborg', 'Jönköping', 'Norrköping', 'Umeå', 'Lund', 'Borås', 'Sundsvall'
];

// Normal distribution function (Box-Muller transform)
function normalRandom(mean, stdDev) {
  let u = 0, v = 0;
  while(u === 0) u = Math.random();
  while(v === 0) v = Math.random();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return Math.round(num * stdDev + mean);
}

function getRandomDestination() {
  return DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
}

function getRandomAge() {
  // 80% chance for 18 years, 20% for 16-25
  if (Math.random() < 0.8) {
    return 18;
  }
  // Rest distributed between 16-25 (excluding 18)
  const ages = [16, 17, 19, 20, 21, 22, 23, 24, 25];
  return ages[Math.floor(Math.random() * ages.length)];
}

function getRandomGender() {
  // 50% split
  return Math.random() < 0.5 ? 'Male' : 'Female';
}

function getRandomCity() {
  // 80% Stockholm, 20% other cities
  if (Math.random() < 0.8) {
    return 'Stockholm';
  }
  const otherCities = CITIES.filter(city => city !== 'Stockholm');
  return otherCities[Math.floor(Math.random() * otherCities.length)];
}

function getTravelWeeks() {
  // Normal distribution around week 27
  const centerWeek = 27;
  const stdDev = 2; // Most weeks will be 25-29
  
  let week = normalRandom(centerWeek, stdDev);
  
  // Clamp to reasonable summer weeks (20-35)
  week = Math.max(20, Math.min(35, week));
  
  return [week];
}

function getTravelDuration() {
  // 80% should be 1 week, 20% should be 2 weeks
  return Math.random() < 0.8 ? 1 : 2;
}

async function insertDestinationData() {
  const destinationData = [];
  
  console.log('Generating 200 entries for specified destinations...');
  
  for (let i = 0; i < 200; i++) {
    const travelWeeks = getTravelWeeks();
    const duration = getTravelDuration();
    
    destinationData.push({
      location: getRandomDestination(),
      age: getRandomAge(),
      gender: getRandomGender(),
      home_location: getRandomCity(),
      is_interested: false, // These are actual trips, not interests
      duration_weeks: duration,
      travel_weeks: travelWeeks
    });
  }

  try {
    console.log('Inserting data into Supabase...');
    const { error } = await supabase
      .from('destinations')
      .insert(destinationData);

    if (error) {
      throw error;
    }

    console.log('Successfully inserted 200 entries for specified destinations');
    
    // Show some statistics
    const destinationCounts = {};
    DESTINATIONS.forEach(dest => {
      destinationCounts[dest] = destinationData.filter(entry => entry.location === dest).length;
    });
    
    const stockholmCount = destinationData.filter(entry => entry.home_location === 'Stockholm').length;
    const maleCount = destinationData.filter(entry => entry.gender === 'Male').length;
    const femaleCount = destinationData.filter(entry => entry.gender === 'Female').length;
    const age18Count = destinationData.filter(entry => entry.age === 18).length;
    const oneWeekCount = destinationData.filter(entry => entry.duration_weeks === 1).length;
    const avgWeek = destinationData.reduce((sum, entry) => sum + entry.travel_weeks[0], 0) / destinationData.length;
    
    console.log('\nDestination distribution:');
    Object.entries(destinationCounts).forEach(([dest, count]) => {
      console.log(`${dest}: ${count} entries`);
    });
    
    console.log('\nStatistics:');
    console.log(`Stockholm residents: ${stockholmCount}/200 (${(stockholmCount/200*100).toFixed(1)}%)`);
    console.log(`Male: ${maleCount}/200 (${(maleCount/200*100).toFixed(1)}%)`);
    console.log(`Female: ${femaleCount}/200 (${(femaleCount/200*100).toFixed(1)}%)`);
    console.log(`18 years old: ${age18Count}/200 (${(age18Count/200*100).toFixed(1)}%)`);
    console.log(`1 week duration: ${oneWeekCount}/200 (${(oneWeekCount/200*100).toFixed(1)}%)`);
    console.log(`Average travel week: ${avgWeek.toFixed(1)}`);
    
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

insertDestinationData();