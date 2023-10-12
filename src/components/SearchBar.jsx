import React from "react";

const SearchBar = ({ name, search, setSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={`Search for a ${name}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;
