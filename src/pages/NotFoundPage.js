import { Container, MainSection } from 'components/Layout/Layout.stylled';
import { NotFoundMessage } from 'components/NotFoundMessage/NotFoundMessage';

export default function NotFoundPage() {
  return (
    <MainSection>
      <Container>
        <NotFoundMessage />
      </Container>
    </MainSection>
  );
}
