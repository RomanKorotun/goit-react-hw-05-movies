import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: 1px 1px 4px black;
`;

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const MainSection = styled.section`
  padding-top: 50px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  min-width: 320px;
  max-width: 375px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  border: 1px solid black;
  border-radius: 4px;
  background-color: #6495ed;
  color: white;
  transition: transform 250ms;

  &.active {
    color: orange;
    background-color: #1e90ff;
  }
  &:hover,
  :focus {
    transform: scale(1.05);
    background-color: #1e90ff;
  }

  @media only screen and (max-width: 767px) {
    font-size: 18px;
    padding-left: 40px;
    padding-top: 10px;
    padding-right: 40px;
    padding-bottom: 10px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    padding-left: 50px;
    padding-top: 10px;
    padding-right: 50px;
    padding-bottom: 10px;
  }
`;
