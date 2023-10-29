import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Title } from './TrandingMovies.styled';

export const TrandingMovies = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Title>Trending today</Title>
      <ul>
        {trendingMovies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
