import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TMDB_API_KEY } from '../../config'; // Import the TMDB API key

const MoviePage = () => {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const movieNameRef = useRef(title);

  useEffect(() => {
    const fetchMovie = async () => {
      let movieName = movieNameRef.current;
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieName)}`;

      if (movieName.length <= 0) {
        setError("Please enter a movie name");
        return;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
          const movieDetails = data.results[0];
          const detailsUrl = `https://api.themoviedb.org/3/movie/${movieDetails.id}?api_key=${TMDB_API_KEY}&append_to_response=videos`;

          const detailsResponse = await fetch(detailsUrl);
          const detailsData = await detailsResponse.json();

          setMovie(detailsData);
          setError(null);
        } else {
          setError("Movie not found");
        }
      } catch (error) {
        console.error('Error fetching the movie: ', error);
        setError("An error occurred while fetching the movie data");
      }
    };

    fetchMovie();
  }, [title]);

  const handleBackClick = () => {
    navigate('/');
  };

  if (error) {
    return (
      <>
        <div className="error-message">{error}</div>
        <button className="btn btn-primary" onClick={handleBackClick}>Back to Movie List</button>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <div className="loading">Loading ...</div>
        <button className="btn btn-primary" onClick={handleBackClick}>Back to Movie List</button>
      </>
    );
  }

  const youtubeEmbedUrl = movie.videos?.results?.[0]?.key
    ? `https://www.youtube.com/embed/${movie.videos.results[0].key}`
    : 'https://www.youtube.com/embed/YOUTUBE_VIDEO_ID'; // Placeholder if no video

  return (
    <div className="movie-page-container">
      <div className="movie-header">
        <iframe
          width="100%"
          height="400"
          src={youtubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="movie-details row-2">
        <div className="poster-container">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="poster" />
        </div>
        <div className="details-container">
          <h1 className="title">{movie.title}</h1>
          <p><strong>Genres:</strong> {movie.genres?.map(genre => genre.name).join(', ')}</p>
          <p className="plot">{movie.overview}</p>
          <p><strong>Year:</strong> {new Date(movie.release_date).getFullYear()}</p>
          <p><strong>Rated:</strong> {movie.adult ? "R" : "PG-13"}</p>
          <p><strong>Released:</strong> {movie.release_date}</p>
          <p><strong>Runtime:</strong> {movie.runtime} min</p>
          <p><strong>Director:</strong> {movie.director?.map(d => d.name).join(', ') || "N/A"}</p>
          <p><strong>Writer:</strong> {movie.writer?.map(w => w.name).join(', ') || "N/A"}</p>
          <p><strong>Actors:</strong> {movie.actors?.map(a => a.name).join(', ') || "N/A"}</p>
          <p><strong>Language:</strong> {movie.original_language}</p>
          <p><strong>Country:</strong> {movie.production_countries?.map(country => country.name).join(', ')}</p>
          <p><strong>Awards:</strong> {movie.awards || "N/A"}</p>
          <div>
            <strong>Ratings:</strong>
            <ul>
              {movie.ratings?.map((rating, index) => (
                <li key={index}>{rating.Source}: {rating.Value}</li>
              )) || "N/A"}
            </ul>
          </div>
          <p><strong>IMDB Rating:</strong> {movie.vote_average}</p>
          <p><strong>IMDB Votes:</strong> {movie.vote_count}</p>
          <button className="btn btn-primary" onClick={handleBackClick}>Back to Movie List</button>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
