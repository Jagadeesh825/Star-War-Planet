// App.js
import React, { useState, useEffect } from 'react';
import { fetchPlanets } from './services/swapiService';
import PlanetCard from './components/PlanetCard';
import Navbar from './components/Navbar'; 

function App() {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlanets();
      setPlanets(data.results);
      setNextPage(data.next);
    };

    fetchData();
  }, []);

  const loadMorePlanets = async () => {
    if (nextPage) {
      const data = await fetchPlanets(getPageNumber(nextPage));
      setPlanets(prevPlanets => [...prevPlanets, ...data.results]);
      setNextPage(data.next);
    }
  };

  const getPageNumber = (url) => {
    const urlParts = url.split('=');
    return parseInt(urlParts[urlParts.length - 1]);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {planets.map((planet, index) => (
            <PlanetCard key={index} planet={planet} />
          ))}
        </div>
        {nextPage && (
          <div className="mt-8 flex justify-center">
            <button className="bg-gradient-to-br from-gray-900 to-gray-900 hover:bg-blue-600 border:2px text-white font-semibold px-5 py-3 rounded" onClick={loadMorePlanets}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
