import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Location.css';
import { Link } from 'react-router-dom';

const Location = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/location');
                setLocations(response.data.results);
            } catch (err) {
                setError('Failed to fetch locations');
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    const filteredLocations = locations.filter(location =>
        location.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='As'>
            <h1 className="h1">Rick and Morty Locations</h1>
            <div className='search'>
                <input
                    type="text"
                    placeholder="Search locations..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>
            <ul>
                {filteredLocations.map(location => (
                    <li key={location.id}>
                        <h2>Name: {location.name}</h2>
                        <p>Type: {location.type}</p>
                        <p className='dime'>Dimension: {location.dimension}</p>
                        <Link to={`/readfor/${location.id}`}>Read</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Location;
