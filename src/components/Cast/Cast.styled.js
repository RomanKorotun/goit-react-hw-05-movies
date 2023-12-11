import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

export const ListCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const ListItemCast = styled.li`
  border: 1px solid black;
  background-color: gray;
  flex-basis: calc((100% - 10px) / 2);
  @media only screen and (min-width: 768px) {
    flex-basis: calc((100% - 3 * 10px) / 4);
  }
  @media only screen and (min-width: 1200px) {
    flex-basis: calc((100% - 4 * 10px) / 5);
  }
`;

export const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;

export const BeatLoaderStyled = styled(BeatLoader)`
  text-align: center;
`;
