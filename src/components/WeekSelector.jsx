import { useState } from 'react';

function WeekSelector({ selectedWeeks = [], onChange, maxWeeks = 8 }) {
  const [showAll, setShowAll] = useState(false);

  // Generate all weeks (1-52)
  const allWeeks = Array.from({ length: 52 }, (_, i) => i + 1);
  
  // Summer weeks 2026 (weeks 20-35, roughly May-August 2026)
  const summerWeeks = Array.from({ length: 16 }, (_, i) => i + 20);
  
  const weeksToShow = showAll ? allWeeks : summerWeeks;

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
    // For weeks 1-39: use 2026, for weeks 40-52: use 2025
    const year = weekNumber <= 39 ? 2026 : 2025;
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
      end: endDate.toLocaleDateString('sv-SE', { month: 'short', day: 'numeric' })
    };
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
          {showAll ? 'Visa endast sommarveckor' : 'Visa alla veckor'}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto border rounded-lg p-3">
        {weeksToShow.map(week => {
          const isSelected = selectedWeeks.includes(week);
          const isDisabled = !isSelected && selectedWeeks.length >= maxWeeks;
          const dateRange = getWeekDateRange(week);
          
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
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                }
              `}
              title={`Vecka ${week}: ${dateRange.start} - ${dateRange.end}`}
            >
              <div className="font-medium">V{week}</div>
              <div className="text-xs opacity-75">
                {dateRange.start}
              </div>
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
              return (
                <span
                  key={week}
                  className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                >
                  Vecka {week} ({dateRange.start} - {dateRange.end})
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

export default WeekSelector;