import React, { useState, useEffect } from 'react';
import { utcToZonedTime } from 'date-fns-tz';
import AnalogClock from './AnalogClock';
import DigitalClock from './DigitalClock';

const Clock = ({ city }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const zonedTime = utcToZonedTime(currentTime, city.timezone);

  return (
    <div className="bg-tech-card border border-tech-border rounded-lg p-4 md:p-6 shadow-lg flex flex-col items-center aspect-square justify-around transform hover:scale-[1.03] transition-transform duration-300 backdrop-blur-xs overflow-hidden">
      <div className="text-center mb-2 md:mb-4 z-10">
        <h2 className="text-xl md:text-2xl font-bold text-tech-text-primary font-orbitron">{city.name} <span className="text-lg">{city.flag}</span></h2>
        <p className="text-sm text-tech-text-secondary opacity-80">{city.country}</p>
      </div>
      <div className="w-32 h-32 md:w-40 md:h-40 mb-2 md:mb-4 z-10">
         <AnalogClock time={zonedTime} />
      </div>
      <div className="z-10">
        <DigitalClock time={zonedTime} timezone={city.timezone} />
      </div>
       {/* Optional: Add a subtle background glow or pattern inside the card */}
       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-tech-border opacity-30"></div>
    </div>
  );
};

export default Clock;