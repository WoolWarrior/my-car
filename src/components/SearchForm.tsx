import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: () => void;
  isLoading: boolean;
  registrationNumber: string;
  setRegistrationNumber: (registrationNumber: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading, registrationNumber, setRegistrationNumber }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
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
        disabled={isLoading}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchForm;
