import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  }; // feeds movie info (obtained from click event in MovieCard) to SavedList

  return (
    <div>
      <SavedList list={savedList} />

      <Route exact path="/" 
                   render={props => <MovieList addToSavedList={addToSavedList} {...props} /> }
      />

      <Route path="/movies/:id" 
             render={props => <Movie addToSavedList={addToSavedList} {...props} /> }
      />

    </div>
  );
};

export default App;
