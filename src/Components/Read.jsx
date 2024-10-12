import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Read() {

    const {id}=useParams

    useEffect(() => {
        const [rick, setRick] = useState([]);
        axios
          .get(`https://rickandmortyapi.com/api/character`+id)
          .then((response) =>setRick (res.data)
          
          )
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
  return (
    <div>

        <div>
        <li key={character.id}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
              </li>
        </div>
        
      
    </div>
  )
}

export default Read
