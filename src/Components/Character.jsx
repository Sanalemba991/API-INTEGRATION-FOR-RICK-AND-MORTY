import React, { useEffect, useState } from "react";
import axios from "axios";
import "./character.css";

function Character() {
  const [rick, setRick] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setRick(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // For Searching
  const filteredCharacters = rick.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="As">
        <h1 className="name">Rick and Morty Characters</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search characters"
            onChange={(e) => setSearch(e.target.value)}
          />
     
        </div>
        <div className="cha">
          <ul>
            {filteredCharacters.map((character) => (
              <li key={character.id}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Character;
