import React from 'react';
import { Outlet } from 'react-router-dom';
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
  GenresCard,
  NavLinkStyled,
  Image,
  ReleaseDate,
  AdditionalList,
} from './MovieInfo.styled';

const defaultPoster =
  'https://th.bing.com/th/id/OIP.Lr_j_PgqTGzKxJTeIwajVwHaLH?pid=ImgDet&rs=1';
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const MovieInfo = ({
  movie: { poster_path, vote_average, overview, title, genres, release_date },
  movieId,
}) => {
  return (
    <React.Fragment>
      <MovieContainer>
        <Image
          src={poster_path ? `${BASE_URL_IMG}${poster_path}` : defaultPoster}
          style={{ width: '345px', height: '517px' }}
          alt={title}
        />
        <div>
          <Title>{title}</Title>
          <ReleaseDate>Release date: {release_date}</ReleaseDate>
          <UserScore>User Score: {Math.round(vote_average * 10)}%</UserScore>
          <OverwievCard>
            <OverwievTitle>Overview</OverwievTitle>
            <p>{overview}</p>
          </OverwievCard>
          <GenresCard>
            <GenresTitle> Genres</GenresTitle>
            <GenresList>
              {genres.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </GenresList>
          </GenresCard>
          <AdditionalInfoCard>
            <SubTitle>Additional information</SubTitle>
            <AdditionalList>
              <ListItem>
                <NavLinkStyled to={`/movies/${movieId}/cast`}>
                  Cast
                </NavLinkStyled>
              </ListItem>
              <ListItem>
                <NavLinkStyled to={`/movies/${movieId}/reviews`}>
                  Reviews
                </NavLinkStyled>
              </ListItem>
            </AdditionalList>
          </AdditionalInfoCard>
        </div>
      </MovieContainer>
      <Outlet />
    </React.Fragment>
  );
};
