import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = props => {

  const { title, director, metascore, stars } = props.movie;
 
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
        props.addToSavedList(props.movie);
      }} className="save-button">Save</div>

    </div> // close "save-wrapper" and closing tag above it closes "movie-card"
  );

}

export default MovieCard;
