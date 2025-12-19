import { Switch } from '@headlessui/react';

function TripTypeToggle({ value, onChange }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <span className={`text-sm font-medium ${!value ? 'text-blue-600' : 'text-gray-500'}`}>
            Solsemester
          </span>
          <span className={`text-sm font-medium ${!value ? 'text-blue-600' : 'text-gray-500'}`}>
            Festresa
          </span>
        </div>
        <Switch
          checked={value}
          onChange={onChange}
          className={`${
            value ? 'bg-green-600' : 'bg-blue-600'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          <span
            className={`${
              value ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <span className={`text-sm font-medium ${value ? 'text-green-600' : 'text-gray-500'}`}>
          Backpacking
        </span>
      </div>
    </div>
  );
}

export default TripTypeToggle;