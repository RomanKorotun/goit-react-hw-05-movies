import { useEffect, useState } from 'react';
import { serviceTrandingMovies } from 'api';
import BeatLoader from 'react-spinners/BeatLoader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Error } from 'components/Error.styled';
import { Container, MainSection } from 'components/Layout/Layout.stylled';

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

  const titleStyle = {
    marginBottom: '20px',
  };

  return (
    <MainSection>
      <Container>
        {loading && <BeatLoader color="#36d7b7" />}
        {error && <Error>Error... Please reload the page!</Error>}
        {moviesList.length > 1 && (
          <>
            <h1 style={titleStyle}>Trending today</h1>
            <MoviesList moviesList={moviesList} />
          </>
        )}
      </Container>
    </MainSection>
  );
}
