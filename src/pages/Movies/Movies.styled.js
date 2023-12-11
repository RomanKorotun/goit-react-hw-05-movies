import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  background-color: #6495ed;
  color: white;
  transition: transform 250ms;

  &:hover,
  :focus {
    transform: scale(1.05);
    background-color: #1e90ff;
  }

  @media only screen and (max-width: 767px) {
    font-size: 18px;
    padding-left: 20px;
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    padding-left: 30px;
    padding-top: 10px;
    padding-right: 30px;
    padding-bottom: 10px;
  }
`;

export const BeatLoaderStyled = styled(BeatLoader)`
  margin-top: 70px;
  text-align: center;
`;

export const Info = styled.div`
  text-align: center;
  color: white;
  font-size: 30px;
  @media only screen and (min-width: 428px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 50px;
  }
`;
