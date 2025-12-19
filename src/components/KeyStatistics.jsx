import { motion } from 'framer-motion';

function KeyStatistics({ mostPopularOverall, userStats, isBackpacking, isSkiing }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
          isSkiing 
            ? 'bg-gradient-to-br from-cyan-50 to-cyan-100' 
            : 'bg-gradient-to-br from-orange-50 to-orange-100'
        }`}
      >
        <h3 className={`text-xl font-bold mb-3 ${
          isSkiing ? 'text-cyan-900' : 'text-orange-900'
        }`}>Populärast Totalt</h3>
        {mostPopularOverall && (
          <>
            <p className={`text-3xl font-bold mb-2 ${
              isSkiing ? 'text-cyan-600' : 'text-orange-600'
            }`}>
              {mostPopularOverall.location}
            </p>
            <p className={isSkiing ? 'text-cyan-700' : 'text-orange-700'}>
              {mostPopularOverall.count} {isSkiing ? 'skidåkare' : isBackpacking ? 'backpackers' : 'resenärer'} har valt denna destination
            </p>
          </>
        )}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-xl font-bold mb-3 text-purple-900">Populärt i Din Ålder</h3>
        {userStats?.sameAge && (
          <>
            <p className="text-3xl font-bold text-purple-600 mb-2">
              {userStats.sameAge.location}
            </p>
            <p className="text-purple-700">
              {userStats.sameAge.count} {isSkiing ? 'skidåkare' : isBackpacking ? 'backpackers' : 'resenärer'} i din ålder har valt denna destination
            </p>
          </>
        )}
        {!userStats?.sameAge && (
          <p className="text-purple-700">
            Ingen data tillgänglig för din ålder i denna kategori
          </p>
        )}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-xl font-bold mb-3 text-green-900">
          {isBackpacking ? 'Dina Valda Destinationer' : 'Din Valda Destination'}
        </h3>
        {isBackpacking ? (
          userStats?.selectedDestinations ? userStats.selectedDestinations.map((dest, index) => (
            <div key={dest.location} className="mb-2">
              <p className="text-xl font-bold text-green-600">
                {dest.location}
              </p>
              <p className="text-green-700">
                {dest.count} backpackers har valt denna destination
              </p>
            </div>
          )) : (
            <p className="text-green-700">
              Du har inte svarat på backpacking-formuläret än
            </p>
          )
        ) : (
          userStats?.selectedDestination && (
            <>
              <p className="text-3xl font-bold text-green-600 mb-2">
                {userStats.selectedDestination.location}
              </p>
              <p className="text-green-700">
                {userStats.selectedDestination.travelingCount || userStats.selectedDestination.count} {isSkiing ? 'skidåkare' : 'resenärer'} {isSkiing ? 'åker hit' : 'reser hit'}
                {userStats.selectedDestination.interestedCount > 0 && 
                  ` och ${userStats.selectedDestination.interestedCount} är intresserade`}
              </p>
            </>
          )
        )}
        {!isBackpacking && !userStats?.selectedDestination && (
          <p className="text-green-700">
            {isSkiing 
              ? 'Du har inte svarat på skidformuläret än'
              : 'Du har inte svarat på solsemesterformuläret än'
            }
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default KeyStatistics;