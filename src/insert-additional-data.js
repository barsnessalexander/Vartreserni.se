import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://jlaitdylxvnwerxskuoc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsYWl0ZHlseHZud2VyeHNrdW9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4OTcyODIsImV4cCI6MjA1MzQ3MzI4Mn0.hnIwt0Aa8oC0HjAl8zs4LYR99C7X7Tu1fa9SZ5KELyM'
);

const DESTINATIONS = ['Aiya Napa', 'Rhodos', 'Kos', 'Zakynthos'];

const CITIES = [
  'Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping',
  'Helsingborg', 'Jönköping', 'Norrköping'
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomAge() {
  // 60% chance for 18 years
  if (Math.random() < 0.6) {
    return 18;
  }
  // Rest distributed between 16-25
  return Math.floor(Math.random() * 10) + 16;
}

function getRandomGender() {
  // 40-60% distribution
  return Math.random() < 0.55 ? 'Male' : 'Female';
}

function getRandomCity() {
  // 60% chance for Stockholm
  if (Math.random() < 0.6) {
    return 'Stockholm';
  }
  return getRandomItem(CITIES);
}

async function insertAdditionalData() {
  const additionalData = [];
  
  // Generate 50 entries distributed among the specified destinations
  for (let i = 0; i < 50; i++) {
    additionalData.push({
      location: getRandomItem(DESTINATIONS),
      age: getRandomAge(),
      gender: getRandomGender(),
      home_location: getRandomCity(),
      is_interested: false
    });
  }

  try {
    const { error } = await supabase
      .from('destinations')
      .insert(additionalData);

    if (error) {
      throw error;
    }

    console.log('Successfully inserted 50 additional entries for specified destinations');
  } catch (error) {
    console.error('Error inserting additional data:', error);
  }
}

insertAdditionalData();