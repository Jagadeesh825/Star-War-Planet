// components/PlanetCard.js
import React from 'react';
import ResidentList from './ResidentList';

const PlanetCard = ({ planet }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">{planet.name}</h2>
      <div className="text-white">
        <p className="mb-2"><span className="font-semibold">Climate:</span> {planet.climate}</p>
        <p className="mb-2"><span className="font-semibold">Population:</span> {planet.population}</p>
        <p className="mb-4"><span className="font-semibold">Terrain:</span> {planet.terrain}</p>
        {planet.residents.length > 0 && ( // Check if there are residents
          <div>
            <h3 className="font-semibold mb-2">Residents:</h3>
            <ResidentList residents={planet.residents} />
          </div>
        )}
        {planet.residents.length === 0 && ( // If no residents, display message
          <p className="text-gray-400 italic">No residents found</p>
        )}
      </div>
    </div>
  );
};

export default PlanetCard;
