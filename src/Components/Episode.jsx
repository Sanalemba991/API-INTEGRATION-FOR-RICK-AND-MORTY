
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Episode.css'

const Episode = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/episode');
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
        <div>
            <h1 className='Rick'>Rick and Morty Episodes</h1>
            <ul>
                {episodes.map(episode => (
                    <li key={episode.id}>
                        <h2>{episode.name}</h2>
                        <p>Air Date: {episode.air_date}</p>
                        <p>Episode: {episode.episode}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Episode;
