import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderSection } from './Layout.stylled';
import { StyledNavLink } from './Layout.stylled';

export const Loyout = () => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Container>
          <nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </nav>
        </Container>
      </HeaderSection>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </React.Fragment>
  );
};
