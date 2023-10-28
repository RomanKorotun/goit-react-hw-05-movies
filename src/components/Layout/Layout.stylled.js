import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const HeaderSection = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 1px 1px 4px black;
`;

export const MainSection = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: red;
  }
  &:hover,
  :focus {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
