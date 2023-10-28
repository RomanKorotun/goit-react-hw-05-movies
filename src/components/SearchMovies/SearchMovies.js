import { Link } from 'react-router-dom';

export const SearchMovies = ({ searchMovies }) => {
  return (
    <ul>
      {searchMovies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
