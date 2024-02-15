import React from 'react'
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Home';
import Movie from './Movie';


const apiKey = "fec8b5ab27b292a68294261bb21b04a5";
const singleMovieUrl = "https://api.themoviedb.org/3/movie/"
const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
const imageUrl = "http://image.tmdb.org/t/p/w300";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:movieId" component={Movie} />
      </div>
    </Router>
  );
}

export default App;
