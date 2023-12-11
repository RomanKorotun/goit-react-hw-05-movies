import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

export const ListItemReviews = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const TitleReviews = styled.p`
  color: white;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ReviewsDesc = styled.p`
  color: #b3b6b7;
`;
export const BeatLoaderStyled = styled(BeatLoader)`
  text-align: center;
`;

export const ReviewsNotFound = styled.div`
  color: #b3b6b7;
`;
