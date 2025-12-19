import { useState } from 'react';

function SkiWeekSelector({ selectedWeeks = [], onChange, maxWeeks = 8 }) {
  const [showAll, setShowAll] = useState(false);

  // Generate ski season weeks (December 2025 - April 2026)
  // Week 49-52 (December 2025) and weeks 1-17 (January-April 2026)
  const skiSeasonWeeks = [
    ...Array.from({ length: 4 }, (_, i) => i + 49), // Weeks 49-52 (December)
    ...Array.from({ length: 17 }, (_, i) => i + 1)   // Weeks 1-17 (Jan-April)
  ];
  
  // All weeks for "show all" option
  const allWeeks = Array.from({ length: 52 }, (_, i) => i + 1);
  
  const weeksToShow = showAll ? allWeeks : skiSeasonWeeks;

  const handleWeekToggle = (week) => {
    const newSelectedWeeks = [...selectedWeeks];
    const weekIndex = newSelectedWeeks.indexOf(week);
    
    if (weekIndex > -1) {
      // Remove week
      newSelectedWeeks.splice(weekIndex, 1);
    } else {
      // Add week if under limit
      if (newSelectedWeeks.length < maxWeeks) {
        newSelectedWeeks.push(week);
        newSelectedWeeks.sort((a, b) => a - b);
      }
    }
    
    onChange(newSelectedWeeks);
  };

  const getWeekDateRange = (weekNumber) => {
    // For weeks 49-52, use 2025. For weeks 1-17, use 2026
    const year = weekNumber >= 49 ? 2025 : 2026;
    const firstDayOfYear = new Date(year, 0, 1);
    const daysToAdd = (weekNumber - 1) * 7;
    const startDate = new Date(firstDayOfYear.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    
    // Adjust to Monday (start of week)
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

  const getWeekLabel = (week) => {
    const dateRange = getWeekDateRange(week);
    const year = week >= 49 ? '25' : '26';
    return `V${week} (${dateRange.start} '${year})`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Välj upp till {maxWeeks} veckor
          {selectedWeeks.length > 0 && ` (${selectedWeeks.length} valda)`}
        </p>
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {showAll ? 'Visa endast skidsäsong' : 'Visa alla veckor'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto border rounded-lg p-3">
        {weeksToShow.map(week => {
          const isSelected = selectedWeeks.includes(week);
          const isDisabled = !isSelected && selectedWeeks.length >= maxWeeks;
          const dateRange = getWeekDateRange(week);
          const isSkiSeason = skiSeasonWeeks.includes(week);
          
          return (
            <button
              key={week}
              type="button"
              onClick={() => handleWeekToggle(week)}
              disabled={isDisabled}
              className={`
                p-2 text-xs rounded-md border transition-all duration-200
                ${isSelected 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : isDisabled
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : isSkiSeason
                      ? 'bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }
              `}
              title={`Vecka ${week}: ${dateRange.start} - ${dateRange.end} ${week >= 49 ? '2025' : '2026'}`}
            >
              <div className="font-medium">{getWeekLabel(week)}</div>
            </button>
          );
        })}
      </div>

      {selectedWeeks.length > 0 && (
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-blue-900 mb-2">Valda veckor:</p>
          <div className="flex flex-wrap gap-2">
            {selectedWeeks.sort((a, b) => a - b).map(week => {
              const dateRange = getWeekDateRange(week);
              const year = week >= 49 ? '2025' : '2026';
              return (
                <span
                  key={week}
                  className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                >
                  Vecka {week} ({dateRange.start} - {dateRange.end} {year})
                  <button
                    type="button"
                    onClick={() => handleWeekToggle(week)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkiWeekSelector;