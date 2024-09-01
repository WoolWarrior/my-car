import React, { useState } from 'react';
import { useCarInfo } from '../hooks/useCarInfo';

const LandingPage: React.FC = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const { carInfo, error, getCarInfo } = useCarInfo();

  const handleSearch = async () => {
    setLoading(true);
    await getCarInfo(registrationNumber);
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void handleSearch();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Car Information Search</h1>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
          placeholder="Enter registration number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          aria-label="Registration Number"
        />
        <button
          type="submit"
          className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      {carInfo && (
        <div className="mt-8 p-4 border border-gray-300 rounded-lg bg-white">
          <h2 className="text-2xl font-bold mb-4">Car Information</h2>
          <pre className="text-left">{JSON.stringify(carInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
