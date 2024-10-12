import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReadForLocation = () => {
    const { id } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
        axios
          .get(`https://rickandmortyapi.com/api/location/${id}`)
          .then((response) => setLocation(response.data))
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, [id]);
  
    if (!location) return <div>No location found</div>;

    return (
        <div>
            <h2>Name: {location.name}</h2>
            <p>Type: {location.type}</p>
            <p className='dime'>Dimension: {location.dimension}</p>
        </div>
    );
};

export default ReadForLocation;
