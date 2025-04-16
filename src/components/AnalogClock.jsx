import React from 'react';
import { getHours, getMinutes, getSeconds } from 'date-fns';

const AnalogClock = ({ time }) => {
  const hours = getHours(time);
  const minutes = getMinutes(time);
  const seconds = getSeconds(time);

  // Calculate degrees
  const secondsDegrees = ((seconds / 60) * 360) + 90; // Offset by 90 degrees because 0 is at 3 o'clock position
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

  return (
    <div className="analog-clock relative w-full h-full rounded-full border-2 border-tech-accent flex items-center justify-center bg-tech-analog-bg shadow-inner">
      {/* Hands */}
      <div
        className="hand hour-hand"
        style={{ transform: `rotate(${hoursDegrees}deg)` }}
      />
      <div
        className="hand minute-hand"
        style={{ transform: `rotate(${minutesDegrees}deg)` }}
      />
      <div
        className="hand second-hand"
        style={{ transform: `rotate(${secondsDegrees}deg)` }}
      />
      {/* Center Dot */}
      <div className="center-dot"></div>

      {/* Markers (Optional but enhance the look) */}
      <div className="marker hour marker-12"></div>
      <div className="marker hour marker-3"></div>
      <div className="marker hour marker-6"></div>
      <div className="marker hour marker-9"></div>
      {/* Add more markers if desired */}
    </div>
  );
};

export default AnalogClock;