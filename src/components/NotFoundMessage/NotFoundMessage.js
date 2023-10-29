import { Link } from 'react-router-dom';
import { Message } from './NotFoundMessage.styled';

export const NotFoundMessage = () => {
  return (
    <Message>
      Такого маршруту не знайдено, перейдіть, будь-ласка, на
      <Link to="/"> домашню сторінку!</Link>
    </Message>
  );
};
