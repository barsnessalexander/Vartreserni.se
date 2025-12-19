import React from 'react';
import { SKI_DESTINATION_STATS } from '../constants/skiDestinationStats';

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

function SkiDestinationStats({ destination }) {
  const stats = SKI_DESTINATION_STATS[destination] || {
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
        label="Skidåkning"
        color="stroke-cyan-500"
      />
      <StatCircle
        value={stats.nightlife}
        maxValue={5}
        label="Après-ski"
        color="stroke-purple-500"
      />
    </div>
  );
}

export default SkiDestinationStats;