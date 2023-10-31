import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  Title,
  GenresList,
  GenresTitle,
  ListItem,
  MovieContainer,
  OverwievCard,
  OverwievTitle,
  SubTitle,
  UserScore,
  AdditionalInfoCard,
} from './MovieInfo.styled';

const defaultPoster =
  'https://th.bing.com/th/id/OIP.Lr_j_PgqTGzKxJTeIwajVwHaLH?pid=ImgDet&rs=1';
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const MovieInfo = ({
  movie: { poster_path, vote_average, overview, title, genres },
  movieId,
}) => {
  return (
    <React.Fragment>
      <MovieContainer>
        <img
          src={poster_path ? `${BASE_URL_IMG}${poster_path}` : defaultPoster}
          style={{ width: '200px', height: '300px' }}
          alt={title}
        />
        <div>
          <Title>{title}</Title>
          <UserScore>User Score: {Math.round(vote_average * 10)}%</UserScore>
          <OverwievCard>
            <OverwievTitle>Overview</OverwievTitle>
            <p>{overview}</p>
          </OverwievCard>
          <div>
            <GenresTitle> Genres</GenresTitle>
            <GenresList>
              {genres.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </GenresList>
          </div>
        </div>
      </MovieContainer>
      <AdditionalInfoCard>
        <SubTitle>Additional information</SubTitle>
        <ul>
          <ListItem>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </ListItem>
          <ListItem>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </ListItem>
        </ul>
      </AdditionalInfoCard>
      <Outlet />
    </React.Fragment>
  );
};
