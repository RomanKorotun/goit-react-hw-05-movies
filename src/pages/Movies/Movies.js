import React, { useEffect, useState } from 'react';
import { serviceSearchMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Error } from 'components/Error.styled';
import { useSearchParams } from 'react-router-dom';
import { Form } from 'components/Form/Form';
import { BeatLoaderStyled, Button } from './Movies.styled';

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [moviesList, setMoviesList] = useState([]);
  const [visibleLoadMore, setVisibleLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onSubmit = inputValue => {
    searchParams.set('query', inputValue);
    setSearchParams(searchParams);
    setPage(1);
    setMoviesList([]);
    setVisibleLoadMore(false);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await serviceSearchMovies(query, page);
        setMoviesList(prevState => [...prevState, ...data.results]);
        setVisibleLoadMore(page < data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query, page]);

  const clickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <React.Fragment>
      <Form onSubmit={onSubmit} />
      {error && <Error>Error... Please reload the page!</Error>}
      {moviesList.length > 0 && <MoviesList moviesList={moviesList} />}
      {(loading && <BeatLoaderStyled color="#36d7b7" />) ||
        (visibleLoadMore && <Button onClick={clickLoadMore}>Load More</Button>)}
    </React.Fragment>
  );
}
