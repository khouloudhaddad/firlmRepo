import SearchIcon from './search.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const API_URL = "http://www.omdbapi.com?apikey=9d38fdce";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);  
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies)
  }
  useEffect(() => {
    searchMovies('Batman');
  }, []);
  
  return (
    <div className='app'>
      <h1>Film Repository</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="Search"
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>
      {movies?.length>0 ?
        (
          
          <div className="container">
              {
              movies.map((movie) => {
                return <MovieCard movie={movie} />
              })
              }
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found </h2>
            </div>
          )}
    </div>
  );
}

export default App;
