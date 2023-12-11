import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  background-color: #566573;
   background-image: linear-gradient(
      rgba(46, 47, 66, 0.8),
      rgba(46, 47, 66, 0.8)
    ),
    url(https://www.itespresso.fr/wp-content/uploads/2013/11/piraterie-streaming-france.jpg);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

ul, ol {
  margin: 0;
  padding:0;
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}
`;
