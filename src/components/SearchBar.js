import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for players..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
