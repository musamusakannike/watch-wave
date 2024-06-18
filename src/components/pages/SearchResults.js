// src/components/pages/SearchResults.js
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TMDB_API_KEY } from '../../config'; // Ensure you import your TMDB API key

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${searchTerm}&language=en-US&page=1`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        setError(null);
      } catch (error) {
        console.error('Error fetching the movies: ', error);
        setError('An error occurred while fetching the movie data');
      }
    };

    fetchMovies();
  }, [searchTerm]);

  const handleClick = (title) => {
    navigate(`/movie/${title}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!movies.length) {
    return <div className="loading">Loading ...</div>;
  }

  return (
    <section className="p-2">
      <h1>Search Results for "{searchTerm}"</h1>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleBackClick}>Back to Movie List</button>
      </div>
      <div className="category-movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="card p-1 mx-1 movie-card d-inline-block" onClick={() => handleClick(movie.title)}>
            <div className="card-img overflow-hidden">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-image" />
            </div>
            <div className="card-body text-start">
              <h4 className="card-title my-1">{movie.title}</h4>
              <p className="card-subtitle my-1">Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleBackClick}>Back to Movie List</button>
      </div>
    </section>
  );
};

export default SearchResults;
