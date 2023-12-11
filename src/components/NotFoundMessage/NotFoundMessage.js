import { Container, MainSection } from 'components/Layout/Layout.stylled';
import { LinkStyled, Message } from './NotFoundMessage.styled';

export const NotFoundMessage = () => {
  return (
    <MainSection>
      <Container>
        <Message>
          No such route was found, please go to&nbsp;
          <LinkStyled to="/">home page!</LinkStyled>
        </Message>
      </Container>
    </MainSection>
  );
};
