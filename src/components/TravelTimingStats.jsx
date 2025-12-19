import React from 'react';

function TravelTimingStats({ travelers, isBackpacking = false, isSkiing = false }) {
  if (!travelers || travelers.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">
        Ingen data tillgänglig för resetider
      </div>
    );
  }

  // Filter travelers with timing data
  const travelersWithTiming = travelers.filter(t => 
    t.travel_weeks && t.travel_weeks.length > 0
  );

  if (travelersWithTiming.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">
        Ingen data tillgänglig för resetider
      </div>
    );
  }

  // Calculate week popularity
  const weekCounts = {};
  const durationCounts = {};

  travelersWithTiming.forEach(traveler => {
    // Count weeks with weighted votes
    if (traveler.travel_weeks) {
      const weight = 1 / traveler.travel_weeks.length; // Each user's vote is split evenly
      traveler.travel_weeks.forEach(week => {
        weekCounts[week] = (weekCounts[week] || 0) + weight;
      });
    }

    // Count duration
    if (traveler.duration_weeks) {
      durationCounts[traveler.duration_weeks] = (durationCounts[traveler.duration_weeks] || 0) + 1;
    }
  });

  // Get only weeks that have data, sorted by popularity
  const popularWeeks = Object.entries(weekCounts)
    .sort(([,a], [,b]) => b - a)
    .map(([week, count]) => ({
      week: parseInt(week),
      count,
      percentage: Math.round((count / travelersWithTiming.length) * 100)
    }));

  // Get duration distribution
  const durationDistribution = Object.entries(durationCounts)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([duration, count]) => ({
      duration: parseInt(duration),
      count,
      percentage: Math.round((count / travelersWithTiming.length) * 100)
    }));

  const getWeekDateRange = (weekNumber) => {
    // For weeks 1-39: use 2026, for weeks 40-52: use 2025
    const year = weekNumber <= 39 ? 2026 : 2025;
    const firstDayOfYear = new Date(year, 0, 1);
    const daysToAdd = (weekNumber - 1) * 7;
    const startDate = new Date(firstDayOfYear.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    
    // Adjust to Monday
    const dayOfWeek = startDate.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    startDate.setDate(startDate.getDate() + mondayOffset);
    
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    
    return {
      start: startDate.toLocaleDateString('sv-SE', { month: 'short', day: 'numeric' }),
      end: endDate.toLocaleDateString('sv-SE', { month: 'short', day: 'numeric' }),
      month: startDate.toLocaleDateString('sv-SE', { month: 'long' })
    };
  };

  // Get max count for color intensity calculation
  const maxCount = Math.max(...Object.values(weekCounts));

  // Generate calendar data only for weeks with data
  const calendarWeeks = popularWeeks.map(({ week, count, percentage }) => {
    const intensity = Math.min(count / maxCount, 1);
    
    return {
      week,
      count,
      percentage,
      intensity,
      dateRange: getWeekDateRange(week)
    };
  });

  // Group weeks by month for better organization
  const weeksByMonth = calendarWeeks.reduce((acc, week) => {
    const month = week.dateRange.month;
    if (!acc[month]) acc[month] = [];
    acc[month].push(week);
    return acc;
  }, {});

  // Define month order for chronological sorting
  const monthOrder = [
    'januari', 'februari', 'mars', 'april', 'maj', 'juni',
    'juli', 'augusti', 'september', 'oktober', 'november', 'december'
  ];

  // Sort months chronologically and weeks within each month
  const sortedMonthEntries = Object.entries(weeksByMonth)
    .sort(([monthA], [monthB]) => {
      const indexA = monthOrder.indexOf(monthA.toLowerCase());
      const indexB = monthOrder.indexOf(monthB.toLowerCase());
      return indexA - indexB;
    })
    .map(([month, weeks]) => [
      month,
      weeks.sort((a, b) => a.week - b.week) // Sort weeks within month chronologically
    ]);

  const getWeekColor = (intensity) => {
    if (intensity >= 0.6) return 'bg-red-500 text-white'; // Hottest
    if (intensity >= 0.3) return 'bg-orange-500 text-white'; // Medium
    return 'bg-blue-300 text-white'; // Coolest
  };

  const getIntensityLabel = (intensity) => {
    if (intensity >= 0.6) return 'Mycket populärt';
    if (intensity >= 0.3) return 'Populärt';
    return 'Mindre populärt';
  };

  return (
    <div className="space-y-8">
      {/* Calendar View */}
      <div>
        <h4 className="font-semibold mb-6 text-gray-900 text-xl">
          Populäraste veckorna - Kalendervy
        </h4>
        
        {/* Legend */}
        <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
          <h5 className="font-medium text-gray-800 mb-3">Färgkodning:</h5>
          <div className="flex flex-wrap gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span>Mycket populärt</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span>Populärt</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-300 rounded"></div>
              <span>Mindre populärt</span>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="space-y-6">
          {sortedMonthEntries.map(([month, weeks]) => (
            <div key={month} className="bg-white rounded-xl p-6 shadow-soft">
              <h5 className="font-semibold text-lg text-gray-800 mb-4 capitalize">
                {month}
              </h5>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                {weeks.map(week => (
                  <div
                    key={week.week}
                    className={`
                      relative p-3 rounded-lg text-center transition-all duration-200 hover:scale-105 cursor-pointer
                      ${getWeekColor(week.intensity)}
                    `}
                    title={`Vecka ${week.week}: ${week.dateRange.start} - ${week.dateRange.end} (${week.count} ${isBackpacking ? 'backpackers' : 'resenärer'}) - ${getIntensityLabel(week.intensity)}`}
                  >
                    <div className="font-bold text-sm">V{week.week}</div>
                    <div className="text-xs opacity-90">
                      {week.dateRange.start}
                    </div>
                    <div className="text-xs font-medium mt-1">
                      {week.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Duration Distribution */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-900 text-xl">
          Reslängd
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {durationDistribution.map(item => (
            <div
              key={item.duration}
              className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center hover:from-green-100 hover:to-green-200 transition-colors duration-200 border border-green-200"
            >
              <div className="text-2xl font-bold text-green-700 mb-1">
                {item.duration}
              </div>
              <div className="text-sm text-green-600 mb-2">
                {item.duration === 1 ? 'vecka' : 'veckor'}
              </div>
              <div className="text-lg font-medium text-gray-700 mb-1">
                {item.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelTimingStats;