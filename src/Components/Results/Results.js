import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "../UI/VideoCard";
import axios from "../../Http/axios";
import FlipMove from "react-flip-move";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
    }
    fetchData();
  }, [selectedOption]);
  return (
    <FlipMove className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  );
};

export default Results;
