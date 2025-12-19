import React from 'react';
import { Link } from 'react-router-dom';

const SkiTravelTips = ({ destination }) => (
  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Tips för {destination}</h3>
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <div className="bg-white p-2 rounded-lg">
          <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Bästa skidsäsongen</h4>
          <p className="text-sm text-gray-600">December-april för bästa snöförhållanden och après-ski</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <div className="bg-white p-2 rounded-lg">
          <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Budget per dag</h4>
          <p className="text-sm text-gray-600">800-1500 kr för liftpass, mat och après-ski</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <div className="bg-white p-2 rounded-lg">
          <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Bra att veta</h4>
          <p className="text-sm text-gray-600">Boka skiduthyrning i förväg och ta med hjälm</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <div className="bg-white p-2 rounded-lg">
          <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Après-ski</h4>
          <p className="text-sm text-gray-600">Börjar vanligtvis 15:30-16:00 när pistarna stänger</p>
        </div>
      </div>

      <Link
        to="/articles"
        className="block mt-6 text-center bg-white text-cyan-600 py-3 px-4 rounded-lg hover:bg-cyan-50 transition-colors duration-300 font-medium"
      >
        Läs fler skidguider och tips
      </Link>
    </div>
  </div>
);

export default SkiTravelTips;