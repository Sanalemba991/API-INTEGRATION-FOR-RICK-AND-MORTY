import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReadForEpisode = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState(null);
    
    useEffect(() => {
        axios
          .get(`https://rickandmortyapi.com/api/episode/${id}`)
          .then((response) => setEpisode(response.data))
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, [id]);

 
    if (!episode) return <div>No episode found</div>;

    return (
        <div>
            <h2>{episode.name}</h2>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
        </div>
    );
};

export default ReadForEpisode;
