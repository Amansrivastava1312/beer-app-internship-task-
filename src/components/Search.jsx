import React, { useState } from "react";
import "./Search.css";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a beer..."
      />
    </div>
  );
}

export default Search;
