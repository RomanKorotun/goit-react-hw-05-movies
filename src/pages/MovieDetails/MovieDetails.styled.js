import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

export const StyledLink = styled(Link)`
  display: flex;
  gap: 2px;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
`;

export const BeatLoaderStyled = styled(BeatLoader)`
  text-align: center;
`;
