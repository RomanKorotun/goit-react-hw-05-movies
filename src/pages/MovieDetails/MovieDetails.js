import { useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { serviceMovieDetails } from 'api';
import { Error } from 'components/Error.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { ImArrowLeft } from 'react-icons/im';
import { BeatLoaderStyled, StyledLink } from './MovieDetails.styled';

export default function MovieDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovie() {
      try {
        setError(false);
        setLoading(true);
        const data = await serviceMovieDetails(movieId);
        console.log(data);
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
    <React.Fragment>
      <StyledLink to={backLinkocationRef.current}>
        <ImArrowLeft />
        Go back
      </StyledLink>
      {loading && <BeatLoaderStyled color="#36d7b7" />}
      {error && <Error>Error... Please reload the page!</Error>}
      {movie && <MovieInfo movie={movie} movieId={movieId} />}
    </React.Fragment>
  );
}
