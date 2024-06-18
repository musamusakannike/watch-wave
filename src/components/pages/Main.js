import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../common/Header';
import MovieList from '../common/MovieList';
import MoviePage from './MoviePage';
import CategoryPage from './CategoryPage';
import Navbar from '../common/Navbar';
import SearchBar from '../common/SearchBar';
import SearchResults from './SearchResults';

const HomePage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <MovieList />
    </>
  );
};

const Main = () => {
  return (
  	  <div>
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movie/:title" element={<MoviePage />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="search/:searchTerm" element={<SearchResults />} />
        </Routes>
      </main>
  	  </div>
  );
};

export default Main;
