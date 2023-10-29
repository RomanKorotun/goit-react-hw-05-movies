import { Link, useLocation } from 'react-router-dom';

export const SearchMovies = ({ searchMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {searchMovies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
