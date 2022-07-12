import React, { useState } from 'react';
import { useLocation } from 'wouter';
import '../styles/SearchForm.css';
import useSearchReducer from '../hooks/useSearchReducer';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword = '', initialRating = 'g' }) => {
  const [_, pushLocation] = useLocation();

  const { keyword, rating, times, updateKeyword, updateRating } =
    useSearchReducer({
      initialKeyword,
      initialRating,
    });

  const handleChange = (e) => {
    updateKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = (e) => {
    updateRating(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        onChange={handleChange}
        placeholder='Search a gif here...'
        type='text'
        value={keyword}
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating Type</option>
        {RATINGS.map((rat) => (
          <option key={rat}>{rat}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
};

export default React.memo(SearchForm);
