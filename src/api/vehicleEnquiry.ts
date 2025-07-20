import { CarInfo } from '../types/CarInfo';

const API_KEY = import.meta.env.VITE_API_KEY as string;

export const fetchCarInfo = async (registrationNumber: string): Promise<CarInfo> => {
  // see vite.config.ts for /api proxy setup to actual url
  const response = await fetch('/api/vehicle-enquiry/v1/vehicles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY, // Use the environment variable
    },
    body: JSON.stringify({ registrationNumber }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch car information');
  }

  return response.json();
};
