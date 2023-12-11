import { Button, FormStyled, Input } from './Form.styled';

export const Form = ({ onSubmit }) => {
  return (
    <FormStyled
      onSubmit={evt => {
        evt.preventDefault();
        const { searchQuery } = evt.target.elements;
        onSubmit(searchQuery.value);
        evt.target.reset();
      }}
    >
      <Input name="searchQuery" type="text" />
      <Button type="submit">Search</Button>
    </FormStyled>
  );
};
