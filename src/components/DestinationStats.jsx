import React from 'react';

const StatCircle = ({ value, maxValue, label, color }) => {
  const percentage = (value / maxValue) * 100;
  const strokeDasharray = `${percentage}, 100`;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-gray-200"
            strokeWidth="2"
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className={`stroke-current ${color}`}
            strokeWidth="2"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.8s ease-in-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-xl font-bold ${color.replace('stroke-', 'text-')}`}
          >
            {value}/5
          </span>
        </div>
      </div>
      <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
};

export const DESTINATION_STATS = {
  // Ursprungliga exempel från användaren (31 destinationer):
  Ibiza: { price: 2, sights: 4, nightlife: 5 },
  Magaluf: { price: 3, sights: 2, nightlife: 5 },
  Barcelona: { price: 3, sights: 5, nightlife: 5 },
  'Palma de Mallorca': { price: 3, sights: 4, nightlife: 4 },
  Rhodos: { price: 4, sights: 4, nightlife: 4 },
  Kos: { price: 4, sights: 3, nightlife: 4 },
  Zakynthos: { price: 4, sights: 4, nightlife: 4 },
  Split: { price: 4, sights: 4, nightlife: 3 },
  'Ayia Napa': { price: 3, sights: 3, nightlife: 5 },
  'Sunny Beach': { price: 5, sights: 2, nightlife: 4 },
  Malaga: { price: 4, sights: 4, nightlife: 4 },
  Tenneriffa: { price: 3, sights: 4, nightlife: 3 },
  Gotland: { price: 2, sights: 4, nightlife: 3 },
  Cancun: { price: 3, sights: 4, nightlife: 5 },
  'Las Vegas': { price: 2, sights: 5, nightlife: 5 },
  Miami: { price: 2, sights: 4, nightlife: 5 },
  Kavos: { price: 4, sights: 2, nightlife: 5 },
  Torrevieja: { price: 4, sights: 3, nightlife: 3 },
  Alicante: { price: 4, sights: 4, nightlife: 4 },
  Albufueira: { price: 4, sights: 3, nightlife: 4 },
  Marbella: { price: 2, sights: 4, nightlife: 5 },
  Valencia: { price: 4, sights: 5, nightlife: 4 },
  Zagreb: { price: 4, sights: 4, nightlife: 3 },
  Nice: { price: 2, sights: 5, nightlife: 4 },
  Kreta: { price: 4, sights: 5, nightlife: 4 },
  Monaco: { price: 1, sights: 5, nightlife: 5 },
  Malta: { price: 4, sights: 4, nightlife: 4 },
  Cannes: { price: 1, sights: 5, nightlife: 5 },
  Helsingfors: { price: 2, sights: 4, nightlife: 4 },
  Köpenhamn: { price: 2, sights: 5, nightlife: 4 },
  Berlin: { price: 3, sights: 5, nightlife: 5 },
  Amsterdam: { price: 2, sights: 5, nightlife: 5 },
  Milano: { price: 2, sights: 5, nightlife: 4 },

  // Nedan lägger vi till resterande destinationer:
  Phuket: { price: 4, sights: 4, nightlife: 4 },
  Maldives: { price: 2, sights: 4, nightlife: 2 },
  'Bora Bora': { price: 1, sights: 5, nightlife: 1 },
  Hawaii: { price: 2, sights: 5, nightlife: 4 },
  Fiji: { price: 3, sights: 5, nightlife: 2 },
  'Punta Cana': { price: 3, sights: 3, nightlife: 4 },
  Seychellerna: { price: 1, sights: 5, nightlife: 2 },
  Bali: { price: 4, sights: 4, nightlife: 4 },
  Boracay: { price: 4, sights: 3, nightlife: 5 },
  Santorini: { price: 2, sights: 5, nightlife: 3 },
  Mykonos: { price: 2, sights: 4, nightlife: 5 },
  'Costa Adeje': { price: 3, sights: 4, nightlife: 4 },
  Langkawi: { price: 4, sights: 4, nightlife: 2 },
  'Gili Islands': { price: 5, sights: 3, nightlife: 3 },
  'Phi Phi Islands': { price: 4, sights: 5, nightlife: 4 },
  Krabi: { price: 4, sights: 5, nightlife: 3 },
  'Koh Samui': { price: 4, sights: 4, nightlife: 5 },
  Tulum: { price: 3, sights: 4, nightlife: 4 },
  'Puerto Vallarta': { price: 3, sights: 4, nightlife: 5 },
  'Cabo San Lucas': { price: 2, sights: 3, nightlife: 5 },
  'South Beach': { price: 2, sights: 4, nightlife: 5 },
  'Key West': { price: 2, sights: 4, nightlife: 4 },
  Aruba: { price: 3, sights: 3, nightlife: 3 },
  Curacao: { price: 3, sights: 4, nightlife: 3 },
  Barbados: { price: 3, sights: 4, nightlife: 4 },
  'St. Lucia': { price: 2, sights: 5, nightlife: 2 },
  'Turks and Caicos': { price: 1, sights: 5, nightlife: 3 },
  Belize: { price: 4, sights: 4, nightlife: 2 },
  Tahiti: { price: 1, sights: 5, nightlife: 1 },
  Moorea: { price: 2, sights: 5, nightlife: 1 },
  Rarotonga: { price: 2, sights: 5, nightlife: 1 },
  'Viti Levu': { price: 3, sights: 4, nightlife: 2 },
  Suva: { price: 4, sights: 3, nightlife: 3 },
  'Phu Quoc': { price: 4, sights: 4, nightlife: 3 },
  'Da Nang': { price: 4, sights: 4, nightlife: 4 },
  'Nha Trang': { price: 5, sights: 4, nightlife: 4 },
  Sihanoukville: { price: 5, sights: 3, nightlife: 4 },
  Mauritius: { price: 2, sights: 5, nightlife: 2 },
  Reunion: { price: 2, sights: 5, nightlife: 1 },
  Zanzibar: { price: 3, sights: 5, nightlife: 3 },
  Mombasa: { price: 4, sights: 4, nightlife: 3 },
  'Cape Verde': { price: 4, sights: 4, nightlife: 4 },
  'Fernando de Noronha': { price: 1, sights: 5, nightlife: 1 },
  'Rio de Janeiro': { price: 2, sights: 5, nightlife: 5 },
  'Guanabara Bay': { price: 2, sights: 4, nightlife: 2 },
  'Costa Rica': { price: 3, sights: 5, nightlife: 3 },
  'Playa del Carmen': { price: 3, sights: 4, nightlife: 5 },
  Cozumel: { price: 4, sights: 4, nightlife: 2 },
  Acapulco: { price: 3, sights: 3, nightlife: 5 },
  'Panama City Beach': { price: 4, sights: 2, nightlife: 4 },
  'Virginia Beach': { price: 4, sights: 3, nightlife: 3 },
  'Myrtle Beach': { price: 5, sights: 3, nightlife: 4 },
  'Hilton Head': { price: 3, sights: 3, nightlife: 2 },
  'Key Largo': { price: 3, sights: 3, nightlife: 2 },
  Providenciales: { price: 1, sights: 5, nightlife: 2 },
  Nassau: { price: 2, sights: 4, nightlife: 4 },
  Freeport: { price: 3, sights: 3, nightlife: 3 },
  'Montego Bay': { price: 3, sights: 3, nightlife: 5 },
  Negril: { price: 4, sights: 2, nightlife: 4 },
  'Ocho Rios': { price: 4, sights: 3, nightlife: 4 },
  'Grand Cayman': { price: 2, sights: 4, nightlife: 3 },
  'Grand Turk': { price: 2, sights: 3, nightlife: 2 },
  Bermuda: { price: 1, sights: 5, nightlife: 2 },
  'St. Barts': { price: 1, sights: 5, nightlife: 4 },
  'St. Martin': { price: 2, sights: 4, nightlife: 4 },
  Anguilla: { price: 1, sights: 3, nightlife: 2 },
  Guadeloupe: { price: 3, sights: 5, nightlife: 2 },
  Martinique: { price: 3, sights: 5, nightlife: 2 },
  Dominica: { price: 4, sights: 5, nightlife: 1 },
  Grenada: { price: 4, sights: 4, nightlife: 3 },
  Trinidad: { price: 3, sights: 3, nightlife: 5 },
  Tobago: { price: 3, sights: 4, nightlife: 2 },
  Mustique: { price: 1, sights: 3, nightlife: 2 },
  Bequia: { price: 3, sights: 3, nightlife: 2 },
  'Riviera Maya': { price: 3, sights: 4, nightlife: 5 },
  'Puerto Escondido': { price: 4, sights: 3, nightlife: 4 },
  Mazatlan: { price: 4, sights: 4, nightlife: 4 },
  'Puerto Rico': { price: 2, sights: 4, nightlife: 5 },
  'St. Croix': { price: 3, sights: 3, nightlife: 3 },
  'St. Thomas': { price: 3, sights: 4, nightlife: 4 },
  'St. John': { price: 3, sights: 5, nightlife: 2 },
  'Vanua Levu': { price: 3, sights: 4, nightlife: 1 },
  Aitutaki: { price: 1, sights: 5, nightlife: 1 },
  Rangiroa: { price: 1, sights: 5, nightlife: 1 },
  Galapagos: { price: 2, sights: 5, nightlife: 1 },
  'La Digue': { price: 1, sights: 5, nightlife: 1 },
  Mahe: { price: 1, sights: 5, nightlife: 2 },
  Praslin: { price: 1, sights: 5, nightlife: 2 },
  'Phang Nga': { price: 4, sights: 5, nightlife: 1 },
  Coron: { price: 4, sights: 5, nightlife: 3 },
  'El Nido': { price: 3, sights: 5, nightlife: 3 },
  Guam: { price: 2, sights: 3, nightlife: 3 },
  Saipan: { price: 3, sights: 3, nightlife: 2 },
  'Phu Yen': { price: 5, sights: 4, nightlife: 1 },
  'Vung Tau': { price: 4, sights: 3, nightlife: 3 },
  Varadero: { price: 5, sights: 3, nightlife: 4 },
  'Cayo Coco': { price: 4, sights: 3, nightlife: 2 },
  'Cayo Largo': { price: 4, sights: 3, nightlife: 1 },
  Holguin: { price: 4, sights: 3, nightlife: 2 },
  Symi: { price: 3, sights: 4, nightlife: 2 },
  Hydra: { price: 2, sights: 5, nightlife: 2 },
  Capri: { price: 1, sights: 5, nightlife: 3 },
  Sorrento: { price: 2, sights: 4, nightlife: 3 },
  'Lake Como': { price: 1, sights: 5, nightlife: 2 },
  'Lake Garda': { price: 3, sights: 5, nightlife: 2 },
  Samos: { price: 4, sights: 4, nightlife: 2 },

  Hamburg: { price: 3, sights: 4, nightlife: 4 },
  Köln: { price: 3, sights: 3, nightlife: 4 },
  Frankfurt: { price: 2, sights: 3, nightlife: 3 },
  Paris: { price: 1, sights: 5, nightlife: 5 },
  Lyon: { price: 2, sights: 4, nightlife: 3 },
  Marseille: { price: 3, sights: 3, nightlife: 3 },
  Bordeaux: { price: 2, sights: 4, nightlife: 3 },
  Bryssel: { price: 2, sights: 4, nightlife: 4 },
  Brugge: { price: 2, sights: 5, nightlife: 2 },
  Gent: { price: 2, sights: 4, nightlife: 3 },
  Zürich: { price: 1, sights: 4, nightlife: 3 },
  Genève: { price: 1, sights: 3, nightlife: 3 },
  Interlaken: { price: 1, sights: 5, nightlife: 2 },
  Lauterbrunnen: { price: 1, sights: 5, nightlife: 1 },
  Vienna: { price: 2, sights: 5, nightlife: 4 },
  Salzburg: { price: 2, sights: 5, nightlife: 2 },
  Innsbruck: { price: 2, sights: 5, nightlife: 2 },
  Hallstatt: { price: 2, sights: 5, nightlife: 1 },
  Stockholm: { price: 2, sights: 4, nightlife: 4 },
  Göteborg: { price: 3, sights: 4, nightlife: 3 },
  Malmö: { price: 3, sights: 3, nightlife: 3 },
  Århus: { price: 2, sights: 3, nightlife: 3 },
  Oslo: { price: 1, sights: 4, nightlife: 3 },
  Bergen: { price: 1, sights: 4, nightlife: 2 },
  Stavanger: { price: 1, sights: 3, nightlife: 2 },
  Lofoten: { price: 1, sights: 5, nightlife: 1 },
  Tallinn: { price: 4, sights: 4, nightlife: 4 },
  Riga: { price: 5, sights: 3, nightlife: 4 },
  Vilnius: { price: 5, sights: 3, nightlife: 4 },
  Reykjavik: { price: 1, sights: 4, nightlife: 3 },
  Madrid: { price: 3, sights: 4, nightlife: 5 },
  Sevilla: { price: 4, sights: 5, nightlife: 4 },
  Bilbao: { price: 3, sights: 4, nightlife: 3 },
  Lissabon: { price: 4, sights: 4, nightlife: 4 },
  Porto: { price: 4, sights: 4, nightlife: 3 },
  Faro: { price: 4, sights: 3, nightlife: 3 },
  Azorerna: { price: 3, sights: 5, nightlife: 2 },
  Madeira: { price: 3, sights: 5, nightlife: 2 },
  Rome: { price: 3, sights: 5, nightlife: 4 },
  Venedig: { price: 2, sights: 5, nightlife: 2 },
  Florens: { price: 2, sights: 5, nightlife: 3 },
  Neapel: { price: 3, sights: 5, nightlife: 4 },
  Bologna: { price: 3, sights: 4, nightlife: 3 },
  Palermo: { price: 3, sights: 4, nightlife: 3 },
  'Cinque Terre': { price: 2, sights: 5, nightlife: 1 },
  Dubrovnik: { price: 3, sights: 4, nightlife: 3 },
  Hvar: { price: 3, sights: 3, nightlife: 4 },
  Plitvicesjöarna: { price: 4, sights: 5, nightlife: 1 },
  Kotor: { price: 4, sights: 4, nightlife: 2 },
  Podgorica: { price: 4, sights: 3, nightlife: 3 },
  Ljubljana: { price: 4, sights: 4, nightlife: 3 },
  Aten: { price: 3, sights: 5, nightlife: 5 },
  Thessaloniki: { price: 3, sights: 4, nightlife: 4 },
  Meteora: { price: 3, sights: 5, nightlife: 1 },
  Valletta: { price: 3, sights: 4, nightlife: 3 },
  Prague: { price: 4, sights: 4, nightlife: 5 },
  'Cesky Krumlov': { price: 4, sights: 4, nightlife: 2 },
  Kraków: { price: 5, sights: 4, nightlife: 4 },
  Warszawa: { price: 5, sights: 3, nightlife: 4 },
  Wrocław: { price: 5, sights: 3, nightlife: 3 },
  Gdańsk: { price: 5, sights: 4, nightlife: 3 },
  Budapest: { price: 4, sights: 4, nightlife: 5 },
  Debrecen: { price: 4, sights: 3, nightlife: 2 },
  Bratislava: { price: 4, sights: 3, nightlife: 3 },
  Bukarest: { price: 5, sights: 3, nightlife: 4 },
  'Cluj-Napoca': { price: 5, sights: 3, nightlife: 3 },
  Brașov: { price: 5, sights: 4, nightlife: 2 },
  'Transsylvanien (Sighișoara)': { price: 5, sights: 4, nightlife: 1 },
  Belgrad: { price: 5, sights: 3, nightlife: 4 },
  'Novi Sad': { price: 5, sights: 3, nightlife: 3 },
  Sarajevo: { price: 5, sights: 3, nightlife: 3 },
  Mostar: { price: 5, sights: 4, nightlife: 2 },
  Skopje: { price: 5, sights: 3, nightlife: 3 },
  Ohrid: { price: 5, sights: 4, nightlife: 2 },
  Sofia: { price: 5, sights: 3, nightlife: 3 },
  Plovdiv: { price: 5, sights: 3, nightlife: 3 },
  Tirana: { price: 5, sights: 3, nightlife: 3 },
  Prizren: { price: 5, sights: 3, nightlife: 2 },
  Tbilisi: { price: 5, sights: 4, nightlife: 3 },
  Batumi: { price: 5, sights: 3, nightlife: 4 },
  Jerevan: { price: 5, sights: 3, nightlife: 3 },
  Baku: { price: 4, sights: 3, nightlife: 3 },
  'Isle of Skye': { price: 3, sights: 5, nightlife: 1 },
  Inverness: { price: 3, sights: 4, nightlife: 2 },
  Killarney: { price: 2, sights: 4, nightlife: 3 },
  Galway: { price: 2, sights: 4, nightlife: 3 },
  Cotswolds: { price: 2, sights: 4, nightlife: 1 },
  Bangkok: { price: 4, sights: 4, nightlife: 5 },
  'Chiang Mai': { price: 5, sights: 4, nightlife: 3 },
  Pai: { price: 5, sights: 3, nightlife: 2 },
  'Koh Tao': { price: 4, sights: 3, nightlife: 4 },
  'Koh Phangan': { price: 4, sights: 3, nightlife: 5 },
  'Koh Lanta': { price: 4, sights: 3, nightlife: 2 },
  'Ao Nang': { price: 4, sights: 4, nightlife: 3 },
  'Koh Rong': { price: 4, sights: 3, nightlife: 3 },
  'Siem Reap (Angkor Wat)': { price: 5, sights: 5, nightlife: 3 },
  'Phnom Penh': { price: 5, sights: 3, nightlife: 4 },
  Kampot: { price: 5, sights: 3, nightlife: 2 },

  'Ho Chi Minh-staden': { price: 5, sights: 4, nightlife: 5 },
  'Da Lat': { price: 5, sights: 4, nightlife: 2 },
  'Mui Ne': { price: 5, sights: 3, nightlife: 2 },
  'Hoi An': { price: 4, sights: 5, nightlife: 2 },
  Hue: { price: 5, sights: 4, nightlife: 2 },
  Hanoi: { price: 5, sights: 4, nightlife: 4 },
  'Cat Ba (Halong Bay)': { price: 4, sights: 5, nightlife: 2 },
  Sapa: { price: 5, sights: 5, nightlife: 1 },

  'Luang Prabang': { price: 4, sights: 4, nightlife: 2 },
  'Vang Vieng': { price: 4, sights: 3, nightlife: 3 },
  Vientiane: { price: 4, sights: 3, nightlife: 2 },

  'Kuala Lumpur': { price: 4, sights: 3, nightlife: 4 },
  'Penang (George Town)': { price: 5, sights: 4, nightlife: 3 },
  Perhentianöarna: { price: 4, sights: 4, nightlife: 2 },
  'Cameron Highlands': { price: 4, sights: 4, nightlife: 1 },
  'Borneo (Kota Kinabalu)': { price: 3, sights: 5, nightlife: 2 },

  Ubud: { price: 4, sights: 5, nightlife: 2 },
  Lombok: { price: 5, sights: 4, nightlife: 2 },
  Komodoöarna: { price: 3, sights: 5, nightlife: 1 },
  Yogyakarta: { price: 5, sights: 4, nightlife: 3 },
  Jakarta: { price: 4, sights: 3, nightlife: 4 },
  'Medan (Sumatra)': { price: 5, sights: 3, nightlife: 2 },

  Manila: { price: 4, sights: 3, nightlife: 4 },
  'Palawan (El Nido & Coron)': { price: 4, sights: 5, nightlife: 2 },
  Cebu: { price: 4, sights: 4, nightlife: 3 },
  Siargao: { price: 4, sights: 3, nightlife: 3 },
  Bohol: { price: 4, sights: 4, nightlife: 2 },

  Goa: { price: 4, sights: 3, nightlife: 5 },
  Rishikesh: { price: 5, sights: 4, nightlife: 1 },
  Varanasi: { price: 5, sights: 5, nightlife: 1 },
  Jaipur: { price: 5, sights: 5, nightlife: 2 },
  Pushkar: { price: 5, sights: 4, nightlife: 1 },
  Manali: { price: 5, sights: 4, nightlife: 2 },
  'Leh-Ladakh': { price: 4, sights: 5, nightlife: 1 },
  'Kerala (Varkala & Alleppey)': { price: 4, sights: 4, nightlife: 2 },
  Mumbai: { price: 3, sights: 4, nightlife: 4 },
  Kolkata: { price: 5, sights: 4, nightlife: 3 },

  Kathmandu: { price: 5, sights: 4, nightlife: 3 },
  Pokhara: { price: 5, sights: 4, nightlife: 2 },
  'Everest Base Camp': { price: 2, sights: 5, nightlife: 1 },
  'Chitwan National Park': { price: 4, sights: 4, nightlife: 1 },

  Thimphu: { price: 2, sights: 4, nightlife: 2 },

  Colombo: { price: 4, sights: 3, nightlife: 3 },
  Galle: { price: 4, sights: 4, nightlife: 2 },
  Mirissa: { price: 4, sights: 3, nightlife: 2 },
  Ella: { price: 5, sights: 4, nightlife: 2 },
  Sigiriya: { price: 4, sights: 5, nightlife: 1 },
  Hikkaduwa: { price: 4, sights: 3, nightlife: 3 },

  Tokyo: { price: 1, sights: 5, nightlife: 5 },
  Kyoto: { price: 1, sights: 5, nightlife: 3 },
  Osaka: { price: 1, sights: 4, nightlife: 4 },
  Nara: { price: 1, sights: 5, nightlife: 2 },
  Hiroshima: { price: 1, sights: 4, nightlife: 3 },
  Sapporo: { price: 1, sights: 3, nightlife: 3 },
  Fukuoka: { price: 1, sights: 3, nightlife: 3 },

  Beijing: { price: 3, sights: 5, nightlife: 4 },
  Shanghai: { price: 2, sights: 4, nightlife: 5 },
  'Chengdu (pandas & natur)': { price: 4, sights: 4, nightlife: 3 },
  'Guilin (Yangshuo)': { price: 4, sights: 5, nightlife: 2 },
  'Zhangjiajie (Avatarbergen)': { price: 4, sights: 5, nightlife: 1 },
  'Xi’an (Terrakottaarmén)': { price: 3, sights: 5, nightlife: 3 },
  Hongkong: { price: 1, sights: 4, nightlife: 5 },
  Macao: { price: 1, sights: 3, nightlife: 4 },

  Taipei: { price: 3, sights: 4, nightlife: 4 },
  'Taroko Gorge': { price: 3, sights: 5, nightlife: 1 },

  Seoul: { price: 2, sights: 4, nightlife: 5 },
  Busan: { price: 2, sights: 4, nightlife: 4 },
  'Jeju Island': { price: 2, sights: 4, nightlife: 2 },

  Almaty: { price: 4, sights: 3, nightlife: 3 },
  Astana: { price: 3, sights: 3, nightlife: 3 },
  Samarkand: { price: 5, sights: 5, nightlife: 2 },
  Bukhara: { price: 5, sights: 5, nightlife: 1 },
  Khiva: { price: 5, sights: 5, nightlife: 1 },
  Bishkek: { price: 5, sights: 3, nightlife: 3 },
  Karakol: { price: 5, sights: 4, nightlife: 1 },
  'Pamir Highway': { price: 4, sights: 5, nightlife: 1 },
  Dushanbe: { price: 4, sights: 3, nightlife: 2 },
  Ashgabat: { price: 2, sights: 3, nightlife: 2 },
  Kabul: { price: 3, sights: 3, nightlife: 1 },

  Ulaanbaatar: { price: 4, sights: 3, nightlife: 2 },
  Gobiöknen: { price: 4, sights: 5, nightlife: 1 },
};

function DestinationStats({ destination }) {
  const stats = DESTINATION_STATS[destination] || {
    price: 3,
    sights: 3,
    nightlife: 3,
  };

  return (
    <div className="flex flex-wrap justify-around gap-4 py-6">
      <StatCircle
        value={stats.price}
        maxValue={5}
        label="Budgetvänlighet"
        color="stroke-emerald-500"
      />
      <StatCircle
        value={stats.sights}
        maxValue={5}
        label="Sevärdheter"
        color="stroke-blue-500"
      />
      <StatCircle
        value={stats.nightlife}
        maxValue={5}
        label="Nattliv"
        color="stroke-purple-500"
      />
    </div>
  );
}

export default DestinationStats;
