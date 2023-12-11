import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Item, List } from './MoviesList.styled';

const defaultPoster =
  'https://th.bing.com/th/id/OIP.Lr_j_PgqTGzKxJTeIwajVwHaLH?pid=ImgDet&rs=1';
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <React.Fragment>
      <List>
        {moviesList.map(({ title, id, poster_path }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path ? `${BASE_URL_IMG}${poster_path}` : defaultPoster
                }
                alt={title}
              />
            </Link>
          </Item>
        ))}
      </List>
    </React.Fragment>
  );
};
