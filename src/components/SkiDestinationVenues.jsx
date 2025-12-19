import React from 'react';
import { SKI_VENUES } from '../constants/skiVenues';

function SkiDestinationVenues({ destination }) {
  const venues = SKI_VENUES[destination];

  if (!venues) {
    return (
      <div className="bg-white rounded-xl shadow-soft p-6">
        <h2 className="text-xl font-bold mb-4">Nattliv & Restauranger</h2>
        <p className="text-gray-600">Information om nattliv och restauranger för {destination} kommer snart.</p>
      </div>
    );
  }

  const VenueSection = ({ title, venues, icon }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      <div className="grid gap-4">
        {venues.map((venue, index) => (
          <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-colors duration-200">
            <h4 className="font-semibold text-gray-900 mb-2">{venue.name}</h4>
            <p className="text-gray-600 text-sm">{venue.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <h2 className="text-xl font-bold mb-6">Nattliv & Restauranger i {destination}</h2>
      
      <VenueSection 
        title="Barer & Après-ski" 
        venues={venues.bars} 
        icon="🍺"
      />
      
      <VenueSection 
        title="Nattklubbar" 
        venues={venues.clubs} 
        icon="🎵"
      />
      
      <VenueSection 
        title="Restauranger" 
        venues={venues.restaurants} 
        icon="🍽️"
      />
    </div>
  );
}

export default SkiDestinationVenues;