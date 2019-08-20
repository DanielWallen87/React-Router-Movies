import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from "./MovieCard";
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);

  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // return (
  // //   <MovieCard movie={movie}/>
  // // )

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <Link to="/movies/2">Other Movie</Link>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div> 

      <div onClick={(event) => { 
        event.preventDefault(); // stops automatic reload
        props.addToSavedList(movie);
      }} className="save-button">Save</div>

    </div>
  );
}

export default Movie;
