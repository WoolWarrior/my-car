import React, { useState } from 'react';
import { useCarInfoQuery } from '../hooks/useCarInfoQuery';
import CarInfoDisplay from './CarInfoDisplay';
import SearchForm from './SearchForm';

const LandingPage: React.FC = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const {
    data: carInfo,
    error,
    isLoading,
    refetch,
  } = useCarInfoQuery(registrationNumber);

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Car Information Search</h1>
      <SearchForm
        onSearch={handleSearch}
        isLoading={isLoading}
        registrationNumber={registrationNumber}
        setRegistrationNumber={setRegistrationNumber}
      />
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {carInfo && <CarInfoDisplay carInfo={carInfo} />}
    </div>
  );
};

export default LandingPage;
