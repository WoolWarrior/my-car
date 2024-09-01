import { useQuery } from '@tanstack/react-query';
import { fetchCarInfo } from '../api/vehicleEnquiry';
import { CarInfo } from '../types/CarInfo';

export const useCarInfoQuery = (registrationNumber: string) => {
  const query = useQuery<CarInfo, Error>({
    queryKey: ['carInfo', registrationNumber],
    queryFn: () => fetchCarInfo(registrationNumber),
    enabled: false, // Disable automatic query
  });

  return query;
};
