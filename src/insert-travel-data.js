import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Helper functions
function getRandomAge(min = 18, max = 23) {
  // 60% chance for 18-20
  if (Math.random() < 0.6) {
    return Math.floor(Math.random() * 3) + 18;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomGender() {
  // 60% chance for Female
  return Math.random() < 0.6 ? 'Female' : 'Male';
}

function getRandomCity() {
  // 60% chance for Stockholm
  if (Math.random() < 0.6) {
    return 'Stockholm';
  }
  const cities = [
    'Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping',
    'Helsingborg', 'Jönköping', 'Norrköping', 'Umeå'
  ];
  return cities[Math.floor(Math.random() * cities.length)];
}

// Normal distribution helper
function normalRandom(mean, stdDev) {
  let u = 0, v = 0;
  while(u === 0) u = Math.random();
  while(v === 0) v = Math.random();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return Math.round(num * stdDev + mean);
}

async function insertVacationData() {
  const destinations = {
    'Magaluf': 135,
    'Kos': 120,
    'Rhodos': 104,
    'Nice': 90
  };

  for (const [destination, count] of Object.entries(destinations)) {
    const data = Array(count).fill(null).map(() => ({
      location: destination,
      age: getRandomAge(16, 25),
      gender: getRandomGender(),
      home_location: getRandomCity(),
      is_interested: false
    }));

    const { error } = await supabase.from('destinations').insert(data);
    if (error) {
      console.error(`Error inserting data for ${destination}:`, error);
    } else {
      console.log(`Successfully inserted ${count} entries for ${destination}`);
    }
  }
}

async function insertBackpackingData() {
  const europeanCities = [
    'Hamburg', 'Köln', 'Frankfurt', 'Paris', 'Lyon', 'Marseille', 'Bordeaux',
    'Bryssel', 'Brugge', 'Gent', 'Zürich', 'Genève', 'Interlaken', 'Wien',
    'Salzburg', 'Innsbruck', 'Hallstatt', 'Stockholm', 'Göteborg', 'Malmö',
    'Århus', 'Oslo', 'Bergen', 'Stavanger', 'Lofoten', 'Tallinn', 'Riga',
    'Vilnius', 'Reykjavik', 'Madrid', 'Sevilla', 'Bilbao', 'Lissabon', 'Porto',
    'Faro', 'Azorerna', 'Madeira', 'Rom', 'Venedig', 'Florens', 'Neapel',
    'Bologna', 'Palermo', 'Cinque Terre', 'Dubrovnik', 'Hvar', 'Plitvicesjöarna',
    'Kotor', 'Podgorica', 'Ljubljana', 'Aten', 'Thessaloniki', 'Meteora',
    'Valletta', 'Prag', 'Cesky Krumlov', 'Kraków', 'Warszawa', 'Wrocław',
    'Gdańsk', 'Budapest', 'Debrecen', 'Bratislava', 'Bukarest', 'Cluj-Napoca',
    'Brașov', 'Transsylvanien (Sighișoara)', 'Belgrad', 'Novi Sad', 'Sarajevo',
    'Mostar', 'Skopje', 'Ohrid', 'Sofia', 'Plovdiv', 'Tirana', 'Prizren',
    'Tbilisi', 'Batumi', 'Jerevan', 'Baku', 'Lauterbrunnen', 'Isle of Skye',
    'Inverness', 'Killarney', 'Galway', 'Cotswolds'
  ];

  const asianCities = [
    'Bangkok', 'Chiang Mai', 'Pai', 'Koh Tao', 'Koh Phangan', 'Koh Lanta',
    'Ao Nang', 'Koh Rong', 'Siem Reap (Angkor Wat)', 'Phnom Penh', 'Kampot',
    'Ho Chi Minh-staden', 'Da Lat', 'Mui Ne', 'Hoi An', 'Hue', 'Hanoi',
    'Cat Ba (Halong Bay)', 'Sapa', 'Luang Prabang', 'Vang Vieng', 'Vientiane',
    'Kuala Lumpur', 'Penang (George Town)', 'Perhentianöarna', 'Cameron Highlands',
    'Borneo (Kota Kinabalu)', 'Ubud', 'Lombok', 'Komodoöarna', 'Yogyakarta',
    'Jakarta', 'Medan (Sumatra)', 'Manila', 'Palawan (El Nido & Coron)', 'Cebu',
    'Siargao', 'Bohol', 'Goa', 'Rishikesh', 'Varanasi', 'Jaipur', 'Pushkar',
    'Manali', 'Leh-Ladakh', 'Kerala (Varkala & Alleppey)', 'Mumbai', 'Kolkata',
    'Kathmandu', 'Pokhara', 'Everest Base Camp', 'Chitwan National Park',
    'Thimphu', 'Colombo', 'Galle', 'Mirissa', 'Ella', 'Sigiriya', 'Hikkaduwa',
    'Tokyo', 'Kyoto'
  ];

  // Generate trips
  const trips = [];
  const numberOfTrips = 200; // Total number of trips to generate

  for (let i = 0; i < numberOfTrips; i++) {
    // Randomly choose between European and Asian cities
    const cityList = Math.random() < 0.5 ? europeanCities : asianCities;
    
    // Generate random number of destinations (between 3 and 6)
    const numDestinations = Math.floor(Math.random() * 4) + 3;
    
    // Randomly select destinations
    const destinations = [];
    const availableCities = [...cityList];
    for (let j = 0; j < numDestinations; j++) {
      if (availableCities.length === 0) break;
      const index = Math.floor(Math.random() * availableCities.length);
      destinations.push(availableCities.splice(index, 1)[0]);
    }

    trips.push({
      age: getRandomAge(18, 23),
      gender: getRandomGender(),
      home_location: getRandomCity(),
      destinations: destinations,
      is_interested: false
    });
  }

  // Insert the trips
  const { error } = await supabase.from('backpacking_trips').insert(trips);
  if (error) {
    console.error('Error inserting backpacking trips:', error);
  } else {
    console.log(`Successfully inserted ${trips.length} backpacking trips`);
  }
}

async function insertAllData() {
  try {
    console.log('Starting data insertion...');
    await insertVacationData();
    await insertBackpackingData();
    console.log('All data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

insertAllData();