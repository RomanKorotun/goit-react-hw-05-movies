import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Message = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;

  @media only screen and (min-width: 428px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 50px;
  }
`;

export const LinkStyled = styled(Link)`
  transition: text-decoration 250ms, transform 250ms;
  display: inline-block;
  color: orange;
  &:hover,
  :focus {
    text-decoration: underline;
    transform: scale(1.05);
  }
`;
