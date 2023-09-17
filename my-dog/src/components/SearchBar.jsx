import React from 'react';

function SearchBar({ value, onSearch }) {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onSearch(inputValue);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;

