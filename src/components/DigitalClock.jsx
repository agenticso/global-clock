import React from 'react';
import { format } from 'date-fns-tz';

const DigitalClock = ({ time, timezone }) => {
  // Ensure timezone is passed correctly
  const options = { timeZone: timezone };
  const formattedTime = format(time, 'HH:mm:ss', options);
  const formattedDate = format(time, 'yyyy-MM-dd', options);
  const formattedTimezone = format(time, 'zzz', options);

  return (
    <div className="text-center font-mono">
      <p className="text-2xl md:text-3xl font-bold text-tech-accent tracking-wider tabular-nums">{formattedTime}</p>
      <p className="text-xs text-tech-text-secondary opacity-70">{formattedDate} ({formattedTimezone})</p>
    </div>
  );
};

export default DigitalClock;