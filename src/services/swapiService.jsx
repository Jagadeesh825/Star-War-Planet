// services/swapiService.js

const SWAPI_BASE_URL = 'https://swapi.dev/api';

// Function to fetch planets data
export const fetchPlanets = async (page = 1) => {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}/planets/?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch planets');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching planets:', error.message);
    throw error;
  }
};

// Function to fetch resident details
export const getResidentDetails = async (residentUrl) => {
  try {
    const response = await fetch(residentUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch resident details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching resident details:', error.message);
    throw error;
  }
};
