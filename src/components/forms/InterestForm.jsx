import { useState, useEffect } from 'react';
import SearchableCombobox from '../SearchableCombobox';
import { DESTINATIONS } from '../../constants';
import { SKI_DESTINATIONS } from '../../constants/skiDestinations';

function InterestForm({ formData, onSubmit, onChange, isSubmitting, onSkip }) {
  const [formType, setFormType] = useState(null);
  const [destinationCount, setDestinationCount] = useState(1);

  useEffect(() => {
    // Disable scrolling on the body when component mounts
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleFormTypeSelect = (type) => {
    setFormType(type);
    onChange({ 
      ...formData, 
      formType: type,
      destinations: type === 'backpacking' ? [''] : [],
      destination: type === 'vacation' || type === 'skiing' ? '' : '',
      isInterested: true // Mark as interested since this is the interest form
    });
  };

  const handleDestinationChange = (value, index) => {
    if (formType === 'backpacking') {
      const newDestinations = [...(formData.destinations || [])];
      newDestinations[index] = value;
      onChange({ ...formData, destinations: newDestinations });
    } else {
      onChange({ ...formData, destination: value });
    }
  };

  const handleDestinationCountChange = (e) => {
    const count = parseInt(e.target.value) || 1;
    setDestinationCount(count);
    
    const newDestinations = [...(formData.destinations || [])];
    if (count > newDestinations.length) {
      while (newDestinations.length < count) {
        newDestinations.push('');
      }
    } else {
      newDestinations.length = count;
    }
    onChange({ ...formData, destinations: newDestinations });
  };

  const isFormValid = () => {
    if (formType === 'backpacking') {
      return (
        formData.destinations && 
        formData.destinations.length > 0 && 
        formData.destinations.every(dest => dest && dest.trim() !== '')
      );
    } else if (formType === 'vacation' || formType === 'skiing') {
      return !!formData.destination;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // Create submission data with defaults for interest form
      const submissionData = {
        ...formData,
        age: 18,
        gender: 'Male', 
        homeLocation: 'Stockholm',
        isInterested: true,
        travelWeeks: [25] // Default to week 25 (summer)
      };
      
      // Update the form data state
      onChange(submissionData);
      
      // Create a synthetic event with the submission data
      const syntheticEvent = {
        ...e,
        preventDefault: () => {},
        submissionData
      };
      
      // Call onSubmit immediately with the prepared data
      onSubmit(syntheticEvent);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 overflow-y-auto">
      {!formType ? (
        <div className="min-h-screen py-8 px-4 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-6">
              Vilken typ av semester är du intresserad av?
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => handleFormTypeSelect('vacation')}
                className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 px-8 py-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]"
              >
                <div className="absolute inset-0 transition-all duration-300 group-hover:bg-black/[0.05]"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span className="font-semibold text-white">Solsemester/Festresa</span>
                  <svg className="h-5 w-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              
              <button
                onClick={() => handleFormTypeSelect('backpacking')}
                className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-green-600 px-8 py-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]"
              >
                <div className="absolute inset-0 transition-all duration-300 group-hover:bg-black/[0.05]"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span className="font-semibold text-white">Backpacking</span>
                  <svg className="h-5 w-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              
              <button
                onClick={() => handleFormTypeSelect('skiing')}
                className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 px-8 py-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]"
              >
                <div className="absolute inset-0 transition-all duration-300 group-hover:bg-black/[0.05]"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span className="font-semibold text-white">Skidsemester</span>
                  <svg className="h-5 w-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen py-8 px-4 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-4">
              {formType === 'vacation' 
                ? 'Vart är du intresserad av att åka?' 
                : formType === 'skiing'
                  ? 'Vilken skidort är du intresserad av?'
                  : 'Vilka destinationer är du intresserad av att besöka?'}
            </h2>
            <p className="text-gray-600 text-center mb-6">
              {formType === 'vacation'
                ? 'Välj den destination som intresserar dig mest!'
                : formType === 'skiing'
                  ? 'Välj den skidort som intresserar dig mest!'
                  : 'Välj de destinationer du skulle vilja besöka på din backpacking-resa!'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formType === 'backpacking' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hur många destinationer är du intresserad av? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={destinationCount}
                      onChange={handleDestinationCountChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      min="1"
                      max="10"
                      required
                    />
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
                          value={(formData.destinations && formData.destinations[index]) || ''}
                          onChange={(value) => handleDestinationChange(value, index)}
                          placeholder={`Destination ${index + 1}...`}
                        />
                        {(!formData.destinations || !formData.destinations[index]) && (
                          <p className="text-sm text-red-500 mt-1">Destination krävs</p>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : formType === 'skiing' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Välj skidort <span className="text-red-500">*</span>
                  </label>
                  <SearchableCombobox
                    items={SKI_DESTINATIONS}
                    value={formData.destination || ''}
                    onChange={(value) => handleDestinationChange(value)}
                    placeholder="Sök skidort..."
                  />
                  {!formData.destination && (
                    <p className="text-sm text-red-500 mt-1">Skidort krävs</p>
                  )}
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Välj destination <span className="text-red-500">*</span>
                  </label>
                  <SearchableCombobox
                    items={DESTINATIONS}
                    value={formData.destination || ''}
                    onChange={(value) => handleDestinationChange(value)}
                    placeholder="Sök destination..."
                  />
                  {!formData.destination && (
                    <p className="text-sm text-red-500 mt-1">Destination krävs</p>
                  )}
                </div>
              )}

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
                <p className="text-gray-600 mb-2">Vill du se statistiken direkt?</p>
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
      )}
    </div>
  );
}

export default InterestForm;