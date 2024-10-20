import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Location.css";
import { Link } from "react-router-dom";

const Location = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 6;
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((response) => setLocations(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLocations.length / charactersPerPage);
  const currentLocations = filteredLocations.slice(
    (currentPage - 1) * charactersPerPage,
    currentPage * charactersPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, locations]);

  return (
    <div className="As">
      <h1 className="h1">Rick and Morty Locations</h1>

      <input
        type="text"
        className="search"
        placeholder="Search locations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="sma">
        <ul className="character-list">
          {currentLocations.map((location) => (
            <li key={location.id}>
              <h2 className="name"> Name: {location.name}</h2>
              <p className="status">Type: {location.type}</p>
              <div className="Link">
                <Link to={`/readfor/${location.id}`}>Read</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="pagination">
        <button
          className="btn"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="span">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="ctn"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Location;
