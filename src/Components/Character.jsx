import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Character() {
  const [rick, setRick] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(response => {
        setRick(response.data.results); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <>
      <div className='As'>
        <h1>Rick and Morty Characters</h1>
        <ul>
          {rick.map(character => (
            <li key={character.id} >
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
    </>
  );
}

export default Character;
