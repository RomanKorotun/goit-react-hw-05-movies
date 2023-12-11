import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { serviceReviews } from 'api';
import { Error } from 'components/Error.styled';
import {
  BeatLoaderStyled,
  ReviewsDesc,
  ReviewsNotFound,
  TitleReviews,
} from './Reviews.styled';
import { ListItemReviews } from './Reviews.styled';

export const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function getReviews() {
      try {
        setError(false);
        setLoading(true);
        const data = await serviceReviews(movieId);
        if (data.results.length === 0) {
          setIsEmpty(true);
        }
        setReviewsInfo(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <React.Fragment>
      {loading && <BeatLoaderStyled color="#36d7b7" />}
      {error && <Error>Error... Please reload the page!</Error>}
      {isEmpty && (
        <ReviewsNotFound>
          We don't have any reviews fot this movie!
        </ReviewsNotFound>
      )}
      {reviewsInfo && (
        <ul>
          {reviewsInfo.map(({ content, author, id }) => (
            <ListItemReviews key={id}>
              <TitleReviews>Author: {author}</TitleReviews>
              <ReviewsDesc>{content}</ReviewsDesc>
            </ListItemReviews>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};
