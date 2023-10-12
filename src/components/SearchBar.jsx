import React from "react";

const SearchBar = ({ name, search, setSearch }) => {
  return (
    <div className="mybuilds-search-bar">
      <input
        type="text"
        placeholder={`Search for a ${name}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
