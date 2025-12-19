import { useState } from 'react';
import { Link } from 'react-router-dom';

function HamburgerMenu({ onBackpackingClick, onSolsemesterClick, onSkiingClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleAnswerForm = () => {
    // Don't clear saved data, just reload to show form
    localStorage.removeItem('hasAnswered');
    window.location.reload();
    closeMenu();
  };
  return (
    <>
      {/* Hamburger Button - Fixed position */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-[60] bg-black/20 backdrop-blur-sm hover:bg-black/30 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
        aria-label="Öppna meny"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Dropdown Menu */}
      <div className={`fixed top-20 right-6 z-[60] bg-white rounded-xl shadow-elegant overflow-hidden transition-all duration-300 transform ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}>
        <div className="py-2 min-w-[200px]">
          <Link
            to="/about"
            onClick={closeMenu}
            className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            Om oss
          </Link>
          
          <button
            onClick={() => {
              onSolsemesterClick();
              closeMenu();
            }}
            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            Solsemester
          </button>
          
          <button
            onClick={() => {
              onBackpackingClick();
              closeMenu();
            }}
            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            Backpacking
          </button>
          
          <button
            onClick={() => {
              onSkiingClick();
              closeMenu();
            }}
            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            Skidsemester
          </button>
          
          <Link
            to="/articles"
            onClick={closeMenu}
            className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            Guider
          </Link>

          <button
            onClick={handleAnswerForm}
            className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            Svara på formuläret
          </button>
          <div className="border-t border-gray-100 my-2"></div>
          
          <a
            href="https://www.instagram.com/vartreserni.se/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          
          <a
            href="https://www.tiktok.com/@vartreserni.se?lang=sv-SE"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-7a8.16 8.16 0 004.65 1.49v-3.88a4.85 4.85 0 01-1.2 0z"/>
            </svg>
            TikTok
          </a>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;