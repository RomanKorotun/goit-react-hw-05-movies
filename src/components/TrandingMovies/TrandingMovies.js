import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from './TrandingMovies.styled';

export const TrandingMovies = ({ trendingMovies }) => {
  return (
    <React.Fragment>
      <Title>Trending today</Title>
      <ul>
        {trendingMovies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
