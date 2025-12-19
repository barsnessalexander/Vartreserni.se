import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';

import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import KeyStatistics from './components/KeyStatistics';
import SearchableCombobox from './components/SearchableCombobox';
import DestinationCard from './components/DestinationCard';
import AdCard from './components/AdCard';
import InitialQuestion from './components/InitialQuestion';
import SurveyForm from './components/forms/SurveyForm';
import InterestForm from './components/forms/InterestForm';
import BackpackingForm from './components/forms/BackpackingForm';
import SkiForm from './components/forms/SkiForm';
import CookieConsent from './components/CookieConsent';
import InteractiveMap from './components/InteractiveMap';
import HamburgerMenu from './components/HamburgerMenu';
import { fetchAllRecords } from './utils/supabaseUtils';

import { DESTINATIONS } from './constants';
import { SKI_DESTINATIONS } from './constants/skiDestinations';
import { getRandomImage } from './utils/imageUtils';
import {
  getGenderDistribution,
  getAgeDistribution,
  getTopHomeLocations,
  getMostPopularDestination,
  getMostPopularBackpackingDestination,
  getTopNDestinations
} from './utils/statsUtils';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Advertisement data
const ADS = [
  {
    imageUrl: "https://cdn.shopify.com/s/files/1/0270/3635/2535/files/Mens_Relaxed_Linen_Shirt_Light_Blue_0168.jpg?v=1719906035",
    link: "https://ion.singular-society.com/t/t?a=1887854291&as=1953739335&t=2&tk=1&url=https://singular-society.com/products/mens-relaxed-linen-shirt",
    title: "Singular Society Linen Shirt",
    description: "Perfekt för din nästa resa - Avslappnad linenskjorta i ljusblått"
  },
  {
    imageUrl: "https://cdn.shopify.com/s/files/1/0270/3635/2535/files/Mens_Straight_Leg_Linen_Drawstring_Trousers_Green_0011.jpg?v=1741787871",
    link: "https://ion.singular-society.com/t/t?a=1887854291&as=1953739335&t=2&tk=1&url=https://singular-society.com/products/mens-linen-draw-string-trousers",
    title: "Linen Draw String Trousers",
    description: "Bekväma och stilrena linnebyxor - Perfekta för varma dagar"
  },
  {
    imageUrl: "https://cdn.shopify.com/s/files/1/0270/3635/2535/files/Mens_Relaxed_Linen_Shirt_green_0019.jpg?v=1741787632",
    link: "https://ion.singular-society.com/t/t?a=1887854291&as=1953739335&t=2&tk=1&url=https://singular-society.com/products/men-s-relaxed-linen-shirt",
    title: "Relaxed Linen Shirt",
    description: "Avslappnad linenskjorta i grönt - Tidlös elegans"
  },
  {
    imageUrl: "https://cdn.shopify.com/s/files/1/0270/3635/2535/files/Mens_Straight_Leg_Light_Weight_Shorts_Navy_0198_93bc09f2-9d97-4ba7-9cc0-5e2d98f22703.jpg?v=1719829611",
    link: "https://ion.singular-society.com/t/t?a=1887854291&as=1953739335&t=2&tk=1&url=https://singular-society.com/products/mens-straightleg-linen-drawstring-shorts",
    title: "Linen Drawstring Shorts",
    description: "Lätta och luftiga shorts - Perfekta för sommaren"
  }
];

function getRandomAd() {
  return ADS[Math.floor(Math.random() * ADS.length)];
}

function App() {
  const [showInitialQuestion, setShowInitialQuestion] = useState(() => {
    const hasAnswered = localStorage.getItem('hasAnswered');
    return hasAnswered !== 'true';
  });
  const [showSurvey, setShowSurvey] = useState(false);
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [showBackpackingForm, setShowBackpackingForm] = useState(false);
  const [showSkiForm, setShowSkiForm] = useState(false);
  const [showFullscreenHero, setShowFullscreenHero] = useState(true);
  const [showStatistics, setShowStatistics] = useState(() => {
    const hasAnswered = localStorage.getItem('hasAnswered');
    return hasAnswered === 'true';
  });
  const [savedTravelData, setSavedTravelData] = useState({});
  const [userDemographics, setUserDemographics] = useState(() => {
    try {
      const savedProfile = localStorage.getItem('userProfileData');
      return savedProfile ? JSON.parse(savedProfile) : null;
    } catch (error) {
      console.error('Error loading user profile:', error);
      return null;
    }
  });
  const [formData, setFormData] = useState({
    destination: '',
    age: '',
    gender: '',
    homeLocation: '',
    isInterested: false,
    continent: '',
    destinations: [],
    formType: '',
    travelWeeks: []
  });
  
  const [destinations, setDestinations] = useState({});
  const [backpackingTrips, setBackpackingTrips] = useState([]);
  const [skiTrips, setSkiTrips] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userStats, setUserStats] = useState(null);
  const [searchDestination, setSearchDestination] = useState('');
  const [showBackpacking, setShowBackpacking] = useState(() => {
    try {
      const allSavedData = localStorage.getItem('allSavedTravelData');
      if (allSavedData) {
        const parsedData = JSON.parse(allSavedData);
        return !!parsedData.backpacking;
      }
    } catch (error) {
      console.error('Error parsing saved travel data for backpacking:', error);
    }
    return false;
  });
  const [showSkiing, setShowSkiing] = useState(() => {
    try {
      const allSavedData = localStorage.getItem('allSavedTravelData');
      if (allSavedData) {
        const parsedData = JSON.parse(allSavedData);
        return !!parsedData.skiing;
      }
    } catch (error) {
      console.error('Error parsing saved travel data for skiing:', error);
    }
    return false;
  });
  const [topDestinationsForMap, setTopDestinationsForMap] = useState([]);

  const statisticsRef = useRef(null);

  // Function to get unique backpacking destinations from trips data
  const getBackpackingDestinations = () => {
    const uniqueDestinations = new Set();
    backpackingTrips.forEach(trip => {
      trip.destinations.forEach(dest => {
        uniqueDestinations.add(dest);
      });
    });
    return Array.from(uniqueDestinations).sort();
  };

  // Load all saved travel data on component mount
  useEffect(() => {
    try {
      const allSavedData = localStorage.getItem('allSavedTravelData');
      if (allSavedData) {
        const parsedData = JSON.parse(allSavedData);
        setSavedTravelData(parsedData);
      }
      
      // Load user demographics
      const savedProfile = localStorage.getItem('userProfileData');
      if (savedProfile) {
        const parsedProfile = JSON.parse(savedProfile);
        setUserDemographics(parsedProfile);
      }
    } catch (error) {
      console.error('Error loading saved travel data:', error);
    }
  }, []);

  useEffect(() => {
    fetchDestinations();
    fetchBackpackingTrips();
    fetchSkiTrips();

    const destinationsSubscription = supabase
      .channel('destinations-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'destinations'
        },
        () => {
          fetchDestinations();
        }
      )
      .subscribe();

    const backpackingSubscription = supabase
      .channel('backpacking-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'backpacking_trips'
        },
        () => {
          fetchBackpackingTrips();
        }
      )
      .subscribe();

    const skiSubscription = supabase
      .channel('ski-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'ski_trips'
        },
        () => {
          fetchSkiTrips();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(destinationsSubscription);
      supabase.removeChannel(backpackingSubscription);
      supabase.removeChannel(skiSubscription);
    };
  }, []);

  useEffect(() => {
    if (!showSurvey && !showInterestForm && !showBackpackingForm && !showSkiForm) {
      if (showSkiing) {
        const skiData = savedTravelData.skiing;
        const userAge = userDemographics?.age;
        
        if (skiData && skiData.destination) {
          const stats = {
            sameAge: getMostPopularSkiDestination(
              skiTrips,
              (t) => userAge && Math.abs(t.age - userAge) <= 1 && !t.is_interested
            ),
            selectedDestination: {
              location: skiData.destination,
              count: countSkiDestination(skiData.destination, skiTrips)
            }
          };
          setUserStats(stats);
        } else {
          // Show only "same age" stats for skiing when no saved skiing data
          if (userAge) {
            const stats = {
              sameAge: getMostPopularSkiDestination(
                skiTrips,
                (t) => Math.abs(t.age - userAge) <= 1 && !t.is_interested
              ),
              selectedDestination: null
            };
            setUserStats(stats);
          } else {
            setUserStats(null);
          }
        }
      } else if (showBackpacking) {
        const backpackingData = savedTravelData.backpacking;
        const userAge = userDemographics?.age;
        
        if (backpackingData && backpackingData.destinations?.length > 0) {
          const stats = {
            sameAge: getMostPopularBackpackingDestination(
              backpackingTrips,
              (t) => userAge && Math.abs(t.age - userAge) <= 1 && !t.is_interested
            ),
            selectedDestinations: backpackingData.destinations.map(dest => ({
              location: dest,
              count: countDestinationInTrips(dest, backpackingTrips)
            }))
          };
          setUserStats(stats);
        } else {
          // Show only "same age" stats for backpacking when no saved backpacking data
          if (userAge) {
            const stats = {
              sameAge: getMostPopularBackpackingDestination(
                backpackingTrips,
                (t) => Math.abs(t.age - userAge) <= 1 && !t.is_interested
              ),
              selectedDestinations: null
            };
            setUserStats(stats);
          } else {
            setUserStats(null);
          }
        }
      } else {
        const vacationData = savedTravelData.vacation || savedTravelData.undecided;
        const userAge = userDemographics?.age;
        
        if (vacationData && vacationData.destination) {
          const stats = {
            sameAge: getMostPopularDestination(
              destinations,
              (t) => userAge && Math.abs(t.age - userAge) <= 1 && !t.isInterested
            ),
            selectedDestination: destinations[vacationData.destination]
              ? {
                  location: vacationData.destination,
                  count: destinations[vacationData.destination].travelers.length,
                  travelingCount: destinations[vacationData.destination].travelingCount,
                  interestedCount: destinations[vacationData.destination].interestedCount
                }
              : null,
          };
          setUserStats(stats);
        } else {
          // Show only "same age" stats for vacation when no saved vacation data
          if (userAge) {
            const stats = {
              sameAge: getMostPopularDestination(
                destinations,
                (t) => Math.abs(t.age - userAge) <= 1 && !t.isInterested
              ),
              selectedDestination: null
            };
            setUserStats(stats);
          } else {
            setUserStats(null);
          }
        }
      }
    }
  }, [showSurvey, showInterestForm, showBackpackingForm, showSkiForm, savedTravelData, destinations, backpackingTrips, skiTrips, showBackpacking, showSkiing, userDemographics]);

  // Uppdatera toppdestinationer för kartan när destinations ändras
  useEffect(() => {
    if (Object.keys(destinations).length > 0) {
      const topDests = getTopNDestinations(
        destinations, 
        10, 
        (traveler) => !traveler.isInterested
      );
      setTopDestinationsForMap(topDests);
    }
  }, [destinations]);

  const fetchDestinations = async () => {
    try {
      const destinationsData = await fetchAllRecords('destinations');

      const destinationStats = {};

      // Initialize stats for all destinations
      DESTINATIONS.forEach(dest => {
        destinationStats[dest] = {
          travelers: [],
          travelingCount: 0,
          interestedCount: 0,
          genderData: null,
          ageData: null,
          topHomeLocations: []
        };
      });

      // Process regular destinations
      destinationsData.forEach(record => {
        if (DESTINATIONS.includes(record.location)) {
          // Add to travelers array for counting purposes
          const traveler = {
            age: record.age,
            gender: record.gender,
            homeLocation: record.home_location,
            isInterested: record.is_interested,
            duration_weeks: record.duration_weeks,
            travel_weeks: record.travel_weeks
          };
          
          destinationStats[record.location].travelers.push(traveler);

          if (record.is_interested) {
            destinationStats[record.location].interestedCount++;
          } else {
            destinationStats[record.location].travelingCount++;
          }
        }
      });

      // Calculate additional statistics for each destination
      Object.keys(destinationStats).forEach(dest => {
        const travelers = destinationStats[dest].travelers;
        // Filter to only actual travelers (not interested) for statistics
        const actualTravelers = travelers.filter(t => !t.isInterested);
        
        if (travelers.length > 0) {
          // Use only actual travelers for statistics
          if (actualTravelers.length > 0) {
            destinationStats[dest].genderData = getGenderDistribution(actualTravelers);
            destinationStats[dest].ageData = getAgeDistribution(actualTravelers);
            destinationStats[dest].topHomeLocations = getTopHomeLocations(actualTravelers);
          } else {
            // No actual travelers, set to null
            destinationStats[dest].genderData = null;
            destinationStats[dest].ageData = null;
            destinationStats[dest].topHomeLocations = [];
          }
        }
      });

      setDestinations(destinationStats);
    } catch (error) {
      console.error('Error fetching destination data:', error);
    }
  };

  const fetchBackpackingTrips = async () => {
    try {
      const data = await fetchAllRecords('backpacking_trips');
      setBackpackingTrips(data);
    } catch (error) {
      console.error('Error fetching backpacking trips:', error);
    }
  };

  const fetchSkiTrips = async () => {
    try {
      const data = await fetchAllRecords('ski_trips');
      setSkiTrips(data);
    } catch (error) {
      console.error('Error fetching ski trips:', error);
    }
  };

  const countDestinationInTrips = (destination, trips) => {
    return trips.filter(trip => trip.destinations.includes(destination) && !trip.is_interested).length;
  };

  const countSkiDestination = (destination, trips) => {
    return trips.filter(trip => trip.destination === destination && !trip.is_interested).length;
  };

  const getMostPopularSkiDestination = (trips, filter = () => true) => {
    const filteredTrips = trips.filter(filter);
    const destinationCounts = {};
    
    filteredTrips.forEach(trip => {
      destinationCounts[trip.destination] = (destinationCounts[trip.destination] || 0) + 1;
    });

    return Object.entries(destinationCounts)
      .map(([location, count]) => ({ location, count }))
      .filter(item => item.count > 0)
      .sort((a, b) => b.count - a.count)[0];
  };

  const handleInitialChoice = (choice) => {
    localStorage.setItem('hasAnswered', 'true');
    setShowInitialQuestion(false);
    
    // Reset form data to empty values when opening any form
    const emptyFormData = {
      destination: '',
      age: '',
      gender: '',
      homeLocation: '',
      isInterested: false,
      continent: '',
      destinations: [],
      formType: choice,
      travelWeeks: []
    };
    setFormData(emptyFormData);
    
    if (choice === 'vacation') {
      setShowSurvey(true);
    } else if (choice === 'backpacking') {
      setShowBackpackingForm(true);
    } else if (choice === 'skiing') {
      setShowSkiForm(true);
    } else if (choice === 'undecided') {
      setShowInterestForm(true);
      emptyFormData.isInterested = true;
      emptyFormData.formType = 'undecided';
      setFormData(emptyFormData);
    }
  };

  const skipToStats = () => {
    localStorage.setItem('hasAnswered', 'true');
    setShowInitialQuestion(false);
    setShowSurvey(false);
    setShowInterestForm(false);
    setShowBackpackingForm(false);
    setShowSkiForm(false);
    setShowStatistics(true);
    setTimeout(() => {
      if (statisticsRef.current) {
        statisticsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScroll = () => {
    const hasAnswered = localStorage.getItem('hasAnswered');
    if (hasAnswered === 'true') {
      // If user has already answered, just scroll to statistics
      setTimeout(() => {
        if (statisticsRef.current) {
          statisticsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If user hasn't answered, show the form
      setShowInitialQuestion(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Use submission data if available (from interest form)
    const dataToSubmit = e.submissionData || formData;
    
    console.log('handleSubmit called with formData:', formData);
    console.log('showBackpackingForm:', showBackpackingForm);
    console.log('showInterestForm:', showInterestForm);
    console.log('showSkiForm:', showSkiForm);
    
    if (showSkiForm || (showInterestForm && formData.formType === 'skiing')) {
      if (!dataToSubmit.destination || !dataToSubmit.age || !dataToSubmit.gender || !dataToSubmit.homeLocation ||
          !dataToSubmit.travelWeeks || !dataToSubmit.travelWeeks.length) {
        console.log('Ski form validation failed');
        return;
      }
    } else if (showBackpackingForm || (showInterestForm && formData.formType === 'backpacking')) {
      if (!dataToSubmit.age || !dataToSubmit.gender || !dataToSubmit.homeLocation || 
          !dataToSubmit.destinations || !dataToSubmit.destinations.length || 
          !dataToSubmit.destinations.every(d => d && d.trim() !== '')) {
        console.log('Backpacking form validation failed');
        return;
      }
    } else {
      if (!dataToSubmit.destination || !dataToSubmit.age || !dataToSubmit.gender || !dataToSubmit.homeLocation ||
          !dataToSubmit.travelWeeks || !dataToSubmit.travelWeeks.length) {
        console.log('Regular form validation failed');
        return;
      }
    }
    
    console.log('Form validation passed, starting submission...');
    setIsSubmitting(true);

    try {
      if (showSkiForm || (showInterestForm && dataToSubmit.formType === 'skiing')) {
        console.log('Submitting ski trip...');
        const { error } = await supabase.from('ski_trips').insert([{
          destination: dataToSubmit.destination,
          age: parseInt(dataToSubmit.age),
          gender: dataToSubmit.gender,
          home_location: dataToSubmit.homeLocation,
          is_interested: showInterestForm,
          duration_weeks: dataToSubmit.travelWeeks ? dataToSubmit.travelWeeks.length : null,
          travel_weeks: dataToSubmit.travelWeeks
        }]);

        if (error) {
          console.error('Error submitting ski trip:', error);
          return;
        }

        console.log('Ski trip submitted successfully');
        
        // Save ski data to localStorage
        const updatedSavedData = {
          ...savedTravelData,
          skiing: { ...dataToSubmit, formType: 'skiing' }
        };
        localStorage.setItem('allSavedTravelData', JSON.stringify(updatedSavedData));
        setSavedTravelData(updatedSavedData);
        
        // Update global user demographics
        const updatedDemographics = {
          age: parseInt(dataToSubmit.age),
          gender: dataToSubmit.gender,
          homeLocation: dataToSubmit.homeLocation
        };
        localStorage.setItem('userProfileData', JSON.stringify(updatedDemographics));
        setUserDemographics(updatedDemographics);
        
        setShowSkiForm(false);
        setShowInterestForm(false);
        // Set to skiing mode
        setShowSkiing(true);
        setShowBackpacking(false);
      } else if (showBackpackingForm || (showInterestForm && dataToSubmit.formType === 'backpacking')) {
        console.log('Submitting backpacking trip...');
        const { error } = await supabase.from('backpacking_trips').insert([{
          age: parseInt(dataToSubmit.age),
          gender: dataToSubmit.gender,
          home_location: dataToSubmit.homeLocation,
          destinations: dataToSubmit.destinations,
          is_interested: showInterestForm,
          duration_weeks: dataToSubmit.travelWeeks ? dataToSubmit.travelWeeks.length : null,
          travel_weeks: dataToSubmit.travelWeeks
        }]);

        if (error) {
          console.error('Error submitting backpacking trip:', error);
          return;
        }

        console.log('Backpacking trip submitted successfully');
        
        // Save backpacking data to localStorage
        const updatedSavedData = {
          ...savedTravelData,
          backpacking: { ...dataToSubmit, formType: 'backpacking' }
        };
        localStorage.setItem('allSavedTravelData', JSON.stringify(updatedSavedData));
        setSavedTravelData(updatedSavedData);
        
        // Update global user demographics
        const updatedDemographics = {
          age: parseInt(dataToSubmit.age),
          gender: dataToSubmit.gender,
          homeLocation: dataToSubmit.homeLocation
        };
        localStorage.setItem('userProfileData', JSON.stringify(updatedDemographics));
        setUserDemographics(updatedDemographics);
        
        setShowBackpackingForm(false);
        setShowInterestForm(false);
        // Set to backpacking mode
        setShowBackpacking(true);
        setShowSkiing(false);
      } else {
        if (!dataToSubmit.destination) return;

        console.log('Submitting destination...');
        const { error } = await supabase.from('destinations').insert([{
          location: dataToSubmit.destination,
          age: parseInt(dataToSubmit.age),
          gender: dataToSubmit.gender,
          home_location: dataToSubmit.homeLocation,
          is_interested: dataToSubmit.isInterested,
          duration_weeks: dataToSubmit.travelWeeks ? dataToSubmit.travelWeeks.length : null,
          travel_weeks: dataToSubmit.travelWeeks
        }]);

        if (error) {
          console.error('Error submitting destination:', error);
          return;
        }

        console.log('Destination submitted successfully');
        
        // Save vacation/undecided data to localStorage
        const categoryKey = dataToSubmit.formType === 'undecided' ? 'undecided' : 'vacation';
        const updatedSavedData = {
          ...savedTravelData,
          [categoryKey]: { ...dataToSubmit, formType: dataToSubmit.formType }
        };
        localStorage.setItem('allSavedTravelData', JSON.stringify(updatedSavedData));
        setSavedTravelData(updatedSavedData);
        
        // Update global user demographics
        const updatedDemographics = {
          age: parseInt(dataToSubmit.age),
          gender: dataToSubmit.gender,
          homeLocation: dataToSubmit.homeLocation
        };
        localStorage.setItem('userProfileData', JSON.stringify(updatedDemographics));
        setUserDemographics(updatedDemographics);
        
        setShowSurvey(false);
        setShowInterestForm(false);
        // Set to vacation/solsemester mode (default)
        setShowBackpacking(false);
        setShowSkiing(false);
      }

      // Show statistics after successful submission
      setShowStatistics(true);
      setTimeout(() => {
        if (statisticsRef.current) {
          statisticsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      console.log('Setting isSubmitting to false');
      setIsSubmitting(false);
    }
  };

  const getDestinationStats = (location) => {
    if (!destinations[location]) return null;

    const destData = destinations[location];
    // Return null if there are no travelers or interested people
    if (destData.travelers.length === 0) return null;

    return {
      totalTravelers: destData.travelers.length,
      travelingCount: destData.travelingCount,
      interestedCount: destData.interestedCount,
      ageData: destData.ageData,
      genderData: destData.genderData,
      topHomeLocations: destData.topHomeLocations
    };
  };

  const getBackpackingDestinationStats = (location) => {
    const tripsWithDestination = backpackingTrips.filter(trip => 
      trip.destinations.includes(location)
    );

    // Return null if there are no trips for this destination
    if (tripsWithDestination.length === 0) return null;

    const travelingTrips = tripsWithDestination.filter(trip => !trip.is_interested);
    const interestedTrips = tripsWithDestination.filter(trip => trip.is_interested);

    // Return null if there are no travelers or interested people
    if (travelingTrips.length === 0 && interestedTrips.length === 0) return null;

    // Use only actual travelers for statistics
    return {
      totalTravelers: tripsWithDestination.length,
      travelingCount: travelingTrips.length,
      interestedCount: interestedTrips.length,
      ageData: travelingTrips.length > 0 ? getAgeDistribution(travelingTrips) : null,
      genderData: travelingTrips.length > 0 ? getGenderDistribution(travelingTrips) : null,
      topHomeLocations: travelingTrips.length > 0 ? getTopHomeLocations(travelingTrips) : []
    };
  };

  const mostPopularOverall = showBackpacking
    ? getMostPopularBackpackingDestination(backpackingTrips, trip => !trip.is_interested)
    : showSkiing
      ? getMostPopularSkiDestination(skiTrips, trip => !trip.is_interested)
      : destinations && Object.keys(destinations).length > 0
        ? getMostPopularDestination(destinations, traveler => !traveler.isInterested)
        : null;

  const renderDestinationCards = (items) => {
    return items.map((item, index) => {
      // Insert ad card after every 2 destination cards (making it every third card)
      if ((index + 1) % 200 === 0) {
        return (
          <React.Fragment key={`${item[0]}-group`}>
            <DestinationCard
              key={item[0]}
              location={item[0]}
              data={item[1]}
              stats={getDestinationStats(item[0])}
              getRandomImage={getRandomImage}
            />
            <AdCard
              key={`ad-${index}`}
              {...getRandomAd()}
            />
          </React.Fragment>
        );
      }
      return (
        <DestinationCard
          key={item[0]}
          location={item[0]}
          data={item[1]}
          stats={getDestinationStats(item[0])}
          getRandomImage={getRandomImage}
        />
      );
    });
  };

  const getSkiDestinationStats = (location) => {
    const tripsForDestination = skiTrips.filter(trip => trip.destination === location);
    
    if (tripsForDestination.length === 0) return null;

    const travelingCount = tripsForDestination.filter(trip => !trip.is_interested).length;
    const interestedCount = tripsForDestination.filter(trip => trip.is_interested).length;
    const actualTravelers = tripsForDestination.filter(trip => !trip.is_interested);

    // Use only actual travelers for statistics
    return {
      totalTravelers: tripsForDestination.length,
      travelingCount,
      interestedCount,
      ageData: actualTravelers.length > 0 ? getAgeDistribution(actualTravelers) : null,
      genderData: actualTravelers.length > 0 ? getGenderDistribution(actualTravelers) : null,
      topHomeLocations: actualTravelers.length > 0 ? getTopHomeLocations(actualTravelers) : []
    };
  };
  const renderBackpackingCards = (items) => {
    return items.map((item, index) => {
      // Insert ad card after every 2 destination cards (making it every third card)
      if ((index + 1) % 300 === 0) {
        return (
          <React.Fragment key={`${item[0]}-group`}>
            <DestinationCard
              key={item[0]}
              location={item[0]}
              data={{ travelers: item[1] }}
              stats={getBackpackingDestinationStats(item[0])}
              getRandomImage={getRandomImage}
              isBackpacking
            />
            <AdCard
              key={`ad-${index}`}
              {...getRandomAd()}
            />
          </React.Fragment>
        );
      }
      return (
        <DestinationCard
          key={item[0]}
          location={item[0]}
          data={{ travelers: item[1] }}
          stats={getBackpackingDestinationStats(item[0])}
          getRandomImage={getRandomImage}
          isBackpacking
        />
      );
    });
  };

  return (
    <div className={`relative ${showSkiing 
        ? 'bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100' 
        : 'bg-gradient-to-br from-blue-100 via-white to-purple-100'
      }`}>
      
      {/* Snowflakes for ski section */}
      {showSkiing && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="snowflake text-white/40"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
                fontSize: `${10 + Math.random() * 12}px`,
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

      {/* Hamburger Menu - Always visible */}
      <HamburgerMenu 
        onBackpackingClick={() => {
          setShowBackpacking(true);
          setShowSkiing(false);
          const hasAnswered = localStorage.getItem('hasAnswered');
          if (hasAnswered === 'true') {
            setShowStatistics(true);
            setTimeout(() => {
              if (statisticsRef.current) {
                statisticsRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          } else {
            setShowInitialQuestion(true);
          }
        }}
        onSolsemesterClick={() => {
          setShowBackpacking(false);
          setShowSkiing(false);
          const hasAnswered = localStorage.getItem('hasAnswered');
          if (hasAnswered === 'true') {
            setShowStatistics(true);
            setTimeout(() => {
              if (statisticsRef.current) {
                statisticsRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          } else {
            setShowInitialQuestion(true);
          }
        }}
        onSkiingClick={() => {
          setShowBackpacking(false);
          setShowSkiing(true);
          const hasAnswered = localStorage.getItem('hasAnswered');
          if (hasAnswered === 'true') {
            setShowStatistics(true);
            setTimeout(() => {
              if (statisticsRef.current) {
                statisticsRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          } else {
            setShowInitialQuestion(true);
          }
        }}
      />

      {/* Fullscreen Hero Section */}
      <div className="min-h-screen">
        <HeroSection
          isFullHeight={showFullscreenHero}
          onScroll={handleScroll}
          showScrollIndicator={showFullscreenHero}
          isSkiing={showSkiing}
        />
      </div>

      {/* Statistics Section */}
      <div ref={statisticsRef} className={showStatistics ? 'block' : 'hidden'}>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <KeyStatistics
              mostPopularOverall={mostPopularOverall}
              userStats={userStats}
              isBackpacking={showBackpacking}
              isSkiing={showSkiing}
            />

            {/* Interaktiv karta - endast för vanliga destinationer */}
            {!showBackpacking && !showSkiing && topDestinationsForMap.length > 0 && (
              <div className="mb-12">
                <InteractiveMap topDestinations={topDestinationsForMap} />
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">
                Sök efter en destination
              </h4>
              <SearchableCombobox
                items={showSkiing ? SKI_DESTINATIONS : showBackpacking ? getBackpackingDestinations() : DESTINATIONS}
                value={searchDestination}
                onChange={setSearchDestination}
                placeholder="Sök destination..."
                onClear={() => setSearchDestination('')}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {showSkiing ? (
                Object.entries(
                  skiTrips.reduce((acc, trip) => {
                    if (!trip.is_interested) {
                      if (!acc[trip.destination]) acc[trip.destination] = [];
                      acc[trip.destination].push(trip);
                    }
                    return acc;
                  }, {})
                )
                .sort((a, b) => {
                  const aIsSearched = a[0] === searchDestination;
                  const bIsSearched = b[0] === searchDestination;
                  if (aIsSearched && !bIsSearched) return -1;
                  if (bIsSearched && !aIsSearched) return 1;
                  return b[1].length - a[1].length;
                })
                .filter(([location, trips]) => trips.length > 0)
                .map(([location, trips], index) => {
                  const stats = getSkiDestinationStats(location);
                  if (!stats || stats.travelingCount === 0) return null;
                  
                  // Insert ad card after every 3 destination cards
                  if ((index + 1) % 300 === 0) {
                    return (
                      <React.Fragment key={`${location}-group`}>
                        <DestinationCard
                          key={location}
                          location={location}
                          data={{ travelers: trips }}
                          stats={stats}
                          getRandomImage={getRandomImage}
                          isSkiing
                        />
                        <AdCard
                          key={`ad-${index}`}
                          {...getRandomAd()}
                        />
                      </React.Fragment>
                    );
                  }
                  return (
                    <DestinationCard
                      key={location}
                      location={location}
                      data={{ travelers: trips }}
                      stats={stats}
                      getRandomImage={getRandomImage}
                      isSkiing
                    />
                  );
                })
                .filter(Boolean) // Remove null entries
              ) : showBackpacking ? (
                renderBackpackingCards(
                  Object.entries(
                    backpackingTrips.reduce((acc, trip) => {
                      if (!trip.is_interested) {
                        trip.destinations.forEach(dest => {
                          if (!acc[dest]) acc[dest] = [];
                          acc[dest].push(trip);
                        });
                      }
                      return acc;
                    }, {})
                  )
                  .sort((a, b) => {
                    const aIsSearched = a[0] === searchDestination;
                    const bIsSearched = b[0] === searchDestination;
                    if (aIsSearched && !bIsSearched) return -1;
                    if (bIsSearched && !aIsSearched) return 1;
                    return b[1].length - a[1].length;
                  })
                  .filter(([location, trips]) => {
                    const stats = getBackpackingDestinationStats(location);
                    return stats && stats.travelingCount > 0;
                  })
                )
              ) : (
                renderDestinationCards(
                  Object.entries(destinations)
                    .sort((a, b) => {
                      const aIsSearched = a[0] === searchDestination;
                      const bIsSearched = b[0] === searchDestination;
                      if (aIsSearched && !bIsSearched) return -1;
                      if (bIsSearched && !aIsSearched) return 1;
                      return b[1].travelingCount - a[1].travelingCount;
                    })
                    .filter(([location, data]) => {
                      const stats = getDestinationStats(location);
                      return stats && stats.travelingCount > 0;
                    })
                )
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {showInitialQuestion && (
        <div className="fixed inset-0 z-50">
          <InitialQuestion
            onChoice={handleInitialChoice}
            onSkip={skipToStats}
          />
        </div>
      )}

      {showSurvey && (
        <div className="fixed inset-0 z-50">
          <SurveyForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={setFormData}
            isSubmitting={isSubmitting}
            onSkip={skipToStats}
          />
        </div>
      )}

      {showInterestForm && (
        <div className="fixed inset-0 z-50">
          <InterestForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={setFormData}
            isSubmitting={isSubmitting}
            onSkip={skipToStats}
          />
        </div>
      )}

      {showBackpackingForm && (
        <div className="fixed inset-0 z-50">
          <BackpackingForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={setFormData}
            isSubmitting={isSubmitting}
            onSkip={skipToStats}
          />
        </div>
      )}

      {showSkiForm && (
        <div className="fixed inset-0 z-50">
          <SkiForm
            formData={formData}
            onSubmit={handleSubmit}
            onChange={setFormData}
            isSubmitting={isSubmitting}
            onSkip={skipToStats}
          />
        </div>
      )}

      <CookieConsent />
    </div>
  );
}

export default App;