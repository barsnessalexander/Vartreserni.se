import React from 'react';
import { SKI_DESTINATION_INFO } from '../constants/skiDestinationInfo';

function SkiDestinationInfo({ destination }) {
  const info = SKI_DESTINATION_INFO[destination] || {
    population: 'Information saknas',
    area: 'Information saknas',
    elevation: 'Information saknas',
    skiRuns: 'Information saknas',
    lifts: 'Information saknas'
  };

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-cyan-900 mb-4">
        Allmän information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-cyan-500"
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
              className="w-5 h-5 text-cyan-500"
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

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-cyan-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <span className="text-sm font-medium text-gray-600">Höjd</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">
            {info.elevation}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-cyan-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-sm font-medium text-gray-600">Pister</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">
            {info.skiRuns}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-cyan-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
            <span className="text-sm font-medium text-gray-600">Liftar</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">
            {info.lifts}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkiDestinationInfo;