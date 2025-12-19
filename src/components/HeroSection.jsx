import { Link } from 'react-router-dom';

function HeroSection({ isFullHeight, onScroll, showScrollIndicator = false, isSkiing = false }) {
  const getBackgroundImage = () => {
    if (isSkiing) {
      return "url('https://images.pexels.com/photos/8412637/pexels-photo-8412637.jpeg')";
    }
    return "url('https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg')";
  };

  return (
    <div
      className={`relative bg-cover bg-center md:bg-fixed transition-all duration-700 ${
        isFullHeight ? 'h-screen' : 'h-[50vh] sm:h-[50vh]'
      }`}
      style={{
        backgroundImage: getBackgroundImage(),
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-secondary-900/30 mix-blend-multiply" />
        
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl animate-fade-in">
<h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-2xl hover:drop-shadow-4xl transform transition-all duration-300 ease-in-out">
  Vart Reser Ni?
</h1>


            <p className="text-xl md:text-2xl mb-8 font-light text-white/90 drop-shadow">
              Upptäck vart andra svenskar reser och hitta din nästa destination
            </p>
            
            {/* Show scroll indicator only on fullscreen hero */}
            {showScrollIndicator && (
              <div className="absolute bottom-16 left-0 right-0 flex justify-center animate-bounce">
                <button
                  onClick={onScroll}
                  className="flex flex-col items-center text-white/90 hover:text-white transition-colors duration-300 group"
                >
                  <span className="text-sm font-medium mb-2 group-hover:text-white">
                    Scrolla för att se statistik!
                  </span>
                  <svg 
                    className="w-6 h-6 transform group-hover:translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* Show navigation buttons only on non-fullscreen hero */}
            {!showScrollIndicator && (
              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/articles"
                    className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Läs våra guider
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('hasAnswered');
                      window.location.reload();
                    }}
                    className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-lg hover:from-secondary-700 hover:to-secondary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Svara på formuläret
                  </button>
                </div>

                <div className="flex justify-center space-x-6 mt-8">
                  <a
                    href="https://www.instagram.com/vartreserni.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="Följ oss på Instagram"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  <a
                    href="https://www.tiktok.com/@vartreserni.se?lang=sv-SE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="Följ oss på TikTok"
                  >
                    <span className="sr-only">TikTok</span>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-7a8.16 8.16 0 004.65 1.49v-3.88a4.85 4.85 0 01-1.2 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;