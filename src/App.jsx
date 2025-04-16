import React, { useState, useEffect } from 'react';
import ClockGrid from './components/ClockGrid';

// Define initial cities here or fetch them
const initialCities = [
  { name: 'Beijing', country: 'China', timezone: 'Asia/Shanghai', flag: '🇨🇳' },
  { name: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo', flag: '🇯🇵' },
  { name: 'London', country: 'UK', timezone: 'Europe/London', flag: '🇬🇧' },
  { name: 'New York', country: 'USA', timezone: 'America/New_York', flag: '🇺🇸' },
  { name: 'Paris', country: 'France', timezone: 'Europe/Paris', flag: '🇫🇷' },
  { name: 'Sydney', country: 'Australia', timezone: 'Australia/Sydney', flag: '🇦🇺' },
  { name: 'Moscow', country: 'Russia', timezone: 'Europe/Moscow', flag: '🇷🇺' },
  { name: 'Cairo', country: 'Egypt', timezone: 'Africa/Cairo', flag: '🇪🇬' },
  { name: 'Rio de Janeiro', country: 'Brazil', timezone: 'America/Sao_Paulo', flag: '🇧🇷' },
];

function App() {
  const [cities, setCities] = useState(initialCities);

  // Placeholder for future city customization logic
  // const addCity = (newCity) => {
  //   if (cities.length < 9) { // Limit to 9 for the grid
  //     setCities([...cities, newCity]);
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-tech-text-primary mb-8 font-orbitron tracking-wider">GLOBAL TIME MATRIX</h1>
      <ClockGrid cities={cities} />
      {/* <CitySelector onAddCity={addCity} /> */}
    </div>
  );
}

export default App;