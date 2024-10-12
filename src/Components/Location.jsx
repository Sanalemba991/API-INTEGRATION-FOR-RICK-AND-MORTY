import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Location.css';
import { Link } from 'react-router-dom';

const Location = () => {
    const [locations, setLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const charactersPerPage = 5;
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location")
            .then((response) => setLocations(response.data.results))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filteredLocations = locations.filter(location =>
        location.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredLocations.length / charactersPerPage);
    const currentLocations = filteredLocations.slice((currentPage - 1) * charactersPerPage, currentPage * charactersPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, locations]);

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
                {currentLocations.map(location => (
                    <li key={location.id}>
                        <h2>Name: {location.name}</h2>
                        <p>Type: {location.type}</p>
                        <Link to={`/readfor/${location.id}`}>Read</Link>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Location;
