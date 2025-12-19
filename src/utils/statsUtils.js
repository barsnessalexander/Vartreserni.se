export const getGenderDistribution = (travelers) => {
  const genderCount = {
    Male: 0,
    Female: 0
  };

  travelers.forEach(t => {
    if (t.gender === 'Male' || t.gender === 'Female') {
      genderCount[t.gender] = (genderCount[t.gender] || 0) + 1;
    }
  });

  return {
    labels: ['Kvinnor', 'Män'],
    datasets: [{
      data: [genderCount.Female, genderCount.Male],
      backgroundColor: [
        'rgba(255, 182, 193, 0.8)',
        'rgba(54, 162, 235, 0.8)',
      ],
      borderColor: [
        'rgba(255, 182, 193, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    }]
  };
};

export const getAgeDistribution = (travelers) => {
  const ageGroups = {
    '16-17': 0,
    '18-20': 0,
    '21-25': 0,
  };

  travelers.forEach((t) => {
    if (t.age >= 16 && t.age <= 17) ageGroups['16-17']++;
    else if (t.age >= 18 && t.age <= 20) ageGroups['18-20']++;
    else if (t.age >= 21 && t.age <= 25) ageGroups['21-25']++;
  });

  const total = Object.values(ageGroups).reduce((a, b) => a + b, 0);
  const percentages = Object.entries(ageGroups).map(([key, value]) => ({
    age: key,
    percentage: total > 0 ? Math.round((value / total) * 100) : 0
  }));

  const colors = {
    '16-17': {
      bg: 'rgba(255, 99, 132, 0.6)',
      border: 'rgba(255, 99, 132, 1)',
      text: 'rgb(255, 99, 132)'
    },
    '18-20': {
      bg: 'rgba(75, 192, 192, 0.6)',
      border: 'rgba(75, 192, 192, 1)',
      text: 'rgb(75, 192, 192)'
    },
    '21-25': {
      bg: 'rgba(54, 162, 235, 0.6)',
      border: 'rgba(54, 162, 235, 1)',
      text: 'rgb(54, 162, 235)'
    }
  };

  return {
    labels: ['Åldersfördelning'],
    datasets: [
      {
        label: '16-17',
        data: [percentages[0].percentage],
        backgroundColor: colors['16-17'].bg,
        borderColor: colors['16-17'].border,
        borderWidth: 1,
      },
      {
        label: '18-20',
        data: [percentages[1].percentage],
        backgroundColor: colors['18-20'].bg,
        borderColor: colors['18-20'].border,
        borderWidth: 1,
      },
      {
        label: '21-25',
        data: [percentages[2].percentage],
        backgroundColor: colors['21-25'].bg,
        borderColor: colors['21-25'].border,
        borderWidth: 1,
      },
    ],
    percentages,
    colors
  };
};

export const getTopHomeLocations = (travelers) => {
  const locationCount = {};
  const total = travelers.length;

  travelers.forEach(traveler => {
    if (traveler.homeLocation || traveler.home_location) {
      const location = traveler.homeLocation || traveler.home_location;
      locationCount[location] = (locationCount[location] || 0) + 1;
    }
  });

  return Object.entries(locationCount)
    .map(([location, count]) => ({
      location,
      percentage: Math.round((count / total) * 100)
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3);
};

export const getMostPopularDestination = (data, filter = () => true) => {
  return Object.entries(data)
    .map(([location, info]) => ({
      location,
      count: info.travelers.filter(filter).length,
    }))
    .filter(item => item.count > 0)  // Only include destinations with travelers
    .sort((a, b) => b.count - a.count)[0];
};

export const getMostPopularBackpackingDestination = (trips, filter = () => true) => {
  const filteredTrips = trips.filter(filter);
  const destinationCounts = {};
  
  filteredTrips.forEach(trip => {
    trip.destinations.forEach(dest => {
      destinationCounts[dest] = (destinationCounts[dest] || 0) + 1;
    });
  });

  return Object.entries(destinationCounts)
    .map(([location, count]) => ({ location, count }))
    .filter(item => item.count > 0)  // Only include destinations with travelers
    .sort((a, b) => b.count - a.count)[0];
};

export const getTopNDestinations = (data, n = 10, filter = () => true) => {
  return Object.entries(data)
    .map(([location, info]) => ({
      location,
      count: info.travelers.filter(filter).length,
      data: info
    }))
    .filter(item => item.count > 0)  // Only include destinations with travelers
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
};