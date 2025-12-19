import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

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

function getRandomAge() {
  // Ages 18-25, with slight preference for 18-20
  const ages = [18, 19, 20, 21, 22, 23, 24, 25];
  const weights = [0.2, 0.2, 0.15, 0.15, 0.1, 0.1, 0.05, 0.05];
  
  const random = Math.random();
  let cumulative = 0;
  
  for (let i = 0; i < ages.length; i++) {
    cumulative += weights[i];
    if (random <= cumulative) {
      return ages[i];
    }
  }
  return 18; // fallback
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
  // Normal distribution around week 28 (mid-July)
  const centerWeek = 28;
  const stdDev = 2; // Most weeks will be 26-30
  
  let week = normalRandom(centerWeek, stdDev);
  
  // Clamp to reasonable summer weeks (24-32)
  week = Math.max(24, Math.min(32, week));
  
  return [week];
}

function getTravelDuration() {
  // 80% should be 1 week, 20% should be 2 weeks
  return Math.random() < 0.8 ? 1 : 2;
}

async function insertPalmaData() {
  const palmaData = [];
  
  console.log('Generating 200 entries for Palma de Mallorca...');
  
  for (let i = 0; i < 200; i++) {
    const travelWeeks = getTravelWeeks();
    const duration = getTravelDuration();
    
    palmaData.push({
      location: 'Palma de Mallorca',
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
      .insert(palmaData);

    if (error) {
      throw error;
    }

    console.log('Successfully inserted 200 entries for Palma de Mallorca');
    
    // Show some statistics
    const stockholmCount = palmaData.filter(entry => entry.home_location === 'Stockholm').length;
    const maleCount = palmaData.filter(entry => entry.gender === 'Male').length;
    const femaleCount = palmaData.filter(entry => entry.gender === 'Female').length;
    const oneWeekCount = palmaData.filter(entry => entry.duration_weeks === 1).length;
    const avgWeek = palmaData.reduce((sum, entry) => sum + entry.travel_weeks[0], 0) / palmaData.length;
    
    console.log('\nStatistics:');
    console.log(`Stockholm residents: ${stockholmCount}/200 (${(stockholmCount/200*100).toFixed(1)}%)`);
    console.log(`Male: ${maleCount}/200 (${(maleCount/200*100).toFixed(1)}%)`);
    console.log(`Female: ${femaleCount}/200 (${(femaleCount/200*100).toFixed(1)}%)`);
    console.log(`1 week duration: ${oneWeekCount}/200 (${(oneWeekCount/200*100).toFixed(1)}%)`);
    console.log(`Average travel week: ${avgWeek.toFixed(1)}`);
    
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

insertPalmaData();