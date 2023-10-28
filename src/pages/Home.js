import { useEffect, useState } from 'react';
import { serviceTrandingMovies } from 'api';
import BeatLoader from 'react-spinners/BeatLoader';
import { TrandingMovies } from 'components/TrandingMovies/TrandingMovies';
import { Error } from 'components/Error.styled';
import { Container, MainSection } from 'components/Layout/Layout.stylled';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await serviceTrandingMovies();
        setTrandingMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <MainSection>
      <Container>
        {loading && <BeatLoader color="#36d7b7" />}
        {error && <Error>Error... Please reload the page!</Error>}
        {trandingMovies.length > 1 && (
          <TrandingMovies trendingMovies={trandingMovies} />
        )}
      </Container>
    </MainSection>
  );
}
