import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Episode.css';
import { Link } from 'react-router-dom';

const Episode = () => {
    const [episodes, setEpisodes] = useState([]);
 
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode")
          .then((response) => setEpisodes(response.data.results))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
    

 
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1 className='Rick'>Rick and Morty Episodes</h1>
            <div className='smn'>
                <ul>
                    {episodes.map(episode => (
                        <li key={episode.id}>
                            <h2>{episode.name}</h2>
                            <p>Air Date: {episode.air_date}</p>
                            <p>Episode: {episode.episode}</p>
                            <Link to={`/read/${episode.id}`}>Read</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Episode;
