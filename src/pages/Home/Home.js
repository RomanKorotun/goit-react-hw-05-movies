import React, { useEffect, useState } from 'react';
import { serviceTrandingMovies } from 'api';
import { BeatLoaderStyled } from './Home.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Error } from 'components/Error.styled';
import { Title } from './Home.styled';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await serviceTrandingMovies();

        setMoviesList(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <React.Fragment>
      {loading && <BeatLoaderStyled color="#36d7b7" />}
      {error && <Error>Error... Please reload the page!</Error>}
      {moviesList.length > 1 && (
        <>
          <Title>Trending Movies</Title>
          <MoviesList moviesList={moviesList} />
        </>
      )}
    </React.Fragment>
  );
}
