import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MAP_LOCATIONS } from '../constants';

// Fix för Leaflet ikoner i React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Funktion för att skapa anpassade kartnålar (Ikonbaserad)
const createPinIcon = () => {
  return L.divIcon({
    className: 'custom-pin-icon',
    html: `
      <svg style="
        width: 30px;
        height: 30px;
        fill: lightblue; /* Vit färg för ikonen */
        filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5)); /* Liten skugga för synlighet */
      " viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
      </svg>
    `,
    iconSize: [30, 30], // Justera storleken för att matcha SVG:n
    iconAnchor: [15, 30], // Centrerar ikonen vid dess spets
    popupAnchor: [0, -30] // Placerar popupen ovanför ikonen
  });
};












function InteractiveMap({ topDestinations }) {
  const navigate = useNavigate();

  const handleDestinationClick = (destination) => {
    navigate(`/destination/${encodeURIComponent(destination)}`);
  };

  // Filtrera destinationer som har koordinater
  const mappableDestinations = topDestinations.filter(dest => 
    MAP_LOCATIONS[dest.location]
  );

  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden animate-fade-in">
      {/* Redesigned Header */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 border-b border-gray-100">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-3">
            Top 10 populäraste festreseorterna
          </h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
            Klicka på markeringarna för att se mer information om varje destination
          </p>
        </div>
      </div>
      
      <div className="h-96 relative">
        <MapContainer
          center={[38.0, 18.0]} // Centrerat över Medelhavet
          zoom={5}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            detectRetina={true}
            zIndex={1}
          />
          <TileLayer
            attribution='Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            detectRetina={true}
            zIndex={2}
          />
          
          {mappableDestinations.map((dest, index) => {
            const coords = MAP_LOCATIONS[dest.location];
            const ranking = index + 1;
            
            return (
              <Marker
                key={dest.location}
                position={[coords.lat, coords.lng]}
                icon={createPinIcon()}
              >
                <Popup>
                  <div className="text-center p-2">
                    <h4 className="font-bold text-lg mb-2">{dest.location}</h4>
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Ranking:</span>
                        <span className="font-semibold text-primary-600">#{ranking}</span>
                      </div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Resenärer:</span>
                        <span className="font-semibold">{dest.count}</span>
                      </div>
                      {dest.data.interestedCount > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Intresserade:</span>
                          <span className="font-semibold text-secondary-600">{dest.data.interestedCount}</span>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleDestinationClick(dest.location)}
                      className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-medium text-sm w-full"
                    >
                      Utforska destination
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default InteractiveMap;