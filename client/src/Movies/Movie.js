import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie}/>
  )
}

export default Movie;
