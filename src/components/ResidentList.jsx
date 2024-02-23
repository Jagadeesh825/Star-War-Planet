// components/ResidentList.js
import React, { useState, useEffect } from 'react';
import { getResidentDetails } from '../services/swapiService';

const ResidentList = ({ residents }) => {
  const [residentDetails, setResidentDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResidentDetails = async () => {
      try {
        // Fetch resident details for each URL in parallel
        const residentResponses = await Promise.all(
          residents.map(url => fetch(url))
        );

        // Sort responses based on their response time
        const sortedResponses = residentResponses.sort(
          (a, b) => a.elapsedTime - b.elapsedTime
        );

        // Extract JSON data from sorted responses
        const residentData = await Promise.all(
          sortedResponses.map(response => response.json())
        );

        setResidentDetails(residentData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resident details:', error);
        // Optionally, you can handle errors here
        setLoading(false);
      }
    };

    fetchResidentDetails();
  }, [residents]);

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Residents:</h3>
      {loading ? (
        <p>Loading resident data...</p>
      ) : (
        <ul>
          {residentDetails.map((resident, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{resident.name}</span> - Height: {resident.height}, Mass: {resident.mass}, Gender: {resident.gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResidentList;
