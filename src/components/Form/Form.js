import { Input } from './Form.styled';

export const Form = ({ onSubmit }) => {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        const { searchQuery } = evt.target.elements;
        onSubmit(searchQuery.value);
        evt.target.reset();
      }}
    >
      <Input name="searchQuery" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};
