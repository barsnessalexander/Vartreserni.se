import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Destination lists
const MAIN_PARTY_DESTINATIONS = ['Zakynthos', 'Magaluf', 'Rhodos', 'Ayia Napa', 'Palma de Mallorca', 'Kos'];
const OTHER_PARTY_DESTINATIONS = [
  'Ibiza', 'Barcelona', 'Split', 'Sunny Beach', 'Kavos', 
  'Marbella', 'Alicante', 'Malaga', 'Nice', 'Malta'
];

const BACKPACKING_DESTINATIONS = [
  'Phuket', 'Koh Samui', 'Bali', 'Langkawi', 'Koh Lanta', 
  'Luang Prabang', 'Hanoi', 'Kuala Lumpur', 'Manila'
];

const MAIN_SKI_DESTINATIONS = ['Åre', 'Val d\'Isère', 'Val Thorens', 'St. Anton'];
const OTHER_SKI_DESTINATIONS = ['Verbier', 'Chamonix', 'Ischgl'];

const CITIES = [
  'Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping',
  'Helsingborg', 'Jönköping', 'Norrköping', 'Umeå', 'Lund', 'Borås', 'Sundsvall'
];

// Helper functions
function normalRandom(mean, stdDev) {
  let u = 0, v = 0;
  while(u === 0) u = Math.random();
  while(v === 0) v = Math.random();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return Math.round(num * stdDev + mean);
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomGender() {
  return Math.random() < 0.5 ? 'Male' : 'Female';
}

function getRandomCity(stockholmPercentage = 0.8) {
  if (Math.random() < stockholmPercentage) {
    return 'Stockholm';
  }
  const otherCities = CITIES.filter(city => city !== 'Stockholm');
  return otherCities[Math.floor(Math.random() * otherCities.length)];
}

// Solsemester functions
function getPartyAge() {
  if (Math.random() < 0.8) {
    return 18;
  }
  const ages = [16, 17, 19, 20, 21, 22, 23, 24, 25];
  return ages[Math.floor(Math.random() * ages.length)];
}

function getPartyWeeks() {
  const centerWeek = 27;
  const stdDev = 2;
  
  let week = normalRandom(centerWeek, stdDev);
  week = Math.max(20, Math.min(35, week));
  
  return [week];
}

function getPartyDuration() {
  return Math.random() < 0.8 ? 1 : 2;
}

// Backpacking functions
function getBackpackingAge() {
  if (Math.random() < 0.4) return 19;
  if (Math.random() < 0.8) return 20;
  const ages = [18, 21, 22, 23, 24, 25];
  return ages[Math.floor(Math.random() * ages.length)];
}

function getBackpackingWeeks() {
  // Winter weeks: January (weeks 1-4) and February (weeks 5-8)
  const winterWeeks = [1, 2, 3, 4, 5, 6, 7, 8];
  const numWeeks = getRandomBetween(3, 8);
  
  // Select consecutive weeks starting from a random winter week
  const startWeek = winterWeeks[Math.floor(Math.random() * (winterWeeks.length - numWeeks + 1))];
  const weeks = [];
  for (let i = 0; i < numWeeks; i++) {
    weeks.push(startWeek + i);
  }
  
  return weeks;
}

function getBackpackingDestinations() {
  const numDestinations = getRandomBetween(3, 6);
  const shuffled = [...BACKPACKING_DESTINATIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numDestinations);
}

// Ski functions
function getSkiAge() {
  const rand = Math.random();
  if (rand < 0.7) return 18;
  if (rand < 0.75) return 17;
  const ages = [19, 20, 21, 22, 23, 24, 25];
  return ages[Math.floor(Math.random() * ages.length)];
}

function getSkiWeeks() {
  const centerWeek = 9; // March
  const stdDev = 2;
  
  let week = normalRandom(centerWeek, stdDev);
  // Ski season weeks: 49-52 (Dec 2025) and 1-17 (Jan-Apr 2026)
  if (week < 1) week = Math.max(49, week + 52);
  if (week > 17 && week < 49) {
    week = week <= 33 ? Math.min(17, week) : Math.max(49, week);
  }
  
  return [week];
}

function getSkiDuration() {
  return Math.random() < 0.8 ? 1 : 2;
}

async function insertSolsemesterData() {
  console.log('Inserting solsemester data...');
  const data = [];
  
  // Main destinations (75-100 each)
  for (const destination of MAIN_PARTY_DESTINATIONS) {
    const count = getRandomBetween(75, 100);
    console.log(`Adding ${count} entries for ${destination}`);
    
    for (let i = 0; i < count; i++) {
      data.push({
        location: destination,
        age: getPartyAge(),
        gender: getRandomGender(),
        home_location: getRandomCity(0.8),
        is_interested: false,
        duration_weeks: getPartyDuration(),
        travel_weeks: getPartyWeeks()
      });
    }
  }
  
  // Other destinations (15-25 each)
  for (const destination of OTHER_PARTY_DESTINATIONS) {
    const count = getRandomBetween(15, 25);
    console.log(`Adding ${count} entries for ${destination}`);
    
    for (let i = 0; i < count; i++) {
      data.push({
        location: destination,
        age: getPartyAge(),
        gender: getRandomGender(),
        home_location: getRandomCity(0.8),
        is_interested: false,
        duration_weeks: getPartyDuration(),
        travel_weeks: getPartyWeeks()
      });
    }
  }
  
  const { error } = await supabase.from('destinations').insert(data);
  if (error) throw error;
  
  console.log(`Successfully inserted ${data.length} solsemester entries`);
}

async function insertBackpackingData() {
  console.log('Inserting backpacking data...');
  const data = [];
  
  // Generate trips for each destination (15-30 each)
  const destinationCounts = {};
  BACKPACKING_DESTINATIONS.forEach(dest => {
    destinationCounts[dest] = getRandomBetween(15, 30);
  });
  
  // Calculate total trips needed
  const totalTrips = Object.values(destinationCounts).reduce((sum, count) => sum + count, 0);
  
  for (let i = 0; i < totalTrips; i++) {
    const destinations = getBackpackingDestinations();
    const weeks = getBackpackingWeeks();
    
    data.push({
      age: getBackpackingAge(),
      gender: getRandomGender(),
      home_location: getRandomCity(0.7),
      destinations: destinations,
      is_interested: false,
      duration_weeks: weeks.length,
      travel_weeks: weeks
    });
  }
  
  const { error } = await supabase.from('backpacking_trips').insert(data);
  if (error) throw error;
  
  console.log(`Successfully inserted ${data.length} backpacking entries`);
}

async function insertSkiData() {
  console.log('Inserting ski data...');
  const data = [];
  
  // Main ski destinations (75-125 each)
  for (const destination of MAIN_SKI_DESTINATIONS) {
    const count = getRandomBetween(75, 125);
    console.log(`Adding ${count} entries for ${destination}`);
    
    for (let i = 0; i < count; i++) {
      data.push({
        destination: destination,
        age: getSkiAge(),
        gender: getRandomGender(),
        home_location: getRandomCity(0.7),
        is_interested: false,
        duration_weeks: getSkiDuration(),
        travel_weeks: getSkiWeeks()
      });
    }
  }
  
  // Other ski destinations (30-50 each)
  for (const destination of OTHER_SKI_DESTINATIONS) {
    const count = getRandomBetween(30, 50);
    console.log(`Adding ${count} entries for ${destination}`);
    
    for (let i = 0; i < count; i++) {
      data.push({
        destination: destination,
        age: getSkiAge(),
        gender: getRandomGender(),
        home_location: getRandomCity(0.7),
        is_interested: false,
        duration_weeks: getSkiDuration(),
        travel_weeks: getSkiWeeks()
      });
    }
  }
  
  const { error } = await supabase.from('ski_trips').insert(data);
  if (error) throw error;
  
  console.log(`Successfully inserted ${data.length} ski entries`);
}

async function insertAllData() {
  try {
    console.log('Starting comprehensive data insertion...');
    
    await insertSolsemesterData();
    await insertBackpackingData();
    await insertSkiData();
    
    console.log('\n✅ All data inserted successfully!');
    
    // Show summary statistics
    console.log('\n📊 Summary:');
    console.log('- Solsemester: ~700-950 entries across 16 destinations');
    console.log('- Backpacking: ~135-270 entries across 9 destinations');
    console.log('- Ski: ~390-675 entries across 7 destinations');
    
  } catch (error) {
    console.error('❌ Error inserting data:', error);
  }
}

insertAllData();