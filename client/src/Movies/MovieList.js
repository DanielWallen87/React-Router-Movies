import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import axios from 'axios';

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get(`http://localhost:5000/api/movies/`)
        .then(response => {
          setMovies(response.data); // collect a list of info related to movies and set to the current state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => ( // create a new array from the movies in the current state
        <MovieCard key={movie.id} movie={movie} /> // Return a MovieCard 
      ))}
    </div>
  );
}

export default MovieList;
