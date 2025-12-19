import { useState, useEffect } from 'react';
import SearchableCombobox from '../SearchableCombobox';
import { DESTINATIONS, SWEDISH_CITIES } from '../../constants';
import WeekSelector from '../WeekSelector';

function BackpackingForm({ formData, onSubmit, onChange, isSubmitting, onSkip }) {
  const [destinationCount, setDestinationCount] = useState(1);

  useEffect(() => {
    // Disable scrolling on the body when component mounts
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleDestinationChange = (value, index) => {
    const newDestinations = [...(formData.destinations || [])];
    newDestinations[index] = value;
    onChange({ ...formData, destinations: newDestinations });
  };

  const handleDestinationCountChange = (e) => {
    const count = parseInt(e.target.value) || 1;
    setDestinationCount(count);
    
    // Adjust destinations array size
    const newDestinations = [...(formData.destinations || [])];
    if (count > newDestinations.length) {
      // Add empty slots if increasing
      while (newDestinations.length < count) {
        newDestinations.push('');
      }
    } else {
      // Remove extra slots if decreasing
      newDestinations.length = count;
    }
    onChange({ ...formData, destinations: newDestinations });
  };

  const handleDestinationCountIncrease = () => {
    if (destinationCount < 10) {
      const newCount = destinationCount + 1;
      setDestinationCount(newCount);
      
      const newDestinations = [...(formData.destinations || [])];
      while (newDestinations.length < newCount) {
        newDestinations.push('');
      }
      onChange({ ...formData, destinations: newDestinations });
    }
  };

  const handleDestinationCountDecrease = () => {
    if (destinationCount > 1) {
      const newCount = destinationCount - 1;
      setDestinationCount(newCount);
      
      const newDestinations = [...(formData.destinations || [])];
      newDestinations.length = newCount;
      onChange({ ...formData, destinations: newDestinations });
    }
  };

  const isFormValid = () => {
    return (
      formData.age && 
      formData.gender && 
      formData.homeLocation && 
      formData.destinations && 
      formData.destinations.length > 0 && 
      formData.destinations.every(d => d && d.trim() !== '') &&
      formData.travelWeeks &&
      formData.travelWeeks.length > 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(e);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-4">
            Planera din backpacking-resa
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Berätta om din kommande backpacking-äventyr!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                Din ålder (16-25 år) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="age"
                value={formData.age}
                onChange={(e) => onChange({ ...formData, age: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ange din ålder"
                min="16"
                max="25"
                required
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                Kön <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={(e) => onChange({ ...formData, gender: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Välj kön</option>
                <option value="Male">Man</option>
                <option value="Female">Kvinna</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Var bor du? <span className="text-red-500">*</span>
              </label>
              <SearchableCombobox
                items={SWEDISH_CITIES}
                value={formData.homeLocation}
                onChange={(value) => onChange({ ...formData, homeLocation: value })}
                placeholder="Sök stad..."
              />
              {!formData.homeLocation && (
                <p className="text-sm text-red-500 mt-1">Hemort krävs</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hur många destinationer planerar du att besöka? <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={handleDestinationCountDecrease}
                  disabled={destinationCount <= 1}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 transition-all duration-200 font-bold text-lg"
                >
                  −
                </button>
                
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-800">{destinationCount}</span>
                  <span className="text-xs text-gray-500">
                    {destinationCount === 1 ? 'destination' : 'destinationer'}
                  </span>
                </div>
                
                <button
                  type="button"
                  onClick={handleDestinationCountIncrease}
                  disabled={destinationCount >= 10}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 transition-all duration-200 font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Välj dina destinationer <span className="text-red-500">*</span>
              </label>
              {Array.from({ length: destinationCount }).map((_, index) => (
                <div key={index} className="relative">
                  <span className="absolute left-3 top-2 text-sm font-medium text-gray-500">
                    {index + 1}.
                  </span>
                  <SearchableCombobox
                    items={DESTINATIONS}
                    value={formData.destinations?.[index] || ''}
                    onChange={(value) => handleDestinationChange(value, index)}
                    placeholder={`Destination ${index + 1}...`}
                  />
                  {(!formData.destinations || !formData.destinations[index]) && (
                    <p className="text-sm text-red-500 mt-1">Destination krävs</p>
                  )}
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vilka veckor åker du? <span className="text-red-500">*</span>
              </label>
              <WeekSelector
                selectedWeeks={formData.travelWeeks || []}
                onChange={(weeks) => onChange({ ...formData, travelWeeks: weeks })}
                maxWeeks={8}
              />
              {(!formData.travelWeeks || formData.travelWeeks.length === 0) && (
                <p className="text-sm text-red-500 mt-1">Välj minst en vecka</p>
              )}
            </div>

            <button
              type="submit" 
              disabled={isSubmitting || !isFormValid()}
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 px-8 py-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 transition-all duration-300 group-hover:bg-black/[0.05]"></div>
              <div className="relative flex items-center justify-center gap-2">
                <span className="font-semibold text-white">
                  {isSubmitting ? 'Skickar...' : 'Se statistik'}
                </span>
                {!isSubmitting && (
                  <svg className="h-5 w-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            </button>

            <div className="text-center mt-4 pt-4 border-t">
              <p className="text-gray-600 mb-2">Redan svarat?</p>
              <button
                type="button"
                onClick={onSkip}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Gå vidare till statistiken här
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BackpackingForm;