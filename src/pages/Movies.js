import React, { useEffect, useState } from 'react';
import { serviceSearchMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import BeatLoader from 'react-spinners/BeatLoader';
import { Error } from 'components/Error.styled';
import { Container, MainSection } from 'components/Layout/Layout.stylled';
import { useSearchParams } from 'react-router-dom';
import { Form } from 'components/Form/Form';

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [moviesList, setMoviesList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query') ?? '';

  const onSubmit = inputValue => {
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (queryValue === '') {
      return;
    }
    async function getMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await serviceSearchMovies(queryValue);
        setMoviesList(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [queryValue]);

  return (
    <MainSection>
      <Container>
        <Form onSubmit={onSubmit} />
        {loading && <BeatLoader color="#36d7b7" />}
        {error && <Error>Error... Please reload the page!</Error>}
        {moviesList.length > 0 && <MoviesList moviesList={moviesList} />}
      </Container>
    </MainSection>
  );
}
