
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Location.css'
const Location = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/location');
                setEpisodes(response.data.results);
            } catch (err) {
                setError('Failed to fetch episodes');
            } finally {
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='mo'>
            <h1 className="h1">Rick and Morty Episodes</h1>
            
            <ul>
              <div className='.cah'>
                {episodes.map(episode => (
                    <li key={episode.id}>
                        <h2> Name{episode.name}</h2>
                        <p>Type: {episode.type}</p>
                        <p>Dimension{episode.dimension}</p>                   
                    </li>
                    
                ))}
                </div>
            </ul>
        </div>
    );
};

export default Location;
