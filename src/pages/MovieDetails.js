import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { serviceMovieDetails } from 'api';
import BeatLoader from 'react-spinners/BeatLoader';
import { Error } from 'components/Error.styled';
import { Container, MainSection } from 'components/Layout/Layout.stylled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export default function MovieDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(false);
        setLoading(true);
        const data = await serviceMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <MainSection>
      <Container>
        {loading && <BeatLoader color="#36d7b7" />}
        {error && <Error>Error... Please reload the page!</Error>}
        {movie && <MovieInfo movie={movie} movieId={movieId} />}
      </Container>
    </MainSection>
  );
}
