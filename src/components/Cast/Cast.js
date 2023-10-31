import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { serviseCast } from 'api';
import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Error } from 'components/Error.styled';
import { ListItemCast } from './Cast.styled';

const defaultPoster =
  'https://th.bing.com/th/id/OIP.Lr_j_PgqTGzKxJTeIwajVwHaLH?pid=ImgDet&rs=1';
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const Cast = ({ a }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [castInfo, setCastInfo] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        setError(false);
        setLoading(true);
        const data = await serviseCast(movieId);
        setCastInfo(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <React.Fragment>
      {loading && <BeatLoader color="#36d7b7" />}
      {error && <Error>Error... Please reload the page!</Error>}
      {castInfo && (
        <ul>
          {castInfo.map(({ profile_path, name, character, cast_id }) => (
            <ListItemCast key={cast_id}>
              <img
                src={
                  profile_path
                    ? `${BASE_URL_IMG}${profile_path}`
                    : defaultPoster
                }
                style={{ width: '70px', height: '100px' }}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </ListItemCast>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};
