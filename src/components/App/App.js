import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import React from 'react';
import MovieDetail from '../MovieDetail/MovieDetail';
import MovieItem from '../MovieItem/MovieItem';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <MovieDetail />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
