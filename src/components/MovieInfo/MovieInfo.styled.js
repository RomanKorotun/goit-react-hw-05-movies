import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieContainer = styled.div`
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

export const Image = styled.img`
  @media only screen and (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 34px;
  @media only screen and (min-width: 1200px) {
    font-size: 40px;
  }
  margin-bottom: 10px;
  @media only screen and (min-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const ReleaseDate = styled.p`
  color: #b3b6b7;
  margin-bottom: 10px;
  @media only screen and (min-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const UserScore = styled.p`
  color: #b3b6b7;
  margin-bottom: 10px;
  @media only screen and (min-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const OverwievCard = styled.div`
  color: #b3b6b7;
  margin-bottom: 10px;
  @media only screen and (min-width: 1200px) {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 768px) {
    width: 370px;
  }
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const OverwievTitle = styled.p`
  font-size: 24px;
  color: white;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const GenresCard = styled.div`
  margin-bottom: 10px;
  @media only screen and (min-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const GenresTitle = styled.p`
  font-size: 24px;
  color: white;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const GenresList = styled.ul`
  color: #b3b6b7;
  display: flex;
  gap: 10px;
`;

export const AdditionalInfoCard = styled.div`
  color: #b3b6b7;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  color: white;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const AdditionalList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ListItem = styled.li`
  color: #1e90ff;
`;

export const NavLinkStyled = styled(NavLink)`
  color: inherit;
  display: inline-block;
  &:hover,
  :focus {
    transform: scale(1.05);
  }
  &.active {
    color: orange;
  }
`;
