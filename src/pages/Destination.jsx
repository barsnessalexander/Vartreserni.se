import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import GenderDistribution from '../components/charts/GenderDistribution';
import AgeDistribution from '../components/charts/AgeDistribution';
import DestinationStats from '../components/DestinationStats';
import DestinationVenues from '../components/DestinationVenues';
import DestinationInfo from '../components/DestinationInfo';
import SkiDestinationVenues from '../components/SkiDestinationVenues';
import SkiDestinationInfo from '../components/SkiDestinationInfo';
import SkiDestinationStats from '../components/SkiDestinationStats';
import SkiTravelTips from '../components/SkiTravelTips';
import TravelTimingStats from '../components/TravelTimingStats';
import { getRandomImage } from '../utils/imageUtils';
import { DESTINATION_DESCRIPTIONS } from '../constants';
import { SKI_DESTINATION_DESCRIPTIONS } from '../constants/skiDestinations';
import {
  getGenderDistribution,
  getAgeDistribution,
  getTopHomeLocations,
} from '../utils/statsUtils';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Travel Tips Component
const TravelTips = ({ destination }) => (
  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Tips för {destination}</h3>
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <div className="bg-white p-2 rounded-lg">
          <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Bästa restiden</h4>
          <p className="text-sm text-gray-600">Juni-September för bästa väder och nattliv</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <div className="bg-white p-2 rounded-lg">
          <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Budget per dag</h4>
          <p className="text-sm text-gray-600">500-1000 kr för boende, mat och nöjen</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <div className="bg-white p-2 rounded-lg">
          <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Bra att veta</h4>
          <p className="text-sm text-gray-600">Ta med legitimation till klubbar</p>
        </div>
      </div>

      <Link
        to="/articles"
        className="block mt-6 text-center bg-white text-primary-600 py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors duration-300 font-medium"
      >
        Läs fler guider och tips
      </Link>
    </div>
  </div>
);

// Affiliate Links Component
const AffiliateLinks = ({ destination }) => {
  // Specific hotel links for top 10 most popular summer destinations
  const specificHotelLinks = {
    'Malta': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-malta%3Fsearch%3D200-27429%3Bdr-20260701-20260707-s%3Brc-1-2',
    'Alicante': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-alicante-spanien%3Fsearch%3D200-13413%3Bdr-20260701-20260707-s%3Brc-1-2',
    'Kavos': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-kavos-grekland%3Fsearch%3D200-13940%3Bdr-20260701-20260707-s%3Brc-1-2',
    'Split': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-split-kroatien%3Fsearch%3D200-27199%3Bdr-20260701-20260707-s%3Brc-1-2',
    'Kos': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-kos-grekland%3Fsearch%3D200-389403%3Bdr-20260701-20260707-s%3Brc-1-2',
    'Zakynthos': ' https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-zakynthos-zante-grekland%3Fsearch%3D200-14140%3Bdr-20260701-20260707-s%3Brc-1-2',
    'Rhodos': ' https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-rhodos-grekland%3Fsearch%3D200-389479%3Bdr-20260701-20260707-s%3Brc-1-2',
    'Palma de Mallorca': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-palma-spanien%3Fsearch%3D200-13664%3Bdr-20260701-20260707-s%3Brc-1-2',
    'Magaluf': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-magaluf-spanien%3Fsearch%3D200-13629%3Bdr-20260701-20260707-s%3Brc-1-2',
    'Ayia Napa': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-ayia-napa-cypern%3Fsearch%3D200-52550%3Bdr-20260701-20260707-s%3Brc-1-2'
  };

  // Specific hotel links for ski destinations
  const specificSkiHotelLinks = {
    'Åre': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-%25C3%25A5re-sverige%3Fsearch%3D200-32858%3Bdr-20260223-20260301-s%3Brc-1-4',
    'St. Anton': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-st-anton-am-arlberg-%25C3%25B6sterrike%3Fsearch%3D200-24859%3Bdr-20260223-20260301-s%3Brc-1-4',
    'Val d\'Isère': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-val-d-is%25C3%25A8re-frankrike%3Fsearch%3D200-23215%3Bdr-20260223-20260301-s%3Brc-1-4',
    'Cervinia': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-breuil-cervinia-italien%3Fsearch%3D200-26011%3Bdr-20260223-20260301-s%3Brc-1-4',
    'Les Deux Alpes': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-les-deux-alpes-frankrike%3Fsearch%3D200-21365%3Bdr-20260223-20260301-s%3Brc-1-4',
    'Val Thorens': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-val-thorens-frankrike%3Fsearch%3D200-23213%3Bdr-20260223-20260301-s%3Brc-1-4',
    'Hemsedal': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-hemsedal-norge%3Fsearch%3D200-32361%3Bdr-20260223-20260301-s%3Brc-1-4',
    'Verbier': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-verbier-schweiz%3Fsearch%3D200-31053%3Bdr-20260223-20260301-s%3Brc-1-4',
    'Ischgl': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-ischgl-%25C3%25B6sterrike%3Fsearch%3D200-24775%3Bdr-20260223-20260301-s%3Brc-1-4',
    'Chamonix': 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=%2Fsv%2Flm%2Fhotell-chamonix-mont-blanc-frankrike%3Fsearch%3D200-23176%3Bdr-20260223-20260301-s%3Brc-1-4'
  };

  // Use specific link based on context (ski vs regular), otherwise use default
  const hotelLink = specificSkiHotelLinks[destination] || specificHotelLinks[destination] || 'https://tc.tradetracker.net/?c=14386&m=12&a=495219&r=&u=';

  return (
  <div className="space-y-4">
    {/* Trivago */}
    <a
      href={hotelLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Hitta bästa hotellet i {destination}</h3>
              <p className="text-white/90 text-sm">I betalt samarbete med Trivago.se</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center text-white/90 group-hover:translate-x-1 transition-transform duration-300">
            <span className="mr-2 font-medium">Sök nu</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  </div>
);
};

function Destination() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isBackpacking = location.state?.isBackpacking ?? false;
  const isSkiing = location.state?.isSkiing ?? false;

  const [destinationData, setDestinationData] = useState({
    travelers: [],
    genderData: null,
    ageData: null,
    topLocations: [],
    travelingCount: 0,
    interestedCount: 0
  });
  const [showAllLocations, setShowAllLocations] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    fetchDestinationData();
  }, [id, navigate, isBackpacking, isSkiing]);

  const fetchDestinationData = async () => {
    setIsLoading(true);

    try {
      if (isSkiing) {
        const { data: skiData } = await supabase
          .from('ski_trips')
          .select('*')
          .eq('destination', id);

        if (skiData?.length > 0) {
          processSkiDestination(skiData);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } else if (isBackpacking) {
        const { data: backpackingData } = await supabase
          .from('backpacking_trips')
          .select('*');

        const relevantBackpackingTrips =
          backpackingData?.filter((trip) => trip.destinations.includes(id)) || [];

        if (relevantBackpackingTrips.length > 0) {
          processBackpackingDestination(relevantBackpackingTrips);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } else {
        const { data: regularData } = await supabase
          .from('destinations')
          .select('*')
          .eq('location', id);

        if (regularData?.length > 0) {
          processRegularDestination(regularData);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      }
    } catch (error) {
      console.error('Error fetching destination data:', error);
      setNotFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  const processSkiDestination = (data) => {
    const travelers = data.map((item) => ({
      age: item.age,
      gender: item.gender,
      homeLocation: item.home_location,
      isInterested: item.is_interested,
      duration_weeks: item.duration_weeks,
      travel_weeks: item.travel_weeks,
    }));

    // Filter to only actual travelers for statistics
    const actualTravelers = travelers.filter(t => !t.isInterested);
    
    const travelingCount = travelers.filter(t => !t.isInterested).length;
    const interestedCount = travelers.filter(t => t.isInterested).length;
    
    // Use only actual travelers for statistics
    const genderData = actualTravelers.length > 0 ? getGenderDistribution(actualTravelers) : null;
    const ageData = actualTravelers.length > 0 ? getAgeDistribution(actualTravelers) : null;
    const topLocations = actualTravelers.length > 0 ? getTopHomeLocations(actualTravelers) : [];

    setDestinationData({
      travelers,
      genderData,
      ageData,
      topLocations,
      travelingCount,
      interestedCount
    });
  };

  const processRegularDestination = (data) => {
    const travelers = data.map((item) => ({
      age: item.age,
      gender: item.gender,
      homeLocation: item.home_location,
      isInterested: item.is_interested,
      duration_weeks: item.duration_weeks,
      travel_weeks: item.travel_weeks,
    }));

    // Filter to only actual travelers for statistics
    const actualTravelers = travelers.filter(t => !t.isInterested);
    
    const travelingCount = travelers.filter(t => !t.isInterested).length;
    const interestedCount = travelers.filter(t => t.isInterested).length;
    
    // Use only actual travelers for statistics
    const genderData = actualTravelers.length > 0 ? getGenderDistribution(actualTravelers) : null;
    const ageData = actualTravelers.length > 0 ? getAgeDistribution(actualTravelers) : null;
    const topLocations = actualTravelers.length > 0 ? getTopHomeLocations(actualTravelers) : [];

    setDestinationData({
      travelers,
      genderData,
      ageData,
      topLocations,
      travelingCount,
      interestedCount
    });
  };

  const processBackpackingDestination = (trips) => {
    const travelers = trips.map((trip) => ({
      age: trip.age,
      gender: trip.gender,
      homeLocation: trip.home_location,
      isInterested: trip.is_interested,
      duration_weeks: trip.duration_weeks,
      travel_weeks: trip.travel_weeks,
    }));

    // Filter to only actual travelers for statistics
    const actualTravelers = travelers.filter(t => !t.isInterested);
    
    const travelingCount = travelers.filter(t => !t.isInterested).length;
    const interestedCount = travelers.filter(t => t.isInterested).length;
    
    // Use only actual travelers for statistics
    const genderData = actualTravelers.length > 0 ? getGenderDistribution(actualTravelers) : null;
    const ageData = actualTravelers.length > 0 ? getAgeDistribution(actualTravelers) : null;
    const topLocations = actualTravelers.length > 0 ? getTopHomeLocations(actualTravelers) : [];

    setDestinationData({
      travelers,
      genderData,
      ageData,
      topLocations,
      travelingCount,
      interestedCount
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="text-gray-600 animate-pulse">Laddar...</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-soft text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Destination hittades inte
          </h2>
          <p className="text-gray-600 mb-6">
            Vi kunde inte hitta information om denna destination.
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium group"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
    );
  }

  const sortedLocations = destinationData.topLocations || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div
        className="h-[30vh] sm:h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${getRandomImage(id)})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20 mix-blend-multiply" />
          
          {/* Back Button */}
          <div className="absolute top-4 left-4 z-10">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="text-sm font-medium">Tillbaka</span>
            </Link>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg animate-fade-in">
              {id}
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-4 py-2 -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 transition-colors duration-200 ${
                activeTab === 'overview'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Översikt
            </button>
            <button
              onClick={() => setActiveTab('statistics')}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 transition-colors duration-200 ${
                activeTab === 'statistics'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Statistik
            </button>
            <button
              onClick={() => setActiveTab('venues')}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 transition-colors duration-200 ${
                activeTab === 'venues'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Nattliv
            </button>
            <button
              onClick={() => setActiveTab('timing')}
              className={`px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 transition-colors duration-200 ${
                activeTab === 'timing'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Resetider
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl transition-colors duration-200 hover:from-primary-100 hover:to-primary-200">
                  <p className="text-sm text-primary-600 font-medium mb-1">
                    {isBackpacking ? 'Backpackers' : 'Reser hit'}
                  </p>
                  <p className="text-2xl font-bold text-primary-700">
                    {destinationData.travelingCount}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-4 rounded-xl transition-colors duration-200 hover:from-secondary-100 hover:to-secondary-200">
                  <p className="text-sm text-secondary-600 font-medium mb-1">
                    Intresserade
                  </p>
                  <p className="text-2xl font-bold text-secondary-700">
                    {destinationData.interestedCount}
                  </p>
                </div>
              </div>
              
              {/* Affiliate Links */}
              <AffiliateLinks destination={id} />
              
              {/* Description */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-xl font-bold mb-4">Om {id}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {isSkiing ? SKI_DESTINATION_DESCRIPTIONS[id] : DESTINATION_DESCRIPTIONS[id]}
                </p>
              </div>

              {/* Travel Tips */}
              {isSkiing ? (
                <SkiTravelTips destination={id} />
              ) : (
                <TravelTips destination={id} />
              )}

              {/* Destination Info */}
              {isSkiing ? (
                <SkiDestinationInfo destination={id} />
              ) : (
                <DestinationInfo destination={id} />
              )}

              {/* Destination Stats */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-xl font-bold mb-4">Betyg & Omdömen</h2>
                {isSkiing ? (
                  <SkiDestinationStats destination={id} />
                ) : (
                  <DestinationStats destination={id} />
                )}
              </div>

              
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'statistics' && (
            <div className="space-y-6 animate-fade-in">
              {/* Gender Distribution */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-xl font-bold mb-6">Könsfördelning</h2>
                <div className="h-72">
                  <GenderDistribution data={destinationData.genderData} />
                </div>
              </div>

              {/* Age Distribution */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-xl font-bold mb-6">Åldersfördelning</h2>
                <AgeDistribution data={destinationData.ageData} />
              </div>

              {/* Top Locations */}
              {sortedLocations.length > 0 && (
                <div className="bg-white rounded-xl shadow-soft p-6">
                  <h2 className="text-xl font-bold mb-4">Vanligaste hemorterna</h2>
                  <div className="space-y-3">
                    {sortedLocations.slice(0, showAllLocations ? sortedLocations.length : 5).map((item, index) => (
                      <div
                        key={item.location}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <span className="text-lg font-bold text-primary-600 w-8">
                            {index + 1}.
                          </span>
                          <span className="font-medium text-gray-900">
                            {item.location}
                          </span>
                        </div>
                        <span className="text-gray-700 font-semibold">
                          {item.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                  {sortedLocations.length > 5 && (
                    <button
                      onClick={() => setShowAllLocations(!showAllLocations)}
                      className="w-full mt-4 text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200"
                    >
                      {showAllLocations ? 'Visa färre' : 'Visa alla'}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Venues Tab */}
          {activeTab === 'venues' && (
            <div className="animate-fade-in">
              {isSkiing ? (
                <SkiDestinationVenues destination={id} />
              ) : (
                <DestinationVenues destination={id} />
              )}
            </div>
          )}

          {/* Timing Tab */}
          {activeTab === 'timing' && (
            <div className="animate-fade-in">
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-xl font-bold mb-6">När reser folk till {id}?</h2>
                <TravelTimingStats 
                  travelers={destinationData.travelers.filter(t => !t.isInterested)}
                  isBackpacking={isBackpacking}
                  isSkiing={isSkiing}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Destination;

