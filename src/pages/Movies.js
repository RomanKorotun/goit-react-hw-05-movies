import React, { useEffect, useState } from 'react';
import { serviceSearchMovies } from 'api';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { useSearchParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { Error } from 'components/Error.styled';
import { Container, MainSection } from 'components/Layout/Layout.stylled';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [searchMovies, setSearchMovies] = useState([]);

  const onSubmit = inputValue => {
    setQuery(inputValue);
    setSearchMovies([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await serviceSearchMovies(query);
        setSearchMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [query]);

  return (
    <MainSection>
      <Container>
        <form
          onSubmit={evt => {
            evt.preventDefault();
            const { searchQuery } = evt.target.elements;
            onSubmit(searchQuery.value);
            evt.target.reset();
          }}
        >
          <input name="searchQuery" type="text" />
          <button type="submit">Search</button>
        </form>
        {loading && <BeatLoader color="#36d7b7" />}
        {error && <Error>Error... Please reload the page!</Error>}
        {searchMovies.length > 0 && (
          <SearchMovies searchMovies={searchMovies} />
        )}
      </Container>
    </MainSection>
  );
}
