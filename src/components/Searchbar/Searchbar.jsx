import { useState } from 'react';
import { SearchbarStyle } from './SearchbarSyles';

export const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <SearchbarStyle className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchWord"
          value={name}
          onChange={handleChange}
        />
      </form>
    </SearchbarStyle>
  );
};
