import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState(null); // setting to null prevents an error created by "stars" not being defined immediately
  const id = props.match.params.id; // using "under the hood" object syntax to grab the movie's unique id, which is used frequently

  useEffect(() => {

       axios
        .get(`http://localhost:5000/api/movies/${id}`) // Must use ${} symtax with a temperate literal to access the desired movie
        .then(response => {
          setMovie(response.data); // sets the movie's info to state so the props can be accessed by any components that may need them
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);

  if (!movie) {
    return <div>Loading movie information...</div>; // If a movie hasn't loaded yet, this will display versus an unattractive error page
  }

  return (
    <MovieCard movie={movie}/> // return a MovieCard component displaying this specific movie's details (title, director, metascore, stars)
  )
}

export default Movie;
