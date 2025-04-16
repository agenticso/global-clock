import React from 'react';
import Clock from './Clock';

const ClockGrid = ({ cities }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl p-4">
      {cities.slice(0, 9).map((city, index) => (
        <Clock key={city.timezone || index} city={city} /> // Use timezone as key if available
      ))}
    </div>
  );
};

export default ClockGrid;