import { Link, useNavigate } from 'react-router-dom';
import GenderDistribution from './charts/GenderDistribution';
import AgeDistribution from './charts/AgeDistribution';

function DestinationCard({
  location,
  data,
  stats,
  getRandomImage,
  isBackpacking,
  isSkiing,
}) {
  const navigate = useNavigate();
  
  if (!stats || !stats.topHomeLocations) return null;

  // 2025 rankings for solsemester/festresa destinations
  const rankings2025 = {
    'Zakynthos': 1,
    'Magaluf': 2,
    'Rhodos': 3,
    'Ayia Napa': 4,
    'Kos': 5
  };

  const getRankingText = (rank) => {
    const ordinals = {
      1: '#1',
      2: '#2', 
      3: '#3',
      4: '#4',
      5: '#5'
    };
    return ordinals[rank] || `#${rank}`;
  };

  const shouldShowBanner = !isBackpacking && !isSkiing && rankings2025[location];

  const handleClick = () => {
    navigate(`/destination/${encodeURIComponent(location)}`, {
      state: { isBackpacking, isSkiing }
    });
  };

  return (
    <div 
      onClick={handleClick}
      className="group bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] animate-fade-in"
    >
      <div
        className="h-48 sm:h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 relative"
        style={{
          backgroundImage: `url(${getRandomImage(location)})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        {/* 2025 Ranking Banner */}
        {shouldShowBanner && (
          <div className="absolute top-0 left-0 z-10">
            <div className="relative">
              {/* Banner triangle */}
              <div className="w-0 h-0 border-l-[100px] border-l-red-600 border-b-[100px] border-b-transparent"></div>
              {/* Banner text */}
              <div className="absolute top-4 left-4 text-white text-sm font-bold leading-tight">
                <div className="transform -rotate-45 origin-top-left">
                  <div className="text-xs sm:text-sm">
                    {getRankingText(rankings2025[location])}
                  </div>
                  <div className="text-[10px] sm:text-xs opacity-90 -ml-9">
                    Reseort 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {location}
          </h3>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className={`rounded-lg p-3 sm:p-4 transition-colors duration-200 ${
            isSkiing 
              ? 'bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200'
              : 'bg-gradient-to-br from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200'
          }`}>
            <p className={`text-xs sm:text-sm font-medium mb-1 ${
              isSkiing ? 'text-cyan-600' : 'text-primary-600'
            }`}>
              {isSkiing ? 'Skidåkare' : isBackpacking ? 'Backpackers' : 'Reser hit'}
            </p>
            <p className={`text-xl sm:text-2xl font-bold ${
              isSkiing ? 'text-cyan-700' : 'text-primary-700'
            }`}>
              {stats.travelingCount}
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg p-3 sm:p-4 transition-colors duration-200 hover:from-secondary-100 hover:to-secondary-200">
            <p className="text-xs sm:text-sm text-secondary-600 font-medium mb-1">
              Intresserade
            </p>
            <p className="text-xl sm:text-2xl font-bold text-secondary-700">
              {stats.interestedCount}
            </p>
          </div>
        </div>


     
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-gray-900 text-sm sm:text-base">
              Könsfördelning
            </h4>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4 rounded-lg">
              <GenderDistribution data={stats.genderData} />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-gray-900 text-sm sm:text-base">
              Åldersfördelning
            </h4>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4 rounded-lg">
              <AgeDistribution data={stats.ageData} />
            </div>
          </div>
        </div>

        <button 
          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2.5 sm:py-3 px-4 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center justify-center group/button text-sm sm:text-base"
          onClick={(e) => e.preventDefault()} 
        >
          <span>Läs mer</span>
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover/button:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;