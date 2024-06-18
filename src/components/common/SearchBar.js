// src/components/common/SearchBar.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar my-2 justify-content-center">
      <div className="row">
        <div className="col-10">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
