import React from 'react';
import './App.css';
import SearchMovies from './components/Search'

function App() {
  return (
  <div className="container">
    <h1 className="titleBar">Movie Search</h1>
    <SearchMovies/>
  </div>
  );
}

export default App;
