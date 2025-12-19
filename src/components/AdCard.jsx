import React from 'react';

function AdCard({ imageUrl, link, title, description }) {
  return (
    <div 
      onClick={() => window.open(link, '_blank')} 
      className="group bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] animate-fade-in"
    >
      <div
        className="h-40 sm:h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2.5 sm:py-3 px-4 rounded-lg group-hover:from-primary-700 group-hover:to-primary-800 transition-all duration-300 font-medium shadow-md group-hover:shadow-lg text-center text-sm sm:text-base">
          Köp nu
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 text-center">
          Sponsrat innehåll från Singular Society
        </p>
      </div>
    </div>
  );
}

export default AdCard;