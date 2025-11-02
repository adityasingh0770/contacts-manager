
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search contacts by name, email, or phone..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
