import renderMovies from './renderMovies.js';

const getAPIMovies = async () => {
  const apiURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(apiURL);
  const movies = await response.json();

  renderMovies(movies);
};

export default getAPIMovies;