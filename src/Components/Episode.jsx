import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Episode.css";
import { Link } from "react-router-dom";

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 6;
  const [search, setSearch] = useState(""); // Added search state

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get("https://rickandmortyapi.com/api/episode");
        setEpisodes(response.data.results);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };
    fetchEpisodes();
  }, []);

  const filteredEpisodes = episodes.filter(episode =>
    episode.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEpisodes.length / charactersPerPage);
  const currentEpisodes = filteredEpisodes.slice((currentPage - 1) * charactersPerPage, currentPage * charactersPerPage);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="name">Rick and Morty Episodes</h1>
      <input
        type="text" className="search"
        placeholder="Search episodes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="smn">
        <ul className="character-list">
          {currentEpisodes.map((episode) => (
            <li key={episode.id}>
              <h2>{episode.name}</h2>
              <img src={episode.image} alt={episode.name} />
              <p>Air Date: {episode.air_date}</p>
              <p>Episode: {episode.episode}</p>
              <Link to={`/read/${episode.id}`}>Read</Link>
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button  className="btn" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            Previous
          </button>
          <span className="span">Page {currentPage} of {totalPages}</span>
          <button className="ctn"  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Episode;
