import { CarInfo } from '../types/CarInfo';

const API_URL = import.meta.env.VITE_API_URL as string;

export const fetchCarInfo = async (registrationNumber: string): Promise<CarInfo> => {
  // see vite.config.ts for /api proxy setup to actual url
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    body: JSON.stringify({ registrationNumber }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch car information');
  }

  return response.json();
};
