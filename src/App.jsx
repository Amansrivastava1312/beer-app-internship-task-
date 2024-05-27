import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./components/BeerCard";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/beers/ale"
        );
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching the beer data", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Beer List</h1>
      <Search onSearch={handleSearch} />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
