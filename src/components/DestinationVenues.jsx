import React from 'react';

const VenueList = ({ title, items, icon, bgColor, textColor }) => (
  <div className={`${bgColor} rounded-lg p-6`}>
    <h3 className={`text-lg font-semibold ${textColor} mb-4 flex items-center`}>
      {icon}
      <span className="ml-2">{title}</span>
    </h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 shadow-sm transition-all duration-200 hover:shadow-md"
        >
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-medium text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
            <span className={`${textColor} font-semibold`}>#{index + 1}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const VENUE_DATA = {
  // 1) Ibiza (exempel fanns redan, men vi tar med för att samla allt i ett ställe)
  Ibiza: {
    restaurants: [
      {
        name: 'Sa Capella',
        description:
          'Historisk restaurang i en 400 år gammal kyrka med medelhavsköket',
      },
      {
        name: 'HEART Ibiza',
        description: 'Innovativ fusion av mat, konst och underhållning',
      },
      {
        name: 'Casa Maca',
        description:
          'Lantlig gourmetrestaurang med fantastisk utsikt över Dalt Vila',
      },
    ],
    bars: [
      {
        name: 'Café Mambo',
        description: 'Ikonisk solnedgångsbar med världskända DJs',
      },
      {
        name: 'Kumharas',
        description: 'Bohemisk bar med bästa solnedgångsvyn',
      },
      {
        name: 'Paradise Lost',
        description: 'Trendig cocktailbar med unik atmosfär',
      },
    ],
    clubs: [
      {
        name: 'Hï Ibiza',
        description: 'Ultramodern klubb med flera dansgolv och världskända DJs',
      },
      {
        name: 'Ushuaïa',
        description: 'Legendarisk utomhusklubb med poolparty och stora namn',
      },
      {
        name: 'Amnesia',
        description: 'Historisk klubb med två stora rum och terass',
      },
    ],
  },
  'Palma de Mallorca': {
    restaurants: [
      {
        name: 'Marc Fosh',
        description:
          'Michelinbelönad restaurang med modern medelhavsmat i stilren miljö',
      },
      {
        name: 'Adrián Quetglas',
        description:
          'Kreativ fusionmeny med internationella influenser och elegant upplägg',
      },
      {
        name: 'La Rosa Vermutería',
        description:
          'Trendig tapasbar med vintagekänsla och klassisk spansk vermut',
      },
    ],
    bars: [
      {
        name: 'Bar Abaco',
        description:
          'Barockinspirerad cocktailbar med unik inredning och exklusiv vibe',
      },
      {
        name: 'Chapeau 1987',
        description: 'Gömda cocktails och speak-easy känsla mitt i gamla stan',
      },
      {
        name: 'Ginbo',
        description:
          'Prisbelönt ginbar med fokus på kreativa drinkar och laid-back stämning',
      },
    ],
    clubs: [
      {
        name: 'Social Club Mallorca',
        description:
          'Trendig klubb vid marinan med internationella DJs och stilren inredning',
      },
      {
        name: 'Titos Mallorca',
        description:
          'Klassisk klubb med glaskuber, hiss till dansgolvet och panoramautsikt',
      },
      {
        name: 'Habanera club',
        description:
          'En klubb som många beskriver som 10/10. Utmärkta bartenders som levererar suveräna cocktails. Tillsammans med sina skickliga DJ:s skapar de en oförglömlig kväll, (som stänger klockan 04)',
      },
    ],
  },

  // 2) Magaluf
  Magaluf: {
    restaurants: [
      {
        name: 'Tom Brown’s',
        description:
          'Populär restaurang med internationella rätter nära stranden',
      },
      {
        name: 'Goya Magaluf',
        description: 'Spansk och europeisk fusion med prisvärda menyer',
      },
      {
        name: 'Pirates Beach Bar & Grill',
        description: 'Avslappnad strandrestaurang med grillade specialiteter',
      },
    ],
    bars: [
      {
        name: 'Boomerang',
        description: 'Livlig bar med partyatmosfär och kända temakvällar',
      },
      {
        name: 'Chaplins Bar',
        description: 'Karaokebar och cocktails i hjärtat av Magaluf Strip',
      },
      {
        name: 'Coco Bongos',
        description: 'Tropiskt inspirerad bar med färgglada drinkar',
      },
    ],
    clubs: [
      {
        name: 'BCM Planet Dance',
        description: 'En av Europas största klubbar med gästande top-DJs',
      },
      {
        name: 'Tokio Joe’s',
        description: 'Urban- och R&B-klubb med internationell publik',
      },
      {
        name: 'Car Wash Club',
        description: 'Retro-inspirerad klubb med 70- och 80-tals musik',
      },
    ],
  },

  // 3) Barcelona
  Barcelona: {
    restaurants: [
      { name: 'Tickets', description: 'Modern tapasbar av bröderna Adrià' },
      {
        name: 'OneOcean Club',
        description: 'Lyxig hamnrestaurang med havsutsikt',
      },
      {
        name: 'Cal Pep',
        description: 'Intim restaurang med show cooking och färska råvaror',
      },
    ],
    bars: [
      {
        name: 'Dr. Stravinsky',
        description: 'Prisbelönt cocktailbar med unika drinkar',
      },
      {
        name: 'Paradiso',
        description: 'Speakeasy bar bakom en pastrami-butik',
      },
      {
        name: 'Eclipse Bar',
        description: 'Skybar på 26:e våningen med panoramautsikt',
      },
    ],
    clubs: [
      {
        name: 'Opium Barcelona',
        description: 'Strandklubb med terass och internationella DJs',
      },
      {
        name: 'Razzmatazz',
        description: 'Fem klubbar i en med olika musikstilar',
      },
      {
        name: 'Pacha Barcelona',
        description: 'Lyxig klubb med flera dansgolv',
      },
    ],
  },

  // 4) Rhodos
  Rhodos: {
    restaurants: [
      {
        name: 'Marco Polo Café',
        description: 'Genuin grekisk mat i historisk palatsträdgård',
      },
      {
        name: 'Niohori',
        description: 'Mysig taverna med fokus på färsk fisk och skaldjur',
      },
      {
        name: 'Tamam',
        description: 'Känd för sin moderna tolkning av grekiska klassiker',
      },
    ],
    bars: [
      {
        name: 'Ronda Bar',
        description: 'Strandbar med lyxig loungekänsla och DJ-spelningar',
      },
      {
        name: 'Colorado Club Bar',
        description: 'Populär för livemusik och blandad publik',
      },
      {
        name: 'Legends Rock Bar',
        description: 'Rockinspirerad bar för den som gillar hög stämning',
      },
    ],
    clubs: [
      {
        name: 'Paradiso Beach Club',
        description: 'Utomhusklubb med sommarfester vid havet',
      },
      {
        name: 'Village Bar',
        description: 'Enklare klubb med bra drinkar och avslappnad stämning',
      },
      {
        name: 'Ammo Access',
        description:
          'Livescener och DJ-event, populärt bland lokalbefolkningen',
      },
    ],
  },

  // 5) Kos
  Kos: {
    restaurants: [
      {
        name: 'Elia',
        description: 'Familjeägd restaurang med modern grekisk touch',
      },
      {
        name: 'Broadway',
        description: 'Kreativa rätter och unika desserter i Kos stad',
      },
      {
        name: 'Barbouni',
        description:
          'Strandnära fiskrestaurang känd för grillade specialiteter',
      },
    ],
    bars: [
      {
        name: 'Sitar Cocktail Bar',
        description: 'Populära drinkar och avslappnad stämning',
      },
      {
        name: 'West Bar',
        description: 'Musikquiz och internationell publik i bar-gatan',
      },
      {
        name: 'Zero Café Bar',
        description: 'Ung crowd och trevliga happy hour-erbjudanden',
      },
    ],
    clubs: [
      {
        name: 'Fashion Club',
        description: 'Dansvänlig klubb med internationell house och R&B',
      },
      {
        name: 'Heaven Club',
        description: 'Upplyst dansgolv och lasershow med DJ:s från hela Europa',
      },
      {
        name: 'Stadium Club',
        description:
          'Ett av de största dansgolven på Kos, öppet till gryningen',
      },
    ],
  },

  // 6) Zakynthos
  Zakynthos: {
    restaurants: [
      {
        name: 'Panos',
        description:
          'Panos ligger i Laganas och serverar autentisk grekisk mat till rimliga priser. Matsalen är fin och resaurangen präglas av utmärkt service.',
      },
      {
        name: 'Avli',
        description:
          'Hemtrevlig taverna i utkanten av Zakynthos stad. Vi rekommenderar alltid att man minst 1 kväll tar sig ut ur Laganas och äter i Zakynthos town, då är Avli ett perfekt alternativ.',
      },
      {
        name: 'Bassia',
        description:
          'Fokus på grillade rätter med havsutsikt. Lite dyrare än restaurangerna man hittar i Laganas, men utsikten gör det värt!',
      },
    ],
    bars: [
      {
        name: 'Loft',
        description:
          'En irländsk takbar mitt på bargatan i Laganas. Rimliga priser (5 euro för en Corona, 3 euro för en shot). Här brukar ofta tikokaren "Zante Geezer" hålla hus.',
      },
      {
        name: 'Cheeky Tikis',
        description:
          'Ett enormt utbud av drinkar mitt i Laganas huvudstråk. Deras drink "Haribo Headfucker" är någonting alla som åker till Zakynthos måste prova.',
      },
      {
        name: 'Frozen Bubbles',
        description:
          'Belägen lite längre upp på bargatan finns Frozen Bubbles. Här serveras frysta cocktails och daiquiris som kan avnjutas i en mysig miljö.',
      },
    ],
    clubs: [
      {
        name: 'Cherry Bay',
        description:
          'I vår åsikt den bästa klubben i Zakynthos. Ligger mitt på bargatan precis intill Rescue. 10 euro inträde (gratis om man är tjej) och med inträdet får man 5 drink tokens, vilket motsvarar 5 shots.',
      },
      {
        name: 'Rescue Club',
        description:
          'Den största klubben i Laganas. Gratis inträde hela kvällen och rimliga priser på drinkar (3 euro shots, 5 euro öl).',
      },
      {
        name: 'Sizzle Club',
        description:
          'Om man vill ta sig bort från folkmassorna vid de större klubbarna är Sizzle perfekt. Sizzle arrangerar även ofta förfesterna för Boat Parties.',
      },
    ],
  },

  // 7) Split
  Split: {
    restaurants: [
      {
        name: 'Villa Spiza',
        description: 'En omtyckt lokal pärla precis utanför palatsets murar. Här serveras färsk fisk, risotto, pasta och kött till riktigt låga priser. Villa Spiza tar endast kontanter och inga bokningar, så kom tidigt!',
      },
      {
        name: 'Maslina',
        description: 'Serverar både traditionell kroatisk mat och pizza. En av de billigaste restaurangerna i splits gamla stad. Många gäster uppskattar även de billiga drinkarna!',
      },
      {
        name: 'Restaurant Apetit',
        description: 'Ännu en restaurang belägen i den gamla delen av staden! Restaurant Apetit erbjuder medelhavsmat i en modern matsal och är mycket omtyckt av både lokalbefolkningen och turister. ',
      },
    ],
    bars: [
      {
        name: 'Roof 68',
        description: 'Takbar vid hamnen i Split med grym utsikt, hög musik och klubbig stämmning. Stor lokal, ofta full med folk och feststämning. Drinkarna är dyra, men läget och utsikten väger upp för många.',
      },
      {
        name: 'Charlies bar',
        description: 'Happy hour fram till klockan 18. En av de billigare barerna i Split. Rankad som en av de bästa barerna i split enligt Tripadvisor, främst tack vare den vänliga och livliga stämningen.',
      },
      {
        name: 'Academnia club Ghetto',
        description: 'Den här avslappnade baren är en lokal favorit, känd för sin sköna stämning och trevliga personal. Ta en drink och sätt dig på den mysiga uteserveringen, perfekt för livemusik och att hänga med andra resenärer.',
      },
    ],
    clubs: [
      {
        name: 'Central the Club',
        description: 'En stor nattklubb mitt i Split med två våningar och 4 barer. Den populäraste nattklubben i Split vilket speglas av entréavgiften: runt 10-30 euro.',
      },
      {
        name: 'Vanilla Club',
        description: 'Belägen utanför Split, ca 20 minuters promenad från centrum ligger denna nattklubb som blandar inomhus och utomhusytor. Förvänta dig betala ca 10 euro inträde.',
      },
      { name: 'Bacvice Club', description: ' Bacvice Club ligger precis intill Bacvice beach, en mindre klubb som är populär bland lokalbefolkningen i Split. Entréavgift varierar mellan 0-5 euro. ' },
    ],
  },

  // 8) Ayia Napa
  'Ayia Napa': {
    restaurants: [
      {
        name: 'Ocean Basket',
        description: 'Prisvärd skaldjur och fantastisk havsutsikt',
      },
      {
        name: 'Sage Restaurant',
        description: 'Lyxig fine dining med medelhavsinfluenser',
      },
      {
        name: 'Clarabel Restaurant',
        description: 'Grek-cypernmix med färska lokala råvaror',
      },
    ],
    bars: [
      {
        name: 'Bedrock Inn',
        description: 'Flintstones-tema och karaoke i hög stämning',
      },
      {
        name: 'Pirate Inn Bar',
        description: 'Populärt bland unga, temafester och bra drinkar',
      },
      {
        name: 'Senior Frog’s',
        description: 'Internationell bar med dansgolv och show',
      },
    ],
    clubs: [
      {
        name: 'Castle Club',
        description: 'Flera våningar och musikstilar, en av Cyperns största',
      },
      {
        name: 'Aqua Club',
        description: 'Poolpartys och EDM-spelningar hela sommaren',
      },
      {
        name: 'Carwash Disco',
        description: 'Retro- och 80-talstema med färgglatt dansgolv',
      },
    ],
  },

  // 9) Sunny Beach
  'Sunny Beach': {
    restaurants: [
      {
        name: 'Djanny',
        description: 'Bulgarsk grill och populära frukostmenyer',
      },
      {
        name: 'Hawaii Restaurant',
        description: 'Avslappnat strandställe med internationell meny',
      },
      {
        name: 'Bolero',
        description: 'Europeisk mat med lokalt inslag och bra priser',
      },
    ],
    bars: [
      {
        name: 'The Bounce Bar',
        description: 'Hiphop- och R&B-bar för partysugna',
      },
      { name: 'Amigo Bar', description: 'Temakvällar och billiga drinkar' },
      {
        name: 'Lazur',
        description: 'Strandbar som går från solstolar till dansgolv',
      },
    ],
    clubs: [
      {
        name: 'Bedroom Beach',
        description: 'Lyxig strandklubb med pool och VIP-områden',
      },
      {
        name: 'Orange Disco',
        description: 'Elektronisk musik och neonatmosfär',
      },
      {
        name: 'Den Glade Viking',
        description: 'Skandinaviskinspirerad klubb med party dygnet runt',
      },
    ],
  },

  // 10) Malaga
  Malaga: {
    restaurants: [
      {
        name: 'El Pimpi',
        description: 'Klassiskt vin- och tapasställe med andalusisk charm',
      },
      { name: 'Los Mellizos', description: 'Känd för färsk fisk och skaldjur' },
      {
        name: 'Restaurante Vino Mío',
        description: 'Tapas med internationell tvist och flamencouppträdanden',
      },
    ],
    bars: [
      {
        name: 'La Terraza de Valeria',
        description: 'Takbar med utsikt över hamnen',
      },
      {
        name: 'Casa Guardian',
        description: 'Historisk vinbar från 1800-talet',
      },
      { name: 'ZZ Pub', description: 'Rockbar med livespelningar mitt i stan' },
    ],
    clubs: [
      { name: 'Sala Gold', description: 'Glamorös nattklubb med modern musik' },
      {
        name: 'Discoteca Andén',
        description: 'Stort dansgolv och varierade events',
      },
      { name: 'Liceo', description: 'Mångsidig klubb i historiska lokaler' },
    ],
  },

  // 11) Tenneriffa
  Tenneriffa: {
    restaurants: [
      {
        name: 'Mesón Castellano',
        description: 'Spanska specialiteter i klassisk miljö',
      },
      {
        name: 'El Cine',
        description: 'Rustik havsmatsrestaurang vid Los Cristianos',
      },
      {
        name: 'La Nonna',
        description: 'Italiensk restaurang med kanariska inslag',
      },
    ],
    bars: [
      {
        name: 'Papagayo Beach Club',
        description: 'Trendigt läge vid Playa de las Américas',
      },
      {
        name: 'Magic Lounge Bar',
        description: 'Cocktails och livemusik under stjärnorna',
      },
      { name: 'Acanto', description: 'Takbar i Santa Cruz med city-utsikt' },
    ],
    clubs: [
      {
        name: 'Tramps',
        description: 'Kallad “King of Clubs”, populär bland turister',
      },
      {
        name: 'Babylon Disco Gay',
        description: 'HBTQ-vänlig klubb med elektronisk musik',
      },
      {
        name: 'Achaman',
        description: 'Lokalt favoritställe med latinamerikanska rytmer',
      },
    ],
  },

  // 12) Gotland
  Gotland: {
    restaurants: [
      {
        name: 'Bakfickan',
        description: 'Klassisk fiskrestaurang i Visby hamn',
      },
      {
        name: 'Surfers',
        description: 'Kinesisk streetfood i en färgstark atmosfär',
      },
      {
        name: 'Krönet',
        description: 'Enkla men vällagade rätter med havsutsikt',
      },
    ],
    bars: [
      {
        name: 'Gutekällaren Lounge',
        description: 'Stilfull loungebar i Visbys innerstad',
      },
      { name: 'Vinäger', description: 'Populärt drinkställe med uteservering' },
      { name: 'Beyrouth', description: 'Libanesisk bar med meze och musik' },
    ],
    clubs: [
      {
        name: 'Gutekällaren Nightclub',
        description: 'Känd som Gotlands främsta nattklubb',
      },
      {
        name: 'Marité Visby',
        description: 'Klubb på en båt vid kajen, sommartid',
      },
      { name: 'Kharma', description: 'Trendigt ställe med DJs och temafester' },
    ],
  },

  // 13) Cancun
  Cancun: {
    restaurants: [
      {
        name: 'Lorenzillo’s',
        description: 'Berömt hummerställe vid Nichupté-lagunen',
      },
      {
        name: 'La Habichuela',
        description: 'Mexikansk-karibisk fusion i tropisk miljö',
      },
      {
        name: 'Tacos Rigo',
        description: 'Äkta lokala tacos med lång tradition',
      },
    ],
    bars: [
      {
        name: 'Congo Bar',
        description: 'Open-air bar med dansgolv och livlig musik',
      },
      {
        name: 'Señor Frog’s',
        description: 'Känt för lekar, skumfester och färgglada drinkar',
      },
      {
        name: 'Monkey Business',
        description: 'Livlig sport- och musikbar i hotellzonen',
      },
    ],
    clubs: [
      {
        name: 'Coco Bongo',
        description: 'Shows, akrobatik och nattklubb i världsklass',
      },
      {
        name: 'The City',
        description: 'En av Latinamerikas största klubbar, EDM-fokus',
      },
      {
        name: 'Mandala',
        description: 'Elegant klubb med öppen fasad mot huvudgatan',
      },
    ],
  },

  // 14) Las Vegas
  'Las Vegas': {
    restaurants: [
      {
        name: 'é by José Andrés',
        description: 'Exklusiv spansk restaurang med endast 8 platser',
      },
      {
        name: 'Joël Robuchon',
        description: 'Fransk fine dining med 3 Michelin-stjärnor',
      },
      {
        name: 'Nobu Las Vegas',
        description: 'Lyxig japansk fusion i Caesar’s Palace',
      },
    ],
    bars: [
      {
        name: 'Skyfall Lounge',
        description: 'Elegant takbar med utsikt över The Strip',
      },
      {
        name: 'Ghost Donkey',
        description: 'Hemlig mezcalbar med mexikansk atmosfär',
      },
      {
        name: 'The Chandelier',
        description: 'Tre-vånings cocktailbar i kristallkrona',
      },
    ],
    clubs: [
      { name: 'XS Nightclub', description: 'Lyxklubb i Encore med pool' },
      {
        name: 'Hakkasan',
        description: 'Fem våningar av nattklubb i MGM Grand',
      },
      {
        name: 'Omnia',
        description: 'Futuristisk klubb med rörligt tak i Caesar’s',
      },
    ],
  },

  // 15) Miami
  Miami: {
    restaurants: [
      {
        name: 'Carbone Miami',
        description: 'Lyxig italiensk restaurang med retrokänsla',
      },
      { name: 'KYU', description: 'Asiatisk-inspirerad BBQ i Wynwood' },
      {
        name: "Joe's Stone Crab",
        description: 'Klassisk Miami-restaurang känd för stone crabs',
      },
    ],
    bars: [
      {
        name: 'Broken Shaker',
        description: 'Prisbelönt cocktailbar vid poolen',
      },
      {
        name: 'Sweet Liberty',
        description: 'Avslappnad bar med prisbelönta drinkar',
      },
      {
        name: 'Sugar',
        description: 'Takbar på 40:e våningen med asiatisk inspiration',
      },
    ],
    clubs: [
      {
        name: 'LIV',
        description: 'Legendarisk nattklubb i Fontainebleau Hotel',
      },
      { name: 'E11EVEN', description: '24-timmars ultraclub i Downtown' },
      { name: 'Story', description: 'Systerclub till LIV med världskända DJs' },
    ],
  },

  // 16) Kavos
  Kavos: {
    restaurants: [
      {
        name: 'The Rose Tree',
        description: 'Grekiska grillrätter och husmanskost',
      },
      {
        name: 'Big Max Diner',
        description: 'Populärt efter fest, med rejäla portioner',
      },
      {
        name: 'TKD Bakery & Patisserie',
        description: 'Bageri med frukost och färska bakverk',
      },
    ],
    bars: [
      {
        name: 'Rolling Stone Bar',
        description: 'Rockiga vibbar och liveuppträdanden',
      },
      {
        name: 'Buzz Bar',
        description: 'Cocktails, beer pong och partyatmosfär',
      },
      {
        name: 'Fire Bar',
        description: 'Eldshower och temakvällar mitt i bargatan',
      },
    ],
    clubs: [
      {
        name: 'Future Club',
        description: 'Elektronisk musik och internationella DJs',
      },
      {
        name: 'Atlantis',
        description: 'Strandklubb med poolfester och RnB-nätter',
      },
      {
        name: 'Sizzle Club',
        description: 'Slående ljus- och ljudsystem för nattliga äventyr',
      },
    ],
  },

  // 17) Torrevieja
  Torrevieja: {
    restaurants: [
      {
        name: 'El Mesón de la Costa',
        description: 'Traditionell spansk mat, särskilt kött och skaldjur',
      },
      {
        name: 'Restaurante Sunset Beach',
        description: 'Middag vid havet med medelhavsmeny',
      },
      {
        name: 'La Fusión',
        description: 'Internationell fusion med tapas och sushi',
      },
    ],
    bars: [
      { name: 'La Cantina', description: 'Avslappnad bar med tex-mex-tema' },
      { name: 'Pub Delfin', description: 'Klassisk pub nära strandpromenaden' },
      { name: 'Panorama Bar', description: 'Takbar med utsikt över marinan' },
    ],
    clubs: [
      {
        name: 'Velice Discoteca',
        description: 'Stadens största klubb, ofta fullsatt på helger',
      },
      {
        name: 'Marea Disco',
        description: 'Populär bland lokala ungdomar, blandad musik',
      },
      {
        name: 'Oz Discoteca',
        description: 'Salsa- och latinofester till sen natt',
      },
    ],
  },

  // 18) Alicante
  Alicante: {
    restaurants: [
      {
        name: 'La Taberna del Gourmet',
        description: 'Prisbelönta tapas i modern miljö',
      },
      { name: 'Nou Arcos', description: 'Specialitet på paella och risrätter' },
      {
        name: 'El Portal',
        description: 'Gastronomisk upplevelse med exklusiv bar',
      },
    ],
    bars: [
      { name: 'Concerto Club', description: 'Cocktailbar med livemusikinslag' },
      { name: 'Soho Bar', description: 'Retro design och kreativa drinkar' },
      {
        name: 'Clase Bar',
        description: 'Trendig loungeatmosfär för en stilig kväll',
      },
    ],
    clubs: [
      {
        name: 'Isla Marina',
        description: 'Klubb vid stranden med pool och lounge',
      },
      {
        name: 'Krystal Discoteca',
        description: 'Stort dansgolv och mix av spansk pop/house',
      },
      {
        name: 'El Texaco',
        description: 'Sen nattklubb med rock- och indieprofil',
      },
    ],
  },

  // 19) Albufueira
  Albufueira: {
    restaurants: [
      {
        name: 'A Ruína',
        description: 'Fisk- och skaldjursrestaurang i gammal ruin',
      },
      { name: 'Dom Carlos', description: 'Familjär fine dining med fast meny' },
      {
        name: 'Urban Pizza',
        description: 'Italienska pizzor med portugisisk twist',
      },
    ],
    bars: [
      {
        name: 'Sherry’s Bar',
        description: 'Irländsk bar med live sport och musik',
      },
      {
        name: 'Bloop Bar',
        description: 'Graffiti-inspirerad inredning och kreativa drinkar',
      },
      {
        name: 'Buddy’s Bar',
        description: 'Enkla priser och stor uteservering',
      },
    ],
    clubs: [
      {
        name: 'Kiss Club',
        description: 'Hett dansgolv och internationella DJ events',
      },
      { name: 'Club Vida', description: 'Tre våningar med olika musikgenrer' },
      {
        name: 'Libertos Club',
        description: 'Luxuös klubbstämning med loungesoffor',
      },
    ],
  },

  // 20) Marbella
  Marbella: {
    restaurants: [
      {
        name: 'El Pozo Viejo',
        description: 'Traditionella andalusiska rätter i gamla stan',
      },
      {
        name: 'Nobu Marbella',
        description: 'Berömd japansk-peruansk fusion vid Puente Romano',
      },
      {
        name: 'Skina',
        description: 'Michelinstjärnad fine dining med lokala råvaror',
      },
    ],
    bars: [
      { name: 'La Suite', description: 'Chic bar inne på Hotel Puente Romano' },
      {
        name: 'Astral Cocktail Bar',
        description: 'Havsutsikt och fantasifulla drinkar',
      },
      {
        name: 'Babylonia Lounge',
        description: 'Shishabar med orientaliska vibbar',
      },
    ],
    clubs: [
      { name: 'Pangea', description: 'Takklubb i Puerto Banús med panoramavy' },
      {
        name: 'Olivia Valere',
        description: 'Lyxig klubb med palatslik inredning',
      },
      {
        name: 'Momento',
        description: 'Exklusiv nattklubb med internationella DJ-bokningar',
      },
    ],
  },

  Valencia: {
    restaurants: [
      {
        name: 'Casa Roberto',
        description: 'Känd för äkta valenciansk paella med kanin och kyckling',
      },
      {
        name: 'La Paz',
        description: 'Tapas och havsdelikatesser vid strandpromenaden',
      },
      {
        name: 'Canalla Bistro',
        description: 'Modern fusion av spansk och internationell street food',
      },
    ],
    bars: [
      {
        name: 'Café de las Horas',
        description: 'Barockinspirerad inredning och Agua de Valencia',
      },
      {
        name: 'Hawaika',
        description: 'Tiki-bar med exotiska drinkar och tropisk miljö',
      },
      {
        name: 'Radio City',
        description: 'Konstnärlig bar med liveshower och flamenco',
      },
    ],
    clubs: [
      {
        name: 'Mya',
        description:
          'Elektronisk och kommersiell musik i stadens största komplex',
      },
      {
        name: 'Latex Club',
        description: 'Populär klubb bland unga, med olika musikteman',
      },
      {
        name: 'Umbracle',
        description:
          'Takterrass och utomhusmiljö vid stadens konst- och vetenskapscenter',
      },
    ],
  },

  // 22) Zagreb
  Zagreb: {
    restaurants: [
      {
        name: 'La Štruk',
        description: 'Specialiserar sig på ostpajsrätten štrukli',
      },
      { name: 'Agava', description: 'Kroatisk medelhavsmat på pittoresk gata' },
      {
        name: 'Dubravkin Put',
        description: 'Fine dining i grönskande omgivning',
      },
    ],
    bars: [
      {
        name: 'The Garden Brewery Taproom',
        description: 'Lokalt mikrobryggeri med smakfull öl',
      },
      {
        name: 'Swanky Monkey Garden',
        description: 'Hostelbar med urban vibe och cocktails',
      },
      {
        name: 'Pod Zidom',
        description: 'Vinbar och bistro med chill stämning',
      },
    ],
    clubs: [
      {
        name: 'Opera Club',
        description:
          'Stor klubb med internationella DJ:s och storslagen ljusshow',
      },
      { name: 'Gallery Club', description: 'Flott nattklubb vid Jarun-sjön' },
      {
        name: 'Aquarius Club',
        description: 'Populär sommarklubb med utomhusdel',
      },
    ],
  },

  // 23) Nice
  Nice: {
    restaurants: [
      {
        name: 'Le Chantecler',
        description: 'Michelinstjärnad fransk gourmet i Hotel Negresco',
      },
      {
        name: 'La Rossettisserie',
        description: 'Lantlig fransk husmanskost i Gamla stan',
      },
      {
        name: 'Olive & Artichaut',
        description: 'Provençalska rätter med lokala råvaror',
      },
    ],
    bars: [
      {
        name: 'Movida',
        description: 'Takbar vid strandpromenaden med cocktails',
      },
      {
        name: 'Wayne’s Bar',
        description: 'Livemusik och brittisk pubstil mitt i Nice',
      },
      {
        name: 'Le Bar du Negresco',
        description: 'Elegant miljö i klassiskt lyxhotell',
      },
    ],
    clubs: [
      {
        name: 'High Club',
        description: 'Modern nattklubb med internationell EDM och pop',
      },
      { name: 'Le Six', description: 'Mindre klubb med exklusiv loungekänsla' },
      { name: 'Le Glam', description: 'HBTQ-vänlig klubb med temakvällar' },
    ],
  },

  // 24) Kreta
  Kreta: {
    restaurants: [
      {
        name: 'Avli',
        description:
          'Gourmetrestaurang med venetiansk innergård och kretensiska rätter',
      },
      {
        name: 'Peskesi',
        description: 'Traditionellt kök med egna ekologiska produkter',
      },
      {
        name: 'Thalassinos Kosmos',
        description: 'Havsnära fiskrestaurang med färsk fångst',
      },
    ],
    bars: [
      {
        name: 'Platanos Jazz Bar',
        description: 'Lugn kvällsmiljö med jazz och cocktailmeny',
      },
      {
        name: 'Swing Thing',
        description: 'Retroinspirerad bar med 50-talskänsla',
      },
      {
        name: 'El Mondo',
        description: 'Sen kvällsbar med modern loungeatmosfär',
      },
    ],
    clubs: [
      {
        name: 'Palm Beach Club',
        description: 'Populär klubb i Hersonissos med pool och DJ-bås',
      },
      {
        name: 'New York Beach Club',
        description: 'Högt tempo, internationella DJ:s och strandläge',
      },
      {
        name: 'Amnesia Club',
        description: 'Energisk nattklubb med fokus på elektronisk musik',
      },
    ],
  },

  // 25) Monaco
  Monaco: {
    restaurants: [
      {
        name: 'Le Louis XV – Alain Ducasse',
        description: 'Tre Michelinstjärnor i Hôtel de Paris',
      },
      {
        name: 'Café de Paris',
        description: 'Klassisk brasserie stil mittemot kasinot',
      },
      { name: 'Yoshi', description: 'Japansk fine dining i Hotel Métropole' },
    ],
    bars: [
      {
        name: 'Le Bar Américain',
        description: 'Chic Art Deco-bar med jazz och cocktails',
      },
      {
        name: 'Jack Monaco',
        description: 'Cocktailbar med loungekänsla vid hamnen',
      },
      {
        name: 'Nikki Beach Monte Carlo',
        description: 'Takbar med pool, DJ:s och havsutsikt',
      },
    ],
    clubs: [
      {
        name: 'Jimmy’z Monte-Carlo',
        description: 'Ikonisk nattklubb för jetset-fest',
      },
      {
        name: 'Sass Café',
        description: 'Klubb, restaurang och pianobar i ett',
      },
      {
        name: 'Twiga',
        description: 'Exklusivt strandläge med internationella DJ:s',
      },
    ],
  },

  // 26) Malta
  Malta: {
    restaurants: [
      {
        name: 'Barracuda',
        description: 'Medelhavs- och fiskrätter i historisk byggnad',
      },
      {
        name: 'Ta’ Kris',
        description: 'Maltiska husmansrätter i en gammal bagerilokal',
      },
      {
        name: 'Rubino',
        description:
          'En av Vallettas äldsta restauranger med traditionell meny',
      },
    ],
    bars: [
      {
        name: 'Hugo’s Terrace',
        description: 'Takbar i Paceville med havsutsikt och DJ',
      },
      { name: 'Bridge Bar', description: 'Vinbar med jazzkvällar i Valletta' },
      {
        name: 'Trabuxu Wine Bar',
        description: 'Stenvalvsmiljö med brett vinutbud',
      },
    ],
    clubs: [
      {
        name: 'Gianpula Village',
        description: 'Flera utomhusklubbar i ett, strax utanför Mdina',
      },
      {
        name: 'Club Axis',
        description: 'Stor klubb i Paceville med olika musikstilar',
      },
      {
        name: 'So City Club',
        description: 'Populär bland lokalbefolkning och turister för dans',
      },
    ],
  },

  // 27) Cannes
  Cannes: {
    restaurants: [
      {
        name: 'La Palme d’Or',
        description: 'Tvåstjärnig Michelin i Hotel Martinez',
      },
      {
        name: 'Astoux et Brun',
        description: 'Skaldjursinstitution nära hamnen',
      },
      {
        name: 'Bobo Bistro',
        description: 'Trendigt ställe med organisk mat och internationell meny',
      },
    ],
    bars: [
      {
        name: 'L’Épicurieux',
        description: 'Vinbar med tapas och delikatesser',
      },
      {
        name: 'JW Grill Bar',
        description: 'Cocktails och Riviera-utsikt på Croisetten',
      },
      {
        name: 'Le Bar à Vin',
        description: 'Populärt för vinprovning och ostar',
      },
    ],
    clubs: [
      {
        name: 'Gotha Club',
        description: 'Stora DJ-namn under filmfestival och sommar',
      },
      { name: 'Baoli', description: 'Lyxig klubb/restaurant i Port Canto' },
      { name: 'Chrystie', description: 'Exklusiv och intim klubbmiljö' },
    ],
  },

  // 28) Helsingfors
  Helsingfors: {
    restaurants: [
      {
        name: 'Restaurant Olo',
        description: 'Modern nordisk fine dining med Michelin-stjärna',
      },
      {
        name: 'Löyly',
        description: 'Bastu- och restaurangkomplex vid vattnet',
      },
      {
        name: 'Juttutupa',
        description: 'Historisk krog med traditionell finsk husmanskost',
      },
    ],
    bars: [
      {
        name: 'Liberty or Death',
        description: 'Innovativ cocktailbar med experimentella smaker',
      },
      {
        name: 'Sori Taproom',
        description: 'Hantverksöl och avslappnad stämning',
      },
      {
        name: 'Ateljee Bar',
        description: 'Takbar med panorama över Helsingfors',
      },
    ],
    clubs: [
      { name: 'Kaiku', description: 'Elektronisk musik i industriell miljö' },
      {
        name: 'Tavastia',
        description: 'Legendarisk rockklubb och konsertlokal',
      },
      {
        name: 'Maxine',
        description: 'Utsikt över stan och kommersiellt dansgolv',
      },
    ],
  },

  // 29) Köpenhamn
  Köpenhamn: {
    restaurants: [
      {
        name: 'Noma',
        description: 'Flera gånger utsedd till världens bästa restaurang',
      },
      {
        name: 'Kødbyens Fiskebar',
        description: 'Trendig fisk- och skaldjursrestaurang i slakthusområdet',
      },
      {
        name: 'Host',
        description: 'Nordiska råvaror i rustik och stilren miljö',
      },
    ],
    bars: [
      { name: 'Ruby', description: 'Elegant cocktailbar i historisk byggnad' },
      { name: 'Warpigs', description: 'Mikrobryggeri och BBQ i Kødbyen' },
      {
        name: '1105',
        description: 'Liten cocktailbar med prisbelönta bartendrar',
      },
    ],
    clubs: [
      {
        name: 'Culture Box',
        description: 'Elektronisk musik och internationella DJ:s',
      },
      { name: 'KB3', description: 'Industriell nattklubb i Kødbyen' },
      {
        name: 'Chateau Motel',
        description: 'Flera våningar med olika musikgenrer',
      },
    ],
  },

  // 30) Berlin
  Berlin: {
    restaurants: [
      {
        name: 'CODA Dessert Bar',
        description: 'Innovativ dessertrestaurang med Michelin-stjärna',
      },
      {
        name: 'Nobelhart & Schmutzig',
        description: 'Modern tysk fine dining med lokala råvaror',
      },
      {
        name: 'Mustafas Gemüse Kebap',
        description: 'Berlins mest kända kebabstånd med legendarisk status',
      },
    ],
    bars: [
      {
        name: 'Klunkerkranich',
        description: 'Takbar med urban odling och fantastisk utsikt',
      },
      {
        name: 'Green Door Bar',
        description: 'Klassisk cocktailbar med speakeasy-känsla',
      },
      {
        name: 'Buck & Breck',
        description: 'Exklusiv cocktailbar med endast 14 platser',
      },
    ],
    clubs: [
      {
        name: 'Berghain',
        description: 'Världsberömd technoklubb i före detta kraftverk',
      },
      { name: 'Watergate', description: 'Klubb med terrass över floden Spree' },
      {
        name: 'Tresor',
        description: 'Legendarisk technoklubb i en gammal bankvalv',
      },
    ],
  },

  // 31) Amsterdam
  Amsterdam: {
    restaurants: [
      {
        name: 'De Kas',
        description: 'Restaurang i ett växthus med egen odling',
      },
      {
        name: 'Ciel Bleu',
        description: 'Två Michelin-stjärnig restaurang med stadsvy',
      },
      {
        name: 'Foodhallen',
        description: 'Modern food court med internationella kök',
      },
    ],
    bars: [
      {
        name: 'Tales & Spirits',
        description: 'Prisbelönt cocktailbar i historisk miljö',
      },
      {
        name: 'Door 74',
        description: 'Exklusiv speakeasy bar med reservationskrav',
      },
      {
        name: 'SkyLounge Amsterdam',
        description: 'Takbar med 360-graders utsikt över staden',
      },
    ],
    clubs: [
      { name: 'De School', description: '24-timmars klubb i en gammal skola' },
      {
        name: 'Shelter',
        description: "Underground technoklubb under A'DAM Tower",
      },
      {
        name: 'Paradiso',
        description: 'Legendarisk klubb i en tidigare kyrka',
      },
    ],
  },

  // 32) Milano
  Milano: {
    restaurants: [
      {
        name: 'Langosteria',
        description: 'Exklusiv fisk- och skaldjursrestaurang',
      },
      {
        name: 'Ratanà',
        description: 'Modern tolkning av milanesisk mat i historisk byggnad',
      },
      {
        name: 'Trippa',
        description: 'Trendig trattoria känd för sina kött- och pastarätter',
      },
    ],
    bars: [
      {
        name: 'Nottingham Forest',
        description: 'Prisad cocktailbar med kreativa serveringar',
      },
      {
        name: 'Bar Basso',
        description: 'Födelseplatsen för Negroni Sbagliato',
      },
      {
        name: 'Terrazza Aperol',
        description: 'Utsikt över Duomo och aperitivo i solnedgång',
      },
    ],
    clubs: [
      { name: 'Alcatraz', description: 'Stort konsert- och klubbkomplex' },
      {
        name: 'Old Fashion',
        description: 'Klubb i Parco Sempione med utomhusterrass',
      },
      {
        name: 'Plastic',
        description: 'Historisk nattklubb med eklektisk musikscen',
      },
    ],
  },

  // 33) Phuket
  Phuket: {
    restaurants: [
      {
        name: 'Blue Elephant',
        description: 'Klassisk thailändsk fine dining i kolonial byggnad',
      },
      {
        name: 'Mor Mu Dong',
        description: 'Lokal fiskrestaurang i mangroveskog',
      },
      {
        name: 'Kan Eang @ Pier',
        description: 'Skaldjur vid vattnet med grillad färsk fisk',
      },
    ],
    bars: [
      {
        name: "Skyla's Beach House",
        description: 'Avspänd strandbar i Kamala',
      },
      {
        name: 'Sunset Bar',
        description: 'Populärt ställe för sundowners i Patong',
      },
      {
        name: 'Seduction Beach Club & Disco',
        description: 'Stort komplex med dansgolv och takterrass',
      },
    ],
    clubs: [
      {
        name: 'Illuzion',
        description: 'Megaklubb på Bangla Road med internationella DJ:s',
      },
      {
        name: 'White Room Nightclub',
        description: 'Modern inredning och kommersiella hits',
      },
      {
        name: 'Tiger Nightclub',
        description: 'Unik grottliknande design och flera barer',
      },
    ],
  },

  // 34) Maldives
  Maldives: {
    restaurants: [
      {
        name: 'Ithaa Undersea Restaurant',
        description:
          'Unik undervattensrestaurang med panoramavy av marina livet',
      },
      {
        name: 'Sea.Fire.Salt.Sky.',
        description: 'Fusionskoncept på Anantara Kihavah-resorten',
      },
      {
        name: 'Muraka Restaurant',
        description: 'Mald/asiatisk gourmet med havsutsikt',
      },
    ],
    bars: [
      { name: 'Subsix', description: 'Undervattensbar med korallrev runtom' },
      {
        name: 'Sunset Bar @ Soneva Fushi',
        description: 'Exklusiv strandbar, perfekt för solnedgång',
      },
      {
        name: 'Chill Lounge & Bar',
        description: 'Relaxad stämning på vattnet i övervattensvillor',
      },
    ],
    clubs: [
      {
        name: '15 Below',
        description: 'Nattklubb under markplan i W Maldives',
      },
      {
        name: 'Club Med Kani',
        description: 'All-inclusive resort med strandfester',
      },
      {
        name: 'Finolhu Beach Club',
        description: 'Livemusik, DJ och temakvällar i modern retrostil',
      },
    ],
  },

  // 35) Bora Bora
  'Bora Bora': {
    restaurants: [
      {
        name: 'La Villa Mahana',
        description: 'Finare fransk-polynesisk fusion i intim miljö',
      },
      {
        name: 'Bloody Mary’s',
        description: 'Ikonisk bar och grill med sandgolv och färska råvaror',
      },
      {
        name: 'St. James Restaurant',
        description: 'Marin utsikt och elegant gastronomi',
      },
    ],
    bars: [
      { name: 'Uaina Bar', description: 'Vinbar med polynesisk inredning' },
      {
        name: 'Manu Tuki Bar',
        description: 'Stråtak och tropiska cocktails vid vattnet',
      },
      {
        name: 'Fare Hoa Beach Bar',
        description: 'Avslappnad strandbar på Four Seasons Resort',
      },
    ],
    clubs: [
      {
        name: 'Le Récif',
        description: 'En av få nattklubbar på Bora Bora, lokalt fokus',
      },
      {
        name: 'Mambo Bora Bora',
        description: 'Dans och polynesisk musik, laid-back atmosfär',
      },
      {
        name: 'Club Extase',
        description: 'Tillfälliga pop-up fester under högsäsong',
      },
    ],
  },

  // 36) Hawaii
  Hawaii: {
    restaurants: [
      {
        name: 'Mama’s Fish House',
        description: 'Lokal fångst och hawaiianska specialiteter på Maui',
      },
      {
        name: 'Alan Wong’s',
        description: 'Prisbelönt fusion på Oahu med lokal touch',
      },
      {
        name: 'Merriman’s',
        description: 'Farm-to-table med havsutsikt, finns på flera öar',
      },
    ],
    bars: [
      {
        name: 'Duke’s Waikiki',
        description: 'Klassisk surfbar och restaurang vid stranden',
      },
      {
        name: 'Mai Tai Bar',
        description: 'Utsikt över Diamond Head och specialcocktails',
      },
      {
        name: 'Arnold’s Beach Bar',
        description: 'Äkta tiki-känsla och live-musik',
      },
    ],
    clubs: [
      {
        name: 'Sky Waikiki',
        description: 'Takklubb med DJ:s och Honolulu skyline',
      },
      {
        name: 'NextDoor',
        description: 'Urban klubb och konsertscen i Chinatown',
      },
      {
        name: 'The District',
        description: 'Populärt dansgolv med hiphop och Top 40',
      },
    ],
  },

  // 37) Fiji
  Fiji: {
    restaurants: [
      {
        name: 'Ports O’ Call',
        description: 'Fine dining med kolonial atmosfär i Denarau',
      },
      {
        name: 'Wicked Walu',
        description: 'Havsinspirerade rätter på en liten ö vid Warwick Resort',
      },
      {
        name: 'EcoCafe Fiji',
        description: 'Italiensk-fijiansk mix, ofta med lokala råvaror',
      },
    ],
    bars: [
      {
        name: 'Blu Bar @ Radisson Blu',
        description: 'Poolbar med tropiska drinkar och havsbris',
      },
      {
        name: 'The Bilo Bar',
        description: 'Enkel, genuin strandbar med kokosnötsdrinkar',
      },
      {
        name: 'Cloud 9',
        description: 'Flytande bar mitt i havet, känd för DJ-sets',
      },
    ],
    clubs: [
      {
        name: 'Ice Bar Fiji',
        description:
          'Nattklubb i Nadi med lokal musik och internationella hits',
      },
      {
        name: 'Purple Haze',
        description: 'Populärt helgställe med reggaeton och RnB',
      },
      {
        name: 'White House Club',
        description: 'Sen fest med blandad publik i Suva',
      },
    ],
  },

  // 38) Punta Cana
  'Punta Cana': {
    restaurants: [
      {
        name: 'La Yola',
        description: 'Mediterrant och karibiskt kök i marinamiljö',
      },
      {
        name: 'Passion By Martin Berasategui',
        description: 'Fine dining med spansk touch på Paradisus Resort',
      },
      {
        name: 'Wacamole',
        description: 'Avslappnad mexikansk streetfood nära stranden',
      },
    ],
    bars: [
      {
        name: 'Drink Point',
        description: 'Populär bar/klubb för bachata och merengue',
      },
      {
        name: 'Soles Chill Out Bar',
        description: 'Strandbar med avslappnat loungekoncept',
      },
      {
        name: 'Onno’s Bavaro',
        description: 'Musik, cocktails och enklare bites till sen kväll',
      },
    ],
    clubs: [
      {
        name: 'Coco Bongo Punta Cana',
        description: 'Spektakulära shower och nattklubbsmiljö',
      },
      {
        name: 'Imagine Punta Cana',
        description: 'Klubb i en naturgrotta, unikt koncept',
      },
      {
        name: 'Oro Nightclub',
        description: 'Lyxig klubb på Hard Rock Hotel & Casino',
      },
    ],
  },

  // 39) Seychellerna
  Seychellerna: {
    restaurants: [
      {
        name: 'Marie Antoinette',
        description: 'Kreolsk husmanskost i historisk byggnad',
      },
      {
        name: 'La Scala',
        description: 'Italienskt med havsutsikt i Bel Ombre',
      },
      {
        name: 'Del Place Bar and Restaurant',
        description: 'Strandnära, färsk fisk och grillat',
      },
    ],
    bars: [
      {
        name: 'Beach Shak',
        description: 'Liten surfkänsla med färska juicer och romdrinkar',
      },
      {
        name: 'Katiolo',
        description: 'Äldre nattklubb/bar med lokal kreolmusik',
      },
      {
        name: 'Ocean View Bar @ Savoy',
        description: 'Resortbar med pool och loungestämning',
      },
    ],
    clubs: [
      {
        name: 'Tequila Boom',
        description: 'Populärt bland turister, blandad musik',
      },
      {
        name: 'Barrel Nightclub',
        description: 'En av få klubbar på Mahé, lokalt klientel',
      },
      { name: 'Level 3 Bar', description: 'Cocktails och DJ i modern miljö' },
    ],
  },

  // 40) Bali
  Bali: {
    restaurants: [
      { name: 'Locavore', description: 'Farm-to-table fine dining i Ubud' },
      {
        name: 'Sarong',
        description: 'Asiatisk fusion i chic miljö i Seminyak',
      },
      {
        name: 'Babi Guling Pak Malen',
        description: 'Klassisk balinesisk helgrillad grisrätt',
      },
    ],
    bars: [
      {
        name: 'La Plancha',
        description: 'Färgglada strandstolar och avslappnad surfkänsla',
      },
      {
        name: 'Rock Bar Bali',
        description: 'Dramatisk klippbar med hiss ner från Ayana Resort',
      },
      {
        name: 'Potato Head Beach Club',
        description: 'Pool, DJ och solnedgångspartyn',
      },
    ],
    clubs: [
      {
        name: 'ShiShi',
        description: 'Flera våningar med olika musikgenrer i Seminyak',
      },
      {
        name: 'Sky Garden',
        description: 'Megaklubb i Kuta med buffé och takterrass',
      },
      {
        name: 'Mirror Lounge & Club',
        description: 'Gotisk interiör med laser- och EDM-fester',
      },
    ],
  },

  // 41) Boracay
  Boracay: {
    restaurants: [
      {
        name: 'Lemoni Café',
        description: 'Fräscha rätter och bakverk, populärt för frukost',
      },
      {
        name: "Tilapia 'N Chips",
        description: 'Filippinsk-engelsk fish & chips med lokala twist',
      },
      {
        name: 'Aria Cucina Italiana',
        description: 'Italiensk mat vid White Beach station 2',
      },
    ],
    bars: [
      {
        name: 'Cocomangas Shooter Bar',
        description: 'Legendariska shots och nattliga tävlingar',
      },
      {
        name: 'Exit Bar',
        description: 'Liten men populär bar för backpackers och lokala',
      },
      {
        name: 'Epic Boracay',
        description: 'Strandbar som förvandlas till klubb nattetid',
      },
    ],
    clubs: [
      { name: 'Club Galaxy', description: 'Modern nattklubb med RnB och EDM' },
      {
        name: 'Prisma',
        description: 'Cocktailfokuserad klubbbar med pool-omgivning',
      },
      {
        name: 'Summer Place',
        description: 'Livemusik, DJ:s och dansgolv vid stranden',
      },
    ],
  },

  // 42) Santorini
  Santorini: {
    restaurants: [
      {
        name: 'Metaxy Mas',
        description: 'Grekisk meze med fantastisk utsikt i Exo Gonia',
      },
      {
        name: 'Argo Restaurant',
        description: 'Romantisk utsikt över calderan, fusiongrekiskt',
      },
      {
        name: 'Naoussa Restaurant',
        description: 'Familjär taverna med traditionella rätter',
      },
    ],
    bars: [
      {
        name: 'PK Cocktail Bar',
        description: 'Fira-kustens bästa solnedgångsdrinkar',
      },
      {
        name: 'Tango Champagne & Cocktail Bar',
        description: 'Lyxig lounge med DJ och bubbel',
      },
      {
        name: 'Two Brothers Bar',
        description: 'Partyställe i Fira, känt för livliga nätter',
      },
    ],
    clubs: [
      {
        name: 'Enigma Club',
        description: 'En av Santorinis äldsta klubbar, centralt i Fira',
      },
      {
        name: 'Koo Club',
        description: 'Stor utomhusdel, populärt för sommarfester',
      },
      {
        name: 'Highlander',
        description: 'Skotskt tema, men internationell musikmix',
      },
    ],
  },

  // 43) Mykonos
  Mykonos: {
    restaurants: [
      {
        name: 'Scorpios',
        description: 'Bohemisk strandrestaurang med medelhavsköket',
      },
      {
        name: 'Hippie Fish',
        description: 'Strandrestaurang med färsk fisk och skaldjur',
      },
      {
        name: 'Krama',
        description: 'Modern grekisk fine dining med havsutsikt',
      },
    ],
    bars: [
      {
        name: '180° Sunset Bar',
        description: 'Exklusiv bar med panoramautsikt över solnedgången',
      },
      {
        name: 'Skandinavian Bar',
        description: 'Populär bar i Mykonos stad med dansgolv',
      },
      {
        name: 'Astra',
        description: 'Sofistikerad cocktailbar som blir nattklubb',
      },
    ],
    clubs: [
      {
        name: 'Cavo Paradiso',
        description: 'Ikonisk utomhusklubb på en klippa',
      },
      {
        name: 'Super Paradise Beach Club',
        description: 'Legendarisk strandklubb med DJs',
      },
      {
        name: 'Paradise Club',
        description: 'Stor nattklubb med internationella DJs',
      },
    ],
  },

  // 44) Costa Adeje
  'Costa Adeje': {
    restaurants: [
      { name: 'La Nonna', description: 'Italienskt med kanariska influenser' },
      {
        name: 'El Rincón de Juan Carlos',
        description: 'Michelinstjärnig kreativ kanarisk gastronomi',
      },
      { name: 'Restaurant 88', description: 'Asiatisk fusion med havsutsikt' },
    ],
    bars: [
      {
        name: 'Kaluna Beach Club',
        description: 'Dag- och nattfester med pool och utsikt',
      },
      {
        name: 'Coqueluche Beach Bar',
        description: 'Chill strandbar med liveakustik',
      },
      {
        name: 'Monkey Beach Club',
        description: 'Populärt ställe vid Playa de Troya',
      },
    ],
    clubs: [
      {
        name: 'Achaman Discopub',
        description: 'Kanariska och latinamerikanska rytmer',
      },
      {
        name: 'Envy Tenerife',
        description: 'Cocktailklubb med internationella DJ:s',
      },
      {
        name: 'Tramps The King',
        description: 'Systerklubb till den i Playa de las Américas',
      },
    ],
  },

  // 45) Langkawi
  Langkawi: {
    restaurants: [
      {
        name: 'FatCUPID',
        description: 'Malaysiska och västerländska rätter i hemtrevlig miljö',
      },
      {
        name: 'Orkid Ria Seafood',
        description: 'Populär för färsk fisk och skaldjur vid Cenang Beach',
      },
      {
        name: 'Kayu Puti',
        description: 'Fusion fine dining på St. Regis med havsutsikt',
      },
    ],
    bars: [
      {
        name: 'Yellow Café',
        description: 'Strandbar med avslappnad vibe och färgglad inredning',
      },
      {
        name: 'The Cliff Bar',
        description: 'Upphöjt läge med panoramautsikt över havet',
      },
      {
        name: 'Marus Bar',
        description: 'Romantisk solnedgångsbar med loungemusik',
      },
    ],
    clubs: [
      {
        name: 'Sunba Retro Bar',
        description: 'Dansgolv med retrohits och lokala DJ:s',
      },
      {
        name: 'Eagle Rock Café',
        description: 'Rock- och livemusik med enklare klubbkänsla',
      },
      {
        name: 'Xinxin Club',
        description: 'Kinesisk-influerad bar/klubb med karaoke och EDM',
      },
    ],
  },

  // 46) Gili Islands
  'Gili Islands': {
    restaurants: [
      {
        name: 'Pituq',
        description: 'Vegansk och hälsomedveten mat med lokal touch',
      },
      {
        name: 'The Banyan Tree',
        description: 'Fräsch frukost och brunch nära strandkanten',
      },
      {
        name: 'Scallywags Seafood Bar & Grill',
        description: 'Grillat färskt fisk- och skaldjurskoncept',
      },
    ],
    bars: [
      {
        name: 'Sama Sama Reggae Bar',
        description: 'Livemusik med reggae runt lägereld på stranden',
      },
      {
        name: 'Gili Teak Beach Club',
        description: 'Strandbar med avslappnad atmosfär och loungemusik',
      },
      {
        name: 'Tir Na Nog',
        description: 'Irländsk pubstil med tropisk twist och nattlig fest',
      },
    ],
    clubs: [
      {
        name: 'Evolution Bar',
        description: 'Dansgolv under stjärnorna på Gili Trawangan',
      },
      {
        name: 'Jiggy Bar',
        description: 'Kända båt- och skumpartyn, ungt klientel',
      },
      {
        name: 'Surf Bar Gili Air',
        description: 'Mer laidback klubbkänsla med surftema',
      },
    ],
  },

  // 47) Phi Phi Islands
  'Phi Phi Islands': {
    restaurants: [
      {
        name: 'Anna’s Restaurant',
        description: 'Internationella rätter och thailändska favoriter',
      },
      {
        name: 'Efe Mediterranean',
        description: 'Turkisk-mediterrant i hjärtat av Tonsai',
      },
      {
        name: "Unni's",
        description: 'Populärt frukost- och lunchställe med fusionmeny',
      },
    ],
    bars: [
      {
        name: 'Sunflower Beach Bar',
        description: 'Rustik träinredning, idealisk för solnedgångsdrink',
      },
      {
        name: 'Carlito’s Beach Bar',
        description: 'Flairtending och eldshower, strandläge',
      },
      {
        name: 'Reggae Bar',
        description: 'Känd för thaiboxningsring där turister kan prova på',
      },
    ],
    clubs: [
      {
        name: 'Slinky Beach Bar',
        description: 'Klubbkänsla på stranden med eld- och jongleringsshower',
      },
      {
        name: 'Ibiza Beach Club',
        description: 'Poolpartyn och DJs på dag och natt',
      },
      {
        name: 'Apache Beach Club',
        description: 'Sen nattfest med EDM och högt tempo',
      },
    ],
  },

  // 48) Krabi
  Krabi: {
    restaurants: [
      {
        name: 'Carnivore Steak & Grill',
        description: 'Vällagad västerländsk grillmat nära Ao Nang',
      },
      {
        name: 'Ton Ma Yom',
        description: 'Äkta thailändska rätter i enkel miljö',
      },
      {
        name: 'Jungle Kitchen',
        description: 'Hemlagad känsla bland palmer och grönska',
      },
    ],
    bars: [
      { name: 'Boogie Bar', description: 'Livemusik och cocktails i Ao Nang' },
      {
        name: 'Roots Rock Reggae Bar',
        description: 'Reggaevibbar och biljardbord, avslappnat',
      },
      {
        name: 'Freedom Bar Railay',
        description: 'Klättrar- och backpackerbar med eldshower',
      },
    ],
    clubs: [
      {
        name: 'Chang Bar',
        description: 'Nattklubb med blandad musik, nära Ao Nang-stranden',
      },
      {
        name: 'Luna Bar',
        description: 'Strandklubbkänsla med ljusshow och internationell musik',
      },
      {
        name: 'Roots Dance Hall',
        description: 'Fokus på dancehall och reggae, populärt bland unga',
      },
    ],
  },

  // 49) Koh Samui
  'Koh Samui': {
    restaurants: [
      {
        name: 'Zazen Restaurant',
        description: 'Romantisk setting med fransk-thailändsk fusion',
      },
      {
        name: 'Barracuda Restaurant',
        description: "Medelhavsmat med lokala råvaror i Fisherman's Village",
      },
      {
        name: 'Jungle Club',
        description: 'Utsikt över Chaweng, rustika träplattformar',
      },
    ],
    bars: [
      {
        name: 'Ark Bar',
        description: 'Strandbar med dagliga poolpartyn och DJs',
      },
      {
        name: 'Coco Tams',
        description: 'Säckstolar på stranden, eldshower på kvällen',
      },
      {
        name: 'On Street Bar',
        description: 'Litet och avslappnat ställe med livemusik',
      },
    ],
    clubs: [
      {
        name: 'Green Mango Club',
        description: 'Ikonisk open-air klubb i Chaweng med flera dansgolv',
      },
      {
        name: 'Sound Club',
        description: 'Modern inredning och EDM-fokus i Lamai',
      },
      {
        name: 'Bar Solo',
        description: 'Förfest- och efterfest-spot nära nattmarknaden',
      },
    ],
  },

  // 50) Tulum
  Tulum: {
    restaurants: [
      {
        name: 'Hartwood',
        description: 'Vedeldad, ekologisk matlagning i djungelmiljö',
      },
      {
        name: 'Gitano',
        description: 'Mexikansk fusion med en lummig trädgårdsbar',
      },
      {
        name: 'Antojitos La Chiapaneca',
        description: 'Genuin tacoståndsupplevelse i Tulum Pueblo',
      },
    ],
    bars: [
      {
        name: 'Batey Mojito & Guarapo Bar',
        description: 'Kända för mojitos pressade från sockerrör',
      },
      {
        name: 'Pasito Tun Tun',
        description: 'Chill loungebar med gungstolar och bra musik',
      },
      {
        name: 'Papaya Playa Project',
        description: 'Strandbarer som arrangerar stora fullmånefester',
      },
    ],
    clubs: [
      {
        name: 'Casa Jaguar',
        description: 'Torsdagsfester med DJ:s och jungeltema',
      },
      {
        name: 'Gitano Jungle',
        description: 'Fredagsfest med discolampor i djungeln',
      },
      {
        name: 'Vagalume Beach Club',
        description: 'Ljudsystem och dansgolv i sanden',
      },
    ],
  },

  // 51) Puerto Vallarta
  'Puerto Vallarta': {
    restaurants: [
      {
        name: 'Café des Artistes',
        description: 'Fine dining med franskinfluerad mexikansk gourmet',
      },
      {
        name: 'Pancho’s Takos',
        description: 'Berömt gatumatställe för tacos al pastor',
      },
      {
        name: 'El Arrayán',
        description: 'Autentiska mexikanska rätter i kolonial innergård',
      },
    ],
    bars: [
      {
        name: 'El Colibrí',
        description: 'Takbar i Zona Romántica med cocktails och utsikt',
      },
      {
        name: 'Bar Morelos Mezcaleria',
        description: 'Specialiserad på tequila och mezcalprovningar',
      },
      {
        name: 'Paco’s Ranch',
        description: 'HBTQ-vänligt dansgolv med dragshows',
      },
    ],
    clubs: [
      {
        name: 'Mandala Puerto Vallarta',
        description: 'Systerklubb till Cancúns koncept, internationell musik',
      },
      {
        name: 'La Santa',
        description: 'Exklusiv klubb med poolsektion och EDM',
      },
      {
        name: 'Strana',
        description: 'Katedral-liknande inredning, imponerande ljusshow',
      },
    ],
  },

  // 52) Cabo San Lucas
  'Cabo San Lucas': {
    restaurants: [
      {
        name: 'Edith’s',
        description: 'Mexikansk-amerikansk fusion med romantisk atmosfär',
      },
      {
        name: 'The Office on the Beach',
        description: 'Avslappnad strandrestaurang med fötterna i sanden',
      },
      {
        name: 'El Farallón',
        description: 'Färska skaldjur direkt vid klippkanten på resort',
      },
    ],
    bars: [
      {
        name: 'Cabo Wabo Cantina',
        description: 'Grundad av rocklegendaren Sammy Hagar, livemusik',
      },
      {
        name: 'Nowhere Bar',
        description: 'Populärt för förfest, mitt i Marina Cabo',
      },
      {
        name: 'Happy Ending Cantina',
        description: 'Billiga öl och tequilashots, enkel stämning',
      },
    ],
    clubs: [
      {
        name: 'El Squid Roe',
        description: 'Kultförklarad klubb med dans på borden',
      },
      {
        name: 'Mandala Los Cabos',
        description: 'Sydlig systerklubb till Mandala-kedjan',
      },
      {
        name: 'La Vaquita',
        description: 'Temafester och maskot i form av en jätte-ko',
      },
    ],
  },

  // 53) South Beach
  'South Beach': {
    restaurants: [
      {
        name: 'Joe’s Stone Crab',
        description: 'Legendarisk seafood, särskilt känd för krabbklor',
      },
      {
        name: 'Yardbird Southern Table & Bar',
        description: 'Sydstatskök med modern Miami-twist',
      },
      {
        name: 'Puerto Sagua',
        description: 'Klassisk kubansk diner öppen sent',
      },
    ],
    bars: [
      {
        name: 'The Clevelander',
        description: 'Partybar vid poolen med live-DJs',
      },
      {
        name: 'Nikki Beach',
        description: 'Kombinerad strandklubb och bar med solsängar',
      },
      {
        name: 'Mac’s Club Deuce',
        description: 'Dygnsöppen dive bar, en ikon i SoBe',
      },
    ],
    clubs: [
      {
        name: 'Mango’s Tropical Café',
        description: 'Latinska rytmer, liveshow och färgstark miljö',
      },
      {
        name: 'LIV',
        description:
          'Sydfloridas mest glamorösa klubb, belägen i Fontainebleau',
      },
      {
        name: 'Story',
        description: 'Megaklubb med internationella DJ-bokningar',
      },
    ],
  },

  // 54) Key West
  'Key West': {
    restaurants: [
      {
        name: 'Blue Heaven',
        description:
          'Kycklingar som springer fritt, avslappnad karibisk stämning',
      },
      {
        name: 'Latitudes',
        description: 'Lyxig upplevelse på Sunset Key med havsutsikt',
      },
      {
        name: 'El Siboney',
        description: 'Kubansk husmanskost älskad av lokalbor',
      },
    ],
    bars: [
      {
        name: 'Green Parrot Bar',
        description: 'Äldsta baren i Key West, ofta livemusik',
      },
      {
        name: 'Sloppy Joe’s',
        description: 'Legendarisk bar med Hemingway-anknytning',
      },
      {
        name: 'Fat Tuesday',
        description: 'Frosé och fest i frozen daiquiri-format',
      },
    ],
    clubs: [
      {
        name: 'Irish Kevin’s',
        description: 'Bar/klubb med liveunderhållning och publikinteraktion',
      },
      {
        name: '801 Bourbon Bar',
        description: 'Känd för dragshows och Mardi Gras-stämning',
      },
      {
        name: 'Aqua Nightclub',
        description: 'Draguppträdanden, karaoke och dansgolv',
      },
    ],
  },

  // 55) Aruba
  Aruba: {
    restaurants: [
      {
        name: 'Papiamento Restaurant',
        description: 'Karibisk/Arubansk mat i en kolonial herrgård',
      },
      {
        name: 'Madame Janette',
        description: 'Internationell gourmet i utomhusmiljö',
      },
      {
        name: 'Zeerover',
        description: 'Färsk fångst och lokala rätter i enkel hamnservering',
      },
    ],
    bars: [
      {
        name: 'MooMba Beach Bar',
        description: 'Strandbar med palmtak och direkt sand under fötterna',
      },
      {
        name: 'Gusto Night Club Aruba',
        description: 'Cocktails och dansgolv för sena kvällar',
      },
      {
        name: 'Lucy’s Retired Surfers Bar & Restaurant',
        description: 'Surf-inspirerad bar med tex-mex meny',
      },
    ],
    clubs: [
      { name: 'Sand Bar', description: 'Nattliga DJ-set vid Eagle Beach' },
      {
        name: 'Confessions Night Club',
        description: 'Elegant nattklubb med VIP-områden',
      },
      {
        name: 'E Motions Nightclub',
        description: 'Latinsk musik och internationella hits',
      },
    ],
  },

  // 56) Curacao
  Curacao: {
    restaurants: [
      {
        name: 'Kome',
        description: 'Global comfort food med karibiska influenser',
      },
      {
        name: 'Restaurant Fishalicious',
        description: 'Färsk fisk och skaldjur, vinlista av hög klass',
      },
      {
        name: 'Plasa Bieu',
        description: 'Matmarknad med lokala specialiteter',
      },
    ],
    bars: [
      {
        name: 'Saint Tropez Ocean Club',
        description: 'Poolbar och lounge med havsutsikt',
      },
      {
        name: 'BijBlauw Bar',
        description: 'Trendig bar i Pietermaai-distriktet',
      },
      {
        name: 'Netto Bar',
        description: 'Känt för sin Ròm Bèrdè (grön rom) sedan 1954',
      },
    ],
    clubs: [
      {
        name: 'Mambo Beach Club',
        description: 'Populärt resort- och nattlivsområde vid stranden',
      },
      {
        name: '27 Curacao',
        description: 'Liveband och DJ, uppkallad efter 27 Club (rockstjärnor)',
      },
      {
        name: 'Club Spoonz',
        description: 'Elektroniska beats och temakvällar',
      },
    ],
  },

  // 57) Barbados
  Barbados: {
    restaurants: [
      {
        name: 'Oistins Fish Fry',
        description: 'Vibrerande matfest på fredagar med färsk fisk',
      },
      {
        name: 'The Cliff',
        description: 'Lyxig fine dining på en klippa över havet',
      },
      {
        name: 'Tapas',
        description: 'Medelhavs- och karibiska tapas vid strandpromenaden',
      },
    ],
    bars: [
      {
        name: 'Harbour Lights',
        description: 'Strandbar och nattklubb med liveshow',
      },
      {
        name: 'Mojo Bar & Grill',
        description: 'Rock-tema och lokala Banks-öl',
      },
      { name: 'Red Door Lounge', description: 'Chic cocktailbar i Holetown' },
    ],
    clubs: [
      { name: 'Priva', description: 'Lyxigt VIP-koncept för festsugna' },
      {
        name: 'Sugar Ultra Lounge',
        description: 'Mix av dansgolv och lounge för RnB, pop och soca',
      },
      {
        name: 'The Cove',
        description: 'Open-air dansgolv, perfekt för varma nätter',
      },
    ],
  },

  // 58) St. Lucia
  'St. Lucia': {
    restaurants: [
      {
        name: 'Dasheene at Ladera',
        description: 'Färsk, lokal karibisk mat med utsikt över Pitons',
      },
      { name: "Orlando's", description: 'Genuina kreolska rätter i Soufrière' },
      {
        name: 'Spice of India',
        description: 'Indisk fine dining i Rodney Bay',
      },
    ],
    bars: [
      {
        name: 'Jambe de Bois',
        description: 'Bar och bistro på Pigeon Island, historisk naturmiljö',
      },
      {
        name: "Matthew's Rooftop",
        description: 'Cocktails med panoramavy i Castries',
      },
      {
        name: 'Delirius',
        description: 'Populär bar i Rodney Bay med kreativ drinkmeny',
      },
    ],
    clubs: [
      {
        name: 'Verve',
        description: 'Klubb och lounge med DJ-spelningar i Rodney Bay',
      },
      { name: 'Ultra Lounge', description: 'Stilrent dansgolv och VIP-område' },
      {
        name: 'Rum Therapy Bar',
        description: 'Mer av en sen bar/klubb med reggae och soca',
      },
    ],
  },

  // 59) Turks and Caicos
  'Turks and Caicos': {
    restaurants: [
      {
        name: 'Coco Bistro',
        description: 'Mitt i en kokospalm-oas, karibisk gourmet',
      },
      {
        name: 'Bugaloos Conch Crawl',
        description: 'Färsk conch och fiskrätter på stranden',
      },
      {
        name: 'Caicos Cafe',
        description: 'Medelhavskreolsk meny nära Grace Bay',
      },
    ],
    bars: [
      {
        name: 'Somewhere Cafe and Lounge',
        description: 'Avslappnad tex-mex och strandbar',
      },
      {
        name: "Danny Buoy's",
        description: 'Pubkänsla med karaoke och sport på TV',
      },
      {
        name: 'Infiniti Bar @ Grace Bay Club',
        description: 'Lyxig loungebar med oändlig bartopp',
      },
    ],
    clubs: [
      {
        name: 'Club Pillows',
        description: 'En av få nattklubbar i Provo, mixad musik',
      },
      {
        name: 'Mini Golf Club',
        description: 'Lekfull kombination av minigolf och dansgolv',
      },
      {
        name: 'Sand Dollar Nite Club',
        description: 'Lokal vibe, öppet sent med soca och RnB',
      },
    ],
  },

  // 60) Belize
  Belize: {
    restaurants: [
      {
        name: "Elvi's Kitchen",
        description: 'Belizisk mat på sandgolv i San Pedro, Ambergris Caye',
      },
      {
        name: 'The Truck Stop',
        description: 'Food truck court med pizza, isglass och asiatisk mat',
      },
      {
        name: 'Celebrities Restaurant',
        description: 'Prisvärd karibisk och mexikansk fusion i Belize City',
      },
    ],
    bars: [
      {
        name: 'Palapa Bar & Grill',
        description: 'Flytande bar utanför Ambergris Cayes kust',
      },
      {
        name: 'Crazy Canucks Beach Bar',
        description: 'Horseshoe-turneringar, liveband och rum punch',
      },
      {
        name: 'Barrier Reef Sports Bar',
        description: 'Sport på storbildskärm, kall öl och sjöutsikt',
      },
    ],
    clubs: [
      {
        name: 'Daddy Rocks Nightclub',
        description: 'San Pedros främsta dansgolv, pop och reggaeton',
      },
      {
        name: 'La Paranda',
        description: 'Beliziska rytmer och cultural nights i Dangriga',
      },
      {
        name: 'E & L Sports Bar',
        description: 'Enklare klubbmiljö för lokala fester i Belize City',
      },
    ],
  },

  // 61) Tahiti
  Tahiti: {
    restaurants: [
      {
        name: 'Le Coco’s',
        description: 'Fransk-polynesisk fusionsmat med utsikt över lagunen',
      },
      {
        name: 'Le Lotus',
        description: 'Romantisk fine dining i övervattenpaviljong',
      },
      {
        name: 'Les Roulottes',
        description: 'Matvagnar på kajen i Papeete, lokal street food',
      },
    ],
    bars: [
      {
        name: 'Manava Pool Bar',
        description: 'Resortbar med poolkänsla och tropiska cocktails',
      },
      {
        name: 'Vai’are Bar',
        description: 'Avslappnad lounge i Sofitel Tahiti',
      },
      {
        name: 'Urban Café Tahiti',
        description: 'Modern takbar i centrala Papeete',
      },
    ],
    clubs: [
      {
        name: 'Le Retro',
        description:
          'Mix av polynesisk och internationell musik, populärt bland unga',
      },
      {
        name: 'Morrison’s Café',
        description: 'Bar/klubb med livemusik och dansgolv',
      },
      {
        name: 'Parad’Ice Disco',
        description: 'Nattklubb med temakvällar och lokala DJ:s',
      },
    ],
  },

  // 62) Moorea
  Moorea: {
    restaurants: [
      {
        name: 'Le K',
        description: 'Gourmet på InterContinental, fransk-polynesisk stil',
      },
      {
        name: 'Snack Mahana',
        description: 'Lokal fisk och grill, avslappnat vid strandkanten',
      },
      {
        name: 'Holy Steak House',
        description: 'Rejäl grillmeny i vacker bergsmiljö',
      },
    ],
    bars: [
      {
        name: 'Toatea Bar',
        description: 'Övervattensbar med crêpes och cocktails',
      },
      {
        name: 'Tipaniers Beach Bar',
        description: 'Solnedgångsbar på norra Moorea, enkel och mysig',
      },
      {
        name: 'Yacht Club Moorea Bar',
        description: 'Nautisk miljö för en drink med havsutsikt',
      },
    ],
    clubs: [
      {
        name: 'Rudy’s Late Lounge',
        description: 'Mindre klubbmiljö med lokala band',
      },
      {
        name: 'Moorea Mahana Night',
        description: 'Helgfest med polynesisk dansshow',
      },
      {
        name: 'Tama Party Club',
        description: 'Sporadiska DJ-events i samband med festivaler',
      },
    ],
  },

  // 63) Rarotonga
  Rarotonga: {
    restaurants: [
      {
        name: 'Tamarind House',
        description: 'Kolonial stil med havsutsikt och modern ö-meny',
      },
      {
        name: 'The Mooring Fish Café',
        description: 'Färsk fisk i en avslappnad båtcontainer-omgivning',
      },
      {
        name: 'Vaima Polynesian Bar & Restaurant',
        description: 'Mångsidig meny på stranden, ofta livemusik',
      },
    ],
    bars: [
      {
        name: 'Trader Jack’s',
        description: 'Klassisk bar vid Avarua Harbour, livlig kvällstid',
      },
      {
        name: 'On the Rocks Bar',
        description: 'Cocktails i lugn, tropisk miljö',
      },
      {
        name: 'Shipwreck Hut',
        description: 'Rustik strandbar med strandfacklor och tiki-inredning',
      },
    ],
    clubs: [
      {
        name: 'Rehab Nightclub',
        description: 'Populär klubb i Avarua för sena fester',
      },
      {
        name: 'Whatever! Bar & Club',
        description: 'Backpacker-tätt ställe för dans och karaoke',
      },
      { name: 'Fusion Raro', description: 'Temakvällar och lokal DJ line-up' },
    ],
  },

  // 64) Viti Levu
  'Viti Levu': {
    restaurants: [
      {
        name: 'Tiko’s Floating Restaurant',
        description: 'Flytande restaurang i Suva med fisk och skaldjur',
      },
      {
        name: 'Eden Bistro & Bar',
        description: 'Fusionrätter i Nadi med mysig trädgård',
      },
      {
        name: 'Fijian Curry House',
        description: 'Mustiga curries och roti i en enkel miljö',
      },
    ],
    bars: [
      {
        name: 'O’Reilly’s Bar',
        description: 'Sportevenemang på stor skärm i Suva',
      },
      {
        name: 'Ed’s Bar',
        description: 'Casual bar i Nadi, liveband på helger',
      },
      {
        name: 'Bad Dog Café',
        description: 'Mix av café och bar, populärt after work-ställe',
      },
    ],
    clubs: [
      {
        name: 'Signals Nightclub',
        description: 'Sen dans och urban musik i Suva',
      },
      {
        name: 'Purple Haze Suva',
        description: 'Elektronisk musik och internationella teman',
      },
      {
        name: 'Cloud 9 Day Club',
        description:
          'Flytande festkoncept på dagtid, samarbete med Viti Levu-resorter',
      },
    ],
  },

  // 65) Suva
  Suva: {
    restaurants: [
      {
        name: 'Governors Museum Themed Restaurant',
        description: 'Historisk inredning och fijiansk-europeisk meny',
      },
      {
        name: 'Eden Restaurant',
        description: 'Romantisk atmosfär, tropiskt trädgårdsställe',
      },
      {
        name: 'Maya Dhaba',
        description: 'Autentisk indisk mat populär bland lokalbor',
      },
    ],
    bars: [
      {
        name: 'Royal Suva Yacht Club Bar',
        description: 'Marin atmosfär och solnedgångsdrinkar',
      },
      {
        name: 'Birdland Bar',
        description: 'Jazzinfluerad lounge mitt i stadskärnan',
      },
      {
        name: 'Docks Bar',
        description: 'Fräsch sportbar med stor uteservering',
      },
    ],
    clubs: [
      {
        name: 'O’Reilly’s Nightclub',
        description: 'Kombinerad pub och klubb med live-DJs',
      },
      {
        name: 'The Vineyard Palace',
        description: 'Temakvällar och karaoke med kinesisk touch',
      },
      {
        name: 'Club Revolution',
        description: 'Högenergisk EDM och pop, mest besökt på helgerna',
      },
    ],
  },

  // 66) Phu Quoc
  'Phu Quoc': {
    restaurants: [
      {
        name: 'Crab House',
        description: 'Specialitet på krabba och skaldjur, västerländsk twist',
      },
      {
        name: 'Rory’s Beach Bar & Restaurant',
        description: 'Avslappnat strandläge med internationell meny',
      },
      {
        name: 'Bup Restaurant',
        description: 'Vietnamesiska havsrätter och grillspett',
      },
    ],
    bars: [
      {
        name: 'Sunset Sanato Beach Club',
        description:
          'Konstinstallationer på stranden, DJ-spelningar vid solnedgång',
      },
      {
        name: 'Coco Bar',
        description: 'Cocktails och färsk fruktjuice i Duong Dong',
      },
      {
        name: 'Bittersweet Cocktail Bar',
        description: 'Speakeasy-stil med lokala ingredienser',
      },
    ],
    clubs: [
      {
        name: 'Mango Bay Beach Club',
        description: 'Eko-chic partyn på helgerna',
      },
      {
        name: 'Dragon Beach Bar',
        description: 'Fest mitt på stranden, blandade musikstilar',
      },
      {
        name: 'Golden Sand Bar',
        description: 'Populärt bland backpackers, nattliga BBQ-events',
      },
    ],
  },

  // 67) Da Nang
  'Da Nang': {
    restaurants: [
      {
        name: 'Lam Vien Restaurant',
        description: 'Modern vietnamesisk villa med trädgård',
      },
      {
        name: 'Madame Lan',
        description: 'Autentiska lokala rätter vid Han-floden',
      },
      {
        name: 'Bé Mặn Seafood',
        description: 'Färsk fisk och skaldjur direkt vid stranden',
      },
    ],
    bars: [
      {
        name: 'Sky36',
        description: 'Takbar med panoramautsikt på novotels tak',
      },
      {
        name: 'Waterfront Bar',
        description: 'Cocktails längs floden, utsikt över Drakbron',
      },
      {
        name: 'On The Radio Bar',
        description: 'Livemusik och studentvänliga priser',
      },
    ],
    clubs: [
      {
        name: 'New Phuong Dong Nightclub',
        description: 'Stora events, laser och EDM',
      },
      {
        name: 'TV Club Da Nang',
        description: 'Mysig inomhusklubb med vietnamesisk pop',
      },
      {
        name: 'Hair of the Dog',
        description: 'Populärt after-party-ställe, blandad musik',
      },
    ],
  },

  // 68) Nha Trang
  'Nha Trang': {
    restaurants: [
      {
        name: 'Lac Canh',
        description: 'Grillbord med marinerat kött och havsmat, DIY-stil',
      },
      {
        name: 'Sailing Club Restaurant',
        description: 'Internationell meny med havsutsikt',
      },
      {
        name: "Yen's Restaurant",
        description: 'Traditionell vietnamesisk husmanskost, hemtrevligt',
      },
    ],
    bars: [
      {
        name: 'Louisiane Brewhouse',
        description: 'Brygger egen öl, ligger direkt på stranden',
      },
      {
        name: 'Booze Cruise Sports Bar & Grill',
        description: 'Sport på TV, västerländsk mat och kall öl',
      },
      {
        name: 'Altitude Rooftop Bar',
        description: 'Takbar med cityview på Sheraton',
      },
    ],
    clubs: [
      {
        name: 'Why Not Bar',
        description: 'Centralt nattklubbsställe som ofta har open bar-timmar',
      },
      {
        name: 'Sailing Club Nha Trang (Night)',
        description: 'Beachparty med DJ och eldshower',
      },
      {
        name: 'Skylight Nha Trang',
        description: '360-graders utsikt, loungekänsla för dans och mingel',
      },
    ],
  },

  // 69) Sihanoukville
  Sihanoukville: {
    restaurants: [
      {
        name: 'Sandan',
        description: 'Socialt företag med kambodjansk mat, hjälper ungdomar',
      },
      {
        name: 'The Big Easy',
        description: 'Backpacker-favorit med västerländsk och asiatisk meny',
      },
      {
        name: 'Moon Shack 4',
        description: 'Färsk skaldjur på Serendipity Beach',
      },
    ],
    bars: [
      {
        name: 'Dolphin Shack',
        description: 'Bar och klubb i ett, eldshower på stranden',
      },
      { name: 'Utopia', description: 'Billig öl, poolbord och sen fest' },
      {
        name: 'Sessions Koh Rong',
        description:
          'Teknisk sett på ön men populär bar bland Sihanoukville-resenärer',
      },
    ],
    clubs: [
      {
        name: 'JJ’s Playground',
        description: 'Legendarisk strandklubb med vatten- och skumpartyn',
      },
      {
        name: 'Monkey Republic',
        description: 'Hostel med klubbkänsla och livemusik',
      },
      {
        name: 'Kerfuffle',
        description: 'Pop-up fester och DJ-maraton på Otres Beach',
      },
    ],
  },

  // 70) Mauritius
  Mauritius: {
    restaurants: [
      {
        name: 'Le Chamarel Restaurant',
        description: 'Panoramavy över kusten, kreolsk mat',
      },
      {
        name: 'Escale Créole',
        description: 'Äkta hemlagad kreolsk buffé i Moka',
      },
      {
        name: 'The Beach House',
        description: 'Lättsamma rätter vid Grand Baie, direkt vid havet',
      },
    ],
    bars: [
      {
        name: 'Banana Beach Club',
        description: 'Klassisk bar med liveband och tropisk inredning',
      },
      {
        name: 'Lakaz Cascavelle',
        description: 'Cocktails och loungemusik nära Flic-en-Flac',
      },
      {
        name: 'Mystik Bar',
        description: 'Solnedgångsbar i Mont Choisy, bohemisk stil',
      },
    ],
    clubs: [
      {
        name: 'OMG Nightclub',
        description: 'Stort dansgolv och internationella DJ-gäster',
      },
      {
        name: 'Les Enfants Terribles',
        description: 'Populärt i Grand Baie med fokus på elektronisk musik',
      },
      {
        name: "Big Willy's",
        description: 'Pub, sport och nattklubb i Riviere Noire',
      },
    ],
  },

  // 71) Reunion
  Reunion: {
    restaurants: [
      {
        name: 'Le Vapiano',
        description: 'Italiensk-franskt koncept med utsikt över havet',
      },
      {
        name: 'Le D.C.P.',
        description: 'Färsk fisk och skaldjur, Saint-Gilles',
      },
      {
        name: 'Chez la Marmite',
        description: 'Kreolska rätter, rustik atmosfär',
      },
    ],
    bars: [
      {
        name: 'Le Cube',
        description: 'Cocktailbar med loungekänsla vid Saint-Denis',
      },
      {
        name: 'Kazbar',
        description: 'After beach-stämning, live-DJs på helger',
      },
      {
        name: 'Le Toit',
        description: 'Takbar i St. Pierre för en vy över bergen',
      },
    ],
    clubs: [
      {
        name: 'Le Paddock',
        description: 'Populär nattklubb med blandad musik',
      },
      {
        name: 'La Villa Club',
        description: 'Elektroniska fester i Saint-Gilles',
      },
      { name: 'Le 6 Club', description: 'Trendigt dansgolv och VIP-avdelning' },
    ],
  },

  // 72) Zanzibar
  Zanzibar: {
    restaurants: [
      {
        name: 'The Rock Restaurant',
        description: 'Unikt läge på en klippa mitt i havet',
      },
      {
        name: 'Emerson Spice Tea House Restaurant',
        description: 'Takrestaurang i Stone Town, arabiska vibbar',
      },
      {
        name: 'Lukmaan Restaurant',
        description: 'Populär lokalrestaurang med swahili-buffé',
      },
    ],
    bars: [
      {
        name: 'Tatu Pub',
        description: 'Reggae- och afrobeats, populärt bland backpackers',
      },
      {
        name: '6 Degrees South Grill and Wine Bar',
        description: 'Cocktails och grill, utsikt över Indiska oceanen',
      },
      {
        name: 'Kendwa Rocks',
        description: 'Kända fullmånefester på norra Zanzibar',
      },
    ],
    clubs: [
      {
        name: 'Garage Club Stone Town',
        description: 'Mörkare klubbmiljö, afrohouse och EDM',
      },
      {
        name: 'Dimba Nightclub',
        description: 'Lokal musik, dans och sena kvällar',
      },
      {
        name: 'Coccobello Night Club',
        description: 'Populärt helgställe nära Nungwi med blandad publik',
      },
    ],
  },

  // 73) Mombasa
  Mombasa: {
    restaurants: [
      {
        name: 'Tamarind Mombasa',
        description: 'Skaldjurs- och swahili-inspirerad fine dining',
      },
      {
        name: 'Forodhani Restaurant',
        description: 'Uteservering med arabisk och swahili-mat',
      },
      {
        name: 'Shehnai Restaurant',
        description: 'Autentisk indisk mat i centrala Mombasa',
      },
    ],
    bars: [
      {
        name: 'Mvita Grill Bar',
        description: 'Cocktails i Nyali-området, utsikt över Mombasa Creek',
      },
      {
        name: 'Tapas Cielo',
        description: 'Takbar i City Mall med modern loungekänsla',
      },
      {
        name: 'Fontanella Steakhouse & Beer Garden',
        description: 'Avslappnade grillkvällar och lokala ölsorter',
      },
    ],
    clubs: [
      {
        name: 'Club Hypnotica',
        description: 'Stort dansgolv, danshits och afrobeat',
      },
      {
        name: 'Bobs Bar',
        description: 'Kombinerad bar och klubb, populär bland unga',
      },
      {
        name: 'Casablanca Club',
        description: 'Shishalounge och klubb i en arabiskinspirerad miljö',
      },
    ],
  },

  // 74) Cape Verde
  'Cape Verde': {
    restaurants: [
      {
        name: "Odjo d'Água Hotel Restaurant",
        description: 'Strandnära restaurang med färsk fisk och cachupa',
      },
      {
        name: 'Chez Pastis',
        description: 'Brasiliansk-fransk fusion på ön Sal',
      },
      {
        name: 'Morabeza Beach Club Restaurant',
        description: 'Internationell meny på stranden',
      },
    ],
    bars: [
      {
        name: 'Calema Bar',
        description: 'Livemusik med capeverdianska mornas',
      },
      {
        name: 'Ocean Cafe',
        description: 'Avslappnade reggae-toner och cocktails',
      },
      {
        name: 'Pub Calema',
        description: 'Sport och lokalt öl, folklig stämning',
      },
    ],
    clubs: [
      {
        name: 'Disco Pirata',
        description: 'Nattklubb med blandad musik och ö-atmosfär',
      },
      {
        name: 'Cockpit Disco',
        description: 'Uteklubb med utsikt över Atlanten',
      },
      {
        name: 'Baia Verde',
        description: 'Kizomba- och zouk-fester i helgerna',
      },
    ],
  },

  // 75) Fernando de Noronha
  'Fernando de Noronha': {
    restaurants: [
      {
        name: 'Varanda',
        description: 'Brasiliansk gastronomi med färsk fisk och skaldjur',
      },
      { name: 'Mergulhão', description: 'Utsikt över bukten och kreativ meny' },
      {
        name: 'Xica da Silva',
        description: 'Populära lokala rätter med modern twist',
      },
    ],
    bars: [
      {
        name: 'Bar do Meio',
        description: 'Strandbar med fantastisk solnedgång',
      },
      {
        name: 'Bar do Cachorro',
        description: 'Levande forró-musik och lokala drinkar',
      },
      {
        name: 'Acqua Noronha',
        description: 'Terrassbar med panoramautsikt över klippor',
      },
    ],
    clubs: [
      {
        name: 'Projeto TAMAR Parties',
        description:
          'Tillfälliga strandfester för att finansiera sköldpaddsprojekt',
      },
      {
        name: '8 Ilhas Club',
        description: 'Nattliga events, ofta i samarbete med lokala DJ:s',
      },
      {
        name: 'Festa na Praia da Conceição',
        description: 'Spontana strandsamlingar, mest på helger',
      },
    ],
  },

  // 76) Rio de Janeiro
  'Rio de Janeiro': {
    restaurants: [
      {
        name: 'Fogo de Chão Botafogo',
        description: 'Klassisk brasiliansk churrascaria med utsikt över bukten',
      },
      {
        name: 'Aprazível',
        description: 'Brasiliansk gourmet med panoramavy i Santa Teresa',
      },
      {
        name: 'Confeitaria Colombo',
        description: 'Historiskt café med art nouveau-stil',
      },
    ],
    bars: [
      {
        name: 'Boteco Belmonte',
        description: 'Traditionell carioca bar med petiscos',
      },
      {
        name: 'Bar Urca',
        description: 'Båtplatskänsla, drick en öl på kajkanten',
      },
      {
        name: 'Quiosque Mureta da Urca',
        description: 'Mingla vid muren, solnedgång över Kristusstatyn',
      },
    ],
    clubs: [
      {
        name: 'Lapa 40 Graus',
        description: 'Samba, poolbord och liveband i hjärtat av Lapa',
      },
      {
        name: 'The Week Rio',
        description: 'Stort elektroniskt danspalats, känd för pridefester',
      },
      {
        name: 'Fosfobox',
        description: 'Underjordisk klubb i Copacabana med indie och electro',
      },
    ],
  },

  // 77) Guanabara Bay
  'Guanabara Bay': {
    restaurants: [
      {
        name: 'Cais do Oriente',
        description:
          'Historisk byggnad med brasiliansk och internationell fusion',
      },
      {
        name: 'Sobrenatural',
        description: 'Sjömatsfokus i stadsdelen Santa Teresa',
      },
      {
        name: 'Espírito Santa',
        description: 'Amazonska influenser och moderna brasilianska rätter',
      },
    ],
    bars: [
      {
        name: 'Armazém São Thiago',
        description: 'Traditionell boteco med antik interiör',
      },
      {
        name: 'Bar da Laje',
        description: 'Fantastisk utsikt över bukten, funk- och sambapartyn',
      },
      {
        name: 'Bar do Alto',
        description: 'Takbar i området Santa Teresa med panoramavy',
      },
    ],
    clubs: [
      {
        name: 'Sacadura 154',
        description: 'Klubb nära hamnområdet, frekventa livemusikshower',
      },
      {
        name: 'Club Lagoon',
        description: 'Beläget vid Lagôa Rodrigo de Freitas, mixad musik',
      },
      {
        name: 'Quadra da Mangueira',
        description: 'Sambaskola som arrangerar nattliga repetitioner',
      },
    ],
  },

  // 78) Costa Rica
  'Costa Rica': {
    restaurants: [
      {
        name: 'La Terrasse Cuisine Française',
        description: 'Fransk gourmet i San José',
      },
      {
        name: 'Soda Tala',
        description:
          'Enkel costaricansk husmanskost, populärt bland lokalbefolkning',
      },
      {
        name: 'Restaurante Silvestre',
        description: 'Modern costaricansk gastronomi i historisk byggnad',
      },
    ],
    bars: [
      {
        name: 'Selina Hostel Bar',
        description: 'Backpackerbar i flera städer, känd för surfkultur',
      },
      {
        name: 'El Steinvorth',
        description: 'Vintageinspirerad bar i gammalt varuhus i San José',
      },
      {
        name: 'Lizard King Bar',
        description: 'Karibisk vibe i Puerto Viejo med reggaemusik',
      },
    ],
    clubs: [
      {
        name: 'Club Vertigo',
        description: 'Elektronisk musik i huvudstaden, internationella DJ:s',
      },
      {
        name: 'Rapsodia',
        description: 'Reggaeton och latin hits, populär bland studenter',
      },
      {
        name: 'Coco Bongo Tamarindo',
        description: 'Utspring från Cancún-konceptet, shower och dans',
      },
    ],
  },

  // 79) Playa del Carmen
  'Playa del Carmen': {
    restaurants: [
      {
        name: 'Alux',
        description: 'Middag i en naturlig grotta, unikt koncept',
      },
      {
        name: 'La Cueva del Chango',
        description: 'Mexikanska specialiteter i lummig trädgård',
      },
      {
        name: 'El Fogón',
        description: 'Vällagade tacos och genuin mexikansk atmosfär',
      },
    ],
    bars: [
      {
        name: 'La Vaquita',
        description: 'Galna temafester, beläget på 12th Street',
      },
      {
        name: 'Kitxen',
        description: 'Rockbar med lokala band, mitt på 5th Avenue',
      },
      {
        name: 'Fusion Beach Bar',
        description: 'Strandhäng på dagen, reggae och eldshower på kvällen',
      },
    ],
    clubs: [
      {
        name: 'Coco Bongo Playa',
        description: 'Spektakulära shower med akrobatik och musik',
      },
      {
        name: 'Mandala Playa',
        description: 'En av de större klubbarna i hjärtat av nattlivet',
      },
      {
        name: 'La Santanera',
        description: 'Rooftop club med elektronisk musik',
      },
    ],
  },

  // 80) Cozumel
  Cozumel: {
    restaurants: [
      {
        name: 'Guido’s',
        description: 'Italienskt med mexikansk touche, vedugnsbakad pizza',
      },
      {
        name: 'Casa Mission',
        description: 'Historisk haciendamiljö, populärt för fisk och skaldjur',
      },
      {
        name: 'Del Sur Argentina Empanadas & Grill',
        description: 'Argentinska specialiteter, särskilt empanadas',
      },
    ],
    bars: [
      {
        name: 'The Thirsty Cougar',
        description: 'Färgglada margaritas och pubmat vid vattnet',
      },
      {
        name: 'No Name Bar',
        description: 'Dykare och backpackers möts, avslappnad atmosfär',
      },
      {
        name: 'Wet Wendy’s',
        description: 'Känt för enorma margaritas, ofta med livemusik',
      },
    ],
    clubs: [
      {
        name: 'Turquoise Bar',
        description: 'Mer av en lounge med DJ, nära färjeterminalen',
      },
      { name: 'Viva México', description: 'Salsa och bachata om kvällarna' },
      {
        name: 'La Rumba',
        description: 'Lokalt favoritställe för cumbia och rancheras',
      },
    ],
  },

  // 81) Acapulco
  Acapulco: {
    restaurants: [
      {
        name: 'Zibu',
        description: 'Mexikansk-thailändsk fusion på en klippa med havsutsikt',
      },
      {
        name: 'Tony’s Bistro',
        description: 'Skaldjur och grill med panoramavy över Acapulcobukten',
      },
      {
        name: 'El Cabrito',
        description:
          'Specialiserad på cabrito (killing) och andra mexikanska rätter',
      },
    ],
    bars: [
      {
        name: 'Barba Roja',
        description: 'Centralt belägen bar med rocktema och livemusik',
      },
      {
        name: 'Paradise Acapulco',
        description: 'Strandbar med tropiska cocktails och vattenaktiviteter',
      },
      {
        name: 'Beto Godoy Barra Vieja',
        description: 'Informell bar/restaurang, fokus på seafood',
      },
    ],
    clubs: [
      {
        name: 'Palladium Acapulco',
        description: 'Belägen på bergssluttning, EDM och spektakulär ljusshow',
      },
      {
        name: 'Baby’O',
        description: 'Legendarisk diskoklubb, populär sedan 70-talet',
      },
      {
        name: 'LOVE Acapulco',
        description: 'Lyxig klubb med utsikt över hela bukten',
      },
    ],
  },

  // 82) Panama City Beach
  'Panama City Beach': {
    restaurants: [
      {
        name: 'Firefly',
        description: 'Lite finare middag, färsk fisk och stekar',
      },
      {
        name: 'Pineapple Willy’s',
        description: 'Strandrestaurang med BBQ-ribs och gulfutsikt',
      },
      {
        name: 'Schooners',
        description: 'Kallas den sista lokala strandbaren, enkel havsmat',
      },
    ],
    bars: [
      {
        name: 'Coyote Ugly Saloon',
        description: 'Ljudlig bar med bartop-dans, spring-break-klassiker',
      },
      {
        name: 'Ms. Newby’s',
        description: 'Drive-thru daiquiris och nattligt kaos',
      },
      {
        name: 'Club La Vela Beach Bar',
        description: 'Strandsektionen av berömda Club La Vela',
      },
    ],
    clubs: [
      {
        name: 'Club La Vela',
        description:
          'En av USAs största nattklubbar, populär under spring break',
      },
      {
        name: 'Spinnaker Beach Club',
        description: 'Konkurrent till La Vela, liveband och DJ:s',
      },
      {
        name: 'Tootsies Orchid Lounge PCB',
        description: 'Countrymusik och dansgolv',
      },
    ],
  },

  // 83) Virginia Beach
  'Virginia Beach': {
    restaurants: [
      {
        name: 'Waterman’s Surfside Grille',
        description: 'Känd för sin orange crush-cocktail och färsk fisk',
      },
      {
        name: 'Tautog’s Restaurant',
        description: 'Historisk stuga, havsinspirerad meny',
      },
      { name: 'Doc Taylor’s', description: 'Populär brunch med diner-känsla' },
    ],
    bars: [
      {
        name: 'Calypso Bar & Grill',
        description: 'Strandbar med livemusik och uteservering',
      },
      { name: 'Shaka’s Live', description: 'Liveband och DJs, surfvibe' },
      {
        name: 'The Shack',
        description: 'Utomhusbar med spel och avslappnad stämning',
      },
    ],
    clubs: [
      {
        name: 'Peabody’s Nightclub',
        description: 'Populär collegeklubb med dansgolv och temakvällar',
      },
      {
        name: ' chemistry lounge ',
        description: 'Elektronisk musik och djupa house-vibbar',
      },
      {
        name: 'Eagles’ Nest VB',
        description: 'Countryrock-klubb med line dancing',
      },
    ],
  },

  // 84) Myrtle Beach
  'Myrtle Beach': {
    restaurants: [
      {
        name: 'Sea Captain’s House',
        description: 'Klassisk havsrestaurang, funnits sedan 1962',
      },
      {
        name: 'Pirates Voyage Dinner & Show',
        description: 'Middag med piratshow, familjevänligt',
      },
      {
        name: 'Rockefellers Raw Bar',
        description: 'Ostron och skaldjur i avslappnad miljö',
      },
    ],
    bars: [
      {
        name: '8th Ave Tiki Bar & Grill',
        description: 'Tikitema, kreativa cocktails och nattlig underhållning',
      },
      {
        name: 'Tin Roof',
        description: 'Rooftop-läge, livemusik och barfavoriter',
      },
      {
        name: 'Ocean Annie’s Beach Bar',
        description: 'Strandnära med liveband och dansgolv utomhus',
      },
    ],
    clubs: [
      {
        name: 'Malibu’s Surf Bar',
        description: 'Del av Broadway at the Beach-komplexet, ungdomlig musik',
      },
      {
        name: 'Club Oz',
        description: 'Elektronisk dans, laser och internationella DJ:s',
      },
      {
        name: 'Revolutions',
        description: 'Throwback-dansgolv med hits från 70-, 80- och 90-tal',
      },
    ],
  },

  // 85) Hilton Head
  'Hilton Head': {
    restaurants: [
      {
        name: 'The Skull Creek Boathouse',
        description: 'Färsk fisk och ostron, utsikt över vattnet',
      },
      {
        name: 'Hudson’s Seafood House on the Docks',
        description: 'Genuin Lowcountry-stil med skaldjur',
      },
      {
        name: 'The Crazy Crab',
        description: 'Krabba och gumbo, familjevänlig stämning',
      },
    ],
    bars: [
      {
        name: 'Tiki Hut',
        description: 'Strandbar med volleyboll och livemusik',
      },
      {
        name: 'The Jazz Corner',
        description: 'Intim bar med finmiddag och livespelningar',
      },
      {
        name: 'Poseidon Rooftop Bar',
        description: 'Utsikt över Shelter Cove, loungemusik',
      },
    ],
    clubs: [
      {
        name: 'Reilley’s Grill & Bar (late night)',
        description: 'Pubmiljö som övergår i nattligt dansgolv',
      },
      {
        name: 'The Boardroom',
        description: 'Livemusik och cocktails, mer bar än klubb',
      },
      {
        name: 'Electric Piano Bar',
        description: 'Dueling pianos och karaoke, lättsam nattshow',
      },
    ],
  },

  // 86) Key Largo
  'Key Largo': {
    restaurants: [
      {
        name: 'Bayside Grille & Sunset Bar',
        description: 'Perfekt för seafood och solnedgång',
      },
      {
        name: 'The Fish House',
        description: 'Fräsch fångst, känd för smoked fish dip',
      },
      {
        name: 'Snook’s Bayside Restaurant',
        description: 'Romantisk atmosfär, ofta livemusik',
      },
    ],
    bars: [
      {
        name: 'Sharkey’s Pub & Galley Restaurant',
        description: 'Dykare samlas, god stämning och enkel bar',
      },
      {
        name: 'Sol By The Sea',
        description: 'Takbar i Playa Largo Resort, lyxig loungestil',
      },
      {
        name: 'Caribbean Club',
        description: 'Filmnostalgi från Key Largo-filmen, lokal bar',
      },
    ],
    clubs: [
      {
        name: 'Gilbert’s Resort Tiki Bar',
        description: 'Helgunderhållning med liveband, dansgolv på bryggan',
      },
      {
        name: 'Snappers Oceanfront',
        description: 'Kvälls-DJ och temafester på bryggan',
      },
      {
        name: 'Skipper’s Dockside',
        description: 'Mer av en senbar, men ibland dansgolv spontant',
      },
    ],
  },

  // 87) Providenciales
  Providenciales: {
    restaurants: [
      {
        name: 'Coco Bistro',
        description: 'Mitt i en kokospalmskog, lyxig karibisk mat',
      },
      {
        name: 'Da Conch Shack',
        description: 'Berömt för conch i alla former, sand under fötterna',
      },
      {
        name: 'Grace’s Cottage',
        description: 'Romantisk fine dining i kolonialstil',
      },
    ],
    bars: [
      {
        name: 'Somewhere Café',
        description: 'Avslappnad strandbar vid Grace Bay med tex-mex',
      },
      {
        name: 'Danny Buoy’s',
        description: 'Pubstämning, karaoke och livemusik',
      },
      {
        name: 'Infiniti Bar',
        description: 'Lång bar med havsutsikt, bra cocktails',
      },
    ],
    clubs: [
      {
        name: 'Club Pillows',
        description: 'Dansgolv, hiphop och karibiska rytmer',
      },
      {
        name: 'Sand Dollar Nite Club',
        description: 'Lokal, sen fest med RnB och soca',
      },
      {
        name: 'Mini Golf Club (night)',
        description: 'Minigolf och DJ, ovanlig combo för party',
      },
    ],
  },

  // 88) Nassau
  Nassau: {
    restaurants: [
      {
        name: 'Graycliff Restaurant',
        description: 'Gourmet i historisk herrgård, omfattande vinkällare',
      },
      {
        name: 'Fish Fry at Arawak Cay',
        description: 'Samling av lokala matstånd, hummer och conch',
      },
      {
        name: 'Cafe Matisse',
        description: 'Italiensk-bahamisk fusion med mysig innergård',
      },
    ],
    bars: [
      {
        name: 'The Daiquiri Shack',
        description:
          'Färska fruktdrinkar, populärt stopp för kryssningsturister',
      },
      {
        name: 'Tiki Bikini Hut',
        description: 'Strandbar med reggae och karibiska cocktails',
      },
      {
        name: 'Pirate Republic Brewing',
        description: 'Lokalt mikrobryggeri, ölprovningar',
      },
    ],
    clubs: [
      { name: 'Bond Nightclub', description: 'Lyxig klubb på Baha Mar resort' },
      {
        name: 'Club Waterloo',
        description: 'Långkörarscen, utomhusbar och dansgolv',
      },
      {
        name: 'Dragon’s Ultra-Lounge (Atlantis)',
        description: 'Exklusiv loungemiljö med DJ och VIP',
      },
    ],
  },

  // 89) Freeport
  Freeport: {
    restaurants: [
      {
        name: 'Flying Fish',
        description: 'Gourmeträtter vid vattnet, livejazz på söndagar',
      },
      {
        name: 'Banana Bay',
        description: 'Strandrestaurang med karibiska favoriter',
      },
      {
        name: 'Pier One Restaurant',
        description: 'Hajmatningsevent och sushi på kvällen',
      },
    ],
    bars: [
      {
        name: 'Rum Runners',
        description: 'Populär bar i Port Lucaya Marketplace',
      },
      { name: 'Bones Bar', description: 'Avslappnad strandbar med volleyboll' },
      {
        name: 'Molly Malone’s',
        description: 'Irländsk pubkänsla och karaokekvällar',
      },
    ],
    clubs: [
      {
        name: 'Club Amnesia',
        description: 'Nattklubb i centrum, varierad musik',
      },
      {
        name: 'Rooster’s Sports Bar & Club',
        description: 'Darts, pool och dansgolv senare på kvällen',
      },
      {
        name: 'The Grand Nightclub',
        description: 'Periodiska temafester, populärt bland lokala ungdomar',
      },
    ],
  },

  // 90) Montego Bay
  'Montego Bay': {
    restaurants: [
      {
        name: 'Scotchies',
        description: 'Berömt för jerk chicken och jerk pork',
      },
      {
        name: 'Marguerites Seafood',
        description: 'Fina fisk- och skaldjursrätter vid vattnet',
      },
      {
        name: 'The Pelican Grill',
        description: 'Klassisk jamaicansk frukost och familjära vibbar',
      },
    ],
    bars: [
      {
        name: 'Jimmy Buffett’s Margaritaville',
        description: 'Turistkändis med rutschbana ner i havet',
      },
      { name: 'The Brewery', description: 'Lokala ölsorter och pubkänsla' },
      {
        name: 'Blue Beat Ultra Lounge',
        description: 'Jazz och lounge på kvällarna, DJ senare',
      },
    ],
    clubs: [
      {
        name: 'Pier 1',
        description: 'Sjöbodsklubb på torsdagar, dansgolv under stjärnorna',
      },
      { name: 'Taboo', description: 'Klubb för elektronik och dancehall' },
      {
        name: 'Elevation Nightclub',
        description: 'Nyare tillskott, modern lounge och dansgolv',
      },
    ],
  },

  // 91) Negril
  Negril: {
    restaurants: [
      {
        name: 'Rick’s Café',
        description: 'Klippdykning, reggaeband och grillade rätter',
      },
      {
        name: 'Ivan’s Bar & Restaurant',
        description: 'Romantisk karibisk meny på klipporna',
      },
      {
        name: '3 Dives Jerk Centre',
        description: 'Känd jerkplats, enkelt och genuint',
      },
    ],
    bars: [
      {
        name: "Alfred's Ocean Palace",
        description: 'Reggae live på stranden, avslappnade vibbar',
      },
      {
        name: 'Roots Bamboo',
        description: 'Lokala artister, strandhäng och kall Red Stripe',
      },
      { name: 'Miyard', description: 'Hemtrevlig rastabar, öppen dygnet runt' },
    ],
    clubs: [
      {
        name: 'The Jungle Night Club',
        description: 'Flera våningar, dancehall och reggae',
      },
      {
        name: 'Mi Yard Jam Sessions',
        description: 'Mer spontan fest, men kan bli riktigt livligt',
      },
      {
        name: 'Drifters Bar',
        description:
          'Eftermid. jam sessions, kvällstid kan vara som en liten klubb',
      },
    ],
  },

  // 92) Ocho Rios
  'Ocho Rios': {
    restaurants: [
      {
        name: 'Miss T’s Kitchen',
        description: 'Rustik jamaicansk mat, gårdsservering',
      },
      {
        name: 'Evita’s Italian',
        description: 'Italienska rätter med jamaicansk twist',
      },
      {
        name: 'Mongoose Jamaica',
        description: 'Karibisk/amerikansk fusion, avslappnad atmosfär',
      },
    ],
    bars: [
      {
        name: "John Crow's Tavern",
        description: 'Lokalt barhäng, ackompanjerat av dancehall',
      },
      {
        name: 'Ocean’s 11',
        description: 'Karaoke, jamaicansk jerk och livemusik',
      },
      {
        name: 'Mahogany Beach Bar',
        description: 'Strandbar, lugnare dagtid och party på kvällarna',
      },
    ],
    clubs: [
      {
        name: 'Margaritaville Ocho Rios',
        description: 'Vattenrutschbana, beachparty och dansgolv',
      },
      {
        name: 'The Roxborough',
        description: 'Nattklubb med dancehall, RnB och internationella hits',
      },
      {
        name: 'Shaw Park Beach Disco',
        description: 'Temakvällar på en av Ochi’s strandresorter',
      },
    ],
  },

  // 93) Grand Cayman
  'Grand Cayman': {
    restaurants: [
      {
        name: 'Blue by Eric Ripert',
        description:
          'Michelinstjärna i Ritz-Carlton, fokus på fisk och skaldjur',
      },
      {
        name: 'Sunshine Grill',
        description: 'Berömd för sina fish tacos och avslappnad poolbar',
      },
      {
        name: 'Kaibo Beach Restaurant',
        description: 'Beach dining och karibisk meny med moderna inslag',
      },
    ],
    bars: [
      {
        name: 'Coconut Joe’s',
        description: 'Avslappnat, direkt på Seven Mile Beach',
      },
      {
        name: 'Lone Star Bar & Grill',
        description: 'Tex-mex, sport på TV och karaokekvällar',
      },
      {
        name: 'Legendz Bar',
        description: 'Cocktails och livemusik, enkel atmosfär',
      },
    ],
    clubs: [
      {
        name: 'The Lodge',
        description: 'Populär nattklubb i centrum, blandad musik',
      },
      {
        name: 'Club Havana',
        description: 'Kubansk vibe med salsa och DJ-spelningar',
      },
      {
        name: 'O Bar',
        description: 'Helgevents och internationella gäst-DJ:s',
      },
    ],
  },

  // 94) Grand Turk
  'Grand Turk': {
    restaurants: [
      {
        name: 'Sandbar Restaurant',
        description: 'Färsk fisk, havsutsikt och laidback atmosfär',
      },
      {
        name: 'Bohio Dive Resort Restaurant',
        description: 'Fine dining möter beach club, lokalt fångad fisk',
      },
      {
        name: 'Jack’s Shack',
        description: 'Grill och bar på stranden, känd för jerk chicken',
      },
    ],
    bars: [
      {
        name: 'Margaritaville Grand Turk',
        description: 'Turistkändis med pool och strandparty',
      },
      {
        name: 'SunRay Beach Bar',
        description: 'Vid piren, enkel bar med karibisk musik',
      },
      {
        name: 'Turks Head Inne Bar',
        description: 'Historisk tavernakänsla, lugnare kvällstid',
      },
    ],
    clubs: [
      {
        name: 'Salt Raker Inn Lounge',
        description: 'Tidvis livemusik, ingen ‘stor klubb’ men dans förekommer',
      },
      {
        name: 'Bohio Beach Party Nights',
        description: 'Sporadiska DJ-evenemang och dans på stranden',
      },
      {
        name: 'Private Cruise Ship Parties',
        description:
          'Fester anordnade av rederier, ibland öppna för lokalbefolkning',
      },
    ],
  },

  // 95) Bermuda
  Bermuda: {
    restaurants: [
      {
        name: 'Waterlot Inn',
        description: 'Historisk steakhouse från 1600-talet',
      },
      {
        name: 'Barracuda Grill',
        description: 'Fisk- och skaldjursfokus med modern inredning',
      },
      {
        name: 'Swizzle Inn',
        description: 'Bermudas äldsta pub, känd för Rum Swizzle',
      },
    ],
    bars: [
      {
        name: 'The Swizzle Inn (bar side)',
        description: 'Legendariska rum swizzles och liveband',
      },
      {
        name: 'Devil’s Isle Bar',
        description: 'Specialkaffe på dagen, cocktails på kvällen',
      },
      {
        name: '1609 Bar & Restaurant',
        description: 'Hamnvy i Hamilton, lyxig loungekänsla',
      },
    ],
    clubs: [
      {
        name: 'Cosmopolitan Ultra Lounge',
        description: 'Internationell DJ-lineup, dansgolv med LED-väggar',
      },
      {
        name: 'Docksiders Pub & Restaurant (late)',
        description: 'Pub som ibland förvandlas till dansgolv',
      },
      {
        name: 'Club Aqua',
        description: 'Belägen i St. George’s, sällsynta EDM-kvällar',
      },
    ],
  },

  // 96) St. Barts
  'St. Barts': {
    restaurants: [
      {
        name: 'Bonito St. Barth',
        description: 'Latinskt-franskt kök, fantastisk utsikt över Gustavia',
      },
      {
        name: 'Le Tamarin',
        description: 'Tropisk trädgård, franskinspirerade rätter',
      },
      {
        name: 'Nikki Beach Restaurant',
        description:
          'Partyrestaurang på stranden, mix av sushi och medelhavsmat',
      },
    ],
    bars: [
      {
        name: 'Baz Bar',
        description: 'Sushibar på hamnpromenaden med livemusik',
      },
      {
        name: 'Le Select',
        description: 'Ikonisk burgerjoint, populär mötesplats',
      },
      {
        name: 'Quarter Kitchen & Cocktail Lab',
        description: 'Kreativa cocktails i Gustavia',
      },
    ],
    clubs: [
      {
        name: 'Casa Night Club',
        description: 'Exklusiv klubbmiljö med internationella DJ:s',
      },
      {
        name: 'Le Ti St. Barth',
        description: 'Dinner party som övergår i nattklubb med cabaret',
      },
      {
        name: 'Nikki Beach St. Barth (night)',
        description: 'Livlig strandklubb, temafester och champagne',
      },
    ],
  },

  // 97) St. Martin
  'St. Martin': {
    restaurants: [
      {
        name: 'Lolo’s in Grand Case',
        description: 'Lokala BBQ-stugor med grillad fisk och kyckling',
      },
      {
        name: 'Le Tropicana',
        description: 'Franskt bistrokök i Marigot-hamnen',
      },
      {
        name: 'La Villa Restaurant',
        description: 'Elegant fransk-karibisk meny, utmärkt service',
      },
    ],
    bars: [
      {
        name: 'Sunset Bar & Grill',
        description: 'Flygplansspotting vid Maho Beach, känd bar',
      },
      {
        name: '3 Amigos',
        description: 'Mexikanskt tema i Maho, margaritas och tex-mex',
      },
      {
        name: 'Red Piano',
        description: 'Livespelningar och pianobar i Simpson Bay',
      },
    ],
    clubs: [
      {
        name: 'Tantra Nightclub & Sanctuary',
        description: 'Heta DJ-kvällar med internationell publik',
      },
      {
        name: 'Moon Bar',
        description: 'Litet men exklusivt, lounge och DJ i Maho',
      },
      {
        name: 'Lotus Nightclub',
        description: 'Systerklubb till Tantra, orientalisk touch',
      },
    ],
  },

  // 98) Anguilla
  Anguilla: {
    restaurants: [
      {
        name: 'Blanchards Restaurant',
        description: 'Gourmet vid Meads Bay, karibisk-internationell mix',
      },
      {
        name: 'Straw Hat Restaurant',
        description: 'Strandnära med fokus på lokalt fångad fisk',
      },
      {
        name: 'Tasty’s',
        description: 'Kreol-influerad meny och avslappnad atmosfär',
      },
    ],
    bars: [
      {
        name: 'Elvis’ Beach Bar',
        description: 'Ombyggd båt till bar, sandgolv och romdrinkar',
      },
      {
        name: 'Bankie Banx’s Dune Preserve',
        description: 'Reggae-bar med livespelningar på stranden',
      },
      {
        name: 'Sunshine Shack',
        description: 'Enkel bar & grill på Rendezvous Bay, chill vibe',
      },
    ],
    clubs: [
      {
        name: 'Pumphouse',
        description: 'Mer bar/club med liveband, populär bland lokalbefolkning',
      },
      {
        name: 'The Dune After Dark',
        description: 'Eventbaserad klubbkväll, mest under högsäsong',
      },
      {
        name: 'Daddys Lounge',
        description: 'Småskaliga DJ-kvällar, karibisk musik',
      },
    ],
  },

  // 99) Guadeloupe
  Guadeloupe: {
    restaurants: [
      {
        name: 'Le Ti Maki',
        description: 'Kreolsk-japansk fusion, sushivarianter med lokala smaker',
      },
      {
        name: 'Chez Doudou',
        description: 'Traditionell bokit och accras, streetfoodstil',
      },
      {
        name: 'L’Amer',
        description: 'Fransk-bistrokök med havsutsikt i Deshaies',
      },
    ],
    bars: [
      {
        name: 'Zoo Rock Café',
        description: 'Livlig bar med rocktema i Le Gosier',
      },
      {
        name: 'Pirate Cafè',
        description: 'Pirat-tema, romdrinkar och små spelningar',
      },
      {
        name: 'Le Bakoua',
        description: 'Karibiska cocktails på Pointe de la Verdure',
      },
    ],
    clubs: [
      { name: 'Le Schiva', description: 'Zouk- och dansgolv i Pointe-à-Pitre' },
      {
        name: 'La Reserve Club',
        description: 'Elektronisk och karibisk mix, i Jarry',
      },
      {
        name: 'Club Le Gosier',
        description: 'Beachclub-känsla, populär bland turister',
      },
    ],
  },

  // 100) Martinique
  Martinique: {
    restaurants: [
      {
        name: 'Le Zandoli – Hôtel La Suite Villa',
        description: 'Gastronomisk kreolsk-fransk meny med havsutsikt',
      },
      {
        name: 'Le Babaorum',
        description: 'Bistrostil med karibiska influenser, utmärkt service',
      },
      {
        name: 'Le Petibonum',
        description:
          'Strandrestaurang i Le Carbet, grillad fisk och rhum punch',
      },
    ],
    bars: [
      {
        name: 'Havana Café',
        description: 'Salsabar med latinska rytmer i Trois-Îlets',
      },
      { name: 'Ti Sable', description: 'Strandbar, liveband på helger' },
      {
        name: 'Bar Le Point de Vue',
        description: 'Utsikt över klippor och hav, populär sunset-spot',
      },
    ],
    clubs: [
      {
        name: 'Le Kano',
        description: 'Loungeklubb i Anse Mitan, DJ och dansgolv',
      },
      {
        name: 'Lili’s Beach Bar (late)',
        description: 'Blir klubbkänsla sent, mitt på stranden',
      },
      {
        name: 'Le Districte Club',
        description: 'Urban musik, populär bland lokala ungdomar',
      },
    ],
  },

  // 101) Dominica
  Dominica: {
    restaurants: [
      {
        name: 'The Champs Restaurant',
        description: 'Högt beläget, panoramavy och internationell meny',
      },
      { name: 'Kozy’s Niche', description: 'Karibisk fine dining i Roseau' },
      {
        name: 'Tia’s Bamboo Restaurant',
        description: 'Naturnära, nära varma källor i Wotten Waven',
      },
    ],
    bars: [
      {
        name: 'Somer’s Bar',
        description: 'Avslappnat ställe i Roseau, lokala romsorter',
      },
      {
        name: 'Riverside Bar',
        description: 'Vid en flod, perfekt efter vandringsturer',
      },
      {
        name: 'Magic View Bar',
        description: 'Utsikt över dalar, enklare drinkutbud',
      },
    ],
    clubs: [
      {
        name: 'Acropolis Disco',
        description: 'Nattklubb i Roseau med blandad musik',
      },
      {
        name: 'Cool View Disco',
        description: 'Landsbygdsklubb, ofta danshall och kompa-musik',
      },
      {
        name: 'Reggae Lounge',
        description: 'Spontana fester med live-reggae då och då',
      },
    ],
  },

  // 102) Grenada
  Grenada: {
    restaurants: [
      {
        name: 'BB’s Crabback',
        description: 'Havsläge i St. George’s, kreolsk krabbspecialitet',
      },
      {
        name: 'The Beach House',
        description: 'Elegant strandrestaurang med internationell meny',
      },
      {
        name: 'Patrick’s Local Homestyle',
        description: 'Karibiska smårätter i familjär atmosfär',
      },
    ],
    bars: [
      {
        name: 'Umbrellas Beach Bar',
        description: 'Populär bland studenter, direkt på Grand Anse Beach',
      },
      {
        name: 'Dodgy Dock',
        description: 'Temakvällar och liveband, vid True Blue Bay',
      },
      {
        name: 'Secret Harbour Bar',
        description: 'Lyxig känsla, utsikt över marinor och båtar',
      },
    ],
    clubs: [
      {
        name: 'Fantazia 2001',
        description: 'Större nattklubb, dancehall och soca',
      },
      {
        name: 'Club Bananas',
        description:
          'Klubb, bar och restaurang i ett, populärt bland utbytesstudenter',
      },
      {
        name: 'Karma Nightclub',
        description: 'Nattliga events, EDM och karibisk mix',
      },
    ],
  },

  // 103) Trinidad
  Trinidad: {
    restaurants: [
      {
        name: 'Veni Mange',
        description: 'Traditionell trinidadisk husmanskost i Port of Spain',
      },
      { name: 'Aioli', description: 'Medelhavsfusion, modern miljö' },
      {
        name: 'Buzo Osteria Italiana',
        description: 'Italiensk fine dining, en lokal favorit',
      },
    ],
    bars: [
      {
        name: 'Drink! Lounge & Bistro',
        description: 'Cocktailbar med after-work stämning',
      },
      {
        name: 'Trotters',
        description: 'Sportbar, stor meny, populärt bland expats',
      },
      {
        name: '50 Corks Wine Bar',
        description: 'Vinbar med live-jazz på vissa kvällar',
      },
    ],
    clubs: [
      {
        name: 'Club Princess',
        description:
          'Beläget i Ariapita Avenue, dansgolv med soca och dancehall',
      },
      {
        name: 'Vas Lounge',
        description: 'Chic nattklubb med RnB, house och karibiska rytmer',
      },
      {
        name: 'Euphoria Lounge',
        description: 'Nyare klubb med EDM- och popkvällar',
      },
    ],
  },

  // 104) Tobago
  Tobago: {
    restaurants: [
      {
        name: 'Jemma’s Seaview Kitchen',
        description: 'Trädhusrestaurang, kreolska rätter',
      },
      {
        name: 'The Seahorse Inn',
        description: 'Romantisk middag vid stranden, internationell meny',
      },
      {
        name: 'Café Havana',
        description: 'Kubansk-inspirerad, med karibisk fusion',
      },
    ],
    bars: [
      {
        name: 'Shade Nightclub & Bar',
        description: 'Dubbel funktion – tidig bar, sen klubb',
      },
      {
        name: 'Legger’s Bar',
        description: 'Enkel sport- och musikbar i Scarborough',
      },
      {
        name: 'Table for Two Bar',
        description: 'Avslappnad loungekänsla, cocktails',
      },
    ],
    clubs: [
      {
        name: 'Barcode',
        description: 'Karaoke- och danskvällar i Crown Point',
      },
      {
        name: 'Sundays at Pigeon Point',
        description: 'Dagsfest som övergår i kvällspartaj vid stranden',
      },
      {
        name: 'Tabu Lounge',
        description: 'Latinska rytmer vissa kvällar, mixad publik',
      },
    ],
  },

  // 105) Mustique
  Mustique: {
    restaurants: [
      {
        name: 'The Veranda',
        description: 'Delikat internationell meny på en exklusiv resort',
      },
      {
        name: 'The Beach Café',
        description: 'Lättare rätter, färsk juice och havsutsikt',
      },
      {
        name: 'House 15',
        description: 'Privat klubbinspirerad restaurang för öbor och gäster',
      },
    ],
    bars: [
      {
        name: 'Basil’s Bar',
        description: 'Kultförklarad bar på pålar i vattnet, känd för fest',
      },
      {
        name: 'Cotton House Beach Bar',
        description: 'Lyxig lounge i kolonialstil',
      },
      {
        name: 'Firefly Bar',
        description: 'Intimt och sofistikerat, ofta kändistäta event',
      },
    ],
    clubs: [
      {
        name: 'Basil’s Bar Blues Festival',
        description: 'Årlig musikfest, mer än nattklubb',
      },
      {
        name: 'Pop-Up Mansion Parties',
        description: 'Husfester hos privata villor, mycket exklusivt',
      },
      {
        name: 'Lagoon Moonlight Gatherings',
        description: 'Sporadiska strandfester, VIP-inbjudningar',
      },
    ],
  },

  // 106) Bequia
  Bequia: {
    restaurants: [
      {
        name: 'Jack’s Beach Bar',
        description: 'Bar och restaurang på Princess Margaret Beach',
      },
      {
        name: 'Laura’s Bar & Resto',
        description: 'Lokala specialiteter, havsnära',
      },
      {
        name: 'Mac’s Pizzeria',
        description: 'Känd för lobster pizza och enkel miljö',
      },
    ],
    bars: [
      {
        name: 'Whaleboner Bar',
        description: 'Bardisk skapad av valben, maritim dekor',
      },
      {
        name: 'Keegan’s Beachside',
        description: 'Trevlig strandbar, grillkvällar',
      },
      {
        name: 'Frangipani Bar',
        description: 'Populärt för regattaveckan, liveband ibland',
      },
    ],
    clubs: [
      {
        name: 'Reef Bar Late Night',
        description: 'Enklare klubbmiljö på helger, karibisk musik',
      },
      {
        name: 'Club Sailor’s Rest',
        description: 'Ibland danskvällar, mest lokalbefolkning',
      },
      {
        name: 'Beach Moon Parties',
        description: 'Hippie-style gathering vid fullmåne, bonfires',
      },
    ],
  },

  // 107) Riviera Maya
  'Riviera Maya': {
    restaurants: [
      {
        name: 'Al Chimichurri',
        description: 'Argentinsk grill och empanadas i Playa del Carmen',
      },
      {
        name: 'El Gourmet Tulum',
        description: 'Färska mexikanska frukost- och lunchrätter',
      },
      {
        name: 'Hechizo Tulum',
        description: 'Exklusiv fine dining vid stranden, internat. meny',
      },
    ],
    bars: [
      {
        name: 'La Corona Beach Bar',
        description: 'Avslappnad atmosfär, bra för solnedgångsdrink',
      },
      {
        name: 'Mezcaleria Ajas',
        description: 'Specialiserad på mezcalprovningar i Tulum',
      },
      {
        name: 'Fusion Bar',
        description: 'Liveband på stranden, bohemisk stämning',
      },
    ],
    clubs: [
      {
        name: 'Santino Bar',
        description: 'Populärt dansställe i Playa, latin och EDM',
      },
      {
        name: 'La Zebra Beach Club',
        description: 'Salsa-kvällar och beachfront DJ i Tulum',
      },
      {
        name: 'Gitano Jungle (RM)',
        description: 'Berömt för djungelfester, likt Tulum-konceptet',
      },
    ],
  },

  // 108) Puerto Escondido
  'Puerto Escondido': {
    restaurants: [
      {
        name: 'El Cafecito',
        description: 'Populärt frukost- och brunchställe, västerländsk touch',
      },
      {
        name: 'Costenito Cevicheria',
        description: 'Färsk ceviche och fiskrätter nära stranden Zicatela',
      },
      {
        name: 'Almoraduz',
        description: 'Oaxacansk gastronomi med modern tvist',
      },
    ],
    bars: [
      {
        name: 'Caña Brava',
        description: 'Reggaebar med tropiska drinkar på Calle del Morro',
      },
      {
        name: 'Bar Fly',
        description: 'Skate- och surfinspirerat, lokal DJ på helger',
      },
      {
        name: 'Sativa Terraza',
        description: 'Takbar med havsutsikt, cocktails i loungemiljö',
      },
    ],
    clubs: [
      {
        name: 'Lychee Club',
        description: 'Elektronisk musik, internationella DJ:s under högsäsong',
      },
      { name: 'Primal', description: 'Open-air fester på Zicatela-stranden' },
      {
        name: 'Club Brisas',
        description: 'Salsakvällar och latinamerikanska rytmer',
      },
    ],
  },

  // 109) Mazatlan
  Mazatlan: {
    restaurants: [
      {
        name: 'El Muchacho Alegre',
        description: 'Sjömatsfokus, populär för ceviche och botanas',
      },
      {
        name: 'Topolo',
        description: 'Lugna innergården, mexikanska specialiteter',
      },
      {
        name: 'Panama',
        description: 'Känt konditori och restaurang med goda desserter',
      },
    ],
    bars: [
      {
        name: 'Joe’s Oyster Bar',
        description: 'Strandbar med enkel mat och kall öl',
      },
      {
        name: 'La Consentida',
        description: 'Populär bar på Malecón med utsikt över havet',
      },
      {
        name: 'Cervecería Tres Islas',
        description: 'Lokalt mikrobryggeri, hantverksöl och rundvisningar',
      },
    ],
    clubs: [
      { name: 'Valentino’s', description: 'Ikonisk byggnad, EDM och latinmix' },
      {
        name: 'Classico Mazatlán',
        description: 'Takklubb, lounge och dansgolv',
      },
      {
        name: 'Privilege Beach Club',
        description: 'Helgpoolpartyn, nära stranden i Zona Dorada',
      },
    ],
  },

  // 110) Puerto Rico
  'Puerto Rico': {
    restaurants: [
      {
        name: 'Casa Cortés ChocoBar',
        description: 'Kreativ användning av choklad i både mat och dryck',
      },
      {
        name: 'Raíces',
        description: 'Traditionell puertoricansk husmanskost i Old San Juan',
      },
      {
        name: 'Jose Enrique',
        description: 'Farm-to-table koncept, modern kreol i Santurce',
      },
    ],
    bars: [
      {
        name: 'La Factoría',
        description: 'Världskänd cocktailbar med hemliga rum',
      },
      {
        name: 'El Batey',
        description: 'Bohemisk väggklottrad bar i Old San Juan',
      },
      {
        name: 'La Taberna Lúpulo',
        description: 'Craft beer-himmel med många sorter på tapp',
      },
    ],
    clubs: [
      {
        name: 'Club Brava',
        description: 'Inne i El San Juan Hotel, internationella DJ:s',
      },
      {
        name: 'La Respuesta',
        description: 'Konst- och klubbscen, livemusik i Santurce',
      },
      {
        name: 'Fahrenheit Ultra Lounge',
        description:
          'Trendigt dansgolv, populär bland lokalbefolkning och turister',
      },
    ],
  },

  // 111) St. Croix
  'St. Croix': {
    restaurants: [
      {
        name: '40 Strand Eatery',
        description: 'Amerikanskt/karibiskt i Christiansted',
      },
      {
        name: 'Balter',
        description: 'Farm-to-table fine dining, lokala råvaror',
      },
      {
        name: 'La Reine Chicken Shack',
        description: 'Rustik, populärt ställe för jerk chicken och kall öl',
      },
    ],
    bars: [
      {
        name: 'Rum And Wine Bar',
        description: 'Stiligt ställe med karibiskt romfokus',
      },
      {
        name: "Shupe's on the Boardwalk",
        description: 'Livlig bar längs vattnet, enkel amerikansk mat',
      },
      {
        name: 'Bombay Club Bar',
        description: 'Pubatmosfär med spel och långa kvällar',
      },
    ],
    clubs: [
      {
        name: 'Club Comanche (late)',
        description: 'Historiskt hotell med ibland nattliga events',
      },
      {
        name: 'Elements Nightclub',
        description: 'Dansgolv, RnB och dancehall',
      },
      {
        name: 'Rhythms at Rainbow Beach',
        description: 'Dagstrandbar som ibland blir klubb vid speciella events',
      },
    ],
  },

  // 112) St. Thomas
  'St. Thomas': {
    restaurants: [
      {
        name: 'Mafolie Restaurant',
        description: 'Panoramavy över Charlotte Amalie, karibisk meny',
      },
      {
        name: 'Havana Blue',
        description: 'Latinasiatisk fusion vid Morning Star Beach',
      },
      {
        name: 'Glady’s Café',
        description: 'Känt för hemlagad pepparsås, lokal mat',
      },
    ],
    bars: [
      {
        name: 'Duffy’s Love Shack',
        description: 'Tropiska drinkar i färgglada souvenirmuggar',
      },
      {
        name: 'Tap & Still',
        description: 'Burgers, beer & bar vibe i Havensight',
      },
      { name: 'Bones Rum', description: 'Rumbar på vattnet med skön utsikt' },
    ],
    clubs: [
      { name: 'The Parrot Club', description: 'Casino-klubb med dansgolv' },
      {
        name: 'Club Envy',
        description: 'Elektronisk och urban musik nära Red Hook',
      },
      {
        name: 'XO Bistro (late)',
        description: 'Mer lounge, men ibland DJ-event sena kvällar',
      },
    ],
  },

  // 113) St. John
  'St. John': {
    restaurants: [
      {
        name: 'Zozo’s at Caneel Bay',
        description:
          'Italienskinspirerad fine dining i gammal sockerbruksmiljö',
      },
      {
        name: 'The Longboard',
        description: 'Fresh Caribbean cuisine och cocktails',
      },
      {
        name: 'Skinny Legs',
        description: 'Casual bar & grill, lokal favorit i Coral Bay',
      },
    ],
    bars: [
      {
        name: 'Beach Bar Cruz Bay',
        description: 'Strandnära drinkar, ofta livemusik',
      },
      {
        name: 'The Tap Room',
        description: 'Lokalbryggd öl från St. John Brewers',
      },
      {
        name: "Woody's Seafood Saloon",
        description: 'Aftersnorkel-upplevelse, enkel mat och happy hour',
      },
    ],
    clubs: [
      {
        name: 'Quiet Mon Pub (late)',
        description: 'Irlandskt tema, kan bli livligt kvällstid',
      },
      {
        name: 'Morgan’s Mango (night)',
        description: 'Salsakvällar ibland, karibiska rytmer',
      },
      {
        name: 'Barefoot Cowboy Lounge',
        description: 'Country western flare, karaoke, sent häng',
      },
    ],
  },

  // 114) Vanua Levu
  'Vanua Levu': {
    restaurants: [
      {
        name: 'Captain’s Café',
        description: 'Enkelt ställe med fijiansk och västerländsk meny',
      },
      {
        name: 'Seaview Restaurant',
        description: 'Fisk och lokala grönsaker i Savusavu',
      },
      {
        name: 'Snowy House & Grace Road Kitchen',
        description: 'Bakverk, kakor och asiatiska bowls',
      },
    ],
    bars: [
      {
        name: 'Savusavu Yacht Club Bar',
        description: 'Marin känsla, avslappnat för seglare',
      },
      {
        name: 'Planters’ Club',
        description: 'Historisk bar förr för plantageägare, enkel men charmig',
      },
      {
        name: 'Surf and Turf Bar',
        description: 'Tillhör en restaurang, men barsektion poppis kvällstid',
      },
    ],
    clubs: [
      {
        name: 'Savusavu Events Hall',
        description: 'Ibland ordnas danstillställningar och fester',
      },
      {
        name: 'Local Hotel Lounges',
        description: 'Hotell ordnar karaokekvällar, halvklubbkänsla',
      },
      {
        name: 'Sega Nights',
        description: 'Folkdanser och liveband, mer kultur än klubb',
      },
    ],
  },

  // 115) Aitutaki
  Aitutaki: {
    restaurants: [
      {
        name: 'Tamanu Beach Resort Restaurant',
        description: 'Polynesisk kvällsbuffé med dansshow',
      },
      {
        name: 'Cafe Tupuna',
        description: 'Lokal mat i djungellik omgivning, känd för fiskrätter',
      },
      {
        name: 'Rapae Bay Restaurant (Pacific Resort)',
        description: 'Gastronomisk upplevelse med lagunutsikt',
      },
    ],
    bars: [
      {
        name: 'Boat Shed Bar & Grill',
        description: 'Avslappnad bar med skärgårdskänsla',
      },
      {
        name: 'Koru Café Bar',
        description: 'Bakverk, kaffe dagtid, enkel bar kvällstid',
      },
      {
        name: 'Tamanu Beach Bar',
        description: 'Perfekt för solnedgångsdrinkar, polynesisk musik',
      },
    ],
    clubs: [
      {
        name: 'Island Nights @ Various Resorts',
        description: 'Dans- och trommelshower, mer show än klubb',
      },
      {
        name: 'Local Dance Halls (rare)',
        description: 'Stängs tidigt, traditionell musik',
      },
      {
        name: 'Pop-up Beach Parties',
        description: 'Ofta vid fullmåne, dock småskaligt',
      },
    ],
  },

  // 116) Rangiroa
  Rangiroa: {
    restaurants: [
      {
        name: 'Le Raira Lagon',
        description: 'Färsk fisk, enkel polynesisk buffé',
      },
      {
        name: 'Restaurant Gauguin',
        description: 'Resortrestaurang med fransk-polynesisk fusion',
      },
      { name: 'Chez Lili', description: 'Mysig lokalrestaurang i byn Avatoru' },
    ],
    bars: [
      {
        name: 'Maitai Bar',
        description: 'Stilfull resortbar, perfekta Mai Tais',
      },
      {
        name: 'Relais de Josephine Terrace',
        description: 'Delfinspottande vid passet, enkel barservice',
      },
      {
        name: 'Beach Bar Kia Ora',
        description: 'Avslappnad stämning med utsikt över turkost vatten',
      },
    ],
    clubs: [
      {
        name: 'Resort Polynesian Evenings',
        description: 'Traditionella dansshower, mer kultur än klubb',
      },
      {
        name: 'Avatoru Village Gatherings',
        description: 'Lokala fester, sällan ren nattklubb',
      },
      {
        name: 'Full Moon Beach Jams',
        description: 'Sporadiska strandfester under fullmåne',
      },
    ],
  },

  // 117) Galapagos
  Galapagos: {
    restaurants: [
      {
        name: 'Iguana Crossing Bar & Restaurant',
        description: 'Isabela Island, enkel gourmet med havsutsikt',
      },
      {
        name: 'Il Giardino',
        description: 'Populär i Puerto Ayora, internationell meny',
      },
      {
        name: 'Los Kioskos',
        description: 'Gatumat i Santa Cruz, färsk fisk och ceviche',
      },
    ],
    bars: [
      {
        name: 'Bongo Bar',
        description: 'En av få nattställen i Puerto Ayora, musik och mojitos',
      },
      { name: 'Bar de Beto', description: 'Lokal mötesplats, enkla drinkar' },
      {
        name: 'Isla Grill Lounge',
        description: 'Mer restaurang än bar, men ibland sena drinkar',
      },
    ],
    clubs: [
      {
        name: 'La Panga',
        description: 'Mindre dansställe i Puerto Ayora, reggaeton och latin',
      },
      {
        name: 'Full Moon Party (sporadisk)',
        description: 'Ibland arrangerad för turister på hotell',
      },
      {
        name: 'Informella hamn-fester',
        description:
          'Lokalbefolkning + backpackers, men inga officiella klubbar',
      },
    ],
  },

  // 118) La Digue
  'La Digue': {
    restaurants: [
      {
        name: 'Fish Trap Restaurant',
        description: 'Färsk fisk, kreolska rätter nära hamnen',
      },
      {
        name: 'Le Combava',
        description: 'Fine dining i boutiquehotell, takterrass',
      },
      {
        name: 'Chez Jules',
        description: 'Enkel, hemtrevlig kreolisk mat på norra delen av ön',
      },
    ],
    bars: [
      {
        name: 'Tarosa Bar',
        description: 'Vacker havsutsikt, cocktails i enkel inramning',
      },
      {
        name: 'Gala Takeaway & Bar',
        description: 'Takeaway på dagen, bar på kvällen',
      },
      {
        name: 'La Digue Island Lodge Bar',
        description: 'Resortbar, palmer och sandstränder',
      },
    ],
    clubs: [
      {
        name: 'Saturday Disco @ Gregoire’s',
        description: 'En av få danskvällar, informell men rolig',
      },
      {
        name: 'Hot Spot Club',
        description: 'Om det finns event, spelas kreolisk och modern musik',
      },
      {
        name: 'Beach Gatherings',
        description: 'Mindre fester på stranden, spontant ordnade',
      },
    ],
  },

  // 119) Mahe
  Mahe: {
    restaurants: [
      {
        name: 'Marie Antoinette',
        description: 'Historisk kreolisk restaurang i Victoria',
      },
      { name: 'Eden', description: 'Fisk och skaldjur på Eden Island Marina' },
      {
        name: 'Del Place',
        description: 'Nära Port Glaud, vacker solnedgång, lokala specialiteter',
      },
    ],
    bars: [
      {
        name: 'Boardwalk Bar',
        description: 'Populärt ställe på Eden Island, live-DJ helger',
      },
      {
        name: 'Trader Vic’s',
        description: 'Tiki-inspirerat, känt för Mai Tai',
      },
      {
        name: 'Gran Kaz Casino Bar',
        description: 'Blandar gambling och bar, mitt i Victoria',
      },
    ],
    clubs: [
      {
        name: 'Tequila Boom',
        description: 'Kombinerad bar och klubb i Beau Vallon',
      },
      {
        name: 'Katiolo Nightclub',
        description: 'Utomhusklubb nära flygplatsen, kreolisk stämning',
      },
      {
        name: 'Espace',
        description: 'Större klubbevents, ibland internationella DJ:s',
      },
    ],
  },

  // 120) Praslin
  Praslin: {
    restaurants: [
      {
        name: 'Café des Arts',
        description: 'Romantisk strandrestaurang med kreolisk gourmet',
      },
      {
        name: 'Les Lauriers',
        description: 'BBQ-buffé med färsk fisk och grillat kött',
      },
      {
        name: 'Pirogue Restaurant',
        description: 'Lokala rätter i avslappnad, tropisk miljö',
      },
    ],
    bars: [
      {
        name: 'Chill Out Tapas Lounge',
        description: 'Cocktails och smårätter i Cote d’Or-området',
      },
      {
        name: 'Curieuse Bar',
        description: 'Belägen i en resort, havsutsikt och lugn stämning',
      },
      {
        name: 'Beach Shack Anse Lazio',
        description: 'Enkel bar vid stranden, kokosdrinkar',
      },
    ],
    clubs: [
      {
        name: 'Oasis Hotel Club & Casino',
        description: 'Dansgolv, liveunderhållning och spel',
      },
      {
        name: 'Berjaya Praslin Dance Nights',
        description: 'Periodiska fester för turister och lokalbor',
      },
      {
        name: 'Strandfester @ Cote d’Or',
        description: 'Spontana sammankomster med musik och grill',
      },
    ],
  },

  // 121) Phang Nga
  'Phang Nga': {
    restaurants: [
      {
        name: 'Samchong Seafood',
        description: 'Utsikt över kalkstensklippor, färsk fisk',
      },
      {
        name: 'E-San Seafood',
        description: 'Enkel, lokal thairestaurang med Isaan-rätter',
      },
      {
        name: 'Tha Yu Pizza',
        description: 'Ovväntad italiensk mat i thailändsk miljö',
      },
    ],
    bars: [
      {
        name: 'Koh Panyee Floating Bar',
        description: 'Helt på vattnet, unikt bykoncept',
      },
      {
        name: 'Samet Nangshe View Bar',
        description: 'Rooftop-liknande, panoramautsikt över bukten',
      },
      {
        name: 'Ban Thap Tawan Chill Spot',
        description: 'Mycket lokalt, mest ölhäng och enkla drinkar',
      },
    ],
    clubs: [
      {
        name: 'Beach Bonfire Evenings',
        description: 'Ofta arrangerade av resorter, liveakustik',
      },
      {
        name: 'Floating Disco (special events)',
        description: 'Turistbåt med DJ, i bukten',
      },
      {
        name: 'Local Temple Fairs',
        description: 'Inte en klubb, men danstillställningar kan förekomma',
      },
    ],
  },

  // 122) Coron
  Coron: {
    restaurants: [
      {
        name: 'La Sirenetta',
        description: 'Havsutsikt, enkla filippinska och västerländska rätter',
      },
      {
        name: 'Brujita',
        description: 'Vegetariskt och veganskt i bohemisk atmosfär',
      },
      {
        name: 'KT’s Sinugba sa Balay',
        description: 'Grillat kött och färsk fisk, lokalt populärt',
      },
    ],
    bars: [
      {
        name: 'No Name Bar',
        description: 'Dykarkollektiv, backpacker-vibes, enkla drinkar',
      },
      {
        name: 'Lualhati Park Kiosks',
        description: 'Offentligt parkområde, öl och streetfood',
      },
      {
        name: 'Hop Hostel Rooftop Bar',
        description: 'Unga resenärer, utsikt över Coron Bay',
      },
    ],
    clubs: [
      {
        name: 'KokosNuss Resort Parties',
        description: 'Ibland poolpartyn, men inget stort nattliv',
      },
      {
        name: 'Altrove Coron (late)',
        description: 'Mest pizzeria, men tar DJ ibland',
      },
      {
        name: 'Full Moon Gatherings @ Beaches',
        description: 'Sporadiska, anspråkslösa strandfester',
      },
    ],
  },

  // 123) El Nido
  'El Nido': {
    restaurants: [
      {
        name: 'Altrove',
        description: 'Träugnspizza, italiensk flair bland palmer',
      },
      {
        name: 'Sea Jane Resto',
        description: 'Skaldjur och grill direkt på stranden',
      },
      {
        name: 'Trattoria Altrove Beach Villa',
        description: 'Syskon till Altrove, men med havsutsikt',
      },
    ],
    bars: [
      {
        name: 'Sava Beach Bar',
        description: 'Trendigt vid bukten, DJ:s under högsäsong',
      },
      { name: 'Pukka Bar', description: 'Reggae och liveband, chill stämning' },
      {
        name: 'Jungle Bar',
        description: 'Liten bar i djungeln, eklektisk musiksmak',
      },
    ],
    clubs: [
      {
        name: 'Republica Sunset Bar',
        description: 'Mer bar än klubb, men solnedgångsfest',
      },
      {
        name: 'Balay Tubay',
        description: 'Konst- och musikkvällar, mer bohemiskt än klubb',
      },
      {
        name: 'Beachfront Night Parties',
        description: 'Happens på olika ställen, ofta enkla DJ-sets',
      },
    ],
  },

  // 124) Guam
  Guam: {
    restaurants: [
      {
        name: 'Proa Restaurant',
        description: 'Chamorro-rätter, BBQ, populär i Tumon',
      },
      { name: 'Meskla Dos', description: 'Guam fusion burgers och lokal BBQ' },
      {
        name: 'The Beach Bar & Grill',
        description: 'Beläget på Gun Beach, solnedgångsmiddagar',
      },
    ],
    bars: [
      {
        name: 'Godfather’s Bar',
        description: 'Äldsta rockbar på Guam, livespelningar',
      },
      {
        name: 'The Pool Bar at Pacific Star',
        description: 'Avslappnat poolområde med tropiska cocktails',
      },
      {
        name: 'Mosa’s Joint',
        description: 'Craft beer och avslappnad stämning, delvis bar',
      },
    ],
    clubs: [
      {
        name: 'Globe Nightclub',
        description: 'Största klubben i Tumon, internationella DJ:s',
      },
      {
        name: 'Club Foxy',
        description: 'Strippklubb/dansklubb, vissa EDM-kvällar',
      },
      {
        name: 'Tumon Sands Plaza Events',
        description: 'Ibland VIP-fester och pop-up-shows',
      },
    ],
  },

  // 125) Saipan
  Saipan: {
    restaurants: [
      {
        name: 'Himawari Restaurant',
        description: 'Japansk mat med lokal färsk fisk',
      },
      {
        name: 'Shirley’s Coffee Shop',
        description: 'Dinerstil, populärt för frukost och brunch',
      },
      {
        name: 'Kinpachi',
        description: 'Sushibar och teppanyaki, klassiker på ön',
      },
    ],
    bars: [
      {
        name: 'Godfather’s Bar Saipan',
        description: 'Filial till Guam, rocktema och karaoke',
      },
      {
        name: 'Porky’s Beach Bar',
        description: 'Strandnära, enkla BBQ-rätter och lokala ölsorter',
      },
      {
        name: 'World Resort Karaoke & Lounge',
        description: 'Privata karaoke-rum, loungebar',
      },
    ],
    clubs: [
      { name: 'Club V', description: 'EDM och pop, centralt i Garapan' },
      {
        name: 'Old Town Tavern (late)',
        description: 'Mer bar, men har dansgolv vissa kvällar',
      },
      {
        name: 'DFS Galleria Events',
        description: 'Ibland modefester och DJ events, lite exklusivt',
      },
    ],
  },

  // 126) Phu Yen
  'Phu Yen': {
    restaurants: [
      {
        name: 'Banh Canh He',
        description: 'Lokal nudelsoppa med gräslök och fläsk',
      },
      {
        name: 'Nha Hang Song Ba',
        description: 'Flodnära seafood, traditionell vietnamesisk',
      },
      {
        name: 'Café Surf Station',
        description: 'Snabbmat och vietnamesiskt kaffe, surf vibe',
      },
    ],
    bars: [
      {
        name: 'Hon Yen Beach Bar',
        description: 'Enkel kiosk med öl och kokosnötter vid klipporna',
      },
      {
        name: 'Tuy Hoa Night Market',
        description: 'Mer matstånd än bar, men säljer alkohol och stämning',
      },
      {
        name: 'Citylight Rooftop',
        description: 'Takbar i Tuy Hoa, enkel men fin utsikt',
      },
    ],
    clubs: [
      {
        name: 'Phu Yen Club 66',
        description: 'Lokal musik, karaoke, inte stor turistscen',
      },
      {
        name: 'DJ Nights @ CenDeluxe Hotel',
        description: 'Sporadiska EDM-kvällar, mest helger',
      },
      {
        name: 'Beach Bonfire Parties',
        description: 'Ungdomar samlas spontant, gitarr och högtalare',
      },
    ],
  },

  // 127) Vung Tau
  'Vung Tau': {
    restaurants: [
      {
        name: 'Ganh Hao',
        description: 'Kustnära fisk och skaldjur, stort utbud',
      },
      {
        name: 'Matildas',
        description: 'Europeisk-vietnamesisk fusion, caféstil',
      },
      {
        name: 'Cay Bang',
        description: 'Familjär skaldjursrestaurang med klippvy',
      },
    ],
    bars: [
      {
        name: 'Black Pearl Bar',
        description: 'Livemusik, piratinspirerad inredning',
      },
      {
        name: 'Gazebo Beach Front',
        description: 'Sunset-drinkar och loungekänsla',
      },
      {
        name: 'Vuvuzela Beer Club',
        description: 'Kedja i Vietnam, modern sportsbar med DJ',
      },
    ],
    clubs: [
      {
        name: 'Blue Moon Club',
        description: 'Stammis-ställe med disco och vietn. pop',
      },
      {
        name: 'Hollywood Club',
        description: 'EDM, neonljus och unga besökare',
      },
      {
        name: 'TGG Club',
        description: 'Mindre känd, men har livliga helgkvällar',
      },
    ],
  },

  // 128) Varadero
  Varadero: {
    restaurants: [
      {
        name: 'La Gruta',
        description: 'Kubansk husmanskost, prisvärt och folkligt',
      },
      {
        name: 'Xanadu Mansion',
        description: 'Lyxig historisk villa med gourmetrestaurang',
      },
      {
        name: 'Salsa Suarez',
        description: 'Fusionrätter och cocktails i mysig miljö',
      },
    ],
    bars: [
      { name: 'Calle 62', description: 'Gatumusik, dans och mojitos' },
      {
        name: 'The Beatles Bar',
        description: 'Rockcoverband, oväntat populärt',
      },
      {
        name: 'Bar Mi Casa',
        description: 'Färsk juice, rom och enklare snacks',
      },
    ],
    clubs: [
      {
        name: 'La Comparsita',
        description: 'Salsa och timba, lokala band ibland',
      },
      {
        name: 'Casa de la Música Varadero',
        description: 'Livekonserter, reggaeton och salsa',
      },
      {
        name: 'Havana Club Varadero',
        description: 'Turistvänlig klubb, mainstream hits',
      },
    ],
  },

  // 129) Cayo Coco
  'Cayo Coco': {
    restaurants: [
      {
        name: 'Lenny’s Lobster Shack',
        description: 'Grillat hummerhak, enkelt och populärt',
      },
      {
        name: 'El Bajo Seafood',
        description: 'Beläget nära stranden, dagsfärsk fisk',
      },
      {
        name: 'Los Flamencos',
        description: 'Resortrestaurang med internationell buffé',
      },
    ],
    bars: [
      {
        name: 'Beach Bar @ Hotel Playa Paraiso',
        description: 'Cocktails i strandnära solstolar',
      },
      {
        name: 'Pilar Beach Ranchón',
        description: 'Chiringuito-stil, kubanska drinkar',
      },
      {
        name: 'Lobby Bar Memories Flamenco',
        description: 'Livepiano på kvällarna, all-inclusive-stil',
      },
    ],
    clubs: [
      {
        name: 'Disco Cueva Del Jabali',
        description: 'Nattklubb i en grotta, unikt koncept',
      },
      {
        name: 'Resort Disco Nights',
        description: 'Varierar per hotell, turister och personal',
      },
      {
        name: 'Pool Parties @ Melia Hotels',
        description: 'Dag/kvälls-EDM runt poolen',
      },
    ],
  },

  // 130) Cayo Largo
  'Cayo Largo': {
    restaurants: [
      {
        name: 'Ranchón Lindarena',
        description: 'Vid stranden med grillad fisk och skaldjur',
      },
      {
        name: 'Isla del Sol Buffet',
        description: 'All-inclusive-huvudrestaurang, internationell mix',
      },
      {
        name: 'Sol y Arena Snack Bar',
        description: 'Enklare rätter, bra för snabb lunch på stranden',
      },
    ],
    bars: [
      {
        name: 'Playa Sirena Beach Bar',
        description: 'Ett av de vackraste stränderna, enkel bar',
      },
      {
        name: 'Lobby Bar Sol Cayo Largo',
        description: 'Drinkar hela dagen, resort-lounge',
      },
      {
        name: 'Bar El Torreón',
        description: 'Utsiktsplats i närheten av marinan',
      },
    ],
    clubs: [
      {
        name: 'Beach Bonfire Party',
        description: 'Resortarrangerat, musik och dans på sanden',
      },
      {
        name: 'Pool Disco @ Hotel Pelicano',
        description: 'Poolfest ibland med DJ och temakvällar',
      },
      {
        name: 'Low-key Hotel Club Nights',
        description: 'Småskaliga dansgolv, mest turister',
      },
    ],
  },

  // 131) Holguin
  Holguin: {
    restaurants: [
      {
        name: '1910 Restaurante & Bar',
        description: 'Kubansk gourmet i kolonial stil',
      },
      {
        name: 'Restaurant El Aldabon',
        description: 'Färsk fisk, grillrätter och rustik miljö',
      },
      {
        name: 'La Torre',
        description: 'Utsikt över staden, enkel inredning men god mat',
      },
    ],
    bars: [
      {
        name: 'Taberna Pancho',
        description: 'Kall öl, lokala musiker uppträder ibland',
      },
      {
        name: 'Club Bariay',
        description: 'Mer en bar/klubb, salsa och reggaeton',
      },
      {
        name: 'La Campana de Toledo',
        description: 'Innegård med drinkar och typisk kubansk atmosfär',
      },
    ],
    clubs: [
      {
        name: 'Casa de la Música Holguin',
        description: 'Liveband, danskvällar med salsa och son',
      },
      { name: 'Club Nocturno', description: 'Stadens diskotek, blandad musik' },
      {
        name: 'Sala Benny Moré',
        description: 'Nattliga konserter, ibland mer folkloristisk dans',
      },
    ],
  },

  // 132) Symi
  Symi: {
    restaurants: [
      {
        name: 'The Secret Garden',
        description: 'Grekiska smårätter i en dold innergård',
      },
      {
        name: 'Tholos Restaurant',
        description: 'Vid hamnen med färsk fisk och lokalt vin',
      },
      {
        name: 'Pantelis',
        description: 'Traditionell taverna, känd för Symi-räkor',
      },
    ],
    bars: [
      {
        name: 'Eva’s Bar',
        description: 'Liten cocktailbar med utsikt över Gialos hamn',
      },
      { name: 'Tsati Bar', description: 'Avslappnad lounge på kajkanten' },
      {
        name: 'Vapori Bar',
        description: 'Bakom hamnen, grekisk musik och ouzo',
      },
    ],
    clubs: [
      {
        name: 'Symi Festival Nights',
        description: 'Sommartid, utomhusevents med liveband',
      },
      {
        name: 'Secret Courtyard Disco',
        description: 'Pop-up kvällar under högsäsong',
      },
      {
        name: 'Local Beach Parties',
        description: 'Ofta i Pedi, grill och dans på stranden',
      },
    ],
  },

  // 133) Hydra
  Hydra: {
    restaurants: [
      {
        name: 'Techne Restaurant & Social',
        description: 'Modern grekiskt med havsutsikt i en gammal stenbyggnad',
      },
      {
        name: 'Sunset Restaurant',
        description: 'Romantisk setting och enkel medelhavsinspirerad meny',
      },
      { name: 'Il Casta', description: 'Italienskt/grekiskt, mysig innergård' },
    ],
    bars: [
      {
        name: 'Pirate Bar',
        description:
          'Legendariskt ställe för lokala och turister, enkel stämning',
      },
      {
        name: 'Amalour Bar',
        description: 'Cocktailbar i smala gränder med bohemisk touch',
      },
      {
        name: 'Hydronetta',
        description: 'Kafé/bar på klippan, populärt för solnedgång',
      },
    ],
    clubs: [
      {
        name: 'Spilia Beach Club',
        description: 'Daglig badklubb, ibland kvällsevents',
      },
      {
        name: 'Paparouna',
        description: 'Småskaliga DJ-kvällar, mer som en sen bar',
      },
      {
        name: 'Seasonal Festival Parties',
        description: 'Pop-up klubbstämning under Hydra-festivaler',
      },
    ],
  },

  // 134) Capri
  Capri: {
    restaurants: [
      {
        name: 'Da Paolino',
        description: 'Citronlundar runt borden, medelhavsrätter',
      },
      {
        name: 'Ristorante Il Geranio',
        description: 'Utsikt över Faraglioni-klipporna, fin italiensk meny',
      },
      {
        name: 'Verginiello',
        description: 'Mysig pizzeria/trattoria med utsikt över hamnen',
      },
    ],
    bars: [
      {
        name: 'Anema e Core',
        description: 'Känd taverna med livemusik och VIP-kändisar',
      },
      {
        name: 'Bar Tiberio',
        description: 'Beläget på Piazzetta, perfekt för people-watching',
      },
      {
        name: 'Jacky Bar',
        description: 'Cocktails i Marina Grande, utsikt över båtar',
      },
    ],
    clubs: [
      {
        name: 'Number Two',
        description: 'Historisk nattklubb, disco och internationell publik',
      },
      {
        name: 'Covo dei Saraceni',
        description: 'Sommarklubb vid hamnen, DJ:s och dans',
      },
      {
        name: 'Vip Club (seasonal)',
        description: 'Pop-up fester under högsäsong, exklusivt',
      },
    ],
  },

  // 135) Sorrento
  Sorrento: {
    restaurants: [
      {
        name: 'Inn Bufalito',
        description: 'Specialist på buffelmozzarella och lokala ostar',
      },
      {
        name: 'Ristorante Bagni Delfino',
        description: 'Skaldjur på piren, vacker vy över Neapelbukten',
      },
      {
        name: 'Terrazza Bosquet',
        description: 'Michelinstjärnad, kreativ medelhavsmat',
      },
    ],
    bars: [
      {
        name: 'Fauno Bar',
        description: 'Centralt på Piazza Tasso, bra för aperitivo',
      },
      {
        name: 'English Inn Pub',
        description: 'Internationell pubstil, ofta livemusik',
      },
      {
        name: 'Corner Bar',
        description: 'Smått trångt men populärt för kvällsdrink',
      },
    ],
    clubs: [
      { name: 'Filou Club', description: 'Piano bar som blir dansgolv sent' },
      { name: 'Club BluMare', description: 'Sjöbodsklubb, säsongsvis öppen' },
      {
        name: 'Dance Nights @ Hotel Central',
        description: 'Sporadiska events för gäster och lokalbefolkning',
      },
    ],
  },

  // 136) Lake Como
  'Lake Como': {
    restaurants: [
      {
        name: 'Il Gatto Nero',
        description: 'Utsikt över sjön, italiensk fine dining i Cernobbio',
      },
      {
        name: 'Ristorante Silvio',
        description: 'Färsk fisk från sjön, familjedrivet i Bellagio',
      },
      {
        name: 'Locanda La Tirlindana',
        description: 'Charmigt i Sala Comacina, romantisk uteservering',
      },
    ],
    bars: [
      {
        name: 'Lido di Bellagio',
        description: 'Strandbar på dagen, lounge på kvällen',
      },
      {
        name: 'Harry’s Bar (Como)',
        description: 'Klassisk italiensk bar, stilig inredning',
      },
      {
        name: 'Terrazza 241',
        description: 'Takbar i Hilton Como, vy över sjön och staden',
      },
    ],
    clubs: [
      {
        name: 'Lido di Cadenabbia',
        description: 'Klubb vid vattnet, sommaröppen',
      },
      { name: 'Made Club Como', description: 'Urban, EDM, helgkvällar med DJ' },
      {
        name: 'Villa Geno Events',
        description: 'Sporadiska fester i lyxmiljö',
      },
    ],
  },

  // 137) Lake Garda
  'Lake Garda': {
    restaurants: [
      {
        name: 'Trattoria La Grotta',
        description: 'Hemlagad pasta i Sirmione, rustik miljö',
      },
      {
        name: 'La Rucola 2.0',
        description: 'Michelinstjärnad kreativ italiensk meny, Sirmione',
      },
      {
        name: 'Vecchio Mulino Beach',
        description: 'Strandrestaurang i Desenzano med fiskrätter',
      },
    ],
    bars: [
      {
        name: 'Caffè Italia (Riva del Garda)',
        description: 'Klassisk italiensk bar, bra vinutbud',
      },
      {
        name: 'Morgan’s Cocktail Bar (Bardolino)',
        description: 'Sofistikerade drinkar vid sjökanten',
      },
      {
        name: 'Blue Garden Bar (Malcesine)',
        description: 'Panoramautsikt över sjön, loungekänsla',
      },
    ],
    clubs: [
      {
        name: 'Sesto Senso (Desenzano)',
        description: 'Lyxig klubb med internationella DJ:s',
      },
      {
        name: 'Plaza Disco (Lonato)',
        description: 'Stort dansgolv, kommersiell pop och house',
      },
      {
        name: 'Hollywood Dance Club (Bardolino)',
        description: 'Sommartid utomhus, populärt bland unga',
      },
    ],
  },

  // 138) Samos
  Samos: {
    restaurants: [
      {
        name: 'Nereas',
        description: 'Fisk- och skaldjursfokus i Pythagorion hamn',
      },
      {
        name: 'Elia Restaurant',
        description: 'Grekiska mezerätter, mysig innergård i Vathy',
      },
      {
        name: 'Ammos Plaz',
        description: 'Strandnära med grill och sallader i Kokkari',
      },
    ],
    bars: [
      {
        name: 'Iera Odos Art Cafe',
        description: 'Konstnärlig atmosfär, lokalt vin och ouzo',
      },
      {
        name: 'Why Not? Beach Bar',
        description: 'Badplats på dagen, cocktailbar på kvällen',
      },
      {
        name: 'Cafe Avgo',
        description: 'Avslappnad cafébar med musik och utsikt',
      },
    ],
    clubs: [
      {
        name: 'Mple Club (Blue Club)',
        description: 'Utekväll i Samos stad, grekisk pop och internationellt',
      },
      {
        name: 'Escape Club',
        description: 'Dansgolv nära Pythagorion, öppen sommartid',
      },
      {
        name: 'Night Fever (Kokkari)',
        description: 'Lokalt diskotek, retro- och modern musikmix',
      },
    ],
    Hamburg: {
      restaurants: [
        {
          name: 'Fischereihafen Restaurant',
          description:
            'Känd för färska skaldjur och traditionella nordtyska rätter',
        },
        {
          name: 'Bullerei',
          description:
            'Trendigt stekhus av TV-kocken Tim Mälzer i en gammal slakthusbyggnad',
        },
        {
          name: 'Tschebull',
          description: 'Österrikisk gourmetrestaurang med modern twist',
        },
      ],
      bars: [
        {
          name: '20up',
          description: 'Exklusiv bar med panoramautsikt över Hamburgs skyline',
        },
        {
          name: 'Chug Club',
          description: 'Mysig cocktailbar med fokus på tequila och mezcal',
        },
        {
          name: 'StrandPauli',
          description: 'Avslappnad strandbar vid Elbe med härliga sommarvibbar',
        },
      ],
      clubs: [
        {
          name: 'Grosse Freiheit 36',
          description:
            'Legendarisk klubb i St. Pauli med rock och popkonserter',
        },
        {
          name: 'Moondoo',
          description:
            'Elegant nattklubb i Reeperbahn-området med R&B och house',
        },
        {
          name: 'Uebel & Gefährlich',
          description:
            'Unik klubb i en gammal bunker, känd för elektronisk musik',
        },
      ],
    },
    Köln: {
      restaurants: [
        {
          name: 'Peters Brauhaus',
          description:
            'Traditionell kölsch mat och öl i en historisk bryggeriatmosfär',
        },
        {
          name: 'Bei Oma Kleinmann',
          description: 'Berömd för gigantiska schnitzlar i hemtrevlig miljö',
        },
        {
          name: 'NENI',
          description:
            'Mångkulturell fusionrestaurang på taket av 25hours Hotel',
        },
      ],
      bars: [
        {
          name: 'Suderman Bar',
          description: 'Cocktailbar med kreativa drinkar och retro vibe',
        },
        {
          name: 'Spirits',
          description:
            'Populär bar med stort utbud av gin och andra spritsorter',
        },
        {
          name: 'Seiberts',
          description: 'Elegant cocktailbar rankad bland Tysklands bästa',
        },
      ],
      clubs: [
        {
          name: 'Bootshaus',
          description: 'Världsberömd nattklubb med fokus på EDM och techno',
        },
        { name: 'Diamonds', description: 'Lyxig klubb med R&B och hiphop' },
        {
          name: 'Vanity Club',
          description: 'Stilren klubb med internationella DJs',
        },
      ],
    },
    Frankfurt: {
      restaurants: [
        {
          name: 'Apfelwein Wagner',
          description:
            'Traditionell äppelvinsrestaurang med lokala specialiteter',
        },
        {
          name: 'Emma Metzler',
          description: 'Modern fine dining i konstmuseets omgivningar',
        },
        {
          name: 'Main Tower Restaurant & Lounge',
          description: 'Exklusiv restaurang med panoramautsikt över staden',
        },
      ],
      bars: [
        { name: 'Kinly Bar', description: 'Hantverkscocktails i intim miljö' },
        {
          name: 'Die Rote Bar',
          description: 'Retroinspirerad bar med unika drinkar och atmosfär',
        },
        {
          name: 'Bar Plank',
          description: 'Trendig bar med fokus på naturviner och cocktails',
        },
      ],
      clubs: [
        {
          name: 'Gibson Club',
          description: 'Känd klubb för liveframträdanden och DJ-spelningar',
        },
        {
          name: 'Tanzhaus West',
          description: 'Underground-elektronisk musikscen i en industrilokal',
        },
        {
          name: 'Zoom',
          description: 'Mångsidig klubb med både konserter och DJ-kvällar',
        },
      ],
    },
    Paris: {
      restaurants: [
        {
          name: 'Le Comptoir du Relais',
          description: 'Bistroklassiker av stjärnkocken Yves Camdeborde',
        },
        {
          name: 'Septime',
          description: 'Modern fransk gastronomi i avslappnad atmosfär',
        },
        {
          name: 'Le Jules Verne',
          description: 'Fine dining i Eiffeltornet med fantastisk utsikt',
        },
      ],
      bars: [
        {
          name: 'Experimental Cocktail Club',
          description: 'Innovativa drinkar i hemlighetsfull lokal',
        },
        {
          name: "Harry's New York Bar",
          description: 'Historisk bar känd för klassiska cocktails',
        },
        {
          name: 'Candelaria',
          description: 'Mexikansk tacobar med dold cocktailbar i bakre rummet',
        },
      ],
      clubs: [
        { name: 'Rex Club', description: 'Elektronisk musikikon sedan 1992' },
        {
          name: 'La Machine du Moulin Rouge',
          description: 'Vibrerande klubb i den berömda Moulin Rouge-byggnaden',
        },
        {
          name: 'Concrete',
          description: 'Flytande klubb på Seine, känd för techno och house',
        },
      ],
    },
    Lyon: {
      restaurants: [
        {
          name: 'Bouchon Les Lyonnaiseries',
          description: 'Traditionell Lyon-bistro med klassiska rätter',
        },
        {
          name: 'Le Sud',
          description:
            'Medelhavsinspirerad restaurang av stjärnkocken Paul Bocuse',
        },
        {
          name: 'La Mère Brazier',
          description: 'Historisk Michelin-restaurang med traditionella rätter',
        },
      ],
      bars: [
        {
          name: 'Le Sucre',
          description: 'Takbar och musikscen med fantastisk utsikt',
        },
        {
          name: "L'Antiquaire",
          description: 'Cocktailbar i retrostil med unika kompositioner',
        },
        {
          name: 'Le Soda Bar',
          description: 'Livlig bar med kreativa drinkar och DJ-kvällar',
        },
      ],
      clubs: [
        {
          name: 'Bellona Club',
          description: 'Flytande klubb vid floden Rhône med elektronisk musik',
        },
        {
          name: 'Le Petit Salon',
          description: 'Populär nattklubb med fokus på techno och house',
        },
        {
          name: 'Ninkasi Kao',
          description:
            'Del av bryggeriet Ninkasi med konserter och DJ-spelningar',
        },
      ],
    },
    Marseille: {
      restaurants: [
        {
          name: 'Chez Fonfon',
          description: 'Känd för äkta bouillabaisse och färsk fisk',
        },
        {
          name: 'Le Petit Nice Passedat',
          description:
            'Tre-stjärnig Michelin med panoramautsikt över Medelhavet',
        },
        {
          name: 'Chez Etienne',
          description:
            'Enkel pizzeria och fiskrestaurang som är en lokal favorit',
        },
      ],
      bars: [
        {
          name: 'La Caravelle',
          description: 'Historisk bar med utsikt över gamla hamnen',
        },
        {
          name: 'Carry Nation',
          description: 'Hemlig speakeasy-bar med vintageatmosfär',
        },
        {
          name: 'Le Trolleybus',
          description: 'Bar och klubb under jord med olika musikstilar',
        },
      ],
      clubs: [
        {
          name: 'La Friche La Belle de Mai',
          description: 'Kulturcentrum med nattklubb och livemusik',
        },
        {
          name: 'Baby Club',
          description: 'Elektronisk musikklubb med internationella DJs',
        },
        {
          name: 'Sport Beach',
          description: 'Sommarklubb vid stranden med pool och DJ:s',
        },
      ],
    },
    Bordeaux: {
      restaurants: [
        {
          name: 'La Tupina',
          description: 'Rustik restaurang med traditionell sydvästfransk mat',
        },
        {
          name: 'Le Quatrième Mur',
          description: 'Brasserie av stjärnkocken Philippe Etchebest',
        },
        { name: 'Miles', description: 'Modern fusion i hjärtat av Bordeaux' },
      ],
      bars: [
        {
          name: 'Mama Shelter Rooftop Bar',
          description: 'Takbar med färgglad design och utsikt',
        },
        {
          name: 'Le Bar à Vin',
          description: 'Vinbar som erbjuder regionala viner och ostar',
        },
        {
          name: 'Symbiose',
          description: 'Trendig cocktailbar med innovativa smaker',
        },
      ],
      clubs: [
        {
          name: 'The Base',
          description: 'Livlig nattklubb med blandad musik och temakvällar',
        },
        {
          name: 'BT59',
          description: 'Alternativ musikscen i en gammal industrilokal',
        },
        { name: 'Black Diamond', description: 'Glamorös klubb i centrum' },
      ],
    },
    Bryssel: {
      restaurants: [
        {
          name: 'Chez Léon',
          description:
            'Klassisk belgisk restaurang känd för sina musslor och pommes',
        },
        {
          name: 'Comme Chez Soi',
          description: 'Michelin-upplevelse med innovativa belgiska rätter',
        },
        {
          name: 'Fin de Siècle',
          description: 'Rustik mat med traditionella rätter i folklig miljö',
        },
      ],
      bars: [
        {
          name: 'Delirium Café',
          description: 'Världsberömt för sitt enorma ölutbud',
        },
        {
          name: 'Moeder Lambic',
          description: 'Hantverksölbar med fokus på belgiska bryggerier',
        },
        {
          name: 'A La Mort Subite',
          description: 'Historisk ölhall med sekelskiftescharm',
        },
      ],
      clubs: [
        {
          name: 'Fuse',
          description:
            'Ikonisk technoklubb känd för sina internationella bokningar',
        },
        { name: 'Spirito', description: 'Lyxig klubb i en ombyggd kyrka' },
        {
          name: 'Bloody Louis',
          description: 'Populär klubb med R&B, hip hop och house',
        },
      ],
    },
    Brugge: {
      restaurants: [
        {
          name: 'De Stove',
          description: 'Charmig familjeägd restaurang med hemlagad belgisk mat',
        },
        {
          name: 'Den Gouden Harynck',
          description:
            'Michelin-stjärna med kreativa tolkningar av klassiska rätter',
        },
        {
          name: 'Poules Moules',
          description: 'Specialist på musslor i olika variationer',
        },
      ],
      bars: [
        {
          name: '2be Beer Wall',
          description: 'Stor ölprovningsbar med utsikt över kanalen',
        },
        {
          name: 'Café Rose Red',
          description: 'Mysig ölbar med ett brett utbud av belgiska ölsorter',
        },
        {
          name: "'t Poatersgat",
          description: 'Källarbar med historisk atmosfär och stora ölval',
        },
      ],
      clubs: [
        { name: 'The Barge', description: 'Flytande festlokal på en kanalbåt' },
        {
          name: 'Club Bras',
          description: 'Livlig klubb med blandade musikgenrer',
        },
        {
          name: 'De Coulissen',
          description: 'Klubb och evenemangsplats med varierat utbud',
        },
      ],
    },
    Gent: {
      restaurants: [
        {
          name: 'Pakhuis',
          description: 'Modern brasserie i en tidigare lagerbyggnad',
        },
        {
          name: 'Publiek',
          description:
            'Michelin-stjärna med experimentell meny och avslappnad miljö',
        },
        {
          name: 'Vrijmoed',
          description: 'Fine dining med fokus på säsongsbetonade råvaror',
        },
      ],
      bars: [
        {
          name: 'Dulle Griet',
          description: 'Känd för sitt stora ölutbud och den ikoniska ölstöveln',
        },
        {
          name: 'Hot Club de Gand',
          description: 'Jazzbar i en gömd gränd med levande musik',
        },
        {
          name: 'Gin & Tonic Atelier',
          description: 'Specialiserad på gin & tonic-variationer',
        },
      ],
      clubs: [
        {
          name: 'Kompass Klub',
          description: 'Elektronisk musikscen i industriell miljö',
        },
        {
          name: 'Culture Club',
          description: 'Stilfull klubb med en blandning av house och R&B',
        },
        {
          name: 'Charlatan',
          description: 'Alternativ scen för konserter och klubbkvällar',
        },
      ],
    },
    Zürich: {
      restaurants: [
        {
          name: 'Kronenhalle',
          description:
            'Klassisk restaurang med konstsamling och schweiziska specialiteter',
        },
        {
          name: 'Hiltl',
          description: 'Världens äldsta vegetariska restaurang, grundad 1898',
        },
        {
          name: "Didi's Frieden",
          description: 'Modernt schweiziskt kök i intim atmosfär',
        },
      ],
      bars: [
        {
          name: 'Widder Bar',
          description: 'Exklusiv bar med ett stort whiskyutbud och livejazz',
        },
        {
          name: 'Frau Gerolds Garten',
          description: 'Utomhusbar och stadsodling med avslappnad stämning',
        },
        {
          name: 'Rimini',
          description: 'Herrbad på dagen och bar på kvällen med flodutsikt',
        },
      ],
      clubs: [
        {
          name: 'Kaufleuten',
          description: 'Legendarisk klubb och konsertarena',
        },
        {
          name: 'Hive',
          description:
            'Underground-techno och house i en mörk, industriell miljö',
        },
        {
          name: 'Mascotte',
          description:
            'Historisk live-musikställe och nattklubb i centrala Zürich',
        },
      ],
    },
    Genève: {
      restaurants: [
        {
          name: 'Café du Soleil',
          description: 'Berömd för sin traditionella schweiziska fondue',
        },
        {
          name: 'Il Lago',
          description: 'Italiensk fine dining på Four Seasons Hotel',
        },
        {
          name: 'Bayview by Michel Roth',
          description: 'Michelin-stjärna med utsikt över Genèvesjön',
        },
      ],
      bars: [
        {
          name: 'Le Verre à Monique',
          description: 'Cocktailbar med vintageinspirerad inredning',
        },
        {
          name: "L'Atelier Cocktail Club",
          description: 'Modern bar med kreativa signaturdrinkar',
        },
        {
          name: 'Barbershop',
          description: 'Hiphop-influerad bar med urban atmosfär',
        },
      ],
      clubs: [
        {
          name: 'Java Club',
          description:
            'Elegant klubb i Hotel Métropole med internationella DJs',
        },
        {
          name: 'Mambo Club',
          description: 'Latino- och karibisk dansmusik mitt i Genève',
        },
        {
          name: 'Petit Palace',
          description: 'Exklusiv klubb med VIP-områden och lockande musik',
        },
      ],
    },
    Interlaken: {
      restaurants: [
        {
          name: 'Restaurant Taverne',
          description: 'Traditionella schweiziska rätter i en elegant atmosfär',
        },
        {
          name: 'Hüsi Bierhaus',
          description: 'Avslappnad pubstil med lokala ölsorter och mat',
        },
        {
          name: 'Ox Restaurant & Grill',
          description: 'Grillrätter och specialiteter med alpinskt tema',
        },
      ],
      bars: [
        {
          name: 'Balmers Beer Garden',
          description: 'Populär bar och hostel med livlig backpacker-stämning',
        },
        {
          name: 'Hüsi Pub',
          description: 'Mysig pub med stort öl- och whiskysortiment',
        },
        {
          name: 'Metro Bar',
          description: 'Trendig loungebar i centrum av Interlaken',
        },
      ],
      clubs: [
        {
          name: 'Balmers Club',
          description: 'Livlig nattklubb i ett av Europas äldsta vandrarhem',
        },
        {
          name: 'Crazy Mary’s Pub',
          description:
            'Pub som ibland förvandlas till dansgolv sent på kvällen',
        },
        {
          name: 'The Cave',
          description: 'Underjordisk klubbmiljö med blandade musikstilar',
        },
      ],
    },
    Vienna: {
      restaurants: [
        {
          name: 'Figlmüller',
          description: 'Världsberömt för sin gigantiska wienerschnitzel',
        },
        {
          name: 'Plachutta Wollzeile',
          description: 'Klassisk österrikisk mat med fokus på Tafelspitz',
        },
        {
          name: 'Steirereck',
          description: 'Tvåstjärnig Michelin med modern österrikisk gastronomi',
        },
      ],
      bars: [
        {
          name: 'Loos Bar (American Bar)',
          description: 'Historisk bar designad av arkitekten Adolf Loos',
        },
        {
          name: 'Kleinod',
          description: 'Trendigt ställe med kreativa cocktails i chic miljö',
        },
        {
          name: 'Das Loft Bar & Lounge',
          description: 'Takbar med panoramautsikt över Wien',
        },
      ],
      clubs: [
        {
          name: 'Pratersauna',
          description:
            'Klubbkomplex med pool, flera dansgolv och utomhusområde',
        },
        {
          name: 'Flex',
          description: 'En av Europas bästa klubbar för elektronisk musik',
        },
        {
          name: 'Volksgarten',
          description:
            'Klassisk klubb med olika musikstilar och vacker trädgård',
        },
      ],
    },
    Salzburg: {
      restaurants: [
        {
          name: 'St. Peter Stiftskulinarium',
          description: 'En av Europas äldsta restauranger i klostermiljö',
        },
        {
          name: 'Zum fidelen Affen',
          description: 'Traditionellt österrikiskt kök med modern touch',
        },
        {
          name: 'Carpe Diem Finest Fingerfood',
          description: 'Michelin-stjärnig restaurang med exklusiva små rätter',
        },
      ],
      bars: [
        {
          name: 'Augustiner Bräu Kloster Mülln',
          description: 'Brygghus och ölhall med anor från 1600-talet',
        },
        {
          name: 'Afro Café',
          description: 'Färgglad café/bar med afrikanska influenser',
        },
        {
          name: 'Little Grain',
          description: 'Cocktailbar med fokus på kvalitetsdrycker och atmosfär',
        },
      ],
      clubs: [
        {
          name: 'City Beats',
          description: 'Mångsidig klubb med olika musikgenrer',
        },
        {
          name: 'Half Moon',
          description:
            'Legendarisk nattklubb i en källare under en historisk byggnad',
        },
        {
          name: 'Rockhouse',
          description: 'Konsertlokal och klubb för rock- och alternativmusik',
        },
      ],
    },
    Innsbruck: {
      restaurants: [
        {
          name: 'Die Wilderin',
          description: 'Säsongsbetonad och hållbar meny i modern atmosfär',
        },
        {
          name: 'Weinhaus Happ',
          description: 'Traditionell tyrolsk mat med bra vinlista',
        },
        {
          name: 'Lichtblick',
          description: 'Takrestaurang med panoramautsikt över Alperna',
        },
      ],
      bars: [
        {
          name: 'Moustache',
          description: 'Populär bar med livespelningar och DJ-kvällar',
        },
        {
          name: 'Kater Noster',
          description: 'Cocktailbar med kreativ meny och urban vibe',
        },
        {
          name: 'Dachsbau',
          description: 'Ungdomlig bar med alternativa events och musik',
        },
      ],
      clubs: [
        {
          name: 'Hofgarten Club',
          description:
            'Belägen vid den historiska parken, med elektronisk musik',
        },
        {
          name: 'Blue Chip',
          description: 'Studentvänlig nattklubb med varierande musik',
        },
        {
          name: 'Aftershave',
          description: 'Centralt belägen klubb med fokus på danshits',
        },
      ],
    },
    Hallstatt: {
      restaurants: [
        {
          name: 'Gasthof Zauner',
          description:
            'Familjeägd restaurang med traditionella österrikiska rätter',
        },
        {
          name: 'Restaurant im Seehotel Grüner Baum',
          description: 'Utsökt mat med vy över Hallstatt-sjön',
        },
        {
          name: 'BRAUGASTHOF am Hallstättersee',
          description: 'Mysigt bryggeri och restaurang vid vattnet',
        },
      ],
      bars: [
        {
          name: 'Rudolfsturm',
          description: 'Utsiktsrestaurang och bar högt ovanför Hallstatt',
        },
        {
          name: 'Heritage Café & Bar',
          description: 'Del av Heritage Hotel, avslappnad lounge och café',
        },
        {
          name: 'Seewirt Zauner Bar',
          description: 'Inne i Gasthof Zauner, rustik atmosfär för en drink',
        },
      ],
      clubs: [
        {
          name: 'Ingen renodlad nattklubb',
          description: 'Mindre barer och pubar dominerar kvällslivet',
        },
        {
          name: 'Eventuella fester på hotell',
          description: 'Fester sker ofta i privat regi på hotell/restauranger',
        },
        {
          name: 'Res till närliggande städer',
          description: 'För större klubbscen krävs resa till ex. Salzburg',
        },
      ],
    },
    Stockholm: {
      restaurants: [
        {
          name: 'Oaxen Krog & Slip',
          description: 'Fine dining i skärgårdsmiljö på Djurgården',
        },
        {
          name: 'Riche',
          description: 'Klassisk brasserie med modern twist vid Stureplan',
        },
        {
          name: 'Gastrologik',
          description: 'Michelin-restaurang som fokuserar på nordiska råvaror',
        },
      ],
      bars: [
        {
          name: 'Tweed',
          description:
            'Gentlemannaklubbskänsla med cigarr- och cocktailmeny i Gamla Stan',
        },
        {
          name: 'Tjoget',
          description:
            'Populärt ställe i Hornstull med bar, vinbar och barberarsalong',
        },
        {
          name: 'Himlen',
          description: 'Skybar med panorama över hela Stockholm',
        },
      ],
      clubs: [
        {
          name: 'Trädgården',
          description: 'Sommarklubb under Skanstullsbron med utomhusdansgolv',
        },
        { name: 'Berns', description: 'Klubb och konsertlokal i anrik miljö' },
        {
          name: 'Spy Bar',
          description: 'Känd Stureplansklubb för den trendiga publiken',
        },
      ],
    },
    Göteborg: {
      restaurants: [
        {
          name: 'Sjömagasinet',
          description:
            'Fisk- och skaldjursrestaurang med stjärnstatus och havsutsikt',
        },
        {
          name: 'Bhoga',
          description: 'Michelin-stjärnig restaurang med kreativ nordisk meny',
        },
        {
          name: 'Toso',
          description: 'Asiatisk fusion med modern design på Götaplatsen',
        },
      ],
      bars: [
        {
          name: 'Puta Madre',
          description:
            'Mexikansk bar och restaurang med unik kitschig inredning',
        },
        {
          name: 'Stranger',
          description: 'Ny hip cocktailbar med fokus på hantverksdrinkar',
        },
        {
          name: 'Bar Bruno',
          description: 'Vinbar i Majorna med naturvinsfokus',
        },
      ],
      clubs: [
        {
          name: 'Nefertiti',
          description:
            'Legendarisk jazzklubb som förvandlas till nattklubb på helger',
        },
        {
          name: 'Yaki-Da',
          description: 'Flervåningsklubb med olika musikstilar',
        },
        {
          name: 'Gretas',
          description:
            'En av Sveriges äldsta HBTQ-klubbar med drag- och dansgolv',
        },
      ],
    },
    Malmö: {
      restaurants: [
        {
          name: 'Bastard',
          description: 'Rustik meny med fokus på närodlade råvaror',
        },
        {
          name: 'Vollmers',
          description: 'Tvåstjärnig Michelin med skånsk gastronomi i toppklass',
        },
        {
          name: 'Lyran',
          description:
            'Säsongsbaserad meny med lokalt producerade ingredienser',
        },
      ],
      bars: [
        {
          name: "MJ's Bar",
          description: 'Trendig cocktailbar i ett boutiquehotell',
        },
        {
          name: 'Care/Of',
          description: 'Mindre vinbar med personligt utvalda flaskor',
        },
        {
          name: 'BrewDog Malmö',
          description: 'Hantverksölbar med internationellt ölutbud',
        },
      ],
      clubs: [
        {
          name: 'Etage',
          description: 'Större nattklubb med kommersiell musik och dansgolv',
        },
        {
          name: 'Babel',
          description:
            'Kulturell mötesplats i en gammal kyrka med livemusik och DJ:s',
        },
        {
          name: 'Moriskan',
          description:
            'Del av Folkets Park med olika temaklubbar och konserter',
        },
      ],
    },
    Århus: {
      restaurants: [
        {
          name: 'Frederikshøj',
          description: 'Michelin-stjärna under ledning av kocken Wassim Hallal',
        },
        {
          name: 'Restaurant Domestic',
          description: 'Hyllad för sitt moderna nordiska kök',
        },
        {
          name: 'Mefisto',
          description: 'Färsk fisk och skaldjur i pittoresk kvartersmiljö',
        },
      ],
      bars: [
        {
          name: 'St. Pauls Apothek',
          description: 'Apotekstema med innovativa cocktails',
        },
        {
          name: 'Tir Na Nog',
          description: 'Irländsk pub med livemusik och folklig stämning',
        },
        {
          name: 'Gedulgt',
          description: 'Speakeasy-bar gömd bakom en anonym dörr',
        },
      ],
      clubs: [
        {
          name: 'Train',
          description: 'Stor nattklubb och konsertlokal med varierad musik',
        },
        {
          name: 'Kupé',
          description: 'Chic klubb med elektronisk musik och R&B',
        },
        {
          name: 'Herr Bartels',
          description: 'Mindre klubb med rock- och popinriktning',
        },
      ],
    },
    Oslo: {
      restaurants: [
        {
          name: 'Maaemo',
          description: 'Tre-stjärnig Michelin med fokus på norska råvaror',
        },
        {
          name: 'Lofoten Fiskerestaurant',
          description: 'Färsk fisk och skaldjur vid Aker Brygge',
        },
        {
          name: 'Arakataka',
          description: 'Modern bistro med nordiska smaker i fokus',
        },
      ],
      bars: [
        {
          name: 'Himkok',
          description:
            'Rankad bland världens bästa barer, eget destilleri och spännande cocktails',
        },
        {
          name: 'Blå',
          description: 'Kulturhus med bar och konsertlokal vid Akerselva',
        },
        {
          name: 'Kulturhuset',
          description: 'Mångsidig mötesplats med flera barer och events',
        },
      ],
      clubs: [
        {
          name: 'The Villa',
          description: 'Elektronisk undergroundklubb med internationella DJs',
        },
        {
          name: 'Jaeger',
          description: 'Populärt dansställe med fokus på house och techno',
        },
        {
          name: 'Night Pig',
          description: 'Nyare klubb med modern vibe och varierad musik',
        },
      ],
    },
    Bergen: {
      restaurants: [
        {
          name: 'Bryggeloftet & Stuene',
          description: 'Havsinspirerade norska rätter i historisk miljö',
        },
        {
          name: 'Cornelius Sjømatrestaurant',
          description: 'Färsk fisk och skaldjur på en egen ö med havsutsikt',
        },
        {
          name: 'Colonialen 44',
          description: 'Högkvalitativ nordisk meny i elegant atmosfär',
        },
      ],
      bars: [
        {
          name: 'Pingvinen',
          description: 'Mysig bar och restaurang med norska husmansrätter',
        },
        {
          name: 'No Stress',
          description: 'Avslappnad cocktailbar med kreativa drinkar',
        },
        {
          name: 'Dyvekes Vinkjeller',
          description: 'Historisk vinkällare i hjärtat av Bergen',
        },
      ],
      clubs: [
        {
          name: 'Metro',
          description: 'Populär nattklubb med kommersiell musik',
        },
        { name: 'Ricks', description: 'Klubb och showrestaurang i centrum' },
        {
          name: 'Lille',
          description: 'Mindre klubb med lokala DJ:s och livemusik',
        },
      ],
    },
    Stavanger: {
      restaurants: [
        {
          name: 'Sabi Omakase',
          description: 'Michelin-stjärnig sushiupplevelse',
        },
        {
          name: 'Fisketorget',
          description:
            'Skaldjursrestaurang med råvaror direkt från fiskmarknaden',
        },
        {
          name: 'Restaurant Renaa',
          description: 'Moderna nordiska rätter med lokalt fokus',
        },
      ],
      bars: [
        {
          name: 'Bøker & Børst',
          description: 'Café/bar med litterär atmosfär',
        },
        {
          name: 'Cardinal',
          description:
            'Ölbar med imponerande utbud av internationella ölsorter',
        },
        {
          name: 'Tango Bar',
          description: 'Cocktailbar med spännande smaker och tapas',
        },
      ],
      clubs: [
        {
          name: 'Hall Toll',
          description: 'Större nattklubb i gammal tullbyggnad',
        },
        {
          name: 'Alf & Werner',
          description: 'Flera våningar med olika musikgenrer',
        },
        {
          name: 'Gnu',
          description: 'Studentvänlig klubb med festlig stämning',
        },
      ],
    },
    Lofoten: {
      restaurants: [
        {
          name: 'Fiskekrogen',
          description: 'Klassisk fiskrestaurang i Henningsvær',
        },
        {
          name: 'Børsen Spiseri',
          description: 'Genuin atmosfär och skaldjur i en historisk brygga',
        },
        {
          name: 'Du Verden',
          description: 'Modern bistro med havsutsikt i Svolvær',
        },
      ],
      bars: [
        {
          name: 'Bar Nord',
          description: 'Avslappnad bar med lokalt öl och utsikt över fjorden',
        },
        {
          name: 'Klatrekaféen',
          description:
            'Mötesplats för klättrare i Henningsvær med enkel bar & mat',
        },
        {
          name: 'Bacalao',
          description: 'Livlig samlingsplats i Svolvær med musik och mat',
        },
      ],
      clubs: [
        {
          name: 'Ingen renodlad nattklubb',
          description: 'Lofoten har främst barer och pubar för socialt umgänge',
        },
        {
          name: 'Eventuella fester på hotell & hostels',
          description: 'Lokala event och säsongsfester',
        },
        {
          name: 'Res till större städer',
          description:
            'För större klubbscen krävs resa till t.ex. Bodø eller Tromsø',
        },
      ],
    },
    Tallinn: {
      restaurants: [
        {
          name: 'Rataskaevu 16',
          description: 'Populär estnisk restaurang med charmig interiör',
        },
        {
          name: 'Leib Resto ja Aed',
          description: 'Fokus på lokala råvaror och hembakat bröd',
        },
        {
          name: 'NOA',
          description: 'Modern restaurang vid havet med panoramautsikt',
        },
      ],
      bars: [
        {
          name: 'Frank',
          description: 'Stilfull cocktailbar mitt i Gamla stan',
        },
        {
          name: 'Sigmund Freud',
          description: 'Psykologi-tema med innovativa drinkar',
        },
        {
          name: 'Põrgu',
          description: 'Ölbar i källarvalv med estniska mikrobrygder',
        },
      ],
      clubs: [
        {
          name: 'Club Hollywood',
          description: 'En av stadens mest kända nattklubbar',
        },
        {
          name: 'Venus Club',
          description: 'Kommersiell musik i glammig miljö',
        },
        {
          name: 'Studio',
          description:
            'Trendig klubb med elektronisk musik och internationella DJ:s',
        },
      ],
    },
    Riga: {
      restaurants: [
        {
          name: '1221 Restaurant',
          description: 'Traditionellt lettiskt kök i en historisk byggnad',
        },
        {
          name: 'Folkklubs Ala Pagrabs',
          description: 'Medeltida källare med livefolkmusik och lettisk mat',
        },
        {
          name: 'Vincents',
          description:
            'Fine dining med internationell prägel och lokala råvaror',
        },
      ],
      bars: [
        {
          name: 'Skyline Bar',
          description: 'Takbar med storslagen utsikt över Riga',
        },
        {
          name: 'Omas Briljants',
          description: 'Mysig retrobar med unika cocktails',
        },
        { name: 'Cuba Cafe', description: 'Latinsk atmosfär och salsakvällar' },
      ],
      clubs: [
        {
          name: 'Coyote Fly',
          description: 'Populär klubb för den yngre publiken',
        },
        {
          name: 'OneOne',
          description: 'Elektronisk musikscen med underground-känsla',
        },
        { name: 'First Dacha', description: 'Sommarklubb vid floden Daugava' },
      ],
    },
    Vilnius: {
      restaurants: [
        {
          name: 'Lokys',
          description:
            'Medevil-liknande miljö med traditionella litauiska rätter',
        },
        {
          name: 'Džiaugsmas',
          description: 'Modern litauisk gastronomi med lokala ingredienser',
        },
        {
          name: 'Ertlio Namas',
          description: 'Historisk meny baserad på gamla recept',
        },
      ],
      bars: [
        {
          name: 'Šnekutis',
          description: 'Avslappnad pub med stort utbud av litauisk öl',
        },
        {
          name: 'Alchemikas',
          description: 'Mystisk cocktailbar med exklusiva drinkar',
        },
        {
          name: 'Who Hit John',
          description: 'Konceptbar med retrokänsla och jazz',
        },
      ],
      clubs: [
        {
          name: 'Loftas',
          description: 'Multifunktionell konsertlokal och nattklubb',
        },
        {
          name: 'Opium',
          description:
            'Elektronisk musikscen med lokala och internationella DJs',
        },
        {
          name: 'Salento',
          description: 'Kommersiell klubb i centrala Vilnius',
        },
      ],
    },
    Reykjavik: {
      restaurants: [
        {
          name: 'Dill',
          description:
            'Islands första Michelin-stjärna med fokus på nordiska smaker',
        },
        {
          name: 'Grillmarkadurinn',
          description: 'Grillrestaurang med fokus på isländska råvaror',
        },
        {
          name: 'Fiskmarkadurinn',
          description: 'Färsk fisk och skaldjur i modern miljö',
        },
      ],
      bars: [
        {
          name: 'Lebowski Bar',
          description: 'Temabar inspirerad av filmen “The Big Lebowski”',
        },
        {
          name: 'Kaffibarinn',
          description:
            'Kultbar känd för sitt hipster-klientel och livlig atmosfär',
        },
        {
          name: 'Kex Hostel Bar',
          description: 'Hostelbar med industriell design och liveframträdanden',
        },
      ],
      clubs: [
        {
          name: 'Paloma',
          description: 'Elektronisk musik och alternativa events',
        },
        { name: 'Húrra', description: 'Mindre klubb med liveband och DJ:s' },
        {
          name: 'Austur',
          description: 'Trendigt dansställe i centrala Reykjavik',
        },
      ],
    },
    Madrid: {
      restaurants: [
        {
          name: 'Botín',
          description:
            'Världens äldsta restaurang, känd för sin ugnsrostade spädgris',
        },
        {
          name: 'DiverXO',
          description: 'Tre-stjärnig Michelin med avantgardistiska rätter',
        },
        {
          name: 'Casa Lucio',
          description: 'Berömt för sina huevos rotos och traditionella rätter',
        },
      ],
      bars: [
        {
          name: 'Museo Chicote',
          description: 'Historisk cocktailbar på Gran Vía',
        },
        { name: 'Del Diego', description: 'Klassiska drinkar i elegant miljö' },
        {
          name: '1862 Dry Bar',
          description: 'Genuin speakeasy-känsla med hantverkscocktails',
        },
      ],
      clubs: [
        { name: 'Kapital', description: 'Sju våningar av musik och dansgolv' },
        {
          name: 'Joy Eslava',
          description: 'Klubb i en före detta teater med livlig atmosfär',
        },
        {
          name: 'Teatro Barceló',
          description: 'Ikonisk nattklubb i tidigare Teatro Club',
        },
      ],
    },
    Sevilla: {
      restaurants: [
        {
          name: 'El Rinconcillo',
          description: 'Sevillas äldsta tapasbar med genuin andalusisk mat',
        },
        {
          name: 'Restaurante Eslava',
          description: 'Kreativa tapas och rätter i en avslappnad miljö',
        },
        {
          name: 'Abantal',
          description:
            'Michelin-stjärnig restaurang med modern andalusisk meny',
        },
      ],
      bars: [
        {
          name: 'El Garlochi',
          description:
            'Bar med kitschig inredning inspirerad av påskprocessioner',
        },
        {
          name: 'La Carbonería',
          description: 'Populärt flamencoställe med tapasbar',
        },
        {
          name: 'Casa Morales',
          description: 'Traditionell bodega med fatlagrade viner och tapas',
        },
      ],
      clubs: [
        {
          name: 'Antique Theatro',
          description: 'Stilfull klubb i gammal teaterlokal',
        },
        {
          name: 'Bilindo',
          description: 'Utomhusklubb vid floden med DJ-spelningar',
        },
        { name: 'Uthopia', description: 'Stor klubb med olika musikstilar' },
      ],
    },
    Bilbao: {
      restaurants: [
        {
          name: 'Azurmendi',
          description: 'Tre-stjärnig Michelin, innovativ baskisk mat',
        },
        {
          name: 'La Viña del Ensanche',
          description: 'Klassiska pintxos och traditionell baskisk atmosfär',
        },
        { name: 'Mina', description: 'Fine dining vid floden Nervión' },
      ],
      bars: [
        {
          name: 'Café Iruña',
          description: 'Morerisk inredning och historisk charm',
        },
        {
          name: 'Marzana',
          description: 'Trendigt barområde vid floden med flera barer',
        },
        { name: 'Singular', description: 'Cocktailbar med kreativt utbud' },
      ],
      clubs: [
        {
          name: 'Kafe Antzokia',
          description: 'Kulturcenter för konserter och nattklubb',
        },
        {
          name: 'Fever',
          description: 'Stadens ledande klubb för elektronisk musik',
        },
        {
          name: 'Cotton Club',
          description: 'Rock- och popinspirerad klubb med liveband',
        },
      ],
    },
    Lissabon: {
      restaurants: [
        {
          name: 'Belcanto',
          description: 'Två-stjärnig Michelin av kocken José Avillez',
        },
        {
          name: 'Cervejaria Ramiro',
          description: 'Legendariska skaldjur och lokala specialiteter',
        },
        {
          name: 'Time Out Market',
          description: 'Matmarknad med ett urval av stadens bästa matställen',
        },
      ],
      bars: [
        {
          name: 'Pensão Amor',
          description: 'Bohemisk bar i ett före detta bordellkvarter',
        },
        {
          name: 'Red Frog',
          description: 'Hemlig speakeasy med innovativa cocktails',
        },
        {
          name: 'PARK Bar',
          description:
            'Takbar på ett parkeringsdäck med utsikt över stadens takåsar',
        },
      ],
      clubs: [
        {
          name: 'Lux Frágil',
          description:
            'En av Europas främsta nattklubbar för elektronisk musik',
        },
        {
          name: 'Urban Beach',
          description: 'Utomhusklubb vid vattnet med strandkänsla',
        },
        {
          name: 'Musicbox',
          description:
            'Liveframträdanden och DJ:s i en intim lokal i Cais do Sodré',
        },
      ],
    },
    Porto: {
      restaurants: [
        {
          name: 'Casa de Chá da Boa Nova',
          description:
            'Michelin-stjärnig upplevelse vid havet av kocken Rui Paula',
        },
        {
          name: 'O Paparico',
          description: 'Traditionell portugisisk mat i en rustik miljö',
        },
        {
          name: 'Bacalhau',
          description: 'Fokus på torsk och andra lokala specialiteter',
        },
      ],
      bars: [
        { name: 'The Gin House', description: 'Stort urval av gin & tonics' },
        {
          name: 'Aduela',
          description: 'Populär vin- och ölbar med uteservering',
        },
        {
          name: 'Base Porto',
          description: 'Utomhusbar i trädgårdsmiljö vid Clérigos-tornet',
        },
      ],
      clubs: [
        {
          name: 'Gare Porto',
          description: 'Underground-klubb med techno och house',
        },
        {
          name: 'Industria',
          description: 'Långkörande klubb för elektronisk musik',
        },
        {
          name: 'Plano B',
          description: 'Två våningar med varierade musikstilar',
        },
      ],
    },
    Faro: {
      restaurants: [
        {
          name: 'Faz Gostos',
          description: 'Modern portugisisk gastronomi i historiska kvarter',
        },
        {
          name: 'Vila Adentro',
          description: 'Traditionell algarvemat i Faro gamla stad',
        },
        {
          name: 'Chefe Branco',
          description: 'Familjär stämning med grillade fisk- och kötträtter',
        },
      ],
      bars: [
        {
          name: 'Columbus',
          description: 'Cocktailbar med prisbelönta bartendrar',
        },
        {
          name: 'The Cheeky Pup',
          description: 'Irländsk-inspirerad gastropub',
        },
        { name: 'Mad Hat', description: 'Bar med Alice i Underlandet-tema' },
      ],
      clubs: [
        {
          name: 'Downtown Faro',
          description: 'Klubbområde med flera barer och klubbar nära varandra',
        },
        {
          name: 'Disco Ditadura',
          description: 'Lokal klubb för den unga publiken',
        },
        {
          name: 'Twice',
          description: 'Nattklubb som blandar internationella hits och latin',
        },
      ],
    },
    Azorerna: {
      restaurants: [
        {
          name: 'Alcides',
          description: 'Klassisk köttrestaurang i Ponta Delgada',
        },
        {
          name: 'Gastronomo',
          description: 'Fisk- och skaldjursfokus med lokala råvaror',
        },
        {
          name: 'Associação Agricola',
          description:
            'Känd för saftiga biffar och lantlig atmosfär på São Miguel',
        },
      ],
      bars: [
        {
          name: 'Peter Café Sport',
          description: 'Historisk seglarbar på ön Faial',
        },
        {
          name: 'Cella Bar',
          description: 'Arkitektoniskt prisad bar på Pico med havsutsikt',
        },
        {
          name: 'Tuká Tulá',
          description: 'Surfbar på São Miguel med avslappnad stämning',
        },
      ],
      clubs: [
        {
          name: 'Ingen stor klubbscen',
          description: 'Barer och pubar dominerar utelivet',
        },
        {
          name: 'Lokala festivaler',
          description: 'Fester och konserter främst under sommarens festivaler',
        },
        {
          name: 'Galera Club (Ponta Delgada)',
          description: 'Ett fåtal klubbar finns på huvudön São Miguel',
        },
      ],
    },
    Madeira: {
      restaurants: [
        {
          name: 'Armazém do Sal',
          description: 'Historisk saltlagerlokal med gourmeträtter',
        },
        {
          name: 'Casa Velha do Palheiro',
          description: 'Exklusiv matupplevelse i herrgårdsmiljö',
        },
        {
          name: 'Gallo d’Oro',
          description: 'Michelin-restaurang med fokus på atlantiska råvaror',
        },
      ],
      bars: [
        {
          name: 'Bar Number Two',
          description:
            'Klassisk bar i Funchal med cocktails och lokala drycker',
        },
        {
          name: 'Venda Velha',
          description: 'Traditionell poncha-bar med folklig stämning',
        },
        {
          name: 'Hole in One',
          description: 'Pubstil med livemusik och sportevenemang',
        },
      ],
      clubs: [
        {
          name: 'Copacabana (Casino da Madeira)',
          description: 'Klubb i samband med kasinot, ofta med temakvällar',
        },
        {
          name: 'Vespas Club',
          description: 'En av Madeiras äldsta klubbar med modern musik',
        },
        {
          name: 'Marginal',
          description: 'Dansställe vid havet med varierad musik',
        },
      ],
    },
    Rome: {
      restaurants: [
        {
          name: 'Da Enzo al 29',
          description: 'Familjär trattoria med autentisk romersk mat',
        },
        {
          name: 'Roscioli',
          description: 'Delikatessbutik och restaurang med högt anseende',
        },
        {
          name: 'La Pergola',
          description: 'Tre-stjärnig Michelin med panorama över Rom',
        },
      ],
      bars: [
        {
          name: 'Jerry Thomas Speakeasy',
          description: 'Hemmelig bar med strikt medlemskap',
        },
        {
          name: 'Freni e Frizioni',
          description: 'Populär aperitivo-bar i Trastevere',
        },
        {
          name: 'La Terrazza del Cesàri',
          description: 'Takbar med utsikt över Roms takåsar',
        },
      ],
      clubs: [
        {
          name: 'Goa Club',
          description: 'Elektronisk klubb med internationella DJ:s',
        },
        { name: 'Shari Vari', description: 'Flera rum med olika musikstilar' },
        {
          name: 'Art Café',
          description: 'Exklusivt ställe i närheten av Villa Borghese',
        },
      ],
    },
    Venedig: {
      restaurants: [
        {
          name: 'Osteria alle Testiere',
          description: 'Liten, intim restaurang med fokus på färsk fisk',
        },
        {
          name: 'Da Fiore',
          description: 'Michelin-stjärnig venetiansk fine dining',
        },
        {
          name: 'Al Covo',
          description:
            'Traditionella rätter med lokala råvaror och familjekänsla',
        },
      ],
      bars: [
        {
          name: 'Harry’s Bar',
          description: 'Hem till den berömda Bellini-cocktailen',
        },
        {
          name: 'Cantine del Vino già Schiavi',
          description: 'Cicchetti-bar vid en pittoresk kanal',
        },
        {
          name: 'Bacaro Jazz',
          description: 'Livlig bar med musik och tak dekorerat med BH:ar',
        },
      ],
      clubs: [
        {
          name: 'Piccolo Mondo Disco',
          description: 'En av få nattklubbar i centrala Venedig',
        },
        {
          name: 'Molocinque',
          description: 'Större klubb på fastlandet nära Mestre',
        },
        { name: 'Tag Club', description: 'Elektronisk musikklubb i Marghera' },
      ],
    },
    Florens: {
      restaurants: [
        {
          name: 'Trattoria Sostanza',
          description:
            'Känd för sin enkla men autentiska bistecca alla fiorentina',
        },
        {
          name: 'Enoteca Pinchiorri',
          description: 'Tre-stjärnig Michelin med omfattande vinkällare',
        },
        {
          name: 'Osteria Santo Spirito',
          description: 'Avslappnad stämning och toskanska klassiker',
        },
      ],
      bars: [
        {
          name: 'La Terrazza at Hotel Continentale',
          description: 'Takbar med vy över Ponte Vecchio',
        },
        {
          name: 'Locale Firenze',
          description: 'Lyxig cocktailbar i historisk byggnad',
        },
        {
          name: 'Mayday Club',
          description: 'Alternativ bar med retromöbler och DJ:s',
        },
      ],
      clubs: [
        {
          name: 'Space Club',
          description: 'Populär klubb nära Santa Maria Novella',
        },
        {
          name: 'Tenax',
          description: 'Elektronisk musikscen med internationella DJs',
        },
        {
          name: 'YAB',
          description: 'Stilfullt dansgolv med varierande musikgenrer',
        },
      ],
    },
    Neapel: {
      restaurants: [
        {
          name: 'Sorbillo',
          description: 'En av stadens mest klassiska pizzerior',
        },
        {
          name: 'La Notizia',
          description: 'Berömd för sina äkta napolitanska pizzor',
        },
        {
          name: 'Palazzo Petrucci',
          description: 'Michelin-stjärnig restaurang med utsikt över havet',
        },
      ],
      bars: [
        {
          name: 'L’Antiquario',
          description: 'Exklusiv cocktailbar i vintage-stil',
        },
        {
          name: 'Cammarota Spritz',
          description: 'Budgetvänligt spritz-ställe med lokal känsla',
        },
        {
          name: 'Gran Caffè Gambrinus',
          description: 'Historiskt café/bar vid Piazza del Plebiscito',
        },
      ],
      clubs: [
        {
          name: 'Duel Club',
          description: 'Nattklubb i en gammal biograf, populär bland unga',
        },
        {
          name: 'Arenile',
          description: 'Strandklubb med sommarfester och livemusik',
        },
        {
          name: 'Club Partenopeo',
          description: 'Dansklubb vid havet med olika teman',
        },
      ],
    },
    Bologna: {
      restaurants: [
        {
          name: 'Osteria dell’Orsa',
          description: 'Klassiska bolognesiska pastarätter i enkel miljö',
        },
        {
          name: 'Trattoria da Me',
          description: 'Familjeägd restaurang med traditionella recept',
        },
        {
          name: 'Al Cambio',
          description: 'Genuina lokala smaker med modern finess',
        },
      ],
      bars: [
        {
          name: 'Osteria del Sole',
          description:
            'Historisk vinbar från 1400-talet där man tar med egen mat',
        },
        {
          name: 'Bar Senza Nome',
          description: 'Unik bar där personalen är döv, fokus på teckenspråk',
        },
        {
          name: 'Ruggine',
          description: 'Bohemisk cocktailbar med rustik inredning',
        },
      ],
      clubs: [
        {
          name: 'Qubò',
          description: 'Flera dansgolv och musikstilar mitt i centrum',
        },
        {
          name: 'Kindergarten',
          description: 'Alternativt ställe med elektroniska och rock-evenemang',
        },
        {
          name: 'Cassero',
          description: 'HBTQ-klubb och kulturförening med varierade events',
        },
      ],
    },
    Palermo: {
      restaurants: [
        {
          name: 'Osteria Ballarò',
          description:
            'Traditionella sicilianska specialiteter i historisk miljö',
        },
        {
          name: 'Antica Focacceria San Francesco',
          description: 'Berömd för panini och street food sedan 1834',
        },
        {
          name: 'I Cuochini',
          description: 'Liten take away-butik med klassisk siciliansk gatumat',
        },
      ],
      bars: [
        {
          name: 'Kursaal Kalhesa',
          description: 'Bokhandel, bar och restaurang i en gammal byggnad',
        },
        {
          name: 'Bocum Mixology',
          description: 'Modern cocktailbar med internationell standard',
        },
        { name: 'Qvivi', description: 'Ungdomlig bar nära Vucciria-marknaden' },
      ],
      clubs: [
        {
          name: 'La Cuba',
          description: 'Sommarfestlokal i en historisk trädgård',
        },
        {
          name: 'I Candelai',
          description: 'Konsert- och klubbscen i centrala Palermo',
        },
        {
          name: 'Talea Club',
          description: 'Elektronisk musikklubb med lokala DJs',
        },
      ],
    },
    'Cinque Terre': {
      restaurants: [
        {
          name: 'Ristorante Belforte (Vernazza)',
          description: 'Dramatisk klippmiljö och färsk fisk',
        },
        {
          name: 'Ristorante Dau Cila (Riomaggiore)',
          description: 'Autentiska liguriska rätter vid havet',
        },
        {
          name: 'Miky (Monterosso)',
          description:
            'Familjedriven restaurang med specialitet på fisk och pasta',
        },
      ],
      bars: [
        {
          name: 'Enoteca Dau Cila',
          description: 'Vinbar med lokala viner och havsutsikt',
        },
        {
          name: 'Bar Nessun Dorma',
          description: 'Ikonisk bar i Manarola med panoramavy',
        },
        {
          name: 'La Cantina di Miky',
          description: 'Modern vin- och aperitivo-bar i Monterosso',
        },
      ],
      clubs: [
        {
          name: 'Ingen stor klubbscen',
          description: 'Fokus på lugna byar och matupplevelser',
        },
        {
          name: 'Små barer och live-musik',
          description: 'Occasionellt livemusik i de fem byarna',
        },
        {
          name: 'Res till La Spezia eller större städer',
          description: 'För ett mer aktivt nattliv',
        },
      ],
    },
    Dubrovnik: {
      restaurants: [
        {
          name: 'Proto',
          description: 'Klassiska medelhavsrätter och färsk fisk',
        },
        {
          name: 'Nautika',
          description: 'Fine dining med utsikt över stadens murar och havet',
        },
        {
          name: 'Villa Ruza',
          description: 'Exklusiv restaurang på ön Koločep nära Dubrovnik',
        },
      ],
      bars: [
        {
          name: 'Buza Bar',
          description: 'Dramatisk klippbar med utsikt över Adriatiska havet',
        },
        {
          name: 'D’vino Wine Bar',
          description: 'Vintillhåll med fokus på kroatiska viner',
        },
        {
          name: 'Cave Bar More',
          description: 'Unik bar i en naturlig grotta vid vattenbrynet',
        },
      ],
      clubs: [
        {
          name: 'Culture Club Revelin',
          description: 'Modern klubb i en historisk fästning',
        },
        {
          name: 'Lazareti',
          description: 'Alternativ musikscen vid stadsmuren',
        },
        {
          name: 'Banje Beach Club',
          description: 'Strandklubb med utsikt över Gamla stan',
        },
      ],
    },
    Hvar: {
      restaurants: [
        {
          name: 'Giaxa',
          description: 'Medeltida byggnad, modern dalmatinsk meny',
        },
        {
          name: 'Dalmatino',
          description: 'Populära grillrätter och färsk fisk i Hvar stad',
        },
        {
          name: 'Fig Hvar',
          description: 'Fusionrätter och kreativa frukosttallrikar',
        },
      ],
      bars: [
        {
          name: 'Hula Hula',
          description: 'Känd strandbar med DJ:s och solnedgångsfester',
        },
        {
          name: 'Carpe Diem Bar',
          description: 'Legendarisk bar i hamnen, partyn på intilliggande ö',
        },
        {
          name: 'Kiva Bar',
          description: 'Populärt samlingsställe för backpackers och festglada',
        },
      ],
      clubs: [
        {
          name: 'Carpe Diem Beach',
          description: 'Klubb på en egen ö, dag- och nattfester',
        },
        {
          name: 'Pink Champagne',
          description: 'Exklusivt nattliv i Hvar stad',
        },
        {
          name: 'Seven Hvar',
          description: 'Modern klubbatmosfär med internationell musik',
        },
      ],
    },
    Plitvicesjöarna: {
      restaurants: [
        {
          name: 'Restaurant Licka Kuca',
          description: 'Traditionella rätter från regionen Lika',
        },
        {
          name: 'Bistro Vucnica',
          description: 'Familjär bistro nära nationalparken',
        },
        {
          name: 'Restaurant Degenija',
          description: 'Europeiska rätter och lokala specialiteter',
        },
      ],
      bars: [
        {
          name: 'Hotelbars & Lokala pubar',
          description: 'Lugna ställen för en drink efter dagsutflykter',
        },
        {
          name: 'Cafe Plum',
          description: 'Enkel cafébar i närheten av parkområdet',
        },
        {
          name: 'Pit-stop i byar runtomkring',
          description: 'Små barer finns i närliggande samhällen',
        },
      ],
      clubs: [
        {
          name: 'Ingen större klubbscen',
          description: 'Fokus på naturupplevelser och lugn kvällsunderhållning',
        },
        {
          name: 'Hotell- och campingevent',
          description: 'Ibland anordnas musik eller grillkvällar',
        },
        {
          name: 'Res till större städer',
          description: 'För att hitta mer intensivt nattliv (t.ex. Zagreb)',
        },
      ],
    },
    Kotor: {
      restaurants: [
        {
          name: 'Galion',
          description:
            'Fisk- och skaldjursrätter med panoramautsikt över bukten',
        },
        {
          name: 'Konoba Scala Santa',
          description: 'Autentiskt montenegrinskt kök i gamla stan',
        },
        {
          name: 'Konoba Catovica Mlini',
          description:
            'Charmigt lantligt läge nära Kotor, traditionella rätter',
        },
      ],
      bars: [
        {
          name: 'Old Winery',
          description: 'Vinbar med lokal vinprovning i historisk miljö',
        },
        {
          name: 'Letrika',
          description: 'Populär bar i gamla stan med DJ-kvällar',
        },
        {
          name: 'Citadela',
          description: 'Café/bar högt upp i stadsmuren, imponerande utsikt',
        },
      ],
      clubs: [
        {
          name: 'Maximus',
          description:
            'Stor klubb i en gammal fästning, ofta med internationella DJ:s',
        },
        { name: 'Compass', description: 'Mindre klubb med varierande musik' },
        {
          name: 'The Hype',
          description: 'Nyare klubb för elektronisk musik och hiphop',
        },
      ],
    },
    Podgorica: {
      restaurants: [
        {
          name: 'Pod Volat',
          description: 'Klassisk lokal grill och traditionella rätter',
        },
        {
          name: 'Hemera',
          description: 'Modern meny i chic miljö mitt i centrum',
        },
        {
          name: 'Ahh Riba',
          description: 'Fokus på fisk- och skaldjursrätter i stadens utkant',
        },
      ],
      bars: [
        {
          name: 'Soul II Soul',
          description: 'Cocktailbar med avslappnad atmosfär',
        },
        {
          name: 'München Bierhaus',
          description: 'Tysk ölhallskoncept med lokala och tyska ölsorter',
        },
        {
          name: 'La Cultura Gastro&Bar',
          description: 'Populär mötesplats för mat och dryck',
        },
      ],
      clubs: [
        {
          name: 'District Club',
          description: 'Klubb med internationell musik och DJ:s',
        },
        {
          name: 'Tarantino',
          description: 'Rock- och alternativscen för levande musik',
        },
        {
          name: 'Grand Club',
          description: 'Större nattklubb i hotel Romanov-komplexet',
        },
      ],
    },
    Ljubljana: {
      restaurants: [
        {
          name: 'Gostilna As',
          description: 'Modern slovensk gastronomi i elegant miljö',
        },
        { name: 'Strelec', description: 'Finkrog i Ljubljanas slotts torn' },
        { name: 'Atelje', description: 'Innovativ meny med lokala råvaror' },
      ],
      bars: [
        {
          name: 'Centralna Postaja',
          description: 'Populär mötesplats för unga, cocktails och street food',
        },
        {
          name: 'Repete Jazz & Okrepčevalnica',
          description: 'Jazzig atmosfär och hantverksöl',
        },
        {
          name: 'Kolibri',
          description: 'Chic cocktailbar med experimentella drinkar',
        },
      ],
      clubs: [
        {
          name: 'K4 (Klub K4)',
          description: 'Legendarisk klubb för elektronisk musik',
        },
        {
          name: 'Cirkus',
          description: 'Mainstreamklubb med kommersiell musik',
        },
        {
          name: 'Metelkova Mesto',
          description: 'Alternativt kulturcenter med flera mindre klubbar',
        },
      ],
    },
    Aten: {
      restaurants: [
        {
          name: 'Funky Gourmet',
          description: 'Tvåstjärnig Michelin med modern grekisk fusion',
        },
        {
          name: 'Strofi',
          description: 'Takterrass med utsikt över Akropolis, klassiska rätter',
        },
        {
          name: 'Diporto',
          description:
            'Genuin källartaverna utan skylt, äkta grekisk husmanskost',
        },
      ],
      bars: [
        {
          name: 'Brettos',
          description: 'Historisk likörbar i Plaka med färgglada flaskväggar',
        },
        {
          name: 'The Clumsies',
          description: 'Rankad bland världens bästa cocktailbarer',
        },
        {
          name: 'A for Athens',
          description:
            'Takbar med panoramautsikt över Monastiraki och Akropolis',
        },
      ],
      clubs: [
        {
          name: 'Bouzkoukia-klubbar',
          description: 'Traditionellt grekiskt nattliv med livemusik och dans',
        },
        {
          name: 'Bolivar Beach Club',
          description: 'Strandklubb med DJ-spelningar på Athens riviera',
        },
        {
          name: 'Lohan',
          description: 'Kändisägd klubb med internationell vibe',
        },
      ],
    },
    Thessaloniki: {
      restaurants: [
        {
          name: 'Mpakaliarakia tou Aristou',
          description: 'Berömd för sin friterade torsk och skordalia',
        },
        {
          name: 'Sebriko',
          description:
            'Mysig taverna med modern tolkning av traditionella rätter',
        },
        {
          name: 'To Elliniko',
          description: 'Stort urval av mezedes och grekiska specialiteter',
        },
      ],
      bars: [
        {
          name: 'Fragile Bar',
          description: 'Takbar i Ladadika-distriktet med stadsutsikt',
        },
        {
          name: 'La Doze',
          description: 'Konst- och cocktailbar med intim atmosfär',
        },
        {
          name: 'Valaoritou-området',
          description: 'Flera barer och nattställen på samma gata',
        },
      ],
      clubs: [
        {
          name: 'Club Shark',
          description: 'Mainstreamklubb med internationell musik',
        },
        { name: 'Vogue', description: 'Lyxig atmosfär och kända DJ:s' },
        {
          name: 'Maison Crystal',
          description: 'Utomhusklubb vid havet med loungekänsla',
        },
      ],
    },
    Meteora: {
      restaurants: [
        {
          name: 'Restaurant Meteora',
          description: 'Traditionella grekiska rätter nära klosterområdet',
        },
        {
          name: 'Taverna Panellinion',
          description: 'Klassisk by-taverna i Kalambaka',
        },
        {
          name: 'Taverna Gardenia',
          description: 'Populärt ställe för souvlaki och moussaka i Kastraki',
        },
      ],
      bars: [
        {
          name: 'Aeriko Café-Bar',
          description: 'Café och bar med utsikt mot klipporna',
        },
        {
          name: 'All Day Lounge Kalambaka',
          description: 'Enkel loungebar för kaffe och drinkar',
        },
        {
          name: 'Lokala kaféer',
          description: 'Mindre barer och kaféer dominerar kvällslivet',
        },
      ],
      clubs: [
        {
          name: 'Ingen större klubbkultur',
          description: 'Området är känt för kloster och natur, inte nattliv',
        },
        {
          name: 'Små lokala festställen',
          description: 'Tidvis livemusik i Kalambaka och Kastraki',
        },
        {
          name: 'Trikala',
          description:
            'För större uteliv och klubbar kan man resa till Trikala',
        },
      ],
    },
    Valletta: {
      restaurants: [
        {
          name: 'Rubino',
          description: 'Traditionell maltesisk och medelhavsinspirerad meny',
        },
        {
          name: 'Noni',
          description: 'Michelin-stjärnig restaurang i Valletta',
        },
        {
          name: 'Guze',
          description: 'Intim fine dining i en gammal stenbyggnad',
        },
      ],
      bars: [
        {
          name: 'Bridge Bar',
          description: 'Jazzkvällar på trapporna vid St. Ursula Street',
        },
        {
          name: 'Café Society',
          description: 'Atmosfärisk bar i en smal gränd med utsikt över hamnen',
        },
        {
          name: 'The Pub',
          description:
            'Klassisk brittisk pub med historisk anknytning till skådespelaren Oliver Reed',
        },
      ],
      clubs: [
        { name: 'Kingsway', description: 'Music lounge i hjärtat av Valletta' },
        {
          name: 'Club Klandestino',
          description: 'Underjordisk klubbmiljö med temakvällar',
        },
        {
          name: 'Paceville (St. Julian’s)',
          description: 'Större nattlivsområde strax utanför Valletta',
        },
      ],
    },
    Prague: {
      restaurants: [
        {
          name: 'Field',
          description: 'Michelin-stjärna med modern tjeckisk mat',
        },
        {
          name: 'Lokal Dlouhaaa',
          description: 'Traditionell tjeckisk husmanskost och öl',
        },
        {
          name: 'U Modré Kachničky',
          description: 'Ank- och viltmeny i rustik atmosfär',
        },
      ],
      bars: [
        {
          name: 'Hemingway Bar',
          description: 'Prisbelönt cocktailbar med fokus på rom och absint',
        },
        {
          name: 'Black Angel’s Bar',
          description:
            'Glamorös 1930-talsinspirerad cocktailbar under Old Town Square',
        },
        {
          name: 'Anonymous Bar',
          description:
            'Temabar inspirerad av “V for Vendetta” med hemliga drinkar',
        },
      ],
      clubs: [
        {
          name: 'Karlovy Lazne',
          description: 'Flera våningar, Europas största klubb',
        },
        { name: 'Roxy', description: 'Elektronisk musikscen och konserter' },
        {
          name: 'Lucerna Music Bar',
          description: '80- och 90-talsteman, livemusik och DJ:s',
        },
      ],
    },
    'Cesky Krumlov': {
      restaurants: [
        {
          name: 'Krcma v Satlavske Ulici',
          description: 'Mysig taverna i medeltida stil',
        },
        {
          name: 'Papa’s Living Restaurant',
          description: 'Flodnära läge med internationell meny',
        },
        { name: 'Le Jardin', description: 'Finare middagar i lugn miljö' },
      ],
      bars: [
        {
          name: 'Apotheka Café Bar',
          description: 'Historisk apoteksmiljö och cocktails',
        },
        {
          name: 'Zapa Bar',
          description: 'Liten gömd bar med bred spritsamling',
        },
        {
          name: 'Horrobar',
          description: 'Temabar med skräckdekorationer och musik',
        },
      ],
      clubs: [
        {
          name: 'City Lounge Music Club',
          description: 'Dansgolv och karaoke i centrala Krumlov',
        },
        {
          name: 'B52 Music Club',
          description: 'Festställe med blandad musik och biljard',
        },
        {
          name: 'Egons Bar & Club',
          description: 'Mindre klubb med lokala DJ:s',
        },
      ],
    },
    Kraków: {
      restaurants: [
        {
          name: 'Szara Gęś',
          description: 'Polska gourmeträtter med modern twist',
        },
        {
          name: 'Pod Aniołami',
          description: 'Traditionell polsk mat i historisk källare',
        },
        {
          name: 'Starka',
          description: 'Känd för sina polska specialiteter och infused vodka',
        },
      ],
      bars: [
        {
          name: 'Alchemia',
          description: 'Bohemisk atmosfär i Kazimierz-området',
        },
        {
          name: 'Pijalnia Wódki i Piwa',
          description: 'Budgetvänlig kedja för vodka- och ölshots',
        },
        {
          name: 'Mercy Brown',
          description: 'Speakeasy-cocktailbar gömd bakom en hemlig dörr',
        },
      ],
      clubs: [
        { name: 'Prozak 2.0', description: 'Underground house och techno' },
        {
          name: 'Shakers',
          description: 'Kommersiell musik, populärt bland studenter',
        },
        {
          name: 'Klub Studio',
          description: 'Större lokal med konserter och studentfester',
        },
      ],
    },
    Warszawa: {
      restaurants: [
        {
          name: 'Senses',
          description: 'Michelin-stjärnig restaurang med modern polsk meny',
        },
        {
          name: 'U Fukiera',
          description:
            'Känd för traditionell polsk husmanskost, ägd av Magda Gessler',
        },
        {
          name: 'Stary Dom',
          description: 'Rustik atmosfär och klassiska polska rätter',
        },
      ],
      bars: [
        { name: 'PiwPaw', description: 'Stort utbud av hantverksöl på fat' },
        {
          name: 'Klar Cocktail Bar',
          description: 'Cocktails med polska smaker och experimentell stil',
        },
        {
          name: 'Woda Ognista',
          description: 'Inspirerad av 1900-talets Warszawa, unika drinkrecept',
        },
      ],
      clubs: [
        {
          name: 'Level 27',
          description: 'Takklubb med panoramautsikt över staden',
        },
        {
          name: 'Smolna',
          description: 'Elektroniskt musiktempel i en historisk byggnad',
        },
        {
          name: 'Sketch Nite',
          description: 'Modern klubb med internationella DJs',
        },
      ],
    },
    Wrocław: {
      restaurants: [
        {
          name: 'Konspira',
          description: 'Restaurang med historiskt tema och polska rätter',
        },
        {
          name: 'Przystań',
          description: 'Flodnära restaurang med europeisk meny',
        },
        {
          name: 'Szajnochy 11',
          description: 'Gastrobar med kreativt kök i stadskärnan',
        },
      ],
      bars: [
        {
          name: 'Cocktail Bar by Incognito',
          description: 'Eleganta cocktails i intim miljö',
        },
        {
          name: 'Mleczarnia',
          description: 'Retro café/bar nära den judiska kvarteren',
        },
        {
          name: 'Neon Side',
          description: 'Bakgård dekorerad med vintage-neonskyltar',
        },
      ],
      clubs: [
        {
          name: 'Grey Music Club',
          description: 'Populärt bland lokala kändisar, mainstream hits',
        },
        {
          name: 'Cherry Club',
          description: 'Elektroniskt fokus, modern inredning',
        },
        {
          name: 'Mundo 71',
          description: 'Dance- och popmusik, ofta studentevenemang',
        },
      ],
    },
    Gdańsk: {
      restaurants: [
        {
          name: 'Goldwasser',
          description: 'Europeisk meny med den berömda likören Goldwasser',
        },
        {
          name: 'Prologue',
          description: 'Modern fine dining med säsongsbetonad meny',
        },
        {
          name: 'Chleb i Wino',
          description: 'Mysigt ställe för bröd, pizza och polska specialiteter',
        },
      ],
      bars: [
        { name: 'Flisak 76', description: 'Cocktailbar med konstnärlig touch' },
        {
          name: 'Pułapka',
          description: 'Hantverksöl och bar snacks i avslappnad miljö',
        },
        {
          name: 'Josef K',
          description: 'Bohemisk cafébar inspirerad av Kafka',
        },
      ],
      clubs: [
        {
          name: 'Bunkier',
          description: 'Klubb i en gammal militärbunker med flera våningar',
        },
        {
          name: 'Parlament',
          description: 'Konsertlokal och nattklubb i hjärtat av Gamla stan',
        },
        {
          name: 'Club Ziemia',
          description: 'Elektronisk musikscen med olika gäst-DJ:s',
        },
      ],
    },
    Budapest: {
      restaurants: [
        {
          name: 'Onyx',
          description: 'Tvåstjärnig Michelin, modern ungersk gastronomi',
        },
        {
          name: 'New York Café',
          description:
            'Historiskt café i nybarockstil, kallat världens vackraste café',
        },
        {
          name: 'Mazel Tov',
          description:
            'Mellanösterninspirerade rätter i ett ruinbar-liknande utrymme',
        },
      ],
      bars: [
        {
          name: 'Szimpla Kert',
          description: 'Den första och mest kända ruinbaren',
        },
        {
          name: 'Instant-Fogas',
          description:
            'Stort komplex av ruinbarer med dansgolv och olika teman',
        },
        {
          name: '360 Bar',
          description: 'Takbar med 360-graders utsikt över staden',
        },
      ],
      clubs: [
        {
          name: 'Ötkert',
          description:
            'Elegant klubb i en gammal byggnad nära Szent István-basilikan',
        },
        {
          name: 'Morrison’s 2',
          description: 'Populärt ställe med karaoke, dansgolv och flera barer',
        },
        {
          name: 'A38 Hajó',
          description: 'Konsert- och klubbscen på en ombyggd flodbåt',
        },
      ],
    },
    Debrecen: {
      restaurants: [
        {
          name: 'IKON',
          description: 'Fokus på modern ungersk mat med lokala råvaror',
        },
        {
          name: 'Volt Egyszer',
          description: 'Hemtrevlig atmosfär, traditionella rätter',
        },
        {
          name: 'Belga Étterem',
          description: 'Belgisk-inspirerad meny med ungersk touch',
        },
      ],
      bars: [
        {
          name: 'Calico Jack Pub',
          description: 'Piratinspirerad pub med internationellt ölutbud',
        },
        { name: 'Roncs Bar', description: 'Ruinbar-koncept mitt i Debrecen' },
        { name: 'Freedom Pub', description: 'Studentvänlig bar med rockmusik' },
      ],
      clubs: [
        {
          name: 'Lovarda',
          description: 'Evenemangslokal på universitetet, konserter och fester',
        },
        { name: 'Badgers (tidvis)', description: 'Klubbkvällar med DJ:s' },
        {
          name: 'Eller Club Play (numera stängt/omdöpt)',
          description: 'Varierande nattliv, kolla lokala event',
        },
      ],
    },
    Bratislava: {
      restaurants: [
        {
          name: 'Slovak Pub',
          description: 'Traditionell slovakisk mat till överkomliga priser',
        },
        {
          name: 'Fou Zoo',
          description: 'Modern asiatisk fusion med elegant atmosfär',
        },
        {
          name: 'D.Steakhouse',
          description: 'Köttspecialist med premiumutbud',
        },
      ],
      bars: [
        {
          name: 'UFO Bar',
          description:
            'Futuristisk bar i en tornliknande struktur på Novy Most',
        },
        {
          name: 'Urban House',
          description: 'Kafé/bar med hipsterkänsla och hantverkskaffe',
        },
        {
          name: 'Bukowski Bar',
          description:
            'Litterär stämning, uppkallad efter författaren Charles Bukowski',
        },
      ],
      clubs: [
        {
          name: 'Nu Spirit Club',
          description:
            'Soul, funk och elektronisk musik med levande uppträdanden',
        },
        {
          name: 'The Club Bratislava',
          description: 'Lyxig nattklubb i stadens centrum',
        },
        {
          name: 'Channels Club',
          description: 'Mindre klubb med techno och house',
        },
      ],
    },
    Bukarest: {
      restaurants: [
        {
          name: 'Caru’ cu Bere',
          description: 'Historiskt ölhus med traditionell rumänsk meny',
        },
        {
          name: 'The Artist',
          description: 'Fine dining med innovativa smakkombinationer',
        },
        {
          name: 'Lacrimi si Sfinti',
          description: 'Modern tolkning av rumänska klassiker',
        },
      ],
      bars: [
        {
          name: 'The Drunken Lords',
          description: 'Populär pub och bar i Gamla stan',
        },
        {
          name: 'Nomad Skybar',
          description: 'Takbar med chic inredning och panoramautsikt',
        },
        {
          name: 'Control Club (barområde)',
          description: 'Alternativt häng i anslutning till nattklubben',
        },
      ],
      clubs: [
        {
          name: 'Control Club',
          description: 'Elektronisk musik och konserter, indie-scen',
        },
        {
          name: 'BOA (Beat of Angels)',
          description: 'Lyxig klubb med internationella DJ:s',
        },
        {
          name: 'Kristal Glam Club',
          description: 'Världsberömd för house och techno',
        },
      ],
    },
    'Cluj-Napoca': {
      restaurants: [
        {
          name: 'Roata',
          description: 'Traditionell transsylvansk mat i rustik miljö',
        },
        {
          name: 'Baracca',
          description: 'Modern europeisk meny med lokala råvaror',
        },
        {
          name: 'Samsara Foodhouse',
          description: 'Vegetariskt och veganskt utbud i avslappnad atmosfär',
        },
      ],
      bars: [
        {
          name: 'Joben Bistro',
          description: 'Steampunk-inspirerad bar med kreativa drinkar',
        },
        {
          name: 'The Soviet',
          description: 'Temabar med dekorationer från sovjettiden',
        },
        {
          name: 'Enigma Café',
          description:
            '“Världens första kinetiska steampunkbar” med rörliga skulpturer',
        },
      ],
      clubs: [
        {
          name: 'Midi',
          description: 'En av Europas toppklubbar för elektronisk musik',
        },
        {
          name: 'Form Space',
          description: 'Konsert- och klubbscen med varierade event',
        },
        {
          name: 'Euphoria Music Hall',
          description: 'Större livekonserter och danskvällar',
        },
      ],
    },
    Brașov: {
      restaurants: [
        {
          name: 'La Ceaun',
          description: 'Traditionella rumänska grytor och specialiteter',
        },
        {
          name: 'Sergiana',
          description: 'Rustikt kök med fokus på kött- och lokala råvaror',
        },
        {
          name: 'Bella Musica',
          description: 'Mexikanska och rumänska rätter i gammalt källarvalv',
        },
      ],
      bars: [
        {
          name: 'Times Pub',
          description: 'Populär bar och klubblokal i centrala Brașov',
        },
        {
          name: 'Deane’s Irish Pub',
          description: 'Irländsk pub med livemusik och sportvisningar',
        },
        {
          name: 'Tipografia',
          description: 'Kreativ bar/café med kulturella evenemang',
        },
      ],
      clubs: [
        {
          name: 'Kasho Club',
          description: 'Större klubb med kommersiell musik och DJ:s',
        },
        {
          name: 'Club Subsol',
          description: 'Underjordisk klubbmiljö med rock och alternativ musik',
        },
        {
          name: '4 Rooms',
          description: 'Mindre dansställe med varierande genrer',
        },
      ],
    },
    'Transsylvanien (Sighișoara)': {
      restaurants: [
        {
          name: 'Casa Vlad Dracul',
          description:
            'Historisk restaurang i Vlad Draculs påstådda födelsehus',
        },
        {
          name: 'La Perla',
          description: 'Traditionell rumänsk meny i pittoresk miljö',
        },
        {
          name: 'Casa Georgius Krauss',
          description: 'Fine dining i en medeltida byggnad',
        },
      ],
      bars: [
        {
          name: 'The One Pub',
          description: 'Lokal bar med musik och bra ölutbud',
        },
        {
          name: 'Medieval Café',
          description: 'Temabar i en gammal källare med rustik inredning',
        },
        {
          name: 'Relax Pub',
          description: 'Enkel pub med biljard och karaokekvällar',
        },
      ],
      clubs: [
        {
          name: 'Beatex (eventbaserat)',
          description: 'Ingen fast klubb, men ibland arrangeras fester',
        },
        {
          name: 'Dansgolv i lokala barer',
          description: 'Mindre scener i gamla stan',
        },
        {
          name: 'Utbud i närliggande städer',
          description: 'För större klubbscen, besök Brasov eller Cluj',
        },
      ],
    },
    Belgrad: {
      restaurants: [
        {
          name: 'Manufaktura',
          description: 'Moderna serbiska rätter i trendig miljö',
        },
        { name: 'Homa', description: 'Fine dining med internationell twist' },
        {
          name: 'Znak Pitanja (?)',
          description: 'Äldsta kafanan i Belgrad med traditionellt kök',
        },
      ],
      bars: [
        {
          name: 'Blaznavac',
          description: 'Konstnärligt inredd cafébar i färgstarkt hus',
        },
        { name: 'Dragstor', description: 'Flytande bar på Savafloden' },
        {
          name: 'Cetinjska-distriktet',
          description:
            'Flera alternativa barer i ett före detta bryggeriområde',
        },
      ],
      clubs: [
        {
          name: 'Freestyler',
          description: 'Populär “splav” (flottklubb) på floden',
        },
        {
          name: 'Drugstore',
          description: 'Alternativ klubb i en gammal slakthuslokal',
        },
        {
          name: 'Plastic',
          description: 'Elektronisk musik och kommersiella hits',
        },
      ],
    },
    'Novi Sad': {
      restaurants: [
        {
          name: 'Project 72 Wine&Deli',
          description: 'Gastronomiskt fokus på lokala råvaror',
        },
        {
          name: 'Fish & Zelenish',
          description: 'Fusion av fisk, grönt och balkanrätter',
        },
        {
          name: 'Savoca',
          description: 'Italiensk restaurang i hjärtat av staden',
        },
      ],
      bars: [
        { name: 'PUBeraj', description: 'Livlig bar med livespelningar' },
        { name: 'Berar Pub', description: 'Ölkultur och vänlig atmosfär' },
        { name: 'Absolut', description: 'Cocktailbar med loungemusik' },
      ],
      clubs: [
        {
          name: 'Central Dance Club (Cuba Libre)',
          description: 'Sommarklubb vid floden',
        },
        {
          name: 'The Quarter',
          description: 'Konserter och klubbkvällar med blandad musik',
        },
        {
          name: 'Studio M',
          description: 'Tidigare radiostudio, nu event- och klubbscen',
        },
      ],
    },
    Sarajevo: {
      restaurants: [
        {
          name: 'Ćevabdžinica Željo',
          description: 'Äkta bosniska cevapi i Baščaršija',
        },
        { name: 'Dveri', description: 'Mysig restaurang i gamla stan' },
        {
          name: 'Klopa',
          description: 'Modern bistro med fokus på lokala råvaror',
        },
      ],
      bars: [
        {
          name: 'City Lounge Bar',
          description: 'Avslappnad atmosfär i centrum',
        },
        { name: 'Goldfish', description: 'Live jazz och traditionell rakija' },
        {
          name: 'Café Slastičarna Jadranka',
          description: 'Kafé med bosniska sötsaker och lättare drinkar',
        },
      ],
      clubs: [
        { name: 'Sloga', description: 'Populärt för liveband och DJ:s' },
        {
          name: 'Silver & Smoke',
          description: 'Elektronisk musik i intim miljö',
        },
        {
          name: 'Cinemas Club (Sloga 2)',
          description: 'Konserter och DJ-kvällar i gammal biograflokal',
        },
      ],
    },
    Mostar: {
      restaurants: [
        {
          name: 'Šadrvan',
          description: 'Traditionell bosnisk mat nära Stari Most',
        },
        {
          name: 'Hindin Han',
          description: 'Restaurang i historisk byggnad vid floden',
        },
        { name: 'Urban Grill', description: 'Blandad meny i modern miljö' },
      ],
      bars: [
        { name: 'Black Dog Pub', description: 'Ölbar med livespelningar' },
        {
          name: 'Caffe Bar Almira',
          description: 'Uteservering med utsikt över gamla bron',
        },
        { name: 'Labirint', description: 'Bar/klubb vid floden Neretva' },
      ],
      clubs: [
        {
          name: 'Pavarotti Music Centre',
          description: 'Kulturellt centrum med konserter och evenemang',
        },
        { name: 'Daleka Obala', description: 'Säsongsklubb vid floden' },
        { name: 'Res till Sarajevo', description: 'För större nattklubbsscen' },
      ],
    },
    Skopje: {
      restaurants: [
        { name: 'Destan', description: 'Känd för sin kebab i Gamla basaren' },
        {
          name: 'Restaurant Pelister',
          description: 'Medelhavsrätter vid Makedonien Square',
        },
        {
          name: 'Kaj Serdarot',
          description: 'Traditionell makedonsk mat och grillrätter',
        },
      ],
      bars: [
        {
          name: 'Irish Pub St. Patrick',
          description: 'Irländsk pubatmosfär i stadskärnan',
        },
        {
          name: 'Old Town Brewery',
          description: 'Hantverksöl i Gamla basaren',
        },
        {
          name: 'Kolektiv',
          description: 'Modern bar med uteservering vid floden Vardar',
        },
      ],
      clubs: [
        {
          name: 'Epicentar',
          description: 'Elektronisk musik och DJ-spelningar',
        },
        { name: 'Stanica 26', description: 'Konserter och temakvällar' },
        {
          name: 'Midnight',
          description: 'Centralt belägen nattklubb med pop och R&B',
        },
      ],
    },
    Ohrid: {
      restaurants: [
        {
          name: 'Kaneo Restaurant & Beach',
          description: 'Bryggläge med utsikt över Ohridsjön',
        },
        {
          name: 'Belvedere',
          description: 'Traditionella rätter med live musik i högsäsong',
        },
        {
          name: 'Dalga Restaurant',
          description: 'Färsk fisk från sjön och lokala specialiteter',
        },
      ],
      bars: [
        {
          name: 'Liquid Bar',
          description: 'Strandnära bar med loungestämning',
        },
        {
          name: 'Kadmo Beach Club',
          description: 'Dag- och kvällshäng med DJ:s',
        },
        {
          name: 'Irish Pub Dublin',
          description: 'Centralt belägen pub med blandad klientel',
        },
      ],
      clubs: [
        {
          name: 'Havana Club',
          description: 'Livlig klubb längs sjöpromenaden',
        },
        {
          name: 'Club Cuba Libre',
          description: 'Sommardansställe med latinska rytmer',
        },
        {
          name: 'Fokus på sommarfester',
          description: 'Klubbscenen blomstrar under turistsäsongen',
        },
      ],
    },
    Sofia: {
      restaurants: [
        {
          name: 'Raketa Rakia Bar',
          description: 'Bulgarisk meny med stort rakia-utbud',
        },
        {
          name: 'Made in Home',
          description: 'Hemtrevlig atmosfär med internationella influenser',
        },
        { name: 'Cosmos', description: 'Kreativ modern bulgarisk gastronomi' },
      ],
      bars: [
        {
          name: 'One More Bar',
          description: 'Populär bar för cocktails och socialt umgänge',
        },
        {
          name: 'Kanaal',
          description: 'Craft beer-bar med internationella sorter',
        },
        {
          name: 'Sputnik',
          description: 'Retro-inspirerad bar med spännande cocktails',
        },
      ],
      clubs: [
        {
          name: 'Yalta Club',
          description: 'Elektronisk musik med internationella DJ:s',
        },
        {
          name: 'Bedroom Premium Club',
          description: 'Glamorös inredning och house/R&B',
        },
        {
          name: 'Terminal 1',
          description: 'Livekonserter och DJ-kvällar med varierad musik',
        },
      ],
    },
    Plovdiv: {
      restaurants: [
        {
          name: 'Pavaj',
          description: 'Modern bulgarisk meny i Kapana-distriktet',
        },
        {
          name: 'Hebros Restaurant',
          description: 'Exklusiv restaurang i historisk miljö',
        },
        {
          name: 'Rahat Tepe',
          description: 'Uteservering på en kulle med vy över gamla stan',
        },
      ],
      bars: [
        { name: 'Cat & Mouse', description: 'Craft beer-bar i Kapana' },
        {
          name: 'No Sense Bar',
          description: 'Konstnärlig bar med livekonst och musik',
        },
        { name: 'Club Fargo', description: 'Bar/klubb med filmtema och DJ:s' },
      ],
      clubs: [
        { name: 'W Garden', description: 'Sommarklubb i centrala Plovdiv' },
        {
          name: 'Download Club',
          description: 'Rock- och metalinspirerad klubb',
        },
        {
          name: 'Bally Club',
          description: 'Elektronisk musik och house-evenemang',
        },
      ],
    },
    Tirana: {
      restaurants: [
        {
          name: 'Oda',
          description: 'Traditionell albansk mat i rustik taverna',
        },
        {
          name: 'Mullixhiu',
          description:
            'Gourmettolkning av albanska rätter nära konstgjorda sjön',
        },
        {
          name: 'Era Blloku',
          description: 'Populär kedja med lokala smaker i Blloku-området',
        },
      ],
      bars: [
        {
          name: 'Radio Bar',
          description: 'Retroinredd bar med vintage-dekorationer',
        },
        {
          name: 'Colonial Cocktails Academy',
          description: 'Innovativa mixologikoncept och tiki-stil',
        },
        {
          name: 'Komiteti – Kafe Muzeum',
          description: 'Kafé/bar som även fungerar som litet museum',
        },
      ],
      clubs: [
        {
          name: 'Folie Terrace',
          description: 'Uteklubb med internationella DJ:s på sommaren',
        },
        {
          name: 'Discobox',
          description: 'Klubb med kommersiell musik och temakvällar',
        },
        {
          name: 'Lollipop Club',
          description: 'Livlig klubb i trendiga Blloku',
        },
      ],
    },
    Prizren: {
      restaurants: [
        {
          name: 'Besimi Beska',
          description: 'Kosovo-albanska grillrätter i enkel miljö',
        },
        {
          name: 'Te Syla',
          description: 'Känd för sin lokala pite (paj) och bakverk',
        },
        {
          name: 'Marashi',
          description: 'Naturnära restaurang vid floden Lumbardhi',
        },
      ],
      bars: [
        {
          name: 'Ego Bar',
          description: 'Enkel bar med uteservering i centrala Prizren',
        },
        {
          name: 'NGOM Fest-området (säsong)',
          description: 'Festival med mat- och dryckesstånd',
        },
        {
          name: 'Små kaféer i gamla stan',
          description: 'Kafékultur dominerar över barer',
        },
      ],
      clubs: [
        {
          name: 'Ingen stor klubbkultur',
          description: 'Fester ordnas främst under festivaler',
        },
        {
          name: 'Lokala barer med musik',
          description: 'Enstaka dansgolv vid speciella event',
        },
        {
          name: 'Dokufest/NGOM Fest',
          description: 'Större publik under dessa festivaler',
        },
      ],
    },
    Tbilisi: {
      restaurants: [
        {
          name: 'Cafe Littera',
          description: 'Georgisk gourmet i historisk byggnad',
        },
        {
          name: 'Barbarestan',
          description: '1800-talsrecept i modern tappning',
        },
        {
          name: 'Shavi Lomi',
          description: 'Konstnärlig atmosfär, kreativ georgisk meny',
        },
      ],
      bars: [
        {
          name: 'Fabrika',
          description: 'Kulturhub med barer, hostel och konststudios',
        },
        { name: 'Zoestan', description: 'Vinspecialist med qvevri-viner' },
        {
          name: 'Drama Bar',
          description: 'Trendig cocktailbar med internationell stämning',
        },
      ],
      clubs: [
        {
          name: 'Bassiani',
          description: 'Världskänd techno i en gammal simhall',
        },
        {
          name: 'Khidi',
          description:
            'Industriell lokal vid floden, fokus på elektronisk musik',
        },
        {
          name: 'Cafe Gallery',
          description: 'Mindre klubb populär bland lokala DJ:s',
        },
      ],
    },
    Batumi: {
      restaurants: [
        {
          name: 'Heart of Batumi',
          description: 'Georgiska specialiteter och färsk fisk',
        },
        { name: 'Old Boulevard', description: 'Elegant restaurang nära havet' },
        { name: 'Retro', description: 'Känd för Adjarian khachapuri' },
      ],
      bars: [
        {
          name: 'Chacha Time',
          description: 'Bar med fokus på den georgiska spriten chacha',
        },
        {
          name: 'Clouds Bar & Restaurant (Hilton)',
          description: 'Takbar med panoramavy över kusten',
        },
        { name: 'Vinyl Bar', description: 'Retro-musikbar med DJ-kvällar' },
      ],
      clubs: [
        { name: 'Gate', description: 'Modern nattklubb nära stranden' },
        {
          name: 'Soho Batumi',
          description: 'Populärt ställe med blandad musik',
        },
        {
          name: 'Tasarov',
          description: 'Säsongsbetonad klubb vid Batumis strandpromenad',
        },
      ],
    },
    Jerevan: {
      restaurants: [
        {
          name: 'Tavern Yerevan',
          description: 'Autentisk armenisk mat i folklig miljö',
        },
        {
          name: 'Dolmama',
          description: 'Specialiserad på dolma och kaukasiska rätter',
        },
        {
          name: 'Lavash Restaurant',
          description: 'Traditionellt bröd och armeniska specialiteter',
        },
      ],
      bars: [
        {
          name: 'Simona Bar',
          description: 'Industristil och kreativa cocktails',
        },
        { name: 'Malkan1', description: 'Takbar med utsikt över staden' },
        {
          name: 'Mezzo Classic House Club',
          description: 'Livejazz och musikkvällar',
        },
      ],
      clubs: [
        {
          name: 'Kami Music Club',
          description: 'Liveband och DJ:s i modern miljö',
        },
        { name: 'Paparazzi Club', description: 'Hiphop, R&B och pop' },
        {
          name: 'Calumet Ethnic Lounge Bar',
          description: 'Världsmusik och bohemisk stämning',
        },
      ],
    },
    Baku: {
      restaurants: [
        {
          name: 'Art Club Restaurant',
          description: 'Azerisk konst och mat kombinerad',
        },
        {
          name: 'Firuze',
          description: 'Traditionell azerisk meny i orientalisk miljö',
        },
        {
          name: 'Şirvanşah Musey Restaurant',
          description: 'Historisk atmosfär med live mugham-musik',
        },
      ],
      bars: [
        {
          name: 'ETUD Cafe & Bar',
          description: 'Konceptbar med bohemisk atmosfär och livemusik',
        },
        {
          name: 'Room Fine Art Wine & Dine',
          description: 'Vinbar kombinerad med konstutställningar',
        },
        {
          name: 'Hard Rock Cafe Baku',
          description: 'Global kedja i Baku-anda',
        },
      ],
      clubs: [
        { name: 'Enerji Club', description: 'Klubbkomplex vid Kaspiska havet' },
        {
          name: 'Pasifico',
          description: 'Takbar och klubb med latinska rytmer',
        },
        {
          name: 'Eleven',
          description: 'Skybar/klubb med utsikt över Flame Towers',
        },
      ],
    },
    Lauterbrunnen: {
      restaurants: [
        {
          name: 'Hotel Oberland Restaurant',
          description: 'Traditionell schweizisk mat i dalgången',
        },
        {
          name: 'Restaurant Weidstübli',
          description: 'Rustik atmosfär med lokala specialiteter',
        },
        {
          name: 'Airtime Café',
          description: 'Café med lättare rätter och bakverk',
        },
      ],
      bars: [
        {
          name: 'Horner Pub',
          description: 'Populärt bland basehoppare, livlig stämning',
        },
        {
          name: 'Eiger Guesthouse Bar (Mürren)',
          description: 'Kort resa med bergbana, after-hike-stämning',
        },
        {
          name: 'Hotellbarer',
          description: 'De flesta barerna finns på hotell',
        },
      ],
      clubs: [
        {
          name: 'Ingen större klubbscen',
          description: 'Fokus på friluftsliv och natur',
        },
        {
          name: 'Byfester och säsongsevenemang',
          description: 'Ibland livemusik och lokala evenemang',
        },
        {
          name: 'Res till Interlaken',
          description: 'För mer utpräglat nattliv',
        },
      ],
    },
    'Isle of Skye': {
      restaurants: [
        {
          name: 'The Three Chimneys',
          description: 'Prisbelönt restaurang med lokala råvaror',
        },
        {
          name: 'Kinloch Lodge',
          description: 'Fine dining i historisk herrgårdsmiljö',
        },
        {
          name: 'Sea Breezes (Portree)',
          description: 'Färska skaldjur med utsikt över hamnen',
        },
      ],
      bars: [
        {
          name: 'The Old Inn (Carbost)',
          description: 'Nära Talisker-destilleriet, ofta livefolkmusik',
        },
        {
          name: 'Seumas’ Bar (Sligachan)',
          description: 'Stor whiskysamling och klassisk pubmat',
        },
        {
          name: 'Pubar i Portree',
          description: 'Små, traditionella skotska pubar',
        },
      ],
      clubs: [
        {
          name: 'Ingen etablerad klubbscen',
          description: 'Fokus på natur och lugna pubkvällar',
        },
        {
          name: 'Lokala pubar med live-musik',
          description: 'Traditionell skotsk musik',
        },
        {
          name: 'Res till större städer',
          description: 'Inverness/Glasgow för rikt nattliv',
        },
      ],
    },
    Inverness: {
      restaurants: [
        {
          name: 'Rocpool',
          description: 'Modern skotsk meny med internationella influenser',
        },
        {
          name: 'The Mustard Seed',
          description: 'Säsongsbetonad mat i en gammal kyrka',
        },
        {
          name: 'Cafe 1',
          description: 'Avslappnad atmosfär och lokala råvaror',
        },
      ],
      bars: [
        {
          name: 'Hootananny',
          description: 'Känd för live highland-musik och folkkvällar',
        },
        {
          name: 'The Malt Room',
          description: 'Specialiserad på whiskyprovningar',
        },
        {
          name: 'Johnny Foxes',
          description: 'Klassisk pub med ofta livemusik',
        },
      ],
      clubs: [
        {
          name: 'Bar One / Club One',
          description: 'Samtida klubb med varierande DJ:s',
        },
        { name: 'Attic', description: 'Pop- och rockkvällar, studentvänlig' },
        {
          name: 'Ironworks',
          description: 'Konsertlokal som ibland håller klubbkvällar',
        },
      ],
    },
    Killarney: {
      restaurants: [
        {
          name: 'Bricin Restaurant',
          description: 'Känd för Boxty och irländska specialiteter',
        },
        {
          name: 'The Laurels Pub & Restaurant',
          description: 'Pubstämning med comfort food',
        },
        {
          name: 'Rozzers Restaurant',
          description: 'Fine dining på Killeen House Hotel',
        },
      ],
      bars: [
        { name: 'The Shire Bar', description: 'Tolkien-inspirerad pub' },
        {
          name: 'O’Connor’s Traditional Pub',
          description: 'Irländsk musiksession och gemytlig atmosfär',
        },
        { name: 'Tattler Jack', description: 'Sportpub med lokala ölsorter' },
      ],
      clubs: [
        {
          name: 'McSorley’s Nightclub',
          description: 'Populärt nattlivsställe',
        },
        {
          name: 'The Grand',
          description: 'Pub med dansgolv, livemusik och DJ:s',
        },
        {
          name: 'Mucky Duck',
          description: 'Säsongsöppen bar/klubb med dansgolv',
        },
      ],
    },
    Galway: {
      restaurants: [
        {
          name: 'Aniar',
          description: 'Michelin-krog med lokala råvaror från västra Irland',
        },
        {
          name: 'Ard Bia at Nimmos',
          description: 'Charmigt läge och kreativ meny nära floden Corrib',
        },
        {
          name: 'The Quay Street Kitchen',
          description: 'Litet men populärt ställe för irländska rätter',
        },
      ],
      bars: [
        {
          name: 'Tig Coili',
          description: 'Traditionell irländsk musik varje kväll',
        },
        {
          name: 'The Quays Bar',
          description: 'Flervåningsbar med gotisk inredning och liveband',
        },
        { name: 'Róisín Dubh', description: 'Alternativ musikscen och bar' },
      ],
      clubs: [
        {
          name: 'Electric Garden & Theatre',
          description: 'Stort klubbkomplex med flera rum',
        },
        {
          name: 'Halo Nightclub',
          description: 'Chic klubb för en lite äldre publik',
        },
        {
          name: 'Seven Bar & Restaurant',
          description: 'Dag- och kvällsverksamhet med livemusik och DJ:s',
        },
      ],
    },
    Cotswolds: {
      restaurants: [
        {
          name: 'The Wild Rabbit (Kingham)',
          description: 'Gastro-pub med lokala säsongsråvaror',
        },
        {
          name: 'The Potting Shed Pub (Crudwell)',
          description: 'Prisad gastropub med brittisk meny',
        },
        {
          name: 'Daylesford Organic Farm Café',
          description: 'Ekologisk gårdsbutik och café i lantlig miljö',
        },
      ],
      bars: [
        {
          name: 'The Porch House (Stow-on-the-Wold)',
          description: 'En av Englands äldsta pubar, historisk atmosfär',
        },
        {
          name: 'The Ebrington Arms',
          description: 'Klassisk landsbygdspub med hantverksöl',
        },
        {
          name: 'The Wheatsheaf (Northleach)',
          description: 'Boutique pub/hotell med bra drinkutbud',
        },
      ],
      clubs: [
        {
          name: 'Få eller inga nattklubbar',
          description: 'Området är känt för sin lantliga charm',
        },
        {
          name: 'Pubar med musikquiz & event',
          description: 'Lokal underhållning på kvällarna',
        },
        {
          name: 'Res till Cheltenham eller Oxford',
          description: 'Mer nattliv i större städer',
        },
      ],
    },
    Bangkok: {
      restaurants: [
        {
          name: 'Gaggan',
          description: 'Modern indisk fine dining i världsklass',
        },
        {
          name: 'Thipsamai',
          description: 'Legendarisk Pad Thai med långa köer',
        },
        {
          name: 'Err Urban Rustic Thai',
          description: 'Rustik thailändsk street food i chic miljö',
        },
      ],
      bars: [
        {
          name: 'Sky Bar at Lebua',
          description: 'Känd takbar med panoramautsikt från filmen Hangover II',
        },
        {
          name: 'Maggie Choo’s',
          description: 'Speakeasy-atmosfär med livemusik och temakvällar',
        },
        {
          name: 'Teens of Thailand',
          description: 'Litet ginfokuserat krypin i Chinatown',
        },
      ],
      clubs: [
        {
          name: 'Route 66',
          description: 'Populär klubb i RCA-området med flera musikrum',
        },
        {
          name: 'Onyx',
          description: 'Stort EDM-dansgolv med internationella DJ-bookingar',
        },
        {
          name: 'Sing Sing Theater',
          description: 'Unikt inredd klubb med burleska shower och dansmusik',
        },
      ],
    },
    'Chiang Mai': {
      restaurants: [
        {
          name: 'Khao Soi Mae Sai',
          description: 'Känd för stadens signaturrätt Khao Soi',
        },
        {
          name: 'Dash! Restaurant and Bar',
          description: 'Familjeägd thailändsk restaurang i ett teakträhus',
        },
        {
          name: 'Ginger & Kafe',
          description: 'Stilfull fusion av thailändskt och internationellt',
        },
      ],
      bars: [
        {
          name: 'North Gate Jazz Co-Op',
          description: 'Livemusik med jazz och jam sessions',
        },
        {
          name: 'THC Rooftop Bar',
          description: 'Reggae-vibbar med utsikt över stadsmuren',
        },
        {
          name: 'Zoe in Yellow',
          description: 'Populär backpackerbar med dansgolv',
        },
      ],
      clubs: [
        {
          name: 'Infinity Club',
          description: 'Elektronisk musik och lokal publik',
        },
        {
          name: 'Spicy',
          description: 'Sen nattklubb för den festglada publiken',
        },
        {
          name: 'Warm Up Cafe',
          description:
            'Mix av livemusik och DJs, populärt bland lokalbefolkningen',
        },
      ],
    },
    Pai: {
      restaurants: [
        {
          name: 'Om Garden Cafe',
          description: 'Avslappnad atmosfär och hälsosamma rätter',
        },
        {
          name: 'Witching Well',
          description: 'Westerninspirerad meny och bakverk',
        },
        {
          name: 'Na’s Kitchen',
          description: 'Klassisk thailändsk mat, populär bland backpackers',
        },
      ],
      bars: [
        {
          name: 'Pai Pub',
          description: 'Enkel pub med livemusik och social stämning',
        },
        { name: 'Yellow Sun', description: 'Reggae-influerad bar vid floden' },
        {
          name: 'Don’t Cry Bar',
          description: 'Nattöppen bar med eldshower och chill-out vibe',
        },
      ],
      clubs: [
        {
          name: 'Chill House',
          description: 'Dag- och kvällsbar som ibland kör dansfester',
        },
        { name: 'Sunset Bar', description: 'Vacker utsikt och DJ-kvällar' },
        {
          name: 'Edible Jazz',
          description: 'Bar/café med liveframträdanden, stänger tidigt',
        },
      ],
    },
    'Koh Tao': {
      restaurants: [
        {
          name: 'Barracuda',
          description:
            'Fusion av thailändskt och västerländskt med fokus på fisk',
        },
        {
          name: 'Blue Water Restaurant',
          description: 'Strandnära mat och dryck i Sairee Beach-området',
        },
        {
          name: '995 Duck',
          description: 'Omtyckt för ankrätter och nudelsoppor',
        },
      ],
      bars: [
        {
          name: 'Lotus Bar',
          description: 'Populärt för strandfester och fire shows',
        },
        {
          name: 'Fizz Beach Lounge',
          description: 'Avkopplande loungekänsla vid havet',
        },
        {
          name: 'The Beer Masons',
          description: 'Specialiserad på hantverksöl',
        },
      ],
      clubs: [
        {
          name: 'Maya Beach Club',
          description: 'Strandklubb med DJs och dagfester',
        },
        {
          name: 'Fishbowl Beach Bar',
          description: 'Känd för beer pong och partystämning',
        },
        {
          name: 'Deishaview Lounge',
          description: 'Varierad musik och laidback atmosfär',
        },
      ],
    },
    'Koh Phangan': {
      restaurants: [
        {
          name: 'Fisherman’s Restaurant',
          description: 'Färsk fisk och skaldjur vid stranden',
        },
        {
          name: 'Pum Pui',
          description: 'Italiensk-thailändsk fusion i mysig miljö',
        },
        {
          name: 'L’Alcove',
          description: 'Fransk bistrokänsla med vinbar och havsutsikt',
        },
      ],
      bars: [
        {
          name: 'Amsterdam Bar',
          description: 'Berömd för solnedgångsvyer och reggae-beat',
        },
        {
          name: 'Three Sixty Bar',
          description: 'Högt belägen bar med 360-graders utsikt',
        },
        {
          name: 'Rasta Home',
          description: 'Reggae-hak med chill stämning och livespelningar',
        },
      ],
      clubs: [
        {
          name: 'Haad Rin Full Moon Party',
          description: 'Månatlig megafest med tusentals deltagare',
        },
        {
          name: 'Half Moon Festival',
          description: 'Elektronisk musikfest i djungeln',
        },
        {
          name: 'Jungle Experience',
          description: 'Vild naturfest med DJ:s och eldshower',
        },
      ],
    },
    'Koh Lanta': {
      restaurants: [
        {
          name: 'Time for Lime',
          description: 'Matlagningskurser och thailändska tapas',
        },
        {
          name: 'Red Snapper',
          description: 'Medelhavsinspirerad fusion och cocktailbar',
        },
        {
          name: 'Kunda Vegan Vegetarian',
          description: 'Hälsosamma vegetariska alternativ i en lugn setting',
        },
      ],
      bars: [
        {
          name: 'Irie Bar',
          description: 'Reggae-bar på stranden med avkopplad atmosfär',
        },
        {
          name: 'Why Not Bar',
          description:
            'Populär på Klong Khong-stranden, eldshower och livemusik',
        },
        {
          name: 'Freedom Bar',
          description: 'Bohemisk strandbar vid Relax Bay',
        },
      ],
      clubs: [
        {
          name: 'Ozone Beach Bar',
          description: 'Arrangerar strandfester med DJ:s',
        },
        {
          name: 'Korner Bar',
          description: 'Enklare strandklubbkänsla i södra Koh Lanta',
        },
        {
          name: 'Mushroom Bar',
          description: 'Psychedelic-inspirerad inredning och musik',
        },
      ],
    },
    'Ao Nang': {
      restaurants: [
        {
          name: 'Jungle Kitchen',
          description: 'Äkta thailändska smaker i djungelliknande miljö',
        },
        {
          name: 'Kodam Kitchen',
          description: 'Familjär atmosfär med thailändska klassiker',
        },
        {
          name: 'Lae Lay Grill',
          description: 'Seafood och grillrätter med panoramautsikt',
        },
      ],
      bars: [
        {
          name: 'Boogie Bar',
          description: 'Livemusik, rock och blues i centrum',
        },
        {
          name: 'Roots Rock Reggae Bar',
          description: 'Reggae-ställe med chill vibe',
        },
        {
          name: 'The Last Fisherman',
          description: 'Strandbar perfekt för solnedgångsdrinkar',
        },
      ],
      clubs: [
        {
          name: 'Center Point Ao Nang',
          description: 'Område med flera barer och klubbar',
        },
        {
          name: 'Chang Bar',
          description: 'Högljutt party med DJ och liveband',
        },
        {
          name: 'Bar One',
          description: 'Mindre klubbatmosfär, fokuserat på turister',
        },
      ],
    },
    'Koh Rong': {
      restaurants: [
        {
          name: 'Paradise Restaurant',
          description: 'Enkel strandrestaurang med färsk fisk och BBQ',
        },
        {
          name: 'Sigi’s Thai Food',
          description: 'Prisvärd thailändsk mat nära piren',
        },
        {
          name: 'Moonlight Resort Restaurant',
          description:
            'Finare atmosfär vid vattnet, europeisk och asiatisk meny',
        },
      ],
      bars: [
        {
          name: 'Police Beach',
          description: 'Arrangerar techno- och strandpartyn',
        },
        {
          name: 'Vagabonds',
          description: 'Backpacker-bar med social stämning',
        },
        {
          name: 'Bunna’s Place',
          description: 'Klassisk ö-bar vid huvudstranden',
        },
      ],
      clubs: [
        {
          name: 'Nest Beach Club',
          description: 'Hostel och festlokal med regelbundna evenemang',
        },
        {
          name: 'Monkey Island',
          description: 'Bar/boende som ibland kör strandfester',
        },
        {
          name: 'Full Moon Party (occasionally)',
          description: 'Mindre version av Koh Phangan-festerna',
        },
      ],
    },
    'Siem Reap (Angkor Wat)': {
      restaurants: [
        {
          name: 'Haven',
          description: 'NGO-driven restaurang som utbildar lokala ungdomar',
        },
        { name: 'Marum', description: 'Socialt företag med khmer-fusion' },
        {
          name: 'Genevieve’s',
          description: 'Välgörenhetsfokus och goda internationella rätter',
        },
      ],
      bars: [
        {
          name: 'Miss Wong',
          description: 'Retro-shanghaisk cocktailbar i smala gränder',
        },
        {
          name: 'Angkor What? Bar',
          description: 'Legendarisk backpackerbar på Pub Street',
        },
        {
          name: 'Picasso Bar',
          description: 'Liten men livlig tapas- och drinkbar',
        },
      ],
      clubs: [
        {
          name: 'Temple Club',
          description: 'Dansgolv, neonljus och billiga drinkar på Pub Street',
        },
        { name: 'X Bar', description: 'Takbar med skateboardramp och DJ:s' },
        { name: 'YOLO Bar', description: 'Partyställe för unga resenärer' },
      ],
    },
    'Phnom Penh': {
      restaurants: [
        {
          name: 'Romdeng',
          description:
            'Khmer-rätter och insektsdelikatesser, drivs av Tree Alliance',
        },
        {
          name: 'Malis',
          description: 'Fine dining med fokus på traditionell khmer-mat',
        },
        {
          name: 'Friends the Restaurant',
          description: 'Socialt företag som utbildar utsatta ungdomar',
        },
      ],
      bars: [
        {
          name: 'FCC (Foreign Correspondents’ Club)',
          description: 'Historisk bar med utsikt över floden',
        },
        { name: 'Zeppelin Bar', description: 'Rockmusik och sena öppettider' },
        {
          name: 'Sundown Social Club',
          description: 'Takbar med avslappnad stämning på Street 440',
        },
      ],
      clubs: [
        {
          name: 'Pontoon',
          description: 'Populär nattklubb med internationella DJ:s',
        },
        {
          name: 'Club Love',
          description: 'Dansgolv med R&B och kommersiell musik',
        },
        {
          name: 'Heart of Darkness',
          description: 'En av stadens äldsta nattklubbar, blandad musik',
        },
      ],
    },
    Kampot: {
      restaurants: [
        {
          name: 'Simple Things',
          description: 'Vegetariska rätter och hälsosamma val',
        },
        {
          name: 'Rusty Keyhole',
          description: 'Känd för sina ribs och flodutsikt',
        },
        {
          name: 'Kep Sur Mer (i närheten)',
          description: 'Färsk fisk och skaldjur, speciellt krabba',
        },
      ],
      bars: [
        { name: 'Banyan Tree', description: 'Populärt hostel/bar vid floden' },
        {
          name: 'Karma Traders',
          description: 'Takbar med pizzakvällar och pool',
        },
        {
          name: 'Monkey Republic',
          description: 'Backpackerbar med billiga drinkar',
        },
      ],
      clubs: [
        {
          name: 'Naga House',
          description: 'Flodnära hostel som ibland anordnar djungelfester',
        },
        {
          name: 'Mad Monkey Kampot',
          description: 'Vandrarhem med festkvällar',
        },
        {
          name: 'Begränsat nattliv',
          description: 'Fokus på barer snarare än klubbar',
        },
      ],
    },
    'Ho Chi Minh-staden': {
      restaurants: [
        {
          name: 'Secret Garden',
          description: 'Takrestaurang med hemlig ingång, äkta vietnamesiskt',
        },
        {
          name: 'Cuc Gach Quan',
          description: 'Traditionell inredning och hälsosam vietnamesisk meny',
        },
        {
          name: 'Propaganda',
          description:
            'Modern vietnamesisk bistromat med konstnärlig inredning',
        },
      ],
      bars: [
        {
          name: 'Chill Skybar',
          description: 'Lyxig takbar på 26:e våningen med skyline-utsikt',
        },
        {
          name: 'Bui Vien Street',
          description: 'Backpackerområde med många billiga barer',
        },
        {
          name: 'The Racha Room',
          description: 'Cocktailbar med asiatisk fusionmat',
        },
      ],
      clubs: [
        { name: 'Lush', description: 'Trendig klubb med internationella DJ:s' },
        {
          name: 'Apocalypse Now',
          description: 'Klassisk backpackerklubb, öppen sent',
        },
        {
          name: 'Observatory',
          description: 'Elektronisk musik med fokus på house och techno',
        },
      ],
    },
    'Da Lat': {
      restaurants: [
        {
          name: 'Nhà Gỗ (Wooden House)',
          description: 'Hemtrevlig vietnamesisk mat i rustik stuga',
        },
        {
          name: 'An Cafe',
          description: 'Grönskande café med lokala specialiteter',
        },
        {
          name: 'Primrose',
          description: 'Western- och vietnamesisk meny i lugn miljö',
        },
      ],
      bars: [
        {
          name: 'Maze Bar (100 Roofs)',
          description: 'Labyrintisk bar med surrealistisk inredning',
        },
        { name: 'The Escape Bar', description: 'Jazz- och blueslivemusik' },
        {
          name: 'Woody Classic Bar',
          description: 'Klassiska cocktails med retro-stämning',
        },
      ],
      clubs: [
        {
          name: 'Rain Nightclub',
          description: 'Stadens mest kända nattklubb, kommersiell musik',
        },
        { name: 'V Club', description: 'Blandad publik, lokala DJ:s' },
        {
          name: 'Begränsat utbud i Da Lat',
          description: 'Fokus på barer och caféer',
        },
      ],
    },
    'Mui Ne': {
      restaurants: [
        {
          name: 'Sandals Restaurant',
          description: 'Beachfront dining med internationell meny',
        },
        {
          name: 'Ganesh Indian Restaurant',
          description: 'Populärt för autentisk indisk mat',
        },
        {
          name: 'Bokalo Restaurant',
          description: 'Vietnamesisk grill och skaldjur',
        },
      ],
      bars: [
        {
          name: 'Dragon Beach Bar',
          description: 'Dag- och nattbar med strandfester',
        },
        { name: 'Joe’s Cafe', description: 'Livemusik, avslappnad atmosfär' },
        {
          name: 'Pogo Beach Bar',
          description: 'Strandbar med hängmattor och DJ:s',
        },
      ],
      clubs: [
        {
          name: 'Line Up Bar & Grill',
          description: 'Sen fest på stranden, främst backpackers',
        },
        {
          name: 'Dragon Beach Club',
          description: 'Dansgolv intill havet, ofta EDM',
        },
        {
          name: 'Sankara Beach Lounge',
          description: 'Tidigare populärt ställe för poolpartyn',
        },
      ],
    },
    'Hoi An': {
      restaurants: [
        {
          name: 'Morning Glory',
          description: 'Klassiska centralvietnamesiska rätter',
        },
        {
          name: 'Miss Ly Cafe',
          description: 'Hemtrevligt med traditionell Hoi An-mat',
        },
        {
          name: 'Mango Mango',
          description: 'Fusionrätter med utsikt över Thu Bon-floden',
        },
      ],
      bars: [
        {
          name: 'Q Bar',
          description: 'Stilfull cocktailbar i gammal historisk byggnad',
        },
        {
          name: 'Dive Bar',
          description: 'Avslappnad stämning, populärt bland dyksugna turister',
        },
        {
          name: 'Mango Rooms',
          description: 'Färgglad bar med kreativa drinkar',
        },
      ],
      clubs: [
        {
          name: 'Why Not Bar',
          description: 'Billiga drinkar och dansgolv för backpackers',
        },
        {
          name: 'Tiger Tiger Bar (An Bang Beach)',
          description: 'Strandfest-vibe på kvällarna',
        },
        {
          name: 'Zero Sea Mile (Cua Dai Beach)',
          description: 'Ibland större fester vid stranden',
        },
      ],
    },
    Hue: {
      restaurants: [
        {
          name: 'Hanh Restaurant',
          description: 'Känd för Bun Bo Hue och andra lokala specialiteter',
        },
        {
          name: 'Les Jardins de la Carambole',
          description: 'Fransk-vietnamesisk fusion i kolonialvilla',
        },
        {
          name: 'Ancient Hue',
          description: 'Traditionell kunglig Hue-kokkonst i autentisk miljö',
        },
      ],
      bars: [
        {
          name: 'DMZ Bar',
          description: 'Avslappnad bar med västerländsk mat och biljard',
        },
        { name: 'Brown Eyes', description: 'Populärt nattställe med dansgolv' },
        {
          name: 'Taboo Pub',
          description: 'Reggae- och rockmusik, ibland livemusik',
        },
      ],
      clubs: [
        {
          name: 'Royal Park Nightclub',
          description: 'Del av ett hotellkomplex, varierad musik',
        },
        {
          name: 'Underground Bar & Grill',
          description: 'Pubkänsla med liveband vissa kvällar',
        },
        {
          name: 'Begränsat utbud',
          description: 'Hue är mer känt för kultur än nattliv',
        },
      ],
    },
    Hanoi: {
      restaurants: [
        {
          name: 'Bun Cha Huong Lien',
          description: 'Känd som “Obama Bun Cha”, klassisk vietnamesisk rätt',
        },
        {
          name: 'Quan An Ngon',
          description: 'Stort urval av vietnamesiska gatumatklassiker',
        },
        {
          name: 'Cha Ca La Vong',
          description: 'Historichem för fiskrätten Cha Ca',
        },
      ],
      bars: [
        {
          name: 'Bia Hoi Junction',
          description: 'Gatuhörn med färsk öl och plaststolar',
        },
        {
          name: 'Tadioto',
          description: 'Konstnärlig bar med cocktails och kultur',
        },
        { name: 'Legend Beer', description: 'Takbar med egenbryggd öl' },
      ],
      clubs: [
        {
          name: '1900 Le Théâtre',
          description: 'Populär klubb med EDM och hiphop',
        },
        {
          name: 'Savage',
          description: 'Elektronisk musik och minimalistisk inredning',
        },
        {
          name: 'Hero Club',
          description: 'Stort dansgolv, ofta internationella DJ:s',
        },
      ],
    },
    'Cat Ba (Halong Bay)': {
      restaurants: [
        {
          name: 'Green Mango',
          description: 'Vietnamesisk västerländsk fusion med havsutsikt',
        },
        {
          name: 'Yummy Restaurant',
          description: 'Billiga lokala rätter och fisk',
        },
        {
          name: 'Casa Bonita',
          description: 'Mexikanska/tapasalternativ vid hamnen',
        },
      ],
      bars: [
        { name: 'Oasis Bar', description: 'Populärt hostel med bar och pool' },
        {
          name: 'Buddha Bar',
          description: 'Reggae- och chilloutmusik, avslappnad vibe',
        },
        {
          name: 'Cat Ba Sky Bar',
          description: 'Uteservering med utsikt över bukten',
        },
      ],
      clubs: [
        {
          name: 'Rose Club',
          description: 'Enklare nattklubbsmiljö, mer bar än klubb',
        },
        {
          name: 'Ingen större klubbscen',
          description: 'Fokus på barer och restauranger',
        },
        {
          name: 'Båtturer med party',
          description: 'Fester ordnas på båtturer runt Halong Bay',
        },
      ],
    },
    Sapa: {
      restaurants: [
        {
          name: 'Good Morning Vietnam',
          description: 'Prisvärd vietnamesisk meny och utsikt',
        },
        {
          name: 'Sapa Moment',
          description: 'Nordvästlig vietnamesisk mat i familjeatmosfär',
        },
        {
          name: 'The Hill Station Signature Restaurant',
          description: 'Lokal gastronomi och vinbar',
        },
      ],
      bars: [
        { name: 'H’Mong Sisters', description: 'Liten bar med bergsbykänsla' },
        {
          name: 'The Hiker Lounge',
          description: 'Avslappnat ställe för resenärer',
        },
        { name: 'Color Bar', description: 'Reggae och bohemisk inredning' },
      ],
      clubs: [
        {
          name: 'Ingen riktig klubbscen',
          description: 'Fokus på tidiga morgnar och vandring',
        },
        {
          name: 'Karaoke-ställen',
          description: 'Populärt bland lokalbefolkningen',
        },
        {
          name: 'Lokala events',
          description: 'Festivaler och marknader då och då',
        },
      ],
    },
    'Luang Prabang': {
      restaurants: [
        {
          name: 'Tamarind',
          description: 'Laotisk fine dining och matlagningskurser',
        },
        {
          name: 'Khaiphaen',
          description: 'NGO-restaurang som utbildar ungdomar',
        },
        {
          name: 'Bouang',
          description: 'Modern twist på laotisk mat, färgglad miljö',
        },
      ],
      bars: [
        {
          name: 'Utopia',
          description:
            'Populär flodnära bar med yoga på dagen, party på kvällen',
        },
        {
          name: 'Icon Klub',
          description: 'Konstnärligt café/bar med småskalig livemusik',
        },
        { name: 'Manda de Laos', description: 'Stilfull bar med lotusdammsvy' },
      ],
      clubs: [
        {
          name: 'Lao Lao Garden',
          description: 'Grillrestaurang som blir festplats senare',
        },
        { name: 'Sakura Bar', description: 'En av få sena hangouts i stan' },
        {
          name: 'MyFriends Club',
          description: 'Begränsat nattliv, stänger tidigt i Luang Prabang',
        },
      ],
    },
    'Vang Vieng': {
      restaurants: [
        {
          name: 'Gary’s Irish Bar',
          description: 'Pubmat, frukost och stor dryckesmeny',
        },
        { name: 'Amigo’s', description: 'Mexikansk mat i backpacker-området' },
        {
          name: 'Earth Recycled',
          description: 'Hälsosamma rätter och miljövänligt koncept',
        },
      ],
      bars: [
        {
          name: 'Sakura Bar',
          description: 'Känd för “Drink Triple, See Double, Act Single”',
        },
        { name: 'Viva Pub', description: 'Livlig stämning och spel' },
        { name: 'Full Moon Bar', description: 'Reggae-vibbar och chill out' },
      ],
      clubs: [
        { name: 'Få klubbar', description: 'Fokus på barer och tubingscenen' },
        { name: 'JB’s Bar', description: 'Ibland DJ-kvällar och dansgolv' },
        {
          name: 'Fat Monkey',
          description: 'Bar/klubbkänsla med fest vissa kvällar',
        },
      ],
    },
    Vientiane: {
      restaurants: [
        {
          name: 'Kualao',
          description: 'Traditionell laotisk fine dining med dansuppträdanden',
        },
        {
          name: 'Makphet',
          description: 'NGO-restaurang som stödjer lokala ungdomar',
        },
        {
          name: 'Ai Capone',
          description: 'Populär pizzeria och italienska rätter',
        },
      ],
      bars: [
        {
          name: 'Bor Pen Nyang',
          description: 'Takbar med utsikt över Mekongfloden',
        },
        {
          name: 'Chokdee Café & Belgian Beer Bar',
          description: 'Ölbar med belgiska ölsorter',
        },
        {
          name: 'The Spirit House',
          description: 'Riverfrontbar med cocktails och västerländsk meny',
        },
      ],
      clubs: [
        {
          name: 'Marina Nightclub',
          description: 'Elektronisk och popmusik, lokala DJ:s',
        },
        { name: 'Gold Star', description: 'Karaoke och dansgolv' },
        {
          name: '@Home (Tidigare Vivo)',
          description: 'Populär klubb bland unga Laoter',
        },
      ],
    },
    'Kuala Lumpur': {
      restaurants: [
        {
          name: 'Jalan Alor',
          description: 'Berömd gatumatsgata med ett stort urval',
        },
        {
          name: 'Din Tai Fung',
          description: 'Taiwanesiska dumplings i lyxig galleria',
        },
        { name: 'Bijan', description: 'Modern malaysisk fine dining' },
      ],
      bars: [
        {
          name: 'Heli Lounge Bar',
          description: 'Takbar på en helikopterplatta',
        },
        {
          name: 'Marini’s on 57',
          description: 'Exklusiv skybar med utsikt över Petronas Twin Towers',
        },
        {
          name: 'PS150',
          description:
            'Speakeasy i en före detta bordell med teman i olika rum',
        },
      ],
      clubs: [
        {
          name: 'Zouk KL',
          description: 'En av de största klubbarna i Sydostasien med flera rum',
        },
        {
          name: 'Kyo KL',
          description: 'Minimalistisk design, internationella DJ:s',
        },
        {
          name: 'Play Club at The Roof',
          description: 'Trendigt ställe med EDM och hiphop',
        },
      ],
    },
    'Penang (George Town)': {
      restaurants: [
        {
          name: 'Gurney Drive Hawker Centre',
          description: 'Ikonisk plats för hawker-mat med havsutsikt',
        },
        {
          name: 'Tek Sen',
          description: 'Kantonesisk/hokkien-inspirerad meny, omåttligt populär',
        },
        {
          name: 'Kebaya at Seven Terraces',
          description: 'Peranakan fine dining i historisk miljö',
        },
      ],
      bars: [
        {
          name: 'Three Sixty Rooftop Bar',
          description: 'Roterande takbar med utsikt över staden',
        },
        {
          name: 'Antarabangsa Enterprise',
          description: 'Känd för billig öl och lokal mötesplats',
        },
        {
          name: 'The Canteen at ChinaHouse',
          description: 'Konstgalleri, café och bar i ett',
        },
      ],
      clubs: [
        {
          name: 'M2 @ Penang Road',
          description: 'Modern klubb i hjärtat av George Town',
        },
        {
          name: 'Soho Free House',
          description: 'Pub/klubb med livemusik och brittisk stil',
        },
        {
          name: 'Versus',
          description: 'Nya klubbalternativ i Penang, EDM-inriktat',
        },
      ],
    },
    Perhentianöarna: {
      restaurants: [
        {
          name: 'Abdul’s Restaurant',
          description: 'Enkel strandrestaurang, färsk fisk',
        },
        {
          name: 'Mama’s Restaurant',
          description: 'Hemtrevliga rätter, lokalt populärt',
        },
        {
          name: 'Ewan’s Café',
          description: 'Känd för god mat och prisvärd frukost',
        },
      ],
      bars: [
        { name: 'OMBak Bar', description: 'Strandbar med avslappnad stämning' },
        { name: 'Monkey Bar', description: 'Backpackerhäng och eldkonst' },
        { name: 'Pirate’s Bar', description: 'Billiga drinkar på Long Beach' },
      ],
      clubs: [
        {
          name: 'Ingen större klubbscen',
          description: 'Strandfester och barhäng dominerar',
        },
        { name: 'Beach parties', description: 'Ofta improviserade nattfester' },
        {
          name: 'Res till större orter på fastlandet',
          description: 'För mer organiserat nattliv',
        },
      ],
    },
    'Cameron Highlands': {
      restaurants: [
        {
          name: 'The Dining Room at Cameron Highlands Resort',
          description: 'Finare matupplevelse med kolonial atmosfär',
        },
        {
          name: 'Singh Chapati Urban Restaurant',
          description: 'Indiska rätter, populärt bland resenärer',
        },
        {
          name: 'Cameron Valley Tea House',
          description: 'Te och enklare rätter med utsikt över teplantager',
        },
      ],
      bars: [
        {
          name: 'Jungle Bar (Father’s Guesthouse)',
          description: 'Backpackerbar med regnskogstema',
        },
        {
          name: 'Traveller’s Bistro & Pub',
          description: 'Enkel pub i Tanah Rata för att träffa andra resenärer',
        },
        {
          name: 'Highlands Bar (Cameron Highlands Resort)',
          description: 'Lugn bar för en drink i klassisk miljö',
        },
      ],
      clubs: [
        {
          name: 'Ingen egentlig klubbscen',
          description: 'Området fokuserar på natur och avkoppling',
        },
        {
          name: 'Resort Events',
          description: 'Ibland organiserade kvällsaktiviteter för gäster',
        },
        {
          name: 'Närliggande städer',
          description: 'För mer nattliv får man resa ner till låglandet',
        },
      ],
    },
    'Borneo (Kota Kinabalu)': {
      restaurants: [
        {
          name: 'Welcome Seafood Restaurant',
          description: 'Populärt och prisvärt för färsk fisk och skaldjur',
        },
        {
          name: 'Little Italy',
          description: 'Omtyckt italiensk restaurang i stadskärnan',
        },
        {
          name: 'D’Place Kinabalu',
          description: 'Inhemsk Sabah-mat som hinava och bambu-rätter',
        },
      ],
      bars: [
        {
          name: 'Shamrock Irish Bar',
          description: 'Pub-stämning vid vattnet med livemusik',
        },
        {
          name: 'El Centro',
          description: 'Mötesplats för lokala och expats, cocktails och mat',
        },
        {
          name: 'Upperstar',
          description: 'Kedja med mat och dryck, populärt bland unga',
        },
      ],
      clubs: [
        {
          name: 'B.E.D (Best Entertainment Destination)',
          description: 'Största nattklubben i KK, blandad musik',
        },
        {
          name: 'Rumba Latin Grill & Bar',
          description: 'Salsa och latinsk musik',
        },
        {
          name: 'Vogue Club (Le Meridien)',
          description: 'Hotellklubb med internationella DJ-sessions',
        },
      ],
    },
    Ubud: {
      restaurants: [
        {
          name: 'Locavore',
          description: 'Prisbelönt meny med fokus på lokala råvaror',
        },
        {
          name: 'Mozaic',
          description: 'Fine dining, fransk-indonesisk fusion',
        },
        {
          name: 'Warung Babi Guling Ibu Oka',
          description: 'Klassisk balinesisk spädgrisrätt (babi guling)',
        },
      ],
      bars: [
        {
          name: 'CP Lounge',
          description: 'Stor utomhusträdgård, livemusik och DJ:s på kvällen',
        },
        {
          name: 'No Mas Bar',
          description: 'Rockbar med livemusik och hantverkscocktails',
        },
        {
          name: 'The Night Rooster (by Locavore)',
          description: 'Experimentella drinkar med lokala ingredienser',
        },
      ],
      clubs: [
        {
          name: 'CP Lounge (nattetid)',
          description: 'Förvandlas till dansgolv sent på kvällen',
        },
        {
          name: 'Laughing Buddha Bar',
          description: 'Livemusik och salsa-evenemang',
        },
        {
          name: 'Jungle Fish (resort-lounge)',
          description: 'Poolklubbkoncept, mest dagtid',
        },
      ],
    },
    Lombok: {
      restaurants: [
        {
          name: 'Warung Bule',
          description: 'Enkel lokal warung med autentisk indonesisk mat',
        },
        {
          name: 'Ashtari Restaurant',
          description: 'Upphöjt läge med panoramautsikt över Kuta-stranden',
        },
        {
          name: 'Bamba',
          description: 'Fusion-restaurang med fokus på internationella smaker',
        },
      ],
      bars: [
        {
          name: 'Surfer’s Bar (Kuta)',
          description: 'Avslappnad bar med surfingtema och liveframträdanden',
        },
        {
          name: 'The Bus Bar',
          description: 'Unik bar i en ombyggd buss, populär för solnedgång',
        },
        {
          name: 'Felice Beach Bar (Senggigi)',
          description: 'Strandnära bar med chill-out musik och cocktails',
        },
      ],
      clubs: [
        {
          name: 'Ryzz Club (Mataram)',
          description: 'Stadsnattklubb med lokala DJ:s',
        },
        {
          name: 'Marina Cafe (Senggigi)',
          description: 'Kombinerad restaurang och klubb vid stranden',
        },
        {
          name: 'Begränsat nattliv',
          description: 'Fokus på natur, surf och lugna kvällar',
        },
      ],
    },
    Komodoöarna: {
      restaurants: [
        {
          name: 'Labuan Bajo Café In Hit',
          description: 'Populärt ställe för fiskrätter och enklare måltider',
        },
        {
          name: 'Mediterraneo',
          description: 'Italiensk-asiatisk fusion vid hamnen i Labuan Bajo',
        },
        {
          name: 'Le Pirate Restaurant',
          description: 'Casual dining med havsutsikt och ö-tema',
        },
      ],
      bars: [
        {
          name: 'Paradise Bar (Labuan Bajo)',
          description: 'Känd för magiska solnedgångar och reggae-stämning',
        },
        {
          name: 'Le Pirate Beach Club',
          description: 'Takbar och pool med tropiska drinkar',
        },
        {
          name: 'Exotic Komodo',
          description: 'Liten bar med avslappnad atmosfär och havsbris',
        },
      ],
      clubs: [
        {
          name: 'Ingen större klubbscen',
          description: 'Fokus på dykning, natur och båtutflykter',
        },
        {
          name: 'Liveaboard-båtar',
          description: 'Vissa arrangerar små fester ombord',
        },
        {
          name: 'Res till större städer',
          description: 'För mer intensivt nattliv (ex. Bali)',
        },
      ],
    },
    Yogyakarta: {
      restaurants: [
        {
          name: 'Gudeg Yu Djum',
          description: 'Berömd för Yogyas signaturrätt “Gudeg”',
        },
        {
          name: 'Roaster and Bear',
          description: 'Trendig café/restaurang med västerländska inslag',
        },
        {
          name: 'ViaVia',
          description:
            'Populär bland resenärer, internationell meny och bageri',
        },
      ],
      bars: [
        {
          name: 'Sakapatat Social House & Bar',
          description: 'Avslappnad stämning, öl och internationella rätter',
        },
        {
          name: 'Asmara Art & Coffee Shop',
          description: 'Kulturinriktad bar med konstutställningar',
        },
        {
          name: 'Bar Spin',
          description: 'Studentvänligt, biljard och karaoke',
        },
      ],
      clubs: [
        {
          name: 'Boshe VVIP Club',
          description: 'Stor nattklubb med modern ljudanläggning',
        },
        { name: 'Liquid Café', description: 'Elektronisk musik och liveband' },
        {
          name: 'Terrace Club',
          description: 'Mainstreamhits och dansgolv i centrala Yogya',
        },
      ],
    },
    Jakarta: {
      restaurants: [
        {
          name: 'Lara Djonggrang',
          description: 'Traditionell indonesisk mat i en kulturhistorisk miljö',
        },
        {
          name: 'Sana Sini Restaurant',
          description: 'Internationella bufféer på Pullman Hotel',
        },
        {
          name: 'Bandar Djakarta (Ancol)',
          description: 'Färska skaldjur direkt vid kusten',
        },
      ],
      bars: [
        {
          name: 'Skye Bar & Restaurant',
          description: 'Takbar på 56:e våningen med fantastisk cityvy',
        },
        {
          name: 'Lucy in the Sky',
          description: 'Populär rooftop-lounge i SCBD-området',
        },
        {
          name: 'Union',
          description: 'Trendig bar/kafé med hantverksbakverk och drinkar',
        },
      ],
      clubs: [
        {
          name: 'Colosseum Club',
          description: 'En av Asiens största nattklubbar för EDM',
        },
        {
          name: 'Dragonfly',
          description: 'Lyxig klubb med internationella DJ-gäster',
        },
        {
          name: 'Fable',
          description: 'Chic inredning, centralt läge och dansgolv',
        },
      ],
    },
    'Medan (Sumatra)': {
      restaurants: [
        {
          name: 'Merdeka Walk',
          description: 'Populär matgata med lokala och internationella stånd',
        },
        {
          name: 'Tip Top Restaurant',
          description:
            'Historisk kolonialstil, känd för bakverk och västerländsk meny',
        },
        {
          name: 'Wajir Seafood',
          description: 'Omtyckt skaldjursrestaurang med stort urval',
        },
      ],
      bars: [
        {
          name: 'The Tavern Pub',
          description: 'Livemusik och brittisk pubkänsla',
        },
        {
          name: 'Shooters Bar Medan',
          description: 'Sportbar med enklare mat och dryck',
        },
        {
          name: 'Prime Bar (Hotel JW Marriott)',
          description: 'Högklassig hotellbar med cocktails',
        },
      ],
      clubs: [
        {
          name: 'Entrance Music Temple',
          description: 'Populär nattklubb med EDM och hiphop',
        },
        {
          name: 'Gravity Club Medan',
          description: 'Lokal DJ-scen och kommersiell musik',
        },
        {
          name: 'V Club & KTV',
          description: 'Karaoke och dansgolv i samma lokal',
        },
      ],
    },
    Manila: {
      restaurants: [
        {
          name: 'Barbara’s Heritage Restaurant',
          description: 'Filippinsk buffé och kulturshow i Intramuros',
        },
        {
          name: 'Locavore',
          description: 'Modern tolkning av filippinska rätter',
        },
        {
          name: 'Abe',
          description:
            'Kapampangan-inspirerade specialiteter och klassiska favoriter',
        },
      ],
      bars: [
        {
          name: 'The Curator',
          description: 'Rankad bland Asiens bästa barer, dolda ingångar',
        },
        {
          name: 'Bank Bar',
          description: 'Speakeasy gömd bakom ett 7-Eleven lagerutrymme',
        },
        {
          name: 'Poblacion Pub Crawl',
          description: 'Område i Makati med många trendiga barer',
        },
      ],
      clubs: [
        {
          name: 'Xylo at The Palace',
          description: 'Megaklubb i BGC med internationella DJ:s',
        },
        {
          name: 'Revel at The Palace',
          description: 'Lyxklubb med VIP-områden',
        },
        {
          name: 'Black Market',
          description: 'Underground-house och techno, industriell vibe',
        },
      ],
    },
    'Palawan (El Nido & Coron)': {
      restaurants: [
        {
          name: 'Artcafe (El Nido)',
          description: 'Resenärshub med internationell meny och livemusik',
        },
        {
          name: 'Trattoria Altrove (El Nido)',
          description: 'Vedugnsbakad pizza i en enkel miljö',
        },
        {
          name: 'KT’s Sinugba Sa Balay (Coron)',
          description: 'Grillad fisk och filippinska rätter',
        },
      ],
      bars: [
        {
          name: 'Sava Beach Bar (El Nido)',
          description: 'Cocktailbar vid stranden med DJ:s kvällstid',
        },
        {
          name: 'Poco Loco Bar (Coron)',
          description: 'Backpackerbar med biljard och social stämning',
        },
        {
          name: 'Bacuit Grill & Bar (El Nido)',
          description: 'Avslappnade strandvibbar och kalla drycker',
        },
      ],
      clubs: [
        {
          name: 'Ingen större klubbkultur',
          description: 'Fokus på strandhäng och ö-hoppning',
        },
        {
          name: 'Booze cruises',
          description: 'Båtutflykter med musik och fest',
        },
        {
          name: 'Små strandpartyn',
          description: 'Organiseras ibland av lokala barer',
        },
      ],
    },
    Cebu: {
      restaurants: [
        {
          name: 'Rico’s Lechon',
          description: 'Berömd för sitt klassiska cebuanska lechon',
        },
        {
          name: 'STK ta bai! at Paolito’s Seafood House',
          description: 'Grillade skaldjur och fisk',
        },
        {
          name: 'Casa Verde',
          description: 'Amerikanskinspirerad meny med stora portioner',
        },
      ],
      bars: [
        {
          name: 'Liv Super Club',
          description: 'Stort dansgolv med LED-skärmar och EDM',
        },
        {
          name: 'Politics Café and Bar',
          description: 'Skämtsam politisk inredning, mysig pubkänsla',
        },
        {
          name: 'The Distillery',
          description: 'Hantverksöl och single malt whisky',
        },
      ],
      clubs: [
        { name: 'Hype 3.0', description: 'Dansgolv med R&B, pop och EDM' },
        {
          name: 'Icon',
          description:
            'Populär bland lokalbefolkning och turister, kommersiell musik',
        },
        {
          name: 'Morals & Malice',
          description: 'Konceptlounge och klubb med konsttema',
        },
      ],
    },
    Siargao: {
      restaurants: [
        {
          name: 'Kermit Siargao',
          description: 'Känd för sin pizza och surfkultur',
        },
        {
          name: 'Bravo Restaurant',
          description: 'Medelhavs- och filippinskt kök vid stranden',
        },
        {
          name: 'Shaka Cafe',
          description: 'Hälsosamma bowls och smoothies med havsutsikt',
        },
      ],
      bars: [
        {
          name: 'Viento del Mar',
          description: 'Hostel och bar, ofta livemusik och temakvällar',
        },
        {
          name: 'RumBar',
          description: 'Reggae- och reaggaetonkvällar, lokala DJ:s',
        },
        {
          name: 'White Banana Beach Club',
          description: 'Strandbar med cocktails och DJ-set',
        },
      ],
      clubs: [
        {
          name: 'Harana Surf Resort',
          description: 'Ibland fester med DJ:s i surfmiljö',
        },
        {
          name: 'Loose Keys Moto Bar',
          description: 'Bar/club vibe för surfare och backpackers',
        },
        {
          name: 'Ingen större klubbscen',
          description: 'Huvudsakligen strandfester och barhäng',
        },
      ],
    },
    Bohol: {
      restaurants: [
        {
          name: 'Bohol Bee Farm Restaurant',
          description: 'Ekologisk mat och hemlagad glass',
        },
        {
          name: 'Saffron Restaurant (Panglao)',
          description: 'Mix av lokala och internationella rätter',
        },
        {
          name: 'Gerarda’s Family Restaurant (Tagbilaran)',
          description: 'Klassisk filippinsk familjemat',
        },
      ],
      bars: [
        {
          name: 'Alona Beach Bars (Panglao)',
          description: 'Flera små strandbarer med livemusik',
        },
        {
          name: 'Helmut’s Place',
          description: 'Sportbar i Panglao med biljard',
        },
        {
          name: 'Coco Vida Bar',
          description: 'Populär samlingsplats vid stranden',
        },
      ],
      clubs: [
        {
          name: 'Club Atmosphere (Tagbilaran)',
          description: 'En av få nattklubbar på Bohol',
        },
        {
          name: 'Nattliv främst på resorter',
          description: 'Mindre fester och events',
        },
        {
          name: 'Strandfester i Panglao',
          description: 'Spontana fester längs Alona Beach',
        },
      ],
    },
    Goa: {
      restaurants: [
        {
          name: 'Thalassa (Vagator)',
          description: 'Grekisk mat med solnedgångsvy över havet',
        },
        {
          name: 'Martin’s Corner',
          description: 'Klassisk Goan-kryddad fisk och skaldjur',
        },
        {
          name: 'Vinayak Family Restaurant (Assagao)',
          description: 'Lokalt favoritställe för färsk fisk curry',
        },
      ],
      bars: [
        {
          name: 'Curlies (Anjuna)',
          description: 'Legendarisk strandbar med psytrance-fester',
        },
        {
          name: 'Cafe Lilliput (Anjuna)',
          description: '24-timmars feststämning, speciellt under högsäsong',
        },
        {
          name: 'Shiva Valley (Anjuna)',
          description: 'Trancekvällar och eldshower på stranden',
        },
      ],
      clubs: [
        {
          name: 'Hilltop (Vagator)',
          description: 'Psytrance-ikon i Goas partyscen',
        },
        {
          name: 'Club Cubana (Arpora)',
          description: '“Nightclub in the Sky” med pool och flera dansgolv',
        },
        {
          name: 'Tito’s (Baga)',
          description: 'Mainstream klubb för turister och lokala',
        },
      ],
    },
    Rishikesh: {
      restaurants: [
        {
          name: 'The 60’s Beatles Cafe',
          description: 'Vegetarisk meny och Beatles-tema',
        },
        {
          name: 'Chotiwala',
          description: 'Berömd för sin traditionella nordindiska mat',
        },
        {
          name: 'Ganga View Cafe',
          description: 'Enkel mat med utsikt över Ganges',
        },
      ],
      bars: [
        {
          name: 'Ingen alkoholservering i heliga staden',
          description: 'Rishikesh är mestadels alkohol- och köttfri',
        },
        {
          name: 'Café-kultur',
          description: 'Fokus på te, kaffe och hälsosamma drycker',
        },
        {
          name: 'Juice- och smoothiebarer',
          description: 'Populära bland yoga- och hälsoturister',
        },
      ],
      clubs: [
        {
          name: 'Ingen officiell klubbscen',
          description: 'Staden är ett center för yoga och meditation',
        },
        {
          name: 'Spirituella evenemang',
          description: 'Kirtan, satsang och musiksessioner vid ashram',
        },
        {
          name: 'Eventuell musik vid caféer',
          description: 'Occasionell livemusik i vissa turistscaféer',
        },
      ],
    },
    Varanasi: {
      restaurants: [
        {
          name: 'Kashi Chat Bhandar',
          description: 'Lokal gatumat som chaat och lassi',
        },
        {
          name: 'Brown Bread Bakery',
          description: 'Ekologisk bageri och vegetariska rätter',
        },
        {
          name: 'Aum Cafe',
          description: 'Hälsosamt veganskt och vegetariskt utbud',
        },
      ],
      bars: [
        {
          name: 'Alkohol svårtillgängligt',
          description: 'Helig stad med restriktioner',
        },
        {
          name: 'Hotelbarer',
          description: 'Vissa större hotell serverar diskret alkohol',
        },
        {
          name: 'Te- och lassi-ställen',
          description: 'Istället för barer är lassi-butiker populära',
        },
      ],
      clubs: [
        {
          name: 'Ingen utpräglad nattklubbsscen',
          description: 'Fokus på religiösa ritualer och Ganges-ceremonier',
        },
        {
          name: 'Kulturella event',
          description: 'Klassisk indisk musik och dans',
        },
        {
          name: 'Hotellfester (privat)',
          description: 'Sporadiska event i turistkretsar',
        },
      ],
    },
    Jaipur: {
      restaurants: [
        {
          name: 'Chokhi Dhani',
          description: 'Etnisk byupplevelse med rajasthanska specialiteter',
        },
        {
          name: 'LMB (Laxmi Misthan Bhandar)',
          description: 'Känd för sötsaker och traditionella snacks',
        },
        {
          name: 'Peacock Rooftop Restaurant',
          description: 'Takservering med utsikt över stadens fort',
        },
      ],
      bars: [
        {
          name: 'Bar Palladio',
          description: 'Italienskinspirerad lounge i en historisk byggnad',
        },
        {
          name: 'The Forresta Kitchen & Bar',
          description: 'Grönskande innergård, cocktails och grillrätter',
        },
        {
          name: 'Henry’s (Hotel Holiday Inn)',
          description: 'Pub-stämning och livemusik',
        },
      ],
      clubs: [
        {
          name: 'Club Naila',
          description: 'Poolfester och DJ-evenemang i Naila Bagh Palace',
        },
        {
          name: 'House of People',
          description: 'Populär modern klubb med dansgolv',
        },
        {
          name: 'Blackout',
          description: 'Takklubb med utsikt över stadssilhuetten',
        },
      ],
    },
    Pushkar: {
      restaurants: [
        {
          name: 'Sunset Café',
          description: 'Avslappnat café vid sjön, vegetariska rätter',
        },
        {
          name: 'Honey & Spice',
          description: 'Kreativa sallader, hälsosamma smoothies',
        },
        {
          name: 'Out Of The Blue',
          description: 'Rooftop café med global meny och utsikt',
        },
      ],
      bars: [
        {
          name: 'Ingen alkohol i heliga staden',
          description: 'Pushkar är en av Indiens heligaste orter',
        },
        {
          name: 'Juice- och lassi-ställen',
          description: 'Populär mötesplats för resenärer',
        },
        {
          name: 'Chill-områden vid sjön',
          description: 'Relaxad vibe vid ghats',
        },
      ],
      clubs: [
        {
          name: 'Ingen klubbscen',
          description: 'Religiös stad med fokusering på tempel och ceremoni',
        },
        {
          name: 'Lokala musikkvällar',
          description: 'Indisk folkmusik vid caféer ibland',
        },
        {
          name: 'Pushkar Camel Fair (säsong)',
          description: 'Festivalstämning, kulturella event',
        },
      ],
    },
    Manali: {
      restaurants: [
        {
          name: 'Johnson’s Café',
          description: 'Känt för forellrätter och bergsatmosfär',
        },
        {
          name: 'Cafe 1947',
          description: 'Riverside café med livemusik och italienska rätter',
        },
        {
          name: 'Fat Plate Cafe',
          description: 'Fusion och lokala specialiteter i vacker trädgård',
        },
      ],
      bars: [
        {
          name: 'Lazy Dog Lounge',
          description: 'Livemusik, cocktails och utsikt över floden',
        },
        {
          name: 'Rendez-Vous Bar & Restaurant',
          description: 'Backpackerbar med biljard och musik',
        },
        {
          name: 'Solang Valley Resort Bar',
          description: 'Hotellbar med bergspanorama',
        },
      ],
      clubs: [
        {
          name: 'Ingen stor klubbkultur',
          description: 'Mer fokus på natur, trekking och hippie-vibe',
        },
        {
          name: 'Fester i Old Manali',
          description: 'Små jam sessions och privatfester',
        },
        {
          name: 'Cafe Live Music',
          description: 'Vissa caféer förvandlas till musikscen kvällstid',
        },
      ],
    },
    'Leh-Ladakh': {
      restaurants: [
        {
          name: 'The Tibetan Kitchen',
          description: 'Momos, thukpa och tibetanska specialiteter',
        },
        {
          name: 'Gesmo Restaurant',
          description: 'Populär bland backpackers, blandad meny',
        },
        {
          name: 'Lamayuru Restaurant',
          description: 'Lokal ladakhisk mat och indiska rätter',
        },
      ],
      bars: [
        {
          name: 'Ingen större barscen',
          description: 'Höghöjdsområde med restriktiv alkoholpolicy',
        },
        {
          name: 'Hotelbarer',
          description: 'Vissa hotell erbjuder försiktigt serverad alkohol',
        },
        {
          name: 'Cafés och teserveringar',
          description: 'Ingefärste och tibetanskt smörte är populärt',
        },
      ],
      clubs: [
        {
          name: 'Ingen riktig klubbscen',
          description: 'Fokus på naturupplevelser och kultur',
        },
        {
          name: 'Lokala festivaler',
          description: 'Gompa-danser och tibetanska firanden',
        },
        {
          name: 'Tidiga kvällar',
          description: 'De flesta ställen stänger tidigt pga klimat och kultur',
        },
      ],
    },
    'Kerala (Varkala & Alleppey)': {
      restaurants: [
        {
          name: 'Darjeeling Cafe (Varkala)',
          description: 'Utsikt över klippan, internationella rätter',
        },
        {
          name: 'Cafe Green Pepper (Varkala)',
          description: 'Färska skaldjur och traditionell kerala-stil',
        },
        {
          name: 'Thaff Delicacy (Alleppey)',
          description: 'Populär lokal restaurang för traditionella curryrätter',
        },
      ],
      bars: [
        {
          name: 'Rock n Roll Cafe (Varkala)',
          description: 'Avslappnad strandbar, ibland livemusik',
        },
        {
          name: 'Darjeeling Cafe by Night',
          description: 'Vissa caféer serverar öl diskret',
        },
        {
          name: 'Hotellbarer (Alleppey)',
          description: 'Husboat-upplevelser med måttlig alkoholförsäljning',
        },
      ],
      clubs: [
        {
          name: 'Ingen större klubbkultur',
          description: 'Kerala har restriktiv alkoholpolitik',
        },
        {
          name: 'Strandfester i Varkala (sporadiska)',
          description: 'Små jam sessions på klippan',
        },
        {
          name: 'Houseboat-fester (Alleppey)',
          description: 'Privata partyn på husbåtar',
        },
      ],
    },
    Mumbai: {
      restaurants: [
        {
          name: 'Leopold Cafe',
          description: 'Kolonialt arv, populärt bland turister',
        },
        {
          name: 'Trishna',
          description: 'Berömd för sin signaturrätt: vitlöks-pepparkrabba',
        },
        { name: 'The Table', description: 'Global fusion i Colaba-området' },
      ],
      bars: [
        {
          name: 'Aer (Four Seasons)',
          description: 'Lyxig takbar med utsikt över staden',
        },
        {
          name: 'Social (Colaba, Bandra, etc.)',
          description: 'Populära coworking/bar-kedjor med ungdomlig atmosfär',
        },
        {
          name: 'Gokul',
          description: 'Klassisk “dive” bar i Colaba, budgetvänlig',
        },
      ],
      clubs: [
        { name: 'Trilogy', description: 'Chic nattklubb i Juhu' },
        {
          name: 'Todi Mill Social',
          description: 'Hybrid av bar, klubb och evenemangsplats i Lower Parel',
        },
        {
          name: 'Kitty Su (The Lalit)',
          description: 'High-end EDM och Bollywood-nätter',
        },
      ],
    },
    Kolkata: {
      restaurants: [
        {
          name: 'Peter Cat',
          description: 'Känd för sin “Chelo Kabab” och retro vibe',
        },
        {
          name: '6 Ballygunge Place',
          description: 'Autentisk bengalisk meny i charmigt townhouse',
        },
        {
          name: 'Oh! Calcutta',
          description:
            'Fokus på traditionella bengaliska fisk- och skaldjursrätter',
        },
      ],
      bars: [
        {
          name: 'Someplace Else (Park Hotel)',
          description: 'Legendarisk livemusikpub',
        },
        {
          name: 'Olypub',
          description: 'Klassisk bar med enkla drinkar och kolkata-ambience',
        },
        {
          name: 'The Grid',
          description: 'Mikrobryggeri med modern gastropub-meny',
        },
      ],
      clubs: [
        {
          name: 'Roxy (The Park)',
          description: 'Sofistikerad klubb med retro-tema',
        },
        { name: 'Nocturne', description: 'Trendigt dansgolv och lounge' },
        {
          name: 'Shisha Reincarnated',
          description: 'Populär bland unga, blandad musik',
        },
      ],
    },
    Kathmandu: {
      restaurants: [
        {
          name: 'OR2K',
          description: 'Vegetariskt Mellanöstern- och nepalesiskt fusion',
        },
        {
          name: 'Himalayan Java Coffee',
          description: 'Kedja känd för sitt lokalt odlade kaffe',
        },
        {
          name: 'Utse Restaurant',
          description: 'Tibetanska och nepalesiska specialiteter',
        },
      ],
      bars: [
        { name: 'Sam’s Bar (Thamel)', description: 'Klassisk backpackerbar' },
        {
          name: 'Tom & Jerry’s Pub',
          description: 'Livlig stämning, populär bland klättrare och resenärer',
        },
        {
          name: 'Rum Doodle',
          description: 'Legendarisk bar för Everest-klättrare, signaturväggar',
        },
      ],
      clubs: [
        {
          name: 'Club Deja Vu',
          description: 'Storskalig klubb med internationella DJ:s',
        },
        {
          name: 'Lord of the Drinks (LOTD)',
          description: 'Del av en indisk klubbkedja, mainstream musik',
        },
        {
          name: 'Lhasa Bar',
          description:
            'Mindre musikscen, blandning av lokala och internationella beats',
        },
      ],
    },
    Pokhara: {
      restaurants: [
        {
          name: 'Moondance Restaurant',
          description: 'Internationell meny med sjöutsikt',
        },
        {
          name: 'Godfather’s Pizzeria',
          description: 'Populär bland resenärer, träugnsbakad pizza',
        },
        {
          name: 'OR2K (Lakeside)',
          description: 'Vegetarisk Mellanöstern- och nepalesisk fusion',
        },
      ],
      bars: [
        {
          name: 'Busy Bee Cafe',
          description: 'Legendarisk bar med liveband, dansgolv',
        },
        { name: 'Irish Pub', description: 'En bit av Irland i Himalaya' },
        { name: 'All That Jazz', description: 'Musikbar med jazz och rock' },
      ],
      clubs: [
        {
          name: 'Club Amsterdam',
          description: 'Liveband och DJ-kvällar, populärt bland turister',
        },
        {
          name: 'Old Blues Bar',
          description: 'Blues- och rockmusik, intima uppträdanden',
        },
        {
          name: 'Nattliv runt Lakeside',
          description: 'Mest barer men vissa ställen har dansgolv',
        },
      ],
    },
    'Everest Base Camp': {
      restaurants: [
        {
          name: 'Teahouses längs leden',
          description: 'Enkla dal bhat, nudelsoppa och momo',
        },
        {
          name: 'Namche Bakery (Namche Bazaar)',
          description: 'Bageri och café på hög höjd',
        },
        {
          name: 'Hillary Tenzing Restaurant (Namche)',
          description: 'Grundläggande comfort food för vandrare',
        },
      ],
      bars: [
        {
          name: 'Irländska puben (Namche Bazaar)',
          description: 'En av världens högst belägna pubar',
        },
        {
          name: 'The Danfe Bar (Lukla)',
          description: 'Mötesplats för vandrare innan/efter flyg',
        },
        {
          name: 'Teahouse-lounger',
          description: 'Varm dryck och samling kring kaminerna',
        },
      ],
      clubs: [
        {
          name: 'Ingen klubbscen',
          description: 'Huvudfokus är trekking och naturupplevelser',
        },
        {
          name: 'Spontana fester på teahouses',
          description: 'Vandrare som firar framgångsrik klättring',
        },
        {
          name: 'Tidig kväll',
          description: 'De flesta sover tidigt för att klara vandringen',
        },
      ],
    },
    'Chitwan National Park': {
      restaurants: [
        {
          name: 'KC’s Restaurant and Bar (Sauraha)',
          description: 'Populärt för västerländsk mat i parkens utkant',
        },
        {
          name: 'Jungle View Restaurant',
          description: 'Utsikt över naturen, lokala och internationella rätter',
        },
        {
          name: 'Hotel Parkside Restaurant',
          description: 'Familjestil och nepalesiska specialiteter',
        },
      ],
      bars: [
        { name: 'Hattiban Resort Bar', description: 'Enkel bar nära naturen' },
        {
          name: 'Sauraha Tharu Bars',
          description: 'Lokalt arrak och folklig stämning',
        },
        {
          name: 'Relaxade loungeområden',
          description: 'Fokus på safari på dagen, lugn kvällsmiljö',
        },
      ],
      clubs: [
        {
          name: 'Ingen egentlig klubbscen',
          description: 'Safari och naturupplevelser är huvudattraktion',
        },
        {
          name: 'Tharu-kulturshower',
          description: 'Traditionell dans och musik på kvällarna',
        },
        {
          name: 'Hotell- och lodgeevents',
          description: 'Mindre fester organiseras ibland',
        },
      ],
    },
    Thimphu: {
      restaurants: [
        {
          name: 'Ambient Café',
          description: 'Populär mötesplats för både lokalbor och turister',
        },
        {
          name: 'Folk Heritage Museum Restaurant',
          description: 'Traditionell bhutanesisk mat i museets gård',
        },
        {
          name: 'Chula Restaurant',
          description: 'Fusionsrätter och hantverkskänsla',
        },
      ],
      bars: [
        {
          name: 'Om Bar',
          description: 'Avkopplad atmosfär för en drink eller två',
        },
        {
          name: 'Mojo Park',
          description: 'Livemusik, lokala band spelar rock och fusion',
        },
        {
          name: 'Space 34',
          description: 'Bar/klubbmix, en av få nattställen i Thimphu',
        },
      ],
      clubs: [
        {
          name: 'Space 34',
          description: 'Mest kända klubben, karaoke och dansgolv',
        },
        { name: 'Club Ace', description: 'Kan ha temakvällar och DJ:s' },
        {
          name: 'Restriktioner',
          description: 'Bhutan har strikta alkohol- och öppettidspolicyer',
        },
      ],
    },
    Colombo: {
      restaurants: [
        {
          name: 'Ministry of Crab',
          description: 'Världsberömt för sin chili crab och kockar',
        },
        {
          name: 'Upali’s by Nawaloka',
          description: 'Autentisk srilankesisk husmanskost',
        },
        {
          name: 'Café Kumbuk',
          description: 'Hälsosamma bowls och västerländska rätter',
        },
      ],
      bars: [
        {
          name: 'Barefoot Garden Café',
          description: 'Lugn trädgårdsbar med konstgalleri',
        },
        {
          name: 'Sugar Bistro & Wine Bar',
          description: 'Modern vinbar och bistro',
        },
        {
          name: 'Botanik Rooftop Bistro & Bar',
          description: 'Takbar med DJ-kvällar och cocktails',
        },
      ],
      clubs: [
        {
          name: 'ZAZA Bar (Casa Colombo)',
          description: 'Stilrent nattlivsalternativ i boutiquehotell',
        },
        {
          name: 'Disques',
          description: 'EDM och Bollywood-nätter i Colombo centrum',
        },
        {
          name: 'Rhythm and Blues (R&B)',
          description: 'Klubb och bar med liveband och dansgolv',
        },
      ],
    },
    Galle: {
      restaurants: [
        {
          name: 'A Minute by Tuk Tuk',
          description: 'Härlig utsikt över hamnen, asiatisk fusion',
        },
        {
          name: 'Fortaleza',
          description: 'Fusionrätter i ett historiskt fortmiljö',
        },
        {
          name: 'Chambers Restaurant',
          description: 'Mellanösterninspirerat kök innanför Galle Forts murar',
        },
      ],
      bars: [
        {
          name: 'The Living Room by TPV',
          description: 'Chic loungebar med sofistikerad atmosfär',
        },
        {
          name: 'ORYX Rooftop Bar',
          description: 'Utsikt över Galle Fort och havet',
        },
        {
          name: 'The Wine Shop & Bar (Galle Fort)',
          description: 'Enkel bar för vin och öl med rustik charm',
        },
      ],
      clubs: [
        {
          name: 'Begränsat utbud i Galle',
          description: 'Främst barer och restauranger i fortområdet',
        },
        {
          name: 'Hotellfester',
          description: 'Sporadiska evenemang på strandresorter',
        },
        {
          name: 'Res till Colombo',
          description: 'För större nattklubbsalternativ',
        },
      ],
    },
    Mirissa: {
      restaurants: [
        {
          name: 'Zephyr Restaurant & Bar',
          description: 'Populärt för fisk, skaldjur och strandläge',
        },
        {
          name: 'Dewmini Roti Shop',
          description: 'Hemlagade roti och curryrätter',
        },
        {
          name: 'Bay Moon Restaurant',
          description: 'Avslappnad atmosfär vid stranden, färsk grillad fisk',
        },
      ],
      bars: [
        {
          name: 'Papa Mango',
          description: 'Strandbar med tropiska drinkar och DJ-kvällar',
        },
        { name: 'Turtle Bar', description: 'Backpackerbar med surfvibbar' },
        {
          name: 'Hangover Cafe',
          description: 'Budgetvänlig bar och hostelstämning',
        },
      ],
      clubs: [
        {
          name: 'Ingen större klubbkultur',
          description: 'Strandfester arrangeras sporadiskt',
        },
        {
          name: 'Full Moon Parties (sällsynta)',
          description: 'Ibland inspirerade av Koh Phangan-stil',
        },
        {
          name: 'Hotellpoolpartyn',
          description: 'Kan förekomma under högsäsong',
        },
      ],
    },
    Ella: {
      restaurants: [
        {
          name: 'Cafe Chill',
          description: 'Populär mötesplats med internationella rätter',
        },
        {
          name: 'AK Ristoro',
          description: 'Italienskt och srilankesiskt, familjedrivet',
        },
        {
          name: 'Matey Hut',
          description: 'Budgetvänligt, äkta lankesisk smak',
        },
      ],
      bars: [
        {
          name: 'Chill Bar',
          description: 'Del av Cafe Chill, reggaemusik och avslappnad miljö',
        },
        {
          name: '360 Ella',
          description: 'Utsikt mot Ella Gap, enkel bar med kul stämning',
        },
        {
          name: 'Bars i guesthouses',
          description: 'Många boenden serverar öl och drinkar',
        },
      ],
      clubs: [
        {
          name: 'Ingen utpräglad klubbscen',
          description: 'Fokus på natur och vandring',
        },
        {
          name: 'Små gemenskapsfester',
          description: 'Kan förekomma under högsäsong',
        },
        {
          name: 'Tidiga kvällar',
          description: 'De flesta ställen stänger relativt tidigt',
        },
      ],
    },
  },
};

// Standardvärden för destinationer som saknar data
const DEFAULT_VENUES = {
  restaurants: [
    { name: 'Restaurang kommer snart', description: 'Information uppdateras' },
    { name: 'Restaurang kommer snart', description: 'Information uppdateras' },
    { name: 'Restaurang kommer snart', description: 'Information uppdateras' },
  ],
  bars: [
    { name: 'Bar kommer snart', description: 'Information uppdateras' },
    { name: 'Bar kommer snart', description: 'Information uppdateras' },
    { name: 'Bar kommer snart', description: 'Information uppdateras' },
  ],
  clubs: [
    { name: 'Klubb kommer snart', description: 'Information uppdateras' },
    { name: 'Klubb kommer snart', description: 'Information uppdateras' },
    { name: 'Klubb kommer snart', description: 'Information uppdateras' },
  ],
};

function DestinationVenues({ destination }) {
  const venues = VENUE_DATA[destination] || DEFAULT_VENUES;

  return (
    <div className="space-y-6 mt-8">
      <VenueList
        title="Populäraste restaurangerna!"
        items={venues.restaurants}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 13h18M3 6h18M3 20h18"
            />
          </svg>
        }
        bgColor="bg-amber-50"
        textColor="text-amber-700"
      />

      <VenueList
        title="Populäraste barerna!"
        items={venues.bars}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        }
        bgColor="bg-blue-50"
        textColor="text-blue-700"
      />

      <VenueList
        title="Populäraste nattklubbarna!"
        items={venues.clubs}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        }
        bgColor="bg-purple-50"
        textColor="text-purple-700"
      />
    </div>
  );
}

export default DestinationVenues;
