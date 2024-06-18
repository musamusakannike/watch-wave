import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TMDB_API_KEY } from '../../config'; // Import the TMDB API key

const MovieList = () => {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const categories = ['Action', 'Fantasy', 'Adventure', 'Comedy', 'Crime', 'Animation', 'Romance'];
    const genreIDs = {
      Action: 28,
      Fantasy: 14,
      Adventure: 12,
      Comedy: 35,
      Crime: 80,
      Animation: 16,
      Romance: 10749,
    };

    const fetchMovies = async (category) => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreIDs[category]}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results.slice(0, 7);
      } catch (error) {
        console.error('Error fetching the movies: ', error);
        setError('An error occurred while fetching the movie data');
      }
    };


    const fetchMoviesByCategories = async () => {
      const movies = {};
      for (const category of categories) {
        const categoryMovies = await fetchMovies(category);
        if (categoryMovies) {
          movies[category] = categoryMovies;
        }
      }
      setMoviesByCategory(movies);
    };

    fetchMoviesByCategories();
  }, []);

  const handleClick = (title) => {
    navigate(`/movie/${title}`);
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <section className="p-2">
      {Object.entries(moviesByCategory).map(([category, movies]) => (
        <div key={category}>
          <h1>{category.toUpperCase()}</h1>
          <div className="movie-list">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="card p-1 mx-1 movie-card d-inline-block"
                onClick={() => handleClick(movie.title)}
              >
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
        </div>
      ))}
    </section>
  );
};

export default MovieList;