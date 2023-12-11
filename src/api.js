import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const serviceTrandingMovies = async () => {
  const END_POINT = '/3/trending/movie/day';
  const params = new URLSearchParams({
    api_key: '345007f9ab440e5b86cef51be6397df1',
  });
  const response = await axios.get(`${END_POINT}?${params}`);
  return response.data;
};

export const serviceSearchMovies = async (query, page) => {
  const END_POINT = '/3/search/movie';
  const params = new URLSearchParams({
    api_key: '345007f9ab440e5b86cef51be6397df1',
    query,
    page,
  });
  const response = await axios.get(`${END_POINT}?${params}`);
  return response.data;
};

export const serviceMovieDetails = async id => {
  const END_POINT = '/3/movie/';
  const params = new URLSearchParams({
    api_key: '345007f9ab440e5b86cef51be6397df1',
  });
  const response = await axios.get(`${END_POINT}${id}?${params}`);
  return response.data;
};

export const serviseCast = async id => {
  const END_POINT = `/3/movie/${id}/credits`;
  const params = new URLSearchParams({
    api_key: '345007f9ab440e5b86cef51be6397df1',
  });
  const response = await axios.get(`${END_POINT}?${params}`);
  return response.data;
};

export const serviceReviews = async id => {
  const END_POINT = `/3/movie/${id}/reviews`;
  const params = new URLSearchParams({
    api_key: '345007f9ab440e5b86cef51be6397df1',
  });
  const response = await axios.get(`${END_POINT}?${params}`);
  return response.data;
};
