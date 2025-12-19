import { useEffect } from 'react';

function InitialQuestion({ onChoice, onSkip }) {
  useEffect(() => {
    // Disable scrolling on the body when component mounts
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-6">
            Vilken typ av resa planerar du?
          </h2>
          <div className="space-y-4">
            <button
              onClick={() => onChoice('vacation')}
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
              onClick={() => onChoice('backpacking')}
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
              onClick={() => onChoice('skiing')}
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
            <button
              onClick={() => onChoice('undecided')}
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 px-8 py-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]"
            >
              <div className="absolute inset-0 transition-all duration-300 group-hover:bg-black/[0.05]"></div>
              <div className="relative flex items-center justify-center gap-2">
                <span className="font-semibold text-white">Jag har inte bestämt mig än</span>
                <svg className="h-5 w-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </button>
          </div>

          <div className="text-center mt-6 pt-6 border-t">
            <p className="text-gray-600 mb-3">Redan svarat?</p>
            <button
              onClick={onSkip}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <span>Gå vidare till statistiken här</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialQuestion;