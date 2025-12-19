import React from 'react';

const DESTINATION_INFO = {
  Barcelona: { population: '1.6 miljoner', area: '101.9 km²' },
  Berlin: { population: '3.7 miljoner', area: '891.8 km²' },
  Amsterdam: { population: '872 000', area: '219.3 km²' },
  Milano: { population: '1.4 miljoner', area: '181.8 km²' },
  'Palma de Mallorca': { population: '416 000', area: '208.6 km²' },
  Ibiza: { population: '147 000', area: '572 km²' },
  Rhodos: { population: '115 000', area: '1,401 km²' },
  Kos: { population: '33 000', area: '290 km²' },
  Zakynthos: { population: '40 000', area: '406 km²' },
  Split: { population: '178 000', area: '79 km²' },
  'Ayia Napa': { population: '3 000', area: '8 km²' },
  Magaluf: { population: '4 000', area: '3.8 km²' },
  Malaga: { population: '578 000', area: '398 km²' },
  Tenneriffa: { population: '917 000', area: '2,034 km²' },
  Gotland: { population: '60 000', area: '3,140 km²' },
  Cancun: { population: '888 000', area: '1,979 km²' },
  'Las Vegas': { population: '651 000', area: '352 km²' },
  Miami: { population: '442 000', area: '143.1 km²' },
  Kavos: { population: '2 000', area: '2.5 km²' },
  Torrevieja: { population: '82 000', area: '71.4 km²' },
  Alicante: { population: '337 000', area: '201.3 km²' },
  Albufeira: { population: '41 000', area: '140.7 km²' },
  Marbella: { population: '147 000', area: '117 km²' },
  Valencia: { population: '791 000', area: '134.6 km²' },
  Zagreb: { population: '769 000', area: '641 km²' },
  Nice: { population: '342 000', area: '71.9 km²' },
  Kreta: { population: '634 000', area: '8,336 km²' },
  Monaco: { population: '39 000', area: '2.02 km²' },
  Malta: { population: '514 000', area: '316 km²' },
  Cannes: { population: '74 000', area: '19.6 km²' },
  Helsingfors: { population: '656 000', area: '215.2 km²' },
  Köpenhamn: { population: '799 000', area: '179.8 km²' },
  Phuket: { population: '416 000', area: '576 km²' },
  Bali: { population: '4.3 miljoner', area: '5,780 km²' },
  Mykonos: { population: '10 000', area: '85.5 km²' },
  Santorini: { population: '15 000', area: '76 km²' },
  'Rio de Janeiro': { population: '6.7 miljoner', area: '1,221 km²' },
  Maldiverna: { population: '521 000', area: '298 km²' },
  'Bora Bora': { population: '10 000', area: '29.3 km²' },
  Hawaii: { population: '1.4 miljoner', area: '28,311 km²' },
  Fiji: { population: '896 000', area: '18,274 km²' },
  Seychellerna: { population: '98 000', area: '459 km²' },
  Boracay: { population: '32 000', area: '10.32 km²' },
  'Costa Adeje': { population: '47 000', area: '105.94 km²' },
  Langkawi: { population: '111 000', area: '478.5 km²' },
  'Gili Islands': { population: '3 500', area: '15 km²' },
  'Phi Phi Islands': { population: '2 500', area: '12.25 km²' },
  Krabi: { population: '456 000', area: '4,708.5 km²' },
  'Koh Samui': { population: '63 000', area: '228.7 km²' },
  Tulum: { population: '46 000', area: '2,040 km²' },
  'Puerto Vallarta': { population: '221 000', area: '1,300.7 km²' },
  'Cabo San Lucas': { population: '202 000', area: '3,752.2 km²' },
  'South Beach': { population: '39 000', area: '5.6 km²' },
  'Key West': { population: '25 000', area: '19.2 km²' },
  Aruba: { population: '106 000', area: '180 km²' },
  Curacao: { population: '155 000', area: '444 km²' },
  Barbados: { population: '287 000', area: '430 km²' },
  'St. Lucia': { population: '183 000', area: '617 km²' },
  'Turks and Caicos': { population: '38 000', area: '948 km²' },
  Belize: { population: '419 000', area: '22,966 km²' },
  Tahiti: { population: '190 000', area: '1,042 km²' },
  Moorea: { population: '17 000', area: '134 km²' },
  Rarotonga: { population: '13 000', area: '67.19 km²' },
  'Viti Levu': { population: '600 000', area: '10,388 km²' },
  Suva: { population: '93 000', area: '2,048 km²' },
  'Phu Quoc': { population: '179 000', area: '574 km²' },
  'Da Nang': { population: '1.13 miljoner', area: '1,285.4 km²' },
  'Nha Trang': { population: '535 000', area: '251 km²' },
  Sihanoukville: { population: '89 000', area: '80.1 km²' },
  Mauritius: { population: '1.26 miljoner', area: '2,040 km²' },
  Reunion: { population: '859 000', area: '2,512 km²' },
  Zanzibar: { population: '1.3 miljoner', area: '2,461 km²' },
  Mombasa: { population: '1.2 miljoner', area: '294.7 km²' },
  'Cape Verde': { population: '555 000', area: '4,033 km²' },
  'Fernando de Noronha': { population: '3 100', area: '26 km²' },
  'Rio de Janeiro': { population: '6.7 miljoner', area: '1,221 km²' },
  'Guanabara Bay': { population: 'N/A', area: '412 km²' },
  'Costa Rica': { population: '5.1 miljoner', area: '51,100 km²' },
  'Playa del Carmen': { population: '304 000', area: '50.9 km²' },
  Cozumel: { population: '100 000', area: '647.33 km²' },
  Acapulco: { population: '687 000', area: '1,880.2 km²' },
  'Panama City Beach': { population: '12 800', area: '48.2 km²' },
  'Virginia Beach': { population: '457 000', area: '644 km²' },
  'Myrtle Beach': { population: '35 000', area: '60.9 km²' },
  'Hilton Head': { population: '38 000', area: '179.2 km²' },
  'Key Largo': { population: '9 500', area: '40 km²' },
  Providenciales: { population: '23 000', area: '98 km²' },
  Nassau: { population: '275 000', area: '207 km²' },
  Freeport: { population: '50 000', area: '558 km²' },
  'Montego Bay': { population: '110 000', area: '56.19 km²' },
  Negril: { population: '6 900', area: '252 km²' },
  'Ocho Rios': { population: '16 700', area: '24.7 km²' },
  'Grand Cayman': { population: '65 000', area: '197 km²' },
  'Grand Turk': { population: '4 800', area: '18 km²' },
  Bermuda: { population: '64 000', area: '53.2 km²' },
  'St. Barts': { population: '9 800', area: '21 km²' },
  'St. Martin': { population: '38 000', area: '87 km²' },
  Anguilla: { population: '15 000', area: '91 km²' },
  Guadeloupe: { population: '384 000', area: '1,628 km²' },
  Martinique: { population: '376 000', area: '1,128 km²' },
  Dominica: { population: '72 000', area: '751 km²' },
  Grenada: { population: '113 000', area: '344 km²' },
  Trinidad: { population: '1.3 miljoner', area: '4,828 km²' },
  Tobago: { population: '60 000', area: '300 km²' },
  Mustique: { population: '500', area: '5.7 km²' },
  Bequia: { population: '4 300', area: '18 km²' },
  'Riviera Maya': { population: '160 000', area: '1,500 km²' },
  'Puerto Escondido': { population: '45 000', area: '875 km²' },
  Mazatlan: { population: '500 000', area: '3,068 km²' },
  'Puerto Rico': { population: '3.2 miljoner', area: '9,104 km²' },
  'St. Croix': { population: '50 000', area: '218 km²' },
  'St. Thomas': { population: '51 000', area: '80.9 km²' },
  'St. John': { population: '4 200', area: '50.8 km²' },
  'Vanua Levu': { population: '135 000', area: '5,587 km²' },
  Aitutaki: { population: '2 000', area: '18 km²' },
  Rangiroa: { population: '2 500', area: '1,640 km²' },
  Galapagos: { population: '33 000', area: '8,010 km²' },
  'La Digue': { population: '2 800', area: '10.08 km²' },
  Mahe: { population: '77 000', area: '157.3 km²' },
  Praslin: { population: '7 500', area: '38.5 km²' },
  'Phang Nga': { population: '250 000', area: '4,170 km²' },
  Coron: { population: '52 000', area: '689 km²' },
  'El Nido': { population: '41 000', area: '923 km²' },
  Guam: { population: '168 000', area: '549 km²' },
  Saipan: { population: '48 000', area: '120 km²' },
  'Phu Yen': { population: '877 000', area: '5,045 km²' },
  'Vung Tau': { population: '527 000', area: '141 km²' },
  Varadero: { population: '27 000', area: '48 km²' },
  'Cayo Coco': { population: 'N/A', area: '370 km²' },
  'Cayo Largo': { population: 'N/A', area: '37.5 km²' },
  Holguin: { population: '346 000', area: '654 km²' },
  Symi: { population: '2 600', area: '65.8 km²' },
  Hydra: { population: '2 000', area: '64.4 km²' },
  Capri: { population: '14 000', area: '10.4 km²' },
  Sorrento: { population: '16 500', area: '9.96 km²' },
  'Lake Como': { population: '85 000', area: '146 km²' },
  'Lake Garda': { population: '160 000', area: '370 km²' },
  Samos: { population: '33 000', area: '477.4 km²' },
  Hamburg: { population: '1.8 miljoner', area: '755 km²' },
  Köln: { population: '1.1 miljoner', area: '405 km²' },
  Frankfurt: { population: '753 000', area: '248 km²' },
  Paris: { population: '2.2 miljoner', area: '105 km²' },
  Lyon: { population: '520 000', area: '48 km²' },
  Marseille: { population: '870 000', area: '241 km²' },
  Bordeaux: { population: '257 000', area: '49 km²' },
  Bryssel: { population: '1.2 miljoner', area: '161 km²' },
  Brugge: { population: '118 000', area: '138 km²' },
  Gent: { population: '260 000', area: '156 km²' },

  // Schweiz
  Zürich: { population: '435 000', area: '88 km²' },
  Genève: { population: '203 000', area: '16 km²' },
  Interlaken: { population: '5 700', area: '4.4 km²' },
  Lauterbrunnen: { population: '2 500', area: '164.5 km²' },

  // Österrike
  Vienna: { population: '1.9 miljoner', area: '415 km²' },
  Salzburg: { population: '156 000', area: '66 km²' },
  Innsbruck: { population: '132 000', area: '105 km²' },
  Hallstatt: { population: '750', area: '60 km²' },

  // Sverige
  Stockholm: { population: '975 000', area: '188 km²' },
  Göteborg: { population: '590 000', area: '448 km²' },
  Malmö: { population: '350 000', area: '77 km²' },

  // Danmark
  Århus: { population: '286 000', area: '91 km²' },

  // Norge
  Oslo: { population: '700 000', area: '454 km²' },
  Bergen: { population: '286 000', area: '465 km²' },
  Stavanger: { population: '144 000', area: '71 km²' },
  Lofoten: { population: '24 000', area: '1,227 km²' },

  // Baltikum & Island
  Tallinn: { population: '437 000', area: '159 km²' },
  Riga: { population: '632 000', area: '307 km²' },
  Vilnius: { population: '588 000', area: '401 km²' },
  Reykjavik: { population: '134 000', area: '273 km²' },

  // Spanien
  Madrid: { population: '3.3 miljoner', area: '604 km²' },
  Sevilla: { population: '688 000', area: '140 km²' },
  Bilbao: { population: '350 000', area: '42 km²' },

  // Portugal
  Lissabon: { population: '544 000', area: '100 km²' },
  Porto: { population: '214 000', area: '41 km²' },
  Faro: { population: '64 000', area: '203 km²' },
  Azorerna: { population: '245 000', area: '2,346 km²' },
  Madeira: { population: '267 000', area: '801 km²' },

  // Italien
  Rome: { population: '2.8 miljoner', area: '1,285 km²' },
  Venedig: { population: '260 000', area: '415 km²' },
  Florens: { population: '380 000', area: '102 km²' },
  Neapel: { population: '940 000', area: '119 km²' },
  Bologna: { population: '390 000', area: '141 km²' },
  Palermo: { population: '670 000', area: '159 km²' },
  'Cinque Terre': { population: '5 000', area: '39 km²' },

  // Kroatien
  Dubrovnik: { population: '42 000', area: '21 km²' },
  Hvar: { population: '4 200', area: '300 km²' },
  Plitvicesjöarna: { population: '4 000', area: '297 km²' },

  // Montenegro
  Kotor: { population: '13 000', area: '335 km²' },
  Podgorica: { population: '187 000', area: '1,441 km²' },

  // Slovenien
  Ljubljana: { population: '295 000', area: '164 km²' },

  // Grekland
  Aten: { population: '660 000', area: '39 km²' },
  Thessaloniki: { population: '325 000', area: '19 km²' },
  Meteora: { population: '–', area: '–' }, // Klosterområde, ej stad

  // Malta
  Valletta: { population: '6 000', area: '0.61 km²' },

  // Tjeckien
  Prague: { population: '1.3 miljoner', area: '496 km²' },
  'Cesky Krumlov': { population: '13 000', area: '22 km²' },

  // Polen
  Kraków: { population: '770 000', area: '327 km²' },
  Warszawa: { population: '1.8 miljoner', area: '517 km²' },
  Wrocław: { population: '641 000', area: '293 km²' },
  Gdańsk: { population: '470 000', area: '262 km²' },

  // Ungern
  Budapest: { population: '1.8 miljoner', area: '525 km²' },
  Debrecen: { population: '200 000', area: '462 km²' },

  // Slovakien
  Bratislava: { population: '440 000', area: '368 km²' },

  // Rumänien
  Bukarest: { population: '1.8 miljoner', area: '228 km²' },
  'Cluj-Napoca': { population: '320 000', area: '180 km²' },
  Brașov: { population: '253 000', area: '267 km²' },
  'Transsylvanien (Sighișoara)': { population: '28 000', area: '11 km²' },

  // Serbien
  Belgrad: { population: '1.4 miljoner', area: '360 km²' },
  'Novi Sad': { population: '290 000', area: '703 km²' },

  // Bosnien och Hercegovina
  Sarajevo: { population: '275 000', area: '142 km²' },
  Mostar: { population: '105 000', area: '1,175 km²' },

  // Nordmakedonien
  Skopje: { population: '540 000', area: '571 km²' },
  Ohrid: { population: '42 000', area: '384 km²' },

  // Bulgarien
  Sofia: { population: '1.2 miljoner', area: '492 km²' },
  Plovdiv: { population: '345 000', area: '101 km²' },

  // Albanien
  Tirana: { population: '495 000', area: '42 km²' },

  // Kosovo
  Prizren: { population: '178 000', area: '640 km²' },

  // Georgien
  Tbilisi: { population: '1.15 miljoner', area: '726 km²' },
  Batumi: { population: '156 000', area: '65 km²' },

  // Armenien
  Jerevan: { population: '1.1 miljoner', area: '223 km²' },

  // Azerbajdzjan
  Baku: { population: '2.3 miljoner', area: '2,130 km²' },

  // Storbritannien & Irland
  'Isle of Skye': { population: '10 000', area: '1,656 km²' },
  Inverness: { population: '47 000', area: '29 km²' },
  Killarney: { population: '14 500', area: '35 km²' },
  Galway: { population: '80 000', area: '53 km²' },

  // Skottland / England (region)
  Cotswolds: { population: '140 000', area: '2,038 km²' },
  // Thailand
  Bangkok: { population: '10.7 miljoner', area: '1,569 km²' },
  'Chiang Mai': { population: '127 000', area: '40 km²' },
  Pai: { population: '3 000', area: '12 km²' },
  'Koh Tao': { population: '1 400', area: '21 km²' },
  'Koh Phangan': { population: '11 000', area: '125 km²' },
  'Koh Lanta': { population: '25 000', area: '340 km²' },
  'Ao Nang': { population: '8 000', area: '35 km²' },

  // Kambodja
  'Koh Rong': { population: '4 000', area: '78 km²' },
  'Siem Reap (Angkor Wat)': { population: '140 000', area: '76 km²' },
  'Phnom Penh': { population: '2.3 miljoner', area: '679 km²' },
  Kampot: { population: '49 000', area: '39 km²' },

  // Vietnam
  'Ho Chi Minh-staden': { population: '9 miljoner', area: '2,095 km²' },
  'Da Lat': { population: '230 000', area: '395 km²' },
  'Mui Ne': { population: '25 000', area: '35 km²' },
  'Hoi An': { population: '120 000', area: '61 km²' },
  Hue: { population: '351 000', area: '72 km²' },
  Hanoi: { population: '8 miljoner', area: '3,359 km²' },
  'Cat Ba (Halong Bay)': { population: '13 000', area: '285 km²' },
  Sapa: { population: '10 000', area: '24 km²' },

  // Laos
  'Luang Prabang': { population: '55 000', area: '–' },
  'Vang Vieng': { population: '25 000', area: '–' },
  Vientiane: { population: '950 000', area: '3,920 km²' },

  // Malaysia
  'Kuala Lumpur': { population: '1.8 miljoner', area: '243 km²' },
  'Penang (George Town)': { population: '708 000', area: '121 km²' },
  Perhentianöarna: { population: '2 000', area: '15 km²' },
  'Cameron Highlands': { population: '38 500', area: '712 km²' },
  'Borneo (Kota Kinabalu)': { population: '500 000', area: '351 km²' },

  // Indonesien
  Ubud: { population: '74 000', area: '–' },
  Lombok: { population: '3.8 miljoner', area: '4,725 km²' },
  Komodoöarna: { population: '2 000', area: '390 km²' },
  Yogyakarta: { population: '422 000', area: '32.5 km²' },
  Jakarta: { population: '10.8 miljoner', area: '661 km²' },
  'Medan (Sumatra)': { population: '2.4 miljoner', area: '265 km²' },

  // Filippinerna
  Manila: { population: '1.85 miljoner', area: '43 km²' },
  'Palawan (El Nido & Coron)': { population: '940 000', area: '14,650 km²' },
  Cebu: { population: '964 000', area: '315 km²' },
  Siargao: { population: '94 000', area: '416 km²' },
  Bohol: { population: '1.3 miljoner', area: '4,821 km²' },

  // Indien
  Goa: { population: '1.8 miljoner', area: '3,702 km²' },
  Rishikesh: { population: '103 000', area: '12 km²' },
  Varanasi: { population: '1.2 miljoner', area: '82 km²' },
  Jaipur: { population: '3.1 miljoner', area: '485 km²' },
  Pushkar: { population: '22 000', area: '16 km²' },
  Manali: { population: '8 000', area: '6 km²' },
  'Leh-Ladakh': { population: '31 000', area: '45 km²' },
  'Kerala (Varkala & Alleppey)': {
    population: '35 miljoner',
    area: '38,863 km²',
  },
  Mumbai: { population: '12.4 miljoner', area: '603 km²' },
  Kolkata: { population: '4.5 miljoner', area: '206 km²' },

  // Nepal
  Kathmandu: { population: '1 miljon', area: '51 km²' },
  Pokhara: { population: '414 000', area: '464 km²' },
  'Everest Base Camp': { population: '–', area: '–' },
  'Chitwan National Park': { population: '–', area: '932 km²' },

  // Bhutan
  Thimphu: { population: '114 000', area: '26 km²' },

  // Sri Lanka
  Colombo: { population: '752 000', area: '37 km²' },
  Galle: { population: '100 000', area: '17 km²' },
  Mirissa: { population: '5 000', area: '3 km²' },
  Ella: { population: '45 000', area: '25 km²' },
  Sigiriya: { population: '–', area: '–' },
  Hikkaduwa: { population: '15 000', area: '10 km²' },

  // Japan
  Tokyo: { population: '13.9 miljoner', area: '2,194 km²' },
  Kyoto: { population: '1.45 miljoner', area: '828 km²' },
  Osaka: { population: '2.7 miljoner', area: '225 km²' },
  Nara: { population: '360 000', area: '276 km²' },
  Hiroshima: { population: '1.2 miljoner', area: '906 km²' },
  Sapporo: { population: '1.9 miljoner', area: '1,121 km²' },
  Fukuoka: { population: '1.6 miljoner', area: '343 km²' },

  // Kina
  Beijing: { population: '21.7 miljoner', area: '16,410 km²' },
  Shanghai: { population: '24.2 miljoner', area: '6,340 km²' },
  'Chengdu (pandas & natur)': {
    population: '16.3 miljoner',
    area: '14,335 km²',
  },
  'Guilin (Yangshuo)': {
    population: '4.7 miljoner (prefektur)',
    area: '27,800 km²',
  },
  'Zhangjiajie (Avatarbergen)': {
    population: '1.7 miljoner',
    area: '9,516 km²',
  },
  'Xi’an (Terrakottaarmén)': {
    population: '12.9 miljoner',
    area: '10,108 km²',
  },
  Hongkong: { population: '7.5 miljoner', area: '1,106 km²' },
  Macao: { population: '685 000', area: '33 km²' },

  // Taiwan
  Taipei: { population: '2.6 miljoner', area: '272 km²' },
  'Taroko Gorge': { population: '–', area: '–' },

  // Sydkorea
  Seoul: { population: '9.7 miljoner', area: '605 km²' },
  Busan: { population: '3.4 miljoner', area: '770 km²' },
  'Jeju Island': { population: '695 000', area: '1,849 km²' },

  // Kazakstan
  Almaty: { population: '2 miljoner', area: '682 km²' },
  Astana: { population: '1.3 miljoner', area: '722 km²' },

  // Uzbekistan
  Samarkand: { population: '530 000', area: '120 km²' },
  Bukhara: { population: '280 000', area: '40 km²' },
  Khiva: { population: '91 000', area: '21 km²' },

  // Kirgizistan
  Bishkek: { population: '1 miljon', area: '160 km²' },
  Karakol: { population: '76 000', area: '–' },

  // Pamir Highway (Tadzjikistan, Kirgizistan, m.fl.)
  'Pamir Highway': { population: '–', area: '–' },

  // Tadzjikistan
  Dushanbe: { population: '900 000', area: '–' },

  // Turkmenistan
  Ashgabat: { population: '1 miljon', area: '–' },

  // Afghanistan
  Kabul: { population: '4.6 miljoner', area: '–' },

  // Mongoliet
  Ulaanbaatar: { population: '1.5 miljoner', area: '4,704 km²' },
  Gobiöknen: { population: '–', area: '1,295,000 km²' },
};

function DestinationInfo({ destination }) {
  const info = DESTINATION_INFO[destination] || {
    population: 'Information saknas',
    area: 'Information saknas',
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Allmän information
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-600">
              Befolkning
            </span>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">
            {info.population}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <span className="text-sm font-medium text-gray-600">Yta</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">
            {info.area}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DestinationInfo;
