import styled from 'styled-components';

export const Input = styled.input`
  width: 180px;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  color: white;
  background-color: transparent;
  @media only screen and (min-width: 768px) {
    width: 280px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;

  margin-bottom: 50px;
`;

export const Button = styled.button`
  align-self: baseline;
  padding-left: 25px;
  padding-top: 10px;
  padding-right: 25px;
  padding-bottom: 10px;
  border-radius: 4px;
  color: white;
  background-color: #6495ed;
  transition: transform 250ms, background-color 250ms;

  &:hover,
  :focus {
    transform: scale(1.05);
    background-color: #1e90ff;
  }
`;
