import { useState } from 'react';
import { fetchCarInfo } from '../api/vehicleEnquiry';
import { CarInfo } from '../types/CarInfo';

export const useCarInfo = () => {
  const [carInfo, setCarInfo] = useState<CarInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getCarInfo = async (registrationNumber: string) => {
    try {
      const data = await fetchCarInfo(registrationNumber);
      setCarInfo(data);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setCarInfo(null);
    }
  };

  return { carInfo, error, getCarInfo };
};
