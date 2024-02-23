// components/ResidentList.js
import React, { useState, useEffect } from 'react';

const ResidentList = ({ residents }) => {
  const [residentDetails, setResidentDetails] = useState([]);

  useEffect(() => {
    const fetchResidentDetails = async () => {
      try {
        const details = await Promise.all(residents.map(url => fetch(url).then(res => res.json())));
        setResidentDetails(details);
      } catch (error) {
        console.error('Error fetching resident details:', error);
      }
    };

    fetchResidentDetails();
  }, [residents]);

  return (
    <div className="mt-2">
      <ul>
        {residentDetails.map((resident, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{resident.name}</span> - Height: {resident.height}, Mass: {resident.mass}, Gender: {resident.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentList;
