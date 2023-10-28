import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const UserScore = styled.p`
  margin-bottom: 20px;
`;

export const OverwievCard = styled.div`
  margin-bottom: 20px;
`;

export const OverwievTitle = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const GenresTitle = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const AdditionalInfoCard = styled.div`
  margin-bottom: 20px;
`;

export const SubTitle = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
