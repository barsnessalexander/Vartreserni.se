import { useState, useEffect } from 'react';
import SearchableCombobox from '../SearchableCombobox';
import { SKI_DESTINATIONS } from '../../constants/skiDestinations';
import { SWEDISH_CITIES } from '../../constants';
import SkiWeekSelector from '../SkiWeekSelector';

function SkiForm({ formData, onSubmit, onChange, isSubmitting, onSkip }) {
  useEffect(() => {
    // Disable scrolling on the body when component mounts
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const isFormValid = () => {
    return (
      formData.destination && 
      formData.age && 
      formData.gender && 
      formData.homeLocation &&
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
            Planera din skidsemester
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Berätta om din kommande skidresa!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Välj din skidort <span className="text-red-500">*</span>
              </label>
              <SearchableCombobox
                items={SKI_DESTINATIONS}
                value={formData.destination}
                onChange={(value) => onChange({ ...formData, destination: value })}
                placeholder="Sök skidort..."
              />
              {!formData.destination && (
                <p className="text-sm text-red-500 mt-1">Skidort krävs</p>
              )}
            </div>

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
                Vilka veckor åker du? <span className="text-red-500">*</span>
              </label>
              <SkiWeekSelector
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
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
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

export default SkiForm;