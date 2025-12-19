import { useState, useEffect } from 'react';

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att fortsätta använda webbplatsen godkänner du vår användning av cookies.
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Acceptera
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;