import React, { useEffect, useState } from "react";
import axios from "axios";
import "./character.css";
import { Link } from "react-router-dom";

function Character() {
  const [rick, setRick] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 6;

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((response) => setRick(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredCharacters = rick.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);
  const currentCharacters = filteredCharacters.slice((currentPage - 1) * charactersPerPage, currentPage * charactersPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, rick]);

  return (
    <div className="As">
      <h1 className="name">Rick and Mortypy Characters</h1>
      <input className="search"
        type="text"
        placeholder="Search characters"
        onChange={(e) => setSearch(e.target.value)}
      />
<div className="sma">
  <ul className="character-list">
    {currentCharacters.map(character => (
      <li key={character.id} className="character-item">
        <h2 className="name">{character.name}</h2>
        <img className="image" src={character.image} alt={character.name} />
        <p className="status">Status: {character.status}</p>
       <div className="Link"><Link to={`/read/${character.id}`}>ReadMore</Link></div>
      </li>
    ))}
  </ul>
</div>


      <div className="pagination">
        <button className="btn" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="span">Page {currentPage} of {totalPages}</span>
        <button className="ctn" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Character;
