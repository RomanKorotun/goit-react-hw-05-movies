import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  HeaderSection,
  MainSection,
  NavHeader,
} from './Layout.stylled';
import { StyledNavLink } from './Layout.stylled';

export const Loyout = () => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Container>
          <NavHeader>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </NavHeader>
        </Container>
      </HeaderSection>
      <MainSection>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </MainSection>
    </React.Fragment>
  );
};
