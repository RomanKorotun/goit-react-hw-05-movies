import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  border-radius: 5px;
  overflow: hidden;
  transition: transform 250ms, box-shadow 250ms;
  &:hover,
  :focus {
    box-shadow: 1px 1px 10px 8px black;
    transform: scale(1.02);
  }

  @media only screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 15px) / 3);
  }

  @media only screen and (min-width: 1200px) {
    flex-basis: calc((100% - 3 * 15px) / 4);
  }
`;
